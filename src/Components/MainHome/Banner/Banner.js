import React from "react";
import './Banner.css';

const Banner = () => {
    
  return (
    <div id="banner" className="skewed">
      <div className="book left">
        <div className="content-wrap">
          <div className="content-body">
            <h1>Look Sharp</h1>
            <p>
            We'll take over the fulfillment side while you manage and edit orders, oversee inventory levels, receive notifications for stock needing replenishment, and automate shipping tasks.
            </p>
          </div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt_OPw50BRUN75mYpqZGfFkoN__e_FR88ucw&usqp=CAU" alt="" />
        </div>
      </div>

      <div className="book right">
        <div className="content-wrap">
          <div className="content-body">
            <h1>Stay Cool</h1>
            <p>
            Your dedicated account rep will always be one Slack message away while your product is being Your team will be able to oversee multiple store locations in one easy to use web portal.
            </p>
          </div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzXmz7b8XAi6YxYXKS7JFUpwD2Rbl8lDdRAA&usqp=CAU" alt="" />
        </div>
      </div>
      
          
      <div class="handle"></div>   
      
    </div>
  );
};

export default Banner;
