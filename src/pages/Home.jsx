import React from 'react'
import { useState, useEffect } from 'react'
import Spinner from '../Components/Spinner'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'
import BookTable from '../Components/home/BookTable'
import BooksCard from '../Components/home/BooksCard'
const Home = () => {

    const [Books, setBooks] = useState([])
    // console.log(Books)
    const [Loading, setLoading] = useState(false)
    const [showType, setShowType] = useState('table')
    useEffect(() => {
        setLoading(true)
        axios
            .get('https://bookbackend-hazel.vercel.app/books')
            .then((res) => {
                setBooks(res.data.data)
                setLoading(false)
            })
            .catch((error) => {
                console.log(error.message)
                setLoading(false)
            })

    }, [])
    return (
        <div className='p-4'>
            <div className=' text-center '>
                <button className=' bg-cyan-500  hover:bg-cyan-600 text-white py-2 px-4 rounded-lg mr-3 mt-4' onClick={() => setShowType('table')}> Table</button>
                <button className=' bg-cyan-500  hover:bg-cyan-600 text-white py-2 px-4 rounded-lg mt-4'  onClick={() => setShowType('card')}> Card</button>
            </div>
            <div className='flex justify-center items-center '>
                <h1 className='text-2xl my-8 font-semibold text-yellow-600'> Book List </h1>
                <Link to='/book/create'>
                    <MdOutlineAddBox className='text-sky-400 text-3xl ml-4' />
                </Link>
            </div>
            {Loading ? (
                <Spinner />
            ) : showType === 'table' ? (
                <BookTable Books={Books} />
            ) : (
                <BooksCard Books={Books} />
            )}

        </div>
    )
}

export default Home
