import React, { createContext, FC, useContext } from 'react'

export interface IFireBaseContext {
  logEvent(
    eventName: string,
    eventParams?: {
      [key: string]: any
    },
  ): void
}

interface IFireBaseProviderProps {
  children: any
  value: IFireBaseContext
}

const FireBaseContext = createContext<IFireBaseContext>({
  logEvent: () => {},
})

export const useFireBaseContext = () =>
  useContext<IFireBaseContext>(FireBaseContext)

export const FireBaseProvider: FC<IFireBaseProviderProps> = (props) => (
  <FireBaseContext.Provider {...props} />
)
