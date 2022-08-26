import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

const title = 'Destinations of a Lifetime'
const author = 'Amelia Hepworth'
const img = 'https://m.media-amazon.com/images/I/91CU55zNNaL._AC_UL320_.jpg'

function BookList() {
    return (
        <section className='booklist'>
            <Book />
            <Book />
        </section>
    )
}


const Book = (props) => {
    
    return (
        <article className='book'>
            <img src={img} alt='' />
            <h1>{title}</h1>
            <h4>{author}</h4>
            
        </article>
    )
}


ReactDom.render(<BookList />, document.getElementById('root'))