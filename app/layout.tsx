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
import { Inter, Architects_Daughter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const architects_daughter = Architects_Daughter({
  subsets: ["latin"],
  variable: "--font-architects-daughter",
  weight: "400",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${architects_daughter.variable} overflow-x-hidden`}
      >
        {/* <PageIllustration /> */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
