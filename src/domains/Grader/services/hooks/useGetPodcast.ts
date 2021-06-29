import { AxiosError } from 'axios'
import api from 'core/handler'
import { useQuery, UseQueryOptions } from 'react-query'

const getExamTags: () => Promise<any> = async () => {
  const res = await api.get('/getpodcastdata')
  return res.data
}

const useGetPodcast: <TData>(
  options?: UseQueryOptions<TData, AxiosError, TData>,
) => any = (options) => useQuery('podcasts', getExamTags, options)

export default useGetPodcast
