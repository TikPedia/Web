import './globals.css'
import { Inter } from 'next/font/google'
import {ThemeProvider} from "@/components/theme-provider";
import {NextAuthProvider} from "@/app/providers";
import {cn} from "@/lib/utils";

const inter = Inter({ subsets: ['latin'] })

import React from "react";

export const metadata = {
  title: 'TikPedia',
  description: 'TikPedia is a SaaS platform for creating and managing video content produced by AI.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter
      )}>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <NextAuthProvider>
          <div className="flex flex-col">
              {children}
          </div>
          </NextAuthProvider>
      </ThemeProvider>
      </body>
    </html>
  )
}
