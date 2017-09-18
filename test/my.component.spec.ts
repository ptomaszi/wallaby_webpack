import * as ng from 'angular';
import { MyComponent } from '../src/my.component';
import { renderFactory, IRender } from 'ng-metadata/testing';
import { bundle, getInjectableName, NgModule, Component } from 'ng-metadata/core';

describe('MyComponent',
    () => {
        @Component({
            selector: 'test-component',
            template: `
            <my-component>
            </my-component>`
        })
        class TestComponent {
            constructor() { }
            getText() {
                return 'test';
            }
        }

        @NgModule({
            declarations: [TestComponent, MyComponent]
        })
        class TestNgModule {
        }

        let $compile: ng.ICompileService;
        let $rootScope: ng.IRootScopeService;
        let $scope: ng.IScope;
        let render: IRender<TestComponent>;
        let sut: MyComponent;

        beforeEach(() => {
            const TestModule: string = bundle(TestNgModule).name;
            ng.mock.module(TestModule);
        });

        beforeEach(ng.mock.inject(function($injector: ng.auto.IInjectorService) {
            $compile = $injector.get<ng.ICompileService>('$compile');
            $rootScope = $injector.get<ng.IRootScopeService>('$rootScope');
            $scope = $rootScope.$new();

            render = renderFactory($compile, $scope);
            sut = render(MyComponent).ctrl;
        }));

        describe('test1',
            () => {
                it('tests 1+1',
                    () => {
                        expect(sut.getText()).toBe('test');
                    });
            });
    });