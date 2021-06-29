import React, { FC, Suspense } from 'react'
import { AppProvider } from './App.context'
import AppRoutes from './AppRoutes'
import { FireBaseProvider } from './FireBaseProvider'
import useApp from './useApp'
import useFireBase from './FireBaseProvider/useFireBase'
import PageLoading from './components/PageLoading'

const App: FC = () => {
  const value = useApp()
  const firebase = useFireBase()
  return (
    <FireBaseProvider value={firebase}>
      <AppProvider {...{ value }}>
        <Suspense fallback={<PageLoading />}>
          <AppRoutes />
        </Suspense>
      </AppProvider>
    </FireBaseProvider>
  )
}

export default App
