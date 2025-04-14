webpackJsonp([0],{

/***/ "./src/app/components/journey/step3/aadhar-pan-link-modal/aadhar-pan-link-modal.component.html":
/* unknown exports provided */
/* all exports used */
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/journey/step3/aadhar-pan-link-modal/aadhar-pan-link-modal.component.html ***!
  \*****************************************************************************************************/
/***/ (function(module, exports) {

module.exports = "<div class=modal-header> <div class=heading-container> </div> <div class=close-button-container> <button type=button class=close aria-label=Close ng-click=$ctrl.cancel()> <span aria-hidden=true>×</span> </button> </div> </div> <div class=modal-body> <p class=no-margin-b> <b>Dear Applicant,<br> Your PAN is not linked with your Aadhaar. Request you to link your PAN with Aadhaar using below steps before starting your HSBC Credit Card Application journey</b> <br> <br> <b><u>Steps to refer:</u></b> <br> <br> </p><p>&#9900; Income tax site to link PAN & Aadhaar - <button class=button-primary ng-click=\"$ctrl.routeautoUrl('https://eportal.incometax.gov.in/iec/foservices/#/pre-login/link-aadhaar-status')\">Click Here</button> </p> <p>&#9900; Step-by-step guide to link PAN & Aadhaar -<button class=button-primary ng-click=\"$ctrl.routeautoUrl('https://uidai.gov.in/282-faqs/your-aadhaar/aadhaar-letter/1884-how-do-i-link-pan-with-aadhaar.html')\">Click Here</button> </p> <p></p> </div> <div class=modal-footer> <div class=buttons-container> <button class=button-primary ng-click=$ctrl.Close(true)>OK</button> </div> </div>";

/***/ }),

/***/ "./src/app/components/journey/step3/aadhar-pan-link-modal/aadhar-pan-link-modal.component.js":
/* unknown exports provided */
/* all exports used */
/*!***************************************************************************************************!*\
  !*** ./src/app/components/journey/step3/aadhar-pan-link-modal/aadhar-pan-link-modal.component.js ***!
  \***************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

(function () {
    'use strict';
    var angular = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
    __webpack_require__(/*! ./aadhar-pan-link-modal.component.scss */ "./src/app/components/journey/step3/aadhar-pan-link-modal/aadhar-pan-link-modal.component.scss");

    var modalController = function () {
        var vm = this;

        vm.$onInit = function () {

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

        vm.routeautoUrl = function (autoUrl){
            console.log('auto===='+autoUrl);
            window.location.href = autoUrl;
        };

        vm.cancel = function () {
            vm.dismiss({
                $value: 'cancel'
            });
        };
    };

   


    var modalComp = angular.module('journey.module').component('aadharPanLinkModal', {
        template: __webpack_require__(/*! ./aadhar-pan-link-modal.component.html */ "./src/app/components/journey/step3/aadhar-pan-link-modal/aadhar-pan-link-modal.component.html"),
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

/***/ "./src/app/components/journey/step3/aadhar-pan-link-modal/aadhar-pan-link-modal.component.scss":
/* unknown exports provided */
/* all exports used */
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/journey/step3/aadhar-pan-link-modal/aadhar-pan-link-modal.component.scss ***!
  \*****************************************************************************************************/
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/app/components/journey/step3/existing-customer-modal/existing-customer.modal.component.html":
/* unknown exports provided */
/* all exports used */
/*!*********************************************************************************************************!*\
  !*** ./src/app/components/journey/step3/existing-customer-modal/existing-customer.modal.component.html ***!
  \*********************************************************************************************************/
/***/ (function(module, exports) {

module.exports = "<div class=modal-header> <div class=heading-container> </div> <div class=close-button-container> <button type=button class=close aria-label=Close ng-click=$ctrl.cancel()> <span aria-hidden=true>×</span> </button> </div> </div> <div class=modal-body> <p class=no-margin-b> Our records indicate that you have a pending application with us in the past 30 days. Click OK to resume your application. </p> </div> <div class=modal-footer> <div class=buttons-container> <button class=button-primary ng-click=$ctrl.Close(true)>OK</button> </div> </div>";

/***/ }),

/***/ "./src/app/components/journey/step3/existing-customer-modal/existing-customer.modal.component.js":
/* unknown exports provided */
/* all exports used */
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/journey/step3/existing-customer-modal/existing-customer.modal.component.js ***!
  \*******************************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

(function () {
    'use strict';
    var angular = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
    __webpack_require__(/*! ./existing-customer.modal.component.scss */ "./src/app/components/journey/step3/existing-customer-modal/existing-customer.modal.component.scss");

    var modalController = function () {
        var vm = this;

        vm.$onInit = function () {

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

    var modalComp = angular.module('journey.module').component('existingCustomerModal', {
        template: __webpack_require__(/*! ./existing-customer.modal.component.html */ "./src/app/components/journey/step3/existing-customer-modal/existing-customer.modal.component.html"),
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

/***/ "./src/app/components/journey/step3/existing-customer-modal/existing-customer.modal.component.scss":
/* unknown exports provided */
/* all exports used */
/*!*********************************************************************************************************!*\
  !*** ./src/app/components/journey/step3/existing-customer-modal/existing-customer.modal.component.scss ***!
  \*********************************************************************************************************/
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/app/components/journey/step3/skip-ekyc-modal/skip-ekyc.modal.component.html":
/* unknown exports provided */
/* all exports used */
/*!*****************************************************************************************!*\
  !*** ./src/app/components/journey/step3/skip-ekyc-modal/skip-ekyc.modal.component.html ***!
  \*****************************************************************************************/
/***/ (function(module, exports) {

module.exports = "<div class=modal-header> <div class=heading-container> </div> <div class=close-button-container> <button type=button class=close aria-label=Close ng-click=$ctrl.cancel()> <span aria-hidden=true></span> </button> </div> </div> <div class=modal-body ng-if=$ctrl.errorFlagValue> <p class=no-margin-b> <b>Sorry!! It seems there is some issue with OTP. </b><br><br> You can still complete your journey by clicking on \"OK to progress\"</p> <p></p> </div> <div class=modal-body ng-if=!$ctrl.errorFlagValue> <p class=no-margin-b> <b>Sorry!! It seems there is some issue with Aadhaar Portal. </b><br><br> You can still complete your journey by clicking on \"OK to progress\"</p> <p></p> </div> <div class=modal-footer> <div class=buttons-container> <button class=button-outline ng-click=$ctrl.Close(true)>OK to progress</button> </div> </div>";

/***/ }),

/***/ "./src/app/components/journey/step3/skip-ekyc-modal/skip-ekyc.modal.component.js":
/* unknown exports provided */
/* all exports used */
/*!***************************************************************************************!*\
  !*** ./src/app/components/journey/step3/skip-ekyc-modal/skip-ekyc.modal.component.js ***!
  \***************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

(function () {
    'use strict';
    var angular = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
    __webpack_require__(/*! ./skip-ekyc.modal.component.scss */ "./src/app/components/journey/step3/skip-ekyc-modal/skip-ekyc.modal.component.scss");

    var modalController = function (analyticService,journeyService) {
        var vm = this;

        vm.$onInit = function () {
            analyticService.buttonList.popup.event_content = "Assignment of activities to third party agencies confirmation";
            analyticService.trackUserAction(analyticService.buttonList.popup);
            vm.errorFlagValue = journeyService.getOtpIssue();
            console.log("value==",vm.errorFlagValue);
        };

        /**
         * This function is triggered when we select or unselect card.
         * We push the selected card in selectedPrimaryCards array and
         *  pop the unselected card.
         */
        vm.Close = function (isRejected) {
            analyticService.buttonList.buttonClick.event_content =  true ? "I don't wish to progress" : "OK to progress";
            analyticService.trackUserAction(analyticService.buttonList.buttonClick);
            vm.close({
                $value: isRejected
            });
        };

        vm.cancel = function () {
            vm.dismiss({
                $value: 'cancel'
            });
        };
    };

    var modalComp = angular.module('journey.module').component('skipekycModal', {
        template: __webpack_require__(/*! ./skip-ekyc.modal.component.html */ "./src/app/components/journey/step3/skip-ekyc-modal/skip-ekyc.modal.component.html"),
        bindings: {
            resolve: '<',
            close: '&',
            dismiss: '&'
        },
        controller: ['analyticService','journeyService', modalController]
    });
    module.exports = modalComp.name;
})();


/***/ }),

/***/ "./src/app/components/journey/step3/skip-ekyc-modal/skip-ekyc.modal.component.scss":
/* unknown exports provided */
/* all exports used */
/*!*****************************************************************************************!*\
  !*** ./src/app/components/journey/step3/skip-ekyc-modal/skip-ekyc.modal.component.scss ***!
  \*****************************************************************************************/
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/app/components/journey/step3/step3.component.html":
/* unknown exports provided */
/* all exports used */
/*!***************************************************************!*\
  !*** ./src/app/components/journey/step3/step3.component.html ***!
  \***************************************************************/
/***/ (function(module, exports) {

module.exports = "<form name=step3Form autocomplete=off novalidate> <input type=text class=hidden-field ng-model=$ctrl.robocheck tabindex=-1> <alert-msg ng-if=$ctrl.showOtpSent type=SUCCESS close=$ctrl.closeSuccessMsg()> One Time Password (OTP) has been sent to the Registered Mobile number. Please click \"Re-send OTP\" if you have not received OTP </alert-msg> <alert-msg ng-if=$ctrl.showBio type=SUCCESS close=$ctrl.closeSuccessMsg()> Fingerprint captured successfully. PID block generated. </alert-msg> <h1 class=screen-reader-only>Applicant Details</h1> <alert-msg ng-if=$ctrl.errMsg type=ERROR> {{$ctrl.errMsg}} </alert-msg> <alert-msg ng-if=$ctrl.panAadhaarDobMatchError type=ERROR> Sorry! We are unable to issue you an HSBC Credit Card as your application does not meet our internal policy norms. </alert-msg> <ng-form name=PANForm> <div class=row> <div class=\"col-md-4 col-sm-6 col-xs-12\"> <div class=form-group> <label for=pan>PAN</label> <div ng-class=\"{'has-error': step3Form.PANForm.pan.$invalid && (step3Form.PANForm.pan.$touched || $ctrl.panSubmitted)}\"> <input type=text id=pan name=pan trim auto-caps class=form-control alpha-num=10 aria-describedby=panErrMsg ng-model=$ctrl.model.pan ng-pattern=/^([a-zA-Z]{5})(\\d{4})([a-zA-Z]{1})$/ maxlength=10 placeholder=\"As per ID\" aria-invalid=\"{{step3Form.pan.$invalid && (step3Form.pan.$touched || $ctrl.submitted)}}\" ng-disabled=$ctrl.panVerified required> </div> <div id=panErrMsg ng-class=\"{'has-error': step3Form.PANForm.pan.$invalid}\"> <validation-msg ng-if=\"step3Form.PANForm.pan.$error.required && (step3Form.PANForm.pan.$touched || $ctrl.panSubmitted)\"> Please make sure you have entered your PAN to continue with your application. </validation-msg> <validation-msg ng-if=\"step3Form.PANForm.pan.$error.pattern && step3Form.PANForm.pan.$touched\"> Please input a valid PAN to continue with your application. </validation-msg> </div> </div> </div> <div class=\"col-md-4 col-sm-6 col-xs-12\" ng-if=!$ctrl.panVerified> <div class=\"form-group line-spacer-xs\"> <label for=dateOfBirth>Date of birth <b>As per PAN</b></label> <div ng-class=\"{'has-error': step3Form.PANForm.dateOfBirth.$invalid && (step3Form.PANForm.dateOfBirth.$touched || $ctrl.panSubmitted)}\"> <input type=date id=dateOfBirth name=dateOfBirth class=form-control ng-model=$ctrl.model.dateOfBirth aria-describedby=dateOfBirthErrMsg ng-blur=$ctrl.calculateAge(step3Form.PANForm) ng-focus=handleFocus() aria-invalid=\"{{step3Form.PANForm.dateOfBirth.$invalid && (step3Form.PANForm.dateOfBirth.$touched || $ctrl.submitted)}}\" ng-required=true ng-disabled=$ctrl.panVerified> </div> <div id=dateOfBirthErrMsg ng-class=\"{'has-error': step3Form.PANForm.dateOfBirth.$invalid}\"> <validation-msg ng-if=\"step3Form.PANForm.dateOfBirth.$error.required && (step3Form.PANForm.dateOfBirth.$touched || $ctrl.panSubmitted)\"> Please enter your Date of Birth using the calendar icon to continue with your application. </validation-msg> <validation-msg ng-if=\"step3Form.PANForm.dateOfBirth.$invalid && $ctrl.panSubmitted  && step3Form.PANForm.dateOfBirth.$touched\"> Please enter the Valid Date of Birth to continue with the application. </validation-msg> <validation-msg ng-if=$ctrl.minAgeErrorMsg ng-class=\"{'has-error': step3Form.PANForm.dateOfBirth.$invalid}\"> Your age should be at least 18 years to continue with the application. </validation-msg> <validation-msg ng-if=$ctrl.maxAgeErrorMsg ng-class=\"{'has-error': step3Form.PANForm.dateOfBirth.$invalid}\"> Your age should be maximum 65 years to continue with the application. </validation-msg> <validation-msg ng-if=$ctrl.pvcAlert> Your age is more than 65 years, Please upload PVC declaration document in the doc upload section in the end. </validation-msg> </div> </div> </div> </div> </ng-form> <div ng-if=\"$ctrl.ekyc=='Yes' && $ctrl.panVerified\"> <div class=row> <div class=\"col-md-4 col-sm-6 col-xs-12\"> <div class=\"form-group line-spacer\"> <table> <tr> <th colspan=4>PAN Details</th> </tr> <tr> <td class=bold colspan=2>PAN Name</td> <td colspan=2>{{$ctrl.model.fullName}}</td> </tr> </table> </div> </div> </div> </div> <hr class=line-spacer ng-if=\"$ctrl.ekyc=='Yes' && $ctrl.panVerified\"> <div ng-if=\"$ctrl.ekyc=='Yes' && $ctrl.panVerified\"> <div class=row> <div class=\"col-md-4 col-sm-6 col-xs-12\"> <div class=\"form-group line-spacer\"> <label for=aadhaar>Virtual ID(16 digits)/Aadhaar Number(12 digits)</label> <div ng-class=\"{'has-error': step3Form.aadhaar.$invalid && (step3Form.aadhaar.$touched || $ctrl.aadhaarSubmitted)}\"> <input type={{$ctrl.typeInput}} id=aadhaar name=aadhaar only-number=16 class=form-control aria-describedby=aadhaarErrMsg ng-trim=true ng-model=$ctrl.model.aadhaar ng-minlength=12 ng-pattern=/^[2-9][0-9]{11}$|^[0-9]{16}$/ placeholder=\"As per ID\" aria-invalid=\"{{step3Form.aadhaar.$invalid && ($ctrl.model.submitted || step3Form.aadhaar.$touched)}}\" ng-disabled=\"$ctrl.otpSent || $ctrl.showForm\" required> </div> <div id=aadhaarErrMsg ng-class=\"{'has-error': step3Form.aadhaar.$invalid}\"> <validation-msg ng-if=\"step3Form.aadhaar.$error.required && (step3Form.aadhaar.$touched || $ctrl.aadhaarSubmitted)\"> Please make sure you have entered your Virtual ID/Aadhaar number to continue with your application. </validation-msg> <validation-msg ng-if=\"(step3Form.aadhaar.$error.minlength || step3Form.aadhaar.$error.pattern) && step3Form.aadhaar.$touched\"> Please input a valid Virtual ID/Aadhaar number to continue with your application. </validation-msg> </div> </div> </div> <div class=\"col-md-4 col-sm-6 col-xs-12\"> <div class=\"form-group line-spacer\"> <label for=aadhaarMode>Ekyc Mode</label> <div ng-if=$ctrl.isStaffJourney ng-repeat=\"mode in ['SMS OTP','Biometric']\"> <input type=radio name=mode ng-value=mode ng-model=$ctrl.model.aadhaarMode ng-init=\"$index==0?($ctrl.model.aadhaarMode=mode):''\" ng-disabled=\"$ctrl.otpSent || $ctrl.showForm\"/> {{mode}} </div> <div ng-if=!$ctrl.isStaffJourney ng-repeat=\"mode in ['SMS OTP']\"> <input type=radio name=mode ng-value=mode ng-model=$ctrl.model.aadhaarMode ng-init=\"$index==0?($ctrl.model.aadhaarMode=mode):''\" ng-disabled=\"$ctrl.otpSent || $ctrl.showForm\"/> {{mode}} </div> </div> </div> </div> <div class=\"form-group line-spacer\" ng-if=\"$ctrl.model.aadhaarMode=='SMS OTP' && $ctrl.otpSent\"> <label for=otp>OTP</label> <div class=row> <div class=\"col-md-4 col-sm-6 col-xs-12\"> <div ng-class=\"{'has-error': step3Form.otp.$invalid && (step3Form.otp.$touched || $ctrl.submitted)}\"> <input trim type=tel id=otp name=otp class=form-control ng-model=$ctrl.model.otp only-number=6 ng-minlength=6 aria-describedby=OTPErrMsg aria-invalid=\"{{step3Form.otp.$invalid && (step3Form.otp.$touched || $ctrl.submitted)}}\" required ng-disabled=$ctrl.showForm /> </div> <div id=OTPErrMsg ng-class=\"{'has-error': step3Form.otp.$invalid&& ($ctrl.submitted || step3Form.otp.$touched)}\"> <validation-msg ng-if=\"step3Form.otp.$error.required && (step3Form.otp.$touched || $ctrl.submitted)\"> Please enter OTP </validation-msg> <validation-msg ng-if=\"step3Form.otp.$error.minlength && (step3Form.otp.$touched || $ctrl.submitted)\"> Invalid OTP </validation-msg> </div> </div> <div class=\"col-md-4 col-sm-6 col-xs-12 line-spacer-xs\" ng-hide=$ctrl.showForm> <span class=link-text ng-class=\"{'disabled': !$ctrl.regenerateOTP}\" ng-click=\"$ctrl.regenerateOTP ? $ctrl.requestAadhaarOTP(step3Form) : $event.preventDefault()\">Re-send OTP </span> <span ng-if=\"$ctrl.counter > 0\">({{$ctrl.counter}} sec)</span> </div> </div> </div> <div class=\"form-group line-spacer\" ng-if=\"$ctrl.model.aadhaarMode=='Biometric' \"> <label for=noOfFingures>No. of fingers</label> <div class=row> <div class=\"col-md-4 col-sm-6 col-xs-12\"> <div ng-class=\"{'has-error': step3Form.noOfFingures.$invalid && (step3Form.noOfFingures.$touched || $ctrl.submitted)}\"> <custom-select> <select id=noOfFingures name=noOfFingures class=form-control ng-model=$ctrl.model.noOfFingures ng-options=\"item for item in $ctrl.noOfFingures\" aria-describedby=noOfFinguresErrMsg aria-invalid=\"{{step3Form.noOfFingures.$invalid && (step3Form.noOfFingures.$touched || $ctrl.submitted)}}\" required> <option value=\"\">Please select</option> </select> </custom-select> </div> <div id=noOfFinguresErrMsg ng-class=\"{'has-error': step3Form.noOfFingures.$invalid}\"> <validation-msg ng-if=\"step3Form.noOfFingures.$error.required && (step3Form.noOfFingures.$touched || $ctrl.submitted)\"> Please select noOfFingures to continue with your application. </validation-msg> </div> </div> </div> </div> <div class=row> <div class=\"col-md-12 col-sm-14 col-xs-12\"> <div class=\"form-group line-spacer\"> <div id=aadhaarConsentErrMsg ng-class=\"{'has-error': step3Form.aadhaarConsent.$invalid && (step3Form.aadhaarConsent.$touched || $ctrl.submitted)}\"> <validation-msg ng-if=\"step3Form.aadhaarConsent.$error.required && (step3Form.aadhaarConsent.$touched || $ctrl.submitted)\"> Please check below checkbox if you want to proceed. </validation-msg> </div> <div ng-class=\"{'has-error': step3Form.aadhaarConsent.$invalid && (step3Form.aadhaarConsent.$touched || $ctrl.submitted)}\"> <input type=checkbox id=aadhaarConsent name=aadhaarConsent class=screen-reader-only ng-model=$ctrl.model.aadhaarConsent ng-focus=\"$ctrl.hasAadhaarConsentFocus = true\" ng-blur=\"$ctrl.hasAadhaarConsentFocus = false\" aria-describedby=aadhaarConsentErrMsg aria-invalid=\"{{step3Form.aadhaarConsent.$invalid && (step3Form.aadhaarConsent.$touched || $ctrl.submitted)}}\" required ng-disabled=\"$ctrl.otpSent || $ctrl.showForm\"> <label ng-show=$ctrl.showFullTerm for=aadhaarConsent class=\"checkbox-label tpsa-label\" ng-class=\"{'focus': $ctrl.hasAadhaarConsentFocus}\"> This is to confirm that ... </label> <div ng-show=!$ctrl.showFullTerm class=text-right> <span ng-click=\"$ctrl.showFullTerm = true\"> <span class=\"icon icon-chevron-up\" aria-hidden=true></span>Read less </span> </div> <input type=checkbox id=aadhaarConsent name=aadhaarConsent class=screen-reader-only ng-model=$ctrl.model.aadhaarConsent ng-focus=\"$ctrl.hasAadhaarConsentFocus = true\" ng-blur=\"$ctrl.hasAadhaarConsentFocus = false\" aria-describedby=aadhaarConsentErrMsg aria-invalid=\"{{step3Form.aadhaarConsent.$invalid && (step3Form.aadhaarConsent.$touched || $ctrl.submitted)}}\" required ng-disabled=\"$ctrl.otpSent || $ctrl.showForm\"> <label ng-show=!$ctrl.showFullTerm for=aadhaarConsent class=\"checkbox-label tpsa-label\" ng-class=\"{'focus': $ctrl.hasAadhaarConsentFocus}\"> {{$ctrl.consentText}} <br> <meta charset=UTF-8 /> <p>मैं यह पुष्टि करता हूँ कि बैंक के साथ खाता खोलने / बनाए रखने के लिए मुझे अपनी पहचान स्थापित करने के लिए एचएसबीसी इंडिया द्वारा विभिन्न विकल्प प्रदान किए गए हैं। मैंने अपनी पहचान स्थापित करने के लिए , यूआईडीएआई द्वारा प्रदान की गई सुविधा के अनुसार बायोमेट्रिक/ओटीपी आधारित ई-केवाईसी प्रमाणीकरण के लिए स्वेच्छा से अपना आधार जमा किया है। मैं एतद्वारा एचएसबीसी इंडिया को अपनी सहमति देता हूं: <br> i) आधार आधारित प्रमाणीकरण प्रणाली द्वारा मेरी पहचान / पता स्थापित कर सकते हैं या यूआईडीएआई द्वारा निर्दिष्ट योजना / योजनाओं या यूआईडीएआई द्वारा निर्धारित अन्य तरीके या समय- समय पर किसी अन्य कानून के माध्यम से आधार की वास्तविकता को सत्यापित कर सकते हैं। <br> ii) अगर लागू कानूनों के तहत आवश्यक हो तो मेरे आधार और संबंधित जनसांख्यिकीय विवरण को सीधे यूआईडीएआई के साथ या इसकी अधिकृत एजेंसियों (एनपीसीआई), संबंधित नियामक या वैधानिक प्राधिकरणों के माध्यम से साझा कर सकते हैं। <br> आधार एकत्र करने की सहमति और उद्देश्य के बारे में मुझे बताया गया है और मैं पुष्टि करता हूं कि मैं इसे समझ गया हूं। मुझे यह भी सूचित किया गया है कि: <br> ए) प्रमाणीकरण पर, यूआईडीएआई मेरी जनसांख्यिकीय जानकारी साझा कर सकता है जिसेमें फोरोग्राफ शामिल है, जिसे एचएसबीसी इंडिया ऊपर लिए उद्देश्य के लिए पहचान/पता प्रमाण के रूप में उपयोग कर सकता है। <br> बी) यूआईडीएआई द्वारा साझा किए गए मेरे आधार विवरण (मेरी जनसांख्यिकीय जानकारी सहित) का उपयोग ऊपर लिखे उद्देश्य या कानून की आवश्यकता के अलावा किसी अन्य उद्देश्य के लिए नहीं किया जाएगा। <br> ग) मेरी बायोमेट्रिक जानकारी बैंक द्वारा संग्रहित नहीं की जाएगी। </p> </label> <div class=line-spacer> <div class=\"col-md-6 col-sm-12 col-xs-12\"> <p>Click on the play button to play a TnC in English:</p> <audio id=myAudioEnglish controls> <source ng-src=resources/audio/TncEnglish.m4a type=audio/mpeg>s Your browser does not support the audio element. </audio> </div> </div> <div class=\"col-md-6 col-sm-6 col-xs-12\"> <p> हिंदी में टीएनसी सूनने के लिए प्ले बटन पर क्लिक करें:</p> <audio id=myAudioHindi controls> <source ng-src=resources/audio/TncHindi.m4a type=audio/mpeg> Your browser does not support the audio element. </audio> </div> <div ng-show=$ctrl.showFullTerm class=text-right> <span ng-click=\"$ctrl.showFullTerm = false\"> <span class=\"icon icon-chevron-down\" aria-hidden=true></span>Read more </span> </div> </div> </div> </div> </div> <div class=row> <div class=\"col-md-12 col-sm-14 col-xs-12\" ng-if=\"($ctrl.model.aadhaarMode=='SMS OTP' && $ctrl.otpSent && $ctrl.showForm) || ($ctrl.model.aadhaarMode=='Biometric' && $ctrl.showForm)\"> <hr class=line-spacer> <h2 class=brand-bar>Aadhaar Details Verification</h2> <img ng-src=resources/images/aadhaar_logo.png width=200px height=150px /> <br> <br> <h3>EKYC Details | Reference Key - {{$ctrl.aadhaarReferenceKey}}</h3> <img ng-src=data:image/png;base64,{{$ctrl.photo}} /> <div class=line-spacer> <table> <tr> <th colspan=4>Aadhaar Details</th> </tr> <tr> <td class=bold colspan=2>Aadhaar Reference Key</td> <td colspan=2>{{$ctrl.aadhaarReferenceKey}}</td> </tr> <tr> <td class=bold colspan=2>Enrollment Date</td> <td colspan=2>{{$ctrl.enrollmentDate}}</td> </tr> <tr> <td class=bold>Redacted Aadhaar</td> <td>{{$ctrl.redactedAadhaar}}</td> <td class=bold>Mode</td> <td>{{$ctrl.model.aadhaarMode}}</td> </tr> </table> </div> <div class=line-spacer> <table> <tr> <th colspan=4>Personal Details</th> </tr> <tr> <td class=bold colspan=2>Name</td> <td colspan=2>{{$ctrl.model.aadhaarName}}</td> </tr> <tr> <td class=bold colspan=2>C/O</td> <td colspan=2>{{$ctrl.co}}</td> </tr> <tr> <td class=bold>Gender</td> <td>{{$ctrl.model.gender}}</td> <td class=bold ng-if=$ctrl.disabledDob>Date Of Birth</td> <td class=bold ng-if=!$ctrl.disabledDob>Year Of Birth</td> <td ng-if=$ctrl.disabledDob>{{$ctrl.model.date}}-{{$ctrl.model.month}}-{{$ctrl.model.year}}</td> <td ng-if=!$ctrl.disabledDob>{{$ctrl.model.year}}</td> </tr> </table> </div> <div class=line-spacer> <table> <tr> <th colspan=4>Address Details</th> </tr> <tr> <td class=bold colspan=2>House</td> <td colspan=2>{{$ctrl.model.residentialAddress.address1}}</td> </tr> <tr> <td class=bold colspan=2>Street</td> <td colspan=2>{{$ctrl.model.residentialAddress.address2}}</td> </tr> <tr> <td class=bold colspan=2>Landmark</td> <td colspan=2>{{$ctrl.model.residentialAddress.address3}}</td> </tr> <tr> <td class=bold colspan=2>Location</td> <td colspan=2>{{$ctrl.location}}</td> </tr> <tr> <td class=bold colspan=2>Village</td> <td colspan=2>{{$ctrl.model.residentialAddress.city}}</td> </tr> <tr> <td class=bold>Sub District</td> <td>{{$ctrl.subDistrict}}</td> <td class=bold>District</td> <td>{{$ctrl.model.residentialAddress.district}}</td> </tr> <tr> <td class=bold>State</td> <td>{{$ctrl.model.residentialAddress.state}}</td> <td class=bold>PIN Code</td> <td>{{$ctrl.model.residentialAddress.pinCode}}</td> </tr> <tr> <td class=bold colspan=2>Post Ofiice</td> <td colspan=2>{{$ctrl.postalOffice}}</td> </tr> </table> </div> </div> </div> </div> <div id=other-details ng-if=\"($ctrl.panVerified && $ctrl.ekyc !='Yes') || ($ctrl.panVerified && $ctrl.showForm)\"> <hr class=line-spacer> <div class=row ng-if=\"$ctrl.model.hasNameMismatch && $ctrl.ekyc !='Yes'\"> <div class=\"col-md-12 col-sm-12 col-lg-12 col-xs-12\"> <input type=checkbox id=nameMismatchChk name=nameMismatchChk class=screen-reader-only ng-focus=\"$ctrl.hasNameChkFocus = true;\" ng-blur=\"$ctrl.hasNameChkFocus = false;\" ng-model=$ctrl.model.nameMismatchConsent aria-describedby=nameMismatchErrMsg aria-invalid=\"{{step3Form.nameMismatchChk.$invalid && (step3Form.nameMismatchChk.$touched || $ctrl.submitted)}}\" required/> <label for=nameMismatchChk id=nameMismatchLbl class=checkbox-label ng-class=\"{'focus': $ctrl.hasNameChkFocus, 'error': step3Form.nameMismatchChk.$invalid && (step3Form.nameMismatchChk.$touched || $ctrl.submitted)}\"> I, <b> <u>{{$ctrl.model.fullName}}</u>, </b> hereby declare that my name as represented on PAN is correct and request HSBC to process my application as per my name on PAN. </label> <div id=nameMismatchErrMsg ng-class=\"{'has-error': step3Form.nameMismatchChk.$invalid && (step3Form.nameMismatchChk.$touched || $ctrl.submitted)}\"> <validation-msg ng-if=\"step3Form.nameMismatchChk.$error.required && (step3Form.nameMismatchChk.$touched || $ctrl.submitted)\"> Please accept name mismatch consent to continue with your application </validation-msg> </div> </div> </div> <div id=demographic-details> <h2 class=brand-bar>Personal Demographics</h2> <div class=row> <div class=\"col-md-4 col-sm-6 col-xs-12\"> <div class=form-group> <label id=nationalityLbl for=nationality>Nationality (Country/Region) </label> <div ng-class=\"{'has-error': step3Form.nationality.$invalid && (step3Form.nationality.$touched || $ctrl.submitted)}\"> <ui-select id=nationality input-id=nationality name=nationality aria-label=\"nationality {{$select.selected.countryName}}\" aria-describedby=nationalityErrMsg ng-model=$ctrl.model.demographicDetails.nationality theme=bootstrap aria-invalid=\"{{step3Form.nationality.$invalid && (step3Form.nationality.$touched || $ctrl.submitted)}}\" ui-select-limit=30 required> <ui-select-match placeholder=\"Please Select\"> <div class=\"flag {{$select.selected.countryCode.toLocaleLowerCase()}}\" style=background-image:url(resources/images/country-flags-sprite.png) ng-if=\"$select.selected.countryCode != -1\"></div> {{$select.selected.countryName}} </ui-select-match> <ui-select-choices ui-disable-choice=\"item.countryName==$ctrl.model.demographicDetails.nationality3.countryName || item.countryName==$ctrl.model.demographicDetails.nationality2.countryName\" repeat=\"item in $ctrl.countries | filter: $select.search\"> <div class=\"flag {{item.countryCode.toLocaleLowerCase()}}\" style=background-image:url(resources/images/country-flags-sprite.png) ng-if=\"item.countryCode != -1\"></div> <span class=countryName ng-bind-html=\"item.countryName | highlight: $select.search\"></span> </ui-select-choices> <ui-select-no-choice> We couldn't find any choices... </ui-select-no-choice> </ui-select> </div> <div id=nationalityErrMsg ng-class=\"{'has-error': step3Form.nationality.$invalid}\"> <validation-msg ng-if=\"step3Form.nationality.$error.required && (step3Form.nationality.$touched || $ctrl.submitted)\"> Please select a nationality to continue with your application. </validation-msg> </div> </div> </div> <div class=\"col-md-4 col-sm-6 col-xs-12\" ng-if=\"$ctrl.nationalityCount > 1\"> <div class=\"form-group line-spacer-xs\"> <div> <label id=nationality2Lbl for=nationality2>Nationality 2 (Country/Region) (Optional)</label> <span tabindex=0 role=button aria-label=\"remove nationality 2\" class=\"add-remove-trigger pull-right\" ng-if=\"$ctrl.nationalityCount === 2\" ng-click=$ctrl.removeNationality()> <span class=\"icon icon-delete\"></span> <span class=link-text>Remove</span> </span> </div> <div ng-class=\"{'has-error': step3Form.nationality2.$invalid && (step3Form.nationality2.$touched || $ctrl.submitted)}\"> <ui-select id=nationality2 input-id=nationality2 name=nationality2 aria-label=\"nationality 2 (optional) {{$select.selected.countryName}}\" aria-describedby=nationality2ErrMsg ng-model=$ctrl.model.demographicDetails.nationality2 theme=bootstrap aria-invalid=\"{{step3Form.nationality2.$invalid && (step3Form.nationality2.$touched || $ctrl.submitted)}}\" ui-select-limit=30> <ui-select-match placeholder=\"Please select\"> <div class=\"flag {{$select.selected.countryCode.toLocaleLowerCase()}}\" style=background-image:url(resources/images/country-flags-sprite.png) ng-if=\"$select.selected.countryCode != -1\"></div> {{$select.selected.countryName}} </ui-select-match> <ui-select-choices ui-disable-choice=\"item.countryName==$ctrl.model.demographicDetails.nationality.countryName || item.countryName==$ctrl.model.demographicDetails.nationality3.countryName\" repeat=\"item in $ctrl.countries| filter: $select.search\"> <div class=\"flag {{item.countryCode.toLocaleLowerCase()}}\" style=background-image:url(resources/images/country-flags-sprite.png) ng-if=\"item.countryCode != -1\"></div> <span ng-bind-html=\"item.countryName | highlight: $select.search\"></span> </ui-select-choices> <ui-select-no-choice> We couldn't find any choices... </ui-select-no-choice> </ui-select> </div> <div id=nationality2ErrMsg ng-class=\"{'has-error': step3Form.nationality2.$invalid}\"> <validation-msg ng-if=\"step3Form.nationality2.$error.required && (step3Form.nationality2.$touched || $ctrl.submitted)\"> Please select a nationality to continue with your application. </validation-msg> </div> </div> </div> <div class=\"col-md-4 col-sm-6 col-xs-12\" ng-if=\"$ctrl.nationalityCount > 2\"> <div class=\"form-group line-spacer-sm line-spacer-xs\"> <div> <label id=nationality3Lbl for=nationality3>Nationality 3 (Optional)</label> <span tabindex=0 role=button aria-label=\"remove nationality 3\" class=\"add-remove-trigger pull-right\" ng-if=\"$ctrl.nationalityCount === 3\" ng-click=$ctrl.removeNationality()> <span class=\"icon icon-delete\"></span> <span class=link-text>Remove</span> </span> </div> <div ng-class=\"{'has-error': step3Form.nationality3.$invalid && (step3Form.nationality3.$touched || $ctrl.submitted)}\"> <ui-select id=nationality3 input-id=nationality3 name=nationality3 aria-label=\"nationality 3 (optional) {{$select.selected.countryName}}\" aria-describedby=nationality3ErrMsg ng-model=$ctrl.model.demographicDetails.nationality3 theme=bootstrap aria-invalid=\"{{step3Form.nationality3.$invalid && (step3Form.nationality3.$touched || $ctrl.submitted)}}\" ui-select-limit=30> <ui-select-match placeholder=\"Please select\"> <div class=\"flag {{$select.selected.countryCode.toLocaleLowerCase()}}\" style=background-image:url(resources/images/country-flags-sprite.png) ng-if=\"$select.selected.countryCode != -1\"></div> {{$select.selected.countryName}} </ui-select-match> <ui-select-choices ui-disable-choice=\"item.countryName==$ctrl.model.demographicDetails.nationality.countryName || item.countryName==$ctrl.model.demographicDetails.nationality2.countryName\" repeat=\"item in $ctrl.countries | filter: $select.search\"> <div class=\"flag {{item.countryCode.toLocaleLowerCase()}}\" style=background-image:url(resources/images/country-flags-sprite.png) ng-if=\"item.countryCode != -1\"></div> <span ng-bind-html=\"item.countryName | highlight: $select.search\"></span> </ui-select-choices> <ui-select-no-choice> We couldn't find any choices... </ui-select-no-choice> </ui-select> </div> <div id=nationality3ErrMsg ng-class=\"{'has-error': step3Form.nationality3.$invalid}\"> <validation-msg ng-if=\"step3Form.nationality3.$error.required && (step3Form.nationality3.$touched || $ctrl.submitted)\"> Please select a nationality to continue with your application. </validation-msg> </div> </div> </div> </div> <div class=row ng-if=\"$ctrl.nationalityCount < 3\"> <div class=\"col-md-3 col-sm-12 col-xs-12 add-nationality-container\"> <span tabindex=0 role=button aria-label=\"add nationality\" class=\"add-remove-trigger add\" ng-click=$ctrl.addNationality()> <span class=\"icon icon-add\"></span> <span class=link-text>Add Nationality</span> </span> </div> </div> <div class=row> <div class=\"col-md-4 col-sm-6 col-xs-12\"> <div class=\"form-group line-spacer\"> <label id=resStatusLbl for=residentialStatus>Residential status </label> <div ng-class=\"{'has-error': step3Form.residentialStatus.$invalid && (step3Form.residentialStatus.$touched || $ctrl.submitted)}\"> <custom-select> <select id=residentialStatus name=residentialStatus class=form-control ng-model=$ctrl.model.demographicDetails.residentialStatus ng-options=\"item for item in $ctrl.residentialStatusList\" aria-describedby=residentialStatusErrMsg aria-invalid=\"{{step3Form.residentialStatus.$invalid && (step3Form.residentialStatus.$touched || $ctrl.submitted)}}\" required disabled=disabled> <option value=\"\">Please select</option> </select> </custom-select> </div> <div id=residentialStatusErrMsg ng-class=\"{'has-error': step3Form.residentialStatus.$invalid}\"> <validation-msg ng-if=\"step3Form.residentialStatus.$error.required && (step3Form.residentialStatus.$touched || $ctrl.submitted)\"> Please select a residential status to continue with your application. </validation-msg> </div> </div> </div> <div class=\"col-md-4 col-sm-6 col-xs-12\"> <div class=\"form-group line-spacer\"> <label id=maritalStatusLbl for=maritalStatus>Marital status </label> <div ng-class=\"{'has-error': step3Form.maritalStatus.$invalid && (step3Form.maritalStatus.$touched || $ctrl.submitted)}\"> <custom-select> <select id=maritalStatus name=maritalStatus class=form-control ng-change=$ctrl.otherMaritalCheck() ng-model=$ctrl.model.demographicDetails.maritalStatus ng-options=\"item for item in $ctrl.maritalStatusList\" aria-describedby=maritalStatusErrMsg aria-invalid=\"{{step3Form.maritalStatus.$invalid && (step3Form.maritalStatus.$touched || $ctrl.submitted)}}\" required> <option value=\"\">Please select</option> </select> </custom-select> </div> <div id=maritalStatusErrMsg ng-class=\"{'has-error': step3Form.maritalStatus.$invalid}\"> <validation-msg ng-if=\"step3Form.maritalStatus.$error.required && (step3Form.maritalStatus.$touched || $ctrl.submitted)\"> Please select a marital status to continue with your application. </validation-msg> </div> </div> </div> <div class=\"col-md-3 col-sm-6 col-xs-12\" ng-if=\"$ctrl.model.demographicDetails.maritalStatus == 'Others'\"> <div class=\"form-group line-spacer\"> <label class=form__label>Please specify </label> <div ng-class=\"{'has-error': step3Form.otherMarital.$invalid && ($ctrl.submitted || step3Form.otherMarital.$touched)}\"> <input type=text id=otherMarital name=otherMarital aria-describedby=otherMaritalErrMsg alpha-space=25 class=form-control onkeypress=\"0===this.value.length&&32===event.charCode&&event.preventDefault()\" ng-maxlength=25 ng-model=$ctrl.model.demographicDetails.specificMaritalStatus aria-invalid=\"{{step3Form.otherMarital.$invalid && ($ctrl.submitted || step3Form.otherMarital.$touched)}}\" required> </div> <div id=otherMaritalErrMsg ng-class=\"{'has-error': step3Form.otherMarital.$invalid}\"> <validation-msg ng-if=\"step3Form.otherMarital.$error.required && (step3Form.otherMarital.$touched || $ctrl.submitted)\"> Please enter your marital status to continue with your application. </validation-msg> </div> </div> </div> <div class=row> <div class=\"col-md-4 col-sm-6 col-xs-12\" ng-if=\"$ctrl.cardTypeAE == 'Supplementary Card'\"> <div class=\"form-group line-spacer\"> <label for=maidenName>Mother's Maiden Name </label> <div ng-class=\"{'has-error': step3Form.maidenName.$invalid && ($ctrl.submitted || step3Form.maidenName.$touched)}\"> <input type=text id=maidenName name=maidenName class=form-control ng-model=$ctrl.model.maidenName trim alpha-space=50 ng-minlength=2 maxlength=28 aria-describedby=maidenNameErrMsg aria-invalid=\"{{step3Form.maidenName.$invalid && ($ctrl.submitted || step3Form.maidenName.$touched)}}\" required> </div> <div id=maidenNameErrMsg ng-class=\"{'has-error': step3Form.maidenName.$invalid}\"> <validation-msg ng-if=\"step3Form.maidenName.$error.required && (step3Form.maidenName.$touched || $ctrl.submitted)\"> Please enter your Mother's Maiden Name. </validation-msg> </div> </div> </div> </div> </div> <div class=row> <div class=\"col-md-4 col-sm-6 col-xs-12\" ng-if=\"$ctrl.cardTypeAE == 'Supplementary Card'\"> <div class=\"form-group line-spacer\"> <label for=nameOnCard>Name On Card </label> <div ng-class=\"{'has-error': step3Form.nameOnCard.$invalid && ($ctrl.submitted || step3Form.nameOnCard.$touched)}\"> <input type=text id=nameOnCard name=nameOnCard class=form-control ng-model=$ctrl.model.nameOnCard trim alpha-space=50 ng-minlength=2 maxlength=19 aria-describedby=nameOnCardErrMsg aria-invalid=\"{{step3Form.nameOnCard.$invalid && ($ctrl.submitted || step3Form.nameOnCard.$touched)}}\" required> </div> <div id=nameOnCardErrMsg ng-class=\"{'has-error': step3Form.nameOnCard.$invalid}\"> <validation-msg ng-if=\"step3Form.nameOnCard.$error.required && (step3Form.nameOnCard.$touched || $ctrl.submitted)\"> Please enter the Name on Card. </validation-msg> </div> </div> </div> </div> </div> <div id=primarycardholder-details ng-if=\"$ctrl.cardTypeAE == 'Supplementary Card'\"> <hr class=\"line-spacer no-margin-bottom\"> <h2 class=brand-bar>Primary Cardholder Details</h2> <div class=row> <div class=\"col-md-4 col-sm-6 col-xs-12\"> <div class=\"form-group line-spacer-xs\"> <label for=cardHolderName>Cardholder name</label> <div ng-class=\"{'has-error': step3Form.cardHolderName.$invalid && ($ctrl.submitted || step3Form.cardHolderName.$touched)}\"> <input type=text id=cardHolderName name=cardHolderName class=form-control ng-model=$ctrl.model.cardHolderName trim alpha-space=50 ng-minlength=2 maxlength=19 aria-describedby=cardHolderNameErrMsg aria-invalid=\"{{step3Form.cardHolderName.$invalid && ($ctrl.submitted || step3Form.cardHolderName.$touched)}}\" required> </div> <div id=cardHolderNameErrMsg ng-class=\"{'has-error': step3Form.cardHolderName.$invalid}\"> <validation-msg ng-if=\"step3Form.cardHolderName.$error.required && (step3Form.cardHolderName.$touched || $ctrl.submitted)\"> Please enter Cardholder name. </validation-msg> <validation-msg ng-if=\"step3Form.cardHolderName.$error.minlength && (step3Form.cardHolderName.$touched || $ctrl.submitted)\"> Please enter minimum of 2 letters for Cardholder name to continue with your application. </validation-msg> </div> </div> </div> <div class=\"col-md-4 col-sm-6 col-xs-12\"> <div class=\"form-group line-spacer-xs\"> <label for=cardNumber>Card Number</label> <div ng-class=\"{'has-error': step3Form.cardNumber.$invalid && ($ctrl.submitted || step3Form.cardNumber.$touched)}\"> <input trim type=text id=cardNumber name=cardNumber class=form-control ng-model=$ctrl.model.cardNumber only-number=16 aria-describedby=cardNumberErrMsg aria-invalid=\"{{step3Form.cardNumber.$invalid && ($ctrl.submitted || step3Form.cardNumber.$touched)}}\" required> </div> <div id=cardNumberErrMsg ng-class=\"{'has-error': step3Form.cardNumber.$invalid}\"> <validation-msg ng-if=\"step3Form.cardNumber.$error.required && (step3Form.cardNumber.$touched || $ctrl.submitted)\"> Please enter your Card Number. </validation-msg> <validation-msg ng-if=\"step3Form.cardNumber.$error.minlength && (step3Form.cardNumber.$touched || $ctrl.submitted)\"> Please enter valid Card Number. </validation-msg> </div> </div> </div> </div> <div class=row> <br> <div class=\"col-md-4 col-sm-6 col-xs-12\"> <div class=\"form-group line-spacer-xs\"> <label for=relationWithPrimary>Relationship with primary</label> <div ng-class=\"{'has-error': step3Form.relationWithPrimary.$invalid && ($ctrl.submitted || step3Form.relationWithPrimary.$touched)}\"> <custom-select> <select id=relationWithPrimary name=relationWithPrimary class=form-control ng-model=$ctrl.model.relationWithPrimary ng-options=\"item for item in $ctrl.relationWithPrimary\" aria-describedby=relationWithPrimaryErrMsg aria-invalid=\"{{step3Form.relationWithPrimary.$invalid && ($ctrl.submitted || step3Form.relationWithPrimary.$touched)}}\" required> <option value=\"\">Please select</option> </select> </custom-select> </div> <div id=relationWithPrimaryErrMsg ng-class=\"{'has-error': step3Form.relationWithPrimary.$invalid}\"> <validation-msg ng-if=\"step3Form.relationWithPrimary.$error.required && (step3Form.relationWithPrimary.$touched || $ctrl.submitted)\"> Please enter Relationship with primary. </validation-msg> </div> </div> </div> </div> <div class=row> <div class=\"col-md-4 col-sm-6 col-xs-12\"> <div class=\"form-group line-spacer\"> <label for=customerId>Customer ID</label> <div ng-class=\"{'has-error': step3Form.customerId.$invalid && ($ctrl.submitted || step3Form.customerId.$touched)}\"> <input trim type=text id=customerId name=customerId class=form-control ng-model=$ctrl.model.customerId only-number=9 ng-minlength=9 maxlength=9 aria-describedby=customerIdErrMsg aria-invalid=\"{{step3Form.customerId.$invalid && ($ctrl.submitted || contactForm.customerId.$touched)}}\" required> </div> <div id=customerIdErrMsg ng-class=\"{'has-error': step3Form.customerId.$invalid}\"> <validation-msg ng-if=\"step3Form.customerId.$error.required && (step3Form.customerId.$touched || $ctrl.submitted)\"> Please enter your Customer ID. </validation-msg> <validation-msg ng-if=\"step3Form.customerId.$error.minlength && (step3Form.customerId.$touched || $ctrl.submitted)\"> Please enter valid Customer ID. </validation-msg> </div> </div> </div> </div> </div> <div id=personal-details> <hr class=\"line-spacer no-margin-bottom\"> <h2 class=brand-bar>Personal Details</h2> <div class=row> <div class=\"col-md-4 col-sm-6 col-xs-12\"> <div class=form-group> <label id=titleLabel>Title</label> <div class=hsbc-radio-group role=group aria-labelledby=titleLabel> <div class=hsbc-radio-inline ng-repeat=\"salutation in $ctrl.salutations\"> <input type=radio id=radio{{$index}} name=title ng-class=\"{'error': step3Form.title.$invalid && ($ctrl.submitted || step3Form.title.$touched)}\" ng-value=salutation ng-model=$ctrl.model.salutation ng-change=$ctrl.toggleTitle() aria-describedby=titleErrMsg aria-invalid=\"{{step3Form.title.$invalid && (step3Form.title.$touched || $ctrl.submitted)}}\" required> <label for=radio{{$index}}>{{salutation}}</label> </div> </div> <div id=titleErrMsg ng-class=\"{'has-error': step3Form.title.$invalid && ($ctrl.submitted || step3Form.title.$touched)}\"> <validation-msg ng-if=\"step3Form.title.$error.required && ($ctrl.submitted || step3Form.title.$touched)\"> Please select a title to continue with your application. </validation-msg> </div> </div> </div> <div class=\"col-md-4 col-sm-6 col-xs-12\"> <div class=\"form-group line-spacer-xs\"> <label id=genderLabel>Gender</label> <div class=hsbc-radio-group role=group aria-labelledby=genderLabel> <div class=hsbc-radio-inline> <input type=radio id=male name=gender ng-class=\"{'error': step3Form.gender.$invalid && ($ctrl.submitted || step3Form.gender.$touched)}\" ng-value=\"'M'\" ng-model=$ctrl.model.gender aria-describedby=genderErrMsg aria-invalid=\"{{step3Form.gender.$invalid && ($ctrl.submitted || step3Form.gender.$touched)}}\" required ng-disabled=\"$ctrl.ekyc=='Yes'\"> <label for=male>Male</label> </div> <div class=hsbc-radio-inline> <input type=radio id=female name=gender ng-class=\"{'error': step3Form.gender.$invalid && ($ctrl.submitted || step3Form.gender.$touched)}\" ng-value=\"'F'\" ng-model=$ctrl.model.gender required ng-disabled=\"$ctrl.ekyc=='Yes'\"> <label for=female>Female</label> </div> <div class=hsbc-radio-inline> <input type=radio id=thirdGender name=gender ng-class=\"{'error': step3Form.gender.$invalid && ($ctrl.submitted || step3Form.gender.$touched)}\" ng-value=\"'Third gender'\" ng-model=$ctrl.model.gender aria-describedby=genderErrMsg aria-invalid=\"{{step3Form.gender.$invalid && ($ctrl.submitted || step3Form.gender.$touched)}}\" required ng-disabled=\"$ctrl.ekyc=='Yes'\"> <label for=thirdGender>Third gender</label> </div> </div> <div id=genderErrMsg ng-class=\"{'has-error': step3Form.gender.$invalid && ($ctrl.submitted || step3Form.gender.$touched)}\"> <validation-msg ng-if=\"step3Form.gender.$error.required && ($ctrl.submitted || step3Form.gender.$touched)\"> Please select your gender to continue with your application. </validation-msg> </div> </div> </div> </div> <div class=row> <div class=\"col-md-4 col-sm-6 col-xs-12\"> <div class=\"form-group line-spacer\"> <label for=fullName>Full name</label> <div ng-if=\"$ctrl.ekyc == 'Yes'\"> <input type=text class=form-control id=fullName name=fullName alpha-space=50 ng-model=$ctrl.model.aadhaarName disabled=disabled> </div> <div ng-if=\"$ctrl.ekyc != 'Yes'\"> <input type=text class=form-control id=fullName name=fullName alpha-space=50 ng-model=$ctrl.model.fullName disabled=disabled> </div> </div> </div> <div class=\"col-md-4 col-sm-6 col-xs-12\"> <div role=group aria-labelledby=dobLabel class=\"form-group line-spacer\"> <div> <label id=dobLabel>Date of birth (DD-MM-YYYY)</label> </div> <div class=date-picker> <label for=date class=screen-reader-only>Date</label> <div class=date-label ng-class=\"{'has-error': (step3Form.date.$invalid || step3Form.month.$invalid || step3Form.year.$invalid) && ($ctrl.submitted || (step3Form.date.$touched && step3Form.month.$touched && step3Form.year.$touched))}\"> <input type=tel id=date name=date class=form-control only-number ng-model=$ctrl.model.date max=31 ng-blur=$ctrl.validateDOB(true) placeholder=DD prevent-typing-greater min=1 aria-describedby=dobErrMsg aria-invalid=\"{{(step3Form.date.$invalid && $ctrl.submitted)}}\" required ng-disabled=true> </div> <div class=separator>-</div> <label for=month class=screen-reader-only>Month</label> <div class=date-label ng-class=\"{'has-error': (step3Form.date.$invalid || step3Form.month.$invalid || step3Form.year.$invalid) && ($ctrl.submitted || (step3Form.date.$touched && step3Form.month.$touched && step3Form.year.$touched))}\"> <input type=tel id=month name=month class=form-control only-number ng-model=$ctrl.model.month ng-blur=$ctrl.validateDOB(true) placeholder=MM prevent-typing-greater min=1 max=12 aria-describedby=dobErrMsg aria-invalid=\"{{(step3Form.month.$invalid && $ctrl.submitted)}}\" required ng-disabled=true> </div> <div class=separator>-</div> <label for=year class=screen-reader-only>Year</label> <div class=date-label ng-class=\"{'has-error': (step3Form.date.$invalid || step3Form.month.$invalid || step3Form.year.$invalid) && ($ctrl.submitted || (step3Form.date.$touched && step3Form.month.$touched && step3Form.year.$touched))}\"> <input type=tel id=year name=year class=form-control only-number=4 ng-model=$ctrl.model.year ng-blur=$ctrl.validateDOB() placeholder=YYYY min=1 aria-describedby=dobErrMsg aria-invalid=\"{{(step3Form.year.$invalid && $ctrl.submitted)}}\" required ng-disabled=true> </div> </div> <div id=dobErrMsg ng-class=\"{'has-error': (step3Form.date.$invalid || step3Form.month.$invalid || step3Form.year.$invalid) && ($ctrl.submitted || (step3Form.date.$touched && step3Form.month.$touched && step3Form.year.$touched))}\"> <validation-msg ng-if=\"(step3Form.date.$error.required || step3Form.month.$error.required || step3Form.year.$error.required) && ($ctrl.submitted || (step3Form.date.$touched && step3Form.month.$touched && step3Form.year.$touched))\"> Please enter your date of birth to continue with your application. </validation-msg> <validation-msg ng-if=\"(!step3Form.date.$error.required && !step3Form.month.$error.required && !step3Form.year.$error.required) && step3Form.date.$error.minAge && ($ctrl.submitted || (step3Form.date.$touched && step3Form.month.$touched && step3Form.year.$touched))\"> Your age should be at least 18 years to continue with the application. </validation-msg> <validation-msg ng-if=\"(!step3Form.date.$error.required && !step3Form.month.$error.required && !step3Form.year.$error.required) && step3Form.date.$error.maxAge && ($ctrl.submitted || (step3Form.date.$touched && step3Form.month.$touched && step3Form.year.$touched))\"> Your age should be maximum 65 years to continue with the application. </validation-msg> <validation-msg ng-if=\"(!step3Form.date.$error.required && !step3Form.month.$error.required && !step3Form.year.$error.required) && step3Form.year.$error.invalidYear && ($ctrl.submitted || (step3Form.date.$touched && step3Form.month.$touched && step3Form.year.$touched))\"> Please enter a valid year to continue with your application. </validation-msg> <validation-msg ng-if=\"(!step3Form.date.$error.required && !step3Form.month.$error.required && !step3Form.year.$error.required) && step3Form.date.$error.invalidDate && ($ctrl.submitted || (step3Form.date.$touched && step3Form.month.$touched && step3Form.year.$touched))\"> Please enter a valid date to continue with your application. </validation-msg> </div> </div> </div> </div> <div class=row> <div class=\"col-md-4 col-sm-6 col-xs-12\"> <div class=\"form-group line-spacer\"> <div> <label for=mobileNo>Mobile number</label> </div> <div class=input-group ng-class=\"{'has-error': step3Form.mobileNo.$invalid  &&  (step3Form.mobileNo.$touched  || $ctrl.submitted)}\"> <span class=input-group-addon id=countryCode aria-hidden=true tabindex=-1> <span class=\"flag in\" style=background-image:url(resources/images/country-flags-sprite.png)></span> +91</span> <input type=tel trim id=mobileNo name=mobileNo aria-describedby=\"countryCode mobileNoErrMsg\" ng-model=$ctrl.model.mobile class=\"form-control has-block\" ng-minlength=10 ng-maxlength=10 ng-pattern=/^[6-9][0-9]/ only-number=10 aria-invalid=\"{{step3Form.mobileNo.$invalid  &&  (step3Form.mobileNo.$touched  || $ctrl.submitted)}}\" disabled=disabled> </div> <div id=mobileNoErrMsg ng-class=\"{'has-error': (step3Form.mobileNo.$invalid && (step3Form.mobileNo.$touched  || $ctrl.submitted))}\"> <validation-msg ng-if=\" ( step3Form.mobileNo.$error.required && step3Form.mobileNo.$touched) ||(step3Form.mobileNo.$error.required && $ctrl.submitted)\"> Please enter your mobile number. </validation-msg> <validation-msg ng-if=\"step3Form.mobileNo.$error.minlength && (step3Form.mobileNo.$touched || $ctrl.submitted)\"> Please enter at least 10 numbers. </validation-msg> <validation-msg ng-if=\"!step3Form.mobileNo.$error.minlength && step3Form.mobileNo.$error.pattern && (step3Form.mobileNo.$touched || $ctrl.submitted)\"> Your mobile phone number must begin with 6, 7, 8 or 9. Please check and re-enter. </validation-msg> </div> </div> </div> <div class=\"col-md-4 col-sm-6 col-xs-12\"> <div class=\"form-group line-spacer\"> <div> <label for=email> E-mail address</label> </div> <div ng-class=\"{'has-error': (step3Form.email.$invalid) && (step3Form.email.$touched || $ctrl.submitted)}\"> <input type=text trim class=form-control id=email name=email aria-describedby=emailErrMsg ng-model=$ctrl.model.email email-chars=39 ng-maxlength=39 placeholder=sample@abc.com ng-pattern=/^[_a-zA-Z0-9]+((\\.|\\-)[_a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(\\.[a-zA-Z0-9-]+)*(\\.[a-zA-Z]{2,4})$/ aria-invalid=\"{{(step3Form.email.$invalid) && (step3Form.email.$touched || $ctrl.submitted)}}\" disabled=disabled> </div> <div id=emailErrMsg ng-class=\"{'has-error': (step3Form.email.$invalid)}\"> <validation-msg ng-if=\" ( step3Form.email.$error.required && step3Form.email.$touched) ||(step3Form.email.$error.required && $ctrl.submitted)\"> Please enter your e-mail address to continue with your application. </validation-msg> <validation-msg ng-if=\"step3Form.email.$error.pattern && ($ctrl.submitted || step3Form.email.$touched)\"> Your e-mail address contains invalid characters. Please make sure you have entered a valid e-mail address, e.g. johnsmith@email.com </validation-msg> <validation-msg ng-if=\"(step3Form.email.$error.minlength || step3Form.email.$error.maxlength) && ($ctrl.submitted || step3Form.email.$touched)\"> Please enter a valid 39 character e-mail address. </validation-msg> </div> </div> </div> </div> </div> <div id=residential-address> <hr class=\"line-spacer no-margin-bottom\"> <h2 class=brand-bar>Residential Address(As Per Aadhaar)</h2> <div class=row> <div class=\"col-md-4 col-sm-6 col-xs-12\"> <div class=form-group> <label for=resCountry>Country</label> <div ng-class=\"{'has-error': ($ctrl.model.residentialAddress.country.countryCode==null && (step3Form.resCountry.$touched || $ctrl.submitted))}\"> <ui-select id=resCountry input-id=resCountry name=resCountry aria-label=\"country {{$select.selected.countryName}}\" ng-model=$ctrl.model.residentialAddress.country theme=bootstrap ng-disabled=true> <ui-select-match placeholder=\"Please select\"> <div class=\"flag {{$select.selected.countryCode.toLocaleLowerCase()}}\" style=background-image:url(resources/images/country-flags-sprite.png) ng-if=\"$select.selected.countryCode != -1\"></div> {{$select.selected.countryName}} </ui-select-match> <ui-select-choices repeat=\"item in $ctrl.countries | filter: $select.search\"> <div class=\"flag {{item.countryCode.toLocaleLowerCase()}}\" style=background-image:url(resources/images/country-flags-sprite.png) ng-if=\"item.countryCode != -1\"></div> <span ng-bind-html=\"item.countryName | highlight: $select.search\"></span> </ui-select-choices> <ui-select-no-choice> We couldn't find any choices... </ui-select-no-choice> </ui-select> </div> </div> </div> <div class=\"col-md-4 col-sm-6 col-xs-12\"> <div class=\"form-group line-spacer-xs\"> <label for=resFlatNumber>Flat number and building name</label> <div ng-class=\"{'has-error': step3Form.resFlatNumber.$invalid && ($ctrl.submitted || step3Form.resFlatNumber.$touched)}\"> <input type=text id=resFlatNumber name=resFlatNumber class=form-control address-chars=35 ng-model=$ctrl.model.residentialAddress.address1 ng-pattern=/^([0-9a-zA-Z]{1,}|[\\s]{1}[0-9a-zA-Z]{1,})*$/ aria-describedby=resFlatNumErrMsg onkeypress=\"0===this.value.length&&32===event.charCode&&event.preventDefault()\" aria-invalid=\"{{step3Form.resFlatNumber.$invalid && ($ctrl.submitted || step3Form.resFlatNumber.$touched)}}\" ng-required=\"$ctrl.ekyc != 'Yes'\" ng-disabled=\"$ctrl.ekyc == 'Yes'\"> </div> <div id=resFlatNumErrMsg ng-if=\"$ctrl.ekyc != 'Yes'\" ng-class=\"{'has-error': step3Form.resFlatNumber.$invalid && ($ctrl.submitted || step3Form.resFlatNumber.$touched)}\"> <validation-msg ng-if=\"step3Form.resFlatNumber.$error.required && ($ctrl.submitted || step3Form.resFlatNumber.$touched)\"> Please enter your flat number and building name to continue with your application. </validation-msg> <validation-msg ng-if=\"step3Form.resFlatNumber.$error.maxlength && ($ctrl.submitted || step3Form.resFlatNumber.$touched)\"> Maximum of 35 characters (including spaces) allowed. </validation-msg> <validation-msg ng-if=\"( step3Form.resFlatNumber.$error.pattern) && ($ctrl.submitted || step3Form.resFlatNumber.$touched)\"> Please do not enter any special characters. </validation-msg> </div> </div> </div> </div> <div class=row> <div class=\"col-md-4 col-sm-6 col-xs-12\"> <div class=\"form-group line-spacer\"> <label for=resRoadNumber>Road number/name</label> <div ng-class=\"{'has-error': step3Form.resRoadNumber.$invalid && ($ctrl.submitted || step3Form.resRoadNumber.$touched)}\"> <input type=text id=resRoadNumber name=resRoadNumber class=form-control address-chars=35 ng-model=$ctrl.model.residentialAddress.address2 onkeypress=\"0===this.value.length&&32===event.charCode&&event.preventDefault()\" ng-pattern=/^([0-9a-zA-Z]{1,}|[\\s]{1}[0-9a-zA-Z]{1,})*$/ aria-describedby=resRoadNumberErrMsg aria-invalid=\"{{step3Form.resRoadNumber.$invalid && ($ctrl.submitted || step3Form.resRoadNumber.$touched)}}\" ng-required=\"$ctrl.ekyc != 'Yes'\" ng-disabled=\"$ctrl.ekyc == 'Yes'\"> </div> <div id=resRoadNumberErrMsg ng-if=\"$ctrl.ekyc != 'Yes'\" ng-class=\"{'has-error': step3Form.resRoadNumber.$invalid && ($ctrl.submitted || step3Form.resRoadNumber.$touched)}\"> <validation-msg ng-if=\"step3Form.resRoadNumber.$error.required && ($ctrl.submitted || step3Form.resRoadNumber.$touched)\"> Please enter your road number/name to continue with your application. </validation-msg> <validation-msg ng-if=\"step3Form.resRoadNumber.$error.maxlength && ($ctrl.submitted || step3Form.resRoadNumber.$touched)\"> Maximum of 35 characters (including spaces) allowed. </validation-msg> <validation-msg ng-if=\"( step3Form.resRoadNumber.$error.pattern) && ($ctrl.submitted || step3Form.resRoadNumber.$touched)\"> Please do not enter any special characters. </validation-msg> </div> </div> </div> <div class=\"col-md-4 col-sm-6 col-xs-12\"> <div class=\"form-group line-spacer\"> <label for=resLandmark>Area and landmark</label> <div ng-class=\"{'has-error': step3Form.resLandmark.$invalid && ($ctrl.submitted || step3Form.resLandmark.$touched)}\"> <input type=text id=resLandmark name=resLandmark class=form-control address-chars=35 ng-model=$ctrl.model.residentialAddress.address3 ng-pattern=/^([0-9a-zA-Z]{1,}|[\\s]{1}[0-9a-zA-Z]{1,})*$/ aria-describedby=resLandmarkErrMsg onkeypress=\"0===this.value.length&&32===event.charCode&&event.preventDefault()\" aria-invalid=\"{{step3Form.resLandmark.$invalid && ($ctrl.submitted || step3Form.resLandmark.$touched)}}\" ng-required=\"$ctrl.ekyc != 'Yes'\" ng-disabled=\"$ctrl.ekyc == 'Yes'\"> </div> <div id=resLandmarkErrMsg ng-if=\"$ctrl.ekyc != 'Yes'\" ng-class=\"{'has-error': step3Form.resLandmark.$invalid && ($ctrl.submitted || step3Form.resLandmark.$touched)}\"> <validation-msg ng-if=\"step3Form.resLandmark.$error.required && ($ctrl.submitted || step3Form.resLandmark.$touched)\"> Please enter your area and landmark to continue with your application. </validation-msg> <validation-msg ng-if=\"step3Form.resLandmark.$error.maxlength && ($ctrl.submitted || step3Form.resLandmark.$touched)\"> Maximum of 35 characters (including spaces) allowed. </validation-msg> <validation-msg ng-if=\"( step3Form.resLandmark.$error.pattern) && ($ctrl.submitted || step3Form.resLandmark.$touched)\"> Please do not enter any special characters. </validation-msg> </div> </div> </div> </div> <div class=row> <div class=\"col-md-4 col-sm-6 col-xs-12\"> <div class=\"form-group line-spacer\"> <label for=resPincode>Pin code</label> <div ng-class=\"{'has-error': step3Form.resPincode.$invalid && ($ctrl.submitted || step3Form.resPincode.$touched || step3Form.resPincode.$error.invalid)}\"> <input type=tel id=resPincode name=resPincode class=form-control only-number=6 ng-model=$ctrl.model.residentialAddress.pinCode ng-keyup=\"$ctrl.getAddressByPinCode($event, $ctrl.model.residentialAddress, step3Form.resPincode, 'resDistEmpty')\" onkeypress=\"32===event.charCode&&event.preventDefault()\" ng-minlength=6 aria-describedby=resPincodeErrMsg aria-invalid=\"{{step3Form.resPincode.$invalid && ($ctrl.submitted || step3Form.resPincode.$touched || step3Form.resPincode.$error.invalid)}}\" ng-required=\"$ctrl.ekyc != 'Yes'\" ng-disabled=\"$ctrl.ekyc == 'Yes'\"> </div> <div id=resPincodeErrMsg ng-class=\"{'has-error': step3Form.resPincode.$invalid}\"> <validation-msg ng-if=\"step3Form.resPincode.$error.required && ($ctrl.submitted || step3Form.resPincode.$touched)\"> Please enter your pin code to continue with your application. </validation-msg> <validation-msg ng-if=\"step3Form.resPincode.$error.pattern && ($ctrl.submitted || step3Form.resPincode.$touched)\"> Please enter your Pin code (using digits only, without spaces, slashes or dashes). </validation-msg> <validation-msg ng-if=\"step3Form.resPincode.$error.minlength && ($ctrl.submitted || step3Form.resPincode.$touched)\"> Please enter a minimum of 6 digits Pin code. </validation-msg> <validation-msg ng-if=\"step3Form.resPincode.$error.invalid && !step3Form.resPincode.$error.required && !step3Form.resPincode.$error.minlength && !$ctrl.isStaffJourney\"> Please enter a valid pin code to continue with your application. </validation-msg> </div> </div> </div> <div class=\"col-md-4 col-sm-6 col-xs-12\"> <div class=\"form-group line-spacer\"> <label for=resCity>City</label> <div ng-class=\"{'has-error': step3Form.resCity.$invalid && ($ctrl.submitted || step3Form.resCity.$touched)}\"> <input type=text id=resCity name=resCity class=form-control alpha-space=20 ng-model=$ctrl.model.residentialAddress.city aria-describedby=resCityErrMsg aria-invalid=\"{{step3Form.resCity.$invalid && ($ctrl.submitted || step3Form.resCity.$touched)}}\" ng-disabled=\"!$ctrl.isStaffJourney || $ctrl.ekyc == 'Yes'\" ng-required=\"$ctrl.ekyc != 'Yes'\"> </div> <div id=resCityErrMsg ng-class=\"{'has-error': step3Form.resCity.$invalid}\"> <validation-msg ng-if=\"step3Form.resCity.$error.required && ($ctrl.submitted || step3Form.resCity.$touched)\"> Please enter your city to continue with your application. </validation-msg> </div> </div> </div> </div> <div class=row> <div class=\"col-md-4 col-sm-6 col-xs-12\"> <div class=\"form-group line-spacer\"> <label for=resDistrict>District</label> <div ng-class=\"{'has-error': step3Form.resDistrict.$invalid && ($ctrl.submitted || step3Form.resDistrict.$touched)}\"> <input type=text id=resDistrict name=resDistrict class=form-control alpha-space=20 ng-model=$ctrl.model.residentialAddress.district onkeypress=\"0===this.value.length&&32===event.charCode&&event.preventDefault()\" aria-describedby=resDistrictErrMsg aria-invalid=\"{{step3Form.resDistrict.$invalid && ($ctrl.submitted || step3Form.resDistrict.$touched)}}\" ng-disabled=\"(!$ctrl.isStaffJourney && !$ctrl.resDistEmpty) || $ctrl.ekyc == 'Yes'\" ng-required=\"$ctrl.ekyc != 'Yes'\"> </div> <div id=resDistrictErrMsg ng-class=\"{'has-error': step3Form.resDistrict.$invalid}\"> <validation-msg ng-if=\"step3Form.resDistrict.$error.required && ($ctrl.submitted || step3Form.resDistrict.$touched)\"> Please enter your district to continue with your application. </validation-msg> </div> </div> </div> <div class=\"col-md-4 col-sm-6 col-xs-12\"> <div class=\"form-group line-spacer\"> <label for=resState>State</label> <div ng-class=\"{'has-error': step3Form.resState.$invalid && ($ctrl.submitted || step3Form.resState.$touched)}\"> <input type=text id=resState name=resState class=form-control alpha-space=20 ng-model=$ctrl.model.residentialAddress.state onkeypress=\"0===this.value.length&&32===event.charCode&&event.preventDefault()\" aria-describedby=resStateErrMsg aria-invalid=\"{{step3Form.resState.$invalid && ($ctrl.submitted || step3Form.resState.$touched)}}\" ng-disabled=\"!$ctrl.isStaffJourney || $ctrl.ekyc == 'Yes'\" ng-required=\"$ctrl.ekyc != 'Yes'\"> </div> <div id=resStateErrMsg ng-class=\"{'has-error': step3Form.resState.$invalid}\"> <validation-msg ng-if=\"step3Form.resState.$error.required && ($ctrl.submitted || step3Form.resState.$touched)\"> Please enter your state to continue with your application. </validation-msg> </div> </div> </div> </div> <div class=row> <div class=\"col-md-4 col-sm-6 col-xs-12\"> <div class=\"form-group line-spacer\"> <label id=addressOptionLabel for=addressOption>Address option</label> <div ng-class=\"{'has-error': step3Form.addressOption.$invalid && (step3Form.addressOption.$touched || $ctrl.submitted)}\"> <custom-select> <select id=addressOption name=addressOption class=form-control ng-change=$ctrl.addressOptionChanged() ng-model=$ctrl.model.addressOptions ng-options=\"item for item in $ctrl.addressOptions\" aria-describedby=addressOptionErrMsg aria-invalid=\"{{step3Form.addressOption.$invalid && (step3Form.addressOption.$touched || $ctrl.submitted)}}\" required> <option value=\"\">Please select</option> </select> </custom-select> </div> <div id=addressOptionErrMsg ng-class=\"{'has-error': step3Form.addressOption.$invalid}\"> <validation-msg ng-if=\"step3Form.addressOption.$invalid && (step3Form.addressOption.$touched || $ctrl.submitted)\"> Please tell us about your address using the drop-down menu to continue with your application. </validation-msg> </div> </div> </div> <div class=\"col-md-4 col-sm-6 col-xs-12\"> <div class=\"form-group line-spacer\"> <label id=addressTypeLbl for=addressType>Current address type</label> <div ng-class=\"{'has-error': step3Form.addressType.$invalid && (step3Form.addressType.$touched || $ctrl.submitted)}\"> <custom-select> <select id=addressType name=addressType class=form-control ng-model=$ctrl.model.addressType ng-options=\"item for item in $ctrl.addressTypes\" aria-describedby=addressTypeErrMsg aria-invalid=\"{{step3Form.addressType.$invalid && (step3Form.addressType.$touched || $ctrl.submitted)}}\" required> <option value=\"\">Please select</option> </select> </custom-select> </div> <div id=addressTypeErrMsg ng-class=\"{'has-error': step3Form.addressType.$invalid}\"> <validation-msg ng-if=\"step3Form.addressType.$error.required && (step3Form.addressType.$touched || $ctrl.submitted)\"> Please tell us about your address type using the drop-down menu to continue with your application. </validation-msg> </div> </div> </div> </div> </div> <div id=current-address ng-if=\"$ctrl.model.addressOptions == 'Permanent'\"> <hr class=\"line-spacer no-margin-bottom\"> <h2 class=brand-bar>Current Residential Address</h2> <div class=row> <div class=\"col-md-4 col-sm-6 col-xs-12\"> <div class=form-group> <label id=currentCountryLbl for=currentCountry>Country</label> <div ng-class=\"{'has-error': step3Form.currentCountry.$invalid && (step3Form.currentCountry.$touched || $ctrl.submitted)}\"> <ui-select ng-disabled=true id=currentCountry input-id=currentCountry name=currentCountry aria-label=\"country {{$select.selected.countryName}}\" ng-model=$ctrl.model.currentAddress.country on-select=$ctrl.setPhoneCode(step3Form,$item) theme=bootstrap aria-invalid=\"{{step3Form.currentCountry.$invalid && (step3Form.currentCountry.$touched || $ctrl.submitted)}}\" required> <ui-select-match placeholder=\"Please select\"> <div class=\"flag {{$select.selected.countryCode.toLocaleLowerCase()}}\" style=background-image:url(resources/images/country-flags-sprite.png) ng-if=\"$select.selected.countryCode !=- 1\"></div> {{$select.selected.countryName}} </ui-select-match> <ui-select-choices repeat=\"item in $ctrl.countries | filter: $select.search\"> <div class=\"flag {{item.countryCode.toLocaleLowerCase()}}\" style=background-image:url(resources/images/country-flags-sprite.png) ng-if=\"item.countryCode !=- 1\"></div> <span ng-bind-html=\"item.countryName | highlight: $select.search\"></span> </ui-select-choices> <ui-select-no-choice> We couldn't find any choices... </ui-select-no-choice> </ui-select> </div> </div> </div> <div class=\"col-md-4 col-sm-6 col-xs-12\"> <div class=\"form-group line-spacer-xs\"> <label for=currentFlatNumber> Flat number and building name </label> <div ng-class=\"{'has-error': step3Form.currentFlatNumber.$invalid && ($ctrl.submitted || step3Form.currentFlatNumber.$touched)}\"> <input type=text trim address-chars=35 class=form-control id=currentFlatNumber name=currentFlatNumber aria-describedby=currFlatNumErrMsg onkeypress=\"0===this.value.length&&32===event.charCode&&event.preventDefault()\" ng-pattern=/^([0-9a-zA-Z]{1,}|[\\s]{1}[0-9a-zA-Z]{1,})*$/ ng-maxlength=35 ng-model=$ctrl.model.currentAddress.address1 aria-invalid=\"{{step3Form.currentFlatNumber.$invalid && ($ctrl.submitted || step3Form.currentFlatNumber.$touched)}}\" required> </div> <div id=currFlatNumErrMsg ng-class=\"{'has-error': step3Form.currentFlatNumber.$invalid && ($ctrl.submitted || step3Form.currentFlatNumber.$touched)}\"> <validation-msg ng-if=\"step3Form.currentFlatNumber.$error.required && ($ctrl.submitted || step3Form.currentFlatNumber.$touched)\"> Please enter your flat number and building name to continue with your application. </validation-msg> <validation-msg ng-if=\"step3Form.currentFlatNumber.$error.maxlength && ($ctrl.submitted || step3Form.currentFlatNumber.$touched)\"> Maximum of 35 characters (including spaces) allowed. </validation-msg> <validation-msg ng-if=\"( step3Form.currentFlatNumber.$error.pattern) && ($ctrl.submitted || step3Form.currentFlatNumber.$touched)\"> Please do not enter any special characters. </validation-msg> </div> </div> </div> </div> <div class=row> <div class=\"col-md-4 col-sm-6 col-xs-12\"> <div class=\"form-group line-spacer\"> <label for=currentRoadNumber> Road number/name </label> <div ng-class=\"{'has-error': step3Form.currentRoadNumber.$invalid && ($ctrl.submitted || step3Form.currentRoadNumber.$touched)}\"> <input type=text trim address-chars=35 class=form-control id=currentRoadNumber name=currentRoadNumber aria-describedby=currRoadNumErrMsg onkeypress=\"0===this.value.length&&32===event.charCode&&event.preventDefault()\" ng-pattern=/^([0-9a-zA-Z]{1,}|[\\s]{1}[0-9a-zA-Z]{1,})*$/ ng-maxlength=35 ng-model=$ctrl.model.currentAddress.address2 aria-invalid=\"{{step3Form.currentRoadNumber.$invalid && ($ctrl.submitted || step3Form.currentRoadNumber.$touched)}}\" required> </div> <div id=currRoadNumErrMsg ng-class=\"{'has-error': $ctrl.ekyc!='Yes' && step3Form.currentRoadNumber.$invalid && ($ctrl.submitted || step3Form.currentRoadNumber.$touched)}\"> <validation-msg ng-if=\"step3Form.currentRoadNumber.$error.required && ($ctrl.submitted || step3Form.currentRoadNumber.$touched)\"> Please enter your road number/name to continue with your application. </validation-msg> <validation-msg ng-if=\"step3Form.currentRoadNumber.$error.maxlength && ($ctrl.submitted || step3Form.currentRoadNumber.$touched)\"> Maximum of 35 characters (including spaces) allowed. </validation-msg> <validation-msg ng-if=\"( step3Form.currentRoadNumber.$error.pattern) && ($ctrl.submitted || step3Form.currentRoadNumber.$touched)\"> Please do not enter any special characters. </validation-msg> </div> </div> </div> <div class=\"col-md-4 col-sm-6 col-xs-12\"> <div class=\"form-group line-spacer\"> <label for=currentArea> Area and landmark </label> <div ng-class=\"{'has-error': step3Form.currentArea.$invalid && ($ctrl.submitted || step3Form.currentArea.$touched)}\"> <input type=text trim address-chars=35 class=form-control id=currentArea name=currentArea aria-describedby=currAreaErrMsg onkeypress=\"0===this.value.length&&32===event.charCode&&event.preventDefault()\" ng-pattern=/^([0-9a-zA-Z]{1,}|[\\s]{1}[0-9a-zA-Z]{1,})*$/ ng-maxlength=35 ng-model=$ctrl.model.currentAddress.address3 aria-invalid=\"{{step3Form.currentArea.$invalid && ($ctrl.submitted || step3Form.currentArea.$touched)}}\" required> </div> <div id=currAreaErrMsg ng-class=\"{'has-error': step3Form.currentArea.$invalid && ($ctrl.submitted || step3Form.currentArea.$touched)}\"> <validation-msg ng-if=\"step3Form.currentArea.$error.required && ($ctrl.submitted || step3Form.currentArea.$touched)\"> Please enter your area and landmark to continue with your application. </validation-msg> <validation-msg ng-if=\"step3Form.currentArea.$error.maxlength && ($ctrl.submitted || step3Form.currentArea.$touched)\"> Maximum of 35 characters (including spaces) allowed. </validation-msg> <validation-msg ng-if=\"( step3Form.currentArea.$error.pattern) && ($ctrl.submitted || step3Form.currentArea.$touched)\"> Please do not enter any special characters. </validation-msg> </div> </div> </div> </div> <div class=row> <div class=\"col-md-4 col-sm-6 col-xs-12\"> <div class=\"form-group line-spacer\"> <label for=currentPinCode> Pin code </label> <div ng-class=\"{'has-error': step3Form.currentPinCode.$invalid && ($ctrl.submitted || step3Form.currentPinCode.$touched || step3Form.currentPinCode.$error.invalid)}\"> <input type=tel trim class=form-control id=currentPinCode name=currentPinCode aria-describedby=currPinErrMsg only-number=6 onkeypress=\"32===event.charCode&&event.preventDefault()\" ng-minlength=6 ng-keyup=\"$ctrl.getAddressByPinCode($event, $ctrl.model.currentAddress, step3Form.currentPinCode, 'currDistEmpty')\" ng-model=$ctrl.model.currentAddress.pinCode aria-invalid=\"{{step3Form.currentPinCode.$invalid && ($ctrl.submitted || step3Form.currentPinCode.$touched || step3Form.currentPinCode.$error.invalid)}}\" required> </div> <div id=currPinErrMsg ng-class=\"{'has-error': step3Form.currentPinCode.$invalid}\"> <validation-msg ng-if=\"step3Form.currentPinCode.$error.required && ($ctrl.submitted || step3Form.currentPinCode.$touched)\"> Please enter your pin code to continue with your application. </validation-msg> <validation-msg ng-if=\"step3Form.currentPinCode.$error.minlength && ($ctrl.submitted || step3Form.currentPinCode.$touched)\"> Please enter a minimum of 6 digits Pin code </validation-msg> <validation-msg ng-if=\"step3Form.currentPinCode.$error.invalid && !step3Form.currentPinCode.$error.required && !step3Form.currentPinCode.$error.minlength && !$ctrl.isStaffJourney\"> Please enter a valid pin code to continue with your application. </validation-msg> </div> </div> </div> <div class=\"col-md-4 col-sm-6 col-xs-12\"> <div class=\"form-group line-spacer\"> <label for=currentCity>City</label> <div ng-class=\"{'has-error': step3Form.currentCity.$invalid && ($ctrl.submitted || step3Form.currentCity.$touched)}\"> <input type=text trim alpha-space=20 class=form-control id=currentCity name=currentCity aria-describedby=currCityErrMsg onkeypress=\"0===this.value.length&&32===event.charCode&&event.preventDefault()\" aria-invalid=\"{{step3Form.currentCity.$invalid && ($ctrl.submitted || step3Form.currentCity.$touched)}}\" ng-model=$ctrl.model.currentAddress.city ng-disabled=!$ctrl.isStaffJourney required> </div> <div id=currCityErrMsg ng-class=\"{'has-error': step3Form.currentCity.$invalid}\"> <validation-msg ng-if=\"step3Form.currentCity.$error.required && ($ctrl.submitted || step3Form.currentCity.$touched)\"> Please enter your city to continue with your application. </validation-msg> </div> </div> </div> </div> <div class=row> <div class=\"col-md-4 col-sm-6 col-xs-12\"> <div class=\"form-group line-spacer\"> <label for=currentDistrict>District</label> <div ng-class=\"{'has-error': step3Form.currentDistrict.$invalid && ($ctrl.submitted || step3Form.currentDistrict.$touched)}\"> <input type=text trim alpha-space=20 class=form-control id=currentDistrict name=currentDistrict aria-describedby=currDistErrMsg onkeypress=\"0===this.value.length&&32===event.charCode&&event.preventDefault()\" ng-model=$ctrl.model.currentAddress.district aria-describedby=currDistrictErrMsg aria-invalid=\"{{step3Form.currentDistrict.$invalid && ($ctrl.submitted || step3Form.currentDistrict.$touched)}}\" ng-disabled=\"!$ctrl.isStaffJourney && !$ctrl.currDistEmpty\" required> </div> <div id=currDistrictErrMsg ng-class=\"{'has-error': step3Form.currentDistrict.$invalid}\"> <validation-msg ng-if=\"step3Form.currentDistrict.$error.required && ($ctrl.submitted || step3Form.currentDistrict.$touched)\"> Please enter your district to continue with your application. </validation-msg> </div> </div> </div> <div class=\"col-md-4 col-sm-6 col-xs-12\"> <div class=\"form-group line-spacer\"> <label for=currentState>State</label> <div ng-class=\"{'has-error': step3Form.currentState.$invalid && ($ctrl.submitted || step3Form.currentState.$touched)}\"> <input alpha-space=20 trim type=text class=form-control id=currentState name=currentState aria-describedby=currStateErrMsg onkeypress=\"0===this.value.length&&32===event.charCode&&event.preventDefault()\" ng-model=$ctrl.model.currentAddress.state aria-describedby=currStateErrMsg aria-invalid=\"{{step3Form.currentState.$invalid && ($ctrl.submitted || step3Form.currentState.$touched)}}\" ng-disabled=!$ctrl.isStaffJourney required> </div> <div id=currStateErrMsg ng-class=\"{'has-error': step3Form.currentState.$invalid}\"> <validation-msg ng-if=\"step3Form.currentState.$error.required && ($ctrl.submitted || step3Form.currentState.$touched)\"> Please enter your State to continue with your application. </validation-msg> </div> </div> </div> </div> <div class=row> <div class=\"col-md-12 col-sm-12 col-xs-12\"> <hr ng-if=\"$ctrl.model.addressOptions=='Permanent'\" class=\"line-spacer no-margin-bottom\"/> </div> </div> </div> <div id=permanent-address ng-if=\"$ctrl.model.addressOptions == 'Current'\"> <hr class=\"line-spacer no-margin-bottom\"> <h2 class=brand-bar>Permanent Residential Address</h2> <div class=row> <div class=\"col-md-4 col-sm-6 col-xs-12\"> <div class=form-group> <label id=currentCountryLbl for=currentCountry>Country</label> <div ng-class=\"{'has-error': step3Form.currentCountry.$invalid && (step3Form.currentCountry.$touched || $ctrl.submitted)}\"> <ui-select ng-disabled=true id=currentCountry input-id=currentCountry name=currentCountry aria-label=\"country {{$select.selected.countryName}}\" ng-model=$ctrl.model.currentAddress.country on-select=$ctrl.setPhoneCode(step3Form,$item) theme=bootstrap aria-invalid=\"{{step3Form.currentCountry.$invalid && (step3Form.currentCountry.$touched || $ctrl.submitted)}}\" required> <ui-select-match placeholder=\"Please select\"> <div class=\"flag {{$select.selected.countryCode.toLocaleLowerCase()}}\" style=background-image:url(resources/images/country-flags-sprite.png) ng-if=\"$select.selected.countryCode !=- 1\"></div> {{$select.selected.countryName}} </ui-select-match> <ui-select-choices repeat=\"item in $ctrl.countries | filter: $select.search\"> <div class=\"flag {{item.countryCode.toLocaleLowerCase()}}\" style=background-image:url(resources/images/country-flags-sprite.png) ng-if=\"item.countryCode !=- 1\"></div> <span ng-bind-html=\"item.countryName | highlight: $select.search\"></span> </ui-select-choices> <ui-select-no-choice> We couldn't find any choices... </ui-select-no-choice> </ui-select> </div> </div> </div> <div class=\"col-md-4 col-sm-6 col-xs-12\"> <div class=\"form-group line-spacer-xs\"> <label for=currentFlatNumber> Flat number and building name </label> <div ng-class=\"{'has-error': step3Form.currentFlatNumber.$invalid && ($ctrl.submitted || step3Form.currentFlatNumber.$touched)}\"> <input type=text trim address-chars=35 class=form-control id=currentFlatNumber name=currentFlatNumber aria-describedby=currFlatNumErrMsg onkeypress=\"0===this.value.length&&32===event.charCode&&event.preventDefault()\" ng-pattern=/^([0-9a-zA-Z]{1,}|[\\s]{1}[0-9a-zA-Z]{1,})*$/ ng-maxlength=35 ng-model=$ctrl.model.currentAddress.address1 aria-invalid=\"{{step3Form.currentFlatNumber.$invalid && ($ctrl.submitted || step3Form.currentFlatNumber.$touched)}}\" required> </div> <div id=currFlatNumErrMsg ng-class=\"{'has-error': step3Form.currentFlatNumber.$invalid && ($ctrl.submitted || step3Form.currentFlatNumber.$touched)}\"> <validation-msg ng-if=\"step3Form.currentFlatNumber.$error.required && ($ctrl.submitted || step3Form.currentFlatNumber.$touched)\"> Please enter your flat number and building name to continue with your application. </validation-msg> <validation-msg ng-if=\"step3Form.currentFlatNumber.$error.maxlength && ($ctrl.submitted || step3Form.currentFlatNumber.$touched)\"> Maximum of 35 characters (including spaces) allowed. </validation-msg> <validation-msg ng-if=\"( step3Form.currentFlatNumber.$error.pattern) && ($ctrl.submitted || step3Form.currentFlatNumber.$touched)\"> Please do not enter any special characters. </validation-msg> </div> </div> </div> </div> <div class=row> <div class=\"col-md-4 col-sm-6 col-xs-12\"> <div class=\"form-group line-spacer\"> <label for=currentRoadNumber> Road number/name </label> <div ng-class=\"{'has-error': step3Form.currentRoadNumber.$invalid && ($ctrl.submitted || step3Form.currentRoadNumber.$touched)}\"> <input type=text trim address-chars=35 class=form-control id=currentRoadNumber name=currentRoadNumber aria-describedby=currRoadNumErrMsg onkeypress=\"0===this.value.length&&32===event.charCode&&event.preventDefault()\" ng-pattern=/^([0-9a-zA-Z]{1,}|[\\s]{1}[0-9a-zA-Z]{1,})*$/ ng-maxlength=35 ng-model=$ctrl.model.currentAddress.address2 aria-invalid=\"{{step3Form.currentRoadNumber.$invalid && ($ctrl.submitted || step3Form.currentRoadNumber.$touched)}}\" required> </div> <div id=currRoadNumErrMsg ng-class=\"{'has-error': $ctrl.ekyc!='Yes' && step3Form.currentRoadNumber.$invalid && ($ctrl.submitted || step3Form.currentRoadNumber.$touched)}\"> <validation-msg ng-if=\"step3Form.currentRoadNumber.$error.required && ($ctrl.submitted || step3Form.currentRoadNumber.$touched)\"> Please enter your road number/name to continue with your application. </validation-msg> <validation-msg ng-if=\"step3Form.currentRoadNumber.$error.maxlength && ($ctrl.submitted || step3Form.currentRoadNumber.$touched)\"> Maximum of 35 characters (including spaces) allowed. </validation-msg> <validation-msg ng-if=\"( step3Form.currentRoadNumber.$error.pattern) && ($ctrl.submitted || step3Form.currentRoadNumber.$touched)\"> Please do not enter any special characters. </validation-msg> </div> </div> </div> <div class=\"col-md-4 col-sm-6 col-xs-12\"> <div class=\"form-group line-spacer\"> <label for=currentArea> Area and landmark </label> <div ng-class=\"{'has-error': step3Form.currentArea.$invalid && ($ctrl.submitted || step3Form.currentArea.$touched)}\"> <input type=text trim address-chars=35 class=form-control id=currentArea name=currentArea aria-describedby=currAreaErrMsg onkeypress=\"0===this.value.length&&32===event.charCode&&event.preventDefault()\" ng-pattern=/^([0-9a-zA-Z]{1,}|[\\s]{1}[0-9a-zA-Z]{1,})*$/ ng-maxlength=35 ng-model=$ctrl.model.currentAddress.address3 aria-invalid=\"{{step3Form.currentArea.$invalid && ($ctrl.submitted || step3Form.currentArea.$touched)}}\" required> </div> <div id=currAreaErrMsg ng-class=\"{'has-error': step3Form.currentArea.$invalid && ($ctrl.submitted || step3Form.currentArea.$touched)}\"> <validation-msg ng-if=\"step3Form.currentArea.$error.required && ($ctrl.submitted || step3Form.currentArea.$touched)\"> Please enter your area and landmark to continue with your application. </validation-msg> <validation-msg ng-if=\"step3Form.currentArea.$error.maxlength && ($ctrl.submitted || step3Form.currentArea.$touched)\"> Maximum of 35 characters (including spaces) allowed. </validation-msg> <validation-msg ng-if=\"( step3Form.currentArea.$error.pattern) && ($ctrl.submitted || step3Form.currentArea.$touched)\"> Please do not enter any special characters. </validation-msg> </div> </div> </div> </div> <div class=row> <div class=\"col-md-4 col-sm-6 col-xs-12\"> <div class=\"form-group line-spacer\"> <label for=currentPinCode> Pin code </label> <div ng-class=\"{'has-error': step3Form.currentPinCode.$invalid && ($ctrl.submitted || step3Form.currentPinCode.$touched || step3Form.currentPinCode.$error.invalid)}\"> <input type=tel trim class=form-control id=currentPinCode name=currentPinCode aria-describedby=currPinErrMsg only-number=6 onkeypress=\"32===event.charCode&&event.preventDefault()\" ng-minlength=6 ng-keyup=\"$ctrl.getAddressByPinCode($event, $ctrl.model.currentAddress, step3Form.currentPinCode, 'currDistEmpty')\" ng-model=$ctrl.model.currentAddress.pinCode aria-invalid=\"{{step3Form.currentPinCode.$invalid && ($ctrl.submitted || step3Form.currentPinCode.$touched || step3Form.currentPinCode.$error.invalid)}}\" required> </div> <div id=currPinErrMsg ng-class=\"{'has-error': step3Form.currentPinCode.$invalid}\"> <validation-msg ng-if=\"step3Form.currentPinCode.$error.required && ($ctrl.submitted || step3Form.currentPinCode.$touched)\"> Please enter your pin code to continue with your application. </validation-msg> <validation-msg ng-if=\"step3Form.currentPinCode.$error.minlength && ($ctrl.submitted || step3Form.currentPinCode.$touched)\"> Please enter a minimum of 6 digits Pin code </validation-msg> <validation-msg ng-if=\"step3Form.currentPinCode.$error.invalid && !step3Form.currentPinCode.$error.required && !step3Form.currentPinCode.$error.minlength && !$ctrl.isStaffJourney\"> Please enter a valid pin code to continue with your application. </validation-msg> </div> </div> </div> <div class=\"col-md-4 col-sm-6 col-xs-12\"> <div class=\"form-group line-spacer\"> <label for=currentCity>City</label> <div ng-class=\"{'has-error': step3Form.currentCity.$invalid && ($ctrl.submitted || step3Form.currentCity.$touched)}\"> <input type=text trim alpha-space=20 class=form-control id=currentCity name=currentCity aria-describedby=currCityErrMsg onkeypress=\"0===this.value.length&&32===event.charCode&&event.preventDefault()\" aria-invalid=\"{{step3Form.currentCity.$invalid && ($ctrl.submitted || step3Form.currentCity.$touched)}}\" ng-model=$ctrl.model.currentAddress.city ng-disabled=!$ctrl.isStaffJourney required> </div> <div id=currCityErrMsg ng-class=\"{'has-error': step3Form.currentCity.$invalid}\"> <validation-msg ng-if=\"step3Form.currentCity.$error.required && ($ctrl.submitted || step3Form.currentCity.$touched)\"> Please enter your city to continue with your application. </validation-msg> </div> </div> </div> </div> <div class=row> <div class=\"col-md-4 col-sm-6 col-xs-12\"> <div class=\"form-group line-spacer\"> <label for=currentDistrict>District</label> <div ng-class=\"{'has-error': step3Form.currentDistrict.$invalid && ($ctrl.submitted || step3Form.currentDistrict.$touched)}\"> <input type=text trim alpha-space=20 class=form-control id=currentDistrict name=currentDistrict aria-describedby=currDistErrMsg onkeypress=\"0===this.value.length&&32===event.charCode&&event.preventDefault()\" ng-model=$ctrl.model.currentAddress.district aria-describedby=currDistrictErrMsg aria-invalid=\"{{step3Form.currentDistrict.$invalid && ($ctrl.submitted || step3Form.currentDistrict.$touched)}}\" ng-disabled=\"!$ctrl.isStaffJourney && !$ctrl.currDistEmpty\" required> </div> <div id=currDistrictErrMsg ng-class=\"{'has-error': step3Form.currentDistrict.$invalid}\"> <validation-msg ng-if=\"step3Form.currentDistrict.$error.required && ($ctrl.submitted || step3Form.currentDistrict.$touched)\"> Please enter your district to continue with your application. </validation-msg> </div> </div> </div> <div class=\"col-md-4 col-sm-6 col-xs-12\"> <div class=\"form-group line-spacer\"> <label for=currentState>State</label> <div ng-class=\"{'has-error': step3Form.currentState.$invalid && ($ctrl.submitted || step3Form.currentState.$touched)}\"> <input alpha-space=20 trim type=text class=form-control id=currentState name=currentState aria-describedby=currStateErrMsg onkeypress=\"0===this.value.length&&32===event.charCode&&event.preventDefault()\" ng-model=$ctrl.model.currentAddress.state aria-describedby=currStateErrMsg aria-invalid=\"{{step3Form.currentState.$invalid && ($ctrl.submitted || step3Form.currentState.$touched)}}\" ng-disabled=!$ctrl.isStaffJourney required> </div> <div id=currStateErrMsg ng-class=\"{'has-error': step3Form.currentState.$invalid}\"> <validation-msg ng-if=\"step3Form.currentState.$error.required && ($ctrl.submitted || step3Form.currentState.$touched)\"> Please enter your State to continue with your application. </validation-msg> </div> </div> </div> </div> <div class=row> <div class=\"col-md-12 col-sm-12 col-xs-12\"> <hr ng-if=\"$ctrl.model.addressOptions=='Current'\" class=\"line-spacer no-margin-bottom\"/> </div> </div> </div> <div id=home-number-len-of-stay> <hr class=\"line-spacer no-margin-bottom\"> <div class=row> <div class=\"col-md-4 col-sm-6 col-xs-12\"> <div class=\"form-group line-spacer\" role=group aria-labelledby=homeNumberLabel> <div> <label id=homeNumberLabel for=currentMobileNo>Home number (Optional)</label> </div> <div class=phone-container> <div class=std-code-box> <label for=stdCode class=screen-reader-only>Home number STD code</label> <div class=input-group ng-class=\"{'has-error': step3Form.stdCode.$invalid && ($ctrl.submitted || step3Form.stdCode.$touched)}\"> <span class=input-group-addon id=countryCode aria-hidden=true tabindex=-1> <span class=\"flag in\" style=background-image:url(resources/images/country-flags-sprite.png)></span>+91</span> <input type=tel trim id=stdCode name=stdCode class=\"form-control has-block\" ng-model=$ctrl.model.stdCode placeholder=STD onkeypress=\"if(0==this.value.length&&(48==event.which||32===event.charCode))return!1\" ng-change=$ctrl.homeNumberChange() number-std=5 aria-describedby=\"countryCode currMoileErrMsg\" aria-invalid=\"{{step3Form.stdCode.$invalid && ($ctrl.submitted || step3Form.stdCode.$touched)}}\"> </div> </div> <div class=separator>-</div> <div class=number-box> <div ng-class=\"{'has-error': step3Form.currentMobileNo.$invalid && ($ctrl.submitted || step3Form.currentMobileNo.$touched)}\"> <input type=tel trim id=currentMobileNo name=currentMobileNo class=\"form-control has-block\" ng-model=$ctrl.model.homeNumber placeholder=Phone onkeypress=\"if(0==this.value.length&&(48==event.which||32===event.charCode))return!1\" ng-change=$ctrl.homeNumberChange() only-number=10 aria-describedby=currMoileErrMsg aria-invalid=\"{{step3Form.currentMobileNo.$invalid && ($ctrl.submitted || step3Form.currentMobileNo.$touched)}}\"> </div> </div> </div> <div id=currMoileErrMsg ng-class=\"{'has-error': (step3Form.currentMobileNo.$invalid && ($ctrl.submitted || step3Form.currentMobileNo.$touched)) || (step3Form.stdCode.$invalid && ($ctrl.submitted || step3Form.stdCode.$touched))}\"> <validation-msg ng-if=\"step3Form.currentMobileNo.$error.minlength && ((step3Form.currentMobileNo.$touched) || $ctrl.submitted)\"> Please enter at least 10 numbers. </validation-msg> <validation-msg ng-if=\"step3Form.currentMobileNo.$error.maxlength && ((step3Form.currentMobileNo.$touched) || $ctrl.submitted)\"> Maximum of 15 characters allowed. </validation-msg> </div> </div> </div> <div class=\"col-md-8 col-sm-6 col-xs-12\"> <div role=group aria-labelledby=lengthOfStayLabel class=\"form-group line-spacer\"> <div id=lengthOfStayLabel class=control-label> Length of Stay (year/month) </div> <div class=year-month-container> <div class=left> <label for=lengthOfStayYear class=screen-reader-only>Year</label> <div ng-class=\"{'has-error': step3Form.lengthOfStayYear.$invalid && ($ctrl.submitted || step3Form.lengthOfStayYear.$touched && step3Form.lengthOfStayMonth.$touched)}\"> <custom-select> <select id=lengthOfStayYear name=lengthOfStayYear class=form-control ng-model=$ctrl.model.lengthOfStayYear ng-options=\"item.value as item.label disable when $ctrl.model.lengthOfStayMonth === 0 && item.value === 0 for item in $ctrl.lengthOfStayYears\" ng-change=$ctrl.lenOfStayChanged() aria-describedby=lenStayErrMsg aria-invalid=\"{{step3Form.lengthOfStayYear.$invalid && ($ctrl.submitted || step3Form.lengthOfStayYear.$touched && step3Form.lengthOfStayMonth.$touched)}}\" required> <option value=\"\">Please select</option> </select> </custom-select> </div> </div> <div class=right> <label for=lengthOfStayMonth class=screen-reader-only>Month</label> <div ng-class=\"{'has-error': step3Form.lengthOfStayMonth.$invalid && ($ctrl.submitted || step3Form.lengthOfStayMonth.$touched && step3Form.lengthOfStayYear.$touched)}\"> <custom-select> <select id=lengthOfStayMonth name=lengthOfStayMonth class=form-control ng-model=$ctrl.model.lengthOfStayMonth ng-options=\"item.value as item.label disable when $ctrl.model.lengthOfStayYear === 0 && item.value === 0 for item in $ctrl.lengthOfStayMonths\" ng-change=$ctrl.lenOfStayChanged() aria-describedby=lenStayErrMsg aria-invalid=\"{{step3Form.lengthOfStayYear.$invalid && ($ctrl.submitted || step3Form.lengthOfStayYear.$touched && step3Form.lengthOfStayMonth.$touched)}}\" required> <option value=\"\">Please select</option> </select> </custom-select> </div> </div> </div> <div id=lenStayErrMsg ng-class=\"{'has-error': step3Form.lengthOfStayYear.$invalid || step3Form.lengthOfStayMonth.$invalid}\"> <validation-msg ng-if=\"(step3Form.lengthOfStayYear.$error.required || step3Form.lengthOfStayMonth.$error.required) && (step3Form.lengthOfStayYear.$touched && step3Form.lengthOfStayMonth.$touched || $ctrl.submitted) && (step3Form.lengthOfStayYear.$invalid || step3Form.lengthOfStayMonth.$invalid)\"> Please enter your length of stay to continue with your application. </validation-msg> <validation-msg ng-if=\"!step3Form.lengthOfStayMonth.$error.required && step3Form.lengthOfStayYear.$error.stayGreaterThanAge && (step3Form.lengthOfStayYear.$touched && step3Form.lengthOfStayMonth.$touched || $ctrl.submitted)\"> Length of stay cannot be greater than your age. </validation-msg> </div> </div> </div> </div> </div> <div id=previous-address ng-if=\"$ctrl.model.lengthOfStayYear != null && $ctrl.model.lengthOfStayYear < 1\"> <div class=row> <div class=\"col-md-12 col-sm-12 col-xs-12\"> <hr class=\"line-spacer no-margin-bottom\"> </div> </div> <div class=row> <div class=\"col-md-12 col-sm-12 col-xs-12\"> <h2 class=brand-bar>Previous address</h2> </div> </div> <div class=row> <div class=\"col-md-4 col-sm-6 col-xs-12\"> <div class=form-group> <label id=preAddCountryLbl for=country>Country</label> <div> <div ng-class=\"{'has-error': ($ctrl.model.previousAddress.country.countryCode==null && (step3Form.previousAddressCountry.$touched || $ctrl.submitted))}\"> <ui-select on-select=$ctrl.model.previousAddressSelected(step3Form) id=country input-id=country name=country aria-label=\"country {{$select.selected.countryName}}\" ng-model=$ctrl.model.previousAddress.country theme=bootstrap ng-disabled=true aria-invalid=\"{{($ctrl.model.previousAddress.country.countryCode==null && (step3Form.previousAddressCountry.$touched || $ctrl.submitted))}}\"> <ui-select-match placeholder=\"Please select\"> <div class=\"flag {{$select.selected.countryCode.toLocaleLowerCase()}}\" style=background-image:url(resources/images/country-flags-sprite.png) ng-if=\"$select.selected.countryCode != -1\"></div> {{$select.selected.countryName}} </ui-select-match> <ui-select-choices repeat=\"item in $ctrl.countries | filter: $select.search\"> <div class=\"flag {{item.countryCode.toLocaleLowerCase()}}\" style=background-image:url(resources/images/country-flags-sprite.png) ng-if=\"item.countryCode != -1\"></div> <span ng-bind-html=\"item.countryName | highlight: $select.search\"></span> </ui-select-choices> <ui-select-no-choice> We couldn't find any choices... </ui-select-no-choice> </ui-select> </div> </div> </div> </div> <div class=\"col-md-4 col-sm-6 col-xs-12\"> <div class=\"form-group line-spacer-xs\"> <label for=previousFlatNumber> Flat number and building name </label> <div ng-class=\"{'has-error': step3Form.previousFlatNumber.$invalid && ($ctrl.submitted || step3Form.previousFlatNumber.$touched)}\"> <input address-chars=35 trim type=text class=form-control id=previousFlatNumber name=previousFlatNumber aria-describedby=preFlatNumErrMsg onkeypress=\"0===this.value.length&&32===event.charCode&&event.preventDefault()\" ng-pattern=/^([0-9a-zA-Z]{1,}|[\\s]{1}[0-9a-zA-Z]{1,})*$/ ng-maxlength=35 ng-model=$ctrl.model.previousAddress.address1 ng-required=\"$ctrl.model.lengthOfStayYear || step3Form.year.$touched\" aria-invalid=\"{{step3Form.previousFlatNumber.$invalid && ($ctrl.submitted || step3Form.previousFlatNumber.$touched)}}\"> </div> <div id=preFlatNumErrMsg ng-class=\"{'has-error': step3Form.previousFlatNumber.$invalid && ($ctrl.submitted || step3Form.previousFlatNumber.$touched)}\"> <validation-msg ng-if=\"step3Form.previousFlatNumber.$error.required && ($ctrl.submitted || step3Form.previousFlatNumber.$touched)\"> Please enter your flat number and building name to continue with your application. </validation-msg> <validation-msg ng-if=\"step3Form.previousFlatNumber.$error.maxlength && ($ctrl.submitted || step3Form.previousFlatNumber.$touched)\"> Maximum of 35 characters (including spaces) allowed. </validation-msg> <validation-msg ng-if=\"( step3Form.previousFlatNumber.$error.pattern) && ($ctrl.submitted || step3Form.previousFlatNumber.$touched)\"> Please do not enter any special characters. </validation-msg> </div> </div> </div> </div> <div class=row> <div class=\"col-md-4 col-sm-6 col-xs-12\"> <div class=\"form-group line-spacer\"> <label for=previousRoadNumber> Road number/name </label> <div ng-class=\"{'has-error': step3Form.previousRoadNumber.$invalid && ($ctrl.submitted || step3Form.previousRoadNumber.$touched)}\"> <input address-chars=35 trim type=text class=form-control id=previousRoadNumber name=previousRoadNumber onkeypress=\"0===this.value.length&&32===event.charCode&&event.preventDefault()\" ng-pattern=/^([0-9a-zA-Z]{1,}|[\\s]{1}[0-9a-zA-Z]{1,})*$/ ng-maxlength=35 ng-model=$ctrl.model.previousAddress.address2 ng-required=\"$ctrl.model.lengthOfStayYear || step3Form.year.$touched\" aria-invalid=\"{{step3Form.previousRoadNumber.$invalid && ($ctrl.submitted || step3Form.previousRoadNumber.$touched)}}\"> </div> <div ng-class=\"{'has-error': step3Form.previousRoadNumber.$invalid && ($ctrl.submitted || step3Form.previousRoadNumber.$touched)}\"> <validation-msg ng-if=\"step3Form.previousRoadNumber.$error.required && ($ctrl.submitted || step3Form.previousRoadNumber.$touched)\"> Please enter your road number/name to continue with your application. </validation-msg> <validation-msg ng-if=\"step3Form.previousRoadNumber.$error.maxlength && ($ctrl.submitted || step3Form.previousRoadNumber.$touched)\"> Maximum of 35 characters (including spaces) allowed. </validation-msg> <validation-msg ng-if=\"( step3Form.previousRoadNumber.$error.pattern) && ($ctrl.submitted || step3Form.previousRoadNumber.$touched)\"> Please do not enter any special characters. </validation-msg> </div> </div> </div> <div class=\"col-md-4 col-sm-6 col-xs-12\"> <div class=\"form-group line-spacer\"> <label for=previousArea> Area and landmark </label> <div ng-class=\"{'has-error': step3Form.previousArea.$invalid && ($ctrl.submitted || step3Form.previousArea.$touched)}\"> <input address-chars=35 trim type=text class=form-control id=previousArea name=previousArea aria-describedby=preAreaErrMsg onkeypress=\"0===this.value.length&&32===event.charCode&&event.preventDefault()\" ng-pattern=/^([0-9a-zA-Z]{1,}|[\\s]{1}[0-9a-zA-Z]{1,})*$/ ng-maxlength=35 ng-model=$ctrl.model.previousAddress.address3 ng-required=\"$ctrl.model.lengthOfStayYear || step3Form.year.$touched\" aria-invalid=\"{{step3Form.previousArea.$invalid && ($ctrl.submitted || step3Form.previousArea.$touched)}}\"> </div> <div id=preAreaErrMsg ng-class=\"{'has-error': step3Form.previousArea.$invalid && ($ctrl.submitted || step3Form.previousArea.$touched)}\"> <validation-msg ng-if=\"step3Form.previousArea.$error.required && ($ctrl.submitted || step3Form.previousArea.$touched)\"> Please enter your area and landmark to continue with your application. </validation-msg> <validation-msg ng-if=\"step3Form.previousArea.$error.maxlength && ($ctrl.submitted || step3Form.previousArea.$touched)\"> Maximum of 35 characters (including spaces) allowed. </validation-msg> <validation-msg ng-if=\"( step3Form.previousArea.$error.pattern) && ($ctrl.submitted || step3Form.previousArea.$touched)\"> Please do not enter any special characters. </validation-msg> </div> </div> </div> </div> <div class=row> <div class=\"col-md-4 col-sm-6 col-xs-12\"> <div class=\"form-group line-spacer\"> <label for=previousPinCode> Pin code </label> <div ng-class=\"{'has-error': step3Form.previousPinCode.$invalid && ($ctrl.submitted || step3Form.previousPinCode.$touched || step3Form.previousPinCode.$error.invalid)}\"> <input type=tel trim class=form-control id=previousPinCode name=previousPinCode aria-describedby=prePinErrMsg ng-keyup=\"$ctrl.getAddressByPinCode($event, $ctrl.model.previousAddress, step3Form.previousPinCode, 'preDistEmpty')\" only-number=6 onkeypress=\"32===event.charCode&&event.preventDefault()\" ng-minlength=6 ng-model=$ctrl.model.previousAddress.pinCode ng-required=\"$ctrl.model.lengthOfStayYear || step3Form.year.$touched\" aria-invalid=\"{{step3Form.previousPinCode.$invalid && ($ctrl.submitted || step3Form.previousPinCode.$touched || step3Form.previousPinCode.$error.invalid)}}\"> </div> <div id=prePinErrMsg ng-class=\"{'has-error': step3Form.previousPinCode.$invalid}\"> <validation-msg ng-if=\"step3Form.previousPinCode.$error.required && ($ctrl.submitted || step3Form.previousPinCode.$touched)\"> Please enter your pin code to continue with your application. </validation-msg> <validation-msg ng-if=\"step3Form.previousPinCode.$error.pattern && ($ctrl.submitted || step3Form.previousPinCode.$touched)\"> Please enter your Pin code (using digits only, without spaces, slashes or dashes). </validation-msg> <validation-msg ng-if=\"step3Form.previousPinCode.$error.minlength && ($ctrl.submitted || step3Form.previousPinCode.$touched)\"> Please enter a minimum of 6 digits Pin code. </validation-msg> <validation-msg ng-if=\"step3Form.previousPinCode.$error.invalid && !step3Form.previousPinCode.$error.required && !step3Form.previousPinCode.$error.minlength && !$ctrl.isStaffJourney\"> Please enter a valid pin code to continue with your application. </validation-msg> </div> </div> </div> <div class=\"col-md-4 col-sm-6 col-xs-12\"> <div class=\"form-group line-spacer\"> <label for=previousCity>City</label> <div ng-class=\"{'has-error': step3Form.previousCity.$invalid && ($ctrl.submitted || step3Form.previousCity.$touched)}\"> <input alpha-space=20 trim type=text class=form-control id=previousCity name=previousCity aria-describedby=preCityErrMsg onkeypress=\"0===this.value.length&&32===event.charCode&&event.preventDefault()\" ng-model=$ctrl.model.previousAddress.city aria-describedby=preCityErrMsg aria-invalid=\"{{step3Form.previousCity.$invalid && ($ctrl.submitted || step3Form.previousCity.$touched)}}\" ng-disabled=!$ctrl.isStaffJourney required> </div> <div id=preCityErrMsg ng-class=\"{'has-error': step3Form.previousCity.$invalid}\"> <validation-msg ng-if=\"step3Form.previousCity.$error.required && ($ctrl.submitted || step3Form.previousCity.$touched)\"> Please enter your city to continue with your application. </validation-msg> </div> </div> </div> </div> <div class=row> <div class=\"col-md-4 col-sm-6 col-xs-12\"> <div class=\"form-group line-spacer\"> <label for=previousDistrict>District</label> <div ng-class=\"{'has-error': step3Form.previousDistrict.$invalid && ($ctrl.submitted || step3Form.previousDistrict.$touched)}\"> <input alpha-space=20 trim type=text class=form-control id=previousDistrict name=previousDistrict aria-describedby=preDistErrMsg onkeypress=\"0===this.value.length&&32===event.charCode&&event.preventDefault()\" ng-model=$ctrl.model.previousAddress.district aria-describedby=preDistrictErrMsg aria-invalid=\"{{step3Form.previousDistrict.$invalid && ($ctrl.submitted || step3Form.previousDistrict.$touched)}}\" ng-disabled=\"!$ctrl.isStaffJourney && !$ctrl.preDistEmpty\" required> </div> <div id=preDistrictErrMsg ng-class=\"{'has-error': step3Form.previousDistrict.$invalid}\"> <validation-msg ng-if=\"step3Form.previousDistrict.$error.required && ($ctrl.submitted || step3Form.previousDistrict.$touched)\"> Please enter your district to continue with your application. </validation-msg> </div> </div> </div> <div class=\"col-md-4 col-sm-6 col-xs-12\"> <div class=\"form-group line-spacer\"> <label for=previousState>State</label> <div ng-class=\"{'has-error': step3Form.previousState.$invalid && ($ctrl.submitted || step3Form.previousState.$touched)}\"> <input alpha-space=20 trim type=text class=form-control id=previousState name=previousState aria-describedby=preStateErrMsg onkeypress=\"0===this.value.length&&32===event.charCode&&event.preventDefault()\" ng-model=$ctrl.model.previousAddress.state aria-describedby=preStateErrMsg aria-invalid=\"{{step3Form.previousState.$invalid && ($ctrl.submitted || step3Form.previousState.$touched)}}\" ng-disabled=!$ctrl.isStaffJourney required> </div> <div id=preStateErrMsg ng-class=\"{'has-error': step3Form.previousState.$invalid}\"> <validation-msg ng-if=\"step3Form.previousState.$error.required && ($ctrl.submitted || step3Form.previousState.$touched)\"> Please enter your State to continue with your application. </validation-msg> </div> </div> </div> </div> </div> <div id=declaration class=line-spacer> <p ng-if=\"$ctrl.selectedCard.key =='HPR'\"> I hereby confirm to have read, understood and accept the terms and conditions pertaining to HSBC Credit Card, and also accept the <a target=_blank href=https://www.hsbc.co.in/content/dam/hsbc/in/documents/premier_cc_tariff_mitc.pdf class=new-tab-link aria-label=\"This link will open more information about collecting and using information in a new tab\"> <span class=text>Most Important Terms and Conditions and applicable tariff</span> <span class=\"icon icon-new-window\" aria-hidden=true role=presentation></span> </a> as mentioned in the Application Form. Please treat this as my consent to process my credit card application. </p> <p ng-if=\"$ctrl.selectedCard.key !='HPR'\"> I hereby confirm to have read, understood and accept the terms and conditions pertaining to HSBC Credit Card, and also accept the <a target=_blank href=http://www.hsbc.co.in/1/PA_ES_Content_Mgmt/content/website/pdf/personal/platinum_mostimp_tnc.pdf class=new-tab-link aria-label=\"This link will open more information about collecting and using information in a new tab\"> <span class=text>Most Important Terms and Conditions and applicable tariff</span> <span class=\"icon icon-new-window\" aria-hidden=true role=presentation></span> </a> as mentioned in the Application Form. Please treat this as my consent to process my credit card application. </p> <p>I authorize HSBC,India to validate my Permanent Account Number (PAN) as issued by Income Tax Department. </p> <div class=para> <span ng-if=!$ctrl.showFullTnC>I authorize HSBC to upload/refresh/...</span> <div ng-show=!$ctrl.showFullTnC class=text-right> <span ng-click=\"$ctrl.showFullTnC = true\"> <span class=\"icon icon-chevron-down\" aria-hidden=true></span>Read more <span class=screen-reader-only> about terms and conditions</span> </span> </div> <span ng-show=$ctrl.showFullTnC>I authorize HSBC to upload/refresh/update the demographic and other personal details in the Central KYC Registry in terms of the provisions of the Prevention of Money Laundering Act and Rules notified thereunder from time to time and create a new or update an existing KYC number that has been provided with the application, as per the operating guidelines issued by the CKYC Registrar and the Reserve Bank of India. </span> <div class=text-right ng-show=$ctrl.showFullTnC> <span ng-click=\"$ctrl.showFullTnC = false\"> <span class=\"icon icon-chevron-up\" aria-hidden=true></span>Read less <span class=screen-reader-only> about terms and conditions</span> </span> </div> </div> <div class=para> <span ng-if=!$ctrl.showFullNotice>I authorize HSBC to send and I agree ...</span> <div ng-show=!$ctrl.showFullNotice class=text-right> <span ng-click=\"$ctrl.showFullNotice = true\"> <span class=\"icon icon-chevron-down\" aria-hidden=true></span>Read more <span class=screen-reader-only> about terms and conditions</span> </span> </div> <span ng-show=$ctrl.showFullNotice>I authorize HSBC to send and I agree to receive SMS alerts/E-mails related to my application status and account activity as well as product use messages that HSBC will send, from time to time, on my mobile phone number/E-mail ID as mentioned in this application form. I will intimate HSBC in the event of any change in my mobile phone number/E-mail ID. I agree that in the event I fail to inform the new mobile number/email id, I will not hold HSBC responsible for non-communication of any information regarding my application status and/or account activity. </span> <div class=text-right ng-show=$ctrl.showFullNotice> <span ng-click=\"$ctrl.showFullNotice = false\"> <span class=\"icon icon-chevron-up\" aria-hidden=true></span>Read less <span class=screen-reader-only> about terms and conditions</span> </span> </div> </div> </div> <div id=consents> <h2 class=\"h4 tpa-heading\"> <strong>Sharing of information and Assignment of Activities to Third Party Agencies</strong> </h2> <input type=checkbox id=tpaConsentChk name=tpaConsentChk class=screen-reader-only ng-model=$ctrl.model.consent ng-focus=\"$ctrl.hasTpaConsentChkFocus = true\" ng-blur=\"$ctrl.hasTpaConsentChkFocus = false\"> <label ng-show=!$ctrl.showFullTerm for=tpaConsentChk class=\"checkbox-label tpsa-label\" ng-class=\"{'focus': $ctrl.hasTpaConsentChkFocus}\"> I acknowledge and agree to HSBC ... </label> <div ng-show=!$ctrl.showFullTerm class=text-right> <span ng-click=\"$ctrl.showFullTerm = true\"> <span class=\"icon icon-chevron-down\" aria-hidden=true></span>Read more </span> </div> <input type=checkbox id=tpaConsentChk name=tpaConsentChk class=screen-reader-only ng-model=$ctrl.model.consent ng-focus=\"$ctrl.hasTpaConsentChkFocus = true\" ng-blur=\"$ctrl.hasTpaConsentChkFocus = false\"> <label ng-show=$ctrl.showFullTerm for=tpaConsentChk class=\"checkbox-label tpsa-label\" ng-class=\"{'focus': $ctrl.hasTpaConsentChkFocus}\"> I acknowledge and agree to HSBC assigning any activities to any service provider, whether located in India or overseas and whether an HSBC Group entity or a third party, at its sole discretion, in accordance with the applicable guidelines of the Reserve Bank of India (RBI). I further agree and consent to HSBC providing details of my account and sharing or transfer of information, on a strictly confidential basis, to HSBC Group offices or other third party agencies/service providers, whether located in India or overseas, for the purpose of availing support services of any nature. HSBC may also disclose any information, if required or permitted by any law, rule or regulation or at the request of any public or regulatory authority or if such disclosure is required for the purposes of preventing fraud, without any further specific consent or authorisation from me. I understand and consent to HSBC using or sharing information submitted by me to conduct employment verification and other related checks, through third party agency(ies) engaged by it, from public information sources such as Employees' Provident Fund Organisation (EPFO). </label> <div ng-show=$ctrl.showFullTerm class=text-right> <span ng-click=\"$ctrl.showFullTerm = false\"> <span class=\"icon icon-chevron-up\" aria-hidden=true></span>Read less </span> </div> </div> <div id=consents1 ng-if=\"$ctrl.selectedCard.key =='SVC'\"> <h2 class=\"h4 tpa-heading1\"> <strong>Sharing of personal information with co-brand partner/s</strong> </h2> <input type=checkbox id=tpaConsentChk1 name=tpaConsentChk1 class=screen-reader-only ng-model=$ctrl.model.consent1 ng-focus=\"$ctrl.hasTpaConsentChkFocus1 = true\" ng-blur=\"$ctrl.hasTpaConsentChkFocus1 = false\" required> <label ng-show=!$ctrl.showFullTerm1 for=tpaConsentChk1 class=\"checkbox-label tpsa-label1\" ng-class=\"{'focus': $ctrl.hasTpaConsentChkFocus1}\"> By clicking/ticking the check box ... </label> <div ng-show=!$ctrl.showFullTerm1 class=text-right> <span ng-click=\"$ctrl.showFullTerm1 = true\"> <span class=\"icon icon-chevron-down\" aria-hidden=true></span>Read more </span> </div> <input type=checkbox id=tpaConsentChk1 name=tpaConsentChk1 class=screen-reader-only ng-model=$ctrl.model.consent1 ng-focus=\"$ctrl.hasTpaConsentChkFocus1 = true\" ng-blur=\"$ctrl.hasTpaConsentChkFocus1 = false\" required> <label ng-show=$ctrl.showFullTerm1 for=tpaConsentChk1 class=\"checkbox-label tpsa-label1\" ng-class=\"{'focus': $ctrl.hasTpaConsentChkFocus1}\"> By clicking/ticking the check box, I hereby declare, confirm and provide my consent to HSBC (“Bank”) who has/ may have entered into arrangements with certain co-branded partners/entities from time to time (“Co-branded Entities”) for issuing Co-branded Credit Cards (“Co-branded Credit Card”). For the purpose herein, I provide my express consent for collecting, disclosing, sharing, displaying and transferring my personal information for my credit card application to co-branded partners/entities. </label> <div ng-show=$ctrl.showFullTerm1 class=text-right> <span ng-click=\"$ctrl.showFullTerm1 = false\"> <span class=\"icon icon-chevron-up\" aria-hidden=true></span>Read less </span> </div> <div id=tpaConsentChk1ErrMsg ng-class=\"{'has-error': step3Form.tpaConsentChk1.$invalid && (step3Form.tpaConsentChk1.$touched || $ctrl.submitted)}\"> <validation-msg ng-if=\"step3Form.tpaConsentChk1.$error.required && (step3Form.tpaConsentChk1.$touched || $ctrl.submitted)\"> Please check above checkbox if you want to proceed. </validation-msg> </div> </div> </div> <step-footer ng-if=!$ctrl.panVerified show-verify=true verify-callback=$ctrl.verifyPAN(step3Form.PANForm)> </step-footer> <step-footer ng-if=\"$ctrl.ekyc=='Yes' && $ctrl.panVerified && $ctrl.model.aadhaarMode=='SMS OTP'\" show-aadhaar-otp=!$ctrl.otpSent aadhaar-otp-callback=$ctrl.requestAadhaarOTP(step3Form) show-submit-otp=\"$ctrl.otpSent && !$ctrl.showForm\" submit-otp-callback=$ctrl.submitOTP(step3Form) show-save=\"$ctrl.panVerified && $ctrl.showForm\" save-callback=$ctrl.save() show-continue=$ctrl.showForm continue-callback=$ctrl.next(step3Form.$valid) continue-overlay=!$ctrl.model.consent> </step-footer> <step-footer ng-if=\"$ctrl.ekyc=='Yes' && $ctrl.panVerified && $ctrl.model.aadhaarMode=='Biometric'\" show-biometric=!$ctrl.showForm biometric-callback=$ctrl.capture(step3Form) show-save=\"$ctrl.panVerified && $ctrl.showForm\" save-callback=$ctrl.save() show-continue=$ctrl.showForm continue-callback=$ctrl.next(step3Form.$valid) continue-overlay=!$ctrl.model.consent> </step-footer> <step-footer ng-if=\"($ctrl.panVerified && $ctrl.ekyc != 'Yes')\" show-save=true save-callback=$ctrl.save() show-continue=true continue-callback=$ctrl.next(step3Form.$valid) continue-overlay=!$ctrl.model.consent> </step-footer> </form>";

/***/ }),

/***/ "./src/app/components/journey/step3/step3.component.js":
/* unknown exports provided */
/* all exports used */
/*!*************************************************************!*\
  !*** ./src/app/components/journey/step3/step3.component.js ***!
  \*************************************************************/
/***/ (function(module, exports, __webpack_require__) {

(function () {
    'use strict';
    var angular = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
    __webpack_require__(/*! ./step3.component.service */ "./src/app/components/journey/step3/step3.component.service.js");
    //require('./step3.modal/overlayConfirmation.modal.component.js');
    __webpack_require__(/*! ./thirdPartyModal/thirdPartyModal.modal.component.js */ "./src/app/components/journey/step3/thirdPartyModal/thirdPartyModal.modal.component.js");
    __webpack_require__(/*! ./existing-customer-modal/existing-customer.modal.component.js */ "./src/app/components/journey/step3/existing-customer-modal/existing-customer.modal.component.js");
    __webpack_require__(/*! ./step3.component.scss */ "./src/app/components/journey/step3/step3.component.scss");
    __webpack_require__(/*! ./aadhar-pan-link-modal/aadhar-pan-link-modal.component.js */ "./src/app/components/journey/step3/aadhar-pan-link-modal/aadhar-pan-link-modal.component.js");
    __webpack_require__(/*! ./skip-ekyc-modal/skip-ekyc.modal.component.js */ "./src/app/components/journey/step3/skip-ekyc-modal/skip-ekyc.modal.component.js");

    function step3Controller($rootScope, $scope, $state, $uibModal, $filter, $q, $location, $anchorScroll, $timeout, step3Service, journeyService, analyticService, UtilService, appState, $window) {
        var vm = this;
        var n = 1;
        let sendOtpCounter = 1;
        let dobMismatchCounter = 1;
        var securityParams = {
            robocheck: vm.robocheck ? vm.robocheck : ''
        };

        vm.$onInit = function () {
            $rootScope.showSelectedCard = true;
            $rootScope.stepsHeader.currentStep = 1;
            vm.isStaffJourney = journeyService.isStaffJourney();
            vm.selectedCard = journeyService.getSelectedCard();
            // console.log("this journey is staff==", vm.isStaffJourney);
            //alert(journeyService.getDataFromStorageContact().adobeId);
            // vm.internal_reference_id=journeyService.getDataFromStorageContact().adobeId;
            //alert("hi");
            var contactData = appState.getContactDetails();
            //console.log("contactData", contactData.relationWithBank);
            vm.validateStaffflag = contactData.relationWithBank == "Existing to Bank";
            //console.log("vm.validateStaffflag", vm.validateStaffflag);
            // console.log("Data from Contact Details page ======= ", JSON.stringify(contactData));
            vm.validateStaffData = appState.getValidateStaffDetails();
            //console.log(vm.validateStaffData);
            // alert("by");
            //alert("hi"+ contactData.cardType +" ");
            //vm.cardTypeAE=contactData.cardType;
            if (!vm.isStaffJourney) {
                vm.cardTypeAE = "Primary Card";
            } else {
                vm.cardTypeAE = contactData.cardType;
            }
            vm.nationalityCount = 1;
            vm.typeInput = 'tel';
            vm.maritalStatusList = ['Single', 'Married', 'Widowed', 'Divorced/Separated', 'Living Together', 'Others'];
            vm.salutations = ['Mr.', 'Mrs.', 'Ms.', 'Dr.', 'Miss'];
            vm.residentialStatusList = ['Resident'/*, 'Non Resident', 'Foreign National', 'Person of Indian Origin'*/];
            vm.lengthOfStayYears = step3Service.lengthOfStayYears;
            vm.lengthOfStayMonths = step3Service.lengthOfStayMonths;
            vm.addressOptions = ['Current', 'Permanent', 'Current and permanent'];
            vm.addressTypes = ['Business', 'Registered office', 'Residential', 'Residential cum business'];
            vm.relationWithPrimary = ['BROTHER', 'SISTER', 'CHILDREN', 'PARENT', 'SPOUSE'];
            vm.ekyc = contactData.ekyc;
            //vm.cardType=['SVC','CBC','VPC'];
            journeyService.getCountries().then(function (result) {
                vm.countries = result;
                initializeControls();
            });
            vm.consentText;
            if (vm.ekyc == 'Yes') {
                vm.noOfFingures = ['1', '2'];
                step3Service.getConsentText().then(function (result) {
                    vm.consentText = result;
                });
            }
            $anchorScroll();
            //alert('journeyService.getDataFromStorageContact().adobeId=='+journeyService.getDataFromStorageContact().adobeId);
            analyticService.pageList.personalDetails.internal_reference_id = journeyService.getDataFromStorageContact().adobeId;
            analyticService.trackPageLoad(analyticService.pageList.personalDetails);
        };

        var initializeControls = function () {
            vm.panVerified = step3Service.isPanVerified();
            vm.model = step3Service.getModelData();
            // console.log("model data==", vm.model);
            vm.model.demographicDetails.residentialStatus = vm.model.demographicDetails.residentialStatus ? vm.model.demographicDetails.residentialStatus : vm.residentialStatusList[0];
            vm.model.demographicDetails.nationality = vm.model.demographicDetails.nationality ? $filter('filter')(vm.countries, {
                "countryName": vm.model.demographicDetails.nationality
            })[0] : vm.countries[0];
            vm.model.demographicDetails.nationality2 = vm.model.demographicDetails.nationality2 ? $filter('filter')(vm.countries, {
                "countryName": vm.model.demographicDetails.nationality2
            })[0] : null;
            vm.model.demographicDetails.nationality3 = vm.model.demographicDetails.nationality3 ? $filter('filter')(vm.countries, {
                "countryName": vm.model.demographicDetails.nationality3
            })[0] : null;
            if (vm.model.demographicDetails.isMultipleNationality === 'Y') {
                if (vm.model.demographicDetails.nationality2) {
                    vm.nationalityCount = 2;
                }
                if (vm.model.demographicDetails.nationality3) {
                    vm.nationalityCount = 3;
                }
            }

            // vm.model.residentialAddress.address1 = vm.model.residentialAddress.address1 || null;
            // vm.model.residentialAddress.address2 = vm.model.residentialAddress.address2 || null;
            // vm.model.residentialAddress.address3 = vm.model.residentialAddress.address3 || null;
            // vm.model.residentialAddress.pinCode = vm.model.residentialAddress.pinCode || null;
            // vm.model.residentialAddress.city = vm.model.residentialAddress.city || null;
            // vm.model.residentialAddress.district = vm.model.residentialAddress.district || null;
            // vm.model.residentialAddress.state = vm.model.residentialAddress.state || null;
            vm.model.residentialAddress.country = vm.model.residentialAddress.country ? $filter('filter')(vm.countries, {
                "countryName": vm.model.residentialAddress.country
            })[0] : vm.countries[0];
            vm.model.currentAddress.country = vm.model.currentAddress.country ? $filter('filter')(vm.countries, {
                "countryName": vm.model.currentAddress.country
            })[0] : vm.countries[0];
            vm.model.previousAddress.country = vm.model.previousAddress.country ? $filter('filter')(vm.countries, {
                "countryName": vm.model.previousAddress.country
            })[0] : vm.countries[0];

            if (vm.model.aadharSeedingFlag && vm.model.aadharSeedingFlag === "R" || vm.model.aadharSeedingFlag === "N") {
                if (vm.isStaffJourney) {
                    alert("Pan Aadhar Linking for the customer is not done");
                }
                else {
                    alert("Your PAN and Aadhar are not linked as per the records");
                }
                $state.go('app.journey.s1-cards');
            }


        };

        vm.addNationality = function () {
            vm.model.demographicDetails.isMultipleNationality = 'Y';
            vm.nationalityCount++;
            $timeout(function () {
                if (vm.count > 0) {
                    var controlName = vm.count === 1 ? "nationality2" : "nationality3";
                    var elems = angular.element(document.querySelector('[name="' + controlName + '"]'));
                    if (elems) {
                        var uiSelect = angular.element(elems).controller('uiSelect');
                        // focus the focusser, putting focus onto select but without opening the dropdown
                        uiSelect.focusser[0].focus();
                        // uiSelect.open = false;
                    }
                }
            }, 100);
            vm.submitted = false;
        };

        vm.removeNationality = function () {
            vm.nationalityCount--;
            if (vm.nationalityCount == 2) {
                vm.model.demographicDetails.nationality3 = null;
            } else if (vm.nationalityCount == 1) {
                vm.model.demographicDetails.nationality2 = null;
                vm.model.demographicDetails.isMultipleNationality = 'N';
            }
        };

        vm.validateDOB = function (format) {
            if (format) {
                if (parseInt(vm.model.date) > 0 && parseInt(vm.model.date) < 10) {
                    vm.model.date = '0' + parseInt(vm.model.date);
                } else if (parseInt(vm.model.date) >= 10) {
                    // e.g: 011, 012,....,031 etc.
                    vm.model.date = parseInt(vm.model.date).toString();
                } else {
                    vm.model.date = null;
                }

                if (parseInt(vm.model.month) > 0 && parseInt(vm.model.month) < 10) {
                    vm.model.month = '0' + parseInt(vm.model.month);
                } else if (parseInt(vm.model.month) >= 10 && parseInt(vm.model.month) <= 12) {
                    // e.g: 011, 012
                    vm.model.month = parseInt(vm.model.month).toString();
                } else {
                    vm.model.month = null;
                }
            }

            $scope.step3Form.date.$setValidity('minAge', true);
            $scope.step3Form.month.$setValidity('minAge', true);
            $scope.step3Form.year.$setValidity('minAge', true);

            $scope.step3Form.date.$setValidity('maxAge', true);
            $scope.step3Form.month.$setValidity('maxAge', true);
            $scope.step3Form.year.$setValidity('maxAge', true);

            $scope.step3Form.year.$setValidity('invalidYear', true);

            $scope.step3Form.date.$setValidity('invalidDate', true);

            if (vm.model.year && vm.model.year < 1900) {
                $scope.step3Form.year.$setValidity('invalidYear', false);
                return;
            }

            if (vm.model.date && vm.model.month && vm.model.year) {
                if (!step3Service.validateDate(vm.model.year, vm.model.month, vm.model.date)) {
                    $scope.step3Form.date.$setValidity('invalidDate', false);
                    return;
                }
                var age = calculateAge();
                if (age < 18) {
                    $scope.step3Form.date.$setValidity('minAge', false);
                    $scope.step3Form.month.$setValidity('minAge', false);
                    $scope.step3Form.year.$setValidity('minAge', false);
                }
                if (age > 65) {
                    $scope.step3Form.date.$setValidity('maxAge', false);
                    $scope.step3Form.month.$setValidity('maxAge', false);
                    $scope.step3Form.year.$setValidity('maxAge', false);
                }
            }
        };

        var calculateAge = function () {
            var today = new Date();
            var birthDate = new Date(vm.model.year, vm.model.month - 1, vm.model.date);
            var age = today.getFullYear() - birthDate.getFullYear();
            var m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            return age;
        };

        var validateLengthOfStay = function () {
            //Year
            $scope.step3Form.lengthOfStayYear.$setValidity("stayGreaterThanAge", true);
            //Month
            $scope.step3Form.lengthOfStayMonth.$setValidity("stayGreaterThanAge", true);

            var year = vm.model.lengthOfStayYear,
                month = vm.model.lengthOfStayMonth;
            var stayTime = year + (month / 12);
            var age = calculateAge();
            if (stayTime >= age) {
                // vm.model.stayTime = false;
                $scope.step3Form.lengthOfStayYear.$setValidity("stayGreaterThanAge", false);
                $scope.step3Form.lengthOfStayMonth.$setValidity("stayGreaterThanAge", false);
                return false;
            }
            return true;
        };

        var isAgeValid = function (birthDateString) {
            var today = new Date();
            var birthDate = new Date(birthDateString);
            var age = today.getFullYear() - birthDate.getFullYear();
            var m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            return (age >= 21 ? true : false);
        };

        vm.lenOfStayChanged = function () {
            vm.submitted = false;
            //Year
            $scope.step3Form.lengthOfStayYear.$setValidity("stayGreaterThanAge", true);
            //Month
            $scope.step3Form.lengthOfStayMonth.$setValidity("stayGreaterThanAge", true);
        };

        vm.addressOptionChanged = function () {
            vm.submitted = false;
        };

        vm.homeNumberChange = function () {
            $scope.step3Form.stdCode.$setValidity('minlength', true);
            $scope.step3Form.stdCode.$setValidity('maxlength', true);
            $scope.step3Form.currentMobileNo.$setValidity('minlength', true);
            $scope.step3Form.currentMobileNo.$setValidity('maxlength', true);
            var stdCode = UtilService.isEmpty(vm.model.stdCode) ? '' : vm.model.stdCode;
            var homeNumber = UtilService.isEmpty(vm.model.homeNumber) ? '' : vm.model.homeNumber;
            if ((stdCode.length + homeNumber.length) < 10 && (stdCode.length + homeNumber.length) !== 0) {
                //$scope.step3Form.stdCode.$setValidity('minlength', false);
                $scope.step3Form.currentMobileNo.$setValidity('minlength', false);
            } else if ((stdCode.length + homeNumber.length) > 15) {
                $scope.step3Form.stdCode.$setValidity('maxlength', false);
                $scope.step3Form.currentMobileNo.$setValidity('maxlength', false);
            }
        };

        vm.getAddressByPinCode = function (event, addressObj, pinCodeElement, emptyDistrict) {
            var key = event.keyCode || event.which;
            var pinCode = addressObj.pinCode;
            pinCodeElement.$setValidity('invalid', true);
            if (event.target.value.length === 6) {
                if (key === 13 || event.target.value.length === 6) {
                    step3Service.getAddressByPostalCode(pinCode, '.masked-container').then(function (data) {
                        addressObj.district = data.district;
                        addressObj.state = data.state;
                        addressObj.city = data.city;
                        vm[emptyDistrict] = UtilService.isEmpty(data.district);
                        if (!vm.isStaffJourney) { //added too bypass ;ncode for staff
                            if (UtilService.isEmpty(data) || UtilService.isEmpty(data.state) || UtilService.isEmpty(data.city)) {
                                pinCodeElement.$setValidity('invalid', false);  //COMMENTED to openup pincode
                            }
                        }
                    });
                }
            } else {
                addressObj.district = null;
                addressObj.state = null;
                addressObj.city = null;
            }
        };

        vm.previousAddressSelected = function (step3Form) {
            if (step3Form.previousFlatNumber) {
                step3Form.previousFlatNumber.$dirty = false;
                step3Form.previousFlatNumber.$pristine = true;
                step3Form.previousFlatNumber.$touched = false;
                step3Form.previousFlatNumber.$untouched = true;
            }
            if (step3Form.previousRoadNumber) {
                step3Form.previousRoadNumber.$dirty = false;
                step3Form.previousRoadNumber.$pristine = true;
                step3Form.previousRoadNumber.$touched = false;
                step3Form.previousRoadNumber.$untouched = true;
            }
            if (step3Form.previousArea) {
                step3Form.previousArea.$dirty = false;
                step3Form.previousArea.$pristine = true;
                step3Form.previousArea.$touched = false;
                step3Form.previousArea.$untouched = true;
            }
            if (step3Form.previousFlatNumber) {
                step3Form.previousPinCode.$dirty = false;
                step3Form.previousPinCode.$pristine = true;
                step3Form.previousPinCode.$touched = false;
                step3Form.previousPinCode.$untouched = true;
            }
            if (step3Form.previousCity) {
                step3Form.previousCity.$dirty = false;
                step3Form.previousCity.$pristine = true;
                step3Form.previousCity.$touched = false;
                step3Form.previousCity.$untouched = true;
            }
            if (step3Form.previousDistrict) {
                if (vm.model.previousAddress.country.countryName == 'India') {
                    step3Form.previousDistrict.$dirty = false;
                    step3Form.previousDistrict.$pristine = true;
                    step3Form.previousDistrict.$touched = false;
                    step3Form.previousDistrict.$untouched = true;
                }
            }
            if (step3Form.previousState) {
                step3Form.previousState.$dirty = false;
                step3Form.previousState.$pristine = true;
                step3Form.previousState.$touched = false;
                step3Form.previousState.$untouched = true;
            }
            vm.model.previousAddress.address1 = null;
            vm.model.previousAddress.address2 = null;
            vm.model.previousAddress.address3 = null;
            vm.model.previousAddress.pinCode = null;
            vm.model.previousAddress.city = null;
            vm.model.previousAddress.district = null;
            vm.model.previousAddress.state = null;
        };

        //NSDLUPDATE-start
        vm.calculateAge = function (contactForm) {
            // console.log("contactForm==", contactForm);
            vm.pvcAlert = false;
            vm.minAgeErrorMsg = false;
            vm.maxAgeErrorMsg = false;
            var today = new Date();
            // console.log("today==", today);
            var birthDate = new Date(vm.model.dateOfBirth);
            // console.log("birthDate==", birthDate);
            var age = today.getFullYear() - birthDate.getFullYear();
            var m = today.getMonth() - birthDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            //  isNaN(age) ? vm.submitted = true : vm.submitted = false;
            //console.log("age==", age);
            if (age < 18) {
                //console.log("age < 18==", age);
                vm.minAgeErrorMsg = true;
                contactForm.dateOfBirth.$invalid = true;
                //   $scope.contactForm.dateOfBirth.$setValidity('minAge', true);
            }
            if (age > 65 && vm.selectedCard.key != 'HPR') {
                //console.log("age > 65==", age);
                vm.maxAgeErrorMsg = true;
                contactForm.dateOfBirth.$invalid = true;
                //  $scope.contactForm.dateOfBirth.$setValidity('maxAge', true);
            }
            if (age > 65 && vm.selectedCard.key == 'HPR') {
                //console.log("age==HPR", age);
                vm.pvcAlert = true;
                contactForm.dateOfBirth.$invalid = false;
                // $scope.contactForm.dateOfBirth.$setValidity('maxAge', false);
            }
            // return age;
        };
        //NSDLUPDATE-end
        $scope.handleFocus = function () {
            // console.log('Input field focused');
            vm.errMsg = "";

            vm.maxAgeErrorMsg = false;
            vm.minAgeErrorMsg = false;
            vm.pvcAlert = false;
            // You can perform any action here when the input field gets focus
        };
        vm.verifyPAN = function (isFormValid) {
            vm.errMsg = "";
            if(dobMismatchCounter > 2){
                vm.errMsg = "Sorry!! Maximum number of PAN Verify reached. You cannot proceed with your application.";
                 console.log("dobMismatchCounter  counter  ==", dobMismatchCounter);
                 $timeout(function(){
                    window.location.href = "http://www.hsbc.co.in/"
                 } ,1000);
                 return;
            }
            // vm.panSubmitted = true;
            if (isFormValid.$valid && !isFormValid.dateOfBirth.$invalid) {
                
                // console.log("dobMismatchCounter  counter  on click==", dobMismatchCounter);
                // console.log("DOB by Doc==", document.getElementById("dateOfBirth").value);
                //console.log("vm.validateStaffData", vm.validateStaffData);
                var PAN = UtilService.encodeData2(vm.model.pan);
                // console.log("Encrypted PAN:" + PAN);
                var reqData = {
                    "pan": PAN,
                    dateOfBirth: document.getElementById("dateOfBirth").value,
                };
                // console.log("reqData before", reqData);

                (vm.isStaffJourney && vm.validateStaffflag) ? (reqData.hubsPanNo = UtilService.encodeData2(vm.validateStaffData.hubsPanNo), reqData.hubsDob = vm.validateStaffData.hubsDob) : '';


                // console.log("reqData after", reqData);
                //console.log("req data sending from frontend:" + JSON.stringify(reqData));
                step3Service.validatePAN(reqData, securityParams).then(function (result) {
                    //console.log("counter ==", dobMismatchCounter , "  NSDL RESPONSE FROMBACKEND--> ", JSON.stringify(result));
                    if (result.success) {

                        // vm.panVerified = true;
                        //initializeControls();

                        // console.log("result.aadharSeedingFlag===="+result.aadharSeedingFlag);
                        if (result.aadharSeedingFlag && result.aadharSeedingFlag === "R" || result.aadharSeedingFlag === "N") {
                            var aadharPanLinkModalInstance = $uibModal.open({
                                component: 'aadharPanLinkModal'
                            });
                            aadharPanLinkModalInstance.result.then(function (isSelected) {
                                if (isSelected) {
                                    $state.go('app.journey.s1-cards');
                                }
                            }, function () { });
                        } else {

                            initializeControls();
                        }
                    } else {
                        if (result.errorCode === 1002) {
                            vm.errMsg = "Sorry! Your PAN details seem to be incorrect. Please try again.";
                        } else if (result.errorCode === 2 || result.errorCode === 1007 || result.errorCode === 1022 || result.errorCode === 5007) {
                            //    2: Failure i.e. Some technical issue
                            // 1007: C11/C35 hit i.e. Already a prestige customer
                            // 1022: PAN retry count exceeded
                            // 5007: C11/C35 Timeout i.e. Connectivity issue
                            $state.go("app.journey.lead-generation", {
                                leadData: {
                                    statusCode: result.errorCode,
                                    leadReason: result.leadGenerationReason
                                }
                                , cardKey: vm.selectedCard.key
                            })
                        } else if (result.errorCode === 1011) {
                            // Already a existing customer, initiated by customer
                            var existingCustomerModalInstance = $uibModal.open({
                                component: 'existingCustomerModal'
                            });
                            existingCustomerModalInstance.result.then(function (isSelected) {
                                if (isSelected) {
                                    $state.go('app.app-retrieval');
                                }
                            }, function () { });
                            // $state.go("app.app-retrieval");
                        } else if (result.errorCode === 1021) {
                            // Already a existing customer, initiated by staff
                            var existingCustomerModalInstance = $uibModal.open({
                                component: 'existingCustomerModal'
                            });
                            existingCustomerModalInstance.result.then(function (isSelected) {
                                if (isSelected) {
                                    $state.go('app.app-retrieval-staff');
                                }
                            }, function () { });
                            // $state.go("app.app-retrieval-staff");
                        } else if (result.errorCode === 1012 || result.errorCode === 1019 || result.errorCode === 1020) {
                            // Already a submitted application in past 30 days                            
                            $state.go('app.submitted-application', { 'cardKey': vm.selectedCard.key });
                        } else if (result.errorCode === 10006) {
                            //arun else if condition
                            // vm.errMsg = "Sorry! there seems to be some technical error. Please try again";
                            $state.go('app.journey.s1-cards');
                        } else if (result.errorCode === 1014) {
                            if (vm.isStaffJourney) {
                                // alert("There seems to be some error in validating pan through NSDL,please try again.");
                                initializeControls();
                            }
                            else {
                                vm.errMsg = "Sorry there seems to be some technical error";
                            }
                        }else if(result.errorCode === 100004){
                            //console.log("Date of Birth mismatch ==>", result.hasDobMismatch);
                            dobMismatchCounter = dobMismatchCounter+ 1;
                            if(dobMismatchCounter >2) {
                                vm.errMsg = "Sorry!! Entered Date of Birth is not matching with the PAN Date of Birth.You cannot proceed with your application.";
                            }else{
                                vm.errMsg = "Entered Date of Birth is not matching with the PAN Date of Birth. Please retry with correct Date of Birth.";
                            }
                        }else if (result.errorCode === 100006 || result.errorCode === 100007 || result.errorCode === 100008) {
                            vm.errMsg = result.errorMessage;
                            $timeout(function () {
                                vm.errMsg = false;
                            }, 20000);
                            window.scrollTo(0, 0);
                        }
                        else {
                            // 1111: Network error
                            // vm.errMsg = "Sorry there seems to be some technical error";
                            // vm.errMsg = "There seems to be some error in validating pan through NSDL,please try again.";
                            if (vm.isStaffJourney) {
                                alert("There seems to be some error in validating pan through NSDL,please try again.");
                                initializeControls();
                            }
                            else {
                                vm.errMsg = "Sorry there seems to be some technical error";
                            }
                        }
                        analyticService.buttonList.error.event_content = result.leadGenerationReason;
                        analyticService.trackUserAction(analyticService.buttonList.error);
                    }
                });
                analyticService.buttonList.buttonClick.event_content = "verify PAN";
                analyticService.trackUserAction(analyticService.buttonList.buttonClick);
            } else {
                //console.log("else");
                vm.panSubmitted = true;
                vm.panVerified = false;
                UtilService.focusOnInvalid("step3Form");
            }
        };

        vm.requestAadhaarOTP = function (step3Form) {
            vm.errMsg = "";
            vm.showOtpSent = false;
            vm.aadhaarSubmitted = true;
            vm.typeInput = "password";
            vm.aadhaarConsentCheck = vm.model.aadhaarConsent ? 'Y' : 'N';
            if (step3Form.aadhaar.$valid && step3Form.aadhaarConsent.$valid) {
                var securityParams = {
                    robocheck: vm.robocheck ? vm.robocheck : ''
                };
                var aadhaarNumber = UtilService.encodeData2(vm.model.aadhaar);
                // console.log("Encrypted aadhaar:" + aadhaarNumber);
                var reqData = {
                    aadhaar: aadhaarNumber,
                    mode: vm.model.aadhaarMode,
                    aadhaarConsentFlag: vm.model.aadhaarConsent ? 'Y' : 'N'
                };
                //console.log("Requested OTP with following reqData === ", JSON.stringify(reqData));
                // let n = 1;
                //console.log("attempt number==",n);
               // console.log("resend OTP  is ==", sendOtpCounter);
                if (sendOtpCounter >= 3 && vm.otpSent) {
                    vm.otpIssue = true;
                    journeyService.setOtpIssue(vm.otpIssue);
                  //  console.log("resend OTP  is before ==", sendOtpCounter);
                    openSkipModal();
                    return;
                }
                step3Service.requestAadhaarOTP(reqData, securityParams).then(function (result) {
                    sendOtpCounter = sendOtpCounter + 1;
                  //  console.log("resend OTP  is after==", sendOtpCounter);
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
                        vm.errMsg = "Sorry!! It seems there is some issue with Aadhaar Portal. Please retry.";
                        n = n + 1;
                      //  console.log("attempt number increased so this is==" + n + " attempt");
                        if (n >= 4) {
                            vm.otpIssue = false;
                            journeyService.setOtpIssue(vm.otpIssue);
                          //  console.log("attempt is ==", n);
                            openSkipModal();
                        }
                    } else {
                        vm.errMsg = "Sorry!! It seems there is some issue with Aadhaar Portal. Please retry.";
                    }
                });
            } else {
                vm.submitted = true;
                UtilService.focusOnInvalid('step3Form');
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

        vm.submitOTP = function (step3Form) {
            vm.errMsg = "";
            vm.showOtpSent = false;
            vm.disabledDob = false;
            vm.panAadhaarDobMatchError = false;
            vm.submitted = false;
            // var trailingCharsIntactCount = 4;
            if (step3Form.otp.$valid) {
                // vm.maths = vm.model.aadhaar;
                // console.log("Aadhaar value =======", vm.maths);
                // vm.maths = new Array(vm.maths.length - trailingCharsIntactCount + 1).join('x') + vm.maths.slice( -trailingCharsIntactCount);
                // console.log("Trimmed value of aadhaar ==== ", vm.maths);
                // vm.model.aadhaar = vm.maths;
                var securityParams = {
                    robocheck: vm.robocheck ? vm.robocheck : ''
                };
                var aadhaarNumber = UtilService.encodeData2(vm.model.aadhaar);
                //console.log("Encrypted aadhaar:"+aadhaarNumber);
                var reqData = {
                    otp: vm.model.otp,
                    aadhaar: aadhaarNumber,
                    txn: vm.txn,
                    mode: vm.model.aadhaarMode
                }
                // console.log("Submit OTP reqData ======= ", JSON.stringify(reqData));
                // console.log("Submit OTP attempt number==", n);

                step3Service.submitOTP(reqData, securityParams).then(function (result) {
                    if (result.success) {
                        if(result.panAadhaarDobMatch ==="N" ){
                            vm.showForm = false;
                            // vm.model.aadhaarName = UtilService.decodeData2(result["aadhaarName"]);
                            // vm.pAnamemismatch = true;
                            vm.panAadhaarDobMatchError = true;
                            $state.go('app.card-declined',{'cardKey':vm.selectedCard.key});

                        }else{
                        vm.showForm = true;
                        vm.model.gender = UtilService.decodeData2(result["gender"]);
                        vm.model.aadhaarName = UtilService.decodeData2(result["aadhaarName"]);
                        //DOB (YYYY-MM-DD)
                        var dateOfBirth = UtilService.decodeData2(result["dateOfBirth"]);
                        
                        // console.log("lenbackend DOBgth==", dateOfBirth);
                        // console.log("length==", dateOfBirth.length);
                        var dob = new Date(dateOfBirth);
                        var dd = String(dob.getDate()).padStart(2, '0');
                        var mm = String(dob.getMonth() + 1).padStart(2, '0');
                        var yyyy = dob.getFullYear();
                        if(dateOfBirth.length >= 5 ){
                            // console.log("length==full", dateOfBirth.length);                            
                            vm.model.date = dd;
                            vm.model.month = mm;
                            vm.model.year = yyyy;
                            vm.disabledDob = true;

                        }else{
                            // console.log("length==year", dateOfBirth.length);
                            // vm.model.date = "";
                            // vm.model.month = "";
                            // vm.model.year = yyyy;
                            vm.disabledDob = false;

                        }
                        // vm.model.mobile = result["mobile"];
                        // vm.model.email = result["email"];
                        vm.model.residentialAddress.address1 = UtilService.decodeData2(result["house"]);
                        vm.model.residentialAddress.address2 = UtilService.decodeData2(result["street"]);
                        vm.model.residentialAddress.address3 = UtilService.decodeData2(result["landmark"]);
                        vm.location = UtilService.decodeData2(result["location"]);
                        vm.model.residentialAddress.pinCode = UtilService.decodeData2(result["pincode"]);
                        vm.postalOffice = UtilService.decodeData2(result["postalOffice"]);
                        vm.model.residentialAddress.city = UtilService.decodeData2(result["village"]);
                        vm.model.residentialAddress.district = UtilService.decodeData2(result["district"]);
                        vm.subDistrict = UtilService.decodeData2(result["subDistrict"]);
                        vm.model.residentialAddress.state = UtilService.decodeData2(result["state"]);
                        vm.photo = result["photo"];
                        vm.co = UtilService.decodeData2(result["co"]);
                        vm.aadhaarReferenceKey = UtilService.decodeData2(result["aadhaarReferenceKey"]);
                        vm.enrollmentDate = UtilService.decodeData2(result["enrollmentDate"]);
                        vm.redactedAadhaar = UtilService.decodeData2(result["redactedAadhaar"]);
                        journeyService.setRedactedAadhaar(vm.redactedAadhaar);
                        vm.uidToken = UtilService.decodeData2(result["uidToken"]);
                        }
                        //}

                    } else if (result.responseCode) {
                        // vm.errMsg="We have received some error from Aadhaar Portal Please retry.";
                        if (result.responseCode == 'K1') {
                            vm.errMsg = "Invalid OTP, Please retry.";
                            window.scrollTo(0, 0);
                        } else {
                            vm.errMsg = "Sorry!! It seems there is some issue with Aadhaar Portal. Please retry.";
                            window.scrollTo(0, 0);
                        }
                        n = n + 1;
                        // console.log("attempt number increased so this is==" + n + " attempt");
                        if (n >= 4 && result.responseCode != 'K1') {
                            // console.log("Submit OTP attempt is for tech ==", n);
                            vm.otpIssue = false;
                            journeyService.setOtpIssue(vm.otpIssue);
                            openSkipModal();
                        } else if (n >= 4 && result.responseCode == 'K1') {
                            vm.otpIssue = true;
                            journeyService.setOtpIssue(vm.otpIssue);
                            // console.log("Submit OTP is invalid for 3 times ==", n);
                            openSkipModal();
                        }
                    } else {
                        vm.errMsg = "Sorry!! It seems there is some issue with Aadhaar Portal. Please retry.";
                        window.scrollTo(0, 0);

                    }
                });
            } else {
                vm.submitted = true;
                UtilService.focusOnInvalid('step3Form');
            }
        }

        var responsePID;
        vm.capture = function (step3Form) {
            //@AD - 05/11/2022 - check if device is mobile/desktop
            vm.errMsg = "";
            vm.showBio = false;
            const ua = navigator.userAgent;
            var device = "desktop";

            if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
                device = "tablet";
            } else if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
                device = "mobile";
            } else device = "desktop";



            if (vm.model.noOfFingures == 1) {
                //alert("number of Fingers=="+vm.model.noOfFingures)
                var params = '<PidOptions ver="1.0"> <Opts fCount="1" fType="2" format="0" pidVer="2.0" timeout="20000" env="P"  posh="LEFT_INDEX" wadh="E0jzJ/P8UopUHAieZn8CKqS4WPMi5ZSYXgfnlfkWjrc=" />';
                params += '</PidOptions>';
            } else {
                //alert("number of Fingers2=="+vm.model.noOfFingures)
                var params = '<PidOptions ver="1.0"> <Opts fCount="2" fType="2" format="0" pidVer="2.0" timeout="20000" env="P"  posh="LEFT_INDEX,UNKNOWN" wadh="E0jzJ/P8UopUHAieZn8CKqS4WPMi5ZSYXgfnlfkWjrc=" />';
                params += '</PidOptions>';
            }
            // var params = '<PidOptions ver="1.0"> <Opts fCount="1" fType="2" format="0" pidVer="2.0" timeout="20000" env="P" posh="LEFT_INDEX" wadh="E0jzJ/P8UopUHAieZn8CKqS4WPMi5ZSYXgfnlfkWjrc="/>';
            // params += '</PidOptions>';

            //@AD - 05/13/2022 - Desktop capture
            if (device == "desktop") {
                var uri = "http://localhost:11100/rd/capture";
                var xmlhttp = new XMLHttpRequest();
                xmlhttp.onreadystatechange = function () {
                    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                        vm.showBio = true;
                        responsePID = xmlhttp.responseText;
                        // console.log("PID BOLK PROD==" + responsePID)
                        vm.requestBiometric(step3Form);
                    } else if (xmlhttp.status == 404) {
                        vm.errMsg = "Server Unavailable.";
                        return xmlhttp.status;
                    } else if (xmlhttp.status == 503) {
                        vm.errMsg = "Server Unavailable.";
                    }
                }

                xmlhttp.onerror = function () {
                    vm.errMsg = "Error!";
                    return xmlhttp.status;
                }

                xmlhttp.onabort = function () {
                    vm.errMsg = "Abort";
                }

                xmlhttp.open("CAPTURE", uri, true);
                //xmlhttp.send(encodeURIComponent(params));
                xmlhttp.send(params);

            } else if (device == "mobile") {
                var uri = "https://localhost:11100/rd/capture";
                var xmlhttp = new XMLHttpRequest();

                xmlhttp.onreadystatechange = function () {
                    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                        vm.showBio = true;
                        responsePID = xmlhttp.responseText;
                        vm.requestBiometric(step3Form);
                    } else if (xmlhttp.status == 404) {
                        vm.errMsg = "Server Unavailable.";
                        return xmlhttp.status;
                    } else if (xmlhttp.status == 503) {
                        vm.errMsg = "Server Unavailable.";
                    }
                }

                xmlhttp.onerror = function () {
                    vm.errMsg = "Error!";
                    return xmlhttp.status;
                }

                xmlhttp.onabort = function () {
                    vm.errMsg = "Abort!";
                }

                xmlhttp.open("CAPTURE", uri, true);
                //xmlhttp.send(encodeURIComponent(params));
                xmlhttp.send(params);
            }
        }

        vm.requestBiometric = function (step3Form) {
            vm.errMsg = "";
            vm.disabledDob = false;
            vm.panAadhaarDobMatchError = false;
            vm.typeInput = "password";
            if (step3Form.aadhaar.$valid && step3Form.aadhaarConsent.$valid) {
                var aadhaarNumber = UtilService.encodeData2(vm.model.aadhaar);
                //console.log("Encrypted aadhaar:"+aadhaarNumber);
                var reqData = {
                    pid: responsePID,
                    aadhaar: aadhaarNumber,
                    aadhaarConsentFlag: vm.model.aadhaarConsent ? 'Y' : 'N'
                }
                var securityParams = {
                    robocheck: vm.robocheck ? vm.robocheck : ''
                };
                // console.log("ReqData to send to service ", JSON.stringify(reqData));
                // console.log("attempt number==", n);
                step3Service.requestBiometric(reqData, securityParams).then(function (result) {
                    if (result.success) {
                        if(result.panAadhaarDobMatch ==="N" ){
                            vm.showForm = false;
                            // vm.model.aadhaarName = UtilService.decodeData2(result["aadhaarName"]);
                            // vm.pAnamemismatch = true;
                            vm.panAadhaarDobMatchError = true;
                            $state.go('app.card-declined',{'cardKey':vm.selectedCard.key});

                        }else{
                        vm.showForm = true;
                        vm.model.gender = UtilService.decodeData2(result["gender"]);
                        vm.model.aadhaarName = UtilService.decodeData2(result["aadhaarName"]);
                        //DOB (YYYY-MM-DD)
                        var dateOfBirth = UtilService.decodeData2(result["dateOfBirth"]);
                        //   console.log("lenbackend DOBgth==", dateOfBirth);
                        // console.log("length==", dateOfBirth.length);
                        var dob = new Date(dateOfBirth);
                        var dd = String(dob.getDate()).padStart(2, '0');
                        var mm = String(dob.getMonth() + 1).padStart(2, '0');
                        var yyyy = dob.getFullYear();
                        if(dateOfBirth.length >= 5 ){
                            // console.log("length==full", dateOfBirth.length);                            
                            vm.model.date = dd;
                            vm.model.month = mm;
                            vm.model.year = yyyy;
                            vm.disabledDob = true;

                        }else{
                            // console.log("length==year", dateOfBirth.length);
                            // vm.model.date = "";
                            // vm.model.month = "";
                            // vm.model.year = yyyy;
                            vm.disabledDob = false;

                        }
                        // vm.model.mobile = result["mobile"];
                        // vm.model.email = result["email"];
                        vm.model.residentialAddress.address1 = UtilService.decodeData2(result["house"]);
                        vm.model.residentialAddress.address2 = UtilService.decodeData2(result["street"]);
                        vm.model.residentialAddress.address3 = UtilService.decodeData2(result["landmark"]);
                        vm.location = UtilService.decodeData2(result["location"]);
                        vm.model.residentialAddress.pinCode = UtilService.decodeData2(result["pincode"]);
                        vm.postalOffice = UtilService.decodeData2(result["postalOffice"]);
                        vm.model.residentialAddress.city = UtilService.decodeData2(result["village"]);
                        vm.model.residentialAddress.district = UtilService.decodeData2(result["district"]);
                        vm.subDistrict = UtilService.decodeData2(result["subDistrict"]);
                        vm.model.residentialAddress.state = UtilService.decodeData2(result["state"]);
                        vm.photo = result["photo"];
                        vm.co = UtilService.decodeData2(result["co"]);
                        vm.aadhaarReferenceKey = UtilService.decodeData2(result["aadhaarReferenceKey"]);
                        vm.enrollmentDate = UtilService.decodeData2(result["enrollmentDate"]);
                        vm.redactedAadhaar = UtilService.decodeData2(result["redactedAadhaar"]);
                        journeyService.setRedactedAadhaar(vm.redactedAadhaar);
                        vm.uidToken = UtilService.decodeData2(result["uidToken"]);

                        }
                    } else if (result.responseCode) {
                        vm.errMsg = "Sorry!! It seems there is some issue with Aadhaar Portal. Please retry.";
                        n = n + 1;
                        // console.log("attempt number increased so this is==" + n + " attempt");
                        window.scrollTo(0, 0);
                        if (n >= 4) {
                            vm.otpIssue = false;
                            journeyService.setOtpIssue(vm.otpIssue);
                            // console.log("attempt is ==", n);
                            openSkipModal();
                        }
                    } else {
                        vm.errMsg = "Sorry!! It seems there is some issue with Aadhaar Portal. Please retry.";
                        window.scrollTo(0, 0);
                    }
                });
            } else {
                vm.submitted = true;
                UtilService.focusOnInvalid('step3Form');
            }
        }

        vm.save = function () {
            var modalInstance = $uibModal.open({
                backdrop: 'static',
                keyboard: false,
                modalFade: true,
                component: "overlaySaveConfirmation",
                windowClass: 'card-detail-modal'
            });

            modalInstance.result.then(function (isSelected) {
                if (isSelected) {
                    var securityParams = {
                        robocheck: vm.robocheck ? vm.robocheck : ''
                    };
                    var reqData = prepareData();
                    step3Service.saveApplication(reqData, securityParams, true).then(function (result) {
                        if (result.success) {
                            $state.go('app.save-exit', { 'cardKey': vm.selectedCard.key });
                        } else if (result.errorCode == 1301) {
                            analyticService.buttonList.error.event_content = "Non sourcing city error";
                            analyticService.trackUserAction(analyticService.buttonList.error);
                            $state.go('app.non-sourcing-city', { 'cardKey': vm.selectedCard.key });
                        }
                    });
                    analyticService.buttonList.buttonClick.event_content = "save for later";
                    analyticService.trackUserAction(analyticService.buttonList.buttonClick);
                }
            }, function () { });
        };

        vm.next = function (isValid) {
            vm.validateDOB();
            var losValid = validateLengthOfStay();
            if (isValid && losValid) {
                if (vm.model.consent) {
                    var securityParams = {
                        robocheck: vm.robocheck ? vm.robocheck : ''
                    };
                    var reqData = prepareData();
                    // console.log("c reqData==", JSON.stringify(reqData));

                    step3Service.saveApplication(reqData, securityParams, false).then(function (result) {
                        if (result.success) {
                            step3Service.setDataInStorage({ "primaryApplicant": reqData });
                            // $state.go('app.journey.s4-personalDemographic');
                            step3Service.setDataInStorage({ "primaryApplicant": { "frnNumber": result["frnNumber"] } });
                            $rootScope.$broadcast("show-FRN");
                            $state.go('app.journey.s5-employmentDetails', { 'cardKey': vm.selectedCard.key });
                        } else if (result.errorCode == 1301) {
                            analyticService.buttonList.error.event_content = "Non sourcing city error";
                            analyticService.trackUserAction(analyticService.buttonList.error);
                            $state.go('app.non-sourcing-city', { 'cardKey': vm.selectedCard.key });
                        }
                        else if (result.errorCode === 10006) {
                            //arun else if condition
                            //vm.errMsg = "Sorry! there seems to be some technical error. Please try again";
                            $state.go('app.journey.s1-cards');
                        }
                        else if (result.errorCode === 10007) {
                            vm.errMsg = "Please tell us about your address type using the drop-down menu to continue with your application.";
                            $state.go('app.journey.s3-personalDetails', { 'cardKey': vm.selectedCard.key });
                        }
                    });
                } else {
                    openConsentModal();
                }
                analyticService.buttonList.buttonClick.event_content = "continue";
                analyticService.trackUserAction(analyticService.buttonList.buttonClick);
            } else {
                vm.submitted = true;
                UtilService.focusOnInvalid("step3Form");
            }
        };


        var openSkipModal = function () {
            // console.log("inside skipModel==", n);
            var skipekycModalInstance = $uibModal.open({
                backdrop: 'static',
                keyboard: false,
                modalFade: true,
                component: "skipekycModal",
                windowClass: 'card-detail-modal'
            });
            skipekycModalInstance.result.then(function (isSelected) {
                if (isSelected) {
                    // console.log("value isRejected==", isSelected);
                    // alert("\n It seems there is some issue at Aadhaar Portal end. \n \n Click OK to proceed with nonEkyc journey")
                    var contactData = appState.getContactDetails();
                    contactData.ekyc = "No";
                    step3Service.setContactDetails(contactData);
                    // console.log("contactDetails updated==", JSON.stringify(contactData));
                    location.reload();
                    window.scrollTo(0,0);

                } else {
                    // console.log("value in else isRejected==", isSelected);
                    $state.go('app.journey.s1-cards');
                }
            }, function () { });
        }

        var openConsentModal = function () {
            var modalConsentInstance = $uibModal.open({
                backdrop: 'static',
                keyboard: false,
                modalFade: true,
                component: "thirdPartyModal",
                windowClass: 'card-detail-modal'
            });
            modalConsentInstance.result.then(function (isRejected) {
                if (isRejected) {
                    var securityParams = {
                        robocheck: vm.robocheck ? vm.robocheck : ''
                    };
                    var reqData = prepareData();
                    step3Service.saveApplication(reqData, securityParams, false).then(function (result) {
                        if (result.success) {
                            step3Service.setDataInStorage({ "primaryApplicant": reqData });
                            $state.go('app.personalDetailsAcknowledgement', { 'cardKey': vm.selectedCard.key });
                        }
                    });
                }
            }, function () { });
        };

        var prepareData = function () {
            var demographicDetails = angular.copy(vm.model.demographicDetails);
            demographicDetails.nationality = demographicDetails.nationality.countryName;
            demographicDetails.nationality2 = demographicDetails.nationality2 ? demographicDetails.nationality2.countryName : null;
            demographicDetails.nationality3 = demographicDetails.nationality3 ? demographicDetails.nationality3.countryName : null;

            var dob = !UtilService.isEmpty(vm.model.date) && !UtilService.isEmpty(vm.model.month) && !UtilService.isEmpty(vm.model.year) ? vm.model.date + '-' + vm.model.month + '-' + vm.model.year : null;

            var residentialAddress = angular.copy(vm.model.residentialAddress);
            residentialAddress.country = residentialAddress.country.countryName;

            var currentAddress = angular.copy(vm.model.currentAddress);
            if (vm.model.addressOptions === 'Permanent' || 'Current') {
                currentAddress.country = currentAddress.country.countryName;
            } else {
                currentAddress = {};
            }

            var previousAddress = angular.copy(vm.model.previousAddress);
            if (vm.model.lengthOfStayYear < 3) {
                previousAddress.country = previousAddress.country.countryName;
            } else {
                previousAddress = {};
            }
            //alert(vm.model.maidenName);
            var contactData = appState.getContactDetails();

            var dataObj = {
                "nameMismatchConsent": vm.model.nameMismatchConsent ? "Y" : "N",
                "demographicDetails": demographicDetails,
                "salutation": vm.model.salutation,
                "gender": vm.model.gender,
                "fullName": vm.model.fullName,
                "aadhaarName": vm.model.aadhaarName,
                "enrollmentDate": vm.enrollmentDate,
                "redactedAadhaar": vm.redactedAadhaar,
                "aadhaarConsentFlag": vm.model.aadhaarConsent ? 'Y' : 'N',
                "mode": vm.model.aadhaarMode,
                "aadhaarReferenceKey": vm.aadhaarReferenceKey,
                "dateOfBirth": dob,
                "dialCode": vm.model.dialCode,
                "mobile": vm.model.mobile,
                "email": vm.model.email,
                "aadhaarAddress": residentialAddress,
                "addressOptions": vm.model.addressOptions,
                "currentAddressType": vm.model.addressType,
                "currentAddress": currentAddress,
                "dialCodeHome": vm.model.dialCodeHome,
                "stdCode": vm.model.stdCode,
                "homeNumber": vm.model.homeNumber,
                "lengthOfStayYear": vm.model.lengthOfStayYear,
                "lengthOfStayMonth": vm.model.lengthOfStayMonth,
                "previousAddress": previousAddress,
                "consent": vm.model.consent ? 'Y' : 'N',
                // "relationWithPrimaryCardholder": vm.model.relationWithPrimaryCardholder,
                "cardHolderName": vm.model.cardHolderName,
                "cardNumber": vm.model.cardNumber,
                //"cardType": vm.model.cardType,
                "relationWithPrimary": vm.model.relationWithPrimary,
                "customerId": vm.model.customerId,
                "motherMaidenName": vm.model.maidenName,
                "nameOnCard": vm.model.nameOnCard,
                "ekycDoneValue": contactData.ekyc
            };
            // console.log("Data object to be sent in Rocket backend: ", JSON.stringify(dataObj));
            return dataObj;
        };
    }
    var step3Comp = angular.module('journey.module').component('step3', {
        template: __webpack_require__(/*! ./step3.component.html */ "./src/app/components/journey/step3/step3.component.html"),
        controller: ['$rootScope', '$scope', '$state', '$uibModal', '$filter', '$q', '$location', '$anchorScroll', '$timeout', 'step3Service', 'journeyService', 'analyticService', 'UtilService', 'appState', step3Controller]
    });
    module.exports = step3Comp.name;
})();

/***/ }),

/***/ "./src/app/components/journey/step3/step3.component.scss":
/* unknown exports provided */
/* all exports used */
/*!***************************************************************!*\
  !*** ./src/app/components/journey/step3/step3.component.scss ***!
  \***************************************************************/
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/app/components/journey/step3/step3.component.service.js":
/* unknown exports provided */
/* all exports used */
/*!*********************************************************************!*\
  !*** ./src/app/components/journey/step3/step3.component.service.js ***!
  \*********************************************************************/
/***/ (function(module, exports) {

(function () {
    'use strict';

    var step3Service = angular.module('journey.module').service('step3Service', ['$rootScope', '$q', 'appState', '$http', 'CONFIG', 'analyticService', 'UtilService', function ($rootScope, $q, appState, $http, CONFIG, analyticService, UtilService) {

        this.setDataInStorage = function (formData) {
            var appData = angular.merge({}, appState.getApplicationData(), formData);
            appState.setApplicationData(appData);
        };

        this.getDataFromStorage = function () {
            return appState.getApplicationData();
        };

        

        this.setContactDetails = function (data) {
            appState.setContactDetails(data);
        };

        this.saveApplication = function (reqData, params, isSaveExit) {
            var apiURL, httpMethod;
            reqData.isStaffJourney = appState.isStaffJourney() ? 'Y' : 'N';
            if ($rootScope.integrationsActive) {
                httpMethod = "POST";
                var arn = appState.getApplicationData().primaryApplicant.arn;
                apiURL = CONFIG.apiUrl + '/applicantdetails/applicantdetails/save/' + arn + '/' + isSaveExit + '?hash_id=' + Math.random();
            } else {
                httpMethod = "GET";
                apiURL = 'resources/data/mock/step3_personal-details/applicant_details_save.json';
            }
            return $http({
                method: httpMethod,
                url: apiURL,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify(reqData),
                params: params
            }).then(function (response) {
                if (response && response.status === 200 && response.data) {
                    return response.data;
                }
                return {
                    success: false,
                    message: "Sorry! there seems to be some technical error."
                };
            }, function (error) {
                return {
                    success: false,
                    message: "Sorry! there seems to be some technical error."
                };
            });
        };

        this.isPanVerified = function () {
            var appData = appState.getApplicationData() || {};
            return UtilService.isEmpty(appData.primaryApplicant) ? false : !UtilService.isEmpty(appData.primaryApplicant.arn);
        };

        this.validatePAN = function (reqData, params) {
            var apiURL, httpMethod;
            var leadData = appState.getContactDetails();
            var selectedCard = appState.getApplicationData().primaryApplicant.card;
            reqData = angular.merge({}, reqData, {
                "leadId": leadData.leadId,
                "urlParamId": appState.getUrlParamId(),
                "key": selectedCard.key
            });
            if ($rootScope.integrationsActive) {
                httpMethod = "POST";
                apiURL = CONFIG.apiUrl + '/kyc/panValidate' + '?hash_id=' + Math.random();
            } else {
                httpMethod = "GET";
                apiURL = 'resources/data/mock/step3_personal-details/validate-PAN.json';
            }
            return $http({
                method: httpMethod,
                url: apiURL,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify(reqData),
                params: params
            }).then(function (response) {
                if (response && response.status === 200 && response.data) {
                    if (response.data.success || response.data.errorCode === 1111 || response.data.errorCode === 1014) {
                        var appData = { "primaryApplicant": angular.copy(response.data) };
                        delete appData.errorCode;
                        delete appData.success;
                        if (appState.isStaffJourney()) {
                            var contactDetails = appState.getContactDetails() || {};
                            if (contactDetails.psid) {
                                appData.primaryApplicant.psid = contactDetails.psid;
                            }
                        }
                        appData = angular.merge({}, appState.getApplicationData(), appData);
                        appState.setApplicationData(appData);
                    }
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
        };


        //@AD - 04/16/2022 - will send request to backend
        this.requestAadhaarOTP= function (reqData, securityParams) {
            // console.log("Step 3 component service object ===", JSON.stringify(reqData));
            var apiURL, httpMethod;
            if ($rootScope.integrationsActive) {
                httpMethod = "POST";
                apiURL = CONFIG.apiUrl + '/ekyc/requestOtp' + '?hash_id=' + Math.random();
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

        //@AD - 
        this.getConsentText = function () {
            var apiURL;
            if ($rootScope.integrationsActive) {
                apiURL = CONFIG.apiUrl + '/kyc/getEkycConsent' + '?hash_id=' + Math.random();
            } else {
                apiURL = 'resources/data/mock/step3_personal-details/consentText.json';
            }
            return $http({
                method: 'GET',
                url: apiURL,
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then(function (response) {
                if (response && response.status === 200 && response.data) {
                    return response.data;
                }
            });
        };

        //@AD - 05/02/2022 - will send request for biometric to backend
        this.requestBiometric = function (reqData, securityParams) {
            // console.log("Step 3 service object", JSON.stringify(reqData));
            var apiURL, httpMethod;
            if($rootScope.integrationsActive) {
                var arn = appState.getApplicationData().primaryApplicant.arn;
                httpMethod = "POST";
                apiURL = CONFIG.apiUrl + '/ekyc/requestBiometric/' + arn + '/' + '?hash_id=' + Math.random();
            } else {
                httpMethod = "GET";
                apiURL = 'resources/data/mock/step3_personal-details/submit-OTP.json';
                // console.log("API call to mock made successfully.", JSON.stringify(reqData));
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
                var arn = appState.getApplicationData().primaryApplicant.arn;
                httpMethod = "POST";
                apiURL = CONFIG.apiUrl + '/ekyc/submitEkyc/' + arn + '/' + '?hash_id=' + Math.random();
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
                    // console.log("Submit-OTP response data ===", JSON.stringify(response.data));
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

        this.lengthOfStayYears = [];
        for (var i = 0; i <= 65; i++) {
            if (i < 2) {
                this.lengthOfStayYears.push({ value: i, label: i + " year" });
            }
            else {
                this.lengthOfStayYears.push({ value: i, label: i + " years" });
            }
        }
        this.lengthOfStayMonths = [];
        for (var i = 0; i < 12; i++) {
            if (i < 2) {
                this.lengthOfStayMonths.push({ value: i, label: i + " month" });
            }
            else {
                this.lengthOfStayMonths.push({ value: i, label: i + " months" });
            }
        }

        this.getModelData = function () {
            var userDTO = {},
                localState = appState.getApplicationData();
            if (localState) {
                if (localState.primaryApplicant) {
                    userDTO.arn = localState.primaryApplicant.arn ? localState.primaryApplicant.arn : null;
                    userDTO.pan = localState.primaryApplicant.pan || null;
                    // userDTO.cardUsage = localState.primaryApplicant.cardUsage ? localState.primaryApplicant.cardUsage : null;
                    // userDTO.cardReason = localState.primaryApplicant.cardReason ? localState.primaryApplicant.cardReason : null;
                    // userDTO.countryForTaxPurpose = localState.primaryApplicant.taxPurposeCountry ? localState.primaryApplicant.taxPurposeCountry : null;
                    userDTO.salutation = localState.primaryApplicant.salutation || null;
                    // userDTO.otherSalutation = localState.primaryApplicant.otherSalutation ? localState.primaryApplicant.otherSalutation : null;
                    userDTO.fullName = localState.primaryApplicant.fullName ? localState.primaryApplicant.fullName : null;
                    // userDTO.fatherName = localState.primaryApplicant.fatherName ? localState.primaryApplicant.fatherName : null;
                    // userDTO.fatherEditable = localState.primaryApplicant.fatherNameEditable === 'Y';

                    // userDTO.nameToBeAppear = localState.primaryApplicant.nameOnCard ? localState.primaryApplicant.nameOnCard : null;
                    userDTO.dialCode = localState.primaryApplicant.dialCode || '91';
                    userDTO.mobile = localState.primaryApplicant.mobile || null;
                    userDTO.gender = localState.primaryApplicant.gender || null;
                    userDTO.email = localState.primaryApplicant.email || null;
                    // userDTO.dateOfBirth = localState.primaryApplicant.dateOfBirth || null;
                    var dateTemp = localState.primaryApplicant.dateOfBirth || '';
                    // console.log("dateTeamp data ==",dateTemp);
                    dateTemp = dateTemp.split('-');
                    userDTO.date = dateTemp.length > 2 ? parseInt(dateTemp[0]) : null;
                    userDTO.month = dateTemp.length > 2 ? parseInt(dateTemp[1]) : null;
                    userDTO.year = dateTemp.length > 2 ? parseInt(dateTemp[2]) : null;
                    userDTO.date = angular.isNumber(userDTO.date) && userDTO.date < 10 ? '0' + userDTO.date : userDTO.date;
                    userDTO.month = angular.isNumber(userDTO.month) && userDTO.month < 10 ? '0' + userDTO.month : userDTO.month;

                    userDTO.lengthOfStayYear = localState.primaryApplicant.lengthOfStayYear;
                    userDTO.lengthOfStayMonth = localState.primaryApplicant.lengthOfStayMonth;
                    // userDTO.hasModifiedAddress = localState.primaryApplicant.hasModifiedAddress ? localState.primaryApplicant.hasModifiedAddress : "N";
                    userDTO.currentAddress = localState.primaryApplicant.currentAddress || {
                        address1: null,
                        address2: null,
                        address3: null,
                        pinCode: null,
                        city: null,
                        district: null,
                        state: null,
                        country: null
                    };
                    userDTO.residentialAddress = localState.primaryApplicant.aadhaarAddress || {
                        address1: null,
                        address2: null,
                        address3: null,
                        pinCode: null,
                        city: null,
                        district: null,
                        state: null,
                        country: null
                    };
                    userDTO.previousAddress = localState.primaryApplicant.previousAddress || {
                        address1: null,
                        address2: null,
                        address3: null,
                        pinCode: null,
                        city: null,
                        district: null,
                        state: null,
                        country: null
                    };
                    // userDTO.taxAddress = localState.primaryApplicant.taxPurposeAddress ? localState.primaryApplicant.taxPurposeAddress : null;
                    userDTO.addressOptions = localState.primaryApplicant.addressOptions ? localState.primaryApplicant.addressOptions : null;
                    userDTO.addressType = localState.primaryApplicant.currentAddressType ? localState.primaryApplicant.currentAddressType : null;
                    userDTO.consent = localState.primaryApplicant.consent === 'Y';
                    userDTO.dialCodeHome = "91";
                    userDTO.stdCode = localState.primaryApplicant.stdCode ? localState.primaryApplicant.stdCode : null;
                    userDTO.homeNumber = localState.primaryApplicant.homeNumber ? localState.primaryApplicant.homeNumber : null;
                    userDTO.hasNameMismatch = localState.primaryApplicant.hasNameMismatch === 'Y';
                    userDTO.nameMismatchConsent = localState.primaryApplicant.nameMismatchConsent === 'Y';

                    var dg = localState.primaryApplicant.demographicDetails || {};
                    userDTO.demographicDetails = {};
                    userDTO.demographicDetails.nationality = dg.nationality || null;
                    userDTO.demographicDetails.nationality2 = dg.nationality2 || null;
                    userDTO.demographicDetails.nationality3 = dg.nationality3 || null;
                    userDTO.demographicDetails.isMultipleNationality = dg.isMultipleNationality || 'N';
                    userDTO.demographicDetails.specificMaritalStatus = dg.specificMaritalStatus || null;
                    userDTO.demographicDetails.maritalStatus = dg.maritalStatus || null;
                    userDTO.demographicDetails.residentialStatus = dg.residentialStatus || null;
                   // userDTO.relationWithPrimaryCardholder=localState.primaryApplicant.relationWithPrimaryCardholder;
                    userDTO.cardHolderName=localState.primaryApplicant.cardHolderName;
                    userDTO.cardNumber=localState.primaryApplicant.cardNumber;
                    userDTO.cardType=localState.primaryApplicant.cardType;
                    userDTO.relationWithPrimary=localState.primaryApplicant.relationWithPrimary;
                    userDTO.customerId=localState.primaryApplicant.customerId;
                    userDTO.aadharSeedingFlag=localState.primaryApplicant.aadharSeedingFlag;
                }
            }
            return userDTO;
        };

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
                    def.resolve({ city: 'Mumbai', district: 'Mumbai', state: 'Maharashtra' });
                }
                return def.promise;
            }
        };

        this.validateDate = function (yy, mm, dd) {
            // Create list of days of a month [assume there is no leap year by default]  
            dd = parseInt(dd);
            mm = parseInt(mm);
            yy = parseInt(yy);
            var ListofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            // if (dd < 1 || dd > 31) {
            //     // invalid date
            //     return false;
            // }
            // if (mm < 1 || mm > 12) {
            //     // invalid month
            //     return false;
            // }
            // if (yy < 1000) {
            //     // invalid month
            //     return false;
            // }
            if (mm == 1 || mm > 2) {
                if (dd > ListofDays[mm - 1]) {
                    // Invalid date format!;
                    return false;
                }
            }
            if (mm == 2) {
                var lyear = false;
                if ((!(yy % 4) && yy % 100) || !(yy % 400)) {
                    lyear = true;
                }
                if ((lyear == false) && (dd >= 29)) {
                    // Invalid date format!;
                    return false;
                }
                if ((lyear == true) && (dd > 29)) {
                    // Invalid date format!;
                    return false;
                }
            }
            return true;
        };
    }]);

    module.exports = step3Service.name;
})();


/***/ }),

/***/ "./src/app/components/journey/step3/thirdPartyModal/thirdPartyModal.modal.component.html":
/* unknown exports provided */
/* all exports used */
/*!***********************************************************************************************!*\
  !*** ./src/app/components/journey/step3/thirdPartyModal/thirdPartyModal.modal.component.html ***!
  \***********************************************************************************************/
/***/ (function(module, exports) {

module.exports = "<div class=modal-header> <div class=heading-container> </div> <div class=close-button-container> <button type=button class=close aria-label=Close ng-click=$ctrl.cancel()> <span aria-hidden=true>×</span> </button> </div> </div> <div class=modal-body> <p class=no-margin-b> We use services of third party agencies/service providers for application processing. We need your consent to progress further. </p> </div> <div class=modal-footer> <div class=buttons-container> <button class=button-outline ng-click=$ctrl.Close(true)>I don't wish to progress</button> <button class=button-primary ng-click=$ctrl.Close(false)>OK to progress</button> </div> </div>";

/***/ }),

/***/ "./src/app/components/journey/step3/thirdPartyModal/thirdPartyModal.modal.component.js":
/* unknown exports provided */
/* all exports used */
/*!*********************************************************************************************!*\
  !*** ./src/app/components/journey/step3/thirdPartyModal/thirdPartyModal.modal.component.js ***!
  \*********************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

(function () {
    'use strict';
    var angular = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
    __webpack_require__(/*! ./thirdPartyModal.modal.component.scss */ "./src/app/components/journey/step3/thirdPartyModal/thirdPartyModal.modal.component.scss")

    var modalController = function (analyticService) {
        var vm = this;

        vm.$onInit = function () {
            analyticService.buttonList.popup.event_content = "Assignment of activities to third party agencies confirmation";
            analyticService.trackUserAction(analyticService.buttonList.popup);
        };

        /**
         * This function is triggered when we select or unselect card.
         * We push the selected card in selectedPrimaryCards array and
         *  pop the unselected card.
         */
        vm.Close = function (isRejected) {
            analyticService.buttonList.buttonClick.event_content =  true ? "I don't wish to progress" : "OK to progress";
            analyticService.trackUserAction(analyticService.buttonList.buttonClick);
            vm.close({
                $value: isRejected
            });
        };

        vm.cancel = function () {
            vm.dismiss({
                $value: 'cancel'
            });
        };
    };

    var modalComp = angular.module('journey.module').component('thirdPartyModal', {
        template: __webpack_require__(/*! ./thirdPartyModal.modal.component.html */ "./src/app/components/journey/step3/thirdPartyModal/thirdPartyModal.modal.component.html"),
        bindings: {
            resolve: '<',
            close: '&',
            dismiss: '&'
        },
        controller: ['analyticService', modalController]
    });
    module.exports = modalComp.name;
})();


/***/ }),

/***/ "./src/app/components/journey/step3/thirdPartyModal/thirdPartyModal.modal.component.scss":
/* unknown exports provided */
/* all exports used */
/*!***********************************************************************************************!*\
  !*** ./src/app/components/journey/step3/thirdPartyModal/thirdPartyModal.modal.component.scss ***!
  \***********************************************************************************************/
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

});
//# sourceMappingURL=d9a122820a80a5ab96030.js.map