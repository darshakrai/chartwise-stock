import React from 'react'

import { Helmet } from 'react-helmet'

import './page.css'

const Page = (props) => {
  return (
    <div className="page-container">
      <Helmet>
        <title>Page - Finbest</title>
        <meta name="description" content="Description of the website" />
        <meta property="og:title" content="Page - Finbest" />
        <meta property="og:description" content="Description of the website" />
      </Helmet>
      <div className="page-images">
        <div className="page-column">
          <img
            alt="pastedImage"
            src="/playground_assets/pastedimage-oy26-300w.png"
            className="page-pasted-image"
          />
        </div>
        <div className="page-column1">
          <img
            alt="pastedImage"
            src="/playground_assets/pastedimage-5cga-300w.png"
            className="page-pasted-image1"
          />
          <img
            alt="pastedImage"
            src="/playground_assets/pastedimage-c39.svg"
            className="page-pasted-image2"
          />
        </div>
        <div className="page-column2">
          <img
            alt="pastedImage"
            src="/playground_assets/pastedimage-iqnj.svg"
            className="page-pasted-image3"
          />
          <img
            alt="pastedImage"
            src="/playground_assets/pastedimage-06e.svg"
            className="page-pasted-image4"
          />
        </div>
      </div>
      <div className="page-overlay">
        <span className="page-text">
          Begin your financial journey on Chartwise
        </span>
        <div className="page-book-btn">
          <span className="page-text1">Book a demo</span>
        </div>
      </div>
      <img
        alt="pastedImage"
        src="/playground_assets/pastedimage-ylke.svg"
        className="page-pasted-image5"
      />
    </div>
  )
}

export default Page
