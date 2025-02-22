import { Route, Routes } from 'react-router-dom'
import './App.css'
import StudentTable from './StudentTable'
import Home from './Home'
import EditStudent from './EditStudent'
import ViewDetails from './ViewDetails'
import CreateStudent from './CreateStudent'



function App() {
  return (
    <>
      

        <Routes>
          <Route path='/' element={<StudentTable/>}></Route>
          <Route path='/create' element={<CreateStudent/>}></Route>
          <Route path='/create/edit' element={<EditStudent/>}></Route>
          <Route path='/create/edit/view/:studentid' element={<ViewDetails />} />


        </Routes>
     
    </>
  )
}

export default App
