import '../styles/globals.css'
import '../styles/locomotivebase.css'
import React from "react";

export const metadata = {
  title: 'Dr Vladimir',
  description: 'Diagnostic imaging services with modern equipment',
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
