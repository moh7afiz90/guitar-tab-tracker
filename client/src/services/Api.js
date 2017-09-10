import axios from 'axios'

export default () => {
  return axios.create({
    // connect to the backend
    baseURL: `http://localhost:8081/`
  })
}
