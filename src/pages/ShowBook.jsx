import React from 'react'
import { useState , useEffect } from 'react'
import axios from 'axios'
import {  useParams } from 'react-router-dom'
import BackButton from '../Components/BackButton'
import Spinner from '../Components/Spinner'
const ShowBook = () => {
 const  [ Book , setBook] = useState({})
//  console.log(Book)
 const [ Loading , setLoading] = useState(false)
 const {id} = useParams()
 useEffect( () => {
  setLoading(true)
  axios.get(`http://localhost:4000/books/${id}`)
  .then((res) => {
     setBook(res.data)
     setLoading(false)
  })
   .catch((error) => {
    console.log(error.message)
    setLoading(false)
   })
 },[])

  return (
    <div className='px-10 py-10' >
      <BackButton />
      <h1 className='text-3xl text-center text-cyan-400 '>Show Book</h1>
      {
        Loading ?(
        <Spinner/>) :(
        <div className=' border-2 border-cyan-400 h-fit w-fit m-auto rounded-md'>
          <div className='m-4'> <span className='text-xl text-gray-600'>Id : </span> <span className='text-blue-500'>{Book._id}</span></div>
          <div className='m-4'> <span className='text-xl text-gray-600'>Title : </span> <span className=' text-lg font-semibold text-cyan-400'>{Book.title}</span></div>
          <div className='m-4'> <span className='text-xl text-gray-600'>Author : </span> <span className=' text-lg font-semibold text-gray-400'>{Book.author}</span></div>
          <div className='m-4'> <span className='text-xl text-gray-600'>PublishYear : </span> <span>{Book.publishYear}</span></div>
          <div className='m-4'> <span className='text-xl text-gray-600'>Create Time : </span> <span>{new Date (Book.createdAt).toString()}</span></div>
          <div className='m-4'> <span className='text-xl text-gray-600'>Update Time : </span> <span>{new Date (Book.updatedAt).toString()}</span></div>
        </div>)
      }
    </div>
  )
}

export default ShowBook