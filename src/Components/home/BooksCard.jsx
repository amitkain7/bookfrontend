import React from 'react'
import BookSingleCard from './BookSingleCard'

const BooksCard = ({Books}) => {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {Books.map((book) => (
       <BookSingleCard key={book._id} item={book}/>
      ))}
    </div>
  )
}

export default BooksCard