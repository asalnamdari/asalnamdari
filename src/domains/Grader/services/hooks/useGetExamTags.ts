import { AxiosError } from 'axios'
import api from 'core/handler'
import { useQuery, UseQueryOptions } from 'react-query'

const getExamTags: () => Promise<any> = async () => {
  const res = await api.get('/GetExamTags')
  return res.data
}

const useGetExamTags: <TData>(
  options?: UseQueryOptions<TData, AxiosError, TData>,
) => any = (options) => useQuery('tags', getExamTags, options)

export default useGetExamTags
