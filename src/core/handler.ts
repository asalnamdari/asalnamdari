import axios, { AxiosInstance, AxiosError } from 'axios'

// a new instance of axios with a custom config.
const instance: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_ROOT,
})

// intercept requests and add authorization token
instance.interceptors.request.use(
  (config) => {
    config.headers.authToken = '123'
    return config
  },
  (error: AxiosError) => {
    console.log({ error })

    return Promise.reject(error)
  },
)

export default instance
