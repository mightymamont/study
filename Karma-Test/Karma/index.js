angular.module('app', [])
    .controller('PasswordController', ['$scope','$rootScope', function PasswordController($scope, rs) {
        $scope.password = '';
        $scope.grade = function() {
            var size = $scope.password.length;
            if (size > 8) {
                $scope.strength = 'strong';
            } else if (size > 3) {
                $scope.strength = 'medium';
            } else {
                $scope.strength = 'weak';
            }
        };

        function myTestFn(a,b) {
            return a*b;
        }

        $scope.myTestFn = myTestFn;
}]);