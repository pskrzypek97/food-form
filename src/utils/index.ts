const timeout = (sec: number) => {
	return new Promise((_, reject) => {
		setTimeout(() => {
			reject(new Error(`Request took too long! Timeout after ${sec} seconds`));
		}, sec * 1000);
	});
};

export const postFormData = async (url: string, options: any) => {
	try {
		const res = (await Promise.race([
			fetch(url, options),
			timeout(5),
		])) as Response;
		const data = await res.json();

		if (!res.ok) throw new Error(`${data.message} (${res.status})`);

		return data;
	} catch (err) {
		throw err;
	}
};
