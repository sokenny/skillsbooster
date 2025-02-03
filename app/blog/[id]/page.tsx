import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import styles from "./page.module.css"

export default function Home({params}: {params: {id: string}}) {
    const blogId = params.id
  return (
    <>
      <Navbar />

      {/* Hero */}
      <MaxWidthWrapper className="mt-10 flex flex-col items-center justify-center text-center sm:mt-12">
        <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
          <p className="text-sm font-semibold text-gray-700">
            Try Convo for Free
          </p>
        </div>

        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
         BLOG! {blogId}
        </h1>

        <h2 className={`mt-5 max-w-prose text-lg text-zinc-700 sm:text-2xl ${styles.achedos}`}>
          This is a blog brother
        </h2>

        <Link
          className={cn(
            buttonVariants({
              size: "lg",
              className: "mt-5",
            }),
            "text-lg",
          )}
          href={"/dashboard"}
        >
          <button>
          Start Speaking Now
          </button>
        </Link>
      </MaxWidthWrapper>

    

      <Footer />
    </>
  );
}
