import React from 'react';
import ReactDOM from 'react-dom';
import Root from './route.config';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import JSApi from './modules/common/services/jsapi';
import ShopService from './modules/shop/services';
JSApi.triggerLogin();
if (!sessionStorage.getItem('userInfo')) {
  ShopService.fetchUserInfo().then((userInfo) => {
    if(parseInt(userInfo.retCode, 10) === 0) {
      sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
    } else {
      sessionStorage.removeItem('userInfo');
    }sssss
  });
}
ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
window.setCMToken = JSApi.generateToken;
