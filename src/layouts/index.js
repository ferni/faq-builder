import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <title>MakerDAO - Frequently Asked Questions</title>
      <meta name="description" content="Dai is a decentralized digital currency with stable value; the next step in the evolution of money." />
      <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1" />
      <meta name="keywords" content="digital currency, decentralized stablecoin, decentralized money, stable token, stable coin, Stablecoin, stabletoken, stable digital currency, international money, stable store of value, ethereum, blockchain" />

      <link rel="icon" type="image/png" href="/assets/img/favicon.png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="stylesheet" href="/css/normalize.min.css" />
      <link rel="stylesheet" href="/css/main.css?v=6" />

      <script src="/js/vendor/modernizr-custom.js" />
      <script src="https://use.fontawesome.com/7454cf21dc.js" />
      {/* Google Analytics */}
      <script>{`
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-65766767-1', 'auto');
        ga('send', 'pageview');

      `}</script>
      {/* Global site tag (gtag.js) - AdWords: 819827802 */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=AW-819827802" />
      <script>{` window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-819827802'); `}</script>
    </Helmet>
    <Header siteTitle={data.site.siteMetadata.title} />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
