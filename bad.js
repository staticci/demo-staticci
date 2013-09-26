

// Warning: This is bad javascript - please use it only for testing static 
// analysis tools.

/* jshint strict : true */
/* jshint esnext : true */


/* === E007 === */
function foo() {
	console.log('hello');
}

/* === E011 === */
const aConstant = 1;
const aConstant = 2;

/* === E035 === */
function Square() {
}

Square.prototype  = {
	get () {	// note the lack of a method name
		return 0;
	},
};

/* === E037 === */


/* === W001 === */


/* === W016 === */


/* === W018 === */


/* === W019 === */


/* === W021 === */


/* === W024 === */
var false = 'hello';

/* === W027 === */


/* === W030 === */


/* === W050 === */


/* === W061 === */


/* === W077 === */


/* === W079 === */


/* === W084 === */


/* === W087 === */


/* === W093 === */


/* === W098 === */


/* === W102 === */


/* === W107 === */


/* === W116 === */







