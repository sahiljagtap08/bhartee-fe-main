import React from 'react';

export const metadata = {
  title: 'Privacy Policy - Bhartee AI',
  description: 'Privacy Policy for Bhartee AI',
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
