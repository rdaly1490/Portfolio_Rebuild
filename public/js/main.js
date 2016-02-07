var testFile = require('./test');

console.log(testFile);

const blah = `${testFile.test} ES6`;

const fn = (name='Rob') => {
	console.log(`${blah} functionality now, ${name}`);
};

fn();