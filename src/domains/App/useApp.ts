import { useMemo, useState } from 'react'
import { IAppContext } from './App.context'

const useApp: () => IAppContext = () => {
  const [pageLoading, setPageLoading] = useState(false)
  const [isSidebarVisible, setSidebarVisible] = useState<
    'OrderExec' | 'MarketMaking' | undefined
  >()

  const startLoading = useMemo(() => {
    let timeoutId: any
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
      setPageLoading(true)
      timeoutId = setTimeout(() => {
        console.log('time out!~~~~')
        setPageLoading(false)
      }, 1000)
    }
  }, [])

  return {
    pageLoading,
    isSidebarVisible,
    setSidebarVisible,
    setPageLoading: startLoading,
  }
}

export default useApp
