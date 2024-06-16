import pic1 from '../images/background/50jpg.jpg';
const componentStyle = {
    backgroundImage: `url(${pic1})`,
    backgroundSize: 'cover', // גודל התמונה יכסה את כל רוחב הקומפוננטה
    height: '100vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '50px',
  };
  
export default function About()
{
    return (
      
      <div id="" style={componentStyle}>
        <div className="container">
      <h1 id="story">OUR STORY</h1>
     <b ><p id="aboutT">
     Iceleek ice cream parlor, the nostalgic favorite chain, was established in 1991 and began its journey in the Jerusalem pedestrian street. Today, the chain has about 32 branches throughout the country.

Iceleek presents the "Amusement Park of Flavors" experience and invites you to enjoy our special whipped cream for free on most of our products.

Our varied menu includes quality ice creams, yogurts, frozen yogurt, milkshakes, fruit shakes and indulgent ices.

You are also invited to enjoy hot desserts such as Belgian waffles and French crepes, prepared on the spot in front of your eyes with a variety of unusual toppings!

In addition, we specialize in making ice cream cakes made from 100% ice cream, including special decorations and unique dedications in a variety of flavors and sizes. To order a personalized cake for an event or simply to surprise your loved ones.

* Online kosher: strictly kosher
All products are under the supervision of Rabbi Rubin and the Jerusalem ultra-Orthodox congregation.
      </p></b> 
      </div>
      </div>

    )
}