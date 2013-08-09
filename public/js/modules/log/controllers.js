'use strict';

/* Controllers */

angular.module('logApp', []).
controller('LogCtrl', function ($scope, $http) {
  $http.get("/api/name").success(function(data){
    $scope.name = data.name;
  }); 

  $scope.surname = "Sinclair";
  $scope.filterOptions = {
    filterText: "",
    useExternalFilter: true
  };
  $scope.totalServerItems = 0;
  $scope.pagingOptions = {
    pageSizes: [5, 10, 20],
    pageSize: 5,
    currentPage: 1
  };  
  $scope.setPagingData = function(data, page, pageSize){  
    var pagedData = data.slice((page - 1) * pageSize, page * pageSize);
    $scope.MainStat = pagedData;
    $scope.totalServerItems = data.length;
    if (!$scope.$$phase) {
      $scope.$apply();
    }
  };
  $scope.getPagedDataAsync = function (pageSize, page, searchText) {
    setTimeout(function () {
      var data;
      if (searchText) {
        var ft = searchText.toLowerCase();
        $http.get('/api/mainStat').success(function (largeLoad) {    
          data = largeLoad.filter(function(item) {
            return JSON.stringify(item).toLowerCase().indexOf(ft) != -1;
          });
          $scope.setPagingData(data,page,pageSize);
        });            
      } else {
        $http.get('/api/mainStat').success(function (largeLoad) {
          $scope.setPagingData(largeLoad,page,pageSize);
        });
      }
    }, 100);
  };

  $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage);

  $scope.$watch('pagingOptions', function (newVal, oldVal) {
    if (newVal !== oldVal && newVal.currentPage !== oldVal.currentPage) {
      $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterOptions.filterText);
    }
  }, true);
  $scope.$watch('filterOptions', function (newVal, oldVal) {
    if (newVal !== oldVal) {
      $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterOptions.filterText);
    }
  }, true);

  $scope.gridOptions = {
    data: 'MainStat',
    enablePaging: true,
    showFooter: true,
    totalServerItems:'totalServerItems',
    pagingOptions: $scope.pagingOptions,
    filterOptions: $scope.filterOptions
  };
  
})