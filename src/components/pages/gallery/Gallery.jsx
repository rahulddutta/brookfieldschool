import { SRLWrapper } from "simple-react-lightbox";
import "./gallery.css";
import Ten from "../../images/10.jpg";
import Nine from "../../images/9.jpg";
import Eight from "../../images/8.jpg";
import Seven from "../../images/7.jpg";
import Six from "../../images/6.jpg";
import Five from "../../images/5.jpg";






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
          </div>
        </div>
      </div>
    </SRLWrapper>
  );
}
