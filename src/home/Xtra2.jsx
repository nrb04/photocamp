import LiquidSwipe from "react-liquidswipe";

let components = [
  <img key={1} src="/swipe/sw12.jpg" alt="Image 1" />,
  <img key={2} src="/swipe/sw11.jpg" alt="Image 2" />,
  <img key={3} src="/swipe/sw13.jpg" alt="Image 3" />,
];

const Xtra2 = () => {
  return (
    <div className="container">
      {" "}
      <div className="w-11/12 h-96 mb-20 mx-auto">
        <LiquidSwipe
          components={components}
          enableMouseSwipe
          enableTouchSwipe
          style={{
            height: "100vh",
            width: "90vw",
            borderRadius: "20px",
          }}
        />
      </div>
    </div>
  );
};

export default Xtra2;
