import axios from 'axios';

const instance = axios.create({
	baseURL: 'http://localhost:3000',
	timeout: 5000,
	headers: {
		'Content-Type': 'application/json',
	},
});

export const getAllUserFromAPI = async () => {
	try {
		const response = await instance.get('/user');
		return response;
	} catch (error: any) {
		return error.response;
	}
};

export const getUserFromApi = async (id: string) => {
	try {
		const response = await instance.get(`/user/${id}`);
		return response;
	} catch (error: any) {
		return error.response;
	}
};