export const metadata = {
  title: 'Terms of Service - Bhartee AI',
  description: 'Terms of Service for Bhartee AI',
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
