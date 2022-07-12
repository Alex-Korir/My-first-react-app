import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const Books = [
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/41B7ocB3I1L._AC_UL127_SR127,127_.jpg",
    id: 1,
    author: "Neil Armstrong",
    title: "Let us live",
    pages: 234,
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/71gDtm1U0FL._AC_UL127_SR127,127_.jpg",
    id: 2,
    author: "Alex Kipkorir",
    title: "This is us",
    pages: 634,
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/81JjBCLBHYL._AC_UL127_SR127,127_.jpg",
    id: 3,
    author: "Samson Cook",
    title: "Lord of Rings",
    pages: 739,
  }
]

function Booklist () {
  return(
    <section>
      {Books.map((book)=>{
        return <Book key={book.id} {...book}></Book>
      })}
    </section>
  )
}

const Book = ({img, author, title, pages}) => {
  const clickHandler = (e) => {
    alert("You are so good to me");
    console.log(e.target);
    console.log(e);
  }

  return(
    <article>
      <img src={img} alt=<h6>This imagess</h6>></img>
      <h4>Author: {author}</h4>
      <h6>Title: {title}</h6>
      <p>pages: {pages}</p>
      <button type="button" onClick={clickHandler}>Click me!</button>
    </article>
  )
}

root.render(
  <StrictMode>
    <Booklist></Booklist>
  </StrictMode>
);
