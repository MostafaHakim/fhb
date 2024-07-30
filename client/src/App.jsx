import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import RootLayouts from './layouts/RootLayouts'
import Home from './pages/Home'
import Teacher from './pages/Teacher'
import Students from './pages/Students'
import Management from './pages/Managements'
import NewTeacher from './components/NewTeacher'
import SalaryCalculate from './components/CalculateSalary'
import SalaryFrom from './components/SalaryForm'
import SalaryVoucher from './components/SalaryVoucher'
import AdvancePaymentForm from './components/AdvancePaymentForm'
import AllPersonnel from './components/AllPersonnel'
import NewSheet from './components/NewSheet'



function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayouts />}>
        <Route path='/' element={<Home />} />
        <Route path='/teacher' element={<Teacher  />} />
        <Route path='/allpersonnel' element={<AllPersonnel />} />
        <Route path='/advancepayment' element={<AdvancePaymentForm />} />
        <Route path='/students' element={<Students />} />
        <Route path='/managements' element={<Management />} />
        <Route path='/newteacher' element={<NewTeacher />} />
        <Route path='/calculatesalary' element={<SalaryCalculate />} />
        <Route path='/teacher/salary/:tId/:month' element={<SalaryVoucher  />} />
        <Route path='/calculatesalary/:tId' element={<SalaryFrom />} />
        {/* =========================Accounts======================================== */}
        <Route path='/newsheet' element={<NewSheet />} />
      </Route>
    )
  )


  return (
    <RouterProvider router={router} />
  )
}

export default App
