
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import Carousal from '../Component/Carousal';
import WithoutFilterHome from '../Component/WithoutFilterHome';
import WithFilter from '../Component/FilterHome';
import { useSelector } from 'react-redux';



export default function Home() {
  const FilterPrice = useSelector((state) => state.Filter?.filterprice)
  const FilterCategory = useSelector((state) => state.Filter?.foodcat)
  console.log(FilterPrice,"opo")
  console.log(FilterCategory,"ddd")
  return (
    <>
      <Navbar />
      <Carousal />
      {
        (FilterPrice === 0 || FilterCategory === "All Food") ? <WithoutFilterHome /> : <WithFilter />
      }

      <Footer />
    </>
  );
}
