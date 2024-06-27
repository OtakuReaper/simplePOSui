import { RouterProvider } from 'react-router'
import './App.css'
import { Flex } from '@chakra-ui/react'
import { router } from './utils/routes'

function App() {

  return (
    <>
    <RouterProvider router={router}
    fallbackElement={
      <Flex>Loading...</Flex>
    }
    />
    </>
  )
}

export default App
