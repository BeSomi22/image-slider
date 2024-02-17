import ImageSlider from "./slider-images.js";
import "./App.css";
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";
import img4 from "./img/img4.jpg";
import img5 from "./img/img5.jpg";

function App() {
  const Images = [img1, img2, img3, img4, img5];

  return (
    <div
      style={{
        maxWidth: "1200px",
        width: "100%",
        aspectRatio: "10 /6",
        margin: "0 auto",
      }}
    >
      <ImageSlider imageUrls={Images} />
    </div>
  );
}

export default App;
