import axios from 'axios';

axios.defaults.baseURL = process.env.API_HOST;
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';


export default axios;