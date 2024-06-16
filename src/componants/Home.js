import pic1 from '../images/background/colorful-summer-treat-melting-ice-cream-generative-ai_188544-12424.webp';
import pic2 from'../images/background/1.jpg';
import pic3 from'../images/background/2.jpg';
import pic4 from'../images/background/9.jpg';
import pic5 from'../images/background/12.jpg';
import pic6 from'../images/background/21.webp';
import pic7 from'../images/background/4 (2).webp';
import pic8 from'../images/background/38.jpg';
import pic9 from'../images/background/41.jpg';

import { useEffect, useState } from 'react';
// import { useNavigate } from "react-router-dom";
export default function Home()
{
  // const navigate =useNavigate()
  const images = [pic1, pic7,pic8,pic9]; // רשימת תמונות
  const [currentImage, setCurrentImage] = useState(0); // משתנה לאחסון התמונה הנוכחית

  useEffect(() => {
      const timer = setTimeout(() => {
          setCurrentImage((prevImage) => (prevImage + 1) % images.length);
      }, 3000); // משנה תמונה כל 2 שניות

      return () => clearTimeout(timer);
  }, [currentImage]);
    return(
        <>
       
       <img id="logo" className="card-img-top" src={images[currentImage]} alt="" />
          <div id="allPic">
          <b><h1 id ="ti">LUNA PARK OF FLAVORS</h1></b>
          
        <div >
        <img id="pic" class="card-img-top" src={pic2} alt="" />
        {/* <br></br> */}
        
          <img id="pic" class="card-img-top" src={pic3} alt="" />
          {/* <small></small> */}
          <img id="pic" class="card-img-top" src={pic4} alt="" />
          <img id="pic" class="card-img-top" src={pic5} alt="" />
          <img id="pic" class="card-img-top" src={pic6} alt="" />
        </div>
        {/* <small id="names">Ice creams scoops</small> */}
        </div>
          {/* <button onClick={()=>navigate("/ProductPresentation")}></button> */}

        </>
    )
}