webpackJsonp([7],{

/***/ "./src/app/components/re-ekycPage/open-success-modal/open-success.modal.component.html":
/* unknown exports provided */
/* all exports used */
/*!*********************************************************************************************!*\
  !*** ./src/app/components/re-ekycPage/open-success-modal/open-success.modal.component.html ***!
  \*********************************************************************************************/
/***/ (function(module, exports) {

module.exports = "<div class=modal-header> <div class=heading-container> </div> <div class=close-button-container> <button type=button class=close aria-label=Close ng-click=$ctrl.cancel()> <span aria-hidden=true>×</span> </button> </div> </div> <div class=modal-body> <p class=no-margin-b> <b>You have succesfully completed EKYC. You can see Aadhaar details by clicking \"×\"</b><br><br> But Our records indicate that you are an existing customer of HSBC. </p> </div> <div class=modal-footer> <div class=buttons-container> <button class=button-primary ng-click=$ctrl.Close(true)>OK</button> </div> </div>";

/***/ }),

/***/ "./src/app/components/re-ekycPage/open-success-modal/open-success.modal.component.js":
/* unknown exports provided */
/* all exports used */
/*!*******************************************************************************************!*\
  !*** ./src/app/components/re-ekycPage/open-success-modal/open-success.modal.component.js ***!
  \*******************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

(function () {
    'use strict';
    var angular = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
    __webpack_require__(/*! ./open-success.modal.component.scss */ "./src/app/components/re-ekycPage/open-success-modal/open-success.modal.component.scss");

    var modalController = function () {
        var vm = this;

        vm.$onInit = function () {
            console.log("value Hiii from open model==");

        };

        /**
         * This function is triggered when we select or unselect card.
         * We push the selected card in selectedPrimaryCards array and
         *  pop the unselected card.
         */
        vm.Close = function (isSelected) {
            vm.close({
                $value: isSelected
            });
        };

        vm.cancel = function () {
            vm.dismiss({
                $value: 'cancel'
            });
        };
    };

    var modalComp = angular.module('app').component('opensuccessModal', {
        template: __webpack_require__(/*! ./open-success.modal.component.html */ "./src/app/components/re-ekycPage/open-success-modal/open-success.modal.component.html"),
        bindings: {
            resolve: '<',
            close: '&',
            dismiss: '&'
        },
        controller: [modalController]
    });
    module.exports = modalComp.name;
})();


/***/ }),

/***/ "./src/app/components/re-ekycPage/open-success-modal/open-success.modal.component.scss":
/* unknown exports provided */
/* all exports used */
/*!*********************************************************************************************!*\
  !*** ./src/app/components/re-ekycPage/open-success-modal/open-success.modal.component.scss ***!
  \*********************************************************************************************/
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/app/components/re-ekycPage/re-ekycPage.component.html":
/* unknown exports provided */
/* all exports used */
/*!*******************************************************************!*\
  !*** ./src/app/components/re-ekycPage/re-ekycPage.component.html ***!
  \*******************************************************************/
/***/ (function(module, exports) {

module.exports = "<div ng-hide=$ctrl.showLoader class=row> <div class=phonetext> <div class=\"view-container header-spacer\"> <form ng-hide=$ctrl.showLoader name=retrievalForm autocomplete=off focus-on-error novalidate> <input type=text class=hidden-field ng-model=$ctrl.robocheck tabindex=-1> <alert-msg ng-if=$ctrl.showOtpSent type=SUCCESS close=$ctrl.closeSuccessMsg()> One Time Password (OTP) has been sent to the Registered Mobile number. Please click \"Re-send OTP\" if you have not received OTP </alert-msg> <alert-msg ng-if=$ctrl.showForm type=SUCCESS close=$ctrl.closeSuccessMsg() ng-hide=$ctrl.errMsg> EKYC is successfully completed, Please scroll down to see aadhaar details and click Proceed for V-CIP. </alert-msg> <alert-msg ng-if=$ctrl.ekycDone type=SUCCESS close=$ctrl.closeSuccessMsg()> You hvae already completed your EKYC in last 72 hours at our platform. </alert-msg> <alert-msg ng-if=$ctrl.errMsg type=ERROR> {{$ctrl.errMsg}} </alert-msg> <div class=row ng-if=!$ctrl.ekycDone> <div class=\"col-md-6 col-sm-0 col-xs-0\"> <div class=\"form-group line-spacer\"> <label for=aadhaar>Enter Your Aadhaar Number(12 digits) / Virtual ID(16 digits)</label> <div ng-class=\"{'has-error': retrievalForm.aadhaar.$invalid && (retrievalForm.aadhaar.$touched || $ctrl.aadhaarSubmitted)}\"> <input type={{$ctrl.typeInput}} id=aadhaar name=aadhaar only-number=16 class=form-control aria-describedby=aadhaarErrMsg ng-trim=true autofocus=autofocus ng-model=$ctrl.model.aadhaar ng-minlength=12 ng-pattern=/^[2-9][0-9]{11}$|^[0-9]{16}$/ placeholder=\"As per ID\" aria-invalid=\"{{retrievalForm.aadhaar.$invalid && ($ctrl.model.submitted || retrievalForm.aadhaar.$touched)}}\" ng-disabled=\"$ctrl.otpSent || $ctrl.showForm\" required> </div> <div id=aadhaarErrMsg ng-class=\"{'has-error': retrievalForm.aadhaar.$invalid}\"> <validation-msg ng-if=\"retrievalForm.aadhaar.$error.required && (retrievalForm.aadhaar.$touched || $ctrl.aadhaarSubmitted)\"> Please make sure you have entered your Virtual ID/Aadhaar number to continue with your application. </validation-msg> <validation-msg ng-if=\"(retrievalForm.aadhaar.$error.minlength || retrievalForm.aadhaar.$error.pattern) && retrievalForm.aadhaar.$touched\"> Please input a valid Virtual ID/Aadhaar number to continue with your application. </validation-msg> </div> </div> </div> </div> <div class=\"form-group line-spacer\" ng-if=\"$ctrl.otpSent && !$ctrl.ekycDone\"> <label for=otp>OTP</label> <div class=row> <div class=\"col-md-4 col-sm-6 col-xs-12\"> <div ng-class=\"{'has-error': retrievalForm.otp.$invalid && (retrievalForm.otp.$touched || $ctrl.submitted)}\"> <input trim type=\"{{$ctrl.showForm?'password':'tel'}}\" id=otp name=otp class=form-control ng-model=$ctrl.model.otp only-number=6 ng-minlength=6 aria-describedby=OTPErrMsg aria-invalid=\"{{retrievalForm.otp.$invalid && (retrievalForm.otp.$touched || $ctrl.submitted)}}\" ng-disabled=$ctrl.showForm required> </div> <div id=OTPErrMsg ng-class=\"{'has-error': retrievalForm.otp.$invalid&& ($ctrl.submitted || retrievalForm.otp.$touched)}\"> <validation-msg ng-if=\"retrievalForm.otp.$error.required && (retrievalForm.otp.$touched || $ctrl.submitted)\"> Please enter OTP </validation-msg> <validation-msg ng-if=\"retrievalForm.otp.$error.minlength && (retrievalForm.otp.$touched || $ctrl.submitted)\"> Invalid OTP </validation-msg> </div> </div> <div class=\"col-md-4 col-sm-6 col-xs-12 line-spacer-xs\" ng-hide=$ctrl.showForm> <span class=link-text ng-class=\"{'disabled': !$ctrl.regenerateOTP}\" ng-click=\"$ctrl.regenerateOTP ? $ctrl.requestAadhaarOTP(retrievalForm) : $event.preventDefault()\">Re-send OTP </span> <span ng-if=\"$ctrl.counter > 0\">({{$ctrl.counter}} sec)</span> </div> </div> </div> <div class=row ng-if=!$ctrl.ekycDone> <div class=\"col-md-12 col-sm-14 col-xs-12\"> <div class=\"form-group line-spacer\"> <div id=aadhaarConsentErrMsg ng-class=\"{'has-error': retrievalForm.aadhaarConsent.$invalid && (retrievalForm.aadhaarConsent.$touched || $ctrl.submitted)}\"> <validation-msg ng-if=\"retrievalForm.aadhaarConsent.$error.required && (retrievalForm.aadhaarConsent.$touched || $ctrl.submitted)\"> Please check this box if you want to proceed. </validation-msg> </div> <div ng-class=\"{'has-error': retrievalForm.aadhaarConsent.$invalid && (retrievalForm.aadhaarConsent.$touched || $ctrl.submitted)}\"> <input type=checkbox id=aadhaarConsent name=aadhaarConsent class=screen-reader-only ng-model=$ctrl.model.aadhaarConsent ng-focus=\"$ctrl.hasAadhaarConsentFocus = true\" ng-blur=\"$ctrl.hasAadhaarConsentFocus = false\" aria-describedby=aadhaarConsentErrMsg aria-invalid=\"{{retrievalForm.aadhaarConsent.$invalid && (retrievalForm.aadhaarConsent.$touched || $ctrl.submitted)}}\" required ng-disabled=\"$ctrl.otpSent || $ctrl.showForm\"> <label ng-show=$ctrl.showFullTerm for=aadhaarConsent class=\"checkbox-label tpsa-label\" ng-class=\"{'focus': $ctrl.hasAadhaarConsentFocus}\"> <font size=2>This is to confirm that ...</font> </label> <div ng-show=!$ctrl.showFullTerm class=text-right> <span ng-click=\"$ctrl.showFullTerm = true\"> <span class=\"icon icon-chevron-up\" aria-hidden=true></span>Read less </span> </div> <div ng-show=$ctrl.showFullTerm class=text-right> <span ng-click=\"$ctrl.showFullTerm = false\"> <span class=\"icon icon-chevron-down\" aria-hidden=true></span>Read more </span> </div> <input type=checkbox id=aadhaarConsent name=aadhaarConsent class=screen-reader-only ng-model=$ctrl.model.aadhaarConsent ng-focus=\"$ctrl.hasAadhaarConsentFocus = true\" ng-blur=\"$ctrl.hasAadhaarConsentFocus = false\" aria-describedby=aadhaarConsentErrMsg aria-invalid=\"{{retrievalForm.aadhaarConsent.$invalid && (retrievalForm.aadhaarConsent.$touched || $ctrl.submitted)}}\" required ng-disabled=\"$ctrl.otpSent || $ctrl.showForm\"> <label ng-show=!$ctrl.showFullTerm for=aadhaarConsent class=\"checkbox-label tpsa-label\" ng-class=\"{'focus': $ctrl.hasAadhaarConsentFocus}\"> <br> <meta charset=UTF-8 /> <p> <font size=2> This is to confirm that I have been provided various options by HSBC India for establishing my identity for the purpose opening/maintenance of accounts with the Bank. For the purpose of establishing my identity, I have voluntarily submitted my Aadhaar for biometric/OTP based e-KYC authentication as per the facility provided by UIDAI. I hereby give my consent to HSBC India: i) To establish my identity/address proof by Aadhaar based authentication system or verify the genuineness of the Aadhaar through UIDAI specified scheme/s or through such other manner as set out by UIDAI or any other law from time to time. ii) Share my Aadhaar and associated demographic details with UIDAI directly or through its authorised agencies (NPCI), concerned regulatory or statutory authorities as may be required under applicable laws. The consent and purpose of collecting Aadhaar have been explained to me and I confirm having understood the same. I have also been informed that: a) Upon authentication, UIDAI may share information in nature of my demographic information including photograph which HSBC India may use as an identity/address proof for the above mentioned purpose. b) My Aadhaar details (including my demographic information) shared by UIDAI will not be used for any purpose other than the purpose mentioned above or as per requirement of law. c) My biometric information will not be stored by the Bank. </font> </p> <p> <font size=2> मैं यह पुष्टि करता हूँ कि बैंक के साथ खाता खोलने / बनाए रखने के लिए मुझे अपनी पहचान स्थापित करने के लिए एचएसबीसी इंडिया द्वारा विभिन्न विकल्प प्रदान किए गए हैं। मैंने अपनी पहचान स्थापित करने के लिए , यूआईडीएआई द्वारा प्रदान की गई सुविधा के अनुसार बायोमेट्रिक/ओटीपी आधारित ई-केवाईसी प्रमाणीकरण के लिए स्वेच्छा से अपना आधार जमा किया है। मैं एतद्वारा एचएसबीसी इंडिया को अपनी सहमति देता हूं: <br> i) आधार आधारित प्रमाणीकरण प्रणाली द्वारा मेरी पहचान / पता स्थापित कर सकते हैं या यूआईडीएआई द्वारा निर्दिष्ट योजना / योजनाओं या यूआईडीएआई द्वारा निर्धारित अन्य तरीके या समय- समय पर किसी अन्य कानून के माध्यम से आधार की वास्तविकता को सत्यापित कर सकते हैं। <br> ii) अगर लागू कानूनों के तहत आवश्यक हो तो मेरे आधार और संबंधित जनसांख्यिकीय विवरण को सीधे यूआईडीएआई के साथ या इसकी अधिकृत एजेंसियों (एनपीसीआई), संबंधित नियामक या वैधानिक प्राधिकरणों के माध्यम से साझा कर सकते हैं। <br> आधार एकत्र करने की सहमति और उद्देश्य के बारे में मुझे बताया गया है और मैं पुष्टि करता हूं कि मैं इसे समझ गया हूं। मुझे यह भी सूचित किया गया है कि: <br> ए) प्रमाणीकरण पर, यूआईडीएआई मेरी जनसांख्यिकीय जानकारी साझा कर सकता है जिसेमें फोरोग्राफ शामिल है, जिसे एचएसबीसी इंडिया ऊपर लिए उद्देश्य के लिए पहचान/पता प्रमाण के रूप में उपयोग कर सकता है। <br> बी) यूआईडीएआई द्वारा साझा किए गए मेरे आधार विवरण (मेरी जनसांख्यिकीय जानकारी सहित) का उपयोग ऊपर लिखे उद्देश्य या कानून की आवश्यकता के अलावा किसी अन्य उद्देश्य के लिए नहीं किया जाएगा। <br> ग) मेरी बायोमेट्रिक जानकारी बैंक द्वारा संग्रहित नहीं की जाएगी। </font> </p> </label> <div class=line-spacer> <div class=\"col-md-6 col-sm-12 col-xs-12\"> <p>Click on the play button to play a TnC in English:</p> <audio id=myAudioEnglish controls> <source ng-src=resources/audio/TncEnglish.m4a type=audio/mpeg>s Your browser does not support the audio element. </audio> </div> </div> <div class=\"col-md-6 col-sm-6 col-xs-12\"> <p> हिंदी में टीएनसी सूनने के लिए प्ले बटन पर क्लिक करें:</p> <audio id=myAudioHindi controls> <source ng-src=resources/audio/TncHindi.m4a type=audio/mpeg> Your browser does not support the audio element. </audio> </div> </div> </div> </div> </div> <div class=row> <div class=\"form-group row text-center\"> <div class=\"col-md-12 col-sm-14 col-xs-12\" ng-if=\"($ctrl.otpSent && $ctrl.showForm)\"> <hr class=line-spacer> <h2 class=brand-bar>Aadhaar Details Verification</h2> <img ng-src=resources/images/aadhaar_logo.png width=200px height=128px /> <br> <br> <h3>Reference Key - {{$ctrl.aadhaarReferenceKey}}</h3> <img ng-src=data:image/png;base64,{{$ctrl.photo}} class=center /> <div class=line-spacer> <table class=center> <tr> <th colspan=4>Aadhaar Details</th> </tr> <tr> <td class=bold colspan=2>Aadhaar Reference Key</td> <td colspan=2>{{$ctrl.aadhaarReferenceKey}}</td> </tr> <tr> <td class=bold colspan=2>Enrollment Date</td> <td colspan=2>{{$ctrl.enrollmentDate}}</td> </tr> <tr> <td class=bold>Redacted Aadhaar</td> <td>{{$ctrl.redactedAadhaar}}</td> <td class=bold>Mode</td> <td>SMS OTP</td> </tr> </table> </div> <div class=line-spacer> <table class=center> <tr> <th colspan=4>Personal Details</th> </tr> <tr> <td class=bold colspan=2>Name</td> <td colspan=2>{{$ctrl.aadhaarName}}</td> </tr> <tr> <td class=bold colspan=2>C/O</td> <td colspan=2>{{$ctrl.co}}</td> </tr> <tr> <td class=bold>Gender</td> <td>{{$ctrl.gender}}</td> <td class=bold ng-if=$ctrl.disabledDob>Date Of Birth</td> <td class=bold ng-if=!$ctrl.disabledDob>Year Of Birth</td> <td ng-if=$ctrl.disabledDob>{{$ctrl.date}}-{{$ctrl.month}}-{{$ctrl.year}}</td> <td ng-if=!$ctrl.disabledDob>{{$ctrl.year}}</td> </tr> </table> </div> <div class=line-spacer> <table class=center> <tr> <th colspan=4>Address Details</th> </tr> <tr> <td class=bold colspan=2>House</td> <td colspan=2>{{$ctrl.address1}}</td> </tr> <tr> <td class=bold colspan=2>Street</td> <td colspan=2>{{$ctrl.address2}}</td> </tr> <tr> <td class=bold colspan=2>Landmark</td> <td colspan=2>{{$ctrl.address3}}</td> </tr> <tr> <td class=bold colspan=2>Location</td> <td colspan=2>{{$ctrl.location}}</td> </tr> <tr> <td class=bold colspan=2>Village</td> <td colspan=2>{{$ctrl.city}}</td> </tr> <tr> <td class=bold>Sub District</td> <td>{{$ctrl.subDistrict}}</td> <td class=bold>District</td> <td>{{$ctrl.district}}</td> </tr> <tr> <td class=bold>State</td> <td>{{$ctrl.state}}</td> <td class=bold>PIN Code</td> <td>{{$ctrl.pinCode}}</td> </tr> <tr> <td class=bold colspan=2>Post Ofiice</td> <td colspan=2>{{$ctrl.postalOffice}}</td> </tr> </table> </div> </div> </div> </div> <div class=row> <div class=\"col-md-12 col-sm-12 col-xs-12\"> <hr class=\"form-group line-spacer\"> </div> </div> <div class=row> <div class=\"col-md-12 col-sm-12 col-xs-12 text-right\" ng-if=\"!$ctrl.otpSent && !$ctrl.ekycDone\"> <button class=\"button-primary no-margin-t-xs\" id=submitButton ng-click=$ctrl.requestAadhaarOTP(retrievalForm)>Request OTP</button> </div> <div class=\"col-md-12 col-sm-12 col-xs-12 text-right\" ng-if=$ctrl.otpSent ng-hide=$ctrl.showForm> <button class=\"button-primary no-margin-t-xs\" id=submitButton ng-click=$ctrl.submitOTP(retrievalForm)>Validate OTP</button> </div> <div class=\"col-md-12 col-sm-12 col-xs-12 text-center\" ng-if=\"$ctrl.vcipButton || $ctrl.ekycDone\"> <p> </p><h4> <b>Thank you for completing the eKYC journey. Please proceed for eligibility check and Video based Customer Identification process(VCIP) by clicking here.</b> <button class=\"button-primary no-margin-t-xs\" ng-click=$ctrl.exit()> <font size=4>Proceed </font></button> </h4> <p></p> </div> </div> </form> </div> </div> </div> <loading ng-show=$ctrl.showLoader></loading>";

/***/ }),

/***/ "./src/app/components/re-ekycPage/re-ekycPage.component.js":
/* unknown exports provided */
/* all exports used */
/*!*****************************************************************!*\
  !*** ./src/app/components/re-ekycPage/re-ekycPage.component.js ***!
  \*****************************************************************/
/***/ (function(module, exports, __webpack_require__) {

(function () {
    'use strict';
    var angular = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
    __webpack_require__(/*! ./re-ekycPage.component.scss */ "./src/app/components/re-ekycPage/re-ekycPage.component.scss");
    __webpack_require__(/*! ./re-ekycPage.component.service.js */ "./src/app/components/re-ekycPage/re-ekycPage.component.service.js");
    __webpack_require__(/*! ./open-success-modal/open-success.modal.component.js */ "./src/app/components/re-ekycPage/open-success-modal/open-success.modal.component.js");


    var ekycStep = angular.module('app').component('reEkycPage', {
        template: __webpack_require__(/*! ./re-ekycPage.component.html */ "./src/app/components/re-ekycPage/re-ekycPage.component.html"),
        controller: ['$rootScope', '$http', '$state', '$anchorScroll', '$uibModal', 'analyticService', 'appState', 'CONFIG', 'reekycPageService', '$timeout', 'UtilService',
            function ($rootScope, $http, $state, $anchorScroll, $uibModal, analyticService, appState, CONFIG, reekycPageService, $timeout, UtilService) {
                var vm = this;
                let sendOtpCounter = 1;
                let validateOtpCounter = 1;
                let proceedClicked = true;

                vm.$onInit = function () {

                    vm.typeInput = 'tel';
                    // vm.etbCustomer = false;
                    // vm.addressOptions = ['Current', 'Permanent', 'Current and Permanent'];
                     getEkycDoneOrNot();
                }

                var getEkycDoneOrNot = function () {
                    console.log("calling ibps for checking ekyc is done or not in last 72 hours")
                    var securityParams = {
                        robocheck: vm.robocheck ? vm.robocheck : ''
                    };
                    var reqData = {
                        "urlParamId": appState.getUrlParamId()
                    }
                    // console.log("front data to ==", JSON.stringify(reqData));
                    reekycPageService.getEkycDone(reqData, securityParams).then(function (result) {
                        // console.log("backend response data for ekyc done ==", JSON.stringify(result));
                        if (result.success) {

                            if(result.ekycDone === "true"){
                                vm.ekycDone = true;
                                // //console.log("Ekyc is completed in last 72 hours so no need to do again==", result.ekycDone);
                                vm.ekycId = UtilService.decodeData2(result["ekycId"]);
                                vm.autoUrl = result["callbackUrl"]
                                //console.log("ekycID =="+vm.ekycId);
                            }else{
                                //console.log("Ekyc is not completed in last 72 hours so  need to do again==", result.ekycDone);
                                vm.ekycDone = false;
                            }

                            //commented-as no need to show ekyc data within 72 hours>just redirect to VCIP==start
                            // if (result.dipDecision == "dipDone") {
                            //     // Already a submitted application in past 30 days 
                            //     console.log("Already a submitted application in past 30 days sending to submitted page")                       
                            //     $state.go('app.submitted-application', { 'cardKey': "VPC" });
                            // } else {
                            //     if (result.ekycDone == "true") {
                            //         console.log("Ekyc is completed in last 72 hours so no need to do again==", result.ekycDone)
                            //         vm.ekycDone = true;
                            //         vm.gender = UtilService.decodeData2(result["gender"]);
                            //         vm.aadhaarName = UtilService.decodeData2(result["aadhaarName"]);
                            //         //DOB (YYYY-MM-DD)
                            //         var dateOfBirth = UtilService.decodeData2(result["dateOfBirth"]);
                            //         var dob = new Date(dateOfBirth);
                            //         var dd = String(dob.getDate()).padStart(2, '0');
                            //         var mm = String(dob.getMonth() + 1).padStart(2, '0');
                            //         var yyyy = dob.getFullYear();
                            //         vm.date = dd;
                            //         vm.month = mm;
                            //         vm.year = yyyy;
                            //         // vm.model.mobile = result["mobile"];
                            //         // vm.model.email = result["email"];
                            //         vm.address1 = UtilService.decodeData2(result["house"]);
                            //         vm.address2 = UtilService.decodeData2(result["street"]);
                            //         vm.address3 = UtilService.decodeData2(result["landmark"]);
                            //         vm.location = UtilService.decodeData2(result["location"]);
                            //         vm.pinCode = UtilService.decodeData2(result["pincode"]);
                            //         vm.postalOffice = UtilService.decodeData2(result["postalOffice"]);
                            //         vm.city = UtilService.decodeData2(result["village"]);
                            //         vm.district = UtilService.decodeData2(result["district"]);
                            //         vm.subDistrict = UtilService.decodeData2(result["subDistrict"]);
                            //         vm.state = UtilService.decodeData2(result["state"]);
                            //         vm.photo = result["photo"];
                            //         vm.co = UtilService.decodeData2(result["co"]);
                            //         vm.uidToken = UtilService.decodeData2(result["uidToken"]);
                            //         vm.aadhaarReferenceKey = UtilService.decodeData2(result["aadhaarReferenceKey"]);
                            //         vm.enrollmentDate = UtilService.decodeData2(result["enrollmentDate"]);
                            //         vm.redactedAadhaar = UtilService.decodeData2(result["redactedAadhaar"]);
                            //         console.log("Ekycid in result", result.ekycId);
                            //         vm.ekycId = UtilService.decodeData2(result["ekycId"]);
                            //         console.log("Ekycid", vm.ekycId);
                            //         vm.frnLoanTrackerNumber=result["frnLoanTrackerNumber"]
                            //         vm.dipRetrigger = result["dipTrigger"];


                            //     } else if (result.ekycDone == "false") {
                            //         console.log("Ekyc is not completed in last 72 hours so  need to do again==", result.ekycDone)
                            //         vm.ekycDone = false;
                            //         //add diptrigger  true 

                            //     }
                            // }
                            //commented-as no need to show ekyc data within 72 hours>just redirect to VCIP==end

                        } else if (result.responseCode) {
                            vm.errMsg = result.responseMessage;
                            window.scroll(0, 0);
                        } else {
                            vm.errMsg = "Sorry there seems to be some issue";
                            window.scroll(0, 0);

                        }
                    });
                }

                vm.requestAadhaarOTP = function (retrievalForm) {
                    vm.errMsg = "";
                    vm.showOtpSent = false;
                    vm.aadhaarSubmitted = true;
                    // vm.aadhaarConsentCheck = vm.model.aadhaarConsent ? 'Y' : 'N';
                    if (retrievalForm.aadhaar.$valid && retrievalForm.aadhaarConsent.$valid) {
                        var securityParams = {
                            robocheck: vm.robocheck ? vm.robocheck : ''
                        };
                        var aadhaarNumber = UtilService.encodeData2(vm.model.aadhaar);

                        var reqData = {
                            aadhaar: aadhaarNumber,
                            mode: "SMS OTP",
                            aadhaarConsentFlag: vm.model.aadhaarConsent ? 'Y' : 'N',
                            "urlParamId": appState.getUrlParamId()
                        };
                        //console.log("Requested OTP with following reqData === ", JSON.stringify(reqData));
                        //console.log("resend OTP  is ==", sendOtpCounter);
                        if (sendOtpCounter > 3) {
                            window.scrollTo(0, 0);
                            vm.errMsg = "Sorry!! Maximum number of OTP request reached. Please close the browser and retry after some time.";
                            //console.log("resend OTP counter  is before ==", sendOtpCounter);
                            return;
                        }
                        reekycPageService.requestAadhaarOTP(reqData, securityParams).then(function (result) {
                            vm.typeInput = "password";
                            sendOtpCounter = sendOtpCounter + 1;
                            window.scrollTo(0, 0);
                            if (result.success) {
                                vm.txn = result["txn"];
                                vm.showOtpSent = true;
                                vm.otpSent = true;
                                vm.submitted = false;
                                vm.regenerateOTP = false;
                                vm.counter = 90;
                                countDown();
                            } else if (result.responseCode) {
                                vm.errMsg = result.responseMsg;
                            } else {
                                vm.errMsg = "Sorry!! It seems there is some issue with Aadhaar Portal ";
                            }
                        });
                    } else {
                        vm.submitted = true;
                        UtilService.focusOnInvalid('retrievalForm');
                    }
                }

                var countDown = function () {
                    $timeout(function () {
                        vm.counter--;
                        if (vm.counter <= 0) {
                            vm.regenerateOTP = true;
                        } else {
                            countDown();
                        }
                    }, 1000);
                };

                vm.submitOTP = function (retrievalForm) {
                    vm.errMsg = "";
                    vm.showOtpSent = false;
                    vm.vcipButton = false;

                    vm.submitted = false;
                    // vm.etbCustomer = false;
                    // vm.c11c35Timeout = false;
                    if (retrievalForm.otp.$valid) {
                        var securityParams = {
                            robocheck: vm.robocheck ? vm.robocheck : ''
                        };
                        var aadhaarNumber = UtilService.encodeData2(vm.model.aadhaar);
                        var reqData = {
                            otp: vm.model.otp,
                            aadhaar: aadhaarNumber,
                            txn: vm.txn,
                            mode: "SMS OTP",
                            "urlParamId": appState.getUrlParamId()
                        }
                        //console.log("Submit OTP reqData ======= ", JSON.stringify(reqData));
                        //console.log("validate OTP counter  is ==", validateOtpCounter);
                        if (validateOtpCounter > 3) {
                            window.scrollTo(0, 0);
                            vm.errMsg = "Sorry!! Maximum number of OTP validate is reached. Please close the browser and retry after some time.";
                            //console.log("validate OTP counter  is before ==", validateOtpCounter);
                            return;
                        }
                        reekycPageService.submitOTP(reqData, securityParams).then(function (result) {
                            validateOtpCounter = validateOtpCounter + 1;
                            if (result.success) {
                                window.scrollTo(0, 0);

                                vm.showForm = true;
                                vm.showFullTerm = true;
                                vm.vcipButton = true;

                                vm.gender = UtilService.decodeData2(result["gender"]);
                                vm.aadhaarName = UtilService.decodeData2(result["aadhaarName"]);
                                //DOB (YYYY-MM-DD)
                                var dateOfBirth = UtilService.decodeData2(result["dateOfBirth"]);
                                var dob = new Date(dateOfBirth);
                                //console.log("dob==",dob);
                                var dd = String(dob.getDate()).padStart(2, '0');
                                //console.log("dd==",dd);

                                var mm = String(dob.getMonth() + 1).padStart(2, '0');
                                //console.log("mm==",mm);

                                var yyyy = dob.getFullYear();
                                //console.log("yyyy==",yyyy);

                                // vm.date = dd;
                                // vm.month = mm;
                                // vm.year = yyyy;

                                if (dateOfBirth.length >= 5) {
                                    //console.log("length==full", dateOfBirth.length);
                                    vm.date = dd;
                                    vm.month = mm;
                                    vm.year = yyyy;
                                    vm.disabledDob = true;
        
                                } else {
                                    //console.log("length==year", dateOfBirth.length);
                                    // vm.model.date = "";
                                    // vm.model.month = "";
                                    vm.year = yyyy;
                                    vm.disabledDob = false;
        
                                }
                                // vm.model.mobile = result["mobile"];
                                // vm.model.email = result["email"];
                                vm.address1 = result["house"] ? UtilService.decodeData2(result["house"]) : "";
                                vm.address2 = result["street"] ? UtilService.decodeData2(result["street"]) : "";
                                vm.address3 = result["landmark"] ? UtilService.decodeData2(result["landmark"]) : "";
                                vm.location = result["location"] ? UtilService.decodeData2(result["location"]) : "";
                                vm.pinCode = UtilService.decodeData2(result["pincode"]);
                                vm.postalOffice = UtilService.decodeData2(result["postalOffice"]);
                                vm.city = UtilService.decodeData2(result["village"]);
                                vm.district = UtilService.decodeData2(result["district"]);
                                vm.subDistrict = UtilService.decodeData2(result["subDistrict"]);
                                vm.state = UtilService.decodeData2(result["state"]);
                                vm.photo = result["photo"];
                                vm.co = UtilService.decodeData2(result["co"]);
                                vm.uidToken = UtilService.decodeData2(result["uidToken"]);
                                vm.aadhaarReferenceKey = UtilService.decodeData2(result["aadhaarReferenceKey"]);
                                vm.enrollmentDate = UtilService.decodeData2(result["enrollmentDate"]);
                                vm.redactedAadhaar = UtilService.decodeData2(result["redactedAadhaar"]);
                                vm.ekycId = UtilService.decodeData2(result["ekycId"]);
                                vm.autoUrl = result["callbackUrl"]

                                // console.log("backend DipTrigger ==", result.dipTrigger);
                                // vm.dipRetrigger = result["dipTrigger"];
                                // console.log("vm.dipRetrigger ==", vm.dipRetrigger);
                                // vm.frnLoanTrackerNumber=result["frnLoanTrackerNumber"]

                                // if (result.responseCode == "203" && result.responseMsg == "Our records indicate that you are an existing customer of HSBC") {
                                //     console.log("ETb customer modal ==", vm.ekycId);
                                //     vm.etbCustomer = true;
                                //     openSuccessModel();

                                // } else if (result.responseCode == "203" && result.responseMsg == "Declined due to internal policy") {
                                //     $state.go('app.card-declined', { 'cardKey': "VPC" });
                                // } else if (result.responseCode == "201") {
                                //     $state.go('app.card-declined', { 'cardKey': "VPC" });
                                // } else if (result.responseCode == "408") {
                                //     vm.errMsg = "Sorry there seems to be some technical timeout in intermediate system, Please retry after some time.";
                                //     window.scrollTo(0, 0);
                                //     vm.c11c35Timeout = true;
                                // }
                            } else if (result.responseCode == 'K1') {
                                vm.errMsg = "Invalid OTP, Please retry.";
                                window.scrollTo(0, 0);
                            } else if (result.responseCode) {
                                vm.errMsg = result.responseMsg;
                            } else {
                                vm.errMsg = "Sorry there seems to be some technical error";
                                window.scrollTo(0, 0);
                            }
                        });
                    }
                }

                vm.exit = function () {
                    proceedClicked = false;
                    // alert('autoURL====' + vm.autoUrl);
                    window.location.href = vm.autoUrl;

                }

                window.addEventListener('beforeunload', function (e) {
                    //console.log("proceed=="+proceedClicked);
                    if (proceedClicked) {
                        //console.log("BrowserClose==");
                        e.preventDefault();
                        e.returnValue = 'Okay Bye';
                    } else {
                        //alert("not asking")
                        //console.log("no need to alert on procced click 11")
                    }
                });

                //window.removeEventListener('onbeforeunload',//console.log("no need to alert on procced click 22"))

                //$("button-primary no-margin-t-xs").addEventListener('click',console.log("Hi documnet"));
                // window.onbeforeunload = function () {
                //     console.log(" window.onbeforeunload")
                //     return "Did you save your stuff?"
                // }

                // vm.getAddressByPinCode = function (event, addressObj, pinCodeElement, emptyDistrict) {
                //     var key = event.keyCode || event.which;
                //     var pinCode = addressObj.pinCode;
                //     pinCodeElement.$setValidity('invalid', true);
                //     if (event.target.value.length === 6) {
                //         if (key === 13 || event.target.value.length === 6) {
                //             reekycPageService.getAddressByPostalCode(pinCode, '.masked-container').then(function (data) {
                //                 addressObj.district = data.district;
                //                 addressObj.state = data.state;
                //                 addressObj.city = data.city;
                //                 vm[emptyDistrict] = UtilService.isEmpty(data.district);
                //                 if (!vm.isStaffJourney) { //added too bypass ;ncode for staff
                //                     if (UtilService.isEmpty(data) || UtilService.isEmpty(data.state) || UtilService.isEmpty(data.city)) {
                //                         pinCodeElement.$setValidity('invalid', false);  //COMMENTED to openup pincode
                //                     }
                //                 }
                //             });
                //         }
                //     } else {
                //         addressObj.district = null;
                //         addressObj.state = null;
                //         addressObj.city = null;
                //     }
                // };

                // // getting bank bazaar address from IBPS-Yogesh
                vm.getOtherAddress = function () {
                    vm.showOtherAddress = false;
                    //console.log("Hi for getOtherAddress==");
                    if (vm.model.addressOptions == 'Current' || vm.model.addressOptions == 'Permanent') {
                        //console.log("Hi for getOtherAddress for " + vm.model.addressOptions + "==");
                        var securityParams = {
                            robocheck: vm.robocheck ? vm.robocheck : ''
                        };
                        var reqData = {
                            addressOption: vm.model.addressOptions,
                            "urlParamId": appState.getUrlParamId()
                        }
                        //console.log("data==", JSON.stringify(reqData));
                        reekycPageService.getOtherAddFromIbps(reqData, securityParams).then(function (result) {
                            //console.log("backend channel all data==", JSON.stringify(result));
                            if (result.success) {
                                vm.showOtherAddress = true;
                                vm.model.otherAddress1 = result.address1;
                                vm.model.otherAddress2 = result.address2;
                                vm.model.otherAddress3 = result.address3;
                                vm.model.otherPinCode = result.pincode;
                                vm.model.otherCity = result.city;
                                vm.model.otherState = result.state;
                                vm.model.otherDistrict = result.district;
                                vm.model.otherCountry = result.country;

                            }
                            else if (result.responseCode) {
                                // Invalid PSID: PSID doesn't exist
                                vm.errMsg = result.responseMessage;
                                analyticService.buttonList.error.event_content = "Invalid PSID error";
                                analyticService.trackUserAction(analyticService.buttonList.error);
                                window.scroll(0, 0);
                            } else if (result.responseCode === 10001) {
                                // Inactive PSID
                                vm.errMsg = "Sorry there seems to be some issue";
                                analyticService.buttonList.error.event_content = "Inactive PSID error";
                                analyticService.trackUserAction(analyticService.buttonList.error);
                            }
                        });
                    }
                }

                // // pushing address + DIP Check-Yogesh
                // vm.valAddDipCheck = function (retrievalForm) {
                //     //vm.vcipButton = false;
                //     //console.log("dipRetrigger==", vm.dipRetrigger);
                //     if (!vm.dipRetrigger) {
                //         $state.go('app.final-thankyou', {
                //             saveData: {
                //                 //statusCode: result.responseCode,
                //                 // autoUrl: result.signingUrl,
                //                 frnNumber: vm.frnLoanTrackerNumber,
                //                 ekycToken: vm.ekycId,
                //             },
                //             'cardKey': "VPC"
                //         });
                //         return;
                //     }
                //     if (vm.etbCustomer) {
                //         openSuccessModel();
                //         return;
                //     }
                //     if (vm.c11c35Timeout) {
                //         vm.errMsg = "Sorry there seems to be some technical timeout in intermediate system, Please retry after some time.";
                //         window.scrollTo(0, 0);
                //         return;
                //     }
                //     vm.dipCheckDone = false;
                //     //console.log("Hi is form valid==", retrievalForm.$valid);
                //     if (retrievalForm.$valid) {
                //         var securityParams = {
                //             robocheck: vm.robocheck ? vm.robocheck : ''
                //         };
                //         var reqData = {
                //             addressOption: vm.model.addressOptions,
                //             otherCountry: vm.model.otherCountry,
                //             otherAddress1: vm.model.otherAddress1,
                //             otherAddress2: vm.model.otherAddress2,
                //             otherAddress3: vm.model.otherAddress3,
                //             otherPinCode: vm.model.otherPinCode,
                //             otherCity: vm.model.otherCity,
                //             otherState: vm.model.otherState,
                //             otherDistrict: vm.model.otherDistrict,
                //             "urlParamId": appState.getUrlParamId()
                //         }
                //         console.log("front data to dip==", JSON.stringify(reqData));
                //         vm.showLoader = true;
                //         $rootScope.$broadcast('trigger-verification-loader', {
                //             showLoader: true,
                //             showCard: false,
                //             loaderType: 'DIP'
                //         });
                //        // setTimeout(() => {
                //             reekycPageService.goForDipCheck(reqData, securityParams).then(function (result) {
                //                 console.log("backend DIP  data==", JSON.stringify(result));
                //                 if (result.success) {
                //                     vm.dipCheckDone = true;
                //                     if (result.dipCode == 200) {
                //                         //  vm.vcipButton = true;
                //                         $state.go('app.final-thankyou', {
                //                             saveData: {
                //                                 statusCode: result.responseCode,
                //                                 // autoUrl: result.signingUrl,
                //                                 frnNumber: result.frnLoanTrackerNumber,
                //                                 dipRefNumber: result.dipArn,
                //                                 ekycToken: vm.ekycId,
                //                             },
                //                             'cardKey': "VPC"
                //                         });
                //                     } else if (result.dipCode == 201 || result.dipCode == 104 || result.dipCode == 101) {
                //                         $state.go('app.card-declined', { 'cardKey': "VPC" });
                //                     }
                //                 } else if (result.responseCode) {
                //                     vm.showLoader = false;
                //                     vm.errMsg = result.responseMsg;
                //                     analyticService.buttonList.error.event_content = "Invalid PSID error";
                //                     analyticService.trackUserAction(analyticService.buttonList.error);
                //                     window.scroll(0, 0);
                //                 }
                //             });
                //             // console.log("World!");
                //         // }, 5000);

                //     } else {
                //         vm.submitted = true;
                //         UtilService.focusOnInvalid('retrievalForm');
                //     }

                // }

                // var openSuccessModel = function () {
                //     console.log("inside ETB model for ==", vm.ekycId);
                //     var openSuccessModalInstance = $uibModal.open({
                //         backdrop: 'static',
                //         keyboard: false,
                //         modalFade: true,
                //         component: "opensuccessModal",
                //         windowClass: 'card-detail-modal'
                //     });
                //     openSuccessModalInstance.result.then(function (isSelected) {
                //         if (isSelected) {
                //             window.location.href = "http://www.hsbc.co.in/";
                //         } else {
                //             window.location.href = "http://www.hsbc.co.in/";
                //         }
                //     }, function () { });
                // }


            }
        ]
    });
    module.exports = ekycStep.name;
})();


/***/ }),

/***/ "./src/app/components/re-ekycPage/re-ekycPage.component.scss":
/* unknown exports provided */
/* all exports used */
/*!*******************************************************************!*\
  !*** ./src/app/components/re-ekycPage/re-ekycPage.component.scss ***!
  \*******************************************************************/
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/app/components/re-ekycPage/re-ekycPage.component.service.js":
/* unknown exports provided */
/* all exports used */
/*!*************************************************************************!*\
  !*** ./src/app/components/re-ekycPage/re-ekycPage.component.service.js ***!
  \*************************************************************************/
/***/ (function(module, exports) {

(function () {
    'use strict';

    var reekycPageService = angular.module('app').service('reekycPageService', ['$rootScope', '$http', '$q', '$timeout', '$interval', 'appState', 'CONFIG', function ($rootScope, $http, $q, $timeout, $interval, appState, CONFIG) {
        var self = this;
        self.arn = null;


        this.clearLocalState = function () {
            console.log(`clearing local state on load`);
            appState.removeUrlParamId();
        };

        //@AD - 04/16/2022 - will send request to backend
        this.requestAadhaarOTP = function (reqData, securityParams) {
            // console.log("Step 3 component service object ===", JSON.stringify(reqData));
            var apiURL, httpMethod;
            if ($rootScope.integrationsActive) {
                httpMethod = "POST";
                apiURL = CONFIG.apiUrl + '/re-Ekyc/requestOtp' + '?hash_id=' + Math.random();
                // console.log("API call to backend made successfully.", JSON.stringify(reqData).aadhaar);
            } else {
                httpMethod = "GET";
                apiURL = 'resources/data/mock/step3_personal-details/aadhaar_otp.json';
                // console.log("API call to mock made successfully.", JSON.stringify(reqData).aadhaar);
            }
            return $http({
                method: httpMethod,
                url: apiURL,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: reqData,
                params: securityParams
            }).then(function (response) {
                if (response.status === 200 && response.data) {
                    return response.data;
                } else {
                    return {
                        success: false,
                        message: "There is an error in triggering the OTP, please try again."
                    };
                }
            }, function (error) {
                return {
                    success: false,
                    message: "There is an error in triggering the OTP, please try again."
                };
            });
        }

        this.submitOTP = function (reqData, securityParams) {
            var apiURL, httpMethod;
            if ($rootScope.integrationsActive) {
                httpMethod = "POST";
                apiURL = CONFIG.apiUrl + '/re-Ekyc/submitEkyc' + '?hash_id=' + Math.random();
            } else {
                httpMethod = "GET";
                apiURL = "resources/data/mock/step3_personal-details/submit-OTP.json";
            }
            return $http({
                method: httpMethod,
                url: apiURL,
                headers: {
                    "Content-Type": "application/json"
                },
                data: reqData,
                params: securityParams
            }).then(function (response) {
                if (response.status === 200 && response.data) {
                    console.log("Submit-OTP response data ===", JSON.stringify(response.data));
                    return response.data;
                } else {
                    return {
                        success: false,
                        message: "Sorry! there seems to be some technical error."
                    };
                }
            }, function (error) {
                return {
                    success: false,
                    message: "Sorry! there seems to be some technical error."
                };
            });
        }

        this.getAddressByPostalCode = function (postalCode, maskContainer) {
            if ($rootScope.integrationsActive) {
                return $http.get(CONFIG.apiUrl + '/lookup/pincodePersonalDetails/' + postalCode, {}).then(function (response) {
                    if (response && response.status === 200) {
                        return response.data;
                    }
                });
            } else {
                var def = $q.defer();
                if (postalCode === "221204") {
                    def.resolve({ city: 'Varanasi', district: null, state: 'Uttar Pradesh' });
                } else if (postalCode === '201301') {
                    def.resolve({ city: 'Noida', district: 'Noida', state: 'Uttar Pradesh' });
                } else if (postalCode === '110096') {
                    def.resolve({ city: 'New Ashok Nagar', district: 'East Delhi', state: 'Delhi' });
                } else {
                    def.resolve({ city: '', district: '', state: '' });
                }
                return def.promise;
            }
        };

        this.getCountries = function () {
            return $http.get('resources/data/countries.json', {
                cache: true
            }).then(function (response) {
                return response.data;
            });
        };

        //This function is used get other address from IBPS -@28/07/2023 Yogesh
        self.getOtherAddFromIbps = function (reqData, securityParams) {
            // var channel=[];
            console.log("ReqData at service==", JSON.stringify(reqData));
            var apiURL, httpMethod;
            if ($rootScope.integrationsActive) {
                httpMethod = "POST";
                apiURL = CONFIG.apiUrl + '/bankBazaar/ekyc/getOtherAddres' + '?hash_id=' + Math.random();
            } else {
                httpMethod = "GET";
                apiURL = 'resources/data/mock/step3_personal-details/getOtherAddress.json';
            }
            return $http({
                method: httpMethod,
                url: apiURL,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: reqData,
                params: securityParams
            }).then(function (response) {
                if (response && response.status === 200 && response.data) {
                    //console.log("Channel from backen==",response.data);
                    return response.data;
                }
            });
        };

        self.sendConsentData = function (securityParams, reqData) {
            console.log("senCOnsent  1");
            var defer = $q.defer(),
                retryDip = { active: true, pollTimeout: 1 * 60 * 1000, pollInterval: 85 * 1000, pollCount: 4 };
            // dipCheck(consent, securityParams, defer);
            dipCheck(securityParams, defer, retryDip, reqData);
            $timeout(function () {
                var intervalPromise = $interval(function () {
                    console.log("intervalPromise  10");
                    if (retryDip.active) {
                        console.log("retryDip.active  tr===", retryDip.active);
                        console.log("intervalPromise retryDip.active 102");
                        dipCheck(securityParams, defer, retryDip, reqData);
                    } else {
                        console.log("retryDip.active  f===", retryDip.active);
                        $interval.cancel(intervalPromise);
                        // alert(" 0 Sorry there seems some issue. We have received timeout response from imtermediate system (AAPs). Please close the tab and try after some time")
                    }
                }, retryDip.pollInterval, retryDip.pollCount);
            }, retryDip.pollTimeout);

            return defer.promise;
        };

        var dipCheck = function (securityParams, defer, retryDip, reqData) {
            console.log("dipCheck  2", JSON.stringify(retryDip));
            var apiURL, httpMethod;
            if ($rootScope.integrationsActive) {
                httpMethod = "POST";
                apiURL = CONFIG.apiUrl + '/bankBazaar/goFor/dipCheck' + '?hash_id=' + Math.random();
            } else {
                httpMethod = "GET";
                apiURL = 'resources/data/mock/step3_personal-details/dipCheck.json';
            }
            return $http({
                method: httpMethod,
                url: apiURL,
                headers: {
                    'Content-Type': 'application/json'
                },
                // data: JSON.stringify(reqData),
                data: reqData,
                params: securityParams,
                hideLoader: true
            }).then(function (response) {
                console.log("response from backend  ===", response.data.dipCode);
                //  console.log("retryDip.active  1===",retryDip.active);
                retryDip.active = true;
                // console.log("retryDip.active 2 ===",retryDip.active);
                if (response.status === 200 && response.data) {
                    if (response.data.dipCode === 1004) {
                        console.log("response.data.dipCode === 1004 ===", response.data.dipCode);

                        // dipCheck(reqData, securityParams, defer);
                        dipCheck(securityParams, defer, reqData);
                        console.log("calling dipCheck again==")
                    } else {
                        console.log("else of 1004 resolve")

                        defer.resolve(response.data);
                    }
                } else {
                    console.log("else of 200==")
                    defer.reject("Some error has occured");
                    alert(" 1 Sorry  there seems some issue. We have received timeout response from imtermediate system (AAPs). Please close the tab and try after some time")
                }
            }, function (response) {
                console.log("Returning end response==", JSON.stringify(response));
                return;
            });
        };



        // This function is used get data BB from IBPS and DIP check -@28/07/2023 Yogesh 
        self.goForDipCheck = function (reqData, securityParams) {
            console.log("ReqData at service==", JSON.stringify(reqData));
            var apiURL, httpMethod;
            if ($rootScope.integrationsActive) {
                httpMethod = "POST";
                apiURL = CONFIG.apiUrl + '/bankBazaar/goFor/dipCheck' + '?hash_id=' + Math.random();
            } else {
                httpMethod = "GET";
                apiURL = 'resources/data/mock/step3_personal-details/dipCheck.json';
            }
            return $http({
                method: httpMethod,
                url: apiURL,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: reqData,
                params: securityParams
            }).then(function (response) {
                if (response && response.status === 200 && response.data) {
                    console.log("Channel from backen 200==", JSON.stringify(response));
                    return response.data;
                } else {
                    console.log("Channel from backen else==", JSON.stringify(response));

                    return {
                        success: false,
                        responseCode: 500,
                        responseMsg: "Sorry! there ssems to be some technical error."
                    };
                }
            });
        };

        //This function is used to check if ekyc is done or not in lasy 72 hours -@28/07/2023 Yogesh
        self.getEkycDone = function (reqData, securityParams) {
            // console.log("ReqData at service for ekycDone==",JSON.stringify(reqData));
            var apiURL, httpMethod;
            if ($rootScope.integrationsActive) {
                httpMethod = "POST";
                apiURL = CONFIG.apiUrl + '/re-Ekyc/goForEkycDone' + '?hash_id=' + Math.random();
            } else {
                httpMethod = "GET";
                apiURL = 'resources/data/mock/step3_personal-details/ekycDoneCheck.json';
            }
            return $http({
                method: httpMethod,
                url: apiURL,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: reqData,
                params: securityParams
            }).then(function (response) {
                if (response && response.status === 200 && response.data) {
                    //console.log("Channel from backen==",response.data);
                    return response.data;
                }
            });
        };


    }]);

    module.exports = reekycPageService.name;
})();


/***/ })

});
//# sourceMappingURL=0ca00bfdf68a4f4ae4ac7.js.map