
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import Carousal from '../Component/Carousal';
import WithoutFilterHome from '../Component/WithoutFilterHome';
import WithFilter from '../Component/FilterHome';
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
