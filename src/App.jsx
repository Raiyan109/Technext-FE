import { RouterProvider } from 'react-router-dom'
import routes from './routes/routes'
import { ItemContextProvider } from './context/ItemContext'


function App() {

  return (
    <div>
      <ItemContextProvider>
        <RouterProvider router={routes} />
      </ItemContextProvider>
    </div>
  )
}

export default App
