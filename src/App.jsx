import {Route, createRoutesFromElements, createBrowserRouter, RouterProvider} from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import ResourcesPage from './pages/ResourcesPage'
import ResourcePage, {resourceLoader} from './pages/ResourcePage'
import AddResourcePage from './pages/AddResourcePage'
import EditResourcePage from './pages/EditResourcePage'
// import NotFoundPage from './pages/NotFoundPage'


const App = () => {
//! Add a Resource
  const addResource = async (newResource) => {
    console.log(newResource)
    const res = await fetch(`/api/resources`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newResource)
    })
    return
  }

  //! Delete a Resource
  const deleteResource = async (id) => {
    console.log('deleted', id)

    const res = await fetch(`/api/resources/${id}`, {
      method: 'DELETE',
    })
    return
  }

  // ! Update a Resource
  const updateResource = async (resource) => {
    console.log(resource)
    const res = await fetch(`/api/resources/${resource.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(resource)
    })
    return
  }

  
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/resources' element={<ResourcesPage />} />
      <Route path='/add-resources' element={<AddResourcePage addResourceSubmit={addResource} />} />
      <Route path='/edit-resource/:id' element={<EditResourcePage updateResourceSubmit={updateResource}/>} loader={resourceLoader} />
      <Route path='/resource/:id' element={<ResourcePage deleteResource={deleteResource} />} loader={resourceLoader} />
    </Route>
    )
  )

  return <RouterProvider router={router}/>

  
}

export default App
