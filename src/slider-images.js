import { useState } from "react";

const sliderStyle = {
  height: "100%",
  position: "relative",
};

function ImageSlider({ imageUrls }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleClickNext = () => {
    const isLast = currentIndex === imageUrls.length - 1;
    const newIndex = isLast ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const handleClickPrevious = () => {
    const isFirst = currentIndex === 0;
    const newIndex = isFirst ? imageUrls.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  return (
    <div style={sliderStyle}>
      <div>
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            overflow: "hidden",
          }}
        >
          {imageUrls.map((url) => (
            <img
              src={url}
              key={url}
              alt="images"
              style={{ translate: `${-100 * currentIndex}% ` }}
              className="img-slider"
            />
          ))}
        </div>
        <button
          style={{ left: "0" }}
          className="btn"
          onClick={handleClickPrevious}
        >
          <svg viewBox="0 0 256 512" width="20" title="angle-left">
            <path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z" />
          </svg>
        </button>
        {/* <img src={imageUrls[currentIndex]} alt="images" className="img-slider" /> */}
        <button
          style={{ right: "0" }}
          className="btn"
          onClick={handleClickNext}
        >
          <svg viewBox="0 0 256 512" width="20" title="angle-right">
            <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
          </svg>
        </button>
        <div
          style={{
            position: "absolute",
            bottom: "50px",
            translate: "-50%",
            left: "50%",
            gap: "25px",
          }}
        >
          {imageUrls.map((_, index) => (
            <button
              className="btn-dot"
              key={index}
              onClick={() => setCurrentIndex(index)}
            >
              {index === currentIndex ? (
                <svg viewBox="0 0 512 512" width="17" title="circle">
                  <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z" />
                </svg>
              ) : (
                <svg viewBox="0 0 512 512" width="17" title="circle-notch">
                  <path d="M288 39.056v16.659c0 10.804 7.281 20.159 17.686 23.066C383.204 100.434 440 171.518 440 256c0 101.689-82.295 184-184 184-101.689 0-184-82.295-184-184 0-84.47 56.786-155.564 134.312-177.219C216.719 75.874 224 66.517 224 55.712V39.064c0-15.709-14.834-27.153-30.046-23.234C86.603 43.482 7.394 141.206 8.003 257.332c.72 137.052 111.477 246.956 248.531 246.667C393.255 503.711 504 392.788 504 256c0-115.633-79.14-212.779-186.211-240.236C302.678 11.889 288 23.456 288 39.056z" />
                </svg>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
export default ImageSlider;
