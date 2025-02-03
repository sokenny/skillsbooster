'use client'

import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

export default function SignInPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    setIsModalOpen(searchParams.get('modalOpen') === 'true')
  }, [searchParams])

  const openModal = () => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('modalOpen', 'true')
    router.push(`?${params.toString()}`)
  }

  const closeModal = () => {
    const params = new URLSearchParams(searchParams.toString())
    params.delete('modalOpen')
    router.push(`?${params.toString()}`)
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'absolute left-4 top-4'
        )}
      >
        ← Back
      </Link>
      
      <h1 
        onClick={openModal}
        className="text-4xl font-bold cursor-pointer hover:opacity-80"
      >
        SIGN IN
      </h1>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg relative">
            <button 
              onClick={closeModal}
              className="absolute right-4 top-4"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-4">Sign In</h2>
            <div className="space-y-4">
              <p>Your sign-in form content would go here</p>
              <button className="px-4 py-2 bg-blue-500 text-white rounded">
                Sign In
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}