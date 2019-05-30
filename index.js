"use strict"
//import from other modules
//var one = require('./modules/modul_one');
var import_module = require('./modules/modul_one');
var import_module_two = require('./modules/module_two');
var import_module_three = require('./modules/modul_three');

//two methods for creating objects
//first by function
var first_obj = {};
first_obj.name = 'Ivo';
first_obj.last_name = 'Second';

first_obj.full_name = function() {
    console.log(this.name + " " + this.last_name);
}

//the second way seems as JSON
var second_obj = {
    name: 'Karl',
    last_name: 'Krol',
    full_name: function() {
	console.log(this.name + ' ' + this.last_name);
    }
}

var array_one = ['first', 'second'];

function output_array(array_for_output) {
    for (var array_item = 0; array_item < array_for_output.length; array_item++) {
	console.log(array_for_output[array_item] + '\n');
    }
}

function array_tricks() {
    var variable_tricks = 'third';
    array_one.push(variable_tricks);
    output_array(array_one);
    array_one.pop();
    output_array(array_one);
    array_one.shift();
    output_array(array_one);    
}

function iterator_array() {
    for(var array_item of array_one) {
	console.log(array_item);
    }
}

function module_two_function() {
    import_module_two.one();
    import_module_two.two;
    import_module_two.three();
}

function module_three_function() {
    var param = [10, 15];
    if(param) {
	var output_module_three = import_module_three.one(param[0],param[1]);
	console.log(output_module_three);
    }
}

first_obj.full_name();
second_obj.full_name();
//array_tricks();
iterator_array();
import_module.one();
import_module.two();
module_two_function();
module_three_function();

