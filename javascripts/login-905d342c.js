angular.module("epickApp").controller("LoginController",["$scope","$http","$window","$cookies","$timeout",function(e,r,o){return e.user={email:"",password:""},e.working=!1,void 0!=sessionStorage.getItem("current_user")?(o.location.href="/edit-profile/",!1):(sessionStorage.clear(),e.perform=function(){return!e.working&&(!e.login.$invalid&&(e.working=!0,void r.post(window.epick.api_endpoint+"/authenticate",e.user).then(function(r){r.data.errorMessage?(Rollbar.error("Login failed with error",{user:e.user,response:r}),e.fail(r.data.errorMessage)):(r.data.user.token=r.data.token,""!=r.data.user.favorite_hero_ids&&(r.data.user.favorite_hero_ids=r.data.user.favorite_hero_ids.split(",")),sessionStorage.setItem("current_user",JSON.stringify(r.data.user)),o.location.href="/edit-profile/"),e.working=!1},function(r){Rollbar.error("Login failed from backend",{user:e.user,response:r}),e.fail("We couldn't connect to the backend. Please try again later."),e.saving=!0})))},void(e.fail=function(e){alert(e)}))}]);