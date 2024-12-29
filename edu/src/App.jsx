import {Route, createRoutesFromElements, createBrowserRouter, RouterProvider} from 'react-router-dom'
import { createResource, updateResource, deleteResource } from './api';
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import ResourcesPage from './pages/ResourcesPage'
import ResourcePage, {resourceLoader} from './pages/ResourcePage'
import AddResourcePage from './pages/AddResourcePage'
import EditResourcePage from './pages/EditResourcePage'
import NotFoundPage from './pages/NotFoundPage'



// const App = () => {
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

//     const res = await fetch(`/api/resources/${id}`, {
//       method: 'DELETE',
//     })
//     return
//   }

//   // ! Update a Resource
//   const updateResource = async (resource) => {
//     console.log(resource)
//     const res = await fetch(`/api/resources/${resource.id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(resource)
//     })
//     return
//   }

const App = () => {
  const addResource = async (newResource) => {
    try {
      const result = await createResource(newResource);
      // Add any success handling here (e.g., notifications)
      return result;
    } catch (error) {
      // Add error handling here
      console.error('Failed to add resource:', error);
      throw error;
    }
  };

  const handleDeleteResource = async (id) => {
    try {
      await deleteResource(id);
      // Add any success handling here
    } catch (error) {
      console.error('Failed to delete resource:', error);
      throw error;
    }
  };

  const handleUpdateResource = async (resource) => {
    try {
      const result = await updateResource(resource._id, resource);
      // Add any success handling here
      return result;
    } catch (error) {
      console.error('Failed to update resource:', error);
      throw error;
    }
  };

  
//   const router = createBrowserRouter(
//     createRoutesFromElements(
//     <Route path='/' element={<MainLayout />}>
//       <Route index element={<HomePage />} />
//       <Route path='/resources' element={<ResourcesPage />} />
//       <Route path='/add-resources' element={<AddResourcePage addResourceSubmit={addResource} />} />
//       <Route path='/edit-resource/:id' element={<EditResourcePage updateResourceSubmit={updateResource}/>} loader={resourceLoader} />
//       <Route path='/resource/:id' element={<ResourcePage deleteResource={deleteResource} />} loader={resourceLoader} />
//       <Route path='*' element={<NotFoundPage />} />
//     </Route>
//     )
//   )

//   return <RouterProvider router={router}/>

  
// }

// export default App

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/resources" element={<ResourcesPage />} />
      <Route 
        path="/add-resources" 
        element={<AddResourcePage addResourceSubmit={addResource} />} 
      />
      <Route 
        path="/edit-resource/:id" 
        element={<EditResourcePage updateResourceSubmit={handleUpdateResource} />} 
        loader={resourceLoader} 
      />
      <Route 
        path="/resource/:id" 
        element={<ResourcePage deleteResource={handleDeleteResource} />} 
        loader={resourceLoader} 
      />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

return <RouterProvider router={router} />;
};

export default App
