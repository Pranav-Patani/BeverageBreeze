import bgCoverImg from "../bg-cover-img.webp";

function BgImg() {
  return (
    <img
      src={bgCoverImg}
      alt="background"
      onLoad={() => console.log("Fallback image loaded")}
      className="bg-img"
    />
  );
}

export default BgImg;
