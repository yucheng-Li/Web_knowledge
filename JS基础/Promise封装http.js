const getJSON = function(url) {
	// 给Promise
    const promise = new Promise(function(resolve, reject) {
        const handler = function() {
            if(this.readyState !== 4) {	
                return;
            }
            if(this.status === 200) {
                resolve(this.response);
            }else {
                reject(new Error(this.statusText));
            }
        };
		// 初始化数据 
        const client = new XMLHttpRequest();
        client.open("GET", url);
        client.onreadystatechange = handler;
        client.responseType = "json";
        client.setRequestHeader("Accept", "application/json");
        client.send();

    })
	
    return promise;
}

// 入口
getJSON("/posts.json").then(function(json) {
    console.log("Contents: "+ json);
}, function(error) {
    console.log("Error code: "+ error)
})