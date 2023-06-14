import Banner from "./Banner";
import Xtra1 from "./Xtra1";
// import Xtra2 from "./Xtra2";
import Cardclass from "./card/Cardclass";
import Userclass from "./card/Userclass";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      {/* <Xtra2></Xtra2> */}
      <Cardclass></Cardclass>
      <Xtra1 />
      <Userclass></Userclass>
    </div>
  );
};

export default Home;
