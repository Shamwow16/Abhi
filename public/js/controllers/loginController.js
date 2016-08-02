angular
    .module('abhiApp')
    .controller('loginCtrl', LoginController);

function LoginController() {
    var vm = this;
    vm.signupEmail = '';
    vm.signupPassword = '';
    vm.loginEmail = '';
    vm.loginPassword = '';
    vm.submitFoodieForm = submitFoodieForm;
    vm.submitRestaurantForm = submitRestaurantForm;
    vm.registerFoodie = registerFoodie;

    function submitFoodieForm() {
        console.log('submitted');
    }

    function submitRestaurantForm(){
        console.log('restaurant form submitted');
    }

    function registerFoodie(){
        console.log("Foodie registered!");
    }
}
