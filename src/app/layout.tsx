import './globals.css';

import Footer from '../components/Footer';

export const metadata = {
  title: 'Construction Site',
  description: 'A modern construction site website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
