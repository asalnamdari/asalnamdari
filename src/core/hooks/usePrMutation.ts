// import { AxiosError } from 'axios'
import api from 'core/handler'
import { useMutation, UseQueryOptions } from 'react-query'

//<TData = unknown, TError = unknown, TVariables = void, TContext = unknown>(mutationKey: MutationKey, mutationFn?: MutationFunction<TData, TVariables>, options?: UseMutationOptions<TData, TError, TVariables, TContext>): UseMutationResult<TData, TError, TVariables, TContext>;

function usePrMutation<TVariables>({
  name,
  url,
  options,
}: {
  name: string
  url: string
  options?: UseQueryOptions<TVariables, any, TVariables>
}) {
  return useMutation<any, any, TVariables, any>(
    name,
    () => api.post(url),
    options,
  )
}
export default usePrMutation
// export default useGetApplicationInfo
