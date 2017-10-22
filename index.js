
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
