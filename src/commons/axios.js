import axios from 'axios';

const axiosSwitch = (baseURL) => {

  //創建實例
  const instance = axios.create({
    baseURL: baseURL || 'http://172.10.10.12/api/',
    // baseURL: baseURL ,
    timeout: 1000
  });



  // instance.interceptors.request.use((config) => {

  //   // Do something before request is sent
  //   const jwToken = global.auth.getToken();
  //   config.headers['Authorization'] = 'Bearer ' + jwToken;
  //   return config;
  // }, (error) => {
  //   // Do something with request error
  //   return Promise.reject(error);
  // });

  return instance;
}


// export { axiosSwitch };
export default axiosSwitch();