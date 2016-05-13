// This file is part of the Soletta Project
//
// Copyright (C) 2015 Intel Corporation. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

(function() {
    'use strict';
    app.controller ('menuController', ['$scope', 'svConf', 'broadcastService',
        function ($scope, svConf, broadcastService) {
            $scope.cheat_sheet = false;
            $scope.journal = false;
            $scope.inspectorDiv = false;
            svConf.fetchConf().success(function(data){
                $scope.cheat_sheet = data.cheat_sheet_access;
                $scope.journal = data.journal_access;
            });

            $scope.$on('showInspectorDiv', function(){
                $scope.inspectorDiv = true;
            });

            $scope.$on('hideInspectorDiv', function(){
                $scope.inspectorDiv = false;
            })
        }]);
}());

