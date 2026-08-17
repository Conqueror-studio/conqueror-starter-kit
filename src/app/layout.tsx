import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Conqueror Studio Starter',
  description: 'Content-led digital atelier starter.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang='en'><body>{children}</body></html>;
}
