/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import "./layout.css"
import FbCustomerChat from "./fbCustomerChat"

const Layout = ({ children }) => {
  return (
    <>
      <body>
        <main>{children}</main>
        
      </body>
      <FbCustomerChat />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
