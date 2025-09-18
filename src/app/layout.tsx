import '../styles/globals.css'
import React from "react";

function convertCurrency(amount: number, currency: string){
  console.log(amount, currency);
}

convertCurrency(150, "USD");



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
