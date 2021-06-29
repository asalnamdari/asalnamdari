// import { AxiosError } from 'axios'
import api from 'core/handler'
import { useQuery, UseQueryOptions } from 'react-query'

// const getApplicationInfo: (t: any) => Promise<any> = async (t) => {
//   console.log({ t })

//   const res = await api.get('/GetUserInfo')
//   return res.data
// }

// const useGetApplicationInfo: <TData>(
//   options?: UseQueryOptions<TData, AxiosError, TData>,
// ) => any = (options) => useQuery('tags', getApplicationInfo, options)

function usePrQuery<T>({
  name,
  url,
  options,
}: {
  name: string
  url: string
  options?: UseQueryOptions<T, any, T>
}) {
  return useQuery<T>(
    [name, url],
    async () => {
      const res = await api.get(url)
      return res.data.data as T
    },
    options,
  )
}
export default usePrQuery
// export default useGetApplicationInfo
