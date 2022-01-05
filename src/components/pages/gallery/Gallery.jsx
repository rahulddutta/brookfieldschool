import { SRLWrapper } from "simple-react-lightbox";




export default function Gallery() {
 
  return (
    <SRLWrapper>
      <div className="Gallery">
      <a href="https://picsum.photos/1024/768?image=2">
         <img src="https://picsum.photos/200/300?image=2" alt="lightbox" />
       </a>
       <a href="https://picsum.photos/1024/768?image=3">
         <img src="https://picsum.photos/200/300?image=3" alt="lightbox1" />
       </a>
       <a href="https://picsum.photos/1024/768?image=4">
         <img src="https://picsum.photos/200/300?image=4" alt="lightbox2" />
       </a>
       <a href="https://picsum.photos/1024/768?image=5">
         <img src="https://picsum.photos/200/300?image=5" alt="lightbox3" />
       </a>
      </div>
    </SRLWrapper>
  );
}
