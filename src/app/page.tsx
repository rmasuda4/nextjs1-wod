import 'bootstrap/dist/css/bootstrap.min.css';
import TopMenu from '@/components/TopMenu';
import CenterText from '@/components/CenterText';
import Footer from '@/components/Footer';

const Home = () => (
  <main className="d-flex flex-column min-vh-100">
    <TopMenu />
    <CenterText />
    <Footer />
  </main>
);

export default Home;
