

// Warning: This is bad javascript - please use it only for testing static 
// analysis tools.

/* jshint white : true */
/* jshint indent : 4 */
/* jshint maxlen : 80 */
/* jshint trailing : true */
/* jshint camelcase : true */


/* === W011 === */
var x , y;


/* === W013 === */
//var x,y;
// the above trips W013 twice - include after bug is fixed

/* === W014 === */
// potentially controversial

/* === W015 === */
function foo() {
console.log('hello');   		// this line is not indented
	console.log('world');
}

/* === W033 === */
var x = 1

/* === W047 === */
var x = 1.;   // note the trailing decimal point

/* === W055 === */
function circle(radius) {
    this.radius = radius;
}

circle.prototype  = { 
    get circumference() {
        return 2 * Math.PI * this.radius;
    },

    get area() {
        return Math.PI * this.radius * this.radius;
    }
};

var c = new circle(3);

/* === W101 === */
console.log("This is a very, very, very, very, very, very, very, very, very, very, long line.");

/* === W102 === */
console.log("This line has trailing whitespace.");   	

/* === W106 === */
var not_camel;

/* === W110 === */
/* jshint quotmark : true */
console.log('This string is enclosed by single quotes.');
console.log("This string is enclosed by double quotes.");




