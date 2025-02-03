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


     {/* <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
!function(){var e="body > * {opacity: 0 !important;}",t=document.createElement("style");t.type="text/css",t.id="page-hide-style",t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e)),document.head.appendChild(t),window.rmo=function(){var e=document.getElementById("page-hide-style");e&&(e.parentNode.removeChild(e),document.body.style.opacity="")},setTimeout(window.rmo,2e3)}();
            `,
        }}
      />
      <link rel="preconnect" href="http://localhost:3001" />
      <link rel="dns-prefetch" href="http://localhost:3001" />
      <script
        async
        src="http://localhost:3001/public/clientjs?apiKey=7992e892e0a1fb614265013d30287d56:0d4def7264ff2a5bf000be101868605c026a662e3ae571f27fcfe7c09b85662c"
      ></script> */}

        
  <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
!function(){var e="body {opacity: 0 !important;}",t=document.createElement("style");t.type="text/css",t.id="page-hide-style",t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e)),document.head.appendChild(t),window.rmo=function(){var e=document.getElementById("page-hide-style");e&&(e.parentNode.removeChild(e),document.body.style.opacity="")},setTimeout(window.rmo,2e3)}();
            `,
        }}
      />
{/* <link rel="preconnect" href="http://localhost:3001" />
<link rel="dns-prefetch" href="http://localhost:3001" /> */}
{/* <script async src="http://localhost:3001/public/clientjs?apiKey=efd8d5c46ebba908b3d937aa8c620905:2e696ce42ada9f662f76270be300f49991cb2423389b0bef9159b57a56c5bf86"></script> */}
{/* <script async src="http://localhost:3001/public/clientjs?apiKey=efd8d5c46ebba908b3d937aa8c620905:2e696ce42ada9f662f76270be300f49991cb2423389b0bef9159b57a56c5bf86"></script> */}
{/* <script async src="https://d3niuqph2rteir.cloudfront.net/client_js/stellar.js?apiKey=fe65963970f8b88bb25a1ba2efbee978:31deec47ddcd4a13f90c5313a63b91291d9caf86e09c95390b0e9655d97e2871"></script> */}


  <link rel="preconnect" href="https://d3niuqph2rteir.cloudfront.net" />
<link rel="dns-prefetch" href="https://d3niuqph2rteir.cloudfront.net" />
<script async src="http://localhost:3001/public/clientjs?apiKey=a44f4e36b6281dd664e112dc82e7f686:32e68f56122a800d779c517d2242c69b50f432cc42adcb421e82ba762ec5833e"></script>
{/* <script async src="https://d3niuqph2rteir.cloudfront.net/client_js/stellar.js?apiKey=29760eb8d05b14779a48eb98a6b330dc:65f2a8bfd7395da4025368b1a026a9ce8642c0f0ffaa22110190297ba918105b"></script> */}


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
