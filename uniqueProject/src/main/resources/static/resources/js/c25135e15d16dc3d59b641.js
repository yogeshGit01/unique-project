webpackJsonp([41],{

/***/ "./src/app/app.module.js":
/* unknown exports provided */
/* all exports used */
/*!*******************************!*\
  !*** ./src/app/app.module.js ***!
  \*******************************/
/***/ (function(module, exports, __webpack_require__) {

(function () {
    var angular = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
    __webpack_require__(/*! @uirouter/angularjs */ "./node_modules/@uirouter/angularjs/release/ui-router-angularjs.js");
    // require('angular-permission');
    __webpack_require__(/*! oclazyload */ "./node_modules/oclazyload/dist/ocLazyLoad.js");
    __webpack_require__(/*! angular-ui-bootstrap */ "./node_modules/angular-ui-bootstrap/index.js");
    __webpack_require__(/*! angular-local-storage */ "./node_modules/angular-local-storage/index.js");
    __webpack_require__(/*! angular-sanitize */ "./node_modules/angular-sanitize/index.js");
    __webpack_require__(/*! signature_pad */ "./node_modules/signature_pad/dist/signature_pad.mjs");
    //require('ui-select/dist/select');
    __webpack_require__(/*! ../resources/js/ui-select/select */ "./src/resources/js/ui-select/select.js")
    __webpack_require__(/*! ui-select-infinity-master/lib/index */ "./node_modules/ui-select-infinity-master/lib/index.js");
    __webpack_require__(/*! angular-aria */ "./node_modules/angular-aria/index.js");
    //require('angular-messages');
    __webpack_require__(/*! ./services/translate/app.translate.module */ "./src/app/services/translate/app.translate.module.js");

    var routeConfig = __webpack_require__(/*! ./route-config */ "./src/app/route-config.js");
    var env = __webpack_require__(/*! config */ "./src/resources/config/env.prod.json");

    console.log("base URl   ==  "+window.location.href);

    var rooturl = window.location.href;
    var flag=false;

    var baseUrl;
    var contacturl;
    if(rooturl.includes('?'))
    {   
        if(rooturl.includes('form.campaign_id') && rooturl.includes('GOOGLE'))
        {
        baseUrl = rooturl.split('?')[0];
        baseUrl = baseUrl + "#!/app/apply-for-credit-card?" +rooturl.split('?')[2];
        // console.log("base paid URl  google ==  "+baseUrl);
        //baseUrl = baseUrl.split('#')[0];
        // console.log("base paid URl after split  ==  "+baseUrl);
        flag=true;
        }
        else if(rooturl.includes('form.campaign_id') && rooturl.includes('fbclid'))
        {
        baseUrl = rooturl.split('?')[0];
        baseUrl = baseUrl + "#!/app/apply-for-credit-card?" +rooturl.split('?')[2];
        // console.log("base paid URl fb  ==  "+baseUrl);
        //baseUrl = baseUrl.split('#')[0];
        // console.log("base paid URl after split  ==  "+baseUrl);
        flag=true;
        }
        else //if(rooturl.includes('form.campaign_id'))
        {
        baseUrl = rooturl.split('#')[0];
        flag=false;
        // console.log("base unpaid URl   ==  "+baseUrl);
        }
        //else{
        // baseUrl = rooturl.split('?')[0];
         //flag=true;
        //}
    }else 
    {
         baseUrl = rooturl.split('#')[0];
    }
   //$window.location.href=baseUrl;

    // baseUrl = window.location.href.split('#')[0];
    //var baseUrl = window.location.href.split('?')[0];
    //var baseUrl = window.location.href;
    // console.log("base URl after split  ==  "+baseUrl);
     //console.log("baseUrl: " + (baseUrl[baseUrl.length - 1] === '/') ? baseUrl.substring(0, baseUrl.length - 1) : baseUrl);
    var app = angular.module('app', [
        'ui.router',
        // 'permission',
        // 'permission.ui',
        'oc.lazyLoad',
        'ui.bootstrap',
        'ui.select',
        'ui-select-infinity',
        'ngSanitize',
        'LocalStorageModule',
        'ngAria',
        'app.translate'
    ])
        .config(['$ocLazyLoadProvider', '$stateProvider', '$urlServiceProvider', '$locationProvider', routeConfig])
        .config(['$provide', function ($provide) {
            // $provide provider is used to register the components in angular internally.

            // use decorator to customise the behaviour of a service. 
            $provide.decorator('$exceptionHandler', ['$delegate', function ($delegate) {

                // exception: exception associated with the error
                // cause: optional information about the context in which the error was thrown.

                return function (exception, cause) {
                    exception.message = 'Exception Message: ' + exception.message;

                    // $delegate: provides the original service to the method which is used to call the base implementation
                    // of $exceptionHandler service which internally delegates to $log.error.
                    $delegate(exception, cause);

                };
            }]);
        }])
        .config(['$httpProvider', 'localStorageServiceProvider', function ($httpProvider, storageServiceProvider) {

            $httpProvider.interceptors.push('httpInterceptor');
            /*            
                        $httpProvider.defaults.useXDomain = true;
                        $httpProvider.defaults.withCredentials = true;
                        delete $httpProvider.defaults.headers.common['X-Requested-With'];
            */

            storageServiceProvider
                .setStorageType('sessionStorage')
                .setPrefix('hsbc');

        }])
        .config(['$ariaProvider', function ($ariaProvider) {

            $ariaProvider.config({
                ariaInvalid: false,
            });

        }])
        .run(['$rootScope', '$document', '$transitions', 'appState', function ($rootScope, $document, $transitions, appState) {
            if(flag)
            {
            document.location.href=baseUrl;
            }
            $rootScope.stepsHeader = {
                stepNames: ["Basic Information", "Personal details", "Employment details", "Review details", "Additional details", "Consent and Submit"],
                currentStep: 1
            };
            $rootScope.integrationsActive = env.integrationsActive;

            /*  iOS specific issue.
                INM-1541: Hide keyboard when touched on non-input areas.
            */
            $document.on('touchend', function (event) {
                if (event.target.nodeName !== 'INPUT') {
                    $document[0].activeElement.blur();
                }
            });

            $transitions.onSuccess({}, function (transition) {
                appState.setCurrentRoute(transition.to().name);
                var pageTitle = transition.to().data ? transition.to().data.pageTitle : '';
                document.title = pageTitle ? pageTitle + ' | HSBC' : 'HSBC';
            });
        }]);
        // console.log("base URl final ==  "+baseUrl);
    if (env.CORS) {
        app.constant('CONFIG', {
            apiUrl: env.EXT_API_URL
        })
    } else {
        app.constant('CONFIG', {
            apiUrl: (baseUrl[baseUrl.length - 1] === '/') ?
                baseUrl.substring(0, baseUrl.length - 1) : baseUrl
        })

    }

    __webpack_require__(/*! ./http-interceptor */ "./src/app/http-interceptor.js");
    __webpack_require__(/*! ./services/state/app.local.store */ "./src/app/services/state/app.local.store.js");
    __webpack_require__(/*! ./services/analytic.service */ "./src/app/services/analytic.service.js");
    __webpack_require__(/*! ./services/helper/util.service */ "./src/app/services/helper/util.service.js");
    __webpack_require__(/*! ./services/helper/routing.service */ "./src/app/services/helper/routing.service.js");
    // require('./services/helper/enums.service');
    // require('./services/security/access.service');
    __webpack_require__(/*! ./components/common/footer/footer.component */ "./src/app/components/common/footer/footer.component.js");
    __webpack_require__(/*! ./components/common/header/header.component */ "./src/app/components/common/header/header.component.js");
    __webpack_require__(/*! ./components/common/loading/loading.component */ "./src/app/components/common/loading/loading.component.js");
    __webpack_require__(/*! ./components/journey/common/step-footer.component */ "./src/app/components/journey/common/step-footer.component.js");
    __webpack_require__(/*! ./components/directives/startsWith/startsWith.filter */ "./src/app/components/directives/startsWith/startsWith.filter.js");
    __webpack_require__(/*! ./components/common/phone-country-code/phone-country-code.component */ "./src/app/components/common/phone-country-code/phone-country-code.component.js");
    __webpack_require__(/*! ./components/directives/limit-to/limit-to.directive */ "./src/app/components/directives/limit-to/limit-to.directive.js");
    __webpack_require__(/*! ./components/directives/alpha-space/alpha-space.directive */ "./src/app/components/directives/alpha-space/alpha-space.directive.js");
    __webpack_require__(/*! ./components/directives/trim/trim.directive */ "./src/app/components/directives/trim/trim.directive.js");
    __webpack_require__(/*! ./components/directives/alpha-num-space/alpha-num-space.directive */ "./src/app/components/directives/alpha-num-space/alpha-num-space.directive.js");
    __webpack_require__(/*! ./components/directives/ui-select-limit/ui-select-limit.directive */ "./src/app/components/directives/ui-select-limit/ui-select-limit.directive.js");
    __webpack_require__(/*! ./components/directives/alpha-num/alpha-num.directive */ "./src/app/components/directives/alpha-num/alpha-num.directive.js");
    __webpack_require__(/*! ./components/directives/alpha-only/alpha-only.directive */ "./src/app/components/directives/alpha-only/alpha-only.directive.js");
    __webpack_require__(/*! ./components/directives/only-number/only-number.directive */ "./src/app/components/directives/only-number/only-number.directive.js");
    __webpack_require__(/*! ./components/directives/number-std/number-std.directive */ "./src/app/components/directives/number-std/number-std.directive.js");
    __webpack_require__(/*! ./components/directives/address-chars/address-chars.directive */ "./src/app/components/directives/address-chars/address-chars.directive.js");
    __webpack_require__(/*! ./components/directives/email-chars/email-chars.directive */ "./src/app/components/directives/email-chars/email-chars.directive.js");
    __webpack_require__(/*! ./components/directives/company-chars/company-chars.directive */ "./src/app/components/directives/company-chars/company-chars.directive.js");
    __webpack_require__(/*! ./components/directives/auto-caps/auto-caps.directive */ "./src/app/components/directives/auto-caps/auto-caps.directive.js");
    __webpack_require__(/*! ./components/directives/validation-msg/validation-msg.directive */ "./src/app/components/directives/validation-msg/validation-msg.directive.js");
    __webpack_require__(/*! ./components/directives/alert-msg/alert-msg.directive */ "./src/app/components/directives/alert-msg/alert-msg.directive.js");
    __webpack_require__(/*! ./components/directives/focus-input/focus-input.directive */ "./src/app/components/directives/focus-input/focus-input.directive.js");
    __webpack_require__(/*! ./components/directives/custom-select/custom-select.directive */ "./src/app/components/directives/custom-select/custom-select.directive.js");

    // Filters
    __webpack_require__(/*! ./components/filters/trusted-url.filter */ "./src/app/components/filters/trusted-url.filter.js");
})();

/***/ }),

/***/ "./src/app/components/common/footer/footer.component.html":
/* unknown exports provided */
/* all exports used */
/*!****************************************************************!*\
  !*** ./src/app/components/common/footer/footer.component.html ***!
  \****************************************************************/
/***/ (function(module, exports) {

module.exports = "<div class=footer-spacer></div> <footer> <div class=application-footer> <div class=\"view-container text-center\"> &copy; Copyright. HSBC Bank (India) Limited (Company Registration No. 201420624K) 2018 v <span ng-bind=$ctrl.version></span> </div> </div> </footer>";

/***/ }),

/***/ "./src/app/components/common/footer/footer.component.js":
/* unknown exports provided */
/* all exports used */
/*!**************************************************************!*\
  !*** ./src/app/components/common/footer/footer.component.js ***!
  \**************************************************************/
/***/ (function(module, exports, __webpack_require__) {

(function () {
    'use strict';
    var env = __webpack_require__(/*! config */ "./src/resources/config/env.prod.json");

    var footerController = function ($scope) {
        var vm = this;
        vm.version = env.version;
    };
    angular.module('app').component('appFooter', {
        template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/common/footer/footer.component.html"),
        controller: ['$scope', footerController]
    });
})();

/***/ }),

/***/ "./src/app/components/common/header/header.component.html":
/* unknown exports provided */
/* all exports used */
/*!****************************************************************!*\
  !*** ./src/app/components/common/header/header.component.html ***!
  \****************************************************************/
/***/ (function(module, exports) {

module.exports = "<header class=header> <div class=view-container> <div class=\"header-logo pull-left\"> <img ng-src=resources/images/HSBC_Logo.png alt=\"HSBC Logo\"/> </div> <div class=pull-right ng-if=$ctrl.frn> <strong>FRN:</strong> {{$ctrl.frn}}</div> <div class=clearfix></div> </div> </header>";

/***/ }),

/***/ "./src/app/components/common/header/header.component.js":
/* unknown exports provided */
/* all exports used */
/*!**************************************************************!*\
  !*** ./src/app/components/common/header/header.component.js ***!
  \**************************************************************/
/***/ (function(module, exports, __webpack_require__) {

(function () {
    'use strict';
    __webpack_require__(/*! ./header.component.scss */ "./src/app/components/common/header/header.component.scss");
    angular.module('app').component('appHeader', {
        template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/common/header/header.component.html"),
        controller: ["$scope", "appState", "UtilService", function ($scope, appState, UtilService) {
            var vm = this;
            vm.$onInit = function () {
                //if (appState.isStaffJourney()) {
                    showFRN();
               // }
            };

            $scope.$on('show-FRN', function () {
                showFRN();
            });

            $scope.$on('hide-FRN', function () {
                vm.isStaffJourney = appState.isStaffJourney();
                vm.frn = null;
            });

            var showFRN = function () {
                vm.isStaffJourney = appState.isStaffJourney();
                var appData = appState.getApplicationData() || {};
                vm.frn = UtilService.isEmpty(appData.primaryApplicant) ? null : appData.primaryApplicant.frnNumber;
            };
        }]
    });
})();

/***/ }),

/***/ "./src/app/components/common/header/header.component.scss":
/* unknown exports provided */
/* all exports used */
/*!****************************************************************!*\
  !*** ./src/app/components/common/header/header.component.scss ***!
  \****************************************************************/
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/app/components/common/loading/loading.component.html":
/* unknown exports provided */
/* all exports used */
/*!******************************************************************!*\
  !*** ./src/app/components/common/loading/loading.component.html ***!
  \******************************************************************/
/***/ (function(module, exports) {

module.exports = "<div class=row> <div class=\"col-md-12 col-sm-12 col-xs-12 center\"> <div ng-if=$ctrl.model.dipLoader class=text-center> <div class=\"dip-loader still-loading\" ng-class=\"{'loaded': $ctrl.model.dip}\"> <p class=loader></p> <span class=\"icon icon-circle-confirmation-solid\"></span> </div> <div> <p>We are processing your Credit Card application.</p> <p>Do not refresh this screen. Your application status will be displayed shortly. </p> <p>We appreciate your patience.</p> </div> </div> <div ng-if=$ctrl.model.perfiosLoader class=text-center> <div class=\"dip-loader still-loading\" ng-class=\"{'loaded': $ctrl.model.dip}\"> <p class=loader></p> <span class=\"icon icon-circle-confirmation-solid\"></span> </div> <div> <p>We are processing your application</p> <p>Do not refresh this screen. Your application status will be displayed shortly. </p> <p>We appreciate your patience.</p> </div> </div> <p ng-if=$ctrl.model.aadharLoader class=text-center> Please be patient. This process might take some time. Please do not hit Refresh or Browser Back button or Close the window. </p> <ul class=listitems> <li ng-if=$ctrl.model.aadharLoader class=still-loading ng-class=\"{'loaded': $ctrl.model.aadhar}\"> <p class=loader></p> <span class=\"icon icon-circle-confirmation-solid\"></span> <span class=item-title>Verifying your Virtual ID/Aadhaar number</span> </li> <li ng-if=$ctrl.model.panLoader class=still-loading ng-class=\"{'loaded': $ctrl.model.pan}\"> <p class=loader></p> <span class=\"icon icon-circle-confirmation-solid\"></span> <span class=item-title>Verifying your PAN</span> </li> <li ng-if=$ctrl.model.reviewLoader class=still-loading ng-class=\"{'loaded': $ctrl.model.review}\"> <p class=loader></p> <span class=\"icon icon-circle-confirmation-solid\"></span> <span class=item-title>Reviewing your data</span> </li> </ul> <div ng-if=$ctrl.model.anumatiLoader class=text-center> <div class=\"dip-loader still-loading\" ng-class=\"{'loaded': $ctrl.model.dip}\"> <p class=loader></p> <span class=\"icon icon-circle-confirmation-solid\"></span> </div> <div> <p>We are processing your Anumati Consents Details</p> <p>Do not refresh this screen. Your application status will be displayed shortly. </p> <p>We appreciate your patience.</p> </div> </div> <div ng-if=$ctrl.model.withsignzyLoader class=text-center> <div class=\"dip-loader still-loading\" ng-class=\"{'loaded': $ctrl.model.dip}\"> <p class=loader></p> <span class=\"icon icon-circle-confirmation-solid\"></span> </div> <div> <p>We are processing your Consent Details.</p> <p>Do not refresh this screen. Your application status will be displayed shortly. </p> <p>We appreciate your patience.</p> </div> </div> </div> </div>";

/***/ }),

/***/ "./src/app/components/common/loading/loading.component.js":
/* unknown exports provided */
/* all exports used */
/*!****************************************************************!*\
  !*** ./src/app/components/common/loading/loading.component.js ***!
  \****************************************************************/
/***/ (function(module, exports, __webpack_require__) {

(function () {
    'use strict';
    var angular = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
    __webpack_require__(/*! ./loading.component.scss */ "./src/app/components/common/loading/loading.component.scss");

    var loading = angular.module('app').component('loading', {
        template: __webpack_require__(/*! ./loading.component.html */ "./src/app/components/common/loading/loading.component.html"),
        controller: ['$rootScope', '$timeout', function ($rootScope, $timeout) {
            var vm = this;
            vm.model = {};
            vm.model.aadhar = false;
            vm.model.pan = false;
            vm.model.review = false;
            vm.model.dip = false;
            vm.model.aadharLoader = false;
            vm.model.panLoader = false;
            vm.model.reviewLoader = false;
            vm.model.dipLoader = false;
            vm.model.perfiosLoader = false;
            vm.model.anumatiLoader = false;
            vm.model.withsignzyLoader = false;

            vm.$onInit = function () {
                // if ($state.params.loadingData) {
                //     if ($state.params.loadingData.url == 'validate') {
                //         vm.model.aadharLoader = true;
                //         $timeout(function () {
                //             vm.model.aadhar = true;
                //             vm.model.panLoader = true;
                //             $timeout(function () {
                //                 vm.model.pan = true;
                //                 vm.model.reviewLoader = true;
                //                 $timeout(function () {
                //                     vm.model.review = true;
                //                     vm.model.reviewLoader = true;
                //                     $state.go('app.journey.s3-personalDetails');
                //                 }, 5000);
                //             }, 5000);
                //         }, 5000);
                //     } else {
                //         vm.model.dipLoader = true;
                //         $timeout(function () {
                //             vm.model.dip = true;
                //             $state.go('app.journey.card-DIP');
                //         }, 5000);
                //     }
                // }
            };

            $rootScope.$on('trigger-verification-loader', function (event, args) {
                if (args.showLoader) {
                    $rootScope.loadingKYC = true;
                    vm.model.withsignzyLoader = false;
                    startLoader(args.loaderType);
                } else {
                    $rootScope.loadingKYC = false;
                }
            });

            var startLoader = function (loaderType) {
                if (loaderType === 'AADHAR') {
                    vm.model.aadharLoader = true;
                    vm.model.aadhar = false;
                    vm.model.panLoader = false;
                    vm.model.pan = false;
                    vm.model.reviewLoader = false;
                    vm.model.review = false;
                    $timeout(function () {
                        vm.model.aadhar = true;
                        vm.model.panLoader = true;
                        $timeout(function () {
                            vm.model.pan = true;
                            vm.model.reviewLoader = true;
                        }, 5000);
                    }, 5000);
                } else if (loaderType === 'DIP') {
                    vm.model.dipLoader = true;
                    // $timeout(function () {
                    //     vm.model.dip = true;
                    // }, 5000);
                } else if (loaderType === "PERFIOS") {  // added PERFIOS condition by @akshaypise feb2024
                    // console.log("inside loade");
                    vm.model.perfiosLoader = true;
                    // $timeout(function () {
                    //     vm.model.perfiosLoader = true;
                    // }, 5000);
                }else if (loaderType === "ANUMATI") {  // added for OB by @akshaypise April2024
                    vm.model.anumatiLoader = true;
                    // $timeout(function () {
                    //     vm.model.anumatiLoader = true;
                    // }, 5000);
                } else if (loaderType === "WITHSIGNZY") {  // added for OB by @akshaypise April2024
                    vm.model.withsignzyLoader = true;
                    // $timeout(function () {
                    //     vm.model.withsignzyLoader = true;
                    // }, 5000);
                }
            };
        }]
    });

    module.exports = loading.name;
})();


/***/ }),

/***/ "./src/app/components/common/loading/loading.component.scss":
/* unknown exports provided */
/* all exports used */
/*!******************************************************************!*\
  !*** ./src/app/components/common/loading/loading.component.scss ***!
  \******************************************************************/
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/app/components/common/phone-country-code/phone-country-code.component.html":
/* unknown exports provided */
/* all exports used */
/*!****************************************************************************************!*\
  !*** ./src/app/components/common/phone-country-code/phone-country-code.component.html ***!
  \****************************************************************************************/
/***/ (function(module, exports) {

module.exports = "<ui-select role=combobox class=countryDropDown ng-if=$ctrl.countries ng-disabled=$ctrl.disable ng-model=$ctrl.phoneCode on-select=$ctrl.selectCode($select.selected) ui-select-limit={{$ctrl.limit}}> <ui-select-match aria-label=\"Country code\"> <div class=\"flag {{$select.selected.countryCode.toLocaleLowerCase()}}\" style=background-image:url(resources/images/country-flags-sprite.png) ng-if=\"$select.selected.countryCode != -1\"></div> {{'+' + $select.selected.phoneCode}} </ui-select-match> <ui-select-choices repeat=\"country.phoneCode as country in $ctrl.countries | startsWith: {keyword: $select.search, props: ['label','phoneCode','countryName']}\"> <div class=\"flag {{country.countryCode.toLocaleLowerCase()}}\" style=background-image:url(resources/images/country-flags-sprite.png) ng-if=\"country.countryCode != -1\"></div> <span ng-bind-html=\"country.label | highlight: $select.search\"></span> </ui-select-choices> <ui-select-no-choice> No results found </ui-select-no-choice> </ui-select> ";

/***/ }),

/***/ "./src/app/components/common/phone-country-code/phone-country-code.component.js":
/* unknown exports provided */
/* all exports used */
/*!**************************************************************************************!*\
  !*** ./src/app/components/common/phone-country-code/phone-country-code.component.js ***!
  \**************************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

(function () {
    'use strict';
    __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
    __webpack_require__(/*! ./phone-country-code.component.scss */ "./src/app/components/common/phone-country-code/phone-country-code.component.scss");

    var ctrl = function ($http, $filter, UtilService) {
        var vm = this;

        vm.$onInit = function () {
            vm.buttonId = "btnDial" + Date.now();
            $http.get('resources/data/countries.json', { cache: true }).then(function (response) {
                vm.countries = [];
                angular.forEach(response.data, function (value) {                    
                    if (value.phoneCode) {
                        value.label = '+' + value.phoneCode;
                        vm.countries.push(value);
                    }
                });
                vm.limit = vm.countries.longest('countryName');
                if (!UtilService.isEmpty(vm.phoneCode)) {
                    vm.selectedCountry = $filter('filter')(vm.countries, { "phoneCode": vm.phoneCode })[0];
                } else {
                    vm.selectedCountry = vm.countries[0];
                    vm.phoneCode = vm.selectedCountry.phoneCode;
                }
            });
        };

        vm.selectCode = function (country) {
            vm.selectedCountry = country;
            vm.phoneCode = country.phoneCode;
            vm.dialCodeChange({ dialCode: vm.phoneCode });
        };
    };

    var countryCodeComp = angular.module('app').component('phoneCountryCode', {
        template: __webpack_require__(/*! ./phone-country-code.component.html */ "./src/app/components/common/phone-country-code/phone-country-code.component.html"),
        bindings: {
            phoneCode: '=',
            disable: '<',
            dialCodeChange: '&'
        },
        controller: ['$http', '$filter', 'UtilService', ctrl]
    });
})();

/***/ }),

/***/ "./src/app/components/common/phone-country-code/phone-country-code.component.scss":
/* unknown exports provided */
/* all exports used */
/*!****************************************************************************************!*\
  !*** ./src/app/components/common/phone-country-code/phone-country-code.component.scss ***!
  \****************************************************************************************/
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/app/components/directives/address-chars/address-chars.directive.js":
/* unknown exports provided */
/* all exports used */
/*!********************************************************************************!*\
  !*** ./src/app/components/directives/address-chars/address-chars.directive.js ***!
  \********************************************************************************/
/***/ (function(module, exports) {

(function () {
    'use strict';
    var addressCharsDir = angular.module('app').directive('addressChars', [function () {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, element, attrs, modelCtrl) {
                if (!modelCtrl) {
                    return;
                }
                angular.element(element).on("blur", function (e) {
                    this.value = this.value.trim();
                    if (this.value) {
                        var strArr = this.value.split(' ');
                        var resStr = '';
                        angular.forEach(strArr, function (str) {
                            if (str) {
                                resStr = resStr + ' ' + str;
                            }
                        });
                        this.value = resStr.trim();
                    }
                });
                var parser = function (inputValue) {
                    var parsedValue = inputValue;
                    if (inputValue) {
                        parsedValue = inputValue.replace(/[^-/,\\.0-9a-zA-Z ]+/g, '');
                        if (parsedValue.charAt(0) == ' ') {
                            parsedValue = parsedValue.trim();
                        }
                        if (parsedValue.lastIndexOf(' ') !== parsedValue.length - 1) {
                            var strArr = parsedValue.split(' ');
                            var resStr = '';
                            angular.forEach(strArr, function (str) {
                                if (str) {
                                    resStr = resStr === '' ? str : resStr + ' ' + str;
                                }
                            });
                            parsedValue = resStr;
                        }
                        var limit = parseInt(attrs.addressChars);
                        parsedValue = parsedValue.substring(0, limit);
                    }
                    if (parsedValue != inputValue) {
                        modelCtrl.$setViewValue(parsedValue)
                        modelCtrl.$render();
                    }
                    return parsedValue;
                };
                modelCtrl.$parsers.push(parser);
                modelCtrl.$formatters.push(parser);
            }
        };
    }]);
    module.exports = addressCharsDir.name;
})();


/***/ }),

/***/ "./src/app/components/directives/alert-msg/alert-msg.directive.html":
/* unknown exports provided */
/* all exports used */
/*!**************************************************************************!*\
  !*** ./src/app/components/directives/alert-msg/alert-msg.directive.html ***!
  \**************************************************************************/
/***/ (function(module, exports) {

module.exports = "<div role=alert class=hsbc-alert ng-class=\"{'alert-success': type === 'SUCCESS', 'alert-warning': type === 'WARNING', 'alert-error': type === 'ERROR', 'alert-info': type === 'INFO'}\"> <div class=alert-icon ng-class=\"{'success': type === 'SUCCESS', 'warning': type === 'WARNING', 'error': type === 'ERROR', 'info': type === 'INFO'}\"> </div> <div class=alert-message> <ng-transclude></ng-transclude> </div> </div>";

/***/ }),

/***/ "./src/app/components/directives/alert-msg/alert-msg.directive.js":
/* unknown exports provided */
/* all exports used */
/*!************************************************************************!*\
  !*** ./src/app/components/directives/alert-msg/alert-msg.directive.js ***!
  \************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

(function () {
    'use strict';
    __webpack_require__(/*! ./alert-msg.directive.scss */ "./src/app/components/directives/alert-msg/alert-msg.directive.scss");
    var alertMsg = angular.module('app').directive('alertMsg', ['UtilService', function (UtilService) {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                type: '@',//'ERROR/WARNING/SUCCESS'
            },
            template: __webpack_require__(/*! ./alert-msg.directive.html */ "./src/app/components/directives/alert-msg/alert-msg.directive.html"),
            link: function (scope, element, attrs, ctrl) {
            }
        };
    }]);
    module.exports = alertMsg.name;
})();

/***/ }),

/***/ "./src/app/components/directives/alert-msg/alert-msg.directive.scss":
/* unknown exports provided */
/* all exports used */
/*!**************************************************************************!*\
  !*** ./src/app/components/directives/alert-msg/alert-msg.directive.scss ***!
  \**************************************************************************/
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/app/components/directives/alpha-num-space/alpha-num-space.directive.js":
/* unknown exports provided */
/* all exports used */
/*!************************************************************************************!*\
  !*** ./src/app/components/directives/alpha-num-space/alpha-num-space.directive.js ***!
  \************************************************************************************/
/***/ (function(module, exports) {

(function () {
    'use strict';
    var alphaNumSpaceDir = angular.module('app').directive('alphaNumSpace', [function () {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, element, attrs, modelCtrl) {
                if (!modelCtrl) {
                    return;
                }
                angular.element(element).on("blur", function (e) {
                    this.value = this.value.trim();
                    if (this.value) {
                        var strArr = this.value.split(' ');
                        var resStr = '';
                        angular.forEach(strArr, function (str) {
                            if (str) {
                                resStr = resStr + ' ' + str;
                            }
                        });
                        this.value = resStr.trim();
                    }
                });
                var parser = function (inputValue) {
                    var parsedValue = inputValue;
                    if (inputValue) {
                        parsedValue = inputValue.replace(/[^0-9a-zA-Z ]+/g, '');
                        if (parsedValue.charAt(0) == ' ') {
                            parsedValue = parsedValue.trim();
                        }
                        if (parsedValue.lastIndexOf(' ') !== parsedValue.length - 1) {
                            var strArr = parsedValue.split(' ');
                            var resStr = '';
                            angular.forEach(strArr, function (str) {
                                if (str) {
                                    resStr = resStr === '' ? str : resStr + ' ' + str;
                                }
                            });
                            parsedValue = resStr;
                        }
                        var limit = parseInt(attrs.alphaNumSpace);
                        parsedValue = parsedValue.substring(0, limit);
                    }
                    if (parsedValue != inputValue) {
                        modelCtrl.$setViewValue(parsedValue)
                        modelCtrl.$render();
                    }
                    return parsedValue;
                };
                modelCtrl.$parsers.push(parser);
                modelCtrl.$formatters.push(parser);
            }
        };
    }]);
    module.exports = alphaNumSpaceDir.name;
})();

/***/ }),

/***/ "./src/app/components/directives/alpha-num/alpha-num.directive.js":
/* unknown exports provided */
/* all exports used */
/*!************************************************************************!*\
  !*** ./src/app/components/directives/alpha-num/alpha-num.directive.js ***!
  \************************************************************************/
/***/ (function(module, exports) {

(function () {
    'use strict';
    var alphaNumericDir = angular.module('app').directive('alphaNum', [function () {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, element, attrs, modelCtrl) {
                if (!modelCtrl) {
                    return;
                }
                var parser = function (inputValue) {
                    var parsedValue = inputValue;
                    if (inputValue) {
                        parsedValue = inputValue.replace(/[^a-zA-Z0-9]+/g, '');
                        var limit = parseInt(attrs.alphaNum);
                        parsedValue = parsedValue.substring(0, limit);
                    }
                    if (parsedValue != inputValue) {
                        modelCtrl.$setViewValue(parsedValue)
                        modelCtrl.$render();
                    }
                    return parsedValue;
                };
                modelCtrl.$parsers.push(parser);
                modelCtrl.$formatters.push(parser);
            }
        };
    }]);
    module.exports = alphaNumericDir.name;
})();

/***/ }),

/***/ "./src/app/components/directives/alpha-only/alpha-only.directive.js":
/* unknown exports provided */
/* all exports used */
/*!**************************************************************************!*\
  !*** ./src/app/components/directives/alpha-only/alpha-only.directive.js ***!
  \**************************************************************************/
/***/ (function(module, exports) {

(function () {
    'use strict';
    var alphaOnlyDir = angular.module('app').directive('alphaOnly', [function () {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, element, attrs, modelCtrl) {
                if (!modelCtrl) {
                    return;
                }
                var parser = function (inputValue) {
                    var parsedValue = inputValue;
                    if (inputValue) {
                        parsedValue = inputValue.replace(/[^a-zA-Z]+/g, '');
                        var limit = parseInt(attrs.alphaOnly);
                        parsedValue = parsedValue.substring(0, limit);
                    }
                    if (parsedValue != inputValue) {
                        modelCtrl.$setViewValue(parsedValue)
                        modelCtrl.$render();
                    }
                    return parsedValue;
                };
                modelCtrl.$parsers.push(parser);
                modelCtrl.$formatters.push(parser);
            }
        };
    }]);
    module.exports = alphaOnlyDir.name;
})();

/***/ }),

/***/ "./src/app/components/directives/alpha-space/alpha-space.directive.js":
/* unknown exports provided */
/* all exports used */
/*!****************************************************************************!*\
  !*** ./src/app/components/directives/alpha-space/alpha-space.directive.js ***!
  \****************************************************************************/
/***/ (function(module, exports) {

(function () {
    'use strict';
    var alphaSpaceDir = angular.module('app').directive('alphaSpace', [function () {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, element, attrs, modelCtrl) {
                if (!modelCtrl) {
                    return;
                }
                angular.element(element).on("blur", function (e) {
                    this.value = this.value.trim();
                    if (this.value) {
                        var strArr = this.value.split(' ');
                        var resStr = '';
                        angular.forEach(strArr, function (str) {
                            if (str) {
                                resStr = resStr + ' ' + str;
                            }
                        });
                        this.value = resStr.trim();
                    }
                });
                var parser = function (inputValue) {
                    var parsedValue = inputValue;
                    if (inputValue) {
                        parsedValue = inputValue.replace(/[^a-zA-Z ]+/g, '');
                        if (parsedValue.charAt(0) == ' ') {
                            parsedValue = parsedValue.trim();
                        }
                        if (parsedValue.lastIndexOf(' ') !== parsedValue.length - 1) {
                            var strArr = parsedValue.split(' ');
                            var resStr = '';
                            angular.forEach(strArr, function (str) {
                                if (str) {
                                    resStr = resStr === '' ? str : resStr + ' ' + str;
                                }
                            });
                            parsedValue = resStr;
                        }
                        var limit = parseInt(attrs.alphaSpace);
                        parsedValue = parsedValue.substring(0, limit);
                    }
                    if (parsedValue != inputValue) {
                        modelCtrl.$setViewValue(parsedValue)
                        modelCtrl.$render();
                    }
                    return parsedValue;
                };
                modelCtrl.$parsers.push(parser);
                modelCtrl.$formatters.push(parser);
            }
        };
    }]);
    module.exports = alphaSpaceDir.name;
})();

/***/ }),

/***/ "./src/app/components/directives/auto-caps/auto-caps.directive.js":
/* unknown exports provided */
/* all exports used */
/*!************************************************************************!*\
  !*** ./src/app/components/directives/auto-caps/auto-caps.directive.js ***!
  \************************************************************************/
/***/ (function(module, exports) {

(function () {
    'use strict';
    var autoCapsDir = angular.module('app').directive('autoCaps', [function () {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, element, attrs, modelCtrl) {
                if (!modelCtrl) {
                    return;
                }
                var parser = function (inputValue) {
                    if (inputValue) {
                        inputValue = inputValue.toUpperCase();
                        modelCtrl.$setViewValue(inputValue)
                        modelCtrl.$render();
                    }
                    return inputValue;
                };
                modelCtrl.$parsers.push(parser);
                modelCtrl.$formatters.push(parser);
            }
        };
    }]);
    module.exports = autoCapsDir.name;
})();

/***/ }),

/***/ "./src/app/components/directives/company-chars/company-chars.directive.js":
/* unknown exports provided */
/* all exports used */
/*!********************************************************************************!*\
  !*** ./src/app/components/directives/company-chars/company-chars.directive.js ***!
  \********************************************************************************/
/***/ (function(module, exports) {

(function () {
    'use strict';
    var companyCharsDir = angular.module('app').directive('companyChars', [function () {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, element, attrs, modelCtrl) {
                if (!modelCtrl) {
                    return;
                }
                angular.element(element).on("blur", function (e) {
                    this.value = this.value.trim();
                    if (this.value) {
                        var strArr = this.value.split(' ');
                        var resStr = '';
                        angular.forEach(strArr, function (str) {
                            if (str) {
                                resStr = resStr + ' ' + str;
                            }
                        });
                        this.value = resStr.trim();
                    }
                });
                var parser = function (inputValue) {
                    var parsedValue = inputValue;
                    if (inputValue) {
                        // parsedValue = inputValue.replace(/[^0-9a-zA-Z ]+/g, '');
                        parsedValue = inputValue.replace(/[(!=;*+_?$%|<>=)]+/g, '');
                        if (parsedValue.charAt(0) == ' ') {
                            parsedValue = parsedValue.trim();
                        }
                        if (parsedValue.lastIndexOf(' ') !== parsedValue.length - 1) {
                            var strArr = parsedValue.split(' ');
                            var resStr = '';
                            angular.forEach(strArr, function (str) {
                                if (str) {
                                    resStr = resStr === '' ? str : resStr + ' ' + str;
                                }
                            });
                            parsedValue = resStr;
                        }
                        var limit = parseInt(attrs.companyChars);
                        parsedValue = parsedValue.substring(0, limit);
                    }
                    if (parsedValue != inputValue) {
                        modelCtrl.$setViewValue(parsedValue)
                        modelCtrl.$render();
                    }
                    return parsedValue;
                };
                modelCtrl.$parsers.push(parser);
                modelCtrl.$formatters.push(parser);
            }
        };
    }]);
    module.exports = companyCharsDir.name;
})();

/***/ }),

/***/ "./src/app/components/directives/custom-select/custom-select.directive.html":
/* unknown exports provided */
/* all exports used */
/*!**********************************************************************************!*\
  !*** ./src/app/components/directives/custom-select/custom-select.directive.html ***!
  \**********************************************************************************/
/***/ (function(module, exports) {

module.exports = "<div class=select-wrapper> <div class=arrow tabindex=-1 aria-hidden=true> <i class=\"icon icon-chevron-down\"></i> </div> <ng-transclude></ng-transclude> </div>";

/***/ }),

/***/ "./src/app/components/directives/custom-select/custom-select.directive.js":
/* unknown exports provided */
/* all exports used */
/*!********************************************************************************!*\
  !*** ./src/app/components/directives/custom-select/custom-select.directive.js ***!
  \********************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

(function () {
    'use strict';
    __webpack_require__(/*! ./custom-select.directive.scss */ "./src/app/components/directives/custom-select/custom-select.directive.scss");
    var customSelect = angular.module('app').directive('customSelect', [function () {
        return {
            restrict: 'E',
            transclude: true,
            template: __webpack_require__(/*! ./custom-select.directive.html */ "./src/app/components/directives/custom-select/custom-select.directive.html")
        };
    }]);

    module.exports = customSelect.name;
})();

/***/ }),

/***/ "./src/app/components/directives/custom-select/custom-select.directive.scss":
/* unknown exports provided */
/* all exports used */
/*!**********************************************************************************!*\
  !*** ./src/app/components/directives/custom-select/custom-select.directive.scss ***!
  \**********************************************************************************/
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/app/components/directives/email-chars/email-chars.directive.js":
/* unknown exports provided */
/* all exports used */
/*!****************************************************************************!*\
  !*** ./src/app/components/directives/email-chars/email-chars.directive.js ***!
  \****************************************************************************/
/***/ (function(module, exports) {

(function () {
    'use strict';
    var emailCharsDir = angular.module('app').directive('emailChars', [function () {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, element, attrs, modelCtrl) {
                if (!modelCtrl) {
                    return;
                }
                angular.element(element).on("blur", function (e) {
                    this.value = this.value.trim();
                    if (this.value) {
                        var strArr = this.value.split(' ');
                        var resStr = '';
                        angular.forEach(strArr, function (str) {
                            if (str) {
                                resStr = resStr + ' ' + str;
                            }
                        });
                        this.value = resStr.trim();
                    }
                });
                var parser = function (inputValue) {
                    var limit = parseInt(attrs.emailChars);
                    var parsedValue = inputValue;
                    if (inputValue) {
                        parsedValue = inputValue.replace(/[^-.@_0-9a-zA-Z]+/g, '');
                        if (parsedValue.charAt(0) == ' ') {
                            parsedValue = parsedValue.trim();
                        }
                        if (parsedValue.lastIndexOf(' ') !== parsedValue.length - 1) {
                            var strArr = parsedValue.split(' ');
                            var resStr = '';
                            angular.forEach(strArr, function (str) {
                                if (str) {
                                    resStr = resStr === '' ? str : resStr + ' ' + str;
                                }
                            });
                            parsedValue = resStr;
                        }
                        parsedValue = parsedValue.substring(0, limit);
                    }
                    if (parsedValue != inputValue) {
                        if (modelCtrl.$modelValue && modelCtrl.$modelValue.length >= limit && parsedValue.length >= limit) {
                            parsedValue = modelCtrl.$modelValue;
                        }
                        modelCtrl.$setViewValue(parsedValue)
                        modelCtrl.$render();
                    }
                    return parsedValue;
                };
                modelCtrl.$parsers.push(parser);
                modelCtrl.$formatters.push(parser);
            }
        };
    }]);
    module.exports = emailCharsDir.name;
})();


/***/ }),

/***/ "./src/app/components/directives/focus-input/focus-input.directive.js":
/* unknown exports provided */
/* all exports used */
/*!****************************************************************************!*\
  !*** ./src/app/components/directives/focus-input/focus-input.directive.js ***!
  \****************************************************************************/
/***/ (function(module, exports) {

(function () {
    'use strict';
    var focusDir = angular.module('app').directive('input', ['UtilService', function (UtilService) {
        return {
            restrict: 'E',
            link: function (scope, element, attrs) {
                element.on('focus', function (e) {
                    UtilService.scrollToView(e.target);
                });
            }
        }
    }]);
    module.exports = focusDir.name;
})();

/***/ }),

/***/ "./src/app/components/directives/limit-to/limit-to.directive.js":
/* unknown exports provided */
/* all exports used */
/*!**********************************************************************!*\
  !*** ./src/app/components/directives/limit-to/limit-to.directive.js ***!
  \**********************************************************************/
/***/ (function(module, exports) {

(function () {
    'use strict';
    var limitToDir = angular.module('app').directive('limitTo', [function () {
        return {
            restrict: "A",
            require: 'ngModel',
            link: function (scope, element, attrs, modelCtrl) {
                var limit = parseInt(attrs.limitTo);
                modelCtrl.$formatters.push(function (inputValue) {
                    var parsedValue = inputValue;
                    if (inputValue) {
                        parsedValue = inputValue.substring(0, limit);
                        if (parsedValue != inputValue) {
                            modelCtrl.$setViewValue(parsedValue);
                            modelCtrl.$render();
                        }
                    }
                    return parsedValue;
                });
                modelCtrl.$parsers.push(function (inputValue) {
                    var parsedValue = inputValue;
                    if (inputValue) {
                        parsedValue = inputValue.substring(0, limit);
                        if (parsedValue != inputValue) {
                            modelCtrl.$setViewValue(parsedValue);
                            modelCtrl.$render();
                        }
                    }
                    return parsedValue;
                });
            }
        }
    }]);

    module.exports = limitToDir.name;
})();

/***/ }),

/***/ "./src/app/components/directives/number-std/number-std.directive.js":
/* unknown exports provided */
/* all exports used */
/*!**************************************************************************!*\
  !*** ./src/app/components/directives/number-std/number-std.directive.js ***!
  \**************************************************************************/
/***/ (function(module, exports) {

(function () {
    'use strict';
    var onlySTDNumberDir = angular.module('app').directive('numberStd', ['UtilService', function (UtilService) {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, element, attrs, modelCtrl) {
                if (!modelCtrl) {
                    return;
                }
                var maxLength = attrs.numberStd;
                var trimZero = angular.element(element).attr('trim-zero');
                var parser = function (inputValue) {
                    var formattedValue = inputValue;
                    if (formattedValue && typeof formattedValue === 'string') {
                        formattedValue = inputValue.replace(/[^0-9]+/g, '');
                        
                        formattedValue = formattedValue.replace(/^0+/, '');
                        
                        if (!UtilService.isEmpty(maxLength)) {
                            maxLength = parseInt(maxLength);
                            formattedValue = formattedValue.substring(0, maxLength);
                        }

                        if (!UtilService.isEmpty(trimZero)) {
                            for (var i = 0; i < formattedValue.length; i++) {
                                if (formattedValue[i] !== '0') {
                                    break;
                                }
                            }
                            formattedValue = formattedValue.substring(i, maxLength);
                        }
                    }
                    if (formattedValue != inputValue) {
                        modelCtrl.$setViewValue(formattedValue);
                        modelCtrl.$render();
                    }
                    return formattedValue;
                };
                modelCtrl.$parsers.push(parser);
                modelCtrl.$formatters.push(parser);
            }
        };
    }]);
    module.exports = onlySTDNumberDir.name;
})();

/***/ }),

/***/ "./src/app/components/directives/only-number/only-number.directive.js":
/* unknown exports provided */
/* all exports used */
/*!****************************************************************************!*\
  !*** ./src/app/components/directives/only-number/only-number.directive.js ***!
  \****************************************************************************/
/***/ (function(module, exports) {

(function () {
    'use strict';
    var onlyNumberDir = angular.module('app').directive('onlyNumber', ['UtilService', function (UtilService) {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, element, attrs, modelCtrl) {
                if (!modelCtrl) {
                    return;
                }
                var maxLength = attrs.onlyNumber;
                var trimZero = angular.element(element).attr('trim-zero');
                var parser = function (inputValue) {
                    var formattedValue = inputValue;
                    if (formattedValue && typeof formattedValue === 'string') {
                        formattedValue = inputValue.replace(/[^0-9]+/g, '');
                        
                        //formattedValue = formattedValue.replace(/^0+/, '');
                        
                        if (!UtilService.isEmpty(maxLength)) {
                            maxLength = parseInt(maxLength);
                            formattedValue = formattedValue.substring(0, maxLength);
                        }

                        if (!UtilService.isEmpty(trimZero)) {
                            for (var i = 0; i < formattedValue.length; i++) {
                                if (formattedValue[i] !== '0') {
                                    break;
                                }
                            }
                            formattedValue = formattedValue.substring(i, maxLength);
                        }
                    }
                    if (formattedValue != inputValue) {
                        modelCtrl.$setViewValue(formattedValue);
                        modelCtrl.$render();
                    }
                    return formattedValue;
                };
                modelCtrl.$parsers.push(parser);
                modelCtrl.$formatters.push(parser);
            }
        };
    }]);
    module.exports = onlyNumberDir.name;
})();

/***/ }),

/***/ "./src/app/components/directives/startsWith/startsWith.filter.js":
/* unknown exports provided */
/* all exports used */
/*!***********************************************************************!*\
  !*** ./src/app/components/directives/startsWith/startsWith.filter.js ***!
  \***********************************************************************/
/***/ (function(module, exports) {

(function () {
    'use strict';
    var startsWithFilter = angular.module('app').filter('startsWith', function () {
        return function (arr, search) {
            if (!search.keyword) {
                return arr;
            }
            var newArr = arr.filter(function (element, index, array) {
                var include = false;
                for (var i = 0; i < search.props.length; i++) {
                    if (element.hasOwnProperty(search.props[i])) {
                        include = element[search.props[i]].toLowerCase().indexOf(search.keyword.toLowerCase()) === 0;
                    }
                    if (include) {
                        break;
                    }
                }
                return include;
            });
            return newArr;
        };
    });

    module.exports = startsWithFilter.name;
})();

/***/ }),

/***/ "./src/app/components/directives/trim/trim.directive.js":
/* unknown exports provided */
/* all exports used */
/*!**************************************************************!*\
  !*** ./src/app/components/directives/trim/trim.directive.js ***!
  \**************************************************************/
/***/ (function(module, exports) {

(function () {
    'use strict';
    var trimDir = angular.module('app').directive('trim', [function () {
        return {
            restrict: 'A',
            link: function (scope, elem, attrs) {
                angular.element(elem).on("blur", function (e) {
                    this.value = this.value.trim()
                    if (this.value) {
                        var strArr = this.value.split(' ');
                        var resStr = '';
                        angular.forEach(strArr, function (str) {
                            if (str) {
                                resStr = resStr + ' ' + str;
                            }
                        });
                        this.value = resStr.trim();
                    }
                });
            }
        };
    }]);

    module.exports = trimDir.name;
})();

/***/ }),

/***/ "./src/app/components/directives/ui-select-limit/ui-select-limit.directive.js":
/* unknown exports provided */
/* all exports used */
/*!************************************************************************************!*\
  !*** ./src/app/components/directives/ui-select-limit/ui-select-limit.directive.js ***!
  \************************************************************************************/
/***/ (function(module, exports) {

(function () {
    'use strict';
    var trimDir = angular.module('app').directive('uiSelectLimit', [function () {
        return {
            restrict: 'A',
            link: function (scope, element, attr) {
                var $uiSelect = angular.element(element[0].querySelector('.ui-select-search'));
                $uiSelect.attr("maxlength", attr.uiSelectLimit);
            }
        }
    }]);

    module.exports = trimDir.name;
})();


/***/ }),

/***/ "./src/app/components/directives/validation-msg/validation-msg.directive.html":
/* unknown exports provided */
/* all exports used */
/*!************************************************************************************!*\
  !*** ./src/app/components/directives/validation-msg/validation-msg.directive.html ***!
  \************************************************************************************/
/***/ (function(module, exports) {

module.exports = "<div class=msg-container> <p class=help-block> <span class=\"icon icon-triangle-error\" aria-hidden=true></span> <span class=val-msg aria-live=assertive> <ng-transclude></ng-transclude> </span> </p> </div>";

/***/ }),

/***/ "./src/app/components/directives/validation-msg/validation-msg.directive.js":
/* unknown exports provided */
/* all exports used */
/*!**********************************************************************************!*\
  !*** ./src/app/components/directives/validation-msg/validation-msg.directive.js ***!
  \**********************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

(function () {
    'use strict';
    __webpack_require__(/*! ./validation-msg.directive.scss */ "./src/app/components/directives/validation-msg/validation-msg.directive.scss");
    var valMsg = angular.module('app').directive('validationMsg', [function () {
        return {
            restrict: 'E',
            transclude: true,
            template: __webpack_require__(/*! ./validation-msg.directive.html */ "./src/app/components/directives/validation-msg/validation-msg.directive.html")
        };
    }]);

    module.exports = valMsg.name;
})();

/***/ }),

/***/ "./src/app/components/directives/validation-msg/validation-msg.directive.scss":
/* unknown exports provided */
/* all exports used */
/*!************************************************************************************!*\
  !*** ./src/app/components/directives/validation-msg/validation-msg.directive.scss ***!
  \************************************************************************************/
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/app/components/filters/trusted-url.filter.js":
/* unknown exports provided */
/* all exports used */
/*!**********************************************************!*\
  !*** ./src/app/components/filters/trusted-url.filter.js ***!
  \**********************************************************/
/***/ (function(module, exports) {

(function () {
    'use strict';
    var trustedUrlFilter = angular.module('app').filter('trustedUrl', ['$sce', function ($sce) {
        return function (url) {
            return $sce.trustAsResourceUrl(url);
        };
    }]);
    module.exports = trustedUrlFilter.name;
})();

/***/ }),

/***/ "./src/app/components/journey/common/step-footer.component.html":
/* unknown exports provided */
/* all exports used */
/*!**********************************************************************!*\
  !*** ./src/app/components/journey/common/step-footer.component.html ***!
  \**********************************************************************/
/***/ (function(module, exports) {

module.exports = "<div id=step-footer> <div class=\"col-md-12 col-sm-12 col-xs-12 no-padding-lr\"> <hr/> </div> <div id=footer-container> <div id=back-link-container> <span ng-if=$ctrl.showBack class=back-link aria-label=back ng-click=$ctrl.backCallback()></span> <button ng-if=$ctrl.showCancel class=\"button-outline cancel-button\" aria-label=cancel ng-click=$ctrl.cancelCallback()>Cancel</button> <div ng-if=\"$ctrl.showBack || $ctrl.showCancel\" class=bottom-spacer></div> </div> <div id=buttons-container> <button ng-if=$ctrl.showSave class=button-outline ng-click=$ctrl.saveCallback()>Save for Later <span class=screen-reader-only> Opens in an overlay</span> </button> <button ng-if=$ctrl.showExit class=button-primary ng-click=$ctrl.exitCallback() aria-label=Exit>Exit</button> <button ng-if=$ctrl.showBackToHome class=button-primary ng-click=$ctrl.backToHomeCallback() aria-label=\"Back to Homepage\">Back to Homepage</button> <button ng-if=$ctrl.showSkip class=button-outline ng-click=$ctrl.skipCallback()>Skip and upload Income documents <span ng-if=$ctrl.skipOverlay class=screen-reader-only> Opens in an overlay</span> </button> <button ng-if=$ctrl.showGenerateOtp class=button-primary ng-click=$ctrl.generateOtpCallback()>Generate OTP</button> <button id={{$ctrl.applyButtonId}} ng-if=$ctrl.showApply class=button-primary ng-disabled=$ctrl.applyDisabled ng-click=$ctrl.applyCallback() aria-label=\"Apply Now\">Apply Now</button> <button id={{$ctrl.vcipButtonId}} ng-if=$ctrl.showVcip class=button-primary ng-click=$ctrl.vcipCallback()>Proceed With Esign <span ng-if=$ctrl.vcipOverlay class=screen-reader-only> Opens in an overlay</span> </button> <button id={{$ctrl.wvcipButtonId}} ng-if=$ctrl.wshowVcip class=button-primary ng-click=$ctrl.wvcipCallback()>Proceed Without Esign <span ng-if=$ctrl.wvcipOverlay class=screen-reader-only> Opens in an overlay</span> </button> <button type=submit id={{$ctrl.continueButtonId}} ng-if=$ctrl.showContinue ng-disabled=$ctrl.continueDisabled class=button-primary ng-click=$ctrl.continueCallback()>Continue <span ng-if=$ctrl.continueOverlay class=screen-reader-only> Opens in an overlay</span> </button> <button type=submit id={{$ctrl.conButtonId}} ng-if=$ctrl.showCon ng-disabled=$ctrl.conDisabled class=button-primary ng-click=$ctrl.conCallback()>Continue <span ng-if=$ctrl.conOverlay class=screen-reader-only> Opens in an overlay</span> </button> <button id={{$ctrl.proceedButtonId}} ng-if=$ctrl.showProceed ng-disabled=$ctrl.proceedDisabled class=button-primary ng-click=$ctrl.proceedCallback() aria-label=Proceed>Proceed</button> <button ng-if=$ctrl.showClose class=button-primary ng-click=$ctrl.closeCallback() aria-label=Close>Close</button> <button type=submit ng-if=$ctrl.showVerify class=button-primary ng-click=$ctrl.verifyCallback()>Verify</button> <button ng-if=$ctrl.showAadhaarOtp class=button-primary ng-click=$ctrl.aadhaarOtpCallback()>Request OTP</button> <button ng-if=$ctrl.showBiometric class=button-primary ng-click=$ctrl.biometricCallback()>Proceed Biometric</button> <button ng-if=$ctrl.showSubmitOtp class=button-primary ng-click=$ctrl.submitOtpCallback()>Verify OTP</button> <button type=submit ng-if=$ctrl.showVerifyCode class=button-primary ng-click=$ctrl.verifyCodeCallback()>Send verification code</button> <button type=submit ng-if=$ctrl.showRetrigger class=button-primary ng-disabled=$ctrl.retriggerDisabled ng-click=$ctrl.retriggerCallback()>Resend</button> <button ng-if=$ctrl.showdownloadVcip class=button-primary ng-click=$ctrl.downloadCallback() aria-label=y>Y</button> </div> </div> </div>";

/***/ }),

/***/ "./src/app/components/journey/common/step-footer.component.js":
/* unknown exports provided */
/* all exports used */
/*!********************************************************************!*\
  !*** ./src/app/components/journey/common/step-footer.component.js ***!
  \********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

(function () {
    'use strict';
    var angular = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
    __webpack_require__(/*! ./step-footer.component.scss */ "./src/app/components/journey/common/step-footer.component.scss");

    var stepFooter = angular.module('app').component('stepFooter', {
        template: __webpack_require__(/*! ./step-footer.component.html */ "./src/app/components/journey/common/step-footer.component.html"),
        bindings: {
            showBack: '<',
            backCallback: '&',

            showCancel: '<',
            cancelCallback: '&',

            showSave: '<',
            saveCallback: '&',

            showExit: '<',
            exitCallback: '&',

            showBackToHome: '<',
            backToHomeCallback: '&',

            showSkip: '<',
            skipCallback: '&',
            skipOverlay: '<',

            showApply: '<',
            applyCallback: '&',
            applyButtonId: '@',
            applyDisabled: '=',

            showContinue: '<',
            continueCallback: '&',
            continueButtonId: '@',
            continueDisabled: '=',
            continueOverlay: '<',

            showCon: '<',
            conCallback: '&',
            conButtonId: '@',
            conDisabled: '=',
            conOverlay: '<',

            showProceed: '<',
            proceedCallback: '&',
            proceedButtonId: '@',
            proceedDisabled: '=',

            showClose: '<',
            closeCallback: '&',

            showGenerateOtp: '<',
            generateOtpCallback: '&',

            showVerify: '<',
            verifyCallback: '&',

            showRetrigger: '<',
            retriggerCallback: '&',
            retriggerDisabled: '=',
            
            showVerifyCode: '<',
            verifyCodeCallback: '&',

            showAadhaarOtp: '<',
            aadhaarOtpCallback: '&',

            showSubmitOtp: '<',
            submitOtpCallback: '&',

            showBiometric: '<',
            biometricCallback: '&',

            showVcip: '<',
            vcipCallback: '&',
            vcipOverlay: '<',
            vcipButtonId: '@',

            wshowVcip: '<',
            wvcipCallback: '&',
            wvcipOverlay: '<',
            wvcipButtonId: '@',

            showDownload: '<',
            downloadCallback: '&'
        },
        controller: [function () {
            var vm = this;

            vm.$onInit = function () {

            };
        }]
    });

    module.exports = stepFooter.name;
})();

/***/ }),

/***/ "./src/app/components/journey/common/step-footer.component.scss":
/* unknown exports provided */
/* all exports used */
/*!**********************************************************************!*\
  !*** ./src/app/components/journey/common/step-footer.component.scss ***!
  \**********************************************************************/
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/app/http-interceptor.js":
/* unknown exports provided */
/* all exports used */
/*!*************************************!*\
  !*** ./src/app/http-interceptor.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

(function () {
    'use strict';

    var angular = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");

    var httpIntrcptr = angular.module('app').factory('httpInterceptor', ['$q', '$location', '$rootScope', '$log', '$injector', function ($q, $location, $rootScope, $log, $injector) {
        return {
            request: function (config) {

                if (config && !config.hideLoader) {
                    //$rootScope.loading = true;
                    config.container = config.container || "#full-container";
                    var loadingText = "Loading Data";
                    var $el = angular.element(document.querySelector(config.container));
                    $el.addClass('loading-mask-container');
                    //$el.append('<span id="loading-mask-body"><div id="loading-mask"><img src="resources/images/mask/spinner.gif"></img></div></span>');
                    $el.append('<span id="loading-mask-body"><div class="loader"></div><div id="loading-mask"></div></span>');
                }
                return config || $q.when(config);
            },
            requestError: function (rejection) {
                if (rejection.config && rejection.config.container) {
                    //$rootScope.loading = true;
                    var $el = angular.element(document.querySelector(rejection.config.container));
                    if ($el) {
                        $el.removeClass('loading-mask-container');
                    }
                    var $mask = angular.element(document.querySelector('#loading-mask-body'))
                    if ($mask) {
                        $mask.remove();
                    }
                }
                //$rootScope.loading = false;
                //$log.error('Request error:', rejection);
                // $log('A request error has occured.');
                return $q.reject(rejection);
            },
            response: function (response) {
                if (response.config && response.config.container) {
                    //$rootScope.loading = true;
                    var $el = angular.element(document.querySelector(response.config.container));
                    if ($el) {
                        $el.removeClass('loading-mask-container');
                    }
                    var $mask = angular.element(document.querySelector('#loading-mask-body'))
                    if ($mask) {
                        $mask.remove();
                    }
                }

                if (response && response.data && response.data.hasOwnProperty('errorCode')) {
                    if (response.data.errorCode === 4001 || response.data.errorCode === 4002) {
                        // Access Denied
                        $injector.get('$state').go('app.error');
                        return $q.reject(response);
                    } else if (response.data.errorCode === 3) {
                        // Session timed out before application id creation
                        $injector.get('$state').go('app.journey.s1-cards');
                        return $q.reject(response);
                    } else if (response.data.errorCode === 4) {
                        // Session timed out
                        $rootScope.sessionError = true;
                        var isStaff = $injector.get('appState').isStaffJourney();
                        if (isStaff) {
                            $injector.get('$state').go('app.app-retrieval-staff');
                        } else {
                            $injector.get('$state').go('app.app-retrieval');
                        }
                        return $q.reject(response);
                    } else {
                        return response || $q.when(response);
                    }
                } else {
                    return response || $q.when(response);
                }
            },
            responseError: function (rejection) {
                if (rejection.config && rejection.config.container) {
                    //$rootScope.loading = true;
                    var $el = angular.element(document.querySelector(rejection.config.container));
                    if ($el) {
                        $el.removeClass('loading-mask-container');
                    }
                    var $mask = angular.element(document.querySelector('#loading-mask-body'))
                    if ($mask) {
                        $mask.remove();
                    }
                }
                //$rootScope.loading = false;
                //$log.error('Response error:', rejection);
                // $log('A response error has occured.');
                return $q.reject(rejection);
            },
        };
    }]);

    module.exports = httpIntrcptr.name;
})();

/***/ }),

/***/ "./src/app/route-config.js":
/* unknown exports provided */
/* all exports used */
/*!*********************************!*\
  !*** ./src/app/route-config.js ***!
  \*********************************/
/***/ (function(module, exports, __webpack_require__) {

(function () {
    'use strict';
    var angular = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
    let key = "";

    var routeConfig = function ($ocLazyLoadProvider, $stateProvider, $urlServiceProvider, $locationProvider) {
        $urlServiceProvider.rules.otherwise({
            state: 'app'
        });

        // $locationProvider.html5Mode({
        //     enabled: true,
        //     requireBase: true
        // });

        $stateProvider.state('app', {
            url: '/app',
            redirectTo: 'app.journey.s1-cards'
        });

        $stateProvider.state('app.start-journey', {
            url: '/apply-for-credit-card?form.source&form.campaign_id&WT.ac&gclid&card&isStaff',
            resolve: {
                load: ['$rootScope', '$http', '$state', '$stateParams', 'CONFIG', 'appState', 'UtilService', 'routingService', function ($rootScope, $http, $state, $stateParams, CONFIG, appState, UtilService, routingService) {
                    appState.clearAll();
                    var originObj = {
                        formSource: $stateParams['form.source'] || '',
                        formCampaignId: $stateParams['form.campaign_id'] || '',
                        wtAc: $stateParams['WT.ac'] || '',
                        gclId: $stateParams['gclid'] || 'NA'
                    },
                    card = $stateParams['card'] || '',
                    isStaff = $stateParams['isStaff'] || ''
                    // console.log("urlParam formCampaignId==", originObj.formCampaignId);
                    // console.log("urlParam= formSource=", originObj.formSource);
                    // console.log("urlParam wtAc==", originObj.wtAc);
                    // console.log("urlParam gclId==", originObj.gclId + "and card is==", card);
                    console.log("issatff  is==", isStaff);


                    console.log("Document Referrer: " + document.referrer);
                    var isHsbc = document.referrer.indexOf('.hsbc.co.in') != -1 || document.referrer.indexOf('.hsbc.com') != -1;
                    if (!UtilService.isEmpty(originObj.formSource) && (/[^a-zA-Z0-9_.]+/g.test(originObj.formSource))) {
                        originObj.formSource = isHsbc ? 'Organic' : 'Paid';
                    } else {
                        if (isHsbc && UtilService.isEmpty(originObj.formSource)) {
                            originObj.formSource = "Organic";
                        }
                        if (!isHsbc && UtilService.isEmpty(originObj.formSource)) {
                            originObj.formSource = "Paid";
                        }
                    }

                    if (originObj.formSource.length > 50) {
                        originObj.formSource = originObj.formSource.substring(0, 50);
                    }

                    if (!UtilService.isEmpty(originObj.formCampaignId) && (/[^a-zA-Z0-9_.]+/g.test(originObj.formCampaignId))) {
                        originObj.formCampaignId = isHsbc ? 'Organic' : 'Paid';
                    } else {
                        if (isHsbc && UtilService.isEmpty(originObj.formCampaignId)) {
                            originObj.formCampaignId = "Organic";
                        }
                        if (!isHsbc && UtilService.isEmpty(originObj.formCampaignId)) {
                            originObj.formCampaignId = "Paid";
                        }
                    }

                    if (originObj.formCampaignId.length > 50) {
                        originObj.formCampaignId = originObj.formCampaignId.substring(0, 50);
                    }

                    if (!UtilService.isEmpty(originObj.wtAc) && (/[^a-zA-Z0-9_.]+/g.test(originObj.wtAc))) {
                        originObj.wtAc = isHsbc ? 'Organic' : 'Paid';
                    } else {
                        if (isHsbc && UtilService.isEmpty(originObj.wtAc)) {
                            originObj.wtAc = "Organic";
                        }
                        if (!isHsbc && UtilService.isEmpty(originObj.wtAc)) {
                            originObj.wtAc = "Paid";
                        }
                    }

                    if (originObj.wtAc.length > 100) {
                        originObj.wtAc = originObj.wtAc.substring(0, 100);
                    }

                    if (/[^a-zA-Z0-9-_.]+/g.test(originObj.gclId)) {
                        originObj.gclId = 'NA'
                    }

                    if (originObj.gclId.length > 100) {
                        originObj.gclId = originObj.gclId.substring(0, 100);
                    }
                    console.log(originObj);

                    // if ($rootScope.integrationsActive) {
                    //     $http.post(CONFIG.apiUrl + '/urlparam/save', JSON.stringify(originObj)).then(function (response) {
                    //         if (response.data && response.data.urlParamId) {
                    //             appState.setUrlParamId(response.data.urlParamId);
                    //         }
                    //         $state.go('app.journey.s1-cards', { skip: true });
                    //     }, function (error) {
                    //         $state.go('app.journey');
                    //     });
                    // } else {
                    //     appState.setUrlParamId('20');
                    //     $state.go('app.journey.s1-cards', { skip: true });
                    // }
                    appState.setStaffJourney(false);
                    if(isStaff == "true"){
                        console.log("in If")
                        appState.setStaffJourney(true);
                    }
                    routingService.saveUrlParams(originObj).then(function (result) {
                        if (card.toLowerCase() == 'vpc' || card.toLowerCase() == 'svc' || card.toLowerCase() == 'cbc' || card.toLowerCase() == 'mjy') {
                            $state.go('app.journey.s1-cards', { skip: true, card: card.toUpperCase() });
                        } else {
                            $state.go("app.journey.lead-generation", { 'cardKey': card });
                        }
                        // $state.go('app.journey.s1-cards', { skip: false });
                    });
                }]
            }
        });

        $stateProvider.state('app.start-ekycPage', {
            url: '/startEkyc?',
            resolve: {
                load: ['$rootScope', '$http', '$state', '$stateParams', 'CONFIG', 'appState', 'UtilService', 'routingService', function ($rootScope, $http, $state, $stateParams, CONFIG, appState, UtilService, routingService) {
                    appState.clearAll();
                    let paramStringEnc = window.location.href.split('?')[1].replaceAll('%2F', '/').replaceAll('%20', '+').replaceAll('%3D', '=');
                    // console.log("params_arr==", paramStringEnc);
                    let application = paramStringEnc.substring(0,1);
                    //console.log("applicationId=="+application);
                    //console.log(typeof(application));
                    // var securityParams = {
                    //     robocheck: vm.robocheck ? vm.robocheck : ''
                    // };
                    var reqData = {
                        applicationNumber : application
                        //encDtring : paramStringEnc.substring(1,paramStringEnc.length)
                    }

                    routingService.getDecryptedString(reqData).then(function (result) {
                        //console.log("data from routingService--key", JSON.stringify(result));
                        if (result.success) {
                            //console.log("if Part")
                            key = result.masterKey;
                            var paramString = UtilService.decrypt(paramStringEnc.substring(1,paramStringEnc.length), key);
                            let params_arr = paramString.split('&');
                            //console.log("params_arr==", params_arr);
                            var originObjForBB = {
                                formSource: params_arr[0].split('=')[1],
                                formCampaignId: params_arr[1].split('=')[1],
                                wtAc: params_arr[2].split('=')[1].replaceAll('%2F', '/'),
                                gclId: ""
                            }
                            //console.log("Document Referrer: " + document.referrer);
                            // console.log("reqData ==", originObjForBB);
                            routingService.saveUrlParams(originObjForBB).then(function (result) {
                                //console.log("data from routingService.saveUrlParams--", result);
                                $state.go("app.ekycPage", originObjForBB);
                            });
                        }else{
                            // console.log("else Part")
                         alert(`We did not found key for this request. Please check the link.`);
                         window.location.href = "https://www.hsbc.co.in/credit-cards/"

                        //    var paramString = UtilService.decrypt(paramStringEnc.substring(1,paramStringEnc.length), "uPjG?^HGl(jZ!v");
                        //    console.log("URL String decoded==", paramString);

                        //    let params_arr = paramString.split('&');
                        //    console.log("params_arr==", params_arr);
                        //    var originObjForBB = {
                        //        formSource: params_arr[0].split('=')[1],
                        //        formCampaignId: params_arr[1].split('=')[1],
                        //        wtAc: params_arr[2].split('=')[1].replaceAll('%2F', '/'),
                        //        gclId: ""
                        //    }
                        //    //console.log("Document Referrer: " + document.referrer);
                        //    console.log("reqData ==", originObjForBB);
                        //    routingService.saveUrlParams(originObjForBB).then(function (result) {
                        //        console.log("data from routingService.saveUrlParams--", result);
                        //        $state.go("app.ekycPage", originObjForBB);
                        //    });
                        }
                    });
                }]
            }
        });

        $stateProvider.state('app.start-ekycPaisaBazarPage', { //added this function for paisa bazaar @akshaypise_aug24
            
            url: '/startPaisaBazarEkyc?',
            resolve: {
                load: ['$rootScope', '$http', '$state', '$stateParams', 'CONFIG', 'appState', 'UtilService', 'routingService', function ($rootScope, $http, $state, $stateParams, CONFIG, appState, UtilService, routingService) {
                    appState.clearAll();
                    let paramStringEnc = window.location.href.split('?')[1].replaceAll('%2F', '/').replaceAll('%20', '+').replaceAll('%3D', '=');
                    console.log("window.location.href==", window.location.href);
                    // console.log("params_arr==", paramStringEnc);
                    let application = paramStringEnc.substring(0,1);
                    // console.log("applicationId=="+application);
                    //console.log(typeof(application));

                    var reqData = {
                        applicationNumber : application
                        //encDtring : paramStringEnc.substring(1,paramStringEnc.length)
                    }
                    // console.log("reqData getDecryptedString",reqData);

                    routingService.getDecryptedStringPB(reqData).then(function (result) {
                        console.log("result getDecryptedString",result.success);
                        //console.log("data from routingService--key", JSON.stringify(result));
                        if (result.success) {
                            // console.log("if Part",paramStringEnc);
                            key = result.masterKey;
                            var paramString = UtilService.decrypt(paramStringEnc.substring(1,paramStringEnc.length), key);
                    
                            
                            // console.log('paramString',paramString);
                            // from=PaisaBzrEkyc&originIndex=PaisaBzrProcess&FRN=PBRKT/MUM/PBZ/0000001(S@[|6cQ<~F$Zap

                            let params_arr = paramString.split('&');
                            console.log("params_arr==", params_arr);
                            var originObjForPB = {
                                formSource: params_arr[0].split('=')[1],
                                formCampaignId: params_arr[1].split('=')[1],
                                wtAc: params_arr[2].split('=')[1].replaceAll('%2F', '/'),
                                gclId: ""
                            }
                            //console.log("Document Referrer: " + document.referrer);
                            console.log("reqData saveUrlParams==", originObjForPB);
                            routingService.saveUrlParams(originObjForPB).then(function (result) {
                                console.log("result saveUrlParams==", result);
                                //console.log("data from routingService.saveUrlParams--", result);
                                $state.go("app.ekycPaisaBazarPage", originObjForPB);
                            });
                        }else{
                            // console.log("else Part")
                         alert(`We did not found key for this request. Please check the link.`);
                         window.location.href = "https://www.hsbc.co.in/credit-cards/"
                        }
                    });
                }]
            }
        });

      
        $stateProvider.state('app.staff-journey', {
            url: '/staff-journey',
            data: {
                pageTitle: 'Staff journey'
            },
            resolve: {
                load: ['$rootScope', '$state', '$timeout', 'appState', 'UtilService', function ($rootScope, $state, $timeout, appState, UtilService) {
                    appState.clearAll();
                    var platform = UtilService.isStaffPlatform();
                    if (platform) {
                        appState.setStaffJourney(true);
                        $rootScope.$broadcast('hide-FRN');
                        $timeout(function () {
                            $state.go('app.journey.s1-cards', { skip: false });
                        });
                    } else {
                        appState.setStaffJourney(false);
                        window.location.href = "resources/templates/staff-unsupported-env.html";
                    }
                }]
            }
        });

        $stateProvider.state('app.journey', {
            url: '/journey',
            redirectTo: 'app.journey.s1-cards',
            component: 'journey',
            data: {
                requiredAuth: false
            },
            resolve: {
                lazyLoad: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    __webpack_require__.e/* require.ensure */(6).then((function () {/* WEBPACK VAR INJECTION */(function(module) {
                        var module = __webpack_require__(/*! ./components/journey/journey.module */ "./src/app/components/journey/journey.module.js");
                        $ocLazyLoad.load({
                            name: module
                        });
                        deferred.resolve(module);
                    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../~/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
                    return deferred.promise;
                }]
            }
        });

        $stateProvider.state('app.journey.otp-verify', {
            url: '/otp/resume',
            component: 'otpVerify',
            data: {
                pageTitle: 'Verify one time password'
            },
            params: {
                otpData: null
            },
            resolve: {
                lazyLoad: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    __webpack_require__.e/* require.ensure */(5).then((function () {/* WEBPACK VAR INJECTION */(function(module) {
                        var module = __webpack_require__(/*! ./components/journey/otp-auth/otp-verify/otp-verify.component */ "./src/app/components/journey/otp-auth/otp-verify/otp-verify.component.js");
                        $ocLazyLoad.load({
                            name: module
                        });
                        deferred.resolve(module);
                    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../~/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
                    return deferred.promise;
                }],
                handleBack: ['$q', 'appState', '$state', function ($q, appState, $state) {
                    var deferred = $q.defer();
                    var data = appState.getApplicationData();
                    if (data && data.primaryApplicant && data.primaryApplicant.arn) {
                        if ($state.current.name == 'app.journey.signature' || $state.current.name == 'app.app-retrieval') {
                            deferred.resolve(true);
                        } else {
                            var route = appState.getCurrentRoute();
                            deferred.resolve(false);
                            if (route) {
                                $state.go(route);
                            } else {
                                $state.go('app.journey.s1-cards');
                            }
                        }
                    } else {
                        if ($state.current.name === 'app.journey.s2-qualifying' || ($state.current.name == 'app.app-retrieval' && data && data.stateData)) {
                            deferred.resolve(true);
                        } else {
                            var route = appState.getCurrentRoute();
                            deferred.resolve(false);
                            if (route) {
                                $state.go(route);
                            } else {
                                $state.go('app.journey.s1-cards');
                            }
                        }
                    }
                    return deferred.promise;
                }]
            }
        });

        $stateProvider.state('app.journey.lead-generation', {
            url: '/lead-generation-:cardKey',
            component: 'leadGeneration',
            data: {
                pageTitle: 'Lead generation'
            },
            params: {
                leadData: null,
                cardKey: null
            },
            resolve: {
                lazyLoad: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    __webpack_require__.e/* require.ensure */(18).then((function () {/* WEBPACK VAR INJECTION */(function(module) {
                        var module = __webpack_require__(/*! ./components/journey/lead-generation/lead-generation.component */ "./src/app/components/journey/lead-generation/lead-generation.component.js");
                        $ocLazyLoad.load({
                            name: module
                        });
                        deferred.resolve(module);
                    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../~/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
                    return deferred.promise;
                }]
            }
        });

        $stateProvider.state('app.lead-gen-ack', {
            url: '/acknowledgement',
            component: 'leadGenAck',
            data: {
                pageTitle: 'Lead generation acknowledgement'
            },
            params: {
                ackData: null
            },
            resolve: {
                lazyLoad: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    __webpack_require__.e/* require.ensure */(26).then((function () {/* WEBPACK VAR INJECTION */(function(module) {
                        var module = __webpack_require__(/*! ./components/journey/lead-generation/lead-gen-ack/lead-gen-ack.component */ "./src/app/components/journey/lead-generation/lead-gen-ack/lead-gen-ack.component.js");
                        $ocLazyLoad.load({
                            name: module
                        });
                        deferred.resolve(module);
                    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../~/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
                    return deferred.promise;
                }]
            }
        });

        $stateProvider.state('app.save-exit', {
            url: '/save-:cardKey',
            component: 'saveExit',
            data: {
                pageTitle: 'Application saved'
            },
            params: {
                saveData: null
            },
            resolve: {
                lazyLoad: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    __webpack_require__.e/* require.ensure */(30).then((function () {/* WEBPACK VAR INJECTION */(function(module) {
                        var module = __webpack_require__(/*! ./components/common/save-exit/save-exit.component */ "./src/app/components/common/save-exit/save-exit.component.js");
                        $ocLazyLoad.load({
                            name: module
                        });
                        deferred.resolve(module);
                    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../~/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
                    return deferred.promise;
                }]
            }
        });

        $stateProvider.state('app.complete-ack', {
            url: '/thank-you-:cardKey',
            component: 'completeAck',
            data: {
                pageTitle: 'Application acknowledgement: Step 6'
            },
            params: {
                saveData: null
            },
            resolve: {
                lazyLoad: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    __webpack_require__.e/* require.ensure */(22).then((function () {/* WEBPACK VAR INJECTION */(function(module) {
                        var module = __webpack_require__(/*! ./components/complete-ack/complete-ack.component */ "./src/app/components/complete-ack/complete-ack.component.js");
                        $ocLazyLoad.load({
                            name: module
                        });
                        deferred.resolve(module);
                    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../~/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
                    return deferred.promise;
                }]
            }
        });

        $stateProvider.state('app.final-thankyou', {
            url: '/complete-ack:cardKey',
            component: 'thankYouPage',
            data: {
                pageTitle: 'Application acknowledgement: Step 6'
            },
            params: {
                saveData: null
            },
            resolve: {
                lazyLoad: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    __webpack_require__.e/* require.ensure */(21).then((function () {/* WEBPACK VAR INJECTION */(function(module) {
                        var module = __webpack_require__(/*! ./components/final-thankyou/final-thankyou.component */ "./src/app/components/final-thankyou/final-thankyou.component.js");
                        $ocLazyLoad.load({
                            name: module
                        });
                        deferred.resolve(module);
                    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../~/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
                    return deferred.promise;
                }]
            }
        });

        $stateProvider.state('app.ekycPage', {
            url: '/doEkyc',
            component: 'ekycPage',
            data: {
                pageTitle: 'EKYC'
            },
            params: {
                saveData: null
            },
            resolve: {
                lazyLoad: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                        var deferred = $q.defer();
                        __webpack_require__.e/* require.ensure */(10).then((function () {/* WEBPACK VAR INJECTION */(function(module) {
                            var module = __webpack_require__(/*! ./components/ekycPage/ekycPage.component */ "./src/app/components/ekycPage/ekycPage.component.js");
                            $ocLazyLoad.load({
                                name: module
                            });
                            deferred.resolve(module);
                        
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../~/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
                        return deferred.promise;
                }]
            }
        });

        $stateProvider.state('app.ekycPaisaBazarPage', { //added this function for paisa bazaar for get key @akshaypise_aug24
            url: '/doPaisaBazarEkyc',
            component: 'ekycPaisaBazarPage',
            data: {
                pageTitle: 'EKYC'
            },
            params: {
                saveData: null
            },
            resolve: {
                lazyLoad: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                        var deferred = $q.defer();
                        __webpack_require__.e/* require.ensure */(8).then((function () {/* WEBPACK VAR INJECTION */(function(module) {
                            var module = __webpack_require__(/*! ./components/paiseBazar/paiseBazar.component */ "./src/app/components/paiseBazar/paiseBazar.component.js");
                            $ocLazyLoad.load({
                                name: module
                            });
                            deferred.resolve(module);
                        
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../~/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
                        return deferred.promise;
                }]
            }
        });

        $stateProvider.state('app.app-retrieval', {
            url: '/retrieve',
            component: 'retrieval',
            data: {
                pageTitle: 'Retrieve existing application'
            },
            resolve: {
                lazyLoad: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    __webpack_require__.e/* require.ensure */(20).then((function () {/* WEBPACK VAR INJECTION */(function(module) {
                        var module = __webpack_require__(/*! ./components/journey/app-retrieval/app-retrieval.component */ "./src/app/components/journey/app-retrieval/app-retrieval.component.js");
                        $ocLazyLoad.load({
                            name: module
                        });
                        deferred.resolve(module);
                    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../~/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
                    return deferred.promise;
                }]
            }
        });

        $stateProvider.state('app.app-retrieval-staff', {
            url: '/retrieve-staff',
            component: 'retrievalStaff',
            data: {
                pageTitle: 'Retrieve existing application created by staff'
            },
            resolve: {
                lazyLoad: ['$q', '$ocLazyLoad', 'UtilService', function ($q, $ocLazyLoad, UtilService) {
                    var isStaffPlatform = UtilService.isStaffPlatform();
                    if (isStaffPlatform) {
                        var deferred = $q.defer();
                        __webpack_require__.e/* require.ensure */(23).then((function () {/* WEBPACK VAR INJECTION */(function(module) {
                            var module = __webpack_require__(/*! ./components/app-retrieval-staff/app-retrieval-staff.component */ "./src/app/components/app-retrieval-staff/app-retrieval-staff.component.js");
                            $ocLazyLoad.load({
                                name: module
                            });
                            deferred.resolve(module);
                        
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../~/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
                        return deferred.promise;
                    } else {
                        // alert("not OK");
                        window.location.href = "resources/templates/staff-unsupported-env.html";
                    }
                }]
            }
        });

        $stateProvider.state('app.technicalError', {
            url: '/technicalError',
            component: 'technicalError',
            data: {
                pageTitle: 'End of journey'
            },
            resolve: {
                lazyLoad: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    __webpack_require__.e/* require.ensure */(28).then((function () {/* WEBPACK VAR INJECTION */(function(module) {
                        var module = __webpack_require__(/*! ./components/common/technicalError/technicalError.component */ "./src/app/components/common/technicalError/technicalError.component.js");
                        $ocLazyLoad.load({
                            name: module
                        });
                        deferred.resolve(module);
                    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../~/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
                    return deferred.promise;
                }]
            }
        });

        $stateProvider.state('app.error', {
            url: '/error',
            component: 'globalExceptionHandler',
            data: {
                pageTitle: 'End of journey'
            },
            resolve: {
                lazyLoad: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    __webpack_require__.e/* require.ensure */(33).then((function () {/* WEBPACK VAR INJECTION */(function(module) {
                        var module = __webpack_require__(/*! ./components/common/global-exception-handler/global-exception-handler.component */ "./src/app/components/common/global-exception-handler/global-exception-handler.component.js");
                        $ocLazyLoad.load({
                            name: module
                        });
                        deferred.resolve(module);
                    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../~/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
                    return deferred.promise;
                }]
            }
        });

        $stateProvider.state('app.journey.s1-cards', {
            url: '/cards',
            component: 'step1',
            params: {
                skip: false,
                card: null
            },
            data: {
                pageTitle: 'Select your card: Step 1'
            },
            resolve: {
                lazyLoad: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    __webpack_require__.e/* require.ensure */(15).then((function () {/* WEBPACK VAR INJECTION */(function(module) {
                        var module = __webpack_require__(/*! ./components/journey/step1/step1.component */ "./src/app/components/journey/step1/step1.component.js");
                        $ocLazyLoad.load({
                            name: module
                        });
                        deferred.resolve(module);
                    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../~/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
                    return deferred.promise;
                }],
                handleBack: ['$rootScope', '$q', function ($rootScope, $q) {
                    // INM-2352: Prevent transition on browser back when e-KYC verification call is going on
                    var deferred = $q.defer();
                    if ($rootScope.loadingKYC) {
                        deferred.reject('Invalid transition');
                    } else {
                        deferred.resolve(false);
                    }
                    return deferred.promise;
                }]
            }
        });

        $stateProvider.state('app.journey.s2-contact-details', {
            // url: '/contact-details',
            url: '/contact-details-:cardKey',
            component: 'contactDetails',
            data: {
                pageTitle: 'Contact details: Step 2'
            },
            resolve: {
                lazyLoad: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    __webpack_require__.e/* require.ensure */(19).then((function () {
                        var comp = __webpack_require__(/*! ./components/journey/contact-details/contact-details.component */ "./src/app/components/journey/contact-details/contact-details.component.js");
                        $ocLazyLoad.load({
                            name: comp
                        });
                        deferred.resolve(comp);
                    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
                    return deferred.promise;
                }],
                handleBack: ['$q', '$state', 'appState', function ($q, $state, appState) {
                    var deferred = $q.defer();
                    var data = appState.getApplicationData();
                    if (data && data.primaryApplicant && data.primaryApplicant.card) {
                        if (data.primaryApplicant.dipDetails && data.primaryApplicant.dipDetails.dipArn) {
                            deferred.reject('Invalid transition');
                        } else {
                            deferred.resolve(true);
                        }
                    } else {
                        deferred.resolve(false);
                        $state.go('app.journey.s1-cards');
                    }
                    return deferred.promise;
                }]
            }
        });

        $stateProvider.state('app.journey.s2-qualifying', {
            url: '/qualifying',
            component: 'step2',
            params: {
                step2data: null
            },
            data: {
                pageTitle: 'Qualifying question: Step 2'
            },
            resolve: {
                lazyLoad: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    __webpack_require__.e/* require.ensure */(14).then((function () {/* WEBPACK VAR INJECTION */(function(module) {
                        var module = __webpack_require__(/*! ./components/journey/step2/step2.component */ "./src/app/components/journey/step2/step2.component.js");
                        $ocLazyLoad.load({
                            name: module
                        });
                        deferred.resolve(module);
                    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../~/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
                    return deferred.promise;
                }],
                handleBack: ['$rootScope', '$q', '$state', 'appState', function ($rootScope, $q, $state, appState) {
                    var deferred = $q.defer();
                    var data = appState.getApplicationData();
                    if (data && data.primaryApplicant && data.primaryApplicant.card) {
                        if (data.primaryApplicant.dipDetails && data.primaryApplicant.dipDetails.dipArn) {
                            deferred.reject('Invalid transition');
                        } else if ($rootScope.loadingKYC) {
                            deferred.reject('Invalid transition');
                        } else {
                            deferred.resolve(true);
                        }
                    } else {
                        deferred.resolve(false);
                        $state.go('app.journey.s1-cards');
                    }
                    return deferred.promise;
                }]
            }
        });

        $stateProvider.state('app.journey.s3-personalDetails', {
            url: '/personal-details-:cardKey',
            component: 'step3',
            params: {
                stateData: null
            },
            data: {
                pageTitle: 'Personal details: Step 2'
            },
            resolve: {
                lazyLoad: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    __webpack_require__.e/* require.ensure */(0).then((function () {/* WEBPACK VAR INJECTION */(function(module) {
                        var module = __webpack_require__(/*! ./components/journey/step3/step3.component */ "./src/app/components/journey/step3/step3.component.js");
                        $ocLazyLoad.load({
                            name: module
                        });
                        deferred.resolve(module);
                    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../~/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
                    return deferred.promise;
                }],
                handleBack: ['$q', '$state', 'appState', function ($q, $state, appState) {
                    var deferred = $q.defer();
                    var data = appState.getApplicationData();
                    // For new journey --> appState.getContactDetails() != null
                    // For retrieval journey --> data.primaryApplicant.arn != null
                    if (data && data.primaryApplicant && data.primaryApplicant.card && (appState.getContactDetails() != null || data.primaryApplicant.arn != null)) {
                        if (data.primaryApplicant.dipDetails && data.primaryApplicant.dipDetails.dipArn) {
                            deferred.reject('Invalid transition');
                        } else {
                            deferred.resolve(true);
                        }
                    } else if (data && data.primaryApplicant && data.primaryApplicant.card) {
                        deferred.resolve(false);
                        //$state.go('app.journey.s2-contact-details');
                        $state.go('app.journey.s2-contact-details', { 'cardKey': data.primaryApplicant.card.key });
                    } else {
                        deferred.resolve(false);
                        $state.go('app.journey.s1-cards');
                    }
                    return deferred.promise;
                }]
            }
        });

        $stateProvider.state('app.non-sourcing-city', {
            url: '/non-sourcing-city-:cardKey',
            component: 'nonSourcingCity',
            data: {
                pageTitle: 'End of journey'
            },
            resolve: {
                lazyLoad: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    __webpack_require__.e/* require.ensure */(24).then((function () {/* WEBPACK VAR INJECTION */(function(module) {
                        var module = __webpack_require__(/*! ./components/non-sourcing-city/non-sourcing-city.component */ "./src/app/components/non-sourcing-city/non-sourcing-city.component.js");
                        $ocLazyLoad.load({
                            name: module
                        });
                        deferred.resolve(module);
                    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../~/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
                    return deferred.promise;
                }]
            }
        });

        /*$stateProvider.state('app.journey.s4-personalDemographic', {
            url: '/personal-demographic',
            component: 'step4',
            data: {
                pageTitle: 'Personal demographics: Step 2'
            },
            resolve: {
                lazyLoad: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    require.ensure([], function () {
                        var module = require('./components/journey/step4/step4.component');
                        $ocLazyLoad.load({
                            name: module
                        });
                        deferred.resolve(module);
                    });
                    return deferred.promise;
                }],
                handleBack: ['$q', '$state', 'appState', function ($q, $state, appState) {
                    var deferred = $q.defer();
                    var data = appState.getApplicationData();
                    if (data && data.primaryApplicant && data.primaryApplicant.arn) {
                        if (data.primaryApplicant.dipDetails && data.primaryApplicant.dipDetails.dipArn || !data.primaryApplicant.cardReason) {
                            var route = appState.getCurrentRoute();
                            deferred.resolve(false);
                            if (route) {
                                $state.go(route);
                            } else {
                                $state.go('app.journey.s1-cards');
                            }
                        } else {
                            deferred.resolve(true);
                        }
                    } else {
                        deferred.resolve(false);
                        $state.go('app.journey.s1-cards');
                    }
                    return deferred.promise;
                }]
            }
        });*/

        $stateProvider.state('app.journey.s5-employmentDetails', {
            url: '/employment-details-:cardKey',
            component: 'step5',
            data: {
                pageTitle: 'Employment status: Step 3'
            },
            resolve: {
                lazyLoad: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    __webpack_require__.e/* require.ensure */(4).then((function () {/* WEBPACK VAR INJECTION */(function(module) {
                        var module = __webpack_require__(/*! ./components/journey/step5/step5.component */ "./src/app/components/journey/step5/step5.component.js");
                        $ocLazyLoad.load({
                            name: module
                        });
                        deferred.resolve(module);
                    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../~/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
                    return deferred.promise;
                }],
                handleBack: ['$q', '$state', 'appState', 'UtilService', function ($q, $state, appState, UtilService) {
                    var deferred = $q.defer();
                    var data = appState.getApplicationData();
                    if (data && data.primaryApplicant && data.primaryApplicant.arn) {
                        if (data.primaryApplicant.dipDetails && data.primaryApplicant.dipDetails.dipArn || UtilService.isEmpty(data.primaryApplicant.demographicDetails)) {
                            var route = appState.getCurrentRoute();
                            deferred.resolve(false);
                            if (route) {
                                $state.go(route);
                            } else {
                                $state.go('app.journey.s1-cards');
                            }
                        } else {
                            deferred.resolve(true);
                        }
                    } else {
                        deferred.resolve(false);
                        $state.go('app.journey.s1-cards');
                    }
                    return deferred.promise;
                }]
            }
        });

        $stateProvider.state('app.pan-mismatch', {
            url: '/pan-mismatch-:cardKey',
            component: 'panMismatch',
            data: {
                pageTitle: 'End of journey'
            },
            resolve: {
                lazyLoad: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    __webpack_require__.e/* require.ensure */(40).then((function () {/* WEBPACK VAR INJECTION */(function(module) {
                        var module = __webpack_require__(/*! ./components/journey/step5/pan-mismatch/pan-mismatch.component */ "./src/app/components/journey/step5/pan-mismatch/pan-mismatch.component.js");
                        $ocLazyLoad.load({
                            name: module
                        });
                        deferred.resolve(module);
                    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../~/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
                    return deferred.promise;
                }]
            }
        });

        $stateProvider.state('app.journey.s6-incomeDetails', {
            url: '/income-details-:cardKey',
            component: 'step6',
            data: {
                pageTitle: 'Employment details: Step 3'
            },
            resolve: {
                lazyLoad: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    __webpack_require__.e/* require.ensure */(1).then((function () {/* WEBPACK VAR INJECTION */(function(module) {
                        var module = __webpack_require__(/*! ./components/journey/step6/step6.component */ "./src/app/components/journey/step6/step6.component.js");
                        $ocLazyLoad.load({
                            name: module
                        });
                        deferred.resolve(module);
                    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../~/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
                    return deferred.promise;
                }],
                handleBack: ['$q', '$state', 'appState', 'UtilService', function ($q, $state, appState, UtilService) {
                    var deferred = $q.defer();
                    var data = appState.getApplicationData();
                    if (data && data.primaryApplicant && data.primaryApplicant.arn) {
                        if (data.primaryApplicant.dipDetails && data.primaryApplicant.dipDetails.dipArn || UtilService.isEmpty(data.primaryApplicant.employmentStatus)) {
                            var route = appState.getCurrentRoute();
                            deferred.resolve(false);
                            if (route) {
                                $state.go(route);
                            } else {
                                $state.go('app.journey.s1-cards');
                            }
                        } else {
                            deferred.resolve(true);
                        }
                    } else {
                        deferred.resolve(false);
                        $state.go('app.journey.s1-cards');
                    }
                    return deferred.promise;
                }]
            }
        });

        $stateProvider.state('app.office-non-sourcing-city', {
            url: '/office-non-sourcing-city-:cardKey',
            component: 'officeNonSourcingCity',
            data: {
                pageTitle: 'Income details: End of journey'
            },
            resolve: {
                lazyLoad: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    __webpack_require__.e/* require.ensure */(38).then((function () {/* WEBPACK VAR INJECTION */(function(module) {
                        var module = __webpack_require__(/*! ./components/journey/step6/office-non-sourcing-city/office-non-sourcing-city.component */ "./src/app/components/journey/step6/office-non-sourcing-city/office-non-sourcing-city.component.js");
                        $ocLazyLoad.load({
                            name: module
                        });
                        deferred.resolve(module);
                    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../~/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
                    return deferred.promise;
                }]
            }
        });

        $stateProvider.state('app.office-city-mismatch', {
            url: '/office-city-mismatch-:cardKey',
            component: 'officeCityMismatch',
            data: {
                pageTitle: 'Income details: End of journey'
            },
            resolve: {
                lazyLoad: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    __webpack_require__.e/* require.ensure */(39).then((function () {/* WEBPACK VAR INJECTION */(function(module) {
                        var module = __webpack_require__(/*! ./components/journey/step6/office-city-mismatch/office-city-mismatch.component */ "./src/app/components/journey/step6/office-city-mismatch/office-city-mismatch.component.js");
                        $ocLazyLoad.load({
                            name: module
                        });
                        deferred.resolve(module);
                    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../~/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
                    return deferred.promise;
                }]
            }
        });

        $stateProvider.state('app.journey.s7-review', {
            url: '/review-:cardKey',
            component: 'step7',
            data: {
                pageTitle: 'Review details: Step 4'
            },
            resolve: {
                lazyLoad: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    __webpack_require__.e/* require.ensure */(13).then((function () {/* WEBPACK VAR INJECTION */(function(module) {
                        var module = __webpack_require__(/*! ./components/journey/step7/step7.component */ "./src/app/components/journey/step7/step7.component.js");
                        $ocLazyLoad.load({
                            name: module
                        });
                        deferred.resolve(module);
                    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../~/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
                    return deferred.promise;
                }],
                handleBack: ['$q', '$state', 'appState', 'UtilService', function ($q, $state, appState, UtilService) {
                    var deferred = $q.defer();
                    var data = appState.getApplicationData();
                    if (data && data.primaryApplicant && data.primaryApplicant.arn) {
                        var empDetails = data.primaryApplicant.employmentDetails || {};
                        if (data.primaryApplicant.dipDetails && data.primaryApplicant.dipDetails.dipArn || UtilService.isEmpty(empDetails.employmentYear)) {
                            var route = appState.getCurrentRoute();
                            deferred.resolve(false);
                            if (route) {
                                $state.go(route);
                            } else {
                                $state.go('app.journey.s1-cards');
                            }
                        } else {
                            deferred.resolve(true);
                        }
                    } else {
                        deferred.resolve(false);
                        $state.go('app.journey.s1-cards');
                    }
                    return deferred.promise;
                }]
            }
        });

        $stateProvider.state('app.journey.s8-consent', {
            url: '/consent-:cardKey',
            component: 'step8',
            data: {
                pageTitle: 'Consents and declaration: Step 4'
            },
            resolve: {
                lazyLoad: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    __webpack_require__.e/* require.ensure */(3).then((function () {/* WEBPACK VAR INJECTION */(function(module) {
                        var module = __webpack_require__(/*! ./components/journey/step8/step8.component */ "./src/app/components/journey/step8/step8.component.js");
                        $ocLazyLoad.load({
                            name: module
                        });
                        deferred.resolve(module);
                    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../~/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
                    return deferred.promise;
                }],
                handleBack: ['$q', '$state', 'appState', 'UtilService', function ($q, $state, appState, UtilService) {
                    var deferred = $q.defer();
                    var data = appState.getApplicationData();
                    if (data && data.primaryApplicant && data.primaryApplicant.arn) {
                        var empDetails = data.primaryApplicant.employmentDetails || {};
                        if (data.primaryApplicant.dipDetails && data.primaryApplicant.dipDetails.dipArn || UtilService.isEmpty(empDetails.employmentYear)) {
                            var route = appState.getCurrentRoute();
                            deferred.resolve(false);
                            if (route) {
                                $state.go(route);
                            } else {
                                $state.go('app.journey.s1-cards');
                            }
                        } else {
                            deferred.resolve(true);
                        }
                    } else {
                        deferred.resolve(false);
                        $state.go('app.journey.s1-cards');
                    }
                    return deferred.promise;
                }]
            }
        });

        $stateProvider.state('app.dip-error', {
            url: '/dip-error-:cardKey',
            component: 'dipError',
            data: {
                pageTitle: 'DIP connectivity error'
            },
            resolve: {
                lazyLoad: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    __webpack_require__.e/* require.ensure */(36).then((function () {/* WEBPACK VAR INJECTION */(function(module) {
                        var module = __webpack_require__(/*! ./components/journey/step8/dip-error/dip-error.component */ "./src/app/components/journey/step8/dip-error/dip-error.component.js");
                        $ocLazyLoad.load({
                            name: module
                        });
                        deferred.resolve(module);
                    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../~/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
                    return deferred.promise;
                }]
            }
        });

        //Card-DIP implementation
        $stateProvider.state('app.journey.card-DIP', {
            url: '/card-dip-:cardKey',
            component: 'cardDip',
            params: {
                otpData: null
            },
            data: {
                pageTitle: 'Additional details: Step 5'
            },
            resolve: {
                lazyLoad: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    __webpack_require__.e/* require.ensure */(9).then((function () {/* WEBPACK VAR INJECTION */(function(module) {
                        var module = __webpack_require__(/*! ./components/journey/card-DIP/card-DIP.component */ "./src/app/components/journey/card-DIP/card-DIP.component.js");
                        $ocLazyLoad.load({
                            name: module
                        });
                        deferred.resolve(module);
                    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../~/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
                    return deferred.promise;
                }],
                handleBack: ['$q', '$state', 'appState', 'UtilService', function ($q, $state, appState, UtilService) {
                    var deferred = $q.defer();
                    var data = appState.getApplicationData();
                    if (data && data.primaryApplicant && data.primaryApplicant.arn) {
                        if (!UtilService.isEmpty(data.primaryApplicant.dipDetails)) {
                            switch ($state.current.name) {
                                case "app.journey.otp-verify":
                                    deferred.resolve(true);
                                    break;
                                case "app.app-retrieval-staff":
                                    deferred.resolve(true);
                                    break;
                                case "app.journey.signature":
                                    deferred.resolve(true);
                                    break;
                                case "app.journey.supplementary":
                                    deferred.resolve(true);
                                    break;
                                case "app.journey.document":
                                    deferred.resolve(true);
                                    break;
                                case "app.journey.s8-consent":
                                    deferred.resolve(true);
                                    break;
                                case "app.journey.balance-transfer":
                                    deferred.resolve(true);
                                    break;
                                case "":
                                    deferred.resolve(true);
                                    break;
                                default:
                                    deferred.reject('Invalid transition');
                                    break;
                            }
                        } else {
                            var route = appState.getCurrentRoute();
                            if (route) {
                                deferred.resolve(false);
                                $state.go(route);
                            } else {
                                deferred.reject('Invalid transition');
                            }
                        }
                    } else {
                        deferred.resolve(false);
                        $state.go('app.journey.s1-cards');
                    }
                    return deferred.promise;
                }]
            }
        });

        $stateProvider.state('app.journey.balance-transfer', {
            url: '/balance-transfer-:cardKey',
            component: 'step9',
            data: {
                pageTitle: 'Balance transfer: Step 5'
            },
            resolve: {
                lazyLoad: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    __webpack_require__.e/* require.ensure */(12).then((function () {/* WEBPACK VAR INJECTION */(function(module) {
                        var module = __webpack_require__(/*! ./components/journey/step9/step9.component */ "./src/app/components/journey/step9/step9.component.js");
                        $ocLazyLoad.load({
                            name: module
                        });
                        deferred.resolve(module);
                    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../~/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
                    return deferred.promise;
                }],
                handleBack: ['$q', '$state', 'appState', function ($q, $state, appState) {
                    var deferred = $q.defer();
                    var data = appState.getApplicationData();
                    if (data && data.primaryApplicant && data.primaryApplicant.dipDetails && data.primaryApplicant.dipDetails.balanceTransferTaken) {
                        deferred.resolve(true);
                    } else {
                        var route = appState.getCurrentRoute();
                        deferred.resolve(false);
                        if (route) {
                            $state.go(route);
                        } else {
                            $state.go('app.journey.s1-cards');
                        }
                    }
                    return deferred.promise;
                }]
            }
        });

        $stateProvider.state('app.journey.supplementary', {
            url: '/Add-On-:cardKey',
            component: 'step10',
            data: {
                pageTitle: 'Add on card details: Step 5'
            },
            resolve: {
                lazyLoad: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    __webpack_require__.e/* require.ensure */(11).then((function () {/* WEBPACK VAR INJECTION */(function(module) {
                        var module = __webpack_require__(/*! ./components/journey/step10/step10.component */ "./src/app/components/journey/step10/step10.component.js");
                        $ocLazyLoad.load({
                            name: module
                        });
                        deferred.resolve(module);
                    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../~/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
                    return deferred.promise;
                }],
                handleBack: ['$q', '$state', 'appState', function ($q, $state, appState) {
                    var deferred = $q.defer();
                    var data = appState.getApplicationData();
                    if (data && data.primaryApplicant && data.primaryApplicant.dipDetails && data.primaryApplicant.dipDetails.supplementaryCardApplied) {
                        deferred.resolve(true);
                    } else {
                        var route = appState.getCurrentRoute();
                        deferred.resolve(false);
                        if (route) {
                            $state.go(route);
                        } else {
                            $state.go('app.journey.s1-cards');
                        }
                    }
                    return deferred.promise;
                }]
            }
        });

        $stateProvider.state('app.journey.document', {
            url: '/document-:cardKey',
            component: 'step11',
            data: {
                pageTitle: 'Document upload: Step 5'
            },
            resolve: {
                lazyLoad: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    __webpack_require__.e/* require.ensure */(2).then((function () {/* WEBPACK VAR INJECTION */(function(module) {
                        var module = __webpack_require__(/*! ./components/journey/step11/step11.component */ "./src/app/components/journey/step11/step11.component.js");
                        $ocLazyLoad.load({
                            name: module
                        });
                        deferred.resolve(module);
                    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../~/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
                    return deferred.promise;
                }],
                handleBack: ['$q', '$state', 'appState', 'journeyService', function ($q, $state, appState, journeyService) {
                    var deferred = $q.defer();
                    var data = appState.getApplicationData();
                    // if (data && data.primaryApplicant && data.primaryApplicant.dipDetails && data.primaryApplicant.dipDetails.birthCountry && journeyService.isIncomeDocRequired()) {
                    if (data && data.primaryApplicant && data.primaryApplicant.dipDetails && data.primaryApplicant.dipDetails.birthCountry) {
                        deferred.resolve(true);
                    } else {
                        var route = appState.getCurrentRoute();
                        deferred.resolve(false);
                        if (route) {
                            $state.go(route);
                        } else {
                            $state.go('app.journey.s1-cards');
                        }
                    }
                    return deferred.promise;
                }]
            }
        });

        $stateProvider.state('app.journey.signature', {
            url: '/signature-:cardKey',
            component: 'signatureConsent',
            data: {
                pageTitle: 'Digital signature: Step 6'
            },
            resolve: {
                lazyLoad: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    __webpack_require__.e/* require.ensure */(17).then((function () {/* WEBPACK VAR INJECTION */(function(module) {
                        var module = __webpack_require__(/*! ./components/journey/signature-consent/signature-consent.component */ "./src/app/components/journey/signature-consent/signature-consent.component.js");
                        $ocLazyLoad.load({
                            name: module
                        });
                        deferred.resolve(module);
                    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../~/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
                    return deferred.promise;
                }],
                handleBack: ['$q', '$state', 'appState', 'journeyService', function ($q, $state, appState, journeyService) {
                    var deferred = $q.defer();
                    var data = appState.getApplicationData();
                    // var isDoc = journeyService.isIncomeDocRequired() ? journeyService.hasIncomeDoc() : true;
                    if (data && data.primaryApplicant && data.primaryApplicant.dipDetails && data.primaryApplicant.dipDetails.birthCountry) {
                        deferred.resolve(true);
                    } else {
                        var route = appState.getCurrentRoute();
                        deferred.resolve(false);
                        if (route) {
                            $state.go(route);
                        } else {
                            $state.go('app.journey.s1-cards');
                        }
                    }
                    return deferred.promise;
                }]
            }
        });

        $stateProvider.state('app.journey.staff-details', {
            url: '/staff-details-:cardKey',
            component: "staffDetails",
            data: {
                pageTitle: 'Referrer staff details: Step 6'
            },
            resolve: {
                lazyLoad: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    __webpack_require__.e/* require.ensure */(16).then((function () {/* WEBPACK VAR INJECTION */(function(module) {
                        var module = __webpack_require__(/*! ./components/journey/staff-details/staff-details.component */ "./src/app/components/journey/staff-details/staff-details.component.js");
                        $ocLazyLoad.load({
                            name: module
                        });
                        deferred.resolve(module);
                    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../~/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
                    return deferred.promise;
                }],
            }
        });

        $stateProvider.state('app.C11', {
            url: '/c11',
            component: 'c11',
            data: {
                pageTitle: 'End of journey'
            },
            resolve: {
                lazyLoad: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    __webpack_require__.e/* require.ensure */(35).then((function () {/* WEBPACK VAR INJECTION */(function(module) {
                        var module = __webpack_require__(/*! ./components/common/C11/C11.component */ "./src/app/components/common/C11/C11.component.js");
                        $ocLazyLoad.load({
                            name: module
                        });
                        deferred.resolve(module);
                    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../~/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
                    return deferred.promise;
                }]
            }
        });

        $stateProvider.state('app.exception', {
            url: '/exception',
            component: 'exception',
            data: {
                pageTitle: 'End of journey'
            },
            resolve: {
                lazyLoad: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    __webpack_require__.e/* require.ensure */(34).then((function () {/* WEBPACK VAR INJECTION */(function(module) {
                        var module = __webpack_require__(/*! ./components/common/exception-handle/exception.component */ "./src/app/components/common/exception-handle/exception.component.js");
                        $ocLazyLoad.load({
                            name: module
                        });
                        deferred.resolve(module);
                    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../~/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
                    return deferred.promise;
                }]
            }
        });

        $stateProvider.state('app.max-otp', {
            url: '/max-otp-error',
            component: 'maxOtp',
            data: {
                pageTitle: 'End of journey'
            },
            resolve: {
                lazyLoad: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    __webpack_require__.e/* require.ensure */(32).then((function () {/* WEBPACK VAR INJECTION */(function(module) {
                        var module = __webpack_require__(/*! ./components/common/max-otp/max-otp.component */ "./src/app/components/common/max-otp/max-otp.component.js");
                        $ocLazyLoad.load({
                            name: module
                        });
                        deferred.resolve(module);
                    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../~/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
                    return deferred.promise;
                }]
            }
        });

        $stateProvider.state('app.personalDetailsAcknowledgement', {
            url: '/third-party-declined-:cardKey',
            component: 'personalDetailsAcknowledgement',
            data: {
                pageTitle: 'End of journey'
            },
            resolve: {
                lazyLoad: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    __webpack_require__.e/* require.ensure */(31).then((function () {/* WEBPACK VAR INJECTION */(function(module) {
                        var module = __webpack_require__(/*! ./components/common/personalDetailsAcknowledgement/personalDetailsAcknowledgement.component */ "./src/app/components/common/personalDetailsAcknowledgement/personalDetailsAcknowledgement.component.js");
                        $ocLazyLoad.load({
                            name: module
                        });
                        deferred.resolve(module);
                    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../~/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
                    return deferred.promise;
                }]
            }
        });

        $stateProvider.state('app.negative-company', {
            url: '/decline-:cardKey',
            component: 'negativeCompany',
            data: {
                pageTitle: 'End of journey'
            },
            resolve: {
                lazyLoad: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    __webpack_require__.e/* require.ensure */(25).then((function () {/* WEBPACK VAR INJECTION */(function(module) {
                        var module = __webpack_require__(/*! ./components/journey/step6/negative-company/negative-company-application.component */ "./src/app/components/journey/step6/negative-company/negative-company-application.component.js");
                        $ocLazyLoad.load({
                            name: module
                        });
                        deferred.resolve(module);
                    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../~/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
                    return deferred.promise;
                }]
            }
        });

        $stateProvider.state('app.submitted-application', {
            url: '/submitted-application:-cardKey',
            component: 'submittedAppln',
            data: {
                pageTitle: 'End of journey'
            },
            resolve: {
                lazyLoad: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    __webpack_require__.e/* require.ensure */(29).then((function () {/* WEBPACK VAR INJECTION */(function(module) {
                        var module = __webpack_require__(/*! ./components/common/submitted-application/submitted-application.component */ "./src/app/components/common/submitted-application/submitted-application.component.js");
                        $ocLazyLoad.load({
                            name: module
                        });
                        deferred.resolve(module);
                    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../~/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
                    return deferred.promise;
                }]
            }
        });

        $stateProvider.state('app.card-declined', {
            url: '/card-declined:cardKey',
            component: 'cardDeclined',
            data: {
                pageTitle: 'End of journey'
            },
            resolve: {
                lazyLoad: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    __webpack_require__.e/* require.ensure */(37).then((function () {/* WEBPACK VAR INJECTION */(function(module) {
                        var module = __webpack_require__(/*! ./components/journey/step8/card-declined/card-declined.component */ "./src/app/components/journey/step8/card-declined/card-declined.component.js");
                        $ocLazyLoad.load({
                            name: module
                        });
                        deferred.resolve(module);
                    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../~/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
                    return deferred.promise;
                }]
            }
        });

        $stateProvider.state('app.cancelApplication', {
            url: '/cancel-application-:cardKey',
            component: 'cancelApplication',
            data: {
                pageTitle: 'End of journey'
            },
            params: {
                data: null
            },
            resolve: {
                lazyLoad: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    __webpack_require__.e/* require.ensure */(27).then((function () {/* WEBPACK VAR INJECTION */(function(module) {
                        var module = __webpack_require__(/*! ./components/journey/card-DIP/cancel-application/cancel-application.component */ "./src/app/components/journey/card-DIP/cancel-application/cancel-application.component.js");
                        $ocLazyLoad.load({
                            name: module
                        });
                        deferred.resolve(module);
                    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../~/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
                    return deferred.promise;
                }]
            }
        });


        //Re-EKYC-Yogi@270924-start
        $stateProvider.state('app.start-re-EkycPage', {
            url: '/start-Re-Ekyc?source&content',
            resolve: {
                load: ['$rootScope', '$http', '$state', '$stateParams', 'CONFIG', 'appState', 'UtilService', 'routingService', function ($rootScope, $http, $state, $stateParams, CONFIG, appState, UtilService, routingService) {
                    appState.clearAll();

                    var reqData = {
                        applicationNumber: $stateParams['source'] || '',
                        encData: $stateParams['content'] || ''
                    }
                    reqData.encData = reqData.encData.replaceAll('%2F', '/').replaceAll('%20', '+').replaceAll('%3D', '=').replaceAll(" ", "+");
                    // console.log("enc-->",reqData.encData.replaceAll('%2F', '/').replaceAll('%20', '+').replaceAll('%3D', '=').replaceAll(" ", "+"));

                    if (!reqData.applicationNumber) {
                        console.log("Variable is null, undefined, or empty.");
                        alert(`We did not found source for this request. Please check the link.`);
                        window.location.href = "https://www.hsbc.co.in/credit-cards/";
                        return;
                    }

                    console.log("urlObj reqData==", reqData);
                    routingService.decAndSaveUrlParams(reqData).then(function (result) {
                        console.log("data from decAndSaveUrlParams-", JSON.stringify(result));
                        if (result.success) {
                            $state.go("app.re-ekycPage");
                        } else {
                            console.log("else Part")
                            alert(`We did not found key for this request. Please check the link.`);
                            window.location.href = "https://www.hsbc.co.in/credit-cards/";
                        }
                    });
                }]
            }
        });


        $stateProvider.state('app.re-ekycPage', {
            url: '/do-ReEkyc',
            component: 'reEkycPage',
            data: {
                pageTitle: 'EKYC'
            },
            params: {
                saveData: null
            },
            resolve: {
                lazyLoad: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                    var deferred = $q.defer();
                    __webpack_require__.e/* require.ensure */(7).then((function () {/* WEBPACK VAR INJECTION */(function(module) {
                        var module = __webpack_require__(/*! ./components/re-ekycPage/re-ekycPage.component */ "./src/app/components/re-ekycPage/re-ekycPage.component.js");
                        $ocLazyLoad.load({
                            name: module
                        });
                        deferred.resolve(module);
                    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../~/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
                    return deferred.promise;
                }]
            }
        });
        //Re-EKYC-Yogi@270924-end

    };

    module.exports = routeConfig;
})();

/***/ }),

/***/ "./src/app/services/analytic.service.js":
/* unknown exports provided */
/* all exports used */
/*!**********************************************!*\
  !*** ./src/app/services/analytic.service.js ***!
  \**********************************************/
/***/ (function(module, exports) {

(function () {
    'use strict';
    var analyticSvc = angular.module('app').service('analyticService', ['appState', function (appState) {
        var self = this;
        self.pageType = {
            application: "application",
            error: "error"
        };

        self.funnelName = {
            name: "NTB Credit Card"
        };

        self.eventCategory = {
            content: "content",
            application: "application",
            verification: "verification",
            error: "error"
        };

        self.eventAction = {
            buttonClick: "button",
            toggle: "toggle",
            popup: "popup",
            onsite: "onsite",
            start: "start",
            submit: "submit",
            cancel: 'cancel',
            journeyEntry: 'Journey Entry Point',
            application: "application"
        }

        self.pageList = {
            /*cards: {
                funnel_step: 1,
                funnel_step_name: "select your card",
                page_name: "credit cards:application:select your card",
                page_url: "/credit_card/select_your_card/",
                page_type: self.pageType.application,
                funnel_name: self.funnelName.name,
                event_category: self.eventCategory.application,
                event_action: self.eventAction.start
            }*/
            cards: {
                funnel_step: 1,
                funnel_step_name: "select your card",
                page_name: "credit cards:application:select your card",
                page_url: "/credit-card/application/select-your-card",
                page_type: self.pageType.application,
                funnel_name: self.funnelName.name,
                isProductReq: "NA"
            },
            contactDetails: {
                funnel_step: 2,
                funnel_step_name: "personal details:contact details",
                page_name: "credit cards:application:personal details:contact details",
                page_url: "/credit_card/personal_details/contact_details",
                page_type: self.pageType.application,
                funnel_name: self.funnelName.name,
            },
            aadhaarPanInput: {
                funnel_step: 3,
                funnel_step_name: "personal details:aadhaar and pan input",
                page_name: "credit cards:application:personal details:aadhaar and pan input",
                page_url: "/credit_card/personal_details/aadhaar_and_pan_input/",
                page_type: self.pageType.application,
                funnel_name: self.funnelName.name
            },
            leadGenerationInput: {
                funnel_step: 3,
                funnel_step_name: "lead generation:lead generation input",
                page_name: "credit cards:application:lead generation:lead generation input",
                page_url: "/credit_card/lead_generation/lead_generation_input/",
                page_type: self.pageType.application,
                funnel_name: self.funnelName.name
            },
            leadGenerationAcknowledgement: {
                funnel_step: 4,
                funnel_step_name: "aadhaar and pan:lead generation acknowledgement",
                page_name: "credit cards:lead generation:lead generation acknowledgement",
                page_url: "/credit_card/lead_generation/lead_generation_acknowledgement/",
                page_type: self.pageType.application,
                funnel_name: self.funnelName.name
            },
            verfication: {
                funnel_step: 4,
                funnel_step_name: "personal details:verification code",
                page_name: "credit cards:application:personal details:verification code",
                page_url: "/credit_card/personal_details/verification_code/",
                page_type: self.pageType.application,
                funnel_name: self.funnelName.name
            },
            submittedApplication: {
                page_name: "credit cards:application:error:existing submitted application",
                page_url: "/credit_card/error/existing_submitted_application",
                page_type: self.pageType.error
            },
            // existingCustomer: {
            //     funnel_step: 7,
            //     funnel_step_name: "existing prestige customer",
            //     page_name: "staff portal:credit card:existing prestige customer",
            //     page_url: "/credit_card/existing_prestige_customer/",
            //     funnel_name: self.funnelName.name
            // },
            personalDetails: {
                funnel_step: 5,
                funnel_step_name: "personal details & current residential address",
                page_name: "credit cards:application:personal details:personal details & current residential address",
                page_url: "/credit_card/personal_details/personal_details_&_current_residential_address/",
                page_type: self.pageType.application,
                funnel_name: self.funnelName.name,
                internal_reference_id: ""
            },
            personalDetailsAcknowledgement: {
                page_name: "credit cards:application:personal details:acknowledgement",
                page_url: "/credit_card/personal_details/acknowledgement/",
                page_type: self.pageType.application,
                event_category: self.eventCategory.application,
                event_action: self.eventAction.submit,
                event_content: 'declined'
            },
            nonSourcingCity: {
                page_name: "credit cards:application:error:non sourcing city",
                page_url: "/credit_card/error/non_sourcing_city",
                page_type: self.pageType.error
            },
            personalDemographic: {
                funnel_step: 6,
                funnel_step_name: "personal details:personal demographics",
                page_name: "credit cards:application:personal details:personal demographics",
                page_url: "/credit_card/personal_details/personal_demographics",
                page_type: self.pageType.application,
                funnel_name: self.funnelName.name,
                internal_reference_id: ""
            },
            employmentDetails: {
                funnel_step: 7,
                funnel_step_name: "employment details:employment status",
                page_name: "credit cards:application:employment details:employment status",
                page_url: "/credit_card/employment_details/employment_status/",
                page_type: self.pageType.application,
                funnel_name: self.funnelName.name,
                internal_reference_id: ""
            },
            panMismatch: {
                page_name: "credit cards:application:error:pan mismatch",
                page_url: "/credit_card/error/pan_mismatch",
                page_type: self.pageType.error
            },
            incomeDetails: {
                funnel_step: 8,
                funnel_step_name: "employment details:employment & income details",
                page_name: "credit cards:application:employment details:employment & income details",
                page_url: "/credit_card/employment_details/employment_and_income details/",
                page_type: self.pageType.application,
                funnel_name: self.funnelName.name,
                internal_reference_id: ""
            },
            negativeCompany: {
                page_name: "credit cards:application:error:negative company",
                page_url: "/credit_card/error/negative_company",
                page_type: self.pageType.error
            },
            officeNonSourcingCity: {
                page_name: "credit cards:application:error:office non sourcing city",
                page_url: "/credit_card/error/office_non_sourcing_city",
                page_type: self.pageType.error
            },
            officeCityMismatch: {
                page_name: "credit cards:application:error:office city mismatch",
                page_url: "/credit_card/error/office_city_mismatch",
                page_type: self.pageType.error
            },
            review: {
                funnel_step: 9,
                funnel_step_name: "review dip details:application review",
                page_name: "credit cards:application:review dip details:application review",
                page_url: "/credit_card/review_dip_details/application_review/",
                page_type: self.pageType.application,
                funnel_name: self.funnelName.name,
                internal_reference_id: ""
            },
            consent: {
                funnel_step: 10,
                funnel_step_name: "review dip details:consent and declaration",
                page_name: "credit cards:application:review dip details:consent and declaration",
                page_url: "/credit_card/review_dip_details/consent and declaration/",
                page_type: self.pageType.application,
                funnel_name: self.funnelName.name,
                internal_reference_id: ""
            },
            dipConnectivityIssue: {
                page_name: "credit cards:application:error:dip connectivity issue",
                page_url: "/credit_card/error/dip_connectivity_issue",
                page_type: self.pageType.error
            },
            dipDeclined: {
                funnel_step: 11,
                funnel_step_name: "additional details:card declined",
                page_name: "credit cards:application:additional details:card declined",
                page_url: "/credit_card/additional_details/card_declined/",
                page_type: self.pageType.application,
                funnel_name: self.funnelName.name,
                event_category: "application",
                event_action: "submit",
                event_content: "declined"
            },
            // esign: {
            //     funnel_step: 14,
            //     funnel_step_name: "review dip details:esignature",
            //     page_name: "pws:credit card:review dip details:esignature",
            //     page_url: "/credit_card/review_dip_details/esignature/",
            //     funnel_name: self.funnelName.name
            // },
            dip: {
                funnel_step: 11,
                funnel_step_name: "additional details:dip help us know you better",
                page_name: "credit cards:application:additional details:dip help us know you better",
                page_url: "/credit_card/additional_details/dip_help_us_know_you_better/",
                page_type: self.pageType.application,
                funnel_name: self.funnelName.name,
                internal_reference_id: ""
            },
            dipReferred: {
                funnel_step: 11,
                funnel_step_name: "additional details:referred help us know you better",
                page_name: "credit cards:application:additional details:referred help us know you better",
                page_url: "/credit_card/additional_details/referred_help_us_know_you_better/",
                page_type: self.pageType.application,
                funnel_name: self.funnelName.name,
                event_category: "application",
                event_action: "submit",
                event_content: "referred",
                internal_reference_id: ""
            },
            dipCancelApplication: {
                page_name: "credit cards:application:cancel application",
                page_url: "/credit_card/cancel_application/",
                page_type: self.pageType.application,
                event_category: self.eventCategory.application,
                event_action: self.eventAction.cancel,
                event_content: 'cancelled by user'
            },
            balanceTransfer: {
                funnel_step: 12,
                funnel_step_name: "additional details:balance transfer",
                page_name: "credit cards:application:additional details:balance transfer",
                page_url: "/credit_card/additional_details/balance_transfer/",
                page_type: self.pageType.application,
                funnel_name: self.funnelName.name,
                internal_reference_id: ""
            },
            supplementryCard: {
                funnel_step: 13,
                funnel_step_name: "additional details:supplementry card",
                page_name: "credit cards:application:additional details:supplementary card",
                page_url: "/credit_card/additional_details/supplementry_card/",
                page_type: self.pageType.application,
                funnel_name: self.funnelName.name,
                internal_reference_id: ""
            },
            documentUpload: {
                funnel_step: 14,
                funnel_step_name: "additional details:document upload",
                page_name: "credit cards:application:additional details:document upload",
                page_url: "/credit_card/additional_details/document_upload/",
                page_type: self.pageType.application,
                funnel_name: self.funnelName.name,
                internal_reference_id: ""
            },
            signature: {
                funnel_step: 15,
                funnel_step_name: "review dip details:esignature",
                page_name: "credit cards:application:review dip details:esignature",
                page_url: "/credit_card/review_dip_details/esignature/",
                page_type: self.pageType.application,
                funnel_name: self.funnelName.name,
                internal_reference_id: ""
            },
            staffDetails: {
                page_name: "credit cards:application:staff details",
                page_url: "/credit_card/staff-details",
                page_type: self.pageType.application
            },
            applicationComplete: {
                funnel_step: 15,
                funnel_step_name: "confirmation",
                page_name: "credit cards:application:review & complete:application complete",
                page_url: "/credit_card/review_and_complete/application_complete/",
                page_type: self.pageType.application,
                funnel_name: self.funnelName.name,
                event_category: "application",
                event_action: "submit",
                event_content: "completed",
                application_id: "",
                application_timestamp: "",
                application_time: "",
                application_date: "",
                internal_reference_id: "",
                funnel_complete_flag: 1
            },
            savedApplication: {
                page_name: "credit cards:application saved",
                page_url: "/credit_card/application_saved/",
                page_type: self.pageType.application
            },
            retrieveVerification: {
                page_name: "credit cards:retrieve application:verification code",
                page_url: "/credit_card/retrieve_application/verification _code/",
                page_type: self.pageType.application
            },
            retrieve: {
                page_name: "credit cards:retrieve application:retrieve input",
                page_url: "/credit_card/retrieve_application/retrieve_input/",
                page_type: self.pageType.application
            }
        };

        self.buttonList = {
            buttonClick: {
                event_category: self.eventCategory.content,
                event_action: self.eventAction.buttonClick,
                event_content: "Continue"
            },
            toggleClick: {
                event_category: self.eventCategory.content,
                event_action: self.eventAction.toggle,
                event_content: "Continue"
            },
            linkClick: {
                event_category: self.eventCategory.content,
                event_action: self.eventAction.onsite,
                event_content: "Continue"
            },
            refered: {
                event_category: self.eventCategory.application,
                event_action: self.eventAction.submit,
                event_content: "referred"
            },
            declined: {
                event_category: self.eventCategory.application,
                event_action: self.eventAction.submit,
                event_content: "declined"
            },
            popup: {
                event_category: self.eventCategory.content,
                event_action: self.eventAction.popup,
                event_content: "declined"
            },
            cancel: {
                event_category: self.eventCategory.application,
                event_action: self.eventAction.cancel,
                event_content: "declined"
            },
            error: {
                event_category: self.eventCategory.error,
                event_action: self.eventAction.application,
                event_content: "error"
            },
            applynow: {
                event_category: self.eventCategory.content,
                event_action: self.eventAction.buttonClick,
                event_content: "Continue",
                product_subcategory:"",
                product_id:"",
                product_category:""
            }
        };

        var trackView = function (dataObject) {
            try {
                var eventData = window.utag.handler.C(dataObject);
                //eventData = angular.merge({}, eventData, commonDataObject);
                window.TMS.trackView(eventData);
            } catch (err) {
                console.log(err);
            }
        };

        var trackEvent = function (dataObject) {
            try {
                var eventData = window.utag.handler.C(window.utag_data);
               if(dataObject.event_content === "apply now"){
                eventData.funnel_step="";
               }
                var mergedData = angular.merge({}, eventData, dataObject);
                window.TMS.trackEvent("link", mergedData);
                //eventData = angular.merge({}, eventData, commonDataObject);
                //window.TMS.trackEvent("link", eventData);
            } catch (err) {
                console.log(err);
            }
        };

        self.trackPageLoad = function (dataObject) {
           var isProductReq =dataObject.isProductReq;
            if (window.utag) {
                var  Vproduct_category;
                var Vproduct_subcategory;
                if(isProductReq === "NA"){
                    Vproduct_category= "";
                    Vproduct_subcategory= "";
                }else{
                    Vproduct_category= "Credit Cards";
                    Vproduct_subcategory= "cashback credit card | visa platinum credit card | smart value credit card";
                    
                }
                var commonViewData = {
                    page_language: "en",
                    page_security_level: 0,
                    page_business_line: "RBWM",
                    page_customer_group: "retail",
                    page_category: "credit cards",
                  //page_subcategory: "Credit Card",
                    page_subcategory:"application",
                    product_id: "",
                    product_category: Vproduct_category,
                    product_subcategory: Vproduct_subcategory,
                    site_section:""
                }; 
                var appData = appState.getApplicationData();
                if (appData && appData.primaryApplicant && appData.primaryApplicant.card)
                {   
                    if (appData.primaryApplicant.card.key.toUpperCase() === "VPC") {
                        commonViewData.product_subcategory = "visa platinum credit card";
                        commonViewData.product_id = "vpc";
                    } 
                    if (appData.primaryApplicant.card.key.toUpperCase() === "CBC"){
                        commonViewData.product_subcategory = "cashback credit card";
                        commonViewData.product_id = "cbc";
                    } 
                    if (appData.primaryApplicant.card.key.toUpperCase() === "SVC"){
                        commonViewData.product_subcategory = "smart value credit card";
                        commonViewData.product_id = "svc";
                    }
                }
                var obj = {};
                angular.copy(dataObject, obj);
                if (appState.isStaffJourney()) {
                    obj.page_name = "staff portal:" + obj.page_name;
                    commonViewData.site_section = "staff portal";

                    if(isProductReq === "NA"){
                        obj.internal_reference_id= ""; 
                    }

                } else {
                    obj.page_name = "pws:" + obj.page_name;
                    commonViewData.site_section = "pws";

                    if(isProductReq === "NA"){
                        obj.internal_reference_id= "";
                    }
                }
                if (appData && appData.primaryApplicant && appData.primaryApplicant.token) {
                    //obj.internal_reference_id = appData.primaryApplicant.token.substr(6);
                }
                if (appData && appData.primaryApplicant && appData.primaryApplicant.card) {
                   
                   // obj.product_id = appData.primaryApplicant.card.key.toUpperCase();
                  // commonViewData.product_id = appData.primaryApplicant.card.key.toUpperCase();
                    
                }
                obj = angular.merge({}, obj, commonViewData);
                trackView(obj);
            }
        };

        self.trackUserAction = function (dataObject) {
            if (window.utag) {
                trackEvent(dataObject);
            }
        };
    }]);
    module.exports = analyticSvc.name;
})();

/***/ }),

/***/ "./src/app/services/helper/routing.service.js":
/* unknown exports provided */
/* all exports used */
/*!****************************************************!*\
  !*** ./src/app/services/helper/routing.service.js ***!
  \****************************************************/
/***/ (function(module, exports) {

(function () {
    'use strict';
    var routingService = angular.module('app').service('routingService', ['$rootScope', '$http', 'CONFIG', 'appState', function ($rootScope, $http, CONFIG, appState) {
        var self = this;

        self.saveUrlParams = function (reqObj) {
            var apiUrl, httpMethod;
            if ($rootScope.integrationsActive) {
                httpMethod = 'POST';
                apiUrl = CONFIG.apiUrl + '/urlparam/save';
            } else {
                httpMethod = 'GET';
                apiUrl = 'resources/data/mock/url-params_save.json';
            }
            return $http({
                method: httpMethod,
                url: apiUrl,
                data: JSON.stringify(reqObj)
            }).then(function (response) {
                if (response.status == 200 && response.data) {
                    appState.setUrlParamId(response.data.urlParamId);
                    return response.data;
                } else {
                    return { success: false };
                }
            }, function (error) {
                return { success: false };
            })
        };

        self.getDecryptedStringPB = function (reqData) { //added this function for paisa bazaar for get key @akshaypise_aug24
            var apiUrl, httpMethod;
            if ($rootScope.integrationsActive) {
                httpMethod = 'POST';
                apiUrl = CONFIG.apiUrl + '/oeEkyc/getMasterKey' + '?hash_id=' + Math.random();
            } else {
                httpMethod = 'GET';
                apiUrl = 'resources/data/mock/pburl-params_check.json';
            }
            return $http({
                method: httpMethod,
                url: apiUrl,
               //params: securityParams,
               data: reqData,
            }).then(function (response) {
                if (response.status == 200 && response.data) {
                    return response.data;
                } else {
                    return { success: false };
                }
            }, function (error) {
                return { success: false };
            })
        };

        self.getDecryptedString = function (reqData) {
            // console.log("pathVariable",reqData)
            // var apiUrl2 = CONFIG.apiUrl + '/bankBazaar/getMasterKey/' + keyParam + '?hash_id=' + Math.random();
            // console.log("apiUrl2",apiUrl2)

            var apiUrl, httpMethod;
            if ($rootScope.integrationsActive) {
                httpMethod = 'POST';
                apiUrl = CONFIG.apiUrl + '/bankBazaar/appNum/getMasterKey' + '?hash_id=' + Math.random();
            } else {
                httpMethod = 'GET';
                apiUrl = 'resources/data/mock/url-params_check.json';
            }
            return $http({
                method: httpMethod,
                url: apiUrl,
               //params: securityParams,
               data: reqData,
            }).then(function (response) {
                if (response.status == 200 && response.data) {
                    return response.data;
                } else {
                    return { success: false };
                }
            }, function (error) {
                return { success: false };
            })
        };

        self.decAndSaveUrlParams = function (reqObj) {
            var apiUrl, httpMethod;
            if ($rootScope.integrationsActive) {
                httpMethod = 'POST';
                apiUrl = CONFIG.apiUrl + '/re-Ekyc/urlData/decData';
            } else {
                httpMethod = 'GET';
                apiUrl = 'resources/data/mock/url-params_save.json';
            }
            return $http({
                method: httpMethod,
                url: apiUrl,
                data: JSON.stringify(reqObj)
            }).then(function (response) {
                if (response.status == 200 && response.data) {
                    appState.setUrlParamId(response.data.urlParamId);
                    return response.data;
                } else {
                    return { success: false };
                }
            }, function (error) {
                return { success: false };
            })
        };



    }]);
    module.exports = routingService.name;
})();

/***/ }),

/***/ "./src/app/services/helper/util.service.js":
/* unknown exports provided */
/* all exports used */
/*!*************************************************!*\
  !*** ./src/app/services/helper/util.service.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {(function () {
    var angular = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
    const crypto = __webpack_require__(/*! crypto */ "./node_modules/crypto-browserify/index.js");
    var utilService = angular.module('app').service('UtilService', ['$window', '$timeout', function ($window, $timeout) {
        var self = this;
        var key = "6z@mxs5@a8^0&73^sw";

        self.isEmpty = function (val) {
            // test results
            //---------------
            // []        true, empty array
            // {}        true, empty object
            // null      true
            // undefined true
            // ""        true, empty string
            // ''        true, empty string
            // 0         false, number
            // true      false, boolean
            // false     false, boolean
            // Date      false
            // function  false

            if (val === undefined)
                return true;

            if (typeof (val) == 'function' || typeof (val) == 'number' || typeof (val) == 'boolean' || Object.prototype.toString.call(val) === '[object Date]')
                return false;

            if (val == null || val.length === 0) // null or 0 length array
                return true;

            if (typeof (val) == "object") {
                // empty object
                var r = true;
                for (var f in val)
                    r = false;
                return r;
            }
            return false;
        };

        //Open a new Browser tab.
        self.openTab = function (url) {
            var win;
            if (/chrom(e|ium)/.test(navigator.userAgent.toLowerCase())) {
                win = window.open("about:blank", '_blank',"width=700,height=700");
                win.location = url;
            } else {
                win = window.open("about:blank", '_blank',"width=700,height=700");
                win.location = url;
            }

            if (window.focus) {
                win.focus();
            }
            return false;
        }

        self.focusOnInvalid = function (formName, forceToTop) {
            var elems = angular.element(document.querySelectorAll('[name="' + formName + '"] .ng-invalid'));
            if (elems.hasClass('ui-select-container')) {
                var uiSelect = angular.element(elems).controller('uiSelect');
                // focus the focusser, putting focus onto select but without opening the dropdown                                
                uiSelect.focusser[0].focus();
                self.scrollToView(elems[0], forceToTop);
            } else if (elems && elems.length > 0) {
                elems[0].focus();
                self.scrollToView(elems[0], forceToTop);
            }
        };

        self.scrollToView = function (inputElem, forceToTop) {
            var headerElem = angular.element(document.querySelector('header'))[0];
            var footerElem = angular.element(document.querySelector('footer'))[0];
            var navElem = angular.element(document.querySelector('nav'))[0];
            var top = headerElem.offsetHeight + navElem.offsetHeight;
            $timeout(function () {
                var elemPos = inputElem.getBoundingClientRect();
                var labelHeight = angular.element(document.querySelector('label'))[0].offsetHeight;
                if ((elemPos.top + labelHeight) < top) {
                    window.scrollBy(0, -(top - elemPos.top + labelHeight));
                }
                if (forceToTop && window.getOS(window.navigator.userAgent) === 'iOS') {
                    window.scrollBy(0, -(top - elemPos.top + labelHeight));
                }
                // else if ((elemPos.top + elemPos.height) > footerElem.getBoundingClientRect().top) {
                //     window.scrollBy(0, (elemPos.top + elemPos.height) - footerElem.getBoundingClientRect().top);
                // }
            }, 100);
        };

        Array.prototype.longest = function (propName) {
            var arr = angular.copy(this);
            arr.sort(
                function (a, b) {
                    if (a[propName].length > b[propName].length) return -1;
                    if (a[propName].length < b[propName].length) return 1;
                    return 0
                }
            );
            return arr[0][propName].length;
        };

        self.calculateAge = function (DOB_date, DOB_month, DOB_year) {
            DOB_date = parseInt(DOB_date);
            DOB_month = parseInt(DOB_month);
            DOB_year = parseInt(DOB_year);
            var dob = new Date(DOB_year, DOB_month - 1, DOB_date);
            var age = Date.now() - dob.getTime();
            age = age / (1000 * 60 * 60 * 24 * 365.25);
            return age;
        };

        self.validateDate = function (dd, mm, yyyy) {
            if (self.isEmpty(dd) || self.isEmpty(mm) || self.isEmpty(yyyy)) return false;
            var d = parseInt(dd),
                m = parseInt(mm),
                y = parseInt(yyyy);
            if (d < 1 || d > 31) return false;
            if (m < 1 || d > 12) return false;
            if (y < 1000) return false;

            var listOfDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            if (m === 1 || m > 2) {
                if (d > listOfDays[m - 1]) return false;
            }

            if (m == 2) {
                var lyear = false;
                if ((!(y % 4) && y % 100) || !(y % 400)) {
                    lyear = true;
                }
                if ((lyear == false) && (d >= 29)) {
                    // Invalid date format!;
                    return false;
                }
                if ((lyear == true) && (d > 29)) {
                    // Invalid date format!;
                    return false;
                }
            }
            return true;
        };

        self.formatYearMonth = function (value) {
            if (!self.isEmpty(value) && angular.isNumber(value) && value < 10) {
                return "0" + value;
            } else {
                return value;
            }
        };

        self.encodeData = function (data) {
            if (!self.isEmpty(data) && window.btoa) {
                var encodedData = window.btoa(JSON.stringify(data));
                return encodedData;
            }
            else {
                return data;
            }
        }

        self.decodeData = function (encodedData) {
            if (!self.isEmpty(encodedData) && window.btoa) {
                var str = window.atob(encodedData)
                var decodedData = JSON.parse(str);
                return decodedData;
            }
            else {
                return encodedData;
            }
        }

        //@AD - 08/17/2022 - functions to encrypt/decrypt data from frontend to backend api calls
        function encrypt (text, masterkey){
            const iv = crypto.randomBytes(16);
            const salt = crypto.randomBytes(20);
            const key = crypto.pbkdf2Sync(masterkey,salt,50, 16, 'sha1');
            const cipher = crypto.createCipheriv('aes-128-cbc', key, iv);
            const encrypted = Buffer.concat([cipher.update(text, 'utf8'), cipher.final()]);
            return Buffer.concat([salt, iv, encrypted]).toString('base64');
        }

        function decrypt(encdata, masterkey){
            const bData = Buffer.from(encdata, 'base64');
            const salt = bData.slice(0, 20);
            const iv = bData.slice(20, 36);
            const text = bData.slice(36);
            const key = crypto.pbkdf2Sync(masterkey,salt,50, 16, 'sha1');
            const decipher = crypto.createDecipheriv('aes-128-cbc', key, iv);
            const deccrypted = decipher.update(text, 'binary', 'utf8')+ decipher.final('utf8');
            return deccrypted;
        }

//for BB

            self.encrypt = function(text, masterkey) {
            const iv = crypto.randomBytes(16);
            const salt = crypto.randomBytes(20);
            const key = crypto.pbkdf2Sync(masterkey, salt, 50, 16, 'sha1');
            const cipher = crypto.createCipheriv('aes-128-cbc', key, iv);
            const encrypted = Buffer.concat([cipher.update(text, 'utf8'), cipher.final()]);
            return Buffer.concat([salt, iv, encrypted]).toString('base64');
        }

            self.decrypt = function(encdata, masterkey){
            const bData = Buffer.from(encdata, 'base64');
            const salt = bData.slice(0, 20);
            const iv = bData.slice(20, 36);
            const text = bData.slice(36);
            const key = crypto.pbkdf2Sync(masterkey,salt,50, 16, 'sha1');
            const decipher = crypto.createDecipheriv('aes-128-cbc', key, iv);
            const deccrypted = decipher.update(text, 'binary', 'utf8')+ decipher.final('utf8');
            return deccrypted;
        }
        
        self.encodeData2 = function(encodedData) {
            if(encodedData != null){
                var encryptedText = encrypt(encodedData, key);
            }
            // console.log("encryptedText:"+encryptedText);
            return encryptedText;
        }

        self.decodeData2 = function (encodedData) {
            if(encodedData != null){
                var deccryptedText = decrypt(encodedData, key);
            }
            // console.log("deccryptedText:"+deccryptedText);
            return deccryptedText;
        }

        self.isTouchDevice = function is_touch_device() {
            return 'ontouchstart' in window // works on most browsers
                ||
                navigator.maxTouchPoints; // works on IE10/11 and Surface
        };

        var platformDetectionmodule = {
            options: [],
            header: [navigator.platform, navigator.userAgent, navigator.appVersion, navigator.vendor, window.opera],
            dataos: [
                { name: 'Windows Phone', value: 'Windows Phone', version: 'OS', deviceType: 'Mobile' },
                { name: 'Windows', value: 'Win', version: 'NT', deviceType: 'Desktop' },
                { name: 'iOS', value: 'iPhone', version: 'OS', deviceType: 'Mobile' },
                { name: 'iOS', value: 'iPad', version: 'OS', deviceType: 'Mobile' },
                { name: 'Kindle', value: 'Silk', version: 'Silk', deviceType: 'Mobile' },
                { name: 'Android', value: 'Android', version: 'Android', deviceType: 'Mobile' },
                { name: 'PlayBook', value: 'PlayBook', version: 'OS', deviceType: 'Mobile' },
                { name: 'BlackBerry', value: 'BlackBerry', version: '/', deviceType: 'Mobile' },
                { name: 'Macintosh', value: 'Mac', version: 'OS X', deviceType: 'Desktop' },
                { name: 'Linux', value: 'Linux', version: 'rv', deviceType: 'Desktop' },
                { name: 'Palm', value: 'Palm', version: 'PalmOS', deviceType: 'Mobile' }
            ],
            databrowser: [
                { name: 'UCBrowser', value: 'UCBrowser', version: 'UCBrowser' },
                { name: 'Edge', value: 'EdgA', version: 'version' },
                { name: 'SamsungBrowser', value: 'SamsungBrowser', version: 'version' },
                { name: 'Opera', value: 'OPR', version: 'version' },
                { name: 'Chrome', value: 'Chrome', version: 'Chrome' },
                { name: 'Firefox', value: 'Firefox', version: 'Firefox' },
                { name: 'Chrome', value: 'CriOS', version: 'version' },
                { name: 'Firefox', value: 'FxiOS', version: 'version' },
                { name: 'Edge', value: 'EdgiOS', version: 'version' },
                { name: 'Safari', value: 'Safari', version: 'Version' },
                { name: 'Internet Explorer', value: 'MSIE', version: 'MSIE' },
                { name: 'Opera', value: 'Opera', version: 'Opera' },
                { name: 'BlackBerry', value: 'CLDC', version: 'CLDC' },
                { name: 'Mozilla', value: 'Mozilla', version: 'Mozilla' }
            ],
            datadevice: [
                { name: 'Lenovo Tab', value: 'Lenovo TB', version: '' }
            ],
            init: function () {
                var agent = this.header.join(' '),
                    os = this.matchItem(agent, this.dataos),
                    browser = this.matchItem(agent, this.databrowser),
                    device = this.matchItem(agent, this.datadevice);

                return { os: os, browser: browser, device: device };
            },
            matchItem: function (string, data) {
                var i = 0,
                    j = 0,
                    html = '',
                    regex,
                    regexv,
                    match,
                    matches,
                    version;

                for (i = 0; i < data.length; i += 1) {
                    regex = new RegExp(data[i].value, 'i');
                    match = regex.test(string);
                    if (match) {
                        regexv = new RegExp(data[i].version + '[- /:;]([\\d._]+)', 'i');
                        matches = string.match(regexv);
                        version = '';
                        if (matches) { if (matches[1]) { matches = matches[1]; } }
                        if (matches) {
                            matches = matches.split(/[._]+/);
                            for (j = 0; j < matches.length; j += 1) {
                                if (j === 0) {
                                    version += matches[j] + '.';
                                } else {
                                    version += matches[j];
                                }
                            }
                        } else {
                            version = '0';
                        }
                        return {
                            name: data[i].name,
                            version: parseFloat(version),
                            deviceType: data[i].deviceType
                        };
                    }
                }
                return { name: 'unknown', version: 0 };
            }
        };

        self.platformInfo = function () {
            var platform = platformDetectionmodule.init();
            return platform;
        };

        self.isStaffPlatform = function () {
             return true;
           /* var platform = platformDetectionmodule.init();
           if ((platform.os.name === "iOS" && (platform.browser.name === "Safari" || platform.browser.name === "Chrome")) || (platform.os.name === "Android" && platform.browser.name === "Chrome" && platform.device.name !== "Lenovo Tab")) {
                return true;
            } else {
                return false;
            }*/
        };
    }]);

    module.exports = utilService.name;
})();

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../../../~/buffer/index.js */ "./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./src/app/services/state/app.local.store.js":
/* unknown exports provided */
/* all exports used */
/*!***************************************************!*\
  !*** ./src/app/services/state/app.local.store.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

(function () {
    'use strict';
    var angular = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
    var appState = angular.module('app').service('appState', ['localStorageService', 'UtilService', function (localStorageService, UtilService) {

        var self = this,
            keys = {
                APP_DATA: 'APP_DATA',
                URL_PARAMS_ID: 'URL_PARAMS_ID',
                CURRENT_ROUTE: 'CURRENT_ROUTE',
                STAFF_JOURNEY: 'STAFF_JOURNEY',
                CONTACT_DETAILS: 'CONTACT_DETAILS',
                DISABLE_BROWSER_CLOSE: 'DISABLE_BROWSER_CLOSE',
                VALIDATE_STAFF_DATA: 'VALIDATE_STAFF_DATA'
            };

        function setInStorage(key, value) {
            var encodedData = UtilService.encodeData(value);
            localStorageService.set(key, encodedData);
        };

        function getFromStorage(key) {
            var storageData = localStorageService.get(key);
            var decodedData = UtilService.decodeData(storageData);
            return decodedData;
        };

        function removeFromStorage(key) {
            return localStorageService.remove(key);
        };

        self.getApplicationData = function () {
            return getFromStorage(keys.APP_DATA);
        };

        self.setApplicationData = function (data) {
            setInStorage(keys.APP_DATA, data);
        };

        self.setValidateStaffDetails = function (data) {
            setInStorage(keys.VALIDATE_STAFF_DATA, data);
        };

        self.getValidateStaffDetails = function () {
            return getFromStorage(keys.VALIDATE_STAFF_DATA);
        };
        self.setHubSalaryFlag = function (value) {
            setInStorage(keys.HUB_SALARY_FLAG, value);
        };

        self.getHubSalaryFlag = function () {
            return getFromStorage(keys.HUB_SALARY_FLAG);
        };

        self.getEmployerName = function () {
            return getFromStorage(keys.EmployerName);
        };

        self.setEmployerName = function (data) {
            setInStorage(keys.EmployerName, data);
        };
        
        self.mergeApplicationData = function (data) {
            var appData = getFromStorage(keys.APP_DATA);
            appData = angular.merge({}, appData, data);
            setInStorage(keys.APP_DATA, appData);
        };

        self.removeApplicationData = function () {
            removeFromStorage(keys.APP_DATA);
        };

        self.setUrlParamId = function (paramId) {
            setInStorage(keys.URL_PARAMS_ID, paramId);
        };

        self.getUrlParamId = function () {
            return getFromStorage(keys.URL_PARAMS_ID);
        };

        self.removeUrlParamId = function () {
            removeFromStorage(keys.URL_PARAMS_ID);
        };

        self.setCurrentRoute = function (route) {
            setInStorage(keys.CURRENT_ROUTE, route);
        };

        self.getCurrentRoute = function () {
            return getFromStorage(keys.CURRENT_ROUTE);
        };

        self.setStaffJourney = function (value) {
            setInStorage(keys.STAFF_JOURNEY, value);
        };

        self.getStaffJourney = function () {
            return getFromStorage(keys.STAFF_JOURNEY);
        };

        self.isStaffJourney = function () {
            var x = getFromStorage(keys.STAFF_JOURNEY);
            return UtilService.isEmpty(x) ? false : x;
        };

        self.setContactDetails = function (value) {
            setInStorage(keys.CONTACT_DETAILS, value);
        };

        self.getContactDetails = function () {
            return getFromStorage(keys.CONTACT_DETAILS);
        };

        self.clearContactDetails = function () {
            removeFromStorage(keys.CONTACT_DETAILS);
        };

        self.setDisableBrowserClose = function (value) {
            setInStorage(keys.DISABLE_BROWSER_CLOSE, value);
        };

        self.isBrowserCloseDisabled = function () {
            var x = getFromStorage(keys.DISABLE_BROWSER_CLOSE);
            return UtilService.isEmpty(x) ? false : x;
        };

        self.clearAll = function () {
            return localStorageService.clearAll();
        };
        
        self.setRedactedAadhaar = function (value) {
            setInStorage(keys.RedactedAadhaar, value);
        };

        self.getRedactedAadhaar = function () {
            return getFromStorage(keys.RedactedAadhaar);
        };

        self.setAapsIssue = function (value) {
            setInStorage(keys.AapsIssue, value);
        };

        self.getAapsIssue = function () {
            return getFromStorage(keys.AapsIssue);
        };

        self.setOtpIssue = function (value) {
            setInStorage(keys.OtpIssue, value);
        };

        self.getOtpIssue = function () {
            return getFromStorage(keys.OtpIssue);
        };


    }]);

    module.exports = appState.name;
})();

/***/ }),

/***/ "./src/app/services/translate/app.translate.module.js":
/* unknown exports provided */
/* all exports used */
/*!************************************************************!*\
  !*** ./src/app/services/translate/app.translate.module.js ***!
  \************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var angular = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
__webpack_require__(/*! angular-cookies */ "./node_modules/angular-cookies/index.js");
__webpack_require__(/*! angular-translate */ "./node_modules/angular-translate/dist/angular-translate.js");
__webpack_require__(/*! angular-translate-handler-log */ "./node_modules/angular-translate-handler-log/angular-translate-handler-log.js");
// require('angular-translate-loader-static-files');
__webpack_require__(/*! angular-translate-loader-partial */ "./node_modules/angular-translate-loader-partial/angular-translate-loader-partial.js");
__webpack_require__(/*! angular-translate-storage-local */ "./node_modules/angular-translate-storage-local/angular-translate-storage-local.js");
__webpack_require__(/*! angular-translate-storage-cookie */ "./node_modules/angular-translate-storage-cookie/angular-translate-storage-cookie.js");
__webpack_require__(/*! angular-dynamic-locale */ "./node_modules/angular-dynamic-locale/src/tmhDynamicLocale.js");

function translateConfig($translateProvider, $translatePartialLoaderProvider, tmhDynamicLocaleProvider, LOCALES) {
    //To get warnings in the developer console, regarding forgotten IDs in translations
    $translateProvider.useMissingTranslationHandlerLog();
    // $translateProvider.useStaticFilesLoader({
    //     prefix: 'resources/locales/locale-',    // Path to translations files
    //     suffix: '.json'
    // });
    $translateProvider.useSanitizeValueStrategy('sanitize');
    // $translatePartialLoaderProvider.addPart('common');
    // $translatePartialLoaderProvider.addPart('login');
    // $translatePartialLoaderProvider.addPart('consents');
    // $translatePartialLoaderProvider.addPart('review');
    // $translatePartialLoaderProvider.addPart('applicant');
    $translateProvider.useLoader('$translatePartialLoader', {
        urlTemplate: 'resources/locales/{lang}/{part}.json'
    });

    var defaultLanguage = navigator.language || navigator.userLanguage;
    defaultLanguage = LOCALES.locales.hasOwnProperty(defaultLanguage) ? defaultLanguage : LOCALES.preferredLocale;
    $translateProvider.preferredLanguage(defaultLanguage); // is applied on first load
    $translateProvider.useLocalStorage(); // saves selected language to localStorage

    // Angular Dynamic Locale
    tmhDynamicLocaleProvider.localeLocationPattern('../node_modules/angular-i18n/angular-locale_{{locale}}.js');
}

var translateModule = angular.module('app.translate', [
    'ngCookies',
    'pascalprecht.translate',// angular-translate
    'tmh.dynamicLocale',//  angular-dynamic-locale
]).constant('LOCALES', {
    locales: {
        'en-US': 'English',
        'ru-RU': 'Русский'
    },
    'preferredLocale': 'en-US'
}).config(['$translateProvider', '$translatePartialLoaderProvider', 'tmhDynamicLocaleProvider', 'LOCALES', translateConfig]);

module.exports = translateModule.name;

/***/ }),

/***/ "./src/resources/config/env.prod.json":
/* unknown exports provided */
/* all exports used */
/*!********************************************!*\
  !*** ./src/resources/config/env.prod.json ***!
  \********************************************/
/***/ (function(module, exports) {

module.exports = {"name":"production","CORS":false,"LDAP":true,"EXT_API_URL":"http://localhost:9080/credit-cards","PERFIOS_URL":"https://app.perfios.com/KuberaVault/insights/start","integrationsActive":false,"version":"6"}

/***/ }),

/***/ "./src/resources/js/ui-select/select.js":
/* unknown exports provided */
/* all exports used */
/*!**********************************************!*\
  !*** ./src/resources/js/ui-select/select.js ***!
  \**********************************************/
/***/ (function(module, exports) {

/*!
 * ui-select
 * http://github.com/angular-ui/ui-select
 * Version: 0.19.8 - 2017-04-18T05:43:43.673Z
 * License: MIT
 */


(function () { 
"use strict";
var KEY = {
    TAB: 9,
    ENTER: 13,
    ESC: 27,
    SPACE: 32,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    HOME: 36,
    END: 35,
    BACKSPACE: 8,
    DELETE: 46,
    COMMAND: 91,

    MAP: { 91 : "COMMAND", 8 : "BACKSPACE" , 9 : "TAB" , 13 : "ENTER" , 16 : "SHIFT" , 17 : "CTRL" , 18 : "ALT" , 19 : "PAUSEBREAK" , 20 : "CAPSLOCK" , 27 : "ESC" , 32 : "SPACE" , 33 : "PAGE_UP", 34 : "PAGE_DOWN" , 35 : "END" , 36 : "HOME" , 37 : "LEFT" , 38 : "UP" , 39 : "RIGHT" , 40 : "DOWN" , 43 : "+" , 44 : "PRINTSCREEN" , 45 : "INSERT" , 46 : "DELETE", 48 : "0" , 49 : "1" , 50 : "2" , 51 : "3" , 52 : "4" , 53 : "5" , 54 : "6" , 55 : "7" , 56 : "8" , 57 : "9" , 59 : ";", 61 : "=" , 65 : "A" , 66 : "B" , 67 : "C" , 68 : "D" , 69 : "E" , 70 : "F" , 71 : "G" , 72 : "H" , 73 : "I" , 74 : "J" , 75 : "K" , 76 : "L", 77 : "M" , 78 : "N" , 79 : "O" , 80 : "P" , 81 : "Q" , 82 : "R" , 83 : "S" , 84 : "T" , 85 : "U" , 86 : "V" , 87 : "W" , 88 : "X" , 89 : "Y" , 90 : "Z", 96 : "0" , 97 : "1" , 98 : "2" , 99 : "3" , 100 : "4" , 101 : "5" , 102 : "6" , 103 : "7" , 104 : "8" , 105 : "9", 106 : "*" , 107 : "+" , 109 : "-" , 110 : "." , 111 : "/", 112 : "F1" , 113 : "F2" , 114 : "F3" , 115 : "F4" , 116 : "F5" , 117 : "F6" , 118 : "F7" , 119 : "F8" , 120 : "F9" , 121 : "F10" , 122 : "F11" , 123 : "F12", 144 : "NUMLOCK" , 145 : "SCROLLLOCK" , 186 : ";" , 187 : "=" , 188 : "," , 189 : "-" , 190 : "." , 191 : "/" , 192 : "`" , 219 : "[" , 220 : "\\" , 221 : "]" , 222 : "'"
    },

    isControl: function (e) {
        var k = e.which;
        switch (k) {
        case KEY.COMMAND:
        case KEY.SHIFT:
        case KEY.CTRL:
        case KEY.ALT:
            return true;
        }

        if (e.metaKey || e.ctrlKey || e.altKey) return true;

        return false;
    },
    isFunctionKey: function (k) {
        k = k.which ? k.which : k;
        return k >= 112 && k <= 123;
    },
    isVerticalMovement: function (k){
      return ~[KEY.UP, KEY.DOWN].indexOf(k);
    },
    isHorizontalMovement: function (k){
      return ~[KEY.LEFT,KEY.RIGHT,KEY.BACKSPACE,KEY.DELETE].indexOf(k);
    },
    toSeparator: function (k) {
      var sep = {ENTER:"\n",TAB:"\t",SPACE:" "}[k];
      if (sep) return sep;
      // return undefined for special keys other than enter, tab or space.
      // no way to use them to cut strings.
      return KEY[k] ? undefined : k;
    }
  };

function isNil(value) {
  return angular.isUndefined(value) || value === null;
}

/**
 * Add querySelectorAll() to jqLite.
 *
 * jqLite find() is limited to lookups by tag name.
 * TODO This will change with future versions of AngularJS, to be removed when this happens
 *
 * See jqLite.find - why not use querySelectorAll? https://github.com/angular/angular.js/issues/3586
 * See feat(jqLite): use querySelectorAll instead of getElementsByTagName in jqLite.find https://github.com/angular/angular.js/pull/3598
 */
if (angular.element.prototype.querySelectorAll === undefined) {
  angular.element.prototype.querySelectorAll = function(selector) {
    return angular.element(this[0].querySelectorAll(selector));
  };
}

/**
 * Add closest() to jqLite.
 */
if (angular.element.prototype.closest === undefined) {
  angular.element.prototype.closest = function( selector) {
    var elem = this[0];
    var matchesSelector = elem.matches || elem.webkitMatchesSelector || elem.mozMatchesSelector || elem.msMatchesSelector;

    while (elem) {
      if (matchesSelector.bind(elem)(selector)) {
        return elem;
      } else {
        elem = elem.parentElement;
      }
    }
    return false;
  };
}

var latestId = 0;

var uis = angular.module('ui.select', [])

.constant('uiSelectConfig', {
  theme: 'bootstrap',
  searchEnabled: true,
  sortable: false,
  placeholder: '', // Empty by default, like HTML tag <select>
  refreshDelay: 1000, // In milliseconds
  closeOnSelect: true,
  skipFocusser: false,
  dropdownPosition: 'auto',
  removeSelected: true,
  resetSearchInput: true,
  generateId: function() {
    return latestId++;
  },
  appendToBody: false,
  spinnerEnabled: false,
  spinnerClass: 'glyphicon glyphicon-refresh ui-select-spin',
  backspaceReset: true
})

// See Rename minErr and make it accessible from outside https://github.com/angular/angular.js/issues/6913
.service('uiSelectMinErr', function() {
  var minErr = angular.$$minErr('ui.select');
  return function() {
    var error = minErr.apply(this, arguments);
    var message = error.message.replace(new RegExp('\nhttp://errors.angularjs.org/.*'), '');
    return new Error(message);
  };
})

// Recreates old behavior of ng-transclude. Used internally.
.directive('uisTranscludeAppend', function () {
  return {
    link: function (scope, element, attrs, ctrl, transclude) {
        transclude(scope, function (clone) {
          element.append(clone);
        });
      }
    };
})

/**
 * Highlights text that matches $select.search.
 *
 * Taken from AngularUI Bootstrap Typeahead
 * See https://github.com/angular-ui/bootstrap/blob/0.10.0/src/typeahead/typeahead.js#L340
 */
.filter('highlight', function() {
  function escapeRegexp(queryToEscape) {
    return ('' + queryToEscape).replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
  }

  return function(matchItem, query) {
    return query && matchItem ? ('' + matchItem).replace(new RegExp(escapeRegexp(query), 'gi'), '<span class="ui-select-highlight">$&</span>') : matchItem;
  };
})

/**
 * A read-only equivalent of jQuery's offset function: http://api.jquery.com/offset/
 *
 * Taken from AngularUI Bootstrap Position:
 * See https://github.com/angular-ui/bootstrap/blob/master/src/position/position.js#L70
 */
.factory('uisOffset',
  ['$document', '$window',
  function ($document, $window) {

  return function(element) {
    var boundingClientRect = element[0].getBoundingClientRect();
    return {
      width: boundingClientRect.width || element.prop('offsetWidth'),
      height: boundingClientRect.height || element.prop('offsetHeight'),
      top: boundingClientRect.top + ($window.pageYOffset || $document[0].documentElement.scrollTop),
      left: boundingClientRect.left + ($window.pageXOffset || $document[0].documentElement.scrollLeft)
    };
  };
}]);

uis.directive('uiSelectChoices',
  ['uiSelectConfig', 'uisRepeatParser', 'uiSelectMinErr', '$compile', '$window',
  function(uiSelectConfig, RepeatParser, uiSelectMinErr, $compile, $window) {

  return {
    restrict: 'EA',
    require: '^uiSelect',
    replace: true,
    transclude: true,
    templateUrl: function(tElement) {
      // Needed so the uiSelect can detect the transcluded content
      tElement.addClass('ui-select-choices');

      // Gets theme attribute from parent (ui-select)
      var theme = tElement.parent().attr('theme') || uiSelectConfig.theme;
      return theme + '/choices.tpl.html';
    },

    compile: function(tElement, tAttrs) {

      if (!tAttrs.repeat) throw uiSelectMinErr('repeat', "Expected 'repeat' expression.");

      // var repeat = RepeatParser.parse(attrs.repeat);
      var groupByExp = tAttrs.groupBy;
      var groupFilterExp = tAttrs.groupFilter;

      if (groupByExp) {
        var groups = tElement.querySelectorAll('.ui-select-choices-group');
        if (groups.length !== 1) throw uiSelectMinErr('rows', "Expected 1 .ui-select-choices-group but got '{0}'.", groups.length);
        groups.attr('ng-repeat', RepeatParser.getGroupNgRepeatExpression());
      }

      var parserResult = RepeatParser.parse(tAttrs.repeat);

      var choices = tElement.querySelectorAll('.ui-select-choices-row');
      if (choices.length !== 1) {
        throw uiSelectMinErr('rows', "Expected 1 .ui-select-choices-row but got '{0}'.", choices.length);
      }

      choices.attr('ng-repeat', parserResult.repeatExpression(groupByExp))
             .attr('ng-if', '$select.open'); //Prevent unnecessary watches when dropdown is closed


      var rowsInner = tElement.querySelectorAll('.ui-select-choices-row-inner');
      if (rowsInner.length !== 1) {
        throw uiSelectMinErr('rows', "Expected 1 .ui-select-choices-row-inner but got '{0}'.", rowsInner.length);
      }
      rowsInner.attr('uis-transclude-append', ''); //Adding uisTranscludeAppend directive to row element after choices element has ngRepeat

      // If IE8 then need to target rowsInner to apply the ng-click attr as choices will not capture the event.
      var clickTarget = $window.document.addEventListener ? choices : rowsInner;
      clickTarget.attr('ng-click', '$select.select(' + parserResult.itemName + ',$select.skipFocusser,$event)');

      return function link(scope, element, attrs, $select) {


        $select.parseRepeatAttr(attrs.repeat, groupByExp, groupFilterExp); //Result ready at $select.parserResult
        $select.disableChoiceExpression = attrs.uiDisableChoice;
        $select.onHighlightCallback = attrs.onHighlight;
        $select.minimumInputLength = parseInt(attrs.minimumInputLength) || 0;
        $select.dropdownPosition = attrs.position ? attrs.position.toLowerCase() : uiSelectConfig.dropdownPosition;

        scope.$watch('$select.search', function(newValue) {
          if(newValue && !$select.open && $select.multiple) $select.activate(false, true);
          $select.activeIndex = $select.tagging.isActivated ? -1 : 0;
          if (!attrs.minimumInputLength || $select.search.length >= attrs.minimumInputLength) {
            $select.refresh(attrs.refresh);
          } else {
            $select.items = [];
          }
        });

        attrs.$observe('refreshDelay', function() {
          // $eval() is needed otherwise we get a string instead of a number
          var refreshDelay = scope.$eval(attrs.refreshDelay);
          $select.refreshDelay = refreshDelay !== undefined ? refreshDelay : uiSelectConfig.refreshDelay;
        });

        scope.$watch('$select.open', function(open) {
          if (open) {
            tElement.attr('role', 'listbox');
            $select.refresh(attrs.refresh);
          } else {
            element.removeAttr('role');
          }
        });
      };
    }
  };
}]);

/**
 * Contains ui-select "intelligence".
 *
 * The goal is to limit dependency on the DOM whenever possible and
 * put as much logic in the controller (instead of the link functions) as possible so it can be easily tested.
 */
uis.controller('uiSelectCtrl',
  ['$scope', '$element', '$timeout', '$filter', '$$uisDebounce', 'uisRepeatParser', 'uiSelectMinErr', 'uiSelectConfig', '$parse', '$injector', '$window',
  function($scope, $element, $timeout, $filter, $$uisDebounce, RepeatParser, uiSelectMinErr, uiSelectConfig, $parse, $injector, $window) {

  var ctrl = this;

  var EMPTY_SEARCH = '';

  ctrl.placeholder = uiSelectConfig.placeholder;
  ctrl.searchEnabled = uiSelectConfig.searchEnabled;
  ctrl.sortable = uiSelectConfig.sortable;
  ctrl.refreshDelay = uiSelectConfig.refreshDelay;
  ctrl.paste = uiSelectConfig.paste;
  ctrl.resetSearchInput = uiSelectConfig.resetSearchInput;
  ctrl.refreshing = false;
  ctrl.spinnerEnabled = uiSelectConfig.spinnerEnabled;
  ctrl.spinnerClass = uiSelectConfig.spinnerClass;
  ctrl.removeSelected = uiSelectConfig.removeSelected; //If selected item(s) should be removed from dropdown list
  ctrl.closeOnSelect = true; //Initialized inside uiSelect directive link function
  ctrl.skipFocusser = false; //Set to true to avoid returning focus to ctrl when item is selected
  ctrl.search = EMPTY_SEARCH;

  ctrl.activeIndex = 0; //Dropdown of choices
  ctrl.items = []; //All available choices

  ctrl.open = false;
  ctrl.focus = false;
  ctrl.disabled = false;
  ctrl.selected = undefined;

  ctrl.dropdownPosition = 'auto';

  ctrl.focusser = undefined; //Reference to input element used to handle focus events
  ctrl.multiple = undefined; // Initialized inside uiSelect directive link function
  ctrl.disableChoiceExpression = undefined; // Initialized inside uiSelectChoices directive link function
  ctrl.tagging = {isActivated: false, fct: undefined};
  ctrl.taggingTokens = {isActivated: false, tokens: undefined};
  ctrl.lockChoiceExpression = undefined; // Initialized inside uiSelectMatch directive link function
  ctrl.clickTriggeredSelect = false;
  ctrl.$filter = $filter;
  ctrl.$element = $element;

  // Use $injector to check for $animate and store a reference to it
  ctrl.$animate = (function () {
    try {
      return $injector.get('$animate');
    } catch (err) {
      // $animate does not exist
      return null;
    }
  })();

  ctrl.searchInput = $element.querySelectorAll('input.ui-select-search');
  if (ctrl.searchInput.length !== 1) {
    throw uiSelectMinErr('searchInput', "Expected 1 input.ui-select-search but got '{0}'.", ctrl.searchInput.length);
  }

  ctrl.isEmpty = function() {
    return isNil(ctrl.selected) || ctrl.selected === '' || (ctrl.multiple && ctrl.selected.length === 0);
  };

  function _findIndex(collection, predicate, thisArg){
    if (collection.findIndex){
      return collection.findIndex(predicate, thisArg);
    } else {
      var list = Object(collection);
      var length = list.length >>> 0;
      var value;

      for (var i = 0; i < length; i++) {
        value = list[i];
        if (predicate.call(thisArg, value, i, list)) {
          return i;
        }
      }
      return -1;
    }
  }

  // Most of the time the user does not want to empty the search input when in typeahead mode
  function _resetSearchInput() {
    if (ctrl.resetSearchInput) {
      ctrl.search = EMPTY_SEARCH;
      //reset activeIndex
      if (ctrl.selected && ctrl.items.length && !ctrl.multiple) {
        ctrl.activeIndex = _findIndex(ctrl.items, function(item){
          return angular.equals(this, item);
        }, ctrl.selected);
      }
    }
  }

    function _groupsFilter(groups, groupNames) {
      var i, j, result = [];
      for(i = 0; i < groupNames.length ;i++){
        for(j = 0; j < groups.length ;j++){
          if(groups[j].name == [groupNames[i]]){
            result.push(groups[j]);
          }
        }
      }
      return result;
    }

  // When the user clicks on ui-select, displays the dropdown list
  ctrl.activate = function(initSearchValue, avoidReset) {
    if (!ctrl.disabled  && !ctrl.open) {
      if(!avoidReset) _resetSearchInput();

      $scope.$broadcast('uis:activate');
      ctrl.open = true;
      ctrl.activeIndex = ctrl.activeIndex >= ctrl.items.length ? 0 : ctrl.activeIndex;
      // ensure that the index is set to zero for tagging variants
      // that where first option is auto-selected
      if ( ctrl.activeIndex === -1 && ctrl.taggingLabel !== false ) {
        ctrl.activeIndex = 0;
      }

      var container = $element.querySelectorAll('.ui-select-choices-content');
      var searchInput = $element.querySelectorAll('.ui-select-search');
      if (ctrl.$animate && ctrl.$animate.on && ctrl.$animate.enabled(container[0])) {
        var animateHandler = function(elem, phase) {
          if (phase === 'start' && ctrl.items.length === 0) {
            // Only focus input after the animation has finished
            ctrl.$animate.off('removeClass', searchInput[0], animateHandler);
            $timeout(function () {
              ctrl.focusSearchInput(initSearchValue);
            });
          } else if (phase === 'close') {
            // Only focus input after the animation has finished
            ctrl.$animate.off('enter', container[0], animateHandler);
            $timeout(function () {
              ctrl.focusSearchInput(initSearchValue);
            });
          }
        };

        if (ctrl.items.length > 0) {
          ctrl.$animate.on('enter', container[0], animateHandler);
        } else {
          ctrl.$animate.on('removeClass', searchInput[0], animateHandler);
        }
      } else {
        $timeout(function () {
          ctrl.focusSearchInput(initSearchValue);
          if(!ctrl.tagging.isActivated && ctrl.items.length > 1) {
            _ensureHighlightVisible();
          }
        });
      }
    }
    else if (ctrl.open && !ctrl.searchEnabled) {
      // Close the selection if we don't have search enabled, and we click on the select again
      ctrl.close();
    }
  };

  ctrl.focusSearchInput = function (initSearchValue) {
    ctrl.search = initSearchValue || ctrl.search;
    ctrl.searchInput[0].focus();
  };

  ctrl.findGroupByName = function(name) {
    return ctrl.groups && ctrl.groups.filter(function(group) {
      return group.name === name;
    })[0];
  };

  ctrl.parseRepeatAttr = function(repeatAttr, groupByExp, groupFilterExp) {
    function updateGroups(items) {
      var groupFn = $scope.$eval(groupByExp);
      ctrl.groups = [];
      angular.forEach(items, function(item) {
        var groupName = angular.isFunction(groupFn) ? groupFn(item) : item[groupFn];
        var group = ctrl.findGroupByName(groupName);
        if(group) {
          group.items.push(item);
        }
        else {
          ctrl.groups.push({name: groupName, items: [item]});
        }
      });
      if(groupFilterExp){
        var groupFilterFn = $scope.$eval(groupFilterExp);
        if( angular.isFunction(groupFilterFn)){
          ctrl.groups = groupFilterFn(ctrl.groups);
        } else if(angular.isArray(groupFilterFn)){
          ctrl.groups = _groupsFilter(ctrl.groups, groupFilterFn);
        }
      }
      ctrl.items = [];
      ctrl.groups.forEach(function(group) {
        ctrl.items = ctrl.items.concat(group.items);
      });
    }

    function setPlainItems(items) {
      ctrl.items = items || [];
    }

    ctrl.setItemsFn = groupByExp ? updateGroups : setPlainItems;

    ctrl.parserResult = RepeatParser.parse(repeatAttr);

    ctrl.isGrouped = !!groupByExp;
    ctrl.itemProperty = ctrl.parserResult.itemName;

    //If collection is an Object, convert it to Array

    var originalSource = ctrl.parserResult.source;

    //When an object is used as source, we better create an array and use it as 'source'
    var createArrayFromObject = function(){
      var origSrc = originalSource($scope);
      $scope.$uisSource = Object.keys(origSrc).map(function(v){
        var result = {};
        result[ctrl.parserResult.keyName] = v;
        result.value = origSrc[v];
        return result;
      });
    };

    if (ctrl.parserResult.keyName){ // Check for (key,value) syntax
      createArrayFromObject();
      ctrl.parserResult.source = $parse('$uisSource' + ctrl.parserResult.filters);
      $scope.$watch(originalSource, function(newVal, oldVal){
        if (newVal !== oldVal) createArrayFromObject();
      }, true);
    }

    ctrl.refreshItems = function (data){
      data = data || ctrl.parserResult.source($scope);
      var selectedItems = ctrl.selected;
      //TODO should implement for single mode removeSelected
      if (ctrl.isEmpty() || (angular.isArray(selectedItems) && !selectedItems.length) || !ctrl.multiple || !ctrl.removeSelected) {
        ctrl.setItemsFn(data);
      }else{
        if ( data !== undefined && data !== null ) {
          var filteredItems = data.filter(function(i) {
            return angular.isArray(selectedItems) ? selectedItems.every(function(selectedItem) {
              return !angular.equals(i, selectedItem);
            }) : !angular.equals(i, selectedItems);
          });
          ctrl.setItemsFn(filteredItems);
        }
      }
      if (ctrl.dropdownPosition === 'auto' || ctrl.dropdownPosition === 'up'){
        $scope.calculateDropdownPos();
      }
      $scope.$broadcast('uis:refresh');
    };

    // See https://github.com/angular/angular.js/blob/v1.2.15/src/ng/directive/ngRepeat.js#L259
    $scope.$watchCollection(ctrl.parserResult.source, function(items) {
      if (items === undefined || items === null) {
        // If the user specifies undefined or null => reset the collection
        // Special case: items can be undefined if the user did not initialized the collection on the scope
        // i.e $scope.addresses = [] is missing
        ctrl.items = [];
      } else {
        if (!angular.isArray(items)) {
          throw uiSelectMinErr('items', "Expected an array but got '{0}'.", items);
        } else {
          //Remove already selected items (ex: while searching)
          //TODO Should add a test
          ctrl.refreshItems(items);

          //update the view value with fresh data from items, if there is a valid model value
          if(angular.isDefined(ctrl.ngModel.$modelValue)) {
            ctrl.ngModel.$modelValue = null; //Force scope model value and ngModel value to be out of sync to re-run formatters
          }
        }
      }
    });

  };

  var _refreshDelayPromise;

  /**
   * Typeahead mode: lets the user refresh the collection using his own function.
   *
   * See Expose $select.search for external / remote filtering https://github.com/angular-ui/ui-select/pull/31
   */
  ctrl.refresh = function(refreshAttr) {
    if (refreshAttr !== undefined) {
      // Debounce
      // See https://github.com/angular-ui/bootstrap/blob/0.10.0/src/typeahead/typeahead.js#L155
      // FYI AngularStrap typeahead does not have debouncing: https://github.com/mgcrea/angular-strap/blob/v2.0.0-rc.4/src/typeahead/typeahead.js#L177
      if (_refreshDelayPromise) {
        $timeout.cancel(_refreshDelayPromise);
      }
      _refreshDelayPromise = $timeout(function() {
        if ($scope.$select.search.length >= $scope.$select.minimumInputLength) {
          var refreshPromise = $scope.$eval(refreshAttr);
          if (refreshPromise && angular.isFunction(refreshPromise.then) && !ctrl.refreshing) {
            ctrl.refreshing = true;
            refreshPromise.finally(function() {
              ctrl.refreshing = false;
            });
          }
        }
      }, ctrl.refreshDelay);
    }
  };

  ctrl.isActive = function(itemScope) {
    if ( !ctrl.open ) {
      return false;
    }
    var itemIndex = ctrl.items.indexOf(itemScope[ctrl.itemProperty]);
    var isActive =  itemIndex == ctrl.activeIndex;

    if ( !isActive || itemIndex < 0 ) {
      return false;
    }

    if (isActive && !angular.isUndefined(ctrl.onHighlightCallback)) {
      itemScope.$eval(ctrl.onHighlightCallback);
    }

    return isActive;
  };

  var _isItemSelected = function (item) {
    return (ctrl.selected && angular.isArray(ctrl.selected) &&
        ctrl.selected.filter(function (selection) { return angular.equals(selection, item); }).length > 0);
  };

  var disabledItems = [];

  function _updateItemDisabled(item, isDisabled) {
    var disabledItemIndex = disabledItems.indexOf(item);
    if (isDisabled && disabledItemIndex === -1) {
      disabledItems.push(item);
    }

    if (!isDisabled && disabledItemIndex > -1) {
      disabledItems.splice(disabledItemIndex, 1);
    }
  }

  function _isItemDisabled(item) {
    return disabledItems.indexOf(item) > -1;
  }

  ctrl.isDisabled = function(itemScope) {

    if (!ctrl.open) return;

    var item = itemScope[ctrl.itemProperty];
    var itemIndex = ctrl.items.indexOf(item);
    var isDisabled = false;

    if (itemIndex >= 0 && (angular.isDefined(ctrl.disableChoiceExpression) || ctrl.multiple)) {

      if (item.isTag) return false;

      if (ctrl.multiple) {
        isDisabled = _isItemSelected(item);
      }

      if (!isDisabled && angular.isDefined(ctrl.disableChoiceExpression)) {
        isDisabled = !!(itemScope.$eval(ctrl.disableChoiceExpression));
      }

      _updateItemDisabled(item, isDisabled);
    }

    return isDisabled;
  };


  // When the user selects an item with ENTER or clicks the dropdown
  ctrl.select = function(item, skipFocusser, $event) {
    if (isNil(item) || !_isItemDisabled(item)) {

      if ( ! ctrl.items && ! ctrl.search && ! ctrl.tagging.isActivated) return;

      if (!item || !_isItemDisabled(item)) {
        // if click is made on existing item, prevent from tagging, ctrl.search does not matter
        ctrl.clickTriggeredSelect = false;
        if($event && ($event.type === 'click' || $event.type === 'touchend') && item)
          ctrl.clickTriggeredSelect = true;

        if(ctrl.tagging.isActivated && ctrl.clickTriggeredSelect === false) {
          // if taggingLabel is disabled and item is undefined we pull from ctrl.search
          if ( ctrl.taggingLabel === false ) {
            if ( ctrl.activeIndex < 0 ) {
              if (item === undefined) {
                item = ctrl.tagging.fct !== undefined ? ctrl.tagging.fct(ctrl.search) : ctrl.search;
              }
              if (!item || angular.equals( ctrl.items[0], item ) ) {
                return;
              }
            } else {
              // keyboard nav happened first, user selected from dropdown
              item = ctrl.items[ctrl.activeIndex];
            }
          } else {
            // tagging always operates at index zero, taggingLabel === false pushes
            // the ctrl.search value without having it injected
            if ( ctrl.activeIndex === 0 ) {
              // ctrl.tagging pushes items to ctrl.items, so we only have empty val
              // for `item` if it is a detected duplicate
              if ( item === undefined ) return;

              // create new item on the fly if we don't already have one;
              // use tagging function if we have one
              if ( ctrl.tagging.fct !== undefined && typeof item === 'string' ) {
                item = ctrl.tagging.fct(item);
                if (!item) return;
              // if item type is 'string', apply the tagging label
              } else if ( typeof item === 'string' ) {
                // trim the trailing space
                item = item.replace(ctrl.taggingLabel,'').trim();
              }
            }
          }
          // search ctrl.selected for dupes potentially caused by tagging and return early if found
          if (_isItemSelected(item)) {
            ctrl.close(skipFocusser);
            return;
          }
        }
        _resetSearchInput();
        $scope.$broadcast('uis:select', item);

        if (ctrl.closeOnSelect) {
          ctrl.close(skipFocusser);
        }
      }
    }
  };

  // Closes the dropdown
  ctrl.close = function(skipFocusser) {
    if (!ctrl.open) return;
    if (ctrl.ngModel && ctrl.ngModel.$setTouched) ctrl.ngModel.$setTouched();
    ctrl.open = false;
    _resetSearchInput();
    $scope.$broadcast('uis:close', skipFocusser);

  };

  ctrl.setFocus = function(){
    if (!ctrl.focus) ctrl.focusInput[0].focus();
  };

  ctrl.clear = function($event) {
    ctrl.select(null);
    $event.stopPropagation();
    $timeout(function() {
      ctrl.focusser[0].focus();
    }, 0, false);
  };

  // Toggle dropdown
  ctrl.toggle = function(e) {
    if (ctrl.open) {
      ctrl.close();
      e.preventDefault();
      e.stopPropagation();
    } else {
      ctrl.activate();
    }
  };

  // Set default function for locked choices - avoids unnecessary
  // logic if functionality is not being used
  ctrl.isLocked = function () {
    return false;
  };

  $scope.$watch(function () {
    return angular.isDefined(ctrl.lockChoiceExpression) && ctrl.lockChoiceExpression !== "";
  }, _initaliseLockedChoices);

  function _initaliseLockedChoices(doInitalise) {
    if(!doInitalise) return;

    var lockedItems = [];

    function _updateItemLocked(item, isLocked) {
      var lockedItemIndex = lockedItems.indexOf(item);
      if (isLocked && lockedItemIndex === -1) {
        lockedItems.push(item);
        }

      if (!isLocked && lockedItemIndex > -1) {
        lockedItems.splice(lockedItemIndex, 1);
      }
    }

    function _isItemlocked(item) {
      return lockedItems.indexOf(item) > -1;
    }

    ctrl.isLocked = function (itemScope, itemIndex) {
      var isLocked = false,
          item = ctrl.selected[itemIndex];

      if(item) {
        if (itemScope) {
          isLocked = !!(itemScope.$eval(ctrl.lockChoiceExpression));
          _updateItemLocked(item, isLocked);
        } else {
          isLocked = _isItemlocked(item);
        }
      }

      return isLocked;
    };
  }


  var sizeWatch = null;
  var updaterScheduled = false;
  ctrl.sizeSearchInput = function() {

    var input = ctrl.searchInput[0],
        container = ctrl.$element[0],
        calculateContainerWidth = function() {
          // Return the container width only if the search input is visible
          return container.clientWidth * !!input.offsetParent;
        },
        updateIfVisible = function(containerWidth) {
          if (containerWidth === 0) {
            return false;
          }
          var inputWidth = containerWidth - input.offsetLeft;
          if (inputWidth < 50) inputWidth = containerWidth;
          ctrl.searchInput.css('width', inputWidth+'px');
          return true;
        };

    ctrl.searchInput.css('width', '10px');
    $timeout(function() { //Give tags time to render correctly
      if (sizeWatch === null && !updateIfVisible(calculateContainerWidth())) {
        sizeWatch = $scope.$watch(function() {
          if (!updaterScheduled) {
            updaterScheduled = true;
            $scope.$$postDigest(function() {
              updaterScheduled = false;
              if (updateIfVisible(calculateContainerWidth())) {
                sizeWatch();
                sizeWatch = null;
              }
            });
          }
        }, angular.noop);
      }
    });
  };

  function _handleDropDownSelection(key) {
    var processed = true;
    switch (key) {
      case KEY.DOWN:
        if (!ctrl.open && ctrl.multiple) ctrl.activate(false, true); //In case its the search input in 'multiple' mode
        else if (ctrl.activeIndex < ctrl.items.length - 1) {
          var idx = ++ctrl.activeIndex;
          while(_isItemDisabled(ctrl.items[idx]) && idx < ctrl.items.length) {
            ctrl.activeIndex = ++idx;
          }
        }
        break;
      case KEY.UP:
        var minActiveIndex = (ctrl.search.length === 0 && ctrl.tagging.isActivated) ? -1 : 0;
        if (!ctrl.open && ctrl.multiple) ctrl.activate(false, true); //In case its the search input in 'multiple' mode
        else if (ctrl.activeIndex > minActiveIndex) {
          var idxmin = --ctrl.activeIndex;
          while(_isItemDisabled(ctrl.items[idxmin]) && idxmin > minActiveIndex) {
            ctrl.activeIndex = --idxmin;
          }
        }
        break;
      case KEY.TAB:
        if (!ctrl.multiple || ctrl.open) ctrl.select(ctrl.items[ctrl.activeIndex], true);
        break;
      case KEY.ENTER:
        if(ctrl.open && (ctrl.tagging.isActivated || ctrl.activeIndex >= 0)){
          ctrl.select(ctrl.items[ctrl.activeIndex], ctrl.skipFocusser); // Make sure at least one dropdown item is highlighted before adding if not in tagging mode
        } else {
          ctrl.activate(false, true); //In case its the search input in 'multiple' mode
        }
        break;
      case KEY.ESC:
        ctrl.close();
        break;
      default:
        processed = false;
    }
    return processed;
  }

  // Bind to keyboard shortcuts
  ctrl.searchInput.on('keydown', function(e) {

    var key = e.which;

    if (~[KEY.ENTER,KEY.ESC].indexOf(key)){
      e.preventDefault();
      e.stopPropagation();
    }

    $scope.$apply(function() {

      var tagged = false;

      if (ctrl.items.length > 0 || ctrl.tagging.isActivated) {
        if(!_handleDropDownSelection(key) && !ctrl.searchEnabled) {
          e.preventDefault();
          e.stopPropagation();
        }
        if ( ctrl.taggingTokens.isActivated ) {
          for (var i = 0; i < ctrl.taggingTokens.tokens.length; i++) {
            if ( ctrl.taggingTokens.tokens[i] === KEY.MAP[e.keyCode] ) {
              // make sure there is a new value to push via tagging
              if ( ctrl.search.length > 0 ) {
                tagged = true;
              }
            }
          }
          if ( tagged ) {
            $timeout(function() {
              ctrl.searchInput.triggerHandler('tagged');
              var newItem = ctrl.search.replace(KEY.MAP[e.keyCode],'').trim();
              if ( ctrl.tagging.fct ) {
                newItem = ctrl.tagging.fct( newItem );
              }
              if (newItem) ctrl.select(newItem, true);
            });
          }
        }
      }

    });

    if(KEY.isVerticalMovement(key) && ctrl.items.length > 0){
      _ensureHighlightVisible();
    }

    if (key === KEY.ENTER || key === KEY.ESC) {
      e.preventDefault();
      e.stopPropagation();
    }

  });

  ctrl.searchInput.on('paste', function (e) {
    var data;

    if (window.clipboardData && window.clipboardData.getData) { // IE
      data = window.clipboardData.getData('Text');
    } else {
      data = (e.originalEvent || e).clipboardData.getData('text/plain');
    }

    // Prepend the current input field text to the paste buffer.
    data = ctrl.search + data;

    if (data && data.length > 0) {
      // If tagging try to split by tokens and add items
      if (ctrl.taggingTokens.isActivated) {
        var items = [];
        for (var i = 0; i < ctrl.taggingTokens.tokens.length; i++) {  // split by first token that is contained in data
          var separator = KEY.toSeparator(ctrl.taggingTokens.tokens[i]) || ctrl.taggingTokens.tokens[i];
          if (data.indexOf(separator) > -1) {
            items = data.split(separator);
            break;  // only split by one token
          }
        }
        if (items.length === 0) {
          items = [data];
        }
        var oldsearch = ctrl.search;
        angular.forEach(items, function (item) {
          var newItem = ctrl.tagging.fct ? ctrl.tagging.fct(item) : item;
          if (newItem) {
            ctrl.select(newItem, true);
          }
        });
        ctrl.search = oldsearch || EMPTY_SEARCH;
        e.preventDefault();
        e.stopPropagation();
      } else if (ctrl.paste) {
        ctrl.paste(data);
        ctrl.search = EMPTY_SEARCH;
        e.preventDefault();
        e.stopPropagation();
      }
    }
  });

  ctrl.searchInput.on('tagged', function() {
    $timeout(function() {
      _resetSearchInput();
    });
  });

  // See https://github.com/ivaynberg/select2/blob/3.4.6/select2.js#L1431
  function _ensureHighlightVisible() {
    var container = $element.querySelectorAll('.ui-select-choices-content');
    var choices = container.querySelectorAll('.ui-select-choices-row');
    if (choices.length < 1) {
      throw uiSelectMinErr('choices', "Expected multiple .ui-select-choices-row but got '{0}'.", choices.length);
    }

    if (ctrl.activeIndex < 0) {
      return;
    }

    var highlighted = choices[ctrl.activeIndex];
    var posY = highlighted.offsetTop + highlighted.clientHeight - container[0].scrollTop;
    var height = container[0].offsetHeight;

    if (posY > height) {
      container[0].scrollTop += posY - height;
    } else if (posY < highlighted.clientHeight) {
      if (ctrl.isGrouped && ctrl.activeIndex === 0)
        container[0].scrollTop = 0; //To make group header visible when going all the way up
      else
        container[0].scrollTop -= highlighted.clientHeight - posY;
    }
  }

  var onResize = $$uisDebounce(function() {
    ctrl.sizeSearchInput();
  }, 50);

  angular.element($window).bind('resize', onResize);

  $scope.$on('$destroy', function() {
    ctrl.searchInput.off('keyup keydown tagged blur paste');
    angular.element($window).off('resize', onResize);
  });

  $scope.$watch('$select.activeIndex', function(activeIndex) {
    if (activeIndex)
      $element.find('input').attr(
        'aria-activedescendant',
        'ui-select-choices-row-' + ctrl.generatedId + '-' + activeIndex);
  });

  $scope.$watch('$select.open', function(open) {
    if (!open)
      $element.find('input').removeAttr('aria-activedescendant');
  });
}]);

uis.directive('uiSelect',
  ['$document', 'uiSelectConfig', 'uiSelectMinErr', 'uisOffset', '$compile', '$parse', '$timeout',
  function($document, uiSelectConfig, uiSelectMinErr, uisOffset, $compile, $parse, $timeout) {

  return {
    restrict: 'EA',
    templateUrl: function(tElement, tAttrs) {
      var theme = tAttrs.theme || uiSelectConfig.theme;
      return theme + (angular.isDefined(tAttrs.multiple) ? '/select-multiple.tpl.html' : '/select.tpl.html');
    },
    replace: true,
    transclude: true,
    require: ['uiSelect', '^ngModel'],
    scope: true,

    controller: 'uiSelectCtrl',
    controllerAs: '$select',
    compile: function(tElement, tAttrs) {

      // Allow setting ngClass on uiSelect
      var match = /{(.*)}\s*{(.*)}/.exec(tAttrs.ngClass);
      if(match) {
        var combined = '{'+ match[1] +', '+ match[2] +'}';
        tAttrs.ngClass = combined;
        tElement.attr('ng-class', combined);
      }

      //Multiple or Single depending if multiple attribute presence
      if (angular.isDefined(tAttrs.multiple))
        tElement.append('<ui-select-multiple/>').removeAttr('multiple');
      else
        tElement.append('<ui-select-single/>');

      if (tAttrs.inputId)
        tElement.querySelectorAll('input.ui-select-search')[0].id = tAttrs.inputId;

      return function(scope, element, attrs, ctrls, transcludeFn) {

        var $select = ctrls[0];
        var ngModel = ctrls[1];

        $select.generatedId = uiSelectConfig.generateId();
        $select.baseTitle = attrs.title || 'Combo box';
        $select.focusserTitle = $select.baseTitle + ' focus';
        $select.focusserId = 'focusser-' + $select.generatedId;

        $select.closeOnSelect = function() {
          if (angular.isDefined(attrs.closeOnSelect)) {
            return $parse(attrs.closeOnSelect)();
          } else {
            return uiSelectConfig.closeOnSelect;
          }
        }();

        scope.$watch('skipFocusser', function() {
            var skipFocusser = scope.$eval(attrs.skipFocusser);
            $select.skipFocusser = skipFocusser !== undefined ? skipFocusser : uiSelectConfig.skipFocusser;
        });

        $select.onSelectCallback = $parse(attrs.onSelect);
        $select.onRemoveCallback = $parse(attrs.onRemove);

        //Set reference to ngModel from uiSelectCtrl
        $select.ngModel = ngModel;

        $select.choiceGrouped = function(group){
          return $select.isGrouped && group && group.name;
        };

        if(attrs.tabindex){
          attrs.$observe('tabindex', function(value) {
            $select.focusInput.attr('tabindex', value);
            element.removeAttr('tabindex');
          });
        }

        scope.$watch(function () { return scope.$eval(attrs.searchEnabled); }, function(newVal) {
          $select.searchEnabled = newVal !== undefined ? newVal : uiSelectConfig.searchEnabled;
        });

        scope.$watch('sortable', function() {
            var sortable = scope.$eval(attrs.sortable);
            $select.sortable = sortable !== undefined ? sortable : uiSelectConfig.sortable;
        });

        attrs.$observe('backspaceReset', function() {
          // $eval() is needed otherwise we get a string instead of a boolean
          var backspaceReset = scope.$eval(attrs.backspaceReset);
          $select.backspaceReset = backspaceReset !== undefined ? backspaceReset : true;
        });

        attrs.$observe('limit', function() {
          //Limit the number of selections allowed
          $select.limit = (angular.isDefined(attrs.limit)) ? parseInt(attrs.limit, 10) : undefined;
        });

        scope.$watch('removeSelected', function() {
            var removeSelected = scope.$eval(attrs.removeSelected);
            $select.removeSelected = removeSelected !== undefined ? removeSelected : uiSelectConfig.removeSelected;
        });

        attrs.$observe('disabled', function() {
          // No need to use $eval() (thanks to ng-disabled) since we already get a boolean instead of a string
          $select.disabled = attrs.disabled !== undefined ? attrs.disabled : false;
        });
        
        attrs.$observe('ariaLabel', function() {
          // Accessibility fix by NEWGEN: aria-label for Combobox
          $select.ariaLabel = attrs.ariaLabel ? attrs.ariaLabel : "";
        });
        
        attrs.$observe('ariaDescribedby', function() {
          // Accessibility fix by NEWGEN: aria-describedby for Combobox
          $select.ariaDescribedby = attrs.ariaDescribedby ? attrs.ariaDescribedby : "";
        });
        
        attrs.$observe('required', function() {
          // Accessibility fix by NEWGEN:
          $select.required = attrs.required ? attrs.required : false;
        });
        
        attrs.$observe('resetSearchInput', function() {
          // $eval() is needed otherwise we get a string instead of a boolean
          var resetSearchInput = scope.$eval(attrs.resetSearchInput);
          $select.resetSearchInput = resetSearchInput !== undefined ? resetSearchInput : true;
        });

        attrs.$observe('paste', function() {
          $select.paste = scope.$eval(attrs.paste);
        });

        attrs.$observe('tagging', function() {
          if(attrs.tagging !== undefined)
          {
            // $eval() is needed otherwise we get a string instead of a boolean
            var taggingEval = scope.$eval(attrs.tagging);
            $select.tagging = {isActivated: true, fct: taggingEval !== true ? taggingEval : undefined};
          }
          else
          {
            $select.tagging = {isActivated: false, fct: undefined};
          }
        });

        attrs.$observe('taggingLabel', function() {
          if(attrs.tagging !== undefined )
          {
            // check eval for FALSE, in this case, we disable the labels
            // associated with tagging
            if ( attrs.taggingLabel === 'false' ) {
              $select.taggingLabel = false;
            }
            else
            {
              $select.taggingLabel = attrs.taggingLabel !== undefined ? attrs.taggingLabel : '(new)';
            }
          }
        });

        attrs.$observe('taggingTokens', function() {
          if (attrs.tagging !== undefined) {
            var tokens = attrs.taggingTokens !== undefined ? attrs.taggingTokens.split('|') : [',','ENTER'];
            $select.taggingTokens = {isActivated: true, tokens: tokens };
          }
        });

        attrs.$observe('spinnerEnabled', function() {
          // $eval() is needed otherwise we get a string instead of a boolean
          var spinnerEnabled = scope.$eval(attrs.spinnerEnabled);
          $select.spinnerEnabled = spinnerEnabled !== undefined ? spinnerEnabled : uiSelectConfig.spinnerEnabled;
        });

        attrs.$observe('spinnerClass', function() {
          var spinnerClass = attrs.spinnerClass;
          $select.spinnerClass = spinnerClass !== undefined ? attrs.spinnerClass : uiSelectConfig.spinnerClass;
        });

        //Automatically gets focus when loaded
        if (angular.isDefined(attrs.autofocus)){
          $timeout(function(){
            $select.setFocus();
          });
        }

        //Gets focus based on scope event name (e.g. focus-on='SomeEventName')
        if (angular.isDefined(attrs.focusOn)){
          scope.$on(attrs.focusOn, function() {
              $timeout(function(){
                $select.setFocus();
              });
          });
        }

        function onDocumentClick(e) {
          if (!$select.open) return; //Skip it if dropdown is close

          var contains = false;

          if (window.jQuery) {
            // Firefox 3.6 does not support element.contains()
            // See Node.contains https://developer.mozilla.org/en-US/docs/Web/API/Node.contains
            contains = window.jQuery.contains(element[0], e.target);
          } else {
            contains = element[0].contains(e.target);
          }

          if (!contains && !$select.clickTriggeredSelect) {
            var skipFocusser;
            if (!$select.skipFocusser) {
              //Will lose focus only with certain targets
              var focusableControls = ['input','button','textarea','select'];
              var targetController = angular.element(e.target).controller('uiSelect'); //To check if target is other ui-select
              skipFocusser = targetController && targetController !== $select; //To check if target is other ui-select
              if (!skipFocusser) skipFocusser =  ~focusableControls.indexOf(e.target.tagName.toLowerCase()); //Check if target is input, button or textarea
            } else {
              skipFocusser = true;
            }
            $select.close(skipFocusser);
            scope.$digest();
          }
          $select.clickTriggeredSelect = false;
        }

        // See Click everywhere but here event http://stackoverflow.com/questions/12931369
        $document.on('click', onDocumentClick);

        scope.$on('$destroy', function() {
          $document.off('click', onDocumentClick);
        });

        // Move transcluded elements to their correct position in main template
        transcludeFn(scope, function(clone) {
          // See Transclude in AngularJS http://blog.omkarpatil.com/2012/11/transclude-in-angularjs.html

          // One day jqLite will be replaced by jQuery and we will be able to write:
          // var transcludedElement = clone.filter('.my-class')
          // instead of creating a hackish DOM element:
          var transcluded = angular.element('<div>').append(clone);

          var transcludedMatch = transcluded.querySelectorAll('.ui-select-match');
          transcludedMatch.removeAttr('ui-select-match'); //To avoid loop in case directive as attr
          transcludedMatch.removeAttr('data-ui-select-match'); // Properly handle HTML5 data-attributes
          if (transcludedMatch.length !== 1) {
            throw uiSelectMinErr('transcluded', "Expected 1 .ui-select-match but got '{0}'.", transcludedMatch.length);
          }
          element.querySelectorAll('.ui-select-match').replaceWith(transcludedMatch);

          var transcludedChoices = transcluded.querySelectorAll('.ui-select-choices');
          transcludedChoices.removeAttr('ui-select-choices'); //To avoid loop in case directive as attr
          transcludedChoices.removeAttr('data-ui-select-choices'); // Properly handle HTML5 data-attributes
          if (transcludedChoices.length !== 1) {
            throw uiSelectMinErr('transcluded', "Expected 1 .ui-select-choices but got '{0}'.", transcludedChoices.length);
          }
          element.querySelectorAll('.ui-select-choices').replaceWith(transcludedChoices);

          var transcludedNoChoice = transcluded.querySelectorAll('.ui-select-no-choice');
          transcludedNoChoice.removeAttr('ui-select-no-choice'); //To avoid loop in case directive as attr
          transcludedNoChoice.removeAttr('data-ui-select-no-choice'); // Properly handle HTML5 data-attributes
          if (transcludedNoChoice.length == 1) {
            element.querySelectorAll('.ui-select-no-choice').replaceWith(transcludedNoChoice);
          }
        });

        // Support for appending the select field to the body when its open
        var appendToBody = scope.$eval(attrs.appendToBody);
        if (appendToBody !== undefined ? appendToBody : uiSelectConfig.appendToBody) {
          scope.$watch('$select.open', function(isOpen) {
            if (isOpen) {
              positionDropdown();
            } else {
              resetDropdown();
            }
          });

          // Move the dropdown back to its original location when the scope is destroyed. Otherwise
          // it might stick around when the user routes away or the select field is otherwise removed
          scope.$on('$destroy', function() {
            resetDropdown();
          });
        }

        // Hold on to a reference to the .ui-select-container element for appendToBody support
        var placeholder = null,
            originalWidth = '';

        function positionDropdown() {
          // Remember the absolute position of the element
          var offset = uisOffset(element);

          // Clone the element into a placeholder element to take its original place in the DOM
          placeholder = angular.element('<div class="ui-select-placeholder"></div>');
          placeholder[0].style.width = offset.width + 'px';
          placeholder[0].style.height = offset.height + 'px';
          element.after(placeholder);

          // Remember the original value of the element width inline style, so it can be restored
          // when the dropdown is closed
          originalWidth = element[0].style.width;

          // Now move the actual dropdown element to the end of the body
          $document.find('body').append(element);

          element[0].style.position = 'absolute';
          element[0].style.left = offset.left + 'px';
          element[0].style.top = offset.top + 'px';
          element[0].style.width = offset.width + 'px';
        }

        function resetDropdown() {
          if (placeholder === null) {
            // The dropdown has not actually been display yet, so there's nothing to reset
            return;
          }

          // Move the dropdown element back to its original location in the DOM
          placeholder.replaceWith(element);
          placeholder = null;

          element[0].style.position = '';
          element[0].style.left = '';
          element[0].style.top = '';
          element[0].style.width = originalWidth;

          // Set focus back on to the moved element
          $select.setFocus();
        }

        // Hold on to a reference to the .ui-select-dropdown element for direction support.
        var dropdown = null,
            directionUpClassName = 'direction-up';

        // Support changing the direction of the dropdown if there isn't enough space to render it.
        scope.$watch('$select.open', function() {

          if ($select.dropdownPosition === 'auto' || $select.dropdownPosition === 'up'){
            scope.calculateDropdownPos();
          }

        });

        var setDropdownPosUp = function(offset, offsetDropdown){

          offset = offset || uisOffset(element);
          offsetDropdown = offsetDropdown || uisOffset(dropdown);

          dropdown[0].style.position = 'absolute';
          dropdown[0].style.top = (offsetDropdown.height * -1) + 'px';
          element.addClass(directionUpClassName);

        };

        var setDropdownPosDown = function(offset, offsetDropdown){

          element.removeClass(directionUpClassName);

          offset = offset || uisOffset(element);
          offsetDropdown = offsetDropdown || uisOffset(dropdown);

          dropdown[0].style.position = '';
          dropdown[0].style.top = '';

        };

        var calculateDropdownPosAfterAnimation = function() {
          // Delay positioning the dropdown until all choices have been added so its height is correct.
          $timeout(function() {
            if ($select.dropdownPosition === 'up') {
              //Go UP
              setDropdownPosUp();
            } else {
              //AUTO
              element.removeClass(directionUpClassName);

              var offset = uisOffset(element);
              var offsetDropdown = uisOffset(dropdown);

              //https://code.google.com/p/chromium/issues/detail?id=342307#c4
              var scrollTop = $document[0].documentElement.scrollTop || $document[0].body.scrollTop; //To make it cross browser (blink, webkit, IE, Firefox).

              // Determine if the direction of the dropdown needs to be changed.
              if (offset.top + offset.height + offsetDropdown.height > scrollTop + $document[0].documentElement.clientHeight) {
                //Go UP
                setDropdownPosUp(offset, offsetDropdown);
              }else{
                //Go DOWN
                setDropdownPosDown(offset, offsetDropdown);
              }
            }

            // Display the dropdown once it has been positioned.
            dropdown[0].style.opacity = 1;
          });
        };

        var opened = false;
        
        scope.calculateDropdownPos = function() {
          if ($select.open) {
            dropdown = angular.element(element).querySelectorAll('.ui-select-dropdown');

            if (dropdown.length === 0) {
              return;
            }

           // Hide the dropdown so there is no flicker until $timeout is done executing.
           if ($select.search === '' && !opened) {
              dropdown[0].style.opacity = 0;
              opened = true;
           }

            if (!uisOffset(dropdown).height && $select.$animate && $select.$animate.on && $select.$animate.enabled(dropdown)) {
              var needsCalculated = true;

              $select.$animate.on('enter', dropdown, function (elem, phase) {
                if (phase === 'close' && needsCalculated) {
                  calculateDropdownPosAfterAnimation();
                  needsCalculated = false;
                }
              });
            } else {
              calculateDropdownPosAfterAnimation();
            }
          } else {
            if (dropdown === null || dropdown.length === 0) {
              return;
            }

            // Reset the position of the dropdown.
            dropdown[0].style.opacity = 0;
            dropdown[0].style.position = '';
            dropdown[0].style.top = '';
            element.removeClass(directionUpClassName);
          }
        };
      };
    }
  };
}]);

uis.directive('uiSelectMatch', ['uiSelectConfig', function(uiSelectConfig) {
  return {
    restrict: 'EA',
    require: '^uiSelect',
    replace: true,
    transclude: true,
    templateUrl: function(tElement) {
      // Needed so the uiSelect can detect the transcluded content
      tElement.addClass('ui-select-match');

      var parent = tElement.parent();
      // Gets theme attribute from parent (ui-select)
      var theme = getAttribute(parent, 'theme') || uiSelectConfig.theme;
      var multi = angular.isDefined(getAttribute(parent, 'multiple'));

      return theme + (multi ? '/match-multiple.tpl.html' : '/match.tpl.html');      
    },
    link: function(scope, element, attrs, $select) {
      $select.lockChoiceExpression = attrs.uiLockChoice;
      attrs.$observe('placeholder', function(placeholder) {
        $select.placeholder = placeholder !== undefined ? placeholder : uiSelectConfig.placeholder;
      });

      function setAllowClear(allow) {
        $select.allowClear = (angular.isDefined(allow)) ? (allow === '') ? true : (allow.toLowerCase() === 'true') : false;
      }

      attrs.$observe('allowClear', setAllowClear);
      setAllowClear(attrs.allowClear);

      if($select.multiple){
        $select.sizeSearchInput();
      }

    }
  };

  function getAttribute(elem, attribute) {
    if (elem[0].hasAttribute(attribute))
      return elem.attr(attribute);

    if (elem[0].hasAttribute('data-' + attribute))
      return elem.attr('data-' + attribute);

    if (elem[0].hasAttribute('x-' + attribute))
      return elem.attr('x-' + attribute);
  }
}]);

uis.directive('uiSelectMultiple', ['uiSelectMinErr','$timeout', function(uiSelectMinErr, $timeout) {
  return {
    restrict: 'EA',
    require: ['^uiSelect', '^ngModel'],

    controller: ['$scope','$timeout', function($scope, $timeout){

      var ctrl = this,
          $select = $scope.$select,
          ngModel;

      if (angular.isUndefined($select.selected))
        $select.selected = [];

      //Wait for link fn to inject it
      $scope.$evalAsync(function(){ ngModel = $scope.ngModel; });

      ctrl.activeMatchIndex = -1;

      ctrl.updateModel = function(){
        ngModel.$setViewValue(Date.now()); //Set timestamp as a unique string to force changes
        ctrl.refreshComponent();
      };

      ctrl.refreshComponent = function(){
        //Remove already selected items
        //e.g. When user clicks on a selection, the selected array changes and
        //the dropdown should remove that item
        if($select.refreshItems){
          $select.refreshItems();
        }
        if($select.sizeSearchInput){
          $select.sizeSearchInput();
        }
      };

      // Remove item from multiple select
      ctrl.removeChoice = function(index){

        // if the choice is locked, don't remove it
        if($select.isLocked(null, index)) return false;

        var removedChoice = $select.selected[index];

        var locals = {};
        locals[$select.parserResult.itemName] = removedChoice;

        $select.selected.splice(index, 1);
        ctrl.activeMatchIndex = -1;
        $select.sizeSearchInput();

        // Give some time for scope propagation.
        $timeout(function(){
          $select.onRemoveCallback($scope, {
            $item: removedChoice,
            $model: $select.parserResult.modelMapper($scope, locals)
          });
        });

        ctrl.updateModel();

        return true;
      };

      ctrl.getPlaceholder = function(){
        //Refactor single?
        if($select.selected && $select.selected.length) return;
        return $select.placeholder;
      };


    }],
    controllerAs: '$selectMultiple',

    link: function(scope, element, attrs, ctrls) {

      var $select = ctrls[0];
      var ngModel = scope.ngModel = ctrls[1];
      var $selectMultiple = scope.$selectMultiple;

      //$select.selected = raw selected objects (ignoring any property binding)

      $select.multiple = true;

      //Input that will handle focus
      $select.focusInput = $select.searchInput;

      //Properly check for empty if set to multiple
      ngModel.$isEmpty = function(value) {
        return !value || value.length === 0;
      };

      //From view --> model
      ngModel.$parsers.unshift(function () {
        var locals = {},
            result,
            resultMultiple = [];
        for (var j = $select.selected.length - 1; j >= 0; j--) {
          locals = {};
          locals[$select.parserResult.itemName] = $select.selected[j];
          result = $select.parserResult.modelMapper(scope, locals);
          resultMultiple.unshift(result);
        }
        return resultMultiple;
      });

      // From model --> view
      ngModel.$formatters.unshift(function (inputValue) {
        var data = $select.parserResult && $select.parserResult.source (scope, { $select : {search:''}}), //Overwrite $search
            locals = {},
            result;
        if (!data) return inputValue;
        var resultMultiple = [];
        var checkFnMultiple = function(list, value){
          if (!list || !list.length) return;
          for (var p = list.length - 1; p >= 0; p--) {
            locals[$select.parserResult.itemName] = list[p];
            result = $select.parserResult.modelMapper(scope, locals);
            if($select.parserResult.trackByExp){
                var propsItemNameMatches = /(\w*)\./.exec($select.parserResult.trackByExp);
                var matches = /\.([^\s]+)/.exec($select.parserResult.trackByExp);
                if(propsItemNameMatches && propsItemNameMatches.length > 0 && propsItemNameMatches[1] == $select.parserResult.itemName){
                  if(matches && matches.length>0 && result[matches[1]] == value[matches[1]]){
                      resultMultiple.unshift(list[p]);
                      return true;
                  }
                }
            }
            if (angular.equals(result,value)){
              resultMultiple.unshift(list[p]);
              return true;
            }
          }
          return false;
        };
        if (!inputValue) return resultMultiple; //If ngModel was undefined
        for (var k = inputValue.length - 1; k >= 0; k--) {
          //Check model array of currently selected items
          if (!checkFnMultiple($select.selected, inputValue[k])){
            //Check model array of all items available
            if (!checkFnMultiple(data, inputValue[k])){
              //If not found on previous lists, just add it directly to resultMultiple
              resultMultiple.unshift(inputValue[k]);
            }
          }
        }
        return resultMultiple;
      });

      //Watch for external model changes
      scope.$watchCollection(function(){ return ngModel.$modelValue; }, function(newValue, oldValue) {
        if (oldValue != newValue){
          //update the view value with fresh data from items, if there is a valid model value
          if(angular.isDefined(ngModel.$modelValue)) {
            ngModel.$modelValue = null; //Force scope model value and ngModel value to be out of sync to re-run formatters
          }
          $selectMultiple.refreshComponent();
        }
      });

      ngModel.$render = function() {
        // Make sure that model value is array
        if(!angular.isArray(ngModel.$viewValue)){
          // Have tolerance for null or undefined values
          if (isNil(ngModel.$viewValue)){
            ngModel.$viewValue = [];
          } else {
            throw uiSelectMinErr('multiarr', "Expected model value to be array but got '{0}'", ngModel.$viewValue);
          }
        }
        $select.selected = ngModel.$viewValue;
        $selectMultiple.refreshComponent();
        scope.$evalAsync(); //To force $digest
      };

      scope.$on('uis:select', function (event, item) {
        if($select.selected.length >= $select.limit) {
          return;
        }
        $select.selected.push(item);
        var locals = {};
        locals[$select.parserResult.itemName] = item;

        $timeout(function(){
          $select.onSelectCallback(scope, {
            $item: item,
            $model: $select.parserResult.modelMapper(scope, locals)
          });
        });
        $selectMultiple.updateModel();
      });

      scope.$on('uis:activate', function () {
        $selectMultiple.activeMatchIndex = -1;
      });

      scope.$watch('$select.disabled', function(newValue, oldValue) {
        // As the search input field may now become visible, it may be necessary to recompute its size
        if (oldValue && !newValue) $select.sizeSearchInput();
      });

      $select.searchInput.on('keydown', function(e) {
        var key = e.which;
        scope.$apply(function() {
          var processed = false;
          // var tagged = false; //Checkme
          if(KEY.isHorizontalMovement(key)){
            processed = _handleMatchSelection(key);
          }
          if (processed  && key != KEY.TAB) {
            //TODO Check si el tab selecciona aun correctamente
            //Crear test
            e.preventDefault();
            e.stopPropagation();
          }
        });
      });
      function _getCaretPosition(el) {
        if(angular.isNumber(el.selectionStart)) return el.selectionStart;
        // selectionStart is not supported in IE8 and we don't want hacky workarounds so we compromise
        else return el.value.length;
      }
      // Handles selected options in "multiple" mode
      function _handleMatchSelection(key){
        var caretPosition = _getCaretPosition($select.searchInput[0]),
            length = $select.selected.length,
            // none  = -1,
            first = 0,
            last  = length-1,
            curr  = $selectMultiple.activeMatchIndex,
            next  = $selectMultiple.activeMatchIndex+1,
            prev  = $selectMultiple.activeMatchIndex-1,
            newIndex = curr;

        if(caretPosition > 0 || ($select.search.length && key == KEY.RIGHT)) return false;

        $select.close();

        function getNewActiveMatchIndex(){
          switch(key){
            case KEY.LEFT:
              // Select previous/first item
              if(~$selectMultiple.activeMatchIndex) return prev;
              // Select last item
              else return last;
              break;
            case KEY.RIGHT:
              // Open drop-down
              if(!~$selectMultiple.activeMatchIndex || curr === last){
                $select.activate();
                return false;
              }
              // Select next/last item
              else return next;
              break;
            case KEY.BACKSPACE:
              // Remove selected item and select previous/first
              if(~$selectMultiple.activeMatchIndex){
                if($selectMultiple.removeChoice(curr)) {
                  return prev;
                } else {
                  return curr;
                }

              } else {
                // If nothing yet selected, select last item
                return last;
              }
              break;
            case KEY.DELETE:
              // Remove selected item and select next item
              if(~$selectMultiple.activeMatchIndex){
                $selectMultiple.removeChoice($selectMultiple.activeMatchIndex);
                return curr;
              }
              else return false;
          }
        }

        newIndex = getNewActiveMatchIndex();

        if(!$select.selected.length || newIndex === false) $selectMultiple.activeMatchIndex = -1;
        else $selectMultiple.activeMatchIndex = Math.min(last,Math.max(first,newIndex));

        return true;
      }

      $select.searchInput.on('keyup', function(e) {

        if ( ! KEY.isVerticalMovement(e.which) ) {
          scope.$evalAsync( function () {
            $select.activeIndex = $select.taggingLabel === false ? -1 : 0;
          });
        }
        // Push a "create new" item into array if there is a search string
        if ( $select.tagging.isActivated && $select.search.length > 0 ) {

          // return early with these keys
          if (e.which === KEY.TAB || KEY.isControl(e) || KEY.isFunctionKey(e) || e.which === KEY.ESC || KEY.isVerticalMovement(e.which) ) {
            return;
          }
          // always reset the activeIndex to the first item when tagging
          $select.activeIndex = $select.taggingLabel === false ? -1 : 0;
          // taggingLabel === false bypasses all of this
          if ($select.taggingLabel === false) return;

          var items = angular.copy( $select.items );
          var stashArr = angular.copy( $select.items );
          var newItem;
          var item;
          var hasTag = false;
          var dupeIndex = -1;
          var tagItems;
          var tagItem;

          // case for object tagging via transform `$select.tagging.fct` function
          if ( $select.tagging.fct !== undefined) {
            tagItems = $select.$filter('filter')(items,{'isTag': true});
            if ( tagItems.length > 0 ) {
              tagItem = tagItems[0];
            }
            // remove the first element, if it has the `isTag` prop we generate a new one with each keyup, shaving the previous
            if ( items.length > 0 && tagItem ) {
              hasTag = true;
              items = items.slice(1,items.length);
              stashArr = stashArr.slice(1,stashArr.length);
            }
            newItem = $select.tagging.fct($select.search);
            // verify the new tag doesn't match the value of a possible selection choice or an already selected item.
            if (
              stashArr.some(function (origItem) {
                 return angular.equals(origItem, newItem);
              }) ||
              $select.selected.some(function (origItem) {
                return angular.equals(origItem, newItem);
              })
            ) {
              scope.$evalAsync(function () {
                $select.activeIndex = 0;
                $select.items = items;
              });
              return;
            }
            if (newItem) newItem.isTag = true;
          // handle newItem string and stripping dupes in tagging string context
          } else {
            // find any tagging items already in the $select.items array and store them
            tagItems = $select.$filter('filter')(items,function (item) {
              return item.match($select.taggingLabel);
            });
            if ( tagItems.length > 0 ) {
              tagItem = tagItems[0];
            }
            item = items[0];
            // remove existing tag item if found (should only ever be one tag item)
            if ( item !== undefined && items.length > 0 && tagItem ) {
              hasTag = true;
              items = items.slice(1,items.length);
              stashArr = stashArr.slice(1,stashArr.length);
            }
            newItem = $select.search+' '+$select.taggingLabel;
            if ( _findApproxDupe($select.selected, $select.search) > -1 ) {
              return;
            }
            // verify the the tag doesn't match the value of an existing item from
            // the searched data set or the items already selected
            if ( _findCaseInsensitiveDupe(stashArr.concat($select.selected)) ) {
              // if there is a tag from prev iteration, strip it / queue the change
              // and return early
              if ( hasTag ) {
                items = stashArr;
                scope.$evalAsync( function () {
                  $select.activeIndex = 0;
                  $select.items = items;
                });
              }
              return;
            }
            if ( _findCaseInsensitiveDupe(stashArr) ) {
              // if there is a tag from prev iteration, strip it
              if ( hasTag ) {
                $select.items = stashArr.slice(1,stashArr.length);
              }
              return;
            }
          }
          if ( hasTag ) dupeIndex = _findApproxDupe($select.selected, newItem);
          // dupe found, shave the first item
          if ( dupeIndex > -1 ) {
            items = items.slice(dupeIndex+1,items.length-1);
          } else {
            items = [];
            if (newItem) items.push(newItem);
            items = items.concat(stashArr);
          }
          scope.$evalAsync( function () {
            $select.activeIndex = 0;
            $select.items = items;

            if ($select.isGrouped) {
              // update item references in groups, so that indexOf will work after angular.copy
              var itemsWithoutTag = newItem ? items.slice(1) : items;
              $select.setItemsFn(itemsWithoutTag);
              if (newItem) {
                // add tag item as a new group
                $select.items.unshift(newItem);
                $select.groups.unshift({name: '', items: [newItem], tagging: true});
              }
            }
          });
        }
      });
      function _findCaseInsensitiveDupe(arr) {
        if ( arr === undefined || $select.search === undefined ) {
          return false;
        }
        var hasDupe = arr.filter( function (origItem) {
          if ( $select.search.toUpperCase() === undefined || origItem === undefined ) {
            return false;
          }
          return origItem.toUpperCase() === $select.search.toUpperCase();
        }).length > 0;

        return hasDupe;
      }
      function _findApproxDupe(haystack, needle) {
        var dupeIndex = -1;
        if(angular.isArray(haystack)) {
          var tempArr = angular.copy(haystack);
          for (var i = 0; i <tempArr.length; i++) {
            // handle the simple string version of tagging
            if ( $select.tagging.fct === undefined ) {
              // search the array for the match
              if ( tempArr[i]+' '+$select.taggingLabel === needle ) {
              dupeIndex = i;
              }
            // handle the object tagging implementation
            } else {
              var mockObj = tempArr[i];
              if (angular.isObject(mockObj)) {
                mockObj.isTag = true;
              }
              if ( angular.equals(mockObj, needle) ) {
                dupeIndex = i;
              }
            }
          }
        }
        return dupeIndex;
      }

      $select.searchInput.on('blur', function() {
        $timeout(function() {
          $selectMultiple.activeMatchIndex = -1;
        });
      });

    }
  };
}]);

uis.directive('uiSelectNoChoice',
    ['uiSelectConfig', function (uiSelectConfig) {
        return {
            restrict: 'EA',
            require: '^uiSelect',
            replace: true,
            transclude: true,
            templateUrl: function (tElement) {
                // Needed so the uiSelect can detect the transcluded content
                tElement.addClass('ui-select-no-choice');
      
                // Gets theme attribute from parent (ui-select)
                var theme = tElement.parent().attr('theme') || uiSelectConfig.theme;
                return theme + '/no-choice.tpl.html';
            }
        };
    }]);

uis.directive('uiSelectSingle', ['$timeout','$compile', function($timeout, $compile) {
  return {
    restrict: 'EA',
    require: ['^uiSelect', '^ngModel'],
    link: function(scope, element, attrs, ctrls) {

      var $select = ctrls[0];
      var ngModel = ctrls[1];

      //From view --> model
      ngModel.$parsers.unshift(function (inputValue) {
        // Keep original value for undefined and null
        if (isNil(inputValue)) {
          return inputValue;
        }

        var locals = {},
            result;
        locals[$select.parserResult.itemName] = inputValue;
        result = $select.parserResult.modelMapper(scope, locals);
        return result;
      });

      //From model --> view
      ngModel.$formatters.unshift(function (inputValue) {
        // Keep original value for undefined and null
        if (isNil(inputValue)) {
          return inputValue;
        }

        var data = $select.parserResult && $select.parserResult.source (scope, { $select : {search:''}}), //Overwrite $search
            locals = {},
            result;
        if (data){
          var checkFnSingle = function(d){
            locals[$select.parserResult.itemName] = d;
            result = $select.parserResult.modelMapper(scope, locals);
            return result === inputValue;
          };
          //If possible pass same object stored in $select.selected
          if ($select.selected && checkFnSingle($select.selected)) {
            return $select.selected;
          }
          for (var i = data.length - 1; i >= 0; i--) {
            if (checkFnSingle(data[i])) return data[i];
          }
        }
        return inputValue;
      });

      //Update viewValue if model change
      scope.$watch('$select.selected', function(newValue) {
        if (ngModel.$viewValue !== newValue) {
          ngModel.$setViewValue(newValue);
        }
      });

      ngModel.$render = function() {
        $select.selected = ngModel.$viewValue;
      };

      scope.$on('uis:select', function (event, item) {
        $select.selected = item;
        var locals = {};
        locals[$select.parserResult.itemName] = item;

        $timeout(function() {
          $select.onSelectCallback(scope, {
            $item: item,
            $model: isNil(item) ? item : $select.parserResult.modelMapper(scope, locals)
          });
        });
      });

      scope.$on('uis:close', function (event, skipFocusser) {
        $timeout(function(){
          $select.focusser.prop('disabled', false);
          if (!skipFocusser) $select.focusser[0].focus();
        },0,false);
      });

      scope.$on('uis:activate', function () {
        focusser.prop('disabled', true); //Will reactivate it on .close()
      });

      //Idea from: https://github.com/ivaynberg/select2/blob/79b5bf6db918d7560bdd959109b7bcfb47edaf43/select2.js#L1954
      var focusser = angular.element("<input tabindex=\"-1\" ng-readonly='!$select.searchEnabled' ng-disabled='$select.disabled' class='ui-select-focusser ui-select-offscreen' type='text' id='{{ $select.focusserId }}' aria-label='{{ $select.ariaLabel }}' aria-describedby='{{$select.ariaDescribedby}}' aria-haspopup='true' role='combobox' ng-required='$select.required' />");
      $compile(focusser)(scope);
      $select.focusser = focusser;

      //Input that will handle focus
      $select.focusInput = focusser;

      element.parent().append(focusser);
      focusser.bind("focus", function(){
        scope.$evalAsync(function(){
          $select.focus = true;
        });
      });
      focusser.bind("blur", function(){
        scope.$evalAsync(function(){
          $select.focus = false;
        });
      });
      focusser.bind("keydown", function(e){

        if (e.which === KEY.BACKSPACE && $select.backspaceReset !== false) {
          e.preventDefault();
          e.stopPropagation();
          $select.select(undefined);
          scope.$apply();
          return;
        }

        if (e.which === KEY.TAB || KEY.isControl(e) || KEY.isFunctionKey(e) || e.which === KEY.ESC) {
          return;
        }

        if (e.which == KEY.DOWN  || e.which == KEY.UP || e.which == KEY.ENTER || e.which == KEY.SPACE){
          e.preventDefault();
          e.stopPropagation();
          $select.activate();
        }

        scope.$digest();
      });

      focusser.bind("keyup input", function(e){

        if (e.which === KEY.TAB || KEY.isControl(e) || KEY.isFunctionKey(e) || e.which === KEY.ESC || e.which == KEY.ENTER || e.which === KEY.BACKSPACE) {
          return;
        }

        $select.activate(focusser.val()); //User pressed some regular key, so we pass it to the search input
        focusser.val('');
        scope.$digest();

      });


    }
  };
}]);

// Make multiple matches sortable
uis.directive('uiSelectSort', ['$timeout', 'uiSelectConfig', 'uiSelectMinErr', function($timeout, uiSelectConfig, uiSelectMinErr) {
  return {
    require: ['^^uiSelect', '^ngModel'],
    link: function(scope, element, attrs, ctrls) {
      if (scope[attrs.uiSelectSort] === null) {
        throw uiSelectMinErr('sort', 'Expected a list to sort');
      }

      var $select = ctrls[0];
      var $ngModel = ctrls[1];

      var options = angular.extend({
          axis: 'horizontal'
        },
        scope.$eval(attrs.uiSelectSortOptions));

      var axis = options.axis;
      var draggingClassName = 'dragging';
      var droppingClassName = 'dropping';
      var droppingBeforeClassName = 'dropping-before';
      var droppingAfterClassName = 'dropping-after';

      scope.$watch(function(){
        return $select.sortable;
      }, function(newValue){
        if (newValue) {
          element.attr('draggable', true);
        } else {
          element.removeAttr('draggable');
        }
      });

      element.on('dragstart', function(event) {
        element.addClass(draggingClassName);

        (event.dataTransfer || event.originalEvent.dataTransfer).setData('text', scope.$index.toString());
      });

      element.on('dragend', function() {
        removeClass(draggingClassName);
      });

      var move = function(from, to) {
        /*jshint validthis: true */
        this.splice(to, 0, this.splice(from, 1)[0]);
      };

      var removeClass = function(className) {
        angular.forEach($select.$element.querySelectorAll('.' + className), function(el){
          angular.element(el).removeClass(className);
        });
      };

      var dragOverHandler = function(event) {
        event.preventDefault();

        var offset = axis === 'vertical' ? event.offsetY || event.layerY || (event.originalEvent ? event.originalEvent.offsetY : 0) : event.offsetX || event.layerX || (event.originalEvent ? event.originalEvent.offsetX : 0);

        if (offset < (this[axis === 'vertical' ? 'offsetHeight' : 'offsetWidth'] / 2)) {
          removeClass(droppingAfterClassName);
          element.addClass(droppingBeforeClassName);

        } else {
          removeClass(droppingBeforeClassName);
          element.addClass(droppingAfterClassName);
        }
      };

      var dropTimeout;

      var dropHandler = function(event) {
        event.preventDefault();

        var droppedItemIndex = parseInt((event.dataTransfer || event.originalEvent.dataTransfer).getData('text'), 10);

        // prevent event firing multiple times in firefox
        $timeout.cancel(dropTimeout);
        dropTimeout = $timeout(function() {
          _dropHandler(droppedItemIndex);
        }, 20);
      };

      var _dropHandler = function(droppedItemIndex) {
        var theList = scope.$eval(attrs.uiSelectSort);
        var itemToMove = theList[droppedItemIndex];
        var newIndex = null;

        if (element.hasClass(droppingBeforeClassName)) {
          if (droppedItemIndex < scope.$index) {
            newIndex = scope.$index - 1;
          } else {
            newIndex = scope.$index;
          }
        } else {
          if (droppedItemIndex < scope.$index) {
            newIndex = scope.$index;
          } else {
            newIndex = scope.$index + 1;
          }
        }

        move.apply(theList, [droppedItemIndex, newIndex]);

        $ngModel.$setViewValue(Date.now());

        scope.$apply(function() {
          scope.$emit('uiSelectSort:change', {
            array: theList,
            item: itemToMove,
            from: droppedItemIndex,
            to: newIndex
          });
        });

        removeClass(droppingClassName);
        removeClass(droppingBeforeClassName);
        removeClass(droppingAfterClassName);

        element.off('drop', dropHandler);
      };

      element.on('dragenter', function() {
        if (element.hasClass(draggingClassName)) {
          return;
        }

        element.addClass(droppingClassName);

        element.on('dragover', dragOverHandler);
        element.on('drop', dropHandler);
      });

      element.on('dragleave', function(event) {
        if (event.target != element) {
          return;
        }

        removeClass(droppingClassName);
        removeClass(droppingBeforeClassName);
        removeClass(droppingAfterClassName);

        element.off('dragover', dragOverHandler);
        element.off('drop', dropHandler);
      });
    }
  };
}]);

/**
 * Debounces functions
 *
 * Taken from UI Bootstrap $$debounce source code
 * See https://github.com/angular-ui/bootstrap/blob/master/src/debounce/debounce.js
 *
 */
uis.factory('$$uisDebounce', ['$timeout', function($timeout) {
  return function(callback, debounceTime) {
    var timeoutPromise;

    return function() {
      var self = this;
      var args = Array.prototype.slice.call(arguments);
      if (timeoutPromise) {
        $timeout.cancel(timeoutPromise);
      }

      timeoutPromise = $timeout(function() {
        callback.apply(self, args);
      }, debounceTime);
    };
  };
}]);

uis.directive('uisOpenClose', ['$parse', '$timeout', function ($parse, $timeout) {
  return {
    restrict: 'A',
    require: 'uiSelect',
    link: function (scope, element, attrs, $select) {
      $select.onOpenCloseCallback = $parse(attrs.uisOpenClose);

      scope.$watch('$select.open', function (isOpen, previousState) {
        if (isOpen !== previousState) {
          $timeout(function () {
            $select.onOpenCloseCallback(scope, {
              isOpen: isOpen
            });
          });
        }
      });
    }
  };
}]);

/**
 * Parses "repeat" attribute.
 *
 * Taken from AngularJS ngRepeat source code
 * See https://github.com/angular/angular.js/blob/v1.2.15/src/ng/directive/ngRepeat.js#L211
 *
 * Original discussion about parsing "repeat" attribute instead of fully relying on ng-repeat:
 * https://github.com/angular-ui/ui-select/commit/5dd63ad#commitcomment-5504697
 */

uis.service('uisRepeatParser', ['uiSelectMinErr','$parse', function(uiSelectMinErr, $parse) {
  var self = this;

  /**
   * Example:
   * expression = "address in addresses | filter: {street: $select.search} track by $index"
   * itemName = "address",
   * source = "addresses | filter: {street: $select.search}",
   * trackByExp = "$index",
   */
  self.parse = function(expression) {


    var match;
    //var isObjectCollection = /\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)/.test(expression);
    // If an array is used as collection

    // if (isObjectCollection){
    // 000000000000000000000000000000111111111000000000000000222222222222220033333333333333333333330000444444444444444444000000000000000055555555555000000000000000000000066666666600000000
    match = expression.match(/^\s*(?:([\s\S]+?)\s+as\s+)?(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+(\s*[\s\S]+?)?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);

    // 1 Alias
    // 2 Item
    // 3 Key on (key,value)
    // 4 Value on (key,value)
    // 5 Source expression (including filters)
    // 6 Track by

    if (!match) {
      throw uiSelectMinErr('iexp', "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.",
              expression);
    }
    
    var source = match[5], 
        filters = '';

    // When using (key,value) ui-select requires filters to be extracted, since the object
    // is converted to an array for $select.items 
    // (in which case the filters need to be reapplied)
    if (match[3]) {
      // Remove any enclosing parenthesis
      source = match[5].replace(/(^\()|(\)$)/g, '');
      // match all after | but not after ||
      var filterMatch = match[5].match(/^\s*(?:[\s\S]+?)(?:[^\|]|\|\|)+([\s\S]*)\s*$/);
      if(filterMatch && filterMatch[1].trim()) {
        filters = filterMatch[1];
        source = source.replace(filters, '');
      }      
    }

    return {
      itemName: match[4] || match[2], // (lhs) Left-hand side,
      keyName: match[3], //for (key, value) syntax
      source: $parse(source),
      filters: filters,
      trackByExp: match[6],
      modelMapper: $parse(match[1] || match[4] || match[2]),
      repeatExpression: function (grouped) {
        var expression = this.itemName + ' in ' + (grouped ? '$group.items' : '$select.items');
        if (this.trackByExp) {
          expression += ' track by ' + this.trackByExp;
        }
        return expression;
      } 
    };

  };

  self.getGroupNgRepeatExpression = function() {
    return '$group in $select.groups track by $group.name';
  };

}]);

}());
angular.module("ui.select").run(["$templateCache", function($templateCache) {$templateCache.put("bootstrap/choices.tpl.html","<ul class=\"ui-select-choices ui-select-choices-content ui-select-dropdown dropdown-menu\" ng-show=\"$select.open && $select.items.length > 0\"><li role=\"listbox\" class=\"ui-select-choices-group\" id=\"ui-select-choices-{{ $select.generatedId }}\"><div class=\"divider\" ng-show=\"$select.isGrouped && $index > 0\"></div><div ng-show=\"$select.isGrouped\" class=\"ui-select-choices-group-label dropdown-header\" ng-bind=\"$group.name\"></div><div aria-selected=\"{{$select.isActive(this)}}\" ng-attr-id=\"ui-select-choices-row-{{ $select.generatedId }}-{{$index}}\" class=\"ui-select-choices-row\" ng-class=\"{active: $select.isActive(this), disabled: $select.isDisabled(this)}\" role=\"option\"><span class=\"ui-select-choices-row-inner\"></span></div></li></ul>");
$templateCache.put("bootstrap/match-multiple.tpl.html","<span class=\"ui-select-match\"><span ng-repeat=\"$item in $select.selected track by $index\"><span class=\"ui-select-match-item btn btn-default btn-xs\" tabindex=\"-1\" type=\"button\" ng-disabled=\"$select.disabled\" ng-click=\"$selectMultiple.activeMatchIndex = $index;\" ng-class=\"{\'btn-primary\':$selectMultiple.activeMatchIndex === $index, \'select-locked\':$select.isLocked(this, $index)}\" ui-select-sort=\"$select.selected\"><span tabindex=\"-1\" class=\"close ui-select-match-close\" ng-hide=\"$select.disabled\" ng-click=\"$selectMultiple.removeChoice($index)\">&nbsp;&times;</span> <span uis-transclude-append=\"\"></span></span></span></span>");
$templateCache.put("bootstrap/match.tpl.html","<div class=\"ui-select-match\" ng-hide=\"$select.open && $select.searchEnabled\" ng-disabled=\"$select.disabled\" ng-class=\"{\'btn-default-focus\':$select.focus}\"><span class=\"btn btn-default form-control ui-select-toggle\" ng-click=\"$select.activate()\" role=\"combobox\" aria-haspopup=\"true\" aria-expanded=\"{{$select.open}}\" aria-owns=\"ui-select-choices-{{ $select.generatedId }}\" aria-controls=\"ui-select-choices-{{ $select.generatedId }}\" aria-label=\"{{$select.ariaLabel}}\" aria-describedby=\"{{$select.ariaDescribedby}}\" ng-disabled=\"$select.disabled\"><span ng-show=\"$select.isEmpty()\" class=\"ui-select-placeholder text-muted\">{{$select.placeholder}}</span> <span ng-hide=\"$select.isEmpty()\" class=\"ui-select-match-text pull-left\" ng-class=\"{\'ui-select-allow-clear\': $select.allowClear && !$select.isEmpty()}\" ng-transclude=\"\"></span> <i class=\"icon icon-chevron-down pull-right\" ng-show=\"!$select.open\"></i> <a tabindex=\"-1\" ng-show=\"$select.allowClear && !$select.isEmpty() && ($select.disabled !== true)\" aria-label=\"{{ $select.baseTitle }} clear\" style=\"margin-right: 10px\" ng-click=\"$select.clear($event)\" class=\"btn btn-xs btn-link pull-right\"><i class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></i></a></span></div>");
$templateCache.put("bootstrap/no-choice.tpl.html","<ul class=\"ui-select-no-choice dropdown-menu\" ng-show=\"$select.items.length == 0\"><li ng-transclude=\"\"></li></ul>");
$templateCache.put("bootstrap/select-multiple.tpl.html","<div class=\"ui-select-container ui-select-multiple ui-select-bootstrap dropdown form-control\" ng-class=\"{open: $select.open}\"><div><div class=\"ui-select-match\"></div><input type=\"search\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\" class=\"ui-select-search input-xs\" placeholder=\"{{$selectMultiple.getPlaceholder()}}\" ng-disabled=\"$select.disabled\" ng-click=\"$select.activate()\" ng-model=\"$select.search\" role=\"combobox\" aria-expanded=\"{{$select.open}}\" aria-label=\"{{$select.baseTitle}}\" ng-class=\"{\'spinner\': $select.refreshing}\" ondrop=\"return false;\"></div><div class=\"ui-select-choices\"></div><div class=\"ui-select-no-choice\"></div></div>");
$templateCache.put("bootstrap/select.tpl.html","<div class=\"ui-select-container ui-select-bootstrap dropdown\" ng-class=\"{open: $select.open}\"><div class=\"ui-select-match\"></div><span ng-show=\"$select.open && $select.refreshing && $select.spinnerEnabled\" class=\"ui-select-refreshing {{$select.spinnerClass}}\"></span> <input type=\"search\" autocomplete=\"off\" tabindex=\"-1\" class=\"form-control ui-select-search\" ng-class=\"{ \'ui-select-search-hidden\' : !$select.searchEnabled }\" placeholder=\"{{$select.placeholder}}\" ng-model=\"$select.search\" ng-show=\"$select.open\"><span tabindex=\"-1\" class=\"icon icon-chevron-up\" ng-click=\"$select.toggle($event)\" ng-show=\"$select.open\"></span><div class=\"ui-select-choices\"></div><div class=\"ui-select-no-choice\"></div></div>");
$templateCache.put("select2/choices.tpl.html","<ul tabindex=\"-1\" class=\"ui-select-choices ui-select-choices-content select2-results\"><li class=\"ui-select-choices-group\" ng-class=\"{\'select2-result-with-children\': $select.choiceGrouped($group) }\"><div ng-show=\"$select.choiceGrouped($group)\" class=\"ui-select-choices-group-label select2-result-label\" ng-bind=\"$group.name\"></div><ul id=\"ui-select-choices-{{ $select.generatedId }}\" ng-class=\"{\'select2-result-sub\': $select.choiceGrouped($group), \'select2-result-single\': !$select.choiceGrouped($group) }\"><li role=\"option\" ng-attr-id=\"ui-select-choices-row-{{ $select.generatedId }}-{{$index}}\" class=\"ui-select-choices-row\" ng-class=\"{\'select2-highlighted\': $select.isActive(this), \'select2-disabled\': $select.isDisabled(this)}\"><div class=\"select2-result-label ui-select-choices-row-inner\"></div></li></ul></li></ul>");
$templateCache.put("select2/match-multiple.tpl.html","<span class=\"ui-select-match\"><li class=\"ui-select-match-item select2-search-choice\" ng-repeat=\"$item in $select.selected track by $index\" ng-class=\"{\'select2-search-choice-focus\':$selectMultiple.activeMatchIndex === $index, \'select2-locked\':$select.isLocked(this, $index)}\" ui-select-sort=\"$select.selected\"><span uis-transclude-append=\"\"></span> <a href=\"javascript:;\" class=\"ui-select-match-close select2-search-choice-close\" ng-click=\"$selectMultiple.removeChoice($index)\" tabindex=\"-1\"></a></li></span>");
$templateCache.put("select2/match.tpl.html","<a class=\"select2-choice ui-select-match\" ng-class=\"{\'select2-default\': $select.isEmpty()}\" ng-click=\"$select.toggle($event)\" aria-label=\"{{ $select.baseTitle }} select\"><span ng-show=\"$select.isEmpty()\" class=\"select2-chosen\">{{$select.placeholder}}</span> <span ng-hide=\"$select.isEmpty()\" class=\"select2-chosen\" ng-transclude=\"\"></span> <abbr ng-if=\"$select.allowClear && !$select.isEmpty()\" class=\"select2-search-choice-close\" ng-click=\"$select.clear($event)\"></abbr> <span class=\"select2-arrow ui-select-toggle\"><b></b></span></a>");
$templateCache.put("select2/no-choice.tpl.html","<div class=\"ui-select-no-choice dropdown\" ng-show=\"$select.items.length == 0\"><div class=\"dropdown-content\"><div data-selectable=\"\" ng-transclude=\"\"></div></div></div>");
$templateCache.put("select2/select-multiple.tpl.html","<div class=\"ui-select-container ui-select-multiple select2 select2-container select2-container-multi\" ng-class=\"{\'select2-container-active select2-dropdown-open open\': $select.open, \'select2-container-disabled\': $select.disabled}\"><ul class=\"select2-choices\"><span class=\"ui-select-match\"></span><li class=\"select2-search-field\"><input type=\"search\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\" role=\"combobox\" aria-expanded=\"true\" aria-owns=\"ui-select-choices-{{ $select.generatedId }}\" aria-label=\"{{ $select.baseTitle }}\" aria-activedescendant=\"ui-select-choices-row-{{ $select.generatedId }}-{{ $select.activeIndex }}\" class=\"select2-input ui-select-search\" placeholder=\"{{$selectMultiple.getPlaceholder()}}\" ng-disabled=\"$select.disabled\" ng-hide=\"$select.disabled\" ng-model=\"$select.search\" ng-click=\"$select.activate()\" style=\"width: 34px;\" ondrop=\"return false;\"></li></ul><div class=\"ui-select-dropdown select2-drop select2-with-searchbox select2-drop-active\" ng-class=\"{\'select2-display-none\': !$select.open || $select.items.length === 0}\"><div class=\"ui-select-choices\"></div></div></div>");
$templateCache.put("select2/select.tpl.html","<div class=\"ui-select-container select2 select2-container\" ng-class=\"{\'select2-container-active select2-dropdown-open open\': $select.open, \'select2-container-disabled\': $select.disabled, \'select2-container-active\': $select.focus, \'select2-allowclear\': $select.allowClear && !$select.isEmpty()}\"><div class=\"ui-select-match\"></div><div class=\"ui-select-dropdown select2-drop select2-with-searchbox select2-drop-active\" ng-class=\"{\'select2-display-none\': !$select.open}\"><div class=\"search-container\" ng-class=\"{\'ui-select-search-hidden\':!$select.searchEnabled, \'select2-search\':$select.searchEnabled}\"><input type=\"search\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\" ng-class=\"{\'select2-active\': $select.refreshing}\" role=\"combobox\" aria-expanded=\"true\" aria-owns=\"ui-select-choices-{{ $select.generatedId }}\" aria-label=\"{{ $select.baseTitle }}\" class=\"ui-select-search select2-input\" ng-model=\"$select.search\"></div><div class=\"ui-select-choices\"></div><div class=\"ui-select-no-choice\"></div></div></div>");
$templateCache.put("selectize/choices.tpl.html","<div ng-show=\"$select.open\" class=\"ui-select-choices ui-select-dropdown selectize-dropdown\" ng-class=\"{\'single\': !$select.multiple, \'multi\': $select.multiple}\"><div class=\"ui-select-choices-content selectize-dropdown-content\"><div class=\"ui-select-choices-group optgroup\"><div ng-show=\"$select.isGrouped\" class=\"ui-select-choices-group-label optgroup-header\" ng-bind=\"$group.name\"></div><div role=\"option\" class=\"ui-select-choices-row\" ng-class=\"{active: $select.isActive(this), disabled: $select.isDisabled(this)}\"><div class=\"option ui-select-choices-row-inner\" data-selectable=\"\"></div></div></div></div></div>");
$templateCache.put("selectize/match-multiple.tpl.html","<div class=\"ui-select-match\" data-value=\"\" ng-repeat=\"$item in $select.selected track by $index\" ng-click=\"$selectMultiple.activeMatchIndex = $index;\" ng-class=\"{\'active\':$selectMultiple.activeMatchIndex === $index}\" ui-select-sort=\"$select.selected\"><span class=\"ui-select-match-item\" ng-class=\"{\'select-locked\':$select.isLocked(this, $index)}\"><span uis-transclude-append=\"\"></span> <span class=\"remove ui-select-match-close\" ng-hide=\"$select.disabled\" ng-click=\"$selectMultiple.removeChoice($index)\">&times;</span></span></div>");
$templateCache.put("selectize/match.tpl.html","<div ng-hide=\"$select.searchEnabled && ($select.open || $select.isEmpty())\" class=\"ui-select-match\"><span ng-show=\"!$select.searchEnabled && ($select.isEmpty() || $select.open)\" class=\"ui-select-placeholder text-muted\">{{$select.placeholder}}</span> <span ng-hide=\"$select.isEmpty() || $select.open\" ng-transclude=\"\"></span></div>");
$templateCache.put("selectize/no-choice.tpl.html","<div class=\"ui-select-no-choice selectize-dropdown\" ng-show=\"$select.items.length == 0\"><div class=\"selectize-dropdown-content\"><div data-selectable=\"\" ng-transclude=\"\"></div></div></div>");
$templateCache.put("selectize/select-multiple.tpl.html","<div class=\"ui-select-container selectize-control multi plugin-remove_button\" ng-class=\"{\'open\': $select.open}\"><div class=\"selectize-input\" ng-class=\"{\'focus\': $select.open, \'disabled\': $select.disabled, \'selectize-focus\' : $select.focus}\" ng-click=\"$select.open && !$select.searchEnabled ? $select.toggle($event) : $select.activate()\"><div class=\"ui-select-match\"></div><input type=\"search\" autocomplete=\"off\" tabindex=\"-1\" class=\"ui-select-search\" ng-class=\"{\'ui-select-search-hidden\':!$select.searchEnabled}\" placeholder=\"{{$selectMultiple.getPlaceholder()}}\" ng-model=\"$select.search\" ng-disabled=\"$select.disabled\" aria-expanded=\"{{$select.open}}\" aria-label=\"{{ $select.baseTitle }}\" ondrop=\"return false;\"></div><div class=\"ui-select-choices\"></div><div class=\"ui-select-no-choice\"></div></div>");
$templateCache.put("selectize/select.tpl.html","<div class=\"ui-select-container selectize-control single\" ng-class=\"{\'open\': $select.open}\"><div class=\"selectize-input\" ng-class=\"{\'focus\': $select.open, \'disabled\': $select.disabled, \'selectize-focus\' : $select.focus}\" ng-click=\"$select.open && !$select.searchEnabled ? $select.toggle($event) : $select.activate()\"><div class=\"ui-select-match\"></div><input type=\"search\" autocomplete=\"off\" tabindex=\"-1\" class=\"ui-select-search ui-select-toggle\" ng-class=\"{\'ui-select-search-hidden\':!$select.searchEnabled}\" ng-click=\"$select.toggle($event)\" placeholder=\"{{$select.placeholder}}\" ng-model=\"$select.search\" ng-hide=\"!$select.isEmpty() && !$select.open\" ng-disabled=\"$select.disabled\" aria-label=\"{{ $select.baseTitle }}\"></div><div class=\"ui-select-choices\"></div><div class=\"ui-select-no-choice\"></div></div>");}]);

/***/ }),

/***/ 0:
/* unknown exports provided */
/* all exports used */
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/* unknown exports provided */
/* all exports used */
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/* unknown exports provided */
/* all exports used */
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/* unknown exports provided */
/* all exports used */
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},["./src/app/app.module.js"]);
//# sourceMappingURL=c25135e15d16dc3d59b641.js.map