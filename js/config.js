/**
 * Created by Administrator on 2017/1/29.
 */
angular.module("mapp")
    .config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider){
        $stateProvider
            .state("home",{
                url: "/home",
                templateUrl: "views/home.html",
                controller: "home"
            })
            .state("SignIn",{
                url: "/SignIn",
                templateUrl: "views/Signin.html"
            })
            .state("register",{
                url: "/register",
                templateUrl: "views/register.html"
            })
            .state("personal",{
                url: "/personal",
                templateUrl: "views/personal.html"
            })
            .state("profile",{
                url: "/profile",
                templateUrl: "views/profile.html"
            })
            .state("modify",{
                url: "/modify",
                templateUrl: "views/modify.html"
            })
            .state("social",{
                url: "/social",
                templateUrl: "views/social.html"
            })
            .state("social3",{
                url: "/social3",
                templateUrl: "views/social3.html"
            })
        $urlRouterProvider
            .otherwise("home")
    }])
