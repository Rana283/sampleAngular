angular.module('MySpace', dependencies);

angular.module('MySpace').config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('login', {
        url: '/user/login',
        templateUrl: 'partial/' + base + 'auth/auth.html',
        controller: 'authCtrl as auth'

    }) 
     .state('employee.main.mydetails.changepassword', {
        url: '/changepassword',
        templateUrl: 'partial/' + base + 'changePassword/changePassword.html',
        controller: 'changePasswordCtrl as changePassword'

    })

      .state('employee', {
            url: '/employee',
            templateUrl: 'partial/' + base + 'mainView/mainView.html',
        })

    .state('employee.main', {
        url: '/main',
        views: {
            'header': {
                templateUrl: 'partial/' + base + 'header/header.html',
                controller: 'HeaderCtrl as header'
            },
            'body': {
                templateUrl: 'partial/' + base + 'body/body.html',
                controller: 'BodyCtrl as body',
            },
            'footer': {
                templateUrl: 'partial/' + base + 'footer/footer.html',
                controller: 'FooterCtrl as footer',
            }
        }
    })

    .state('employee.main.mydetails', {
        url: '/userdetails',
        templateUrl: 'partial/' + base + 'body/centralContainer.html'
    })
        .state('employee.main.mydetails.basicinfo', {
            url: '/userInfo',
            templateUrl: 'partial/' + base + 'employee/employee.html'
        })
        .state('employee.main.mydetails.basicinfo.primary', {
            url: '/primary',
            templateUrl: 'partial/' + base + 'employee/primary/primary.html',
            controller: 'primaryCtrl as primary'

        })
        .state('employee.main.mydetails.basicinfo.hr', {
            url: '/hr',
            templateUrl: 'partial/' + base + 'employee/hr/hr.html',
             controller: 'hrCtrl as hr'
        })
        .state('employee.main.mydetails.basicinfo.education', {
            url: '/education',
            templateUrl: 'partial/' + base + 'employee/education/education.html',
            controller: 'educationCtrl as education'

        })
        .state('employee.main.mydetails.basicinfo.travel', {
            url: '/travel',
            templateUrl: 'partial/' + base + 'employee/travel/travel.html',
            controller: 'travelCtrl as travel'

        })
        .state('employee.main.mydetails.basicinfo.vehicledetails', {
            url: '/vehicledetails',
            templateUrl: 'partial/' + base + 'employee/vehicleDetails/vehicle.html',
            controller: 'vehicleCtrl as vehicle'

        })
        .state('employee.main.mydetails.basicinfo.experience', {
            url: '/experience',
            templateUrl: 'partial/' + base + 'employee/experience/experience.html',
            controller: 'experienceCtrl as experience'

        }) 
         .state('employee.main.mydetails.basicinfo.skills', {
            url: '/skills',
            templateUrl: 'partial/' + base + 'employee/skills/skills.html',
            controller: 'skillCtrl as skills'

        })
         .state('employee.main.mydetails.basicinfo.projectallocation', {
            url: '/projectallocation',
            templateUrl: 'partial/' + base + 'employee/projectAllocation/projectAllocation.html',
            controller: 'proAllcationCtrl as projectAllocation'

        })
        .state('employee.main.mydetails.basicinfo.itassets', {
            url: '/itassets',
            templateUrl: 'partial/' + base + 'employee/itAssets/itAssets.html',
            controller: 'assetCtrl as itAssets'

        })
        .state('employee.main.mydetails.basicinfo.healthinsurance', {
            url: '/insurance',
            templateUrl: 'partial/' + base + 'employee/healthInsurance/insurance.html',
            controller: 'insuranceCtrl as insurance'

        }).
        state('employee.main.mydetails.holidays', {
            url: '/holidays',
            templateUrl: 'partial/' + base + 'employee/holidays/holidays.html',
            controller: 'HolidaysCtrl as holidays'
        }).
        state('employee.main.mydetails.policy&procedure', {
            url: '/policyprocedures',
            templateUrl: 'partial/' + base + 'employee/policy/policy.html',
            controller: 'PolicyCtrl as policy'
        }).
        state('employee.main.mydetails.employeeextensions', {
            url: '/employeeextensions',
            templateUrl: 'partial/' + base + 'employee/empExtensions/empExtensions.html',
            controller: 'EmpExtensionsCtrl as extensionsCtrl'
        });

    $urlRouterProvider.otherwise('/user/login');

});

angular.module('MySpace').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
