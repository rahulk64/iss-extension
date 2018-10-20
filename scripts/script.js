let app = angular.module('spaceApp', []);

let randomDay = Math.floor((Math.random() * 30) + 1);
let randomMonth = Math.floor((Math.random() * 9) + 1);

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

//quotes
let quotes =
[
  {
  "body": "\"Man must rise above the Earth - to the top of the atmosphere and beyond - for only thus will he fully understand the world in which he lives.\"",
  "author": "~ Socrates, Philosopher"
  },
  {
  "body": "\"Astronomy compels the soul to look upward, and leads us from this world to another.\"",
  "author": "~ Plato, Philosopher"
  }
]

let randomIndex = Math.floor(Math.random() * quotes.length);
document.getElementById("quote-text").innerHTML = quotes[randomIndex].body;
document.getElementById("author").innerHTML = quotes[randomIndex].author;
