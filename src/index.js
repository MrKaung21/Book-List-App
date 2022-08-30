import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

const books = [
    {
        id: 1,
        img: 'https://m.media-amazon.com/images/I/91CU55zNNaL._AC_UL320_.jpg',
        title: 'Destinations of a Lifetime',
        author: 'Amelia Hepworth'
    },
    {
        id: 2,
        img: 'https://images-na.ssl-images-amazon.com/images/I/71aLultW5EL._AC_UL600_SR600,400_.jpg',
        title: 'Our Class is a Family',
        author: 'Shannon Olsen'
    },
    {
        id: 3,
        img: 'https://images-na.ssl-images-amazon.com/images/I/61Ars9rdgGS._AC_UL600_SR600,400_.jpg',
        title: 'A Letter From Your Teacher',
        author: 'Shannon Olsen'
    }
]


function BookList() {
    return (
        <section className='booklist'>
            {books.map((book) => {
                return (
                    <Book key={book.id} {...book}></Book>
                ) 
            })}
        </section>
    )
}


const Book = ({ img, title, author }) => {
    return (
        <article className='book'>

            <img src={img} alt='' />
            <h1>{title}</h1>
            <h4>{author}</h4>
            
        </article>
    )
}


ReactDom.render(<BookList />, document.getElementById('root'))