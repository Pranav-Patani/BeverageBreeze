import bgVid from "../bg-cover-vid.mp4";

export const BgVideo = () => (
  <div className="bg-video">
    <video className="bg-video__content" autoPlay muted loop>
      <source src={bgVid} type="video/mp4" />
      Your browser is not supported!
    </video>
  </div>
);
