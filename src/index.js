import React from 'react'
import ReactDom from 'react-dom'

function BookList() {
    return (
        <section>
            <Book />
        </section>
    )
}

const Book = () => {
    return (
        <article>
            <Image />
            <Title />
            <Author />
        </article>
    )
}

const Image = () => (
    <img src='https://m.media-amazon.com/images/I/91CU55zNNaL._AC_UL320_.jpg' alt='' />
)

const Title = () => <h1>Destinations of a Lifetime</h1>
const Author = () => <h4>Amelia Hepworth</h4>

ReactDom.render(<BookList />, document.getElementById('root'))