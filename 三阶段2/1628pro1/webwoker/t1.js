onmessage = function(e) {
	var arr = [];
	for(var i = 0; i < 1000; i++) {
		arr.push(parseInt(Math.random() * 100));
	}

	var worker1 = new Worker('t2.js');
	worker1.postMessage(JSON.stringify(arr));
	worker1.onmessage = function(e) {
		//把挑选结果发回前台
		postMessage(e.data);
	};
}