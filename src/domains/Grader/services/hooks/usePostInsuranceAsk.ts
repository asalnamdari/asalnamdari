import usePrMutation from 'core/hooks/usePrMutation'

type IUsePostComment = {
  name: string
  userId: string
  message?: string
  flowId?: number
  insurabceId?: number
}

const usePostInsuranceAsk = ({
  name,
  userId,
  message,
  flowId,
  insurabceId,
}: IUsePostComment) => {
  const { mutate, isSuccess, isLoading } = usePrMutation({
    name,
    url: `/insuranceAsk?userId=${userId}${
      message ? `&message=${message}` : ''
    }${flowId ? `&flowId=${flowId}` : ''}${
      insurabceId ? `&insurabceId=${insurabceId}` : ''
    }`,
  })
  return { mutate, isSuccess, isLoading }
}

export default usePostInsuranceAsk
