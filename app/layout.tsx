import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import { cn } from "@/lib/utils";
import "./globals.css";

export const metadata: Metadata = {
  title: "Convo | Language Learning",
  description: "Speech focused language learning",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
     
      <head>        
        <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
!function(){var e="body {opacity: 0 !important;}",t=document.createElement("style");t.type="text/css",t.id="page-hide-style",t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e)),document.head.appendChild(t),window.rmo=function(){var e=document.getElementById("page-hide-style");e&&(e.parentNode.removeChild(e),document.body.style.opacity="")},setTimeout(window.rmo,2e3)}();
            `,
        }}
      />

<link rel="preconnect" href="https://d3niuqph2rteir.cloudfront.net" />
<link rel="dns-prefetch" href="https://d3niuqph2rteir.cloudfront.net" />
<script async src="https://d3niuqph2rteir.cloudfront.net/client_js/stellar.js?apiKey=29789842beb5424e94219586f8490ba8:41f8e63fa8271d9a21af055c8be5433b31c3758e11d3ec3aed0f50b6da2a0bd3"></script>

 </head>

      <body
        className={cn(
          "grainy flex min-h-screen flex-col font-sans antialiased",
          GeistSans.className,
        )}
      >
        {children}
      </body>
    </html>
  );
}
