import usePrMutation from 'core/hooks/usePrMutation'

type IUsePostComment = {
  name: string
  userId: string
  message?: string
  flowId?: number
  insurabceId?: number
}

const usePostComment = ({
  name,
  userId,
  message,
  flowId,
  insurabceId,
}: IUsePostComment) => {
  const { mutate, isSuccess, isLoading } = usePrMutation({
    name,
    url: `/postComment?userId=${userId}${message ? `&message=${message}` : ''}${
      flowId ? `&flowId=${flowId}` : ''
    }${insurabceId ? `&insurabceId=${insurabceId}` : ''}`,
  })
  return { mutate, isSuccess, isLoading }
}

export default usePostComment
