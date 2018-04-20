app.controller('MainController',['$scope', function($scope){

 $scope.title = 'Наше творчество';
 $scope.songs=[{
    name:'Танцы',
    cover: '../images/cover-1.jpg',
	alt:'Танцы',
  },
  {
    name: 'Союз', 
    cover: '../images/webcam-toy-photo7.jpg',
	alt:'Союз',
  }];
}]);
