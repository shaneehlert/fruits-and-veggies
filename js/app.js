/* setup your angular app here */
var FruitVeggie = angular.module('FruitVeggie', []);
// debug stuff to show the app is loading and fruit / veggies are available
FruitVeggie.controller('Ctrl', ['$scope', function($scope, fruit){
  $scope.fruit = [
  'Apple',
  'Apricot',
  'Banana'
]
$scope.submitfruits = function() {
  $scope.toDoList.push($scope.fruits);
  $scope.toDo = '';
};
}])