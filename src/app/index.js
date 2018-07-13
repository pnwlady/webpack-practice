import angular from 'angular';
import template from './index.tpl.html';
import '../style/app.scss';

let component = {
    template // Use ES6 enhanced object literals.
}

let app = angular.module('app', [])
    .component('app', component)

// class TestClass {
//     constructor() {
//         let msg = "Using ES2015+ syntax";
//         console.log(msg);
//     }
// }
//
// let test = new TestClass();
