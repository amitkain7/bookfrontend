import React from 'react'
import BackButton from '../Components/BackButton'
import { useState , useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import {  useSnackbar } from 'notistack'

const EditBook = () => {
 const {id} = useParams();
  const navigate = useNavigate()
  const [data, setData] = useState({
    title: '',
    author: '',
    publishYear: ''
  })
      const {enqueueSnackbar } = useSnackbar()
   useEffect( () => {
    axios.get(`http://localhost:4000/books/${id}`)
    .then((res) => { 
      setData({ title:res.data.title, author:res.data.author, publishYear: res.data.publishYear})
  
     })
    .catch((error) => {
      enqueueSnackbar('error' , {variant:'error'})
      console.log(error)

    })
   },[])
  // console.log(data)

  const handleEditBook = () => {

    axios.put(`http://localhost:4000/books/${id}`, data)
      .then((res) => {
        enqueueSnackbar('Book edited successfully! ' , {variant:'success'})
        navigate('/')
      })
      .catch((error) => {
        enqueueSnackbar('error' , {variant:'error'})
        console.log(error.message)

      })
  }
  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl text-cyan-500 text-center'>
        Edit Book
      </h1>

      <div className='mt-8 flex flex-col border-2 border-cyan-500  h-72 w-96 m-auto rounded-lg items-center' >
        <div className=' m-4'>
          <label className=' text-xl ' htmlFor="ti">Title : </label>
          <input type="text"
            placeholder=' Title of Book'
            required
            value={data.title}
            onChange={(e) => setData({ ...data, title: e.target.value })}
            id='ti'
            autoComplete='off'
            className='border-2 rounded-md'
          />
        </div>
        <div className='ml-4 '>

          <label className='text-xl' htmlFor="au">Author : </label>
          <input type="text"
            placeholder=' Author name'
            required
            value={data.author}
            onChange={(e) => setData({ ...data, author: e.target.value })}
            id='au'
            autoComplete='off'
            className='border-2 rounded-md'
          />
        </div>
        <div className='m-4'>

          <label className='text-xl' htmlFor="py">PublishYear : </label>
          <input type="number"
            placeholder='PublishYear'
            required
            value={data.publishYear}
            onChange={(e) => setData({ ...data, publishYear: e.target.value })}
            id='py'
            className='border-2 rounded-md'
          />
        </div>
        <button className=' border-2  bg-cyan-500 rounded-lg text-white py-2 px-4  ' onClick={handleEditBook}>EditBook</button>
      </div>
    </div>
  )
}

export default EditBook;