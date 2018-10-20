var app = angular.module('spaceApp', []);

var randomDay = Math.floor((Math.random() * 30) + 1);
var randomMonth = Math.floor((Math.random() * 9) + 1);

app.controller('spaceController', function($scope, $http, $window) {
  $http.get("https://api.nasa.gov/planetary/apod?api_key=K5L9TQ8xYzSvXS05LOu6H2GqzZ4BaDniA1amyYUP&date=2018-0" + randomMonth + "-" + randomDay)
  .then(function(response) {
    $scope.contents = response.data;
    $scope.imageURL = $scope.contents.url;

    if($scope.imageURL.includes("youtube")) {
      $window.location.reload();
    }
    $scope.date = $scope.contents.date;
    $scope.explanation = $scope.contents.explanation;
    console.log($scope.date);
  });
});
