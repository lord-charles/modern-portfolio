import './globals.css';
import '@/node_modules/react-modal-video/scss/modal-video.scss';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';
import PageIllustration from './components/page-illustration';


export const metadata = {
  title: 'Charles Mwaniki',
  description: 'portfolio',
  icons: {
    icon: '/logo.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        {/* <PageIllustration /> */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
