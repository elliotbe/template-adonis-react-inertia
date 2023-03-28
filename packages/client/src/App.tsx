import React, { StrictMode } from 'react'
import './styles.css'

type AppProps = React.PropsWithChildren

const App = ({ children }: AppProps) => {
  return <StrictMode>{children}</StrictMode>
}

export default App
