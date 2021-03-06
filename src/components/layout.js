import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../components/header'
import Footer from '../components/footer'

import './index.css'

const Layout = ({ children }) => (
<StaticQuery
 query={graphql`
   query LayoutQuery {
     site {
       siteMetadata {
         title
         author
         profile
       }
     }
   }
 `}
 render={data => (
     <div>
       <Helmet
         title={data.site.siteMetadata.title}
         meta={[
           { name: 'description', content: 'Make your first GitHub Pull Request' },
           { name: 'keywords', content: 'GitHub, PullRequest, First OpenSource, contribution' },
           { name: 'viewport', content: 'width=device-width, initial-scale=1'},
           { name: 'msapplication-TileColor', content: '#603cba'},
           { name: 'theme-color', content: '#261f28'}
         ]}
       />
         <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
         <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
         <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
         <link rel="manifest" href="/site.webmanifest"/>
         <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ed11ca"/>
       <Header siteTitle={data.site.siteMetadata.title} />

       <div className="container">
         <div className="card">
             <div className="tab-holder">
                 <ul className="tabs">
                     <li><Link to="/" exact={true} activeClassName="active">Instructions</Link></li>
                     <li><Link to="/submissions/" exact={true} activeClassName="active">Submissions</Link></li>
                 </ul>
             </div>
             <div className="content">
               {children}
             </div>
         </div>
       </div>
       <Footer author={data.site.siteMetadata.author} profile={data.site.siteMetadata.author} />
     </div>
 )}
  />
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
