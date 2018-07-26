import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import './normalize.css'
import './makerdao-site.css'
import './index.css'
import favicon from '../assets/img/favicon.png'
import makerWhiteImg from '../assets/img/maker_white.svg'
import makerLogo from '../assets/img/MKR-logo-rounded.svg'

// browser scripts
if (typeof window !== `undefined`) {
  require('../util/main.js');
}

const Layout = ({ children, data }) => (
  <div>
    <Helmet>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <title>MakerDAO - Frequently Asked Questions</title>
      <meta name="description" content="Dai is a decentralized digital currency with stable value; the next step in the evolution of money." />
      <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1" />
      <meta name="keywords" content="digital currency, decentralized stablecoin, decentralized money, stable token, stable coin, Stablecoin, stabletoken, stable digital currency, international money, stable store of value, ethereum, blockchain" />

      <link rel="icon" type="image/png" href={favicon} />

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
    <div id="content">
      <header className="centered">
        <i id="menu-bars" className="fa fa-bars" aria-hidden="true"></i>
        <a href="/"><img id="logo" src={makerLogo}/></a>
        <nav id="top-nav">
          <div className="menu-container">
            <span className="menu-category">Learn <i className="fa fa-angle-down" aria-hidden="true"></i></span>
            <div className="menu">
              <a href="https://developer.makerdao.com/">Development</a><br/>
              <a href="https://stable.fund/" target="_blank">The Stable Fund</a><br/>
              <a href="/whitepaper" target="_blank">White Paper <span className="on-desktop"> (Overview)</span></a><br/>
              <a href="/purple" target="_blank">Purple Paper <span className="on-desktop"> (Formal Spec)</span></a><br/>
            </div>
          </div>
          <div className="menu-container">
            <span className="menu-category">Governance <i className="fa fa-angle-down" aria-hidden="true"></i></span>
            <div className="menu">
              <a href="https://www.youtube.com/channel/UC4jqZlzQHUhzqf5rMd5ywTw" target="_blank">Recordings of Meetings</a><br/>
              <a href="https://medium.com/@MakerDAO/what-is-mkr-e6915d5ca1b3" target="_blank">What is MKR coin?</a><br/>
            </div>
          </div>
          <div className="menu-container">
            <span className="menu-category">Products <i className="fa fa-angle-down" aria-hidden="true"></i></span>
            <div className="menu">
              <a href="https://dai.makerdao.com/" title="Open CDPs and borrow Dai">Dai Dashboard</a><br/>
              <a href="https://oasis.direct/" title="Simple token swap dapp">Oasis Direct</a><br/>
              <a href="https://mkr.tools/" target="_blank">Platform Data</a><br/>
            </div>
          </div>
          <div className="menu-container">
            <span className="menu-category">Community <i className="fa fa-angle-down" aria-hidden="true"></i></span>
            <div className="menu">
              <a href="https://chat.makerdao.com" target="_blank">Chat</a><br/>
              <a href="https://www.reddit.com/r/MakerDAO/" target="_blank">Subreddit</a><br/>
              <a href="https://medium.com/@MakerDAO" target="_blank">Blog</a><br/>
              <a href="https://twitter.com/MakerDAO" target="_blank">Twitter</a><br/>
            </div>
          </div>
          <div className="menu-container">
            <span className="menu-category">Team <i className="fa fa-angle-down" aria-hidden="true"></i></span>
            <div className="menu">
              <a href="/team">Meet Maker</a><br/>
              <a href="/careers">Careers</a><br/>
            </div>
          </div>
        </nav>
      </header>


      {children()}

      <footer>
        <div id="subscribe-and-text" className="centered">
          <div id="subscribe">
            <span className="big-text">Stay Updated with Maker</span>
            <div id="mc_embed_signup">
              <form action="//makerdao.us16.list-manage.com/subscribe/post?u=f717b15a4a763e79ee910dbe6&amp;id=86313139e4" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                <div id="mc_embed_signup_scroll">

                  <input type="email" value="" name="EMAIL" className="email" id="mce-EMAIL" placeholder="Email address" required />
                    <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true"><input type="text" name="b_f717b15a4a763e79ee910dbe6_86313139e4" tabIndex="-1" value="" /></div>
                    <input type="submit" value="Subscribe" name="subscribe" className="button" />

                </div>
              </form>
            </div>
          </div>
          <div id="dai-foundation-text">
            <p>
              <strong>The Dai Stablecoin System</strong> was developed by Maker.
              Our team consists of developers, economists and designers from all over the world.
              Our decentralized autonomous organization is governed by our token holders.
            </p>
          </div>
        </div>
        <div id="links" className="centered">
          <div className="link-group">
            <span className="link-category">Learn </span><br/>
            <a href="https://developer.makerdao.com/">Development</a><br/>
            <a href="https://stable.fund/" target="_blank">The Stable Fund</a><br/>
            <a href="/whitepaper" target="_blank">White Paper <span className="on-desktop"> (Overview)</span></a><br/>
            <a href="/purple" target="_blank">Purple Paper <span className="on-desktop"> (Formal Spec)</span></a><br/>
          </div>
          <div className="link-group">
            <span className="link-category">Governance </span><br/>
            <a href="https://www.youtube.com/channel/UC4jqZlzQHUhzqf5rMd5ywTw" target="_blank">Recordings of Meetings</a><br/>
            <a href="https://medium.com/@MakerDAO/what-is-mkr-e6915d5ca1b3" target="_blank">What is MKR coin?</a><br/>
          </div>
          <div className="link-group">
            <span className="link-category">Products </span><br/>
            <a href="https://dai.makerdao.com/" title="Open CDPs and borrow Dai">Dai Dashboard</a><br/>
            <a href="https://oasis.direct/" title="Simple token swap dapp">Oasis Direct</a><br/>
            <a href="https://mkr.tools/" target="_blank">Platform Data</a><br/>
          </div>
          <div className="link-group">
            <span className="link-category">Community </span><br/>
            <a href="https://chat.makerdao.com" target="_blank">Chat</a><br/>
            <a href="https://www.reddit.com/r/MakerDAO/" target="_blank">Subreddit</a><br/>
            <a href="https://medium.com/@MakerDAO" target="_blank">Blog</a><br/>
            <a href="https://twitter.com/MakerDAO" target="_blank">Twitter</a><br/>
          </div>
          <div className="link-group">
            <span className="link-category">Team </span><br/>
            <a href="/team">Meet Maker</a><br/>
            <a href="/careers">Careers</a><br/>
          </div>
        </div>
        <div id="icon-links" className="centered">
          <a className="icon-link" href="https://chat.makerdao.com" target="_blank"><i className="fa fa-commenting"></i></a>
          <a className="icon-link" href="https://reddit.com/r/makerdao" target="_blank"><i className="fa fa-reddit"></i></a>
          <a className="icon-link" href="https://github.com/makerdao" target="_blank"><i className="fa fa-github"></i></a>
        </div>
        <div className="dark">
          <div id="copyright" className="centered">
            <img src={makerWhiteImg} width="37"/><span>© Dai Foundation 2017</span>
          </div>
        </div>
      </footer>
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
