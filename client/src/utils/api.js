/* using fetch to handle API connections */

// GET request
export const get = async (url) => {
	try {
		const res = await fetch(url);

		if(!res.ok) {
			throw new Error('Network response failed');
		}

		// RESPONSE DATA: return the parsed JSON (JSON string -converted-> JS obj/arr)
		const resData = await res.json(); 
		console.log('resData: ', Array.isArray(resData));
		return resData;

	} catch (err) {
		console.error('Fetch error: ', err);
		throw err;
	}
};

// POST request
export const post = async (url, reqData) => {
	try {
		const res = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			// converts a JS obj as a JSON string, sent as req body 
			body: JSON.stringify(reqData),
		});

		if(!res.ok) {
			throw new Error('Network response failed');
		}

		// RESPONSE DATA return the parsed JSON (JSON string -converted-> JS obj/arr)
		const resData = await res.json();
		return resData;

	} catch(err) {
		console.error('Fetch error: ', err);
		throw err;
	}
}

