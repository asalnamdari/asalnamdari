import React, { createContext, FC, useContext } from 'react'

export interface IAppContext {
  pageLoading: boolean
  isSidebarVisible?: 'OrderExec' | 'MarketMaking'
  setSidebarVisible(isSidebarVisible?: 'OrderExec' | 'MarketMaking'): void
  setPageLoading(pageLoading: boolean): void
}

interface IAppProviderProps {
  children: any
  value: IAppContext
}

const AppContext = createContext<IAppContext>({
  // isSidebarVisible: undefined,
  pageLoading: false,
  setSidebarVisible: () => {},
  setPageLoading: () => {},
})

export const useAppContext = () => useContext<IAppContext>(AppContext)

export const AppProvider: FC<IAppProviderProps> = (props) => (
  <AppContext.Provider {...props} />
)
