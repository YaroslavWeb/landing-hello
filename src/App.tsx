import { Footer } from 'features/Footer'
import { Header } from 'features/Header'
import { Home } from 'pages/Home'
import * as C from 'styles/components'

export const App = () => {
  return (
    <>
      <Header />
      <C.Divider height={112} />
      <Home />
      <Footer />
    </>
  )
}
