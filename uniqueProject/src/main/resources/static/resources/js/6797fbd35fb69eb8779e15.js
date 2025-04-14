webpackJsonp([15],{

/***/ "./src/app/components/journey/step1/step1.component.html":
/* unknown exports provided */
/* all exports used */
/*!***************************************************************!*\
  !*** ./src/app/components/journey/step1/step1.component.html ***!
  \***************************************************************/
/***/ (function(module, exports) {

module.exports = "<form name=step1Form novalidate ng-if=$ctrl.showContent> <div ng-repeat=\"card in $ctrl.cardsData\" ng-hide=\"card.key == 'SVC' || card.key == 'MJY'\"> <div class=row> <div class=\"col-md-3 col-sm-4 col-xs-12\"> <img ng-src={{card.imageURL}} class=\"img-responsive center-block\" alt={{card.name}}> </div> <div class=\"col-md-9 col-sm-8 col-xs-12 details-container\"> <h1 class=card-title>{{card.name}}</h1> <div class=\"row hidden-xs\"> <div class=\"col-md-12 col-sm-12\"> <ul class=card-desc-list> <li ng-repeat=\"description in card.description\"> <div class=card-desc-item> <span class=\"icon icon-agree\" aria-hidden=true></span> <span class=card-desc>{{description}}</span> </div> </li> </ul> </div> </div> <div class=\"row visible-xs\"> <div class=col-xs-12> <ul class=card-desc-list> <li ng-if=\"$first || !$first && !card.toggleMore\" ng-repeat=\"description in card.description\"> <div class=card-desc-item> <span class=\"icon icon-agree\" aria-hidden=true></span> <span class=card-desc>{{description}}</span> </div> </li> </ul> <span class=more-label ng-click=\"card.toggleMore = !card.toggleMore\">{{card.toggleMore?'More':'Less'}} <span class=icon ng-class=\"{'icon-chevron-down': card.toggleMore, 'icon-chevron-up': !card.toggleMore}\" aria-hidden=true></span> </span> </div> </div> </div> </div> <div class=apply-button-container> <button class=button-primary ng-click=$ctrl.next(card.key)> Apply Now </button> </div> </div> <div class=row> <div class=\"col-md-12 col-sm-12\"> </div> </div> </form>";

/***/ }),

/***/ "./src/app/components/journey/step1/step1.component.js":
/* unknown exports provided */
/* all exports used */
/*!*************************************************************!*\
  !*** ./src/app/components/journey/step1/step1.component.js ***!
  \*************************************************************/
/***/ (function(module, exports, __webpack_require__) {

(function () {
    'use strict';
    var angular = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
    __webpack_require__(/*! ./step1.component.scss */ "./src/app/components/journey/step1/step1.component.scss");
    __webpack_require__(/*! ./step1.component.service */ "./src/app/components/journey/step1/step1.component.service.js");

    var step1Controller = function ($rootScope, $scope, $state, $stateParams, analyticService, step1Service, $anchorScroll, journeyService) {
        var vm = this;
        vm.showContent = true;
        $rootScope.showSelectedCard = false;

        vm.$onInit = function () {
            $rootScope.stepsHeader.currentStep = 0;

            $rootScope.sessionError = false;
            step1Service.clearLocalState();
            step1Service.setJourneyFlag();
            vm.isStaffJourney = journeyService.isStaffJourney();
            step1Service.getCardsDetail().then(function (result) {
                vm.cardsData = result;
                // console.log("all  of cards==",JSON.stringify(result))
                  console.log(result);
                  
                // var svcCard = vm.cardsData.findIndex(item => item.key === 'SVC');
                // //console.log("index of svcCard==",svcCard)
                // if (svcCard > -1) { // only splice array when item is found
                //     vm.cardsData.splice(svcCard, 1); // 2nd parameter means remove one item only
                // }
 
                if (!vm.isStaffJourney) {
                    //console.log("removing HPR card from list for customer journey==",vm.isStaffJourney);
                    //vm.cardsData = result.splice(0, 2);
                    var hprCard = vm.cardsData.findIndex(item => item.key === 'HPR');
                    if (hprCard > -1) { // only splice array when item is found
                        vm.cardsData.splice(hprCard, 1); // 2nd parameter means remove one item only
                    }
                }
                initControls();
                $anchorScroll();
            });
            analyticService.trackPageLoad(analyticService.pageList.cards);
        };

        var initControls = function () {
            vm.isStaffJourney = journeyService.isStaffJourney();
            if ($stateParams.skip) {
                //$state.go('app.journey.s2-contact-details');
                vm.showContent = false;
                vm.next($stateParams.card);
               
            } else {
                vm.showContent = true;
            }
            // console.log("vm.showContent : " + vm.showContent);
        };

        vm.next = function (cardKey) {
           
            var selectedCard = vm.cardsData.filter(function (x) { return x.key === cardKey })[0];
            var storageData = {
                "primaryApplicant": {
                    card: selectedCard
                }
            }
            journeyService.setDataInStorage(storageData);
            $scope.$emit('card-selected');
            //$state.go('app.journey.s2-contact-details');
            $state.go('app.journey.s2-contact-details',{'cardKey':cardKey});
            
            var product_subcategory="";
            var product_id="";

            if (cardKey.toUpperCase() === "VPC") {
                product_subcategory = "visa platinum credit card";
                product_id = "vpc";
            } 
            if (cardKey.toUpperCase() === "CBC"){
                product_subcategory = "cashback credit card";
                product_id = "cbc";
            } 
            // if (cardKey.toUpperCase() === "SVC"){
            //     product_subcategory = "smart value credit card";
            //     product_id = "svc";
            // }
            if (cardKey.toUpperCase() === "SVC"){
                product_subcategory = "hsbc taj credit card";
                product_id = "svc";
            }
            if (cardKey.toUpperCase() === "HPR"){
                product_subcategory = "hsbc premier credit card";
                product_id = "hpr";
            }
            if (cardKey.toUpperCase() === "MJY"){
                product_subcategory = "travel one card";
                product_id = "mjy";
            }
            

            analyticService.buttonList.applynow.event_content = "apply now";
            analyticService.buttonList.applynow.product_subcategory=product_subcategory;
            analyticService.buttonList.applynow.product_id=product_id;
            analyticService.buttonList.applynow.product_category= "Credit Cards";
            analyticService.trackUserAction(analyticService.buttonList.applynow);
        };
    };

    var step1Comp = angular.module('journey.module').component('step1', {
        template: __webpack_require__(/*! ./step1.component.html */ "./src/app/components/journey/step1/step1.component.html"),
        controller: ['$rootScope', '$scope', '$state', '$stateParams', 'analyticService', 'step1Service', '$anchorScroll', 'journeyService', step1Controller]
    });
    module.exports = step1Comp.name;
})();

/***/ }),

/***/ "./src/app/components/journey/step1/step1.component.scss":
/* unknown exports provided */
/* all exports used */
/*!***************************************************************!*\
  !*** ./src/app/components/journey/step1/step1.component.scss ***!
  \***************************************************************/
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/app/components/journey/step1/step1.component.service.js":
/* unknown exports provided */
/* all exports used */
/*!*********************************************************************!*\
  !*** ./src/app/components/journey/step1/step1.component.service.js ***!
  \*********************************************************************/
/***/ (function(module, exports) {

(function () {
    'use strict';

    var step1Service = angular.module('journey.module').service('step1Service', ['$rootScope', 'appState', '$http', 'CONFIG', 'UtilService', function ($rootScope, appState, $http, CONFIG, UtilService) {

        var cardDetails = [
            // {
            //     "key": "SVC",
            //     "name": "HSBC Smart Value Card",
            //     "description": [
            //         "Nil joining and Annual fee",
            //         "10% cashback up to INR 1000 on all transactions made within first 30 days of card issuance",
            //         "Attractive Installment plans at 10.99% p.a. for EMI products - Applicable for Loan on Phone, Balance Transfer on EMI and Cash on EMI",
            //         "Dynamic Finance Charge interest rates starting from 3.49% p.m., going down to 1.99% p.m. based on credit history & repayment behavior",
            //         "Make transactions of a minimum of INR 2500 within first 30 days to get :",
            //         "a. 3 Airport Lounge access or 3 Air Dine (meal vouchers)  that can be redeemed at restaurants at Airports in India",
            //         "b. Amazon Voucher(s)  INR 500",
            //         "c. Swiggy Voucher(s) worth INR 250"
            //     ]
            // }
            {
                "key": "SVC",
                "name": "HSBC TAJ Credit Card",
                "description": [
                    "Minimum income to be INR 36 Lacs or TRB of INR 36 Lacs.",
                    "Joining fees & Annual Fees of INR 1.1 Lacs.",
                    "Cities to - Mumbai, Delhi & NCR, Bangalore, Chennai, Hyderabad, Pune, Ahmedabad, Chandigarh, Kolkata, Jaipur, Kochi, Coimbatore, Surat, Lucknow, Nagpur, Vizag, Bhuwaneshwar.",
                ]
            },
               {
                "key": "VPC",
                "name": "HSBC Visa Platinum Credit Card",
                "description": [
                    "Nil joining and Annual fee",
                    "Up to INR 3000 annual savings on fuel surcharge",
                    "Amazon vouchers worth INR 500 on spending INR 5000 within 30 days of issuance.",
                ]
            }, {
                "key": "CBC",
                "name": "HSBC Live+ Credit Card",
                "description": [
                    "Unlimited cashback on all your transactions - 10% cashback on all dining, food delivery and grocery. 1.5% cashback on other eligible spends.",
                    "Joining fees of INR 999 only; Annual fees of INR 999 to be reversed if your total annual spend exceeds INR 200,000.",
                    "4 complimentary domestic lounges per year.",
                    "Cashback worth INR 1000 on spending INR 20,000 within 30 days of issuance."
                ]
            }, {
                "key": "HPR",
                "name": "HSBC premier Credit Card",
                "description": [
                    "The HSBC Premier Credit Card has a joining fee of INR12,000",
                    "The annual fee is INR20,000. This fee will be waived if customer is Qualified Premier customer.",
                    "Joining benefits within 60 days of activation of card",
                    "  a. Taj Experience gift card worth INR12,000",
                    "  b. Taj Epicure corporate membership",
                    "  c. Eazydiner Prime membership"                ]
            },{
                "key": "MJY",
                "name": "Travel One Card",
                "description": [
                   "<To be added>"
                ]    
            }
        ];

        this.clearLocalState = function () {
            // appState.setApplicationData({});
            appState.removeApplicationData();
            appState.clearContactDetails();
        };

        this.setDataInStorage = function (primaryCardDetails) {
            var arnData = angular.merge({}, appState.getApplicationData(), primaryCardDetails);
            appState.setApplicationData(arnData);
        };

        this.setJourneyFlag = function () {
            if (UtilService.isEmpty(appState.getStaffJourney())) {
                appState.setStaffJourney(false);
            }
        };

        this.getDataFromStorage = function () {
            return appState.getApplicationData();
        };

        this.getCardsDetail = function () {

            

            // pb link genration start

            //  var paramString = UtilService.encrypt("from=PaisaBzrEkyc&originIndex=PaisaBzrProcess&FRN=PBRKT/MUM/PBZ/0000966","(S@[|6cQ<~F$Zap");
            //  var decryptparamString = UtilService.decrypt(paramString,"(S@[|6cQ<~F$Zap");
            // console.log("PB encypt link",paramString,"\nPB decrypt same link",decryptparamString);
            // window.open(`http://localhost:3002/#!/app/startPaisaBazarEkyc?9${paramString}`);
            // window.open(`https://www.inmjoeysit.p2g.netd2.hsbc.com.hk/credit-cards/#!/app/startPaisaBazarEkyc?9${paramString}`);
            
            // PB link genration End

            var apiURL;
            if ($rootScope.integrationsActive) {
                apiURL = CONFIG.apiUrl + '/creditcard/getcards' + '?hash_id=' + Math.random();
            } else {
                apiURL = 'resources/data/mock/step1_cards.json';
            }
            return $http({
                method: 'GET',
                url: apiURL,
                headers: {
                    'Content-Type': 'application/json'
                },
                container: '#primary-card-selection'
            }).then(function (response) {
                if (response && response.status === 200 && response.data) {
                    for (var i = 0; i < response.data.length; i++) {
                        response.data[i].selected = false;
                        response.data[i].toggleMore = true;
                        response.data[i].imageURL = "resources/images/cards/" + response.data[i].key + ".png";
                        for (var j = 0; j < cardDetails.length; j++) {
                            if (response.data[i].key == cardDetails[j].key) {
                                response.data[i].description = cardDetails[j].description;
                            }
                        }
                    }
                    return response.data;
                }
            });
        };
    }]);

    module.exports = step1Service.name;
})();

/***/ })

});
//# sourceMappingURL=6797fbd35fb69eb8779e15.js.map