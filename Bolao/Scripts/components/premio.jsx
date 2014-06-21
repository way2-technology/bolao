'use strict'

define(['react'], function (React) {
  var PremioComponent = React.createClass({
    render: function () {
      return ( 
              <div>
                <div className="text-center">
                  <h3><a href="http://www.samsung.com/br/consumer/cellular-phone/cellular-phone-tablets/tablet/SM-T110NDWAZTO" target="_blank">Galaxy Tab 3 Lite Wi-Fi</a></h3>
                  <img className="premio" src={BASE_URL + 'images/br_SM-T110NDWAZTO_001_Front_black.jpg'} />
                </div>
              </div>
             );
    }
  });

  return PremioComponent;
});
