
const quotes = [
    { name: "To Kill a Mockingbird", author: "Harper Lee" },
    { name: "1984", author: "George Orwell" },
    { name: "Pride and Prejudice", author: "Jane Austen" },
    { name: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { name: "Moby-Dick", author: "Herman Melville" },
    { name: "The Catcher in the Rye", author: "J.D. Salinger" },
    { name: "Brave New World", author: "Aldous Huxley" },
    { name: "The Lord of the Rings", author: "J.R.R. Tolkien" },
    { name: "The Hobbit", author: "J.R.R. Tolkien" },
    { name: "War and Peace", author: "Leo Tolstoy" }
  ];
  
document.getElementById('quote').addEventListener('click', function(){

    const p = document.getElementById('quote-p');
    const h2 = document.getElementById('name');
    const randomIndex = Math.floor(Math.random() * quotes.length);
    // console.log(quotes[randomIndex])
    p.innerText = quotes[randomIndex].name;
    h2.innerText = quotes[randomIndex].author;
    
})