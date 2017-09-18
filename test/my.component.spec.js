"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ng = require('angular');
var my_component_1 = require('../src/my.component');
var testing_1 = require('ng-metadata/testing');
var core_1 = require('ng-metadata/core');
describe('MyComponent', function () {
    var TestComponent = (function () {
        function TestComponent() {
        }
        TestComponent.prototype.getText = function () {
            return 'test';
        };
        TestComponent = __decorate([
            core_1.Component({
                selector: 'test-component',
                template: "\n            <my-component>\n            </my-component>"
            })
        ], TestComponent);
        return TestComponent;
    }());
    var TestNgModule = (function () {
        function TestNgModule() {
        }
        TestNgModule = __decorate([
            core_1.NgModule({
                declarations: [TestComponent, my_component_1.MyComponent]
            })
        ], TestNgModule);
        return TestNgModule;
    }());
    var $compile;
    var $rootScope;
    var $scope;
    var render;
    var sut;
    beforeEach(function () {
        var TestModule = core_1.bundle(TestNgModule).name;
        ng.mock.module(TestModule);
    });
    beforeEach(ng.mock.inject(function ($injector) {
        $compile = $injector.get('$compile');
        $rootScope = $injector.get('$rootScope');
        $scope = $rootScope.$new();
        render = testing_1.renderFactory($compile, $scope);
        sut = render(my_component_1.MyComponent).ctrl;
    }));
    describe('test1', function () {
        it('tests 1+1', function () {
            expect(sut.getText()).toBe('test');
        });
    });
});
