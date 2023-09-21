import React from 'react'
import "./Splash.css"
import { StaticImage } from "gatsby-plugin-image"


function Splash() {
    return (
    <div>
        <section class="splash">
            <div>
                <StaticImage
                            src="../../images/healthecco-full.png"
                            loading="eager"
                            width={750}
                            quality={95}
                            formats={["auto", "webp", "avif"]}
                            alt=""
                        />
            </div>
            <div class="banner">
                <h1> So long and thanks for all the nodes</h1>
                <p>The CovidGraph and HealthECCO projects have now concluded. After three award-winning years we have made the difficult decision to archive the projects. In March 2020, a collection of global volunteers, enthusiasts and organisations started building a knowledge graph as a response to the pandemic by combining a number of public data sources including PubMed articles, patent data, clinical trials and biomedical concepts. The result of this collaboration was CovidGraph.</p>
                <p>We would like to thank everyone who has contributed and supported us over the years.  If you have any residual questions, or are working with our code, please feel free to get in touch! </p>
                <p>HealthECCO was the logical extension of CovidGraph and was initially envisioned as a non-profit framework that would foster collaboration and innovation. And indeed, the connections made between contributors have sparked new ideas, new projects and new friendships. Our repositories and code are still accessible on GitHub.  </p>
                <p>Although we are formally archiving CovidGraph and HealthECCO those sparks will continue to burn.</p>
            </div>
        </section>
    </div>
    )
    }

export default Splash