new (function() {
	var ext = this;
	var descriptor = {
		blocks: [
			[' ', 'open link %s in new window', 'openLinkNewTab', 'http://scratch.mit.edu/'],
			[' ', 'digital pin 1 setting %n', 'setDigital', 'http://192.168.0.18/gpio2/1'],
		],
		url: 'https://github.com/savaka2/scratch-extensions/wiki/Link-Opener-extension'
	};
	
	ext._shutdown = function() {};
	
	ext._getStatus = function() {
		return {status:2, msg:'Ready'};
	};
	
	ext.setDigital(url, setting) {
		console.log('url ' + url);
		console.log('setting' + setting);
		$.ajax({
			type: 'POST',
			url: url,
			success: function(response) {
				alert('success');
			}
		});
	};
	
	
	ScratchExtensions.register('Link Opener', descriptor, ext);
})();
