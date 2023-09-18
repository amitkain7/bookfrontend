import React from 'react'
import BackButton from '../Components/BackButton'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useSnackbar } from 'notistack'
const DeleteBook = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  const {enqueueSnackbar} = useSnackbar()

  const handleDeleteBook = () => {

    axios.delete(`http://localhost:4000/books/${id}`)
      .then((res) => {
        enqueueSnackbar('Book Delete successfully!' , {variant: 'info'})
        navigate('/')
      })
      .catch((error) => {
       enqueueSnackbar('error' , {variant: 'error'})
        console.log(error.message)

      })
  }
  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl text-cyan-500 text-center'>
        Delete Book
      </h1>
       <div className=' flex flex-col m-auto mt-10 w-80 h-20 border-2 border-cyan-500 rounded-md  '>
        <h2 className='font-semibold text-red-600 text-center '>Are you sure to Delete this Book !</h2>
        <button className='py-2 px-6 text-white bg-red-600 rounded-lg m-auto' onClick={handleDeleteBook}>
          Delete
        </button>
       </div>
    </div>
  )
}

export default DeleteBook;