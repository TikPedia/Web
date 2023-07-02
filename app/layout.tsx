import './globals.css'
import { Inter } from 'next/font/google'
import {ThemeProvider} from "@/components/theme-provider";
import {NextAuthProvider} from "@/app/providers";

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>
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
