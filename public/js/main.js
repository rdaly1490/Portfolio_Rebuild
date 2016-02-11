var $ = require('jquery');

const doc = document.documentElement;
const top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);

if (top === 0) {
	$('#main-page').on('scroll', function() {
		$('#about-page').scrollIntoView();
	});
}
console.log(top);
