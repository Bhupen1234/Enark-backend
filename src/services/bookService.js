const Book = require('../models/Book');


const postBook = async (bookData)=>{
    try {
        const book = await Book.create(bookData)
        return book;
    } catch (error) {
        throw error;
    }
}


const getAllBooks = async ()=>{
   try {
       const books = await Book.find({})
       return books;
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
    const updatedBook = await Book.findByIdAndUpdate(id,updatedBookData,{new:true})
    return updatedBook;
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
       const deletedBook = await Book.findByIdAndDelete(id);
       return deletedBook;
   } catch (error) {
    throw error;
   }
}


module.exports = {postBook,getAllBooks,updateBook,deleteBook,searchBooks}


