import _ from 'lodash';

const timeout = 15000;

function filterStatus(res) {
	if (res.ok) {
		return res;
	} else {
		throw new Error('');
	}
}

function timeoutFetch(ms, promise) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error("fetch time out"));
    }, ms);
    promise.then(
      (res) => {
        clearTimeout(timer);
        resolve(res);
      },
      (err) => {
        clearTimeout(timer);
        reject(err);
      }
    );
  })
}

export function request(uri, type = "GET", headers = {}, data = ""){
				if(!_.startsWith(uri, "http")){
					uri = 'http://api.zhuishushenqi.com/' + uri;
				}
				
				let fetchOption = {
					method: type,
					headers: headers
				};

				if(type === "POST"){
					fetchOption.body = data;
				}
				return timeoutFetch(timeout, fetch(uri, fetchOption))
				.then(filterStatus)
				.then(res => res.json())
				.catch(function(error) {
						throw error;
				});
}

export function get(uri, headers = {}) {
	return request(uri, "GET", headers);
}

export function post(uri, data = "", headers = {}) {
	if(!headers["Content-type"]){
		headers["Content-type"] = 'application/x-www-form-urlencoded';
	}
	return request(uri, "POST", headers, data);
}

export function remove(uri, headers = {}) {
	return request(uri, "DELETE", headers);
}