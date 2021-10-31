"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
    function Person(height, weight) {
        _classCallCheck(this, Person);

        this.weight = weight;
        this.height = height;
    }

    _createClass(Person, [{
        key: "print",
        value: function print() {
            console.log(this.weight);
            console.log(this.height);
        }
    }]);

    return Person;
}();

var person1 = new Person(45, 54);

person1.print();