import React from 'react'

export const About = () => {
  return (
    <div id="about">
         <h2 class="about">About Our Family</h2>
         <p class="about">We've been cultivating our craft since 1990 and we continue to improve on it! Our love for coffee has taken us to many different places around the world and this has allowed us to create the perfect blends that you enjoy.</p>
         <hr />
         <div class="iconFlex">
             <div class="cardContainer" id="icon1">
                 <i class="fas fa-coffee"></i>
             </div>
             <span class="desc1">Our blends are specially made from countries around the world for your enjoyment. We have a blend for everyone!</span>
 
             <div class="cardContainer" id="icon2">
                 <i class="fas fa-globe-americas"></i>
             </div>
             <span class="desc2">We only source high quality beans from countries all over the world. Some of our favorites countries are: Peru, Costa Rica, South Africa, and many more.</span>

            <div class="cardContainer" id="icon3">
                 <i class="fas fa-shipping-fast"></i>
             </div> 
             <span class="desc3">Coffee is our passion, and we know that you love our coffee. All of our beans are roasted and immediately shipped to your front door so that you can enjoy the best cup of coffee, your way.</span>
         </div>
         <hr />

         
 
     </div>
  )
}
