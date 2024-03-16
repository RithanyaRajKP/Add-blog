import React from "react";
import { Link } from "react-router-dom";
const NotFoundPage = () => {
  return (
    <div className="not-found">
      <p>Sorry</p>
      <div>That page not found</div>
  
      <Link to='/'> Back to homepage...</Link>


    </div>
  );
};

export default NotFoundPage;
<div class="not-found"><p style="
    text-align: center;
    font-size: 115px;
">Sorry</p><p style="
    text-align: center;
    font-size: 55px;
    margin-bottom: 40px;
">That page not found</p><a href="/" style="
    text-decoration: none;
    /* margin-top: 44px; */
    float: right;
    font-size: 26px;
    font-weight: bold;
"> Back to homepage...</a></div>