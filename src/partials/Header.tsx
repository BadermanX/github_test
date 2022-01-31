import * as React from "react";
import Section from "./Section"
import Banner from "./Banner"

export default () => {
    return (
        <div>
           <Section
                backgroundColor= "rgba(3,30,50,.85)"
                backgroundImage="./assets/images/a.jpg"
                className="siteHeader"
           > 
                <Banner
                    title="Search GitHub"
                    body=""
                   
                />
           </Section>
        </div>
    );
}