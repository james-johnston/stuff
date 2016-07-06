new (function() {
	var ext = this;
	var descriptor = {
		blocks: [
			[' ', 'open link %s in new window', 'openLinkNewTab', 'http://scratch.mit.edu/'],
			[' ', 'digital pin 1 setting %n', 'setDigital', '0'],
		],
		url: 'https://github.com/savaka2/scratch-extensions/wiki/Link-Opener-extension'
	};
	
	var url = window.location.href;
	
	ext._shutdown = function() {};
	
	ext._getStatus = function() {
		return {status:2, msg:'Ready'};
	};
	
	ext.setDigital = function(setting) {
		var url = "http://192.168.2.102/gpio2/" + setting;
		console.log('setting' + setting);
		$.ajax({
			type: 'POST',
			url: url,
			success: function(response) {
				alert(url);
			}
		});
	};
	
	
	ScratchExtensions.register('Link Opener', descriptor, ext);
})();
