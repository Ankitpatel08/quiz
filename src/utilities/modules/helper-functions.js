export function serialize(data) {
	let obj = {};
	for (let [key, value] of data) {
		if (obj[key] !== undefined) {
			if (!Array.isArray(obj[key])) {
				obj[key] = [obj[key]];
			}
			obj[key].push(value);
		} else {
			obj[key] = value;
		}
	}
	return obj;
}

export function localStorageGet(key) {
	let item = localStorage.getItem(key);

	if (!item) {
		return;
	}

	if (item[0] === '{' || item[0] === '[') {
		return JSON.parse(item);
	}

	return item;
}

export function localStorageSave(key, value) {
	if (value === undefined) {
		return new Error('Can\'t store undefinded value');
	}

	if (typeof (value) === 'object' || typeof (value) === 'array') {
		value = JSON.stringify(value);
	}

	if (typeof (value) !== 'string') {
		return new Error('Can\'t store unrecognized format value');
	}
	
	localStorage.setItem(key, value);
}

 export function localStorageRemove(key) {
	localStorage.removeItem(key);
}

export function isLoggedIn() {
	let user = this.localStorageGet('user');

	if (!user) {
		return false;
	} else {
		return user;
	}
}

class HelperFunctions {
	constructor() {
		this.serialize = serialize;
		this.localStorageGet = localStorageGet;
		this.localStorageSave = localStorageSave;
		this.localStorageRemove = localStorageRemove;
		this.isLoggedIn = isLoggedIn;
	}
}

export default HelperFunctions;
