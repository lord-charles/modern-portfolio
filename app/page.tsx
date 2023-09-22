import Banner from './components/Banner/index';
import Companies from './components/Companies/index';
import Work from './components/Work/index';
import Table from './components/Table/index';
import Features from './components/Features/index';
import Simple from './components/Simple/index';
import Trade from './components/Trade/index';
import Faq from './components/Faq/index';
import Zigzag from "./components/zigzag";

export default function Home() {
  return (
    <main>
      <Banner />
      <Companies />
      <Work />
      <Table />
      <Features />
      <Zigzag />
      <Simple />
      <Trade />
      <Faq />
    </main>
  );
}
