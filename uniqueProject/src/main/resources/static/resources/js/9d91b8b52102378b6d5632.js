webpackJsonp([32],{"./src/app/components/common/max-otp/max-otp.component.html":/*!******************************************************************!*\
  !*** ./src/app/components/common/max-otp/max-otp.component.html ***!
  \******************************************************************/
function(o,t){o.exports='<div class="view-container header-spacer"> <div class=row> <div class="col-md-12 col-sm-12 col-xs-12"> <p class=no-margin-b> Sorry! You\'ve exceeded the maximum number of attempts. We are unable to progress further. Request you to close the browser and retry at a later time to complete your Credit Card application. </p> </div> </div> <step-footer show-close=true close-callback=$ctrl.close()> </step-footer> </div>'},"./src/app/components/common/max-otp/max-otp.component.js":/*!****************************************************************!*\
  !*** ./src/app/components/common/max-otp/max-otp.component.js ***!
  \****************************************************************/
function(o,t,e){!function(){"use strict";var t=e(/*! angular */"./node_modules/angular/index.js");e(/*! ./max-otp.component.scss */"./src/app/components/common/max-otp/max-otp.component.scss");var n=t.module("app").component("maxOtp",{template:e(/*! ./max-otp.component.html */"./src/app/components/common/max-otp/max-otp.component.html"),controller:["$anchorScroll","appState",function(o,t){var e=this;e.$onInit=function(){t.clearAll(),o()},e.close=function(){window.location.href="http://www.hsbc.co.in/"}}]});o.exports=n.name}()},"./src/app/components/common/max-otp/max-otp.component.scss":/*!******************************************************************!*\
  !*** ./src/app/components/common/max-otp/max-otp.component.scss ***!
  \******************************************************************/
function(o,t){}});
//# sourceMappingURL=9d91b8b52102378b6d5632.js.map