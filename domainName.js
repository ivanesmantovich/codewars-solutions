// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

function domainName(url) {
	console.log('Testing for: ', url);
	let domain = url.slice();

	if (domain.indexOf('//') != -1) domain = url.slice(url.indexOf('//') + 2);

	let amountOfDots = (domain.match(/\./g) || []).length;
	if (amountOfDots == 1 || domain.indexOf('www.') == -1) {
		domain = domain.slice(0, domain.indexOf('.'));
	} else {
		let firstDotIndex = domain.indexOf('.');
		domain = domain.slice(
			domain.indexOf('.') + 1,
			domain.indexOf('.', firstDotIndex + 1)
		);
	}
	return domain;
}

domainName('http://github.com/carbonfive/raygun');
domainName('http://www.zombie-bites.com');
domainName('https://www.cnet.com');
domainName('https://www.phl1wlvmahw-qtqqmmtcm9o51.org/default.html');
