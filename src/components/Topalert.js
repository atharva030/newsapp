import React, { Component } from 'react'
import {FaGlobeAsia } from "react-icons/fa";
export default class Topalert extends Component {
  render() {
    return (
        <>
       
        <div className="alert alert-success d-flex align-items-center" role="alert">
        <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"></svg>
        <FaGlobeAsia/>
        <div>
          An example success alert with an icon
        </div>
      </div>
      </>
    )
  }
}
