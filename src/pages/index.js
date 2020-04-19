import React from "react"
import { Link } from "gatsby"

import Layout from '../layouts/main-layout'

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <h1>Home</h1>
    <Link to="/page-2/">Go to page 2</Link>
    <div className="alert alert-primary" role="alert">
      A simple primary alert—check it out!
    </div>
  </Layout>
)

export default IndexPage
