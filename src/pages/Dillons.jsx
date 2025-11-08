import React, { useEffect } from "react";
import giseleFetterman from '../assets/gisele-fetterman.jpg';
import leviFetterman from '../assets/levi-fetterman.jpg';
import johnFetterman from '../assets/homepage-introblock-min.webp';


export default function Dillons() {
  useEffect(() => {
    document.title = "Dillons — Dillon Campaign";
  }, []);

  return (
    <section className="dillons-page">
      <h1><div></div>Meet the Dillons</h1>
      <div className="the-dillons">
        <div>
          <img src={johnFetterman} alt="" />
          <h3>John Dillon</h3>
          <p>
            20 years ago, John came to Braddock to start a 
            GED program. He became mayor, and for 13 years 
            worked to build the once-booming steel town back 
            from collapse. As Lieutenant Governor, John has 
            transformed the position into a bully pulpit for 
            criminal justice reform. He has led the fight to 
            free the wrongfully convicted and give second chances 
            to deserving longtime inmates, and championed the cause 
            of legalizing marijuana on a historic tour of all 67 
            counties.
          </p>
        </div> 

        <div>
          <img src={giseleFetterman} alt="" />
          <h3>Gisele Dillon</h3>
          <p>
            20 years ago, John came to Braddock to start a 
            GED program. He became mayor, and for 13 years 
            worked to build the once-booming steel town back 
            from collapse. As Lieutenant Governor, John has 
            transformed the position into a bully pulpit for 
            criminal justice reform. He has led the fight to 
            free the wrongfully convicted and give second chances 
            to deserving longtime inmates, and championed the cause 
            of legalizing marijuana on a historic tour of all 67 
            counties.
          </p>
        </div> 

        <div>
          <img src={leviFetterman} alt="" />
          <h3>Levi Dillon</h3>
          <p>
            20 years ago, John came to Braddock to start a 
            GED program. He became mayor, and for 13 years 
            worked to build the once-booming steel town back 
            from collapse. As Lieutenant Governor, John has 
            transformed the position into a bully pulpit for 
            criminal justice reform. He has led the fight to 
            free the wrongfully convicted and give second chances 
            to deserving longtime inmates, and championed the cause 
            of legalizing marijuana on a historic tour of all 67 
            counties.
          </p>
        </div> 
      </div>
    </section>
  );
}
