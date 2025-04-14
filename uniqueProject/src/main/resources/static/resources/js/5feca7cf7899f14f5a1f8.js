webpackJsonp([8],{

/***/ "./src/app/components/paiseBazar/open-success-modal/open-success.modal.component.html":
/* unknown exports provided */
/* all exports used */
/*!********************************************************************************************!*\
  !*** ./src/app/components/paiseBazar/open-success-modal/open-success.modal.component.html ***!
  \********************************************************************************************/
/***/ (function(module, exports) {

module.exports = "<div class=modal-header> <div class=heading-container> </div> <div class=close-button-container> <button type=button class=close aria-label=Close ng-click=$ctrl.cancel()> <span aria-hidden=true>×</span> </button> </div> </div> <div class=modal-body> <p class=no-margin-b> <br> <b>Our records indicate that you are an existing customer of HSBC.</b> <br> </p> </div> <div class=modal-footer> <div class=buttons-container> <button class=button-primary ng-click=$ctrl.Close(true)>OK</button> </div> </div>";

/***/ }),

/***/ "./src/app/components/paiseBazar/open-success-modal/open-success.modal.component.js":
/* unknown exports provided */
/* all exports used */
/*!******************************************************************************************!*\
  !*** ./src/app/components/paiseBazar/open-success-modal/open-success.modal.component.js ***!
  \******************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

(function () {
    'use strict';
    var angular = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
    __webpack_require__(/*! ./open-success.modal.component.scss */ "./src/app/components/paiseBazar/open-success-modal/open-success.modal.component.scss");

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
        template: __webpack_require__(/*! ./open-success.modal.component.html */ "./src/app/components/paiseBazar/open-success-modal/open-success.modal.component.html"),
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

/***/ "./src/app/components/paiseBazar/open-success-modal/open-success.modal.component.scss":
/* unknown exports provided */
/* all exports used */
/*!********************************************************************************************!*\
  !*** ./src/app/components/paiseBazar/open-success-modal/open-success.modal.component.scss ***!
  \********************************************************************************************/
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/app/components/paiseBazar/paiseBazar.component.html":
/* unknown exports provided */
/* all exports used */
/*!*****************************************************************!*\
  !*** ./src/app/components/paiseBazar/paiseBazar.component.html ***!
  \*****************************************************************/
/***/ (function(module, exports) {

module.exports = "<div ng-hide=$ctrl.showLoader class=row> <div class=phonetext style=margin:2rem> <div class=\"view-container header-spacer\"> <form ng-hide=\"$ctrl.showLoader|| $ctrl.ekycDonegoVKYC\" name=paisaBazarForm autocomplete=off focus-on-error novalidate> <input type=text class=hidden-field ng-model=$ctrl.robocheck tabindex=-1> <alert-msg ng-if=$ctrl.showOtpSent type=SUCCESS close=$ctrl.closeSuccessMsg()> One Time Password (OTP) has been sent to the Registered Mobile number. Please click \"Re-send OTP\" if you have not received OTP </alert-msg> <alert-msg ng-if=$ctrl.successMsg type=SUCCESS> {{$ctrl.successMsg}} </alert-msg> <alert-msg ng-if=$ctrl.errMsg type=ERROR> {{$ctrl.errMsg}} </alert-msg> <div> <div class=row ng-if=!$ctrl.ekycDone> <div class=\"col-md-6 col-sm-0 col-xs-0\"> <div class=\"form-group line-spacer\"> <label for=aadhaar>Enter Your Aadhaar Number(12 digits) / Virtual ID(16 digits) <span style=color:red>*</span></label> <div ng-class=\"{'has-error': paisaBazarForm.aadhaar.$invalid && (paisaBazarForm.aadhaar.$touched || $ctrl.aadhaarSubmitted)}\"> <input type={{$ctrl.typeInput}} id=aadhaar name=aadhaar only-number=16 class=form-control aria-describedby=aadhaarErrMsg ng-trim=true autofocus=autofocus ng-model=$ctrl.model.aadhaar ng-minlength=12 ng-pattern=/^[2-9][0-9]{11}$|^[0-9]{16}$/ placeholder=\"As per ID\" aria-invalid=\"{{paisaBazarForm.aadhaar.$invalid && ($ctrl.model.submitted || paisaBazarForm.aadhaar.$touched)}}\" ng-disabled=\"$ctrl.otpSent || $ctrl.showForm\" required> </div> <div id=aadhaarErrMsg ng-class=\"{'has-error': paisaBazarForm.aadhaar.$invalid}\"> <validation-msg ng-if=\"paisaBazarForm.aadhaar.$error.required && (paisaBazarForm.aadhaar.$touched || $ctrl.aadhaarSubmitted)\"> Please make sure you have entered your Virtual ID/Aadhaar number to continue with your application. </validation-msg> <validation-msg ng-if=\"(paisaBazarForm.aadhaar.$error.minlength || paisaBazarForm.aadhaar.$error.pattern) && paisaBazarForm.aadhaar.$touched\"> Please input a valid Virtual ID/Aadhaar number to continue with your application. </validation-msg> </div> </div> </div> </div> <div class=\"form-group line-spacer\" ng-if=\"$ctrl.otpSent && !$ctrl.ekycDone\"> <label for=otp>OTP</label> <div class=row> <div class=\"col-md-4 col-sm-6 col-xs-12\"> <div ng-class=\"{'has-error': paisaBazarForm.otp.$invalid && (paisaBazarForm.otp.$touched || $ctrl.submitted)}\"> <input trim type=\"{{$ctrl.showForm?'password':'tel'}}\" id=otp name=otp class=form-control ng-model=$ctrl.model.otp only-number=6 ng-minlength=6 aria-describedby=OTPErrMsg aria-invalid=\"{{paisaBazarForm.otp.$invalid && (paisaBazarForm.otp.$touched || $ctrl.submitted)}}\" ng-disabled=$ctrl.showForm required> </div> <div id=OTPErrMsg ng-class=\"{'has-error': paisaBazarForm.otp.$invalid&& ($ctrl.submitted || paisaBazarForm.otp.$touched)}\"> <validation-msg ng-if=\"paisaBazarForm.otp.$error.required && (paisaBazarForm.otp.$touched || $ctrl.submitted)\"> Please enter OTP </validation-msg> <validation-msg ng-if=\"paisaBazarForm.otp.$error.minlength && (paisaBazarForm.otp.$touched || $ctrl.submitted)\"> Invalid OTP </validation-msg> </div> </div> <div class=\"col-md-4 col-sm-6 col-xs-12 line-spacer-xs\" ng-hide=$ctrl.showForm> <span class=link-text ng-class=\"{'disabled': !$ctrl.regenerateOTP}\" ng-click=\"$ctrl.regenerateOTP ? $ctrl.requestAadhaarOTP(paisaBazarForm) : $event.preventDefault()\">Re-send OTP </span> <span ng-if=\"$ctrl.counter > 0\">({{$ctrl.counter}} sec)</span> </div> </div> </div> </div> <div class=row ng-if=!$ctrl.ekycDone> <div class=\"col-md-12 col-sm-14 col-xs-12\"> <div class=\"form-group line-spacer\"> <div id=aadhaarConsentErrMsg ng-class=\"{'has-error': paisaBazarForm.aadhaarConsent.$invalid && (paisaBazarForm.aadhaarConsent.$touched || $ctrl.submitted)}\"> <validation-msg ng-if=\"paisaBazarForm.aadhaarConsent.$error.required && (paisaBazarForm.aadhaarConsent.$touched || $ctrl.submitted)\"> Please check this box if you want to proceed. </validation-msg> </div> <div ng-class=\"{'has-error': paisaBazarForm.aadhaarConsent.$invalid && (paisaBazarForm.aadhaarConsent.$touched || $ctrl.submitted)}\"> <input type=checkbox id=aadhaarConsent name=aadhaarConsent class=screen-reader-only ng-model=$ctrl.model.aadhaarConsent ng-focus=\"$ctrl.hasAadhaarConsentFocus = true\" ng-blur=\"$ctrl.hasAadhaarConsentFocus = false\" aria-describedby=aadhaarConsentErrMsg aria-invalid=\"{{paisaBazarForm.aadhaarConsent.$invalid && (paisaBazarForm.aadhaarConsent.$touched || $ctrl.submitted)}}\" required ng-disabled=\"$ctrl.otpSent || $ctrl.showForm\"> <label ng-show=$ctrl.showFullTerm for=aadhaarConsent class=\"checkbox-label tpsa-label\" ng-class=\"{'focus': $ctrl.hasAadhaarConsentFocus}\"> <font size=2>This is to confirm that ...</font> <span style=color:red>*</span> </label> <div ng-show=!$ctrl.showFullTerm class=text-right> <span ng-click=\"$ctrl.showFullTerm = true\"> <span class=\"icon icon-chevron-up\" aria-hidden=true></span>Read less </span> </div> <div ng-show=$ctrl.showFullTerm class=text-right> <span ng-click=\"$ctrl.showFullTerm = false\"> <span class=\"icon icon-chevron-down\" aria-hidden=true></span>Read more </span> </div> <input type=checkbox id=aadhaarConsent1 name=aadhaarConsent class=screen-reader-only ng-model=$ctrl.model.aadhaarConsent ng-focus=\"$ctrl.hasAadhaarConsentFocus = true\" ng-blur=\"$ctrl.hasAadhaarConsentFocus = false\" aria-describedby=aadhaarConsentErrMsg aria-invalid=\"{{paisaBazarForm.aadhaarConsent.$invalid && (paisaBazarForm.aadhaarConsent.$touched || $ctrl.submitted)}}\" required ng-disabled=\"$ctrl.otpSent || $ctrl.showForm\"> <label ng-show=!$ctrl.showFullTerm for=aadhaarConsent1 class=\"checkbox-label tpsa-label\" ng-class=\"{'focus': $ctrl.hasAadhaarConsentFocus}\"> <br> <meta charset=UTF-8 /> <p> <span style=color:red>*</span> <font size=2> This is to confirm that I have been provided various options by HSBC India for establishing my identity for the purpose opening/maintenance of accounts with the Bank. For the purpose of establishing my identity, I have voluntarily submitted my Aadhaar for biometric/OTP based e-KYC authentication as per the facility provided by UIDAI. I hereby give my consent to HSBC India: i) To establish my identity/address proof by Aadhaar based authentication system or verify the genuineness of the Aadhaar through UIDAI specified scheme/s or through such other manner as set out by UIDAI or any other law from time to time. ii) Share my Aadhaar and associated demographic details with UIDAI directly or through its authorised agencies (NPCI), concerned regulatory or statutory authorities as may be required under applicable laws. The consent and purpose of collecting Aadhaar have been explained to me and I confirm having understood the same. I have also been informed that: a) Upon authentication, UIDAI may share information in nature of my demographic information including photograph which HSBC India may use as an identity/address proof for the above mentioned purpose. b) My Aadhaar details (including my demographic information) shared by UIDAI will not be used for any purpose other than the purpose mentioned above or as per requirement of law. c) My biometric information will not be stored by the Bank. </font> </p> <p> <font size=2> मैं यह पुष्टि करता हूँ कि बैंक के साथ खाता खोलने / बनाए रखने के लिए मुझे अपनी पहचान स्थापित करने के लिए एचएसबीसी इंडिया द्वारा विभिन्न विकल्प प्रदान किए गए हैं। मैंने अपनी पहचान स्थापित करने के लिए , यूआईडीएआई द्वारा प्रदान की गई सुविधा के अनुसार बायोमेट्रिक/ओटीपी आधारित ई-केवाईसी प्रमाणीकरण के लिए स्वेच्छा से अपना आधार जमा किया है। मैं एतद्वारा एचएसबीसी इंडिया को अपनी सहमति देता हूं: <br> i) आधार आधारित प्रमाणीकरण प्रणाली द्वारा मेरी पहचान / पता स्थापित कर सकते हैं या यूआईडीएआई द्वारा निर्दिष्ट योजना / योजनाओं या यूआईडीएआई द्वारा निर्धारित अन्य तरीके या समय- समय पर किसी अन्य कानून के माध्यम से आधार की वास्तविकता को सत्यापित कर सकते हैं। <br> ii) अगर लागू कानूनों के तहत आवश्यक हो तो मेरे आधार और संबंधित जनसांख्यिकीय विवरण को सीधे यूआईडीएआई के साथ या इसकी अधिकृत एजेंसियों (एनपीसीआई), संबंधित नियामक या वैधानिक प्राधिकरणों के माध्यम से साझा कर सकते हैं। <br> आधार एकत्र करने की सहमति और उद्देश्य के बारे में मुझे बताया गया है और मैं पुष्टि करता हूं कि मैं इसे समझ गया हूं। मुझे यह भी सूचित किया गया है कि: <br> ए) प्रमाणीकरण पर, यूआईडीएआई मेरी जनसांख्यिकीय जानकारी साझा कर सकता है जिसेमें फोरोग्राफ शामिल है, जिसे एचएसबीसी इंडिया ऊपर लिए उद्देश्य के लिए पहचान/पता प्रमाण के रूप में उपयोग कर सकता है। <br> बी) यूआईडीएआई द्वारा साझा किए गए मेरे आधार विवरण (मेरी जनसांख्यिकीय जानकारी सहित) का उपयोग ऊपर लिखे उद्देश्य या कानून की आवश्यकता के अलावा किसी अन्य उद्देश्य के लिए नहीं किया जाएगा। <br> ग) मेरी बायोमेट्रिक जानकारी बैंक द्वारा संग्रहित नहीं की जाएगी। </font> </p> </label> <div class=line-spacer> <div class=\"col-md-6 col-sm-12 col-xs-12\"> <p>Click on the play button to play a TnC in English:</p> <audio id=myAudioEnglish controls> <source ng-src=resources/audio/TncEnglish.m4a type=audio/mpeg>s Your browser does not support the audio element. </audio> </div> </div> <div class=\"col-md-6 col-sm-6 col-xs-12\"> <p> हिंदी में टीएनसी सूनने के लिए प्ले बटन पर क्लिक करें:</p> <audio id=myAudioHindi controls> <source ng-src=resources/audio/TncHindi.m4a type=audio/mpeg> Your browser does not support the audio element. </audio> </div> </div> </div> </div> </div> <div class=row> <div class=\"form-group row text-center\"> <div class=\"col-md-12 col-sm-14 col-xs-12\" ng-if=\"($ctrl.otpSent && $ctrl.showForm) || $ctrl.ekycDone\"> <hr class=line-spacer ng-if=!$ctrl.ekycDone> <h2 class=brand-bar>Aadhaar Details Verification</h2> <img ng-src=resources/images/aadhaar_logo.png width=200px height=128px /> <br> <br> <h3>Reference Key - {{$ctrl.aadhaarReferenceKey}}</h3> <img ng-src=data:image/png;base64,{{$ctrl.photo}} class=center /> <div class=line-spacer> <table class=center> <tr> <th colspan=4>Aadhaar Details</th> </tr> <tr> <td class=bold colspan=2>Aadhaar Reference Key</td> <td colspan=2>{{$ctrl.aadhaarReferenceKey}}</td> </tr> <tr> <td class=bold colspan=2>Enrollment Date</td> <td colspan=2>{{$ctrl.enrollmentDate}}</td> </tr> <tr> <td class=bold>Redacted Aadhaar</td> <td>{{$ctrl.redactedAadhaar}}</td> <td class=bold>Mode</td> <td>SMS OTP</td> </tr> </table> </div> <div class=line-spacer> <table class=center> <tr> <th colspan=4>Personal Details</th> </tr> <tr> <td class=bold colspan=2>Name</td> <td colspan=2>{{$ctrl.aadhaarName}}</td> </tr> <tr> <td class=bold colspan=2>C/O</td> <td colspan=2>{{$ctrl.co}}</td> </tr> <tr> <td class=bold>Gender</td> <td>{{$ctrl.gender}}</td> <td class=bold ng-if=$ctrl.disabledDob>Date Of Birth</td> <td class=bold ng-if=!$ctrl.disabledDob>Year Of Birth</td> <td ng-if=$ctrl.disabledDob>{{$ctrl.date}}-{{$ctrl.month}}-{{$ctrl.year}}</td> <td ng-if=!$ctrl.disabledDob>{{$ctrl.year}}</td> </tr> </table> </div> <div class=line-spacer> <table class=center> <tr> <th colspan=4>Address Details</th> </tr> <tr> <td class=bold colspan=2>House</td> <td colspan=2>{{$ctrl.address1}}</td> </tr> <tr> <td class=bold colspan=2>Street</td> <td colspan=2>{{$ctrl.address2}}</td> </tr> <tr> <td class=bold colspan=2>Landmark</td> <td colspan=2>{{$ctrl.address3}}</td> </tr> <tr> <td class=bold colspan=2>Location</td> <td colspan=2>{{$ctrl.location}}</td> </tr> <tr> <td class=bold colspan=2>Village</td> <td colspan=2>{{$ctrl.city}}</td> </tr> <tr> <td class=bold>Sub District</td> <td>{{$ctrl.subDistrict}}</td> <td class=bold>District</td> <td>{{$ctrl.district}}</td> </tr> <tr> <td class=bold>State</td> <td>{{$ctrl.state}}</td> <td class=bold>PIN Code</td> <td>{{$ctrl.pinCode}}</td> </tr> <tr> <td class=bold colspan=2>Post Ofiice</td> <td colspan=2>{{$ctrl.postalOffice}}</td> </tr> </table> </div> <div class=row style=margin:10px ng-if=\"($ctrl.otpSent && $ctrl.showForm) || $ctrl.ekycDone\"> <div class=\"col-md-7 col-sm-0 col-xs-0 text-left\"> <div class=\"form-group line-spacer\"> <label class=brand-bar id=addressOptionLabel for=addressOption> Is Aadhar your Current address ? <span style=color:red>*</span> </label> <div ng-class=\"{'has-error': paisaBazarForm.addressOption.$invalid && (paisaBazarForm.addressOption.$touched || $ctrl.submitted)}\"> <custom-select> <select id=addressOption name=addressOption class=form-control ng-change=$ctrl.getCurrentAddress() ng-model=$ctrl.model.addressOptions ng-options=\"item for item in $ctrl.addressOptions\" aria-describedby=addressOptionErrMsg aria-invalid=\"{{paisaBazarForm.addressOption.$invalid && (paisaBazarForm.addressOption.$touched || $ctrl.submitted)}}\" required> <option value=\"\" disabled=disabled>Please select</option> </select> </custom-select> </div> <div id=addressOptionErrMsg ng-class=\"{'has-error': paisaBazarForm.addressOption.$invalid}\"> <validation-msg ng-if=\"paisaBazarForm.addressOption.$invalid && (paisaBazarForm.addressOption.$touched || $ctrl.submitted)\"> Please tell us about your address using the drop-down menu to continue with your application. </validation-msg> </div> </div> </div> </div> <div class=\"row text-center\" style=margin:15px> <div id=current-address ng-if=$ctrl.showCurrentAddress> <hr class=\"line-spacer no-margin-bottom\"> <h2 class=brand-bar>Please Confirm/Update Your Current Residential Address</h2> <div class=row> <div class=\"col-md-4 col-sm-6 col-xs-12\"> <div class=form-group> <label id=currentCountryLbl for=currentCountry>Country</label> <div ng-class=\"{'has-error': paisaBazarForm.currentCountry.$invalid && ($ctrl.submitted || paisaBazarForm.currentCountry.$touched)}\"> <input type=text trim address-chars=35 class=form-control id=currentCountry name=currentCountry aria-describedby=currFlatNumErrMsg ng-disabled=true ng-maxlength=35 ng-model=$ctrl.model.otherCurrentCountry required> </div> </div> </div> <div class=\"col-md-4 col-sm-6 col-xs-12\"> <div class=\"form-group line-spacer-xs\"> <label for=currentFlatNumber> Flat number and building name <span style=color:red>*</span> </label> <div ng-class=\"{'has-error': paisaBazarForm.currentFlatNumber.$invalid && ($ctrl.submitted || paisaBazarForm.currentFlatNumber.$touched)}\"> <input type=text trim address-chars=35 class=form-control id=currentFlatNumber name=currentFlatNumber aria-describedby=currFlatNumErrMsg onkeypress=\"0===this.value.length&&32===event.charCode&&event.preventDefault()\" ng-pattern=/^([0-9a-zA-Z]{1,}|[\\s]{1}[0-9a-zA-Z]{1,})*$/ ng-maxlength=35 ng-model=$ctrl.model.otherCurrentAddress1 aria-invalid=\"{{paisaBazarForm.currentFlatNumber.$invalid && ($ctrl.submitted || paisaBazarForm.currentFlatNumber.$touched)}}\" required> </div> <div id=currFlatNumErrMsg ng-class=\"{'has-error': paisaBazarForm.currentFlatNumber.$invalid && ($ctrl.submitted || paisaBazarForm.currentFlatNumber.$touched)}\"> <validation-msg ng-if=\"paisaBazarForm.currentFlatNumber.$error.required && ($ctrl.submitted || paisaBazarForm.currentFlatNumber.$touched)\"> Please enter your flat number and building name to continue with your application. </validation-msg> <validation-msg ng-if=\"paisaBazarForm.currentFlatNumber.$error.maxlength && ($ctrl.submitted || paisaBazarForm.currentFlatNumber.$touched)\"> Maximum of 35 characters (including spaces) allowed. </validation-msg> <validation-msg ng-if=\"( paisaBazarForm.currentFlatNumber.$error.pattern) && ($ctrl.submitted || paisaBazarForm.currentFlatNumber.$touched)\"> Please do not enter any special characters. </validation-msg> </div> </div> </div> </div> <div class=row> <div class=\"col-md-4 col-sm-6 col-xs-12\"> <div class=\"form-group line-spacer\"> <label for=currentRoadNumber> Road number/name (optional) </label> <div ng-class=\"{'has-error': paisaBazarForm.currentRoadNumber.$invalid && ($ctrl.submitted || paisaBazarForm.currentRoadNumber.$touched)}\"> <input type=text trim address-chars=35 class=form-control id=currentRoadNumber name=currentRoadNumber aria-describedby=currRoadNumErrMsg onkeypress=\"0===this.value.length&&32===event.charCode&&event.preventDefault()\" ng-pattern=/^([0-9a-zA-Z]{1,}|[\\s]{1}[0-9a-zA-Z]{1,})*$/ ng-maxlength=35 ng-model=$ctrl.model.otherCurrentAddress2 aria-invalid=\"{{paisaBazarForm.currentRoadNumber.$invalid && ($ctrl.submitted || paisaBazarForm.currentRoadNumber.$touched)}}\"> </div> <div id=currRoadNumErrMsg ng-class=\"{'has-error': $ctrl.ekyc!='Yes' && paisaBazarForm.currentRoadNumber.$invalid && ($ctrl.submitted || paisaBazarForm.currentRoadNumber.$touched)}\"> <validation-msg ng-if=\"paisaBazarForm.currentRoadNumber.$error.required && ($ctrl.submitted || paisaBazarForm.currentRoadNumber.$touched)\"> Please enter your road number/name to continue with your application. </validation-msg> <validation-msg ng-if=\"paisaBazarForm.currentRoadNumber.$error.maxlength && ($ctrl.submitted || paisaBazarForm.currentRoadNumber.$touched)\"> Maximum of 35 characters (including spaces) allowed. </validation-msg> <validation-msg ng-if=\"( paisaBazarForm.currentRoadNumber.$error.pattern) && ($ctrl.submitted || paisaBazarForm.currentRoadNumber.$touched)\"> Please do not enter any special characters. </validation-msg> </div> </div> </div> <div class=\"col-md-4 col-sm-6 col-xs-12\"> <div class=\"form-group line-spacer\"> <label for=currentArea> Area and landmark (optional) </label> <div ng-class=\"{'has-error': paisaBazarForm.currentArea.$invalid && ($ctrl.submitted || paisaBazarForm.currentArea.$touched)}\"> <input type=text trim address-chars=35 class=form-control id=currentArea name=currentArea aria-describedby=currAreaErrMsg onkeypress=\"0===this.value.length&&32===event.charCode&&event.preventDefault()\" ng-pattern=/^([0-9a-zA-Z]{1,}|[\\s]{1}[0-9a-zA-Z]{1,})*$/ ng-maxlength=35 ng-model=$ctrl.model.otherCurrentAddress3 aria-invalid=\"{{paisaBazarForm.currentArea.$invalid && ($ctrl.submitted || paisaBazarForm.currentArea.$touched)}}\"> </div> <div id=currAreaErrMsg ng-class=\"{'has-error': paisaBazarForm.currentArea.$invalid && ($ctrl.submitted || paisaBazarForm.currentArea.$touched)}\"> <validation-msg ng-if=\"paisaBazarForm.currentArea.$error.required && ($ctrl.submitted || paisaBazarForm.currentArea.$touched)\"> Please enter your area and landmark to continue with your application. </validation-msg> <validation-msg ng-if=\"paisaBazarForm.currentArea.$error.maxlength && ($ctrl.submitted || paisaBazarForm.currentArea.$touched)\"> Maximum of 35 characters (including spaces) allowed. </validation-msg> <validation-msg ng-if=\"( paisaBazarForm.currentArea.$error.pattern) && ($ctrl.submitted || paisaBazarForm.currentArea.$touched)\"> Please do not enter any special characters. </validation-msg> </div> </div> </div> </div> <div class=row> <div class=\"col-md-4 col-sm-6 col-xs-12\"> <div class=\"form-group line-spacer\"> <label for=currentPinCode> Pin code <span style=color:red>*</span> </label> <div ng-class=\"{'has-error': paisaBazarForm.currentPinCode.$invalid && ($ctrl.submitted || paisaBazarForm.currentPinCode.$touched || paisaBazarForm.currentPinCode.$error.invalid)}\"> <input type=tel trim class=form-control id=currentPinCode name=currentPinCode aria-describedby=currPinErrMsg only-number=6 onkeypress=\"32===event.charCode&&event.preventDefault()\" ng-minlength=6 ng-keyup=\"$ctrl.getAddressByPinCode($event, paisaBazarForm.currentPinCode, 'currDistEmpty')\" ng-model=$ctrl.model.otherCurrentPinCode aria-invalid=\"{{paisaBazarForm.currentPinCode.$invalid && ($ctrl.submitted || paisaBazarForm.currentPinCode.$touched || paisaBazarForm.currentPinCode.$error.invalid)}}\" required> </div> <div id=currPinErrMsg ng-class=\"{'has-error': paisaBazarForm.currentPinCode.$invalid}\"> <validation-msg ng-if=\"paisaBazarForm.currentPinCode.$error.required && ($ctrl.submitted || paisaBazarForm.currentPinCode.$touched)\"> Please enter your pin code to continue with your application. </validation-msg> <validation-msg ng-if=\"paisaBazarForm.currentPinCode.$error.minlength && ($ctrl.submitted || paisaBazarForm.currentPinCode.$touched)\"> Please enter a minimum of 6 digits Pin code </validation-msg> <validation-msg ng-if=\"paisaBazarForm.currentPinCode.$error.invalid && !paisaBazarForm.currentPinCode.$error.required && !paisaBazarForm.currentPinCode.$error.minlength && !$ctrl.isStaffJourney\"> Please enter a valid pin code to continue with your application. </validation-msg> </div> </div> </div> <div class=\"col-md-4 col-sm-6 col-xs-12\"> <div class=\"form-group line-spacer\"> <label for=currentCity>City</label> <span style=color:red>*</span> <div ng-class=\"{'has-error': paisaBazarForm.currentCity.$invalid && ($ctrl.submitted || paisaBazarForm.currentCity.$touched)}\"> <input type=text trim alpha-space=20 class=form-control id=currentCity name=currentCity aria-describedby=currCityErrMsg onkeypress=\"0===this.value.length&&32===event.charCode&&event.preventDefault()\" aria-invalid=\"{{paisaBazarForm.currentCity.$invalid && ($ctrl.submitted || paisaBazarForm.currentCity.$touched)}}\" ng-model=$ctrl.model.otherCurrentCity required> </div> <div id=currCityErrMsg ng-class=\"{'has-error': paisaBazarForm.currentCity.$invalid}\"> <validation-msg ng-if=\"paisaBazarForm.currentCity.$error.required && ($ctrl.submitted || paisaBazarForm.currentCity.$touched)\"> Please enter your city to continue with your application. </validation-msg> </div> </div> </div> </div> <div class=row> <div class=\"col-md-4 col-sm-6 col-xs-12\"> <div class=\"form-group line-spacer\"> <label for=currentDistrict>District</label> <span style=color:red>*</span> <div ng-class=\"{'has-error': paisaBazarForm.currentDistrict.$invalid && ($ctrl.submitted || paisaBazarForm.currentDistrict.$touched)}\"> <input type=text trim alpha-space=20 class=form-control id=currentDistrict name=currentDistrict aria-describedby=currDistErrMsg onkeypress=\"0===this.value.length&&32===event.charCode&&event.preventDefault()\" ng-model=$ctrl.model.otherCurrentDistrict aria-describedby=currDistrictErrMsg aria-invalid=\"{{paisaBazarForm.currentDistrict.$invalid && ($ctrl.submitted || paisaBazarForm.currentDistrict.$touched)}}\" required> </div> <div id=currDistrictErrMsg ng-class=\"{'has-error': paisaBazarForm.currentDistrict.$invalid}\"> <validation-msg ng-if=\"paisaBazarForm.currentDistrict.$error.required && ($ctrl.submitted || paisaBazarForm.currentDistrict.$touched)\"> Please enter your district to continue with your application. </validation-msg> </div> </div> </div> <div class=\"col-md-4 col-sm-6 col-xs-12\"> <div class=\"form-group line-spacer\"> <label for=currentState>State <span style=color:red>*</span></label> <div ng-class=\"{'has-error': paisaBazarForm.currentState.$invalid && ($ctrl.submitted || paisaBazarForm.currentState.$touched)}\"> <input alpha-space=20 trim type=text class=form-control id=currentState name=currentState aria-describedby=currStateErrMsg onkeypress=\"0===this.value.length&&32===event.charCode&&event.preventDefault()\" ng-model=$ctrl.model.otherCurrentState aria-describedby=currStateErrMsg aria-invalid=\"{{paisaBazarForm.currentState.$invalid && ($ctrl.submitted || paisaBazarForm.currentState.$touched)}}\" required> </div> <div id=currStateErrMsg ng-class=\"{'has-error': paisaBazarForm.currentState.$invalid}\"> <validation-msg ng-if=\"paisaBazarForm.currentState.$error.required && ($ctrl.submitted || paisaBazarForm.currentState.$touched)\"> Please enter your State to continue with your application. </validation-msg> </div> </div> </div> </div> </div> </div> </div> </div> </div> </form></div> <div class=row> </div> <div class=row> <div class=\"col-md-12 col-sm-12 col-xs-12 text-right\" ng-if=\"!$ctrl.otpSent && !$ctrl.ekycDone && !$ctrl.ekycDonegoVKYC\"> <button class=\"button-primary no-margin-t-xs\" id=submitButton ng-click=$ctrl.requestAadhaarOTP(paisaBazarForm)>Request OTP</button> </div> <div class=\"col-md-12 col-sm-12 col-xs-12 text-right\" ng-if=$ctrl.otpSent ng-hide=$ctrl.showForm> <button class=\"button-primary no-margin-t-xs\" id=submitButton ng-click=$ctrl.submitOTP(paisaBazarForm)>Validate OTP</button> </div> <div class=\"col-md-12 col-sm-12 col-xs-12 text-center\" ng-if=$ctrl.ekycDonegoVKYC> <p> </p><h4> <b>Thank you for completing the eKYC journey. Please proceed for eligibility check and Video based Customer Identification process(VCIP) by clicking here.</b> <button class=\"button-primary no-margin-t-xs\" ng-click=$ctrl.exit()> <font size=4>Proceed3 </font> </button> </h4> <p></p> </div> </div> <step-footer ng-if=true show-proceed=\"$ctrl.showContious || $ctrl.ekycDone\" proceed-callback=$ctrl.valAddDipCheck(paisaBazarForm) proceed-disabled=\"!$ctrl.model.addressOptions || $ctrl.retriggerDisablebutton \"> </step-footer> <div style=padding:10px;display:flex;justify-content:flex-end ng-if=\"$ctrl.retriggerDisablebutton \"> <div style=justify-content:end;display:flex> retry after({{$ctrl.counter}} sec) </div> </div>  </div> </div>  <loading ng-show=$ctrl.showLoader></loading>";

/***/ }),

/***/ "./src/app/components/paiseBazar/paiseBazar.component.js":
/* unknown exports provided */
/* all exports used */
/*!***************************************************************!*\
  !*** ./src/app/components/paiseBazar/paiseBazar.component.js ***!
  \***************************************************************/
/***/ (function(module, exports, __webpack_require__) {

(function () {
    'use strict';
    var angular = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
    __webpack_require__(/*! ./paiseBazar.component.scss */ "./src/app/components/paiseBazar/paiseBazar.component.scss");
    __webpack_require__(/*! ./paiseBazar.component.service.js */ "./src/app/components/paiseBazar/paiseBazar.component.service.js");
    __webpack_require__(/*! ./open-success-modal/open-success.modal.component.js */ "./src/app/components/paiseBazar/open-success-modal/open-success.modal.component.js");
 
    var ekycStep = angular.module('app').component('ekycPaisaBazarPage', {
        template: __webpack_require__(/*! ./paiseBazar.component.html */ "./src/app/components/paiseBazar/paiseBazar.component.html"),
        controller: ['$rootScope', '$http', '$state', '$anchorScroll', '$uibModal', 'analyticService', 'appState', 'CONFIG', 'paiseBazarService', '$timeout', 'UtilService',
            function ($rootScope, $http, $state, $anchorScroll, $uibModal, analyticService, appState, CONFIG, paiseBazarService, $timeout, UtilService) {
                var vm = this;
                let sendOtpCounter = 1;
                let validateOtpCounter = 1;
                let proceedClicked = true;
                var securityParams = {
                    robocheck: vm.robocheck ? vm.robocheck : ''
                };
 
                vm.$onInit = function () {
 
                    vm.typeInput = 'tel';
                    vm.etbCustomer = false;
                    vm.addressOptions = ['YES', 'NO'];
                    vm.successMsg = null;
                    vm.ekycDone = false;
   
                     getEkycDoneOrNot();
                }
 
                var getEkycDoneOrNot = function () {
                    var reqData = {
                        "urlParamId": appState.getUrlParamId()
                    }
                    console.log("reqData getEkycDoneOrNot==", reqData);
                    paiseBazarService.getEkycDone(reqData, securityParams).then(function (result) {
                        console.log("result getEkycDoneOrNot== success--->",result.success,
                            "-------result resCode--->",result.responseCode,
                            "-------result responseMsg--->", result.responseMsg);
 
                         if (result.success) {
 
                            if(result.responseCode == "2003") {
                                vm.errMsg = "Decline due to internal policy";
                                $state.go('app.card-declined', { cardKey: "" });
   
                            }else if(result.responseCode == "1007") {
                                openSuccessModel();
                            } else if(result.ekycDone == "true"){
                                if (result.dipDone == "true") {
                                    if(result.responseCode == "2003"|| result.responseCode == "2002") {
                                        vm.errMsg = "Decline due to internal policy";
                                        $state.go('app.card-declined', { cardKey: "" });
           
                                    }else if (result.responseCode == "2001") {
                                        $state.go('app.final-thankyou', {
                                            saveData: {
                                                autoUrl: result.signingUrl,
                                                frnNumber: result.frnNumber,
                                                ekycToken: result.ekycId
                                            },
                                            cardKey: ""
                                        });
                                    }else{
                                   
                                    $state.go('app.technicalError', { cardKey: "" });
                                    }
                                }else if (result.dipDone == "false") {
                                        vm.ekycDone = true;
                                        vm.populateAadhar(result);
                                        vm.successMsg = "EKYC is successfully completed, Please see Aadhaar details and click Proceed for V-CIP.";
                                }else{
                                    console.log("technical Error");
                                   
                                    $state.go('app.technicalError', { cardKey: "" });
                                }
                            }else{
                                console.log("new case");
                                vm.ekycDonegoVKYC = false;
                            }
                            $timeout(function () {
                                vm.successMsg = false;
                                vm.errMsg = false;
                            }, 20000);
                        } else if(result.responseCode == "1007") {
                                 // errorcode 1007-exsiting hsbc customer and 5007:- timeout
                            openSuccessModel();
                        }
                        else{
                            $state.go('app.technicalError', { cardKey: "" });
                        }  
                    });
                }
 
                vm.requestAadhaarOTP = function (retrievalForm) {
                    vm.errMsg = "";
                    vm.showOtpSent = false;
                    vm.aadhaarSubmitted = true;
                    vm.aadhaarConsentCheck = vm.model.aadhaarConsent ? 'Y' : 'N';
                    if (retrievalForm.aadhaar.$valid && retrievalForm.aadhaarConsent.$valid) {
                       
                        var aadhaarNumber = UtilService.encodeData2(vm.model.aadhaar);
 
                        var reqData = {
                            aadhaar: aadhaarNumber,
                            mode: "SMS OTP",
                            aadhaarConsentFlag: vm.model.aadhaarConsent ? 'Y' : 'N',
                            "urlParamId": appState.getUrlParamId()
                        };
                        console.log("resend OTP  is ==", sendOtpCounter);
                        if (sendOtpCounter > 3) {
                            window.scrollTo(0, 0);
                            vm.errMsg = "Sorry!! Maximum number of OTP request reached. Please close the browser and retry after some time.";
                            console.log("resend OTP counter  is before ==", sendOtpCounter);
                            return;
                        }
                        paiseBazarService.requestAadhaarOTP(reqData, securityParams).then(function (result) {
                            console.log("result Aadhaar==", result);
                           
                            sendOtpCounter = sendOtpCounter + 1;
                            window.scrollTo(0, 0);
                            if (result.success) {
                                vm.typeInput = "password";
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
                                vm.errMsg = "Sorry!! there seems to be some technical error ";
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
 
                var countDownforPB = function () {
                    $timeout(function () {
                        vm.counter--;
                        if (vm.counter <= 0) {
                            vm.retriggerDisablebutton = false;
                        } else {
                            countDownforPB();
                        }
                    }, 1000);
                };
 
                vm.submitOTP = function (retrievalForm) {
                    vm.errMsg = "";
                    vm.showOtpSent = false;
                    // vm.vcipButton = false;
 
                    vm.submitted = false;
                    // vm.etbCustomer = false;
                    // vm.c11c35Timeout = false;
                   
                    if (retrievalForm.otp.$valid) {
                        var aadhaarNumber = UtilService.encodeData2(vm.model.aadhaar);
 
                        // var abc = UtilService.encrypt("from=PaisaBzrEkyc&originIndex=PaisaBzrProcess&FRN=RKT/MUM/PBZ/0000926","(S@[|6cQ<~F$Zap");
                        // console.log("abc",abc);
                        // var abc1 = UtilService.encodeData2("from=PaisaBzrEkyc&originIndex=PaisaBzrProcess&FRN=PBRKT/MUM/PBZ/0000002");
                        // console.log("abc1",abc1);
                        // var abc2 = UtilService.encodeData2("from=PaisaBzrEkyc&originIndex=PaisaBzrProcess&FRN=PBRKT/MUM/PBZ/0000003");
                        // console.log("abc",abc2);
                       
                        var reqData = {
                            otp: vm.model.otp,
                            aadhaar: aadhaarNumber,
                            txn: vm.txn,
                            mode: "SMS OTP",
                            "urlParamId": appState.getUrlParamId()
                        }
  
                        if (validateOtpCounter > 3) {
                            window.scrollTo(0, 0);
                            vm.errMsg = "Sorry!! Maximum number of OTP validate is reached. Please close the browser and retry after some time.";
                            console.log("validate OTP counter  is before ==", validateOtpCounter);
                            return;
                        }
                        console.log("reqData submitOTP==", reqData);
                        paiseBazarService.submitOTP(reqData, securityParams).then(function (result) {
                            console.log("result submitOTP==", result);
                            validateOtpCounter = validateOtpCounter + 1;
                            if (result.success) {
                                window.scrollTo(0, 0);
                                if (result.dipDone == "true") {
                                    if (result.signingUrl) {
                                        $state.go('app.final-thankyou', {
                                            saveData: {
                                                // statusCode: result.responseCode,
                                                autoUrl: result.signingUrl,
                                                frnNumber: result.frnNumber,
                                                ekycToken: result.ekycId,
                                            },
                                            cardKey: ""
                                        });
                                    } else if ( result.responseCode == "2003" || result.responseCode == '2002') {
                                        // error:-2002:-non sourcing pincode
                                        //  error:-2003:- dicline
                                        console.log("responseMsg",result.responseMsg);
                                        vm.errMsg = "Decline due to internal policy"
                                        // vm.errMsg = result.responseMsg;
                                        $state.go('app.card-declined', { cardKey: "" });
                                    }else if(result.responseCode == "1007"){
                                        openSuccessModel();
                                    } else {
                                        // $state.go("app.journey.lead-generation", {
                                        //     leadData: {
                                        //         statusCode: result.responseCode,
                                        //         leadReason: result.responseMsg
                                        //     },
                                        //     cardKey: "VPC"
                                        // });
                                        vm.errMsg = result.responseMsg;
                                        $state.go('app.technicalError', { cardKey: "" });
                                       
                                    }
 
                                } else {
                                    vm.showForm = true;
                                    vm.showFullTerm = true;
                                    vm.showContious = true;
                                    vm.successMsg = "EKYC is successfully completed, Please scroll down to see aadhaar details and click Proceed for V-CIP.";
                                    $timeout(function () {
                                        vm.successMsg = '';
                                    }, 30000);
                                    vm.populateAadhar(result);
                                }
                            } else if (result.responseCode == 'K1') {
                                vm.errMsg = "Invalid OTP, Please retry.";
                                window.scrollTo(0, 0);
                            } else if (result.responseCode) {
                                vm.errMsg = result.responseMsg;
                            }else if(result.responseCode == "1007"){
                                openSuccessModel();
                            } else {
                                // $state.go("app.journey.lead-generation", {
                                //     leadData: {
                                //         statusCode: result.responseCode,
                                //         leadReason: result.responseMsg
                                //     },
                                //     cardKey: "VPC"
                                // });
                                $state.go('app.technicalError', { cardKey: "" });
                                window.scrollTo(0, 0);
                            }
 
                            $timeout(function () {
                                vm.successMsg = false;
 
                            }, 30000);
                        });
                    }
                 
                analyticService.buttonList.buttonClick.event_content = "continue";
                analyticService.trackUserAction(analyticService.buttonList.buttonClick);
                }
 
                vm.populateAadhar = function( result ){
                    vm.gender = UtilService.decodeData2(result["gender"]);
                                vm.aadhaarName = UtilService.decodeData2(result["aadhaarName"]);
                                //DOB (YYYY-MM-DD)
                                var dateOfBirth = UtilService.decodeData2(result["dateOfBirth"]);
                                // console.log("dateOfBirth==",dateOfBirth);
 
                                var dob = new Date(dateOfBirth);
                                // console.log("dob==",dob);
 
                                var dd = String(dob.getDate()).padStart(2, '0');
                                var mm = String(dob.getMonth() + 1).padStart(2, '0');
                                var yyyy = dob.getFullYear();
 
                                // console.log("dd==",dd);
                                // console.log("mm==",mm);
                                // console.log("yyyy==",yyyy);
 
                                if (dateOfBirth.length >= 5) {
                                    // console.log("length==full", dateOfBirth.length);
                                    vm.date = dd;
                                    vm.month = mm;
                                    vm.year = yyyy;
                                    vm.disabledDob = true;
       
                                } else {
                                    // console.log("length==year", dateOfBirth.length);
                                    // vm.model.date = "";
                                    // vm.model.month = "";
                                    vm.year = yyyy;
                                    vm.disabledDob = false;
       
                                }
                                // vm.model.mobile = result["mobile"];
                                // vm.model.email = result["email"];
                                vm.address1 = UtilService.decodeData2(result["house"]);
                                vm.address2 = UtilService.decodeData2(result["street"]);
                                vm.address3 = UtilService.decodeData2(result["landmark"]);
                                vm.location = UtilService.decodeData2(result["location"]);
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
                }
 
                var openSuccessModel = function () {
                    console.log("openSuccessModel model for ==");
                    var openSuccessModalInstance = $uibModal.open({
                        backdrop: 'static',
                        keyboard: false,
                        modalFade: true,
                        component: "opensuccessModal",
                        windowClass: 'card-detail-modal'
                    });
                    openSuccessModalInstance.result.then(function (isSelected) {
                            window.location.href = "http://www.hsbc.co.in/";
                    }, function (isDeSelected) {
                        window.location.href = "http://www.hsbc.co.in/";
                    });
                }
 
                vm.exit = function () {
                    proceedClicked = false;
                    // vm.autoUrl = "https://ir99txrb18.execute-api.ap-south-1.amazonaws.com/prod/kyc/v1/web/ekyc/callback?tokenId=";
 
                    vm.autoUrl = "https://cards.videokyc.hsbc.co.in/kyc/v1/web/ekyc/callback?tokenId=";
                   
                    // window.open("https://ir99txrb18.execute-api.ap-south-1.amazonaws.com/prod/kyc/jOefo5t6", "_blank");
                    //window.open(vm.autoUrl +vm.ekycId, "_blank");
                    window.location.href = vm.autoUrl + vm.ekycId;
 
                }
 
                // window.addEventListener('beforeunload', function (e) {
                //     console.log("proceed=="+proceedClicked);
                //     if (proceedClicked) {
                //         console.log("BrowserClose==");
                //         e.preventDefault();
                //         e.returnValue = 'Okay Bye';
                //     } else {
                //         //alert("not asking")
                //         console.log("no need to alert on procced click 11")
                //     }
                // });
 
                vm.getAddressByPinCode = function (event, pinCodeElement, emptyDistrict) {
                 
                    var key = event.keyCode || event.which;
                    var pinCode = event.target.value;
                    pinCodeElement.$setValidity('invalid', true);
                    if (event.target.value.length === 6) {
                        if (key === 13 || event.target.value.length === 6) {
                            paiseBazarService.getAddressByPostalCode(pinCode, '.masked-container').then(function (result) {
                                console.log("resultpostelcode---.",result);
                               
                                vm.model.otherCurrentCity = result.city;
                                vm.model.otherCurrentState = result.state;
                                vm.model.otherCurrentDistrict = result.district;
 
                                vm[emptyDistrict] = UtilService.isEmpty(result.district);
 
                                if (!vm.isStaffJourney) { // added too bypass ;ncode for staff
                                    if (UtilService.isEmpty(result) || UtilService.isEmpty(result.state) || UtilService.isEmpty(result.city)) {
                                        pinCodeElement.$setValidity('invalid', false);  //COMMENTED to openup pincode
                                    }
                                }
                            });
                        }
                    } else {
                        vm.model.otherCurrentCity = null;
                        vm.model.otherCurrentState = null;
                        vm.model.otherCurrentDistrict = null;
                    }
                };
 
                vm.getCurrentAddress = function () {
                    vm.showCurrentAddress = false;
                    
                    var reqData = {
                        addressType: vm.model.addressOptions == "NO" ? "current" : "current and permanent",
                        "urlParamId": appState.getUrlParamId()
                    }
                        console.log("reqData getCurrentAddress==", reqData);
 
                        paiseBazarService.getCurrentAddFromIbps(reqData, securityParams).then(function (result) {
                            console.log("result getCurrentAddFromIbps==", result);
                        // console.log("vm.model.addressOptions",vm.model.addressOptions);
 
                            if (result.success) {
                               if(vm.model.addressOptions == "NO"){
                                vm.showCurrentAddress = true;
                                vm.model.otherCurrentAddress1 = result.address_line1 == 'null' ? '' : result.address_line1;
                                vm.model.otherCurrentAddress2 = result.address_line2 == 'null' ? '' : result.address_line2;
                                vm.model.otherCurrentAddress3 = result.address_line3 == 'null' ? '' : result.address_line3;
                                vm.model.otherCurrentPinCode = result.pin_code;
                                vm.model.otherCurrentCity = result.city;
                                vm.model.otherCurrentState = result.state;
                                vm.model.otherCurrentDistrict = result.district;
                                vm.model.otherCurrentCountry = result.country;
                               }
                               else{
                                console.log("vm.model.addressOptions",vm.model.addressOptions);
                               }
                               
                            }
                            else if (result.responseCode) {
                                console.log("result.responseCode",result.responseCode);
                                vm.errMsg = result.responseMsg;
                               
                            } else {
                                vm.errMsg = "Sorry there seems to be some issue";
                            }
                            window.scroll(0, 0);
                        });
                    // }
                }
 
                vm.valAddDipCheck = function (retrievalForm) { // pushing address + DIP Check-akshay
                    if (retrievalForm.$valid) {
                        // vm.vcipButton = false;
                        vm.dipCheckDone = false;
 
                        var reqData = {
                            resident_address_type: vm.model.addressOptions == "NO" ? "Current and permanent" : "Current",
                            address_line_1: vm.model.addressOptions == "YES" ? (vm.address1) : vm.model.otherCurrentAddress1,
                            address_line_2: vm.model.addressOptions == "YES" ? (vm.address2) : vm.model.otherCurrentAddress2,
                            address_line_3: vm.model.addressOptions == "YES" ? (vm.address3) : vm.model.otherCurrentAddress3,
                            postal_code: vm.model.addressOptions == "YES" ? (vm.pinCode) : vm.model.otherCurrentPinCode,
                            city: vm.model.addressOptions == "YES" ? (vm.city) : vm.model.otherCurrentCity,
                            state: vm.model.addressOptions == "YES" ? (vm.state) : vm.model.otherCurrentState,
                            district: vm.model.addressOptions == "YES" ? (vm.district) : vm.model.otherCurrentDistrict,
                            urlParamId: appState.getUrlParamId(),
                            current_country: "INDIA"
                        }
                        
                        vm.showLoader = true;
                        $rootScope.$broadcast('trigger-verification-loader', {
                            showLoader: true,
                            showCard: false,
                            loaderType: 'DIP'
                        });
 
                        console.log("reqData validate==", reqData);
                        paiseBazarService.goForValidate(reqData, securityParams).then(function (result) {
                            console.log("result validate==", result);
                            if (result) {
                                setTimeout(() => {
                                    var reqData = {
                                        urlParamId: appState.getUrlParamId(),
                                        reqCounter: 1
                                    }
                                    console.log("reqData goForDipCheck==", reqData);
                                    paiseBazarService.goForDipCheck(reqData, securityParams).then(function (result) {
 
                                        console.log(" result goForDipCheck ==> ", result);
                                        vm.showLoader = false;
                                        if (result.success) {
                                            vm.dipCheckDone = true;
 
                                            switch (result.responseCode) {
                                                case '2001':
                                                    vm.vcipButton = true;
                                                    $state.go('app.final-thankyou', {
                                                        saveData: {
                                                            autoUrl: result.signingUrl,
                                                            frnNumber: result.frnNumber,
                                                            ekycToken: result.ekycId
                                                        },
                                                        cardKey: ""
                                                    });
                                                    break;
                                                case '3002':
                                                    $state.go('app.technicalError', { cardKey: "" });
                                                    break;
                                                case '2002':  
                                                case '2003':
                                                    vm.errMsg = result.message;
                                                    $state.go('app.card-declined', { cardKey: "" });
                                                    break;
                                                case '1007':
                                                    // errorcode 1007-exsiting hsbc customer and 5007:- timeout
                                                    openSuccessModel();
                                                    break;
                                                case '5007':
                                                    //  5007:- timeout
                                                    console.log("5007 timeout");
                                                    // button value change
                                                    vm.errMsg = "Sorry! There seems to be a technical problem. please try after 30sec.";
                                                    vm.counter = 30;
                                                    vm.retriggerDisablebutton = true;
                                                    countDownforPB();
                                                    break;
                                                default:
                                                    console.log("default error");
                                                    vm.errMsg = "Sorry there seems to be some issue";
                                                    // window.location.href = "http://www.hsbc.co.in/";
                                            }
                                        } else {
                                            if (result.responseCode === '3002') {
                                                $state.go('app.technicalError', { cardKey: "" });
                                            } else if (result.responseCode === "2003") {
                                                vm.errMsg = result.message;
                                                $state.go('app.card-declined', { cardKey: "" });
                                            }else if(result.responseCode == "1007"){
                                                openSuccessModel();
                                            } else {
                                                vm.errMsg = "Sorry there seems to be some issue";
                                                console.log("Not success call");
                                            }
                                        }
                                        $timeout(function () {
                                            vm.errMsg = false;
                                        }, 70000);
                                    });
                                }, 3000);
                            }
                            analyticService.trackUserAction(analyticService.buttonList.error);
                            window.scroll(0, 0);
                        });
                    } else {
                        vm.submitted = true;
                        UtilService.focusOnInvalid('retrievalForm');
                    }
                }
 
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

/***/ "./src/app/components/paiseBazar/paiseBazar.component.scss":
/* unknown exports provided */
/* all exports used */
/*!*****************************************************************!*\
  !*** ./src/app/components/paiseBazar/paiseBazar.component.scss ***!
  \*****************************************************************/
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/app/components/paiseBazar/paiseBazar.component.service.js":
/* unknown exports provided */
/* all exports used */
/*!***********************************************************************!*\
  !*** ./src/app/components/paiseBazar/paiseBazar.component.service.js ***!
  \***********************************************************************/
/***/ (function(module, exports) {

(function () {
    'use strict';

    var paiseBazarService = angular.module('app').service('paiseBazarService', ['$rootScope', '$http', '$q', '$timeout', '$interval', 'appState', 'CONFIG', function ($rootScope, $http, $q, $timeout, $interval, appState, CONFIG) {
        var self = this;
        self.arn = null;

        this.clearLocalState = function () {
            // console.log(`clearing local state on load`);
            appState.removeUrlParamId();
        };

            //@Akshaypise - aug2024 - will send request to backend
            this.requestAadhaarOTP= function (reqData, securityParams) {
                // console.log("Step 3 component service object ===", JSON.stringify(reqData));
                var apiURL, httpMethod;
                if ($rootScope.integrationsActive) {
                    httpMethod = "POST";
                    apiURL = CONFIG.apiUrl + '/oeEkyc/requestOtp' + '?hash_id=' + Math.random();
                    // console.log("API call to backend made successfully.", JSON.stringify(reqData).aadhaar);
                } else {
                    httpMethod = "GET";
                    apiURL = 'resources/data/mock/paisa_bazar_details/aadhaar_otp.json';
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
                    apiURL = CONFIG.apiUrl + '/oeEkyc/submitOtp' + '?hash_id=' + Math.random();
                } else {
                    httpMethod = "GET";
                    apiURL = "resources/data/mock/paisa_bazar_details/submit-OTP.json";
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
                        //  console.log("Submit-OTP response data ===", JSON.stringify(response.data));
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

            
            self.getCurrentAddFromIbps = function (reqData, securityParams) {//This function is used get current address from IBPS -@akshaypise- aug2024
               // var channel=[];
                // console.log("ReqData at service==",JSON.stringify(reqData));
                var apiURL, httpMethod;
                if ($rootScope.integrationsActive) {
                    httpMethod = "POST";
                    apiURL = CONFIG.apiUrl + '/oeEkyc/getAddress' + '?hash_id=' + Math.random();
                } else {
                    httpMethod = "GET";
                    apiURL = 'resources/data/mock/paisa_bazar_details/getCurrentAddress.json';
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

            self.goForValidate = function (reqData, securityParams) {
                // console.log("ReqData at service==",reqData);
                // console.log("test aksahay",$rootScope.integrationsActive);
                var apiURL, httpMethod;
                if ($rootScope.integrationsActive) {
                    httpMethod = "POST";
                    apiURL = CONFIG.apiUrl + '/oeEkyc/validate' + '?hash_id=' + Math.random();
                } else {
                    httpMethod = "GET";
                    apiURL = 'resources/data/mock/paisa_bazar_details/preDipValidate.json';
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
                    console.log("validateresponse",response);
                    
                    if (response && response.status === 200) {
                        // console.log("Channel from backen 200==",JSON.stringify(response));
                        return response.data;
                    }else{
                        // console.log("Channel from backen else==",JSON.stringify(response));

                        return {
                            success: false,
                            responseCode: 500,
                            responseMsg: "Sorry! there ssems to be some technical error."
                        };                
                    }
                });
            };

             self.goForDipCheck = function (reqData, securityParams) { // function added  for OB akshaypise April2024
                var retryDip = {
                    active: true,
                    pollTimeout: 2500,
                    pollInterval: 10000,
                    pollCount: 40
                };
                var defer = $q.defer();
            
                dipCheck(securityParams, defer, retryDip, reqData);
            
                var countOfPoll = 0;
                $timeout(function () {
                    console.log("I am running after " + retryDip.pollTimeout + " Milliseconds delay");
                    var intervalPromise = $interval(function () {
                        countOfPoll++;
                        console.log("inside intervalPromise", countOfPoll);
                        console.log("counter value at start of interval is =", reqData.reqCounter);

                        if (retryDip.active && countOfPoll < retryDip.pollCount) {
                            console.log("retryDip.active  true===", retryDip.active + " And value of counter =", reqData.reqCounter);
                            dipCheck(securityParams, defer, retryDip, reqData);
                        } else {
                            console.log("retryDip.active  false===", retryDip.active + " And value of counter =", reqData.reqCounter);
                            $interval.cancel(intervalPromise);
                        }
                        console.log("counter value here is =", reqData.reqCounter);

                        if (retryDip.active && reqData.reqCounter > 41) {
                            console.log("Specific condition met, resolving defer and cancelling interval");
                            var resolvedObject = {
                                responseCode: 404,
                                success: false,
                                message: "Sorry! Some internal processing error has occurred"
                            };
                            defer.resolve(resolvedObject);
                            $interval.cancel(intervalPromise);
                        } else {
                            console.log("this run after error ", countOfPoll);
                            // var resolvedObject = {
                            //     responseCode: 404,
                            //     success: false,
                            //     message: "Sorry! Some internal processing error has occurred"
                            // };
                            // defer.resolve(resolvedObject);
                            // $interval.cancel(intervalPromise);
                        }
                    }, retryDip.pollInterval, retryDip.pollCount);
                }, retryDip.pollTimeout);
            
                console.log("yes reached here==");
                return defer.promise;
            };
            
            var dipCheck = function (securityParams, defer, retryDip, reqData) {       // function added  for OB akshaypise April2024
                var apiURL = $rootScope.integrationsActive ? CONFIG.apiUrl + '/oeEkyc/dipStatus' + '?hash_id=' + Math.random() :
                    'resources/data/mock/paisa_bazar_details/dipCheck.json';
                return $http({
                    method: $rootScope.integrationsActive ? "POST" : "GET",
                    url: apiURL,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    params: securityParams,
                    data: JSON.stringify(reqData)
                }).then(function (response) {
                    reqData.reqCounter++;
                    // console.log("response from backend  ===", response.data);
                    console.log("for counter ", reqData.reqCounter + " response from backend  for poll count has value==", response.data);

                    if (response.status === 200 && response.data) { //api success
                        if (response.data.responseCode == '3002' && retryDip.active && reqData.reqCounter > 40) { // after try many time resolve
                            console.log("lops go---->reqData.reqCounter", reqData.reqCounter);
                            console.log("code go inside 3002 activereqcounter");
                            retryDip.active = false;
                            defer.resolve(response.data);
                        } else 
                        if (response.data.responseCode == '3002') { // try again call same API
                            console.log("code go inside 3002 looping");
                            retryDip.active = true;
                        }  
                        else {
                            retryDip.active = false;
                            if (response.data.responseCode === '2001') {
                                console.log("2001 response current value of counter==", reqData.reqCounter);
                                reqData.reqCounter = 42;
                            } else {
                                console.log("console goes else condition if other error message show else--1");
                                response.data.message = "Sorry! Some internal error has occurred";
                            }
                            defer.resolve(response.data);
                        }
                        
                    } else {
                        console.log("else of 200", response);
                        defer.reject("Sorry! Some internal error has occured");
                        return {
                            success: false,
                            message: "Sorry! Some internal error has occured"
                        };
                    }
                }, function (response) {
                    console.log("last 1", response);
                    return {
                        success: false,
                        message: "Sorry! Some internal error has occurred",
                        errorCode: 404
                    };
                });
            };
// 
// 
            // This function is used get data pB from IBPS and DIP check -@7/08/2023 Akshaypise 
            
             // This function is used to check if ekyc is dones or not in lasy 72 hours -@akshaypise_aug2024
             self.getEkycDone = function (reqData, securityParams) {
               // console.log("ReqData at service for ekycDone==",JSON.stringify(reqData));
                var apiURL, httpMethod;
                if ($rootScope.integrationsActive) {
                    httpMethod = "POST";
                    apiURL = CONFIG.apiUrl + '/oeEkyc/goForEkycDone' + '?hash_id=' + Math.random();
                } else {
                    httpMethod = "GET";
                    apiURL = 'resources/data/mock/paisa_bazar_details/ekycDoneCheck.json';
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
                        // console.log("Channel from backen==",response.data);
                        return response.data;
                    }
                });
            };


    }]);

    module.exports = paiseBazarService.name;
})();


/***/ })

});
//# sourceMappingURL=5feca7cf7899f14f5a1f8.js.map