import '@/app/ui/global.css';
import { robotto } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${robotto.className} bg-black antialiased`}>
        {children}
      </body>
    </html>
  );
}
