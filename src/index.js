import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

const firstBook = {
    img: 'https://m.media-amazon.com/images/I/91CU55zNNaL._AC_UL320_.jpg',
    title: 'Destinations of a Lifetime',
    author: 'Amelia Hepworth'
}

const secondBook = {
    img: 'https://images-na.ssl-images-amazon.com/images/I/71aLultW5EL._AC_UL600_SR600,400_.jpg',
    title: 'Our Class is a Family',
    author: 'Shannon Olsen'
}

const thirdBook = {
    img: 'https://images-na.ssl-images-amazon.com/images/I/61Ars9rdgGS._AC_UL600_SR600,400_.jpg',
    title: 'A Letter From Your Teacher',
    author: 'Shannon Olsen'
}

function BookList() {
    return (
        <section className='booklist'>
            <Book img={firstBook.img} title={firstBook.title} author={firstBook.author} />
            <Book img={secondBook.img} title={secondBook.title} author={secondBook.author} />
            <Book img={thirdBook.img} title={thirdBook.title} author={thirdBook.author} />
        </section>
    )
}


const Book = (props) => {
    const { img, title, author } = props
    return (
        <article className='book'>
            <img src={img} alt='' />
            <h1>{title}</h1>
            <h4>{author}</h4>
            
        </article>
    )
}


ReactDom.render(<BookList />, document.getElementById('root'))