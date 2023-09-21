import React from 'react'
import "./TeamSection.css"
import { StaticImage } from "gatsby-plugin-image"


function TeamSection() {
    return (
    <div>
       <h1>Keep in Touch</h1>
       <section class="container">
       <div class="card red">
            <a href="https://www.linkedin.com/in/dr-alexander-jarasch-b4b46b68" target="_blank" rel="noreferrer">
                <div>
                <StaticImage
                    src="../../images/alexj.png"
                    loading="eager"
                    width={400}
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt=""
                />
                </div>
                <div class="caption">
                    <h3>Dr Alexander Jarasch</h3>
                    <p> Co-Founder</p>
                </div>
            </a>
        </div>
        <div class="card yellow">
            <a href="https://www.linkedin.com/in/martinpreusse" target="_blank" rel="noreferrer">
                    <div>
                    <StaticImage
                        src="../../images/martin.png"
                        loading="eager"
                        width={400}
                        quality={95}
                        formats={["auto", "webp", "avif"]}
                        alt=""
                    />
                    </div>
                    <div class="caption">
                        <h3>Martin Preusse</h3>
                        <p> Co-Founder</p>
                </div>
            </a>
        </div>
        <div class="card blue">
            <a href="https://www.linkedin.com/in/alexander-erdl" target="_blank" rel="noreferrer">
                    <div>
                    <StaticImage
                        src="../../images/alexe.png"
                        loading="eager"
                        width={400}
                        quality={95}
                        formats={["auto", "webp", "avif"]}
                        alt=""
                    />
                    </div>
                    <div class="caption">
                        <h3>Alexander Erdl</h3>
                        <p>Marketing</p>
                    </div>
            </a>
        </div>
        <div class="card purple">
            <a href="https://www.linkedin.com/in/timbleimehl" target="_blank" rel="noreferrer">
                    <div>
                    <StaticImage
                        src="../../images/tim.png"
                        loading="eager"
                        width={400}
                        quality={95}
                        formats={["auto", "webp", "avif"]}
                        alt=""
                    />
                    </div>
                    <div class="caption">
                        <h3>Tim Bleimehl</h3>
                        <p>Development</p>
                    </div>
            </a>
        </div>
        <div class="card green">
            <a href="https://www.linkedin.com/in/jirosmunro/" target="_blank" rel="noreferrer">
                    <div>
                    <StaticImage
                        src="../../images/jamie.png"
                        loading="eager"
                        width={400}
                        quality={95}
                        formats={["auto", "webp", "avif"]}
                        alt=""
                    />
                    </div>
                    <div class="caption">
                        <h3>Jamie Munro</h3>
                        <p>Project Admin</p>
                    </div>
            </a>
        </div>
        <div class="card purple">
            <a href="https://www.linkedin.com/in/alvin-leon" target="_blank" rel="noreferrer">
                    <div>
                    <StaticImage
                        src="../../images/alvin.png"
                        loading="eager"
                        width={400}
                        quality={95}
                        formats={["auto", "webp", "avif"]}
                        alt=""
                    />
                    </div>
                    <div class="caption">
                        <h3>Alvin Blewitt</h3>
                        <p>Development</p>
                    </div>
            </a>
        </div>
        <div class="card yellow">
            <a href="https://www.linkedin.com/in/lea-g%C3%BCtebier-31a7971bb" target="_blank" rel="noreferrer">
                    <div>
                    <StaticImage
                        src="../../images/lea.png"
                        loading="eager"
                        width={400}
                        quality={95}
                        formats={["auto", "webp", "avif"]}
                        alt=""
                    />
                    </div>
                    <div class="caption">
                        <h3>Lea Gütebier</h3>
                        <p>Systems Biologist</p>
                    </div>
            </a>
        </div>
        <div class="card pink">
            <a href="https://www.linkedin.com/in/vvialard/" target="_blank" rel="noreferrer">
                    <div>
                    <StaticImage
                        src="../../images/vincent.png"
                        loading="eager"
                        width={400}
                        quality={95}
                        formats={["auto", "webp", "avif"]}
                        alt=""
                    />
                    </div>
                    <div class="caption">
                        <h3>Vincent Vialard</h3>
                        <p>Research Engineer</p>
                    </div>
            </a>
        </div>
        <div class="card blue">
        <a href="https://www.linkedin.com/in/artem-ryasik-71b30455/" target="_blank" rel="noreferrer">
                    <div>
                    <StaticImage
                        src="../../images/artem.png"
                        loading="eager"
                        width={400}
                        quality={95}
                        formats={["auto", "webp", "avif"]}
                        alt=""
                    />
                    </div>
                    <div class="caption">
                        <h3>Artem Ryasik</h3>
                        <p>Development</p>
                    </div>
            </a>
        </div>
        <div class="card red">
            <a href="https://www.linkedin.com/in/ankepachauer" target="_blank" rel="noreferrer">
            <div>
                    <StaticImage
                        src="../../images/anke.png"
                        loading="eager"
                        width={400}
                        quality={95}
                        formats={["auto", "webp", "avif"]}
                        alt=""
                    />
                    </div>
                    <div class="caption">
                        <h3>Anke Pachauer</h3>
                        <p>Marketing</p>
                    </div>
            </a>
        </div>
        <div class="card green">
            <a href="https://www.linkedin.com/in/cpd1000/" target="_blank" rel="noreferrer">
                    <div>
                    <StaticImage
                        src="../../images/claire.png"
                        loading="eager"
                        width={400}
                        quality={95}
                        formats={["auto", "webp", "avif"]}
                        alt=""
                    />
                    </div>
                    <div class="caption">
                        <h3>Claire Paterson</h3>
                        <p>Design</p>
                    </div>
            </a>
        </div>
        <div>
            <StaticImage
                src="../../images/collaboration.png"
                loading="eager"
                width={400}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt=""
                style={{ marginTop: `var(--space-3)` }}
            /> 
        </div>
       </section>
    </div>
    )
    }

export default TeamSection