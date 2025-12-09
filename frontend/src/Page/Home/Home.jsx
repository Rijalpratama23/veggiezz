import Header from '../../Components/Header';
import ContentHome from './ContentHome';
import Categori from '../../Components/Home/Categori';
import PopularProduct from '../../Components/Home/PopularProduct';

const Home = () => {

  return (
    <div className="min-h-screen pb-5 md:pb-10 w-full secondary">
      <Header />
      <ContentHome />
      <Categori />
      <PopularProduct />

    </div>
  );
};

export default Home;
