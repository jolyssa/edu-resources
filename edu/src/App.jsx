import {Route, createRoutesFromElements, createBrowserRouter, RouterProvider} from 'react-router-dom'
// import { createResource, updateResource, deleteResource } from './api';
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import ResourcesPage from './pages/ResourcesPage'
import ResourcePage, {resourceLoader} from './pages/ResourcePage'
import AddResourcePage from './pages/AddResourcePage'
import EditResourcePage from './pages/EditResourcePage'
import NotFoundPage from './pages/NotFoundPage'

const VITE_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';


const App = () => {
// //! Add a Resource
//   const addResource = async (newResource) => {
//     console.log(newResource)
//     const res = await fetch(`/api/resources`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(newResource)
//     })
//     return
//   }

//   //! Delete a Resource
//   const deleteResource = async (id) => {
//     console.log('deleted', id)

//     const res = await fetch(`/api/resources/${_id}`, {
//       method: 'DELETE',
//     })
//     return
//   }

//   // ! Update a Resource
//   const updateResource = async (resource) => {
//     console.log(resource)
//     const res = await fetch(`/api/resources/${resource._id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(resource)
//     })
//     return
//   }

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

  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/resources' element={<ResourcesPage />} />
      <Route path='/add-resources' element={<AddResourcePage addResourceSubmit={addResource} />} />
      <Route path='/edit-resource/:id' element={<EditResourcePage updateResourceSubmit={updateResource}/>} loader={resourceLoader} />
      <Route path='/resource/:id' element={<ResourcePage deleteResource={deleteResource} />} loader={resourceLoader} />
      <Route path='*' element={<NotFoundPage />} />
    </Route>
    )
  )

  return <RouterProvider router={router}/>

 }

export default App