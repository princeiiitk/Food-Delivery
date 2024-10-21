
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import Carousal from '../component/Carousal';
import WithoutFilterHome from '../component/WithoutFilterHome';
import WithFilter from '../component/FilterHome';
import { useSelector } from 'react-redux';



export default function Home() {
  const changeprice = useSelector((state) => state.filterprice.filterprice)
  const changecategory = useSelector((state) => state.filterprice)?.foodcat

 
  return (
    <>
      <Navbar />
      <Carousal />
      {
        (changeprice === 0 || changecategory === "All Food") ? <WithoutFilterHome /> : <WithFilter />
      }
      
      <Footer />
    </>
  );
}
