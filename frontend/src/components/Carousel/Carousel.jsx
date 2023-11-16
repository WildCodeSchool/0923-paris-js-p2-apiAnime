import "./Carousel.css";
import assassination from "../../assets/assassination.jpg";
import eren from "../../assets/eren.jpg";
import bleach from "../../assets/bleach.jpg";
import death from "../../assets/death.jpg";
import goku from "../../assets/goku.jpg";
import luffy from "../../assets/luffy.jpg";
import iriyajo from "../../assets/Iriyajo.jpg";

function Carousel() {
  return (
    <center className="Carousel">
      <div className="box">
        <span className="onepics">
          <img src={bleach} alt="" />
        </span>
        <span className="twopics">
          <img src={eren} alt="" />
        </span>
        <span className="threepics">
          <img src={assassination} alt="" />
        </span>
        <span className="fourpics">
          <img src={goku} alt="" />
        </span>
        <span className="fivepics">
          <img src={luffy} alt="" />
        </span>
        <div className="iri">
          <img src={iriyajo} alt="" />
        </div>
        <span className="sixpics">
          <img src={death} alt="" />
        </span>
      </div>
    </center>
  );
}
export default Carousel;
