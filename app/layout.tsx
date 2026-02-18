import type { Metadata } from 'next';
import './globals.css';
import DemoBanner from '@/components/layout/DemoBanner';

export const metadata: Metadata = {
  title: 'VitalPath | Science-Backed GLP-2 Weight Management',
  description: 'FDA-informed GLP-2 peptide therapy with board-certified physicians. Start your transformation with a free consultation.',
  keywords: 'GLP-2, weight loss, telehealth, semaglutide, weight management, peptide therapy',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-background">
        <DemoBanner />
        <div className="pt-10">
          {children}
        </div>
      </body>
    </html>
  );
}
