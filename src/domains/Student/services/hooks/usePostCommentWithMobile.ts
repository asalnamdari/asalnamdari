import usePrMutation from 'core/hooks/usePrMutation'

type IUsePostCommentWithMobile = {
  name: string
  mobile: string
  message?: string
  flowId?: number
  insuranceId?: number
}

const usePostCommentWithMobile = ({
  name,
  mobile,
  message,
  flowId,
  insuranceId,
}: IUsePostCommentWithMobile) => {
  const { mutate, isSuccess, isLoading } = usePrMutation({
    name,
    url: `/PostCommentByMobile?mobile=${mobile}${message ? `&message=${message}` : ''}${
      flowId ? `&flowId=${flowId}` : ''
    }${insuranceId ? `&insuranceId=${insuranceId}` : ''}`,
  })
  return { mutate, isSuccess, isLoading }
}

export default usePostCommentWithMobile
