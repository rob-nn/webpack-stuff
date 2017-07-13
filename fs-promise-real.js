var fs = require('fs')

function promiseFs(file) {
	return new Promise((resolve, reject) => {
		fs.readFile(file, (err, data) => {
			if (err) {
				reject(err);
			}
			else { 
				resolve(data);
			}
		});
	});
};

var myPromise = promiseFs('default.js');
myPromise.then(data => {
	console.log(data.toString());
})
.catch(err => {
	console.log(err);
});
