import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `end`,
      justifyContent: `end`,
    }}
  >
    {/* <Link
      to="/"
      style={{
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
      }}
    >
      {siteTitle}
    </Link> */}
        <a href="https://neo4j.com/blog/the-results-are-in-here-are-this-years-graphie-award-winners/" target="_blank" rel="noreferrer">
      <StaticImage
        alt="Neo4j Graphie logo"
        height={75}
        style={{ margin: 0 }}
        src="../images/Badge-150x150.png"
      />
    </a>
    <a href="https://github.com/covidgraph/" target="_blank" rel="noreferrer">
      <StaticImage
        alt="GitHub logo"
        height={75}
        style={{ margin: 0 }}
        src="../images/GitHub_Logo.png"
      />
    </a>
  </header>
)

export default Header
