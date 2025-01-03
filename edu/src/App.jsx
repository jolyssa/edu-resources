import { Route, createRoutesFromElements, createBrowserRouter, RouterProvider } from 'react-router-dom'
// import { createResource, updateResource, deleteResource } from './api';
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import ResourcesPage from './pages/ResourcesPage'
import ResourcePage, { resourceLoader } from './pages/ResourcePage'
import AddResourcePage from './pages/AddResourcePage'
import EditResourcePage from './pages/EditResourcePage'
import NotFoundPage from './pages/NotFoundPage'
import { AuthProvider } from './context/AuthContext'

const VITE_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';


const App = () => {

  //^RESOURCE FUNCTIONS
  //! Add a Resource
  const addResource = async (newResource) => {
    try {
      const res = await fetch(`${VITE_BASE_URL}/resources`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newResource)
      })

      if (!res.ok) {
        throw new Error('Failed to add resource')
      }

      const data = await res.json();
      console.log('Resource added:', data);
      return data
    } catch (error) {
      console.error('Error adding resource:', error);
      throw error;
    }
  }

  //! Delete a Resource
  const deleteResource = async (id) => {
    try {
      const res = await fetch(`${VITE_BASE_URL}/resources/${id}`, {
        method: 'DELETE',
      });

      if (!res.ok) {
        throw new Error('Failed to delete resource');
      }

      return await res.json();
    } catch (error) {
      console.error('Error deleting resource:', error);
      throw error;
    }
  }

  // ! Update a Resource
  const updateResource = async (resource) => {
    try {
      const res = await fetch(`${VITE_BASE_URL}/resources/${resource.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(resource)
      });

      if (!res.ok) {
        throw new Error('Failed to update resource');
      }

      return await res.json();
    } catch (error) {
      console.error('Error updating resource:', error);
      throw error;
    }
  }


  //^REACT ROUTER
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path='/resources' element={<ResourcesPage />} />
        <Route path='/add-resources' element={<AddResourcePage addResourceSubmit={addResource} />} />
        <Route path='/edit-resource/:id' element={<EditResourcePage updateResourceSubmit={updateResource} />} loader={resourceLoader} />
        <Route path='/resource/:id' element={<ResourcePage deleteResource={deleteResource} />} loader={resourceLoader} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    )
  )


  return (
    <RouterProvider router={router} />
  )
}


export default App