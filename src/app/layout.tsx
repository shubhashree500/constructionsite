import './globals.css';
import Navbar from '../components/Navbar'; // Import the Navbar component
import Footer from '../components/Footer';

export const metadata = {
  title: 'Construction Site',
  description: 'A modern construction site website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 text-gray-900">
        {/* Wrapper for consistent spacing and alignment */}
        <div className="flex flex-col min-h-screen">
          {/* Navbar */}
          <Navbar />

          {/* Main Content */}
          <main className="flex-grow">
            {children}
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
