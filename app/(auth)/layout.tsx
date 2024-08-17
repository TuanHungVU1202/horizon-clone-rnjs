export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
      return (
          <main>
              AUTH PAGE WITHOUT SIDEBAR
              {children}
          </main>
      )
  }