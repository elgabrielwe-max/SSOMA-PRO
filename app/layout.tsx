import "./globals.css";

export const metadata = {
  title: "SSOMA PRO",
  description: "Sistema integral de gestión SSOMA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
