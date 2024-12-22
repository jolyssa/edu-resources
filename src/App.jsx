import {Route, createRoutesFromElements, createBrowserRouter, RouterProvider} from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import JobsPage from './pages/JobsPage'
import JobPage, {jobLoader} from './pages/JobPage'
import AddJobPage from './pages/AddJobPage'
import EditJobPage from './pages/EditJobPage'
// import NotFoundPage from './pages/NotFoundPage'


// const router = createBrowserRouter([{ path: "/", element: <HomePage /> }]);



const App = () => {
//! Add Job
  const addJob = async (newJob) => {
    console.log(newJob)
    const res = await fetch(`/api/content`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)
    })
    return
  }

  //! Delete Job
  const deleteJob = async (id) => {
    console.log('deleted', id)

    const res = await fetch(`/api/content/${id}`, {
      method: 'DELETE',
    })
    return
  }

  // ! Update Job
  const updateJob = async (job) => {
    console.log(job)
    const res = await fetch(`/api/content/${content.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(job)
    })
    return
  }

  
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/content' element={<JobsPage />} />
      <Route path='/add-content' element={<AddJobPage addJobSubmit={addJob} />} />
      <Route path='/edit-content/:id' element={<EditJobPage updateJobSubmit={updateJob}/>} loader={jobLoader} />
      <Route path='/content/:id' element={<JobPage deleteJob={deleteJob} />} loader={jobLoader} />
    </Route>
    )
  )

  return <RouterProvider router={router}/>

  
}

export default App
