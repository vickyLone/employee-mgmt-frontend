import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Admin from './Adminhome';
import Employee from './employee';
import Landing from './Landingpage';
import Login from './Login';
import Registration from './Registration';
import Viewemployee from './Viewemployee';
import Addcourses from './Addcourses';
import Addtask from './Addtask';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Registration' element={<Registration/>}/>
      <Route path='/home' element={<Employee/>}/>
      <Route path='/Admin' element={<Admin/>}/>
      <Route path='/Admin/viewemployee' element={<Viewemployee/>}/>
      <Route path='/Admin/addcourse' element={<Addcourses/>} />
      <Route path='/Admin/addTasks' element={<Addtask/>} />

    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
