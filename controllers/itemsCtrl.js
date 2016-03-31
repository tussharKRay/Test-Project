app.controller('newCtrl',function($scope,$http){
	
	$http({
        method: 'get',
        url: 'http://52.33.175.46/products?type=rent',
        headers: {
            'X-API-KEY': 123,
            'session_id': 'http://52.32.233.198/'
        }
    }).success(function(data, status, headers, config) {
        $scope.response = data.result.ProductList;
        
        //console.log(array[0]);
    }).error(function(data, status, headers, config) {
        console.log("Error response", data);
    });

});


