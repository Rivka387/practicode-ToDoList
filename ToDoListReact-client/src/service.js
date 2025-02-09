import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;
console.log(apiUrl);
axios.defaults.baseURL=apiUrl;
axios.defaults.headers.post['Content-Type'] = 'application/json';


axios.interceptors.response.use(
  response => response,
  error => {
    console.error('API Error:', error.response ? error.response.data : error.message);
    return Promise.reject(error);  }
);
const service={
  getTasks: async () => {
    const result = await axios.get(`/items`);    
    return result.data;
  },

  addTask: async(name)=>{
    await axios.post(`/items`,{name: name, isComplete: false});
  },

  setCompleted: async(id, isComplete)=>{
    await axios.put(`/items/${id}`, {name: " ", isComplete: isComplete});
  },

  deleteTask:async(id)=>{
    await axios.delete(`/items/${id}`);
  }
};
export default service;
