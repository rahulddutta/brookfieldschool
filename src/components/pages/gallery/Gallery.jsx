import { SRLWrapper } from "simple-react-lightbox";
import "./gallery.css";
import Ten from "../../images/10.jpg";
import Nine from "../../images/9.jpg";
import Eight from "../../images/8.jpg";
import Seven from "../../images/7.jpg";
import Six from "../../images/6.jpg";
import Five from "../../images/5.jpg";
import Four from "../../images/4.jpg";
import Three from "../../images/3.jpg";
import Two from "../../images/2.jpg";
import One from "../../images/1.jpg";
import Upper from "../../images/Upper.jpg";
import Lower from "../../images/Lower.jpg";
import Nursery from "../../images/Nursery.jpg";




export default function Gallery() {
  return (
    <SRLWrapper>
      <div className="gallery">
        <div className="title">Gallery of Brookfield School</div>
        <div class="outer-grid">
          <div class="inner-grid">
            <a href={Ten}>
            <img className="photo" src={Ten}  alt="Class 10"/>
            </a>
            <a href={Eight}>
            <img src={Eight}  alt="Class 8"/>
            </a>
            <a href={Six}>
            <img src={Six}  alt="Class 6"/>
            </a>
            <a href={Four}>
            <img src={Four}  alt="Class 4"/>
            </a>
            <a href={Two}>
            <img src={Two}  alt="Class 2"/>
            </a>
            <a href={Upper}>
            <img src={Upper}  alt="Upper KG"/>
            </a>
            <a href={Nursery}>
            <img src={Nursery}  alt="Upper KG"/>
            </a>
          </div>
          <div class="inner-grid">
          <a href={Nine}>
            <img src={Nine}  alt="Class 9"/>
            </a>
            <a href={Seven}>
            <img src={Seven}  alt="Class 7"/>
            </a>
            <a href={Five}>
            <img src={Five}  alt="Class 5"/>
            </a>
            <a href={Three}>
            <img src={Three}  alt="Class 3"/>
            </a>
            <a href={One}>
            <img src={One}  alt="Class 1"/>
            </a>
            <a href={Lower}>
            <img src={Lower}  alt="Class 1"/>
            </a>
          </div>
        </div>
      </div>
    </SRLWrapper>
  );
}
