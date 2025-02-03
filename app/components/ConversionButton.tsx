'use client'

export default function ConversionButton() {
  return (
    <p 
      className="text-sm font-semibold text-gray-700"
      onClick={() => {
        const url = new URL(window.location.href);
        url.searchParams.set('conversion', 'true');
        window.history.pushState({}, '', url);
      }}
    >
      Try Convo for Free
    </p>
  )
} 