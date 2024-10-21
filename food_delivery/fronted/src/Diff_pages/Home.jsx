
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import Carousal from '../component/Carousal';
import WithoutFilterHome from '../component/WithoutFilterHome';



export default function Home() {
 

  return (
    <>
      <Navbar />
      <Carousal />
      <WithoutFilterHome ></WithoutFilterHome>
      
      <Footer />
    </>
  );
}
