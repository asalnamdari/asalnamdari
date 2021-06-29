import client from 'core/client'
import React, { FC } from 'react'
import { QueryClientProvider } from 'react-query'

const ReactQueryProvider: FC = ({ children }) => (
  <QueryClientProvider client={client}>{children}</QueryClientProvider>
)

export default ReactQueryProvider
