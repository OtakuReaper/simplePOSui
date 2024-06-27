import { RouterProvider } from 'react-router'
import './App.css'
import { router } from './utils/routes'
import Loading from './components/loading'

function App() {

  return (
    <RouterProvider router={router} fallbackElement={
      <Loading/>
    }
    />
  )
}

export default App
