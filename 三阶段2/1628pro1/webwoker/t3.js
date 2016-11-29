onmessage = function(e) {
	var arr = [];
	for(var i = 0; i < 1000000; i++) {
		arr.push(parseInt(Math.random() * 100));
	}

	var str = '';
	for (var i = 0, len = arr.length; i < len; i++) {
		if (parseInt(arr[i]) % 3 == 0) {
			if (str != '') str += ';';
				str += arr[i];
		}
	}
	postMessage(str);
}