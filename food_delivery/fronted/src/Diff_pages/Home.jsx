
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import Carousal from '../component/Carousal';
// import WithoutFilterHome from '../component/WithoutFilterHome';
import WithFilter from '../component/FilterHome';
import { useSelector } from 'react-redux';



export default function Home() {
  const changeprice = useSelector((state) => state.filterprice.filterprice)
 console.log(changeprice)

  return (
    <>
      <Navbar />
      <Carousal />
      <WithFilter />
      <Footer />
    </>
  );
}
