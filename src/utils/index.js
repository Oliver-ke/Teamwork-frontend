/* eslint-disable consistent-return */
export const makeUrl = (path) => {
	const base = process.env.REACT_APP_BASE_URL;
	const uri = `${base}${path}`;
	return uri;
};

export const request = async (url, method, data = null, token = null) => {
	const reqObject = {
		method,
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
		body: data ? JSON.stringify(data) : '',
	};
	try {
		const response = await fetch(url, reqObject);
		const resData = await response.json();
		return { ...resData, statusCode: response.status };
	} catch (error) {
		return error.message;
	}
};
