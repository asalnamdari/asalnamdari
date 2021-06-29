import { AxiosError, AxiosResponse } from 'axios'
import api from 'core/handler'
import { useQuery, UseQueryOptions } from 'react-query'

function getQuery<TData>(address: string) {
  return async () => {
    const res = await api.get<TData, AxiosResponse<TData>>(address)
    return res.data
  }
}

export function useGet<TData>(
  name: string,
  address: string,
  options?: UseQueryOptions<TData, AxiosError, TData>,
) {
  return useQuery<TData, AxiosError, TData>(
    name,
    getQuery<TData>(address),
    options,
  )
}
