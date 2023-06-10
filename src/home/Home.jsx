import Navbar from "../HeaderFooter/Navbar";

import Banner from "./Banner";
// import Xtra1 from "./Xtra1";
// import Xtra2 from "./Xtra2";
import Cardclass from "./card/Cardclass";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>

      <Cardclass></Cardclass>
      {/* <Xtra1 />
      <Xtra2></Xtra2>
      <Axios></Axios> */}
    </div>
  );
};

export default Home;
