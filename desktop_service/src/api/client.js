import { create } from 'apisauce';

const apiClient = create({
    baseURL: 'http://localhost:5001/api',
    timeout: 1000000,
});

export default apiClient;