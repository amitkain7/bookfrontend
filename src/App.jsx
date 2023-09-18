import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import ShowBook from './pages/ShowBook'
import DeleteBook from './pages/DeleteBook'
import EditBook from './pages/EditBook'
import CreateBook from './pages/CreateBook'
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/book/show/:id' element={<ShowBook/>} />
      <Route path='/book/delete/:id' element={<DeleteBook/>} />
      <Route path='/book/edit/:id' element={<EditBook/>} />
      <Route path='/book/create' element={<CreateBook/>} />
    </Routes>
  )
}

export default App