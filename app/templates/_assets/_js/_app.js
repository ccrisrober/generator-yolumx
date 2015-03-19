angular.module("app", ["lumx"])
.controller("TableCtrl", ["$scope", function($scope) {
  $scope.bands = [
    {name: "Gamma Ray", photo: "gr.jpg", singer: "Kai Hansen", style: "Power Metal"},
    {name: "Guns & Roses", photo: "gnr.jpg", singer: "Axel Roses", style: "Hard Rock"},
    {name: "Iron Maiden", photo: "im.jpg", singer: "Bruce Dickinson", style: "Heavy Metal"},
    {name: "Megadeth", photo: "mg.jpg", singer: "Dave Mustaine", style: "Thrash Metal"},
    {name: "Manowar", photo: "mn.jpg", singer: "Eric Addams", style: "True Metal"}
  ];
}]);
