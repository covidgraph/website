import React from 'react'
import "./NewsSection.css"
import { StaticImage } from "gatsby-plugin-image"


function NewsSection() {
    return (
    <div>
        <section class="newssection">
            <div class="banner">
                <h1>The Impact of HealthECCO</h1>
                <p>Our work with CovidGraph was widely reported at the time. You can read about our work and project in the links below. Note that these are external links and we cannot guarantee that they will remain active.</p>
            </div>
            <div class="newscontainer">
            <h1 class="news-link"> English </h1>
                <a href="https://www.pharmaceuticalcommerce.com/view/making-connections-dr-alexander-jarasch" target="_blank" rel="noreferrer">
                    <div class="news-link">
                        <p>28 September 2022</p>
                        <h3>Making Connections: Dr. Alexander Jarasch</h3>
                        <p>Pharmaceutical Commerce</p>
                    </div>
                </a>
                <a href="https://academic.oup.com/bioinformatics/advance-article/doi/10.1093/bioinformatics/btac592/6678977" target="_blank" rel="noreferrer">
                    <div class="news-link">
                        <p>30 August 2022</p>
                        <h3>CovidGraph: a graph to fight COVID-19</h3>
                        <p>OUP Academic</p>
                    </div>
                </a>
                <a href="https://neo4j.com/graphies" target="_blank" rel="noreferrer">
                    <div class="news-link">
                        <p>1 December 2021 </p>
                        <h3>Winner of Neo4j Graphie Award 2021</h3>
                        <p>Neo4j</p>
                    </div>
                </a>
                <a href="https://www.zdnet.com/article/data-meets-science-open-access-code-datasets-and-knowledge-graphs-for-machine-learning-research-and-beyond/" target="_blank" rel="noreferrer">
                    <div class="news-link">
                        <p>16 February 2021</p>
                        <h3>Data meets science: Open access, code, datasets, and knowledge graphs...</h3>
                        <p>ZDNet</p>
                    </div>
                </a>
                <a href="https://drhairysresearchpodcasts.podbean.com/e/dr-hairys-podcast-interview-no-1/" target="_blank" rel="noreferrer">
                    <div class="news-link">
                        <p>19 November 2020</p>
                        <h3>Podcast Interview</h3>
                        <p>Dr Hairy's Podcast</p>
                    </div>
                </a>
                <a href="https://issuu.com/mark123/docs/2020-jcs-5-october-web_compressed/s/11152702" target="_blank" rel="noreferrer">
                    <div class="news-link">
                        <p>22 October 2020</p>
                        <h3>European Group Uses Graph Technology to Reveal Research Data Connections</h3>
                        <p>Pharma Publications</p>
                    </div>
                </a>
                <a href="https://www.digitalhealth.net/2020/09/could-better-connecting-of-data-lead-to-a-cure-for-covid-19/" target="_blank" rel="noreferrer">
                    <div class="news-link">
                        <p>23 September 2020</p>
                        <h3>Could better connecting of data lead to a cure for Covid-19?</h3>
                        <p>digitalhealth</p>
                    </div>
                </a>
                <a href="https://www.s-cubed-global.com/news/covidgraph-nerds-response-to-the-pandemic" target="_blank" rel="noreferrer">
                    <div class="news-link">
                        <p>12 August 2020 </p>
                        <h3>Covidgraph: One Nerd’s Response to the Pandemic</h3>
                        <p>S-Cubed</p>
                    </div>
                </a>
                <a href="https://www.bloorresearch.com/2020/07/covid-19-and-it/" target="_blank" rel="noreferrer">
                    <div class="news-link">
                        <p>7 July 2020</p>
                        <h3>Covid-19 and IT</h3>
                        <p>Bloor</p>
                    </div>
                </a>
                <a href="https://www.infoworld.com/article/3563868/the-power-of-open-source-to-fight-covid-19.html" target="_blank" rel="noreferrer">
                    <div class="news-link">
                        <p>23 June 2020 </p>
                        <h3>The power of open source to fight COVID-19</h3>
                        <p>InfoWorld</p>
                    </div>
                </a>
                <a href="https://www.healthcareitnews.com/blog/emea/using-graphs-develop-deeper-understanding-covid-19" target="_blank" rel="noreferrer">
                    <div class="news-link">
                        <p>16 June 2020 </p>
                        <h3>Using graphs to develop a deeper understanding of COVID-19</h3>
                        <p>Healthcare IT News</p>
                    </div>
                </a>
                <a href="http://www.odbms.org/blog/2020/06/fighting-covid-19-with-graphs-interview-with-alexander-jarasch/" target="_blank" rel="noreferrer">
                    <div class="news-link">
                        <p>8 June 2020</p>
                        <h3>Fighting Covid-19 with Graphs. Interview with Alexander Jarasch</h3>
                        <p>ODBMS Industry Watch</p>
                    </div>
                </a>
                <a href="https://www.geekwire.com/2020/software-tools-mining-covid-19-research-studies-go-viral-among-scientists/" target="_blank" rel="noreferrer">
                    <div class="news-link">
                        <p>23 April 2020</p>
                        <h3>Software tools for mining COVID-19 research studies go viral among scientists</h3>
                        <p>Geekwire</p>
                    </div>
                </a>
                <a href="https://www.forbes.com/sites/adrianbridgwater/2020/04/17/data-is-in-a-relationship-its-complicated/" target="_blank" rel="noreferrer">
                    <div class="news-link">
                        <p>17 April 2020</p>
                        <h3>Data Is In a Relationship, It's Complicated</h3>
                        <p>Forbes</p>
                    </div>
                </a>
                <a href="https://semiengineering.com/covid-19-tech-bits-april-14/" target="_blank" rel="noreferrer">
                    <div class="news-link">
                        <p>13 April 2020</p>
                        <h3>Covid-19 Tech Bits: April 14</h3>
                        <p>Semiconductor Engineering</p>
                    </div>
                </a>
                <a href="https://www.nextplatform.com/2020/04/10/graphing-the-coronavirus-pandemic/?utm_source=GaggleAMP-Neo4j&utm_medium=LinkedIn%20(GaggleAMP)&utm_campaign=none%20(GaggleAMP)&utm_content=graphing-the-coronavirus-pandemic-by-jeffrey-burt-via-the-next-2521111" target="_blank" rel="noreferrer">
                    <div class="news-link">
                        <p>10 April 2020</p>
                        <h3>Graphing The Coronavirus Pandemic</h3>
                        <p>The Next Platform</p>
                    </div>
                </a>
                <a href="https://www.zdnet.com/article/graph-analytics-and-knowledge-graphs-facilitate-scientific-research-for-covid-19/" target="_blank" rel="noreferrer">
                    <div class="news-link">
                        <p>9 April 2020</p>
                        <h3>Graph analytics and knowledge graphs facilitate scientific research for COVID-19</h3>
                        <p>ZDNet</p>
                    </div>
                </a>
                <a href="https://searchdatamanagement.techtarget.com/news/252481455/How-graph-data-science-is-helping-the-fight-against-COVID-19" target="_blank" rel="noreferrer">
                    <div class="news-link">
                        <p>9 April 2020</p>
                        <h3>How graph data science is helping the fight against COVID-19</h3>
                        <p>TechTarget</p>
                    </div>
                </a>
                <a href="https://www.computerweekly.com/news/252481355/German-diabetes-institute-uses-graph-database-to-connect-coronavirus-research" target="_blank" rel="noreferrer">
                    <div class="news-link">
                        <p>8 April 2020</p>
                        <h3>German diabetes institute uses graph database to connect coronavirus research</h3>
                        <p>ComputerWeekly</p>
                    </div>
                </a>
                <a href="https://blog.bruggen.com/2020/04/graphistania-20-episode-6-one-with.html" target="_blank" rel="noreferrer">
                    <div class="news-link">
                        <p>6 April 2020</p>
                        <h3>Graphistania 2.0 - Episode 6 - The One with the CovidGraph</h3>
                        <p>Graphistana</p>
                    </div>
                </a>
            </div>
            <div class="newscontainer">
            <h1 class="news-link german"> German </h1>
                <a href="https://www.deutsche-diabetes-gesellschaft.de/fileadmin/user_upload/09_Presse/diabetes_Zeitung/2020/20200817_MTD_DDG_2020_07-08_kl.pdf" target="_blank" rel="noreferrer">
                    <div class="news-link german">
                        <p>27 August 2020</p>
                        <h3>Mit KI heterogene Daten verknüpfen und unentdeckte Muster erkennen</h3>
                        <p>Diabetes Zeitung</p>
                    </div>
                </a>
                <a href="https://www.laborpraxis.vogel.de/covid-19-wie-knowledge-graphen-die-forschung-antreiben-a-942689/" target="_blank" rel="noreferrer">
                    <div class="news-link german">
                        <p>2 July 2020</p>
                        <h3>Covid-19: Wie Knowledge Graphen die Forschung antreiben</h3>
                        <p>Laborpraxis</p>
                    </div>
                </a>
                <a href="https://www.bigdata-insider.de/covid-19-knowledge-graph-daten-verknuepfen-gemeinsam-forschen-a-927691/" target="_blank" rel="noreferrer">
                    <div class="news-link german">
                        <p>5 May 2020</p>
                        <h3>COVID-19 Knowledge Graph – Daten verknüpfen, gemeinsam forschen</h3>
                        <p>BigData Insider</p>
                    </div>
                </a>
                <a href="https://www.ztg-nrw.de/2020/04/projekt-covidgraph-fokussiert-auf-wissensvisualisierung/" target="_blank" rel="noreferrer">
                    <div class="news-link german">
                        <p>29 April 2020</p>
                        <h3>Projekt COVID*Graph fokussiert auf Wissensvisualisierung</h3>
                        <p>ZTG Zentrum für Telematik und Telemedizin</p>
                    </div>
                </a>
                <a href="https://e-health-com.de/details-news/covid-wissen-wird-sichtbar/" target="_blank" rel="noreferrer">
                    <div class="news-link german">
                        <p>28 April 2020</p>
                        <h3>COVID-Wissen wird sichtbar</h3>
                        <p>eHealth</p>
                    </div>
                </a>
                <a href="https://www.aerzteblatt.de/nachrichten/111942/Coronakrise-Hilfreiche-Tools-fuer-den-medizinischen-Alltag" target="_blank" rel="noreferrer">
                    <div class="news-link german">
                        <p>15 April 2020</p>
                        <h3>Coronakrise: Hilfreiche Tools für den medizinischen Alltag</h3>
                        <p>Ärzteblatt</p>
                    </div>
                </a>
                <a href="https://www.bigdata-insider.de/neo4j-unterstuetzt-kampf-gegen-covid-19-a-921664/" target="_blank" rel="noreferrer">
                    <div class="news-link german">
                        <p>14 April 2020</p>
                        <h3>Neo4j unterstützt Kampf gegen COVID-19</h3>
                        <p>BigData Insider</p>
                    </div>
                </a>
                <a href="https://www.bigdata-insider.de/graphdatenbanken-helfen-bei-der-biomedizinischen-forschung-a-777926/" target="_blank" rel="noreferrer">
                    <div class="news-link german">
                        <p>3 December 2018</p>
                        <h3>Graphdatenbanken helfen bei der biomedizinischen Forschung</h3>
                        <p>BigData Insider</p>
                    </div>
                </a>
            </div>
        </section>
    </div>
    )
    }

export default NewsSection