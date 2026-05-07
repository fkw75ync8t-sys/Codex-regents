import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Matchmanager Dashboard Prototype',
  description: 'Front-end prototype for Matchmanager owner dashboard',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
