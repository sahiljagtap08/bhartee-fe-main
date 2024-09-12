export const metadata = {
  title: 'Careers - Bhartee AI',
  description: 'Join our team at Bhartee AI and shape the future of AI-powered recruitment solutions',
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
