const Book = require('../models/Book');





const getAllBooks = async ()=>{
   try {
       const books = await Book.find({})
       return books;
   } catch (error) {
       throw error;
   }

}


const postBook = async (bookData)=>{
    try {
         await Book.create(bookData)
        const allBooks = await getAllBooks();
        return allBooks;
    } catch (error) {
       throw error;
    }
}

const searchBooks = async (value)=>{

  try {
      const searchRegex = new RegExp(value.replace(/['"]+/g, ""), "i")  
      const books = await Book.find({$or:[{title:searchRegex},{author:searchRegex},{genre:searchRegex}]})
      return books;

      

  } catch (error) {
     throw error;
  }
}


const updateBook = async (updatedBookData,id)=>{
    try {
    const book = await Book.findById(id);
    if(!book){
        throw new Error('Book not found');
    }
     await Book.findByIdAndUpdate(id,updatedBookData,{new:true})
    const allBooks = await getAllBooks();
    return allBooks;
    } catch (error) {
        throw error;
    }
    


}


const deleteBook = async (id)=>{
   try {
       const book = await Book.findById(id);
       if(!book){
           throw new Error('Book not found');
       }
     await Book.findByIdAndDelete(id);
       const allBooks = await getAllBooks();
       return allBooks;
   } catch (error) {
    throw error;
   }
}


module.exports = {postBook,getAllBooks,updateBook,deleteBook,searchBooks}


