var myPromise = new Promise((resolve, reject) => {
	var noErrors = true;
	if (noErrors){
		resolve('Resolved and running...');
	}
	else {
		reject();
	}
});
console.log('Calling myPromise')
myPromise.then(payload => {
	console.log(`Success: ${payload}`);
}).catch(()=> {
	console.log('failure');
});
