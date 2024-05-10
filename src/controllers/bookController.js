const bookService = require('../services/bookService')

const postBook = async(req,res)=>{
   try {
      const {title, author,genre} = req.body;
      const book = await bookService.postBook({title,author,genre})
      res.status(201).json(book)
   } catch (error) {
    res.status(500).json({message:error.message});
   }
}

const getAllBooks = async(req,res)=>{
    try {
        const allBooks = await bookService.getAllBooks();
        res.status(200).json(allBooks);
    } catch (error) {
        res.status(500).json({message:error.message});
    }

}

const searchBooks = async(req,res)=>{
    try {
      const value = req.query.value;
      const searchedBooks = await bookService.searchBooks(value);
      res.status(200).json(searchedBooks);
    } catch (error) {
      
      res.status(500).json({message:error.message});
    }
}


const updateBook = async(req,res)=>{
  try {
    const {id} = req.params;
    const updatedBookData = req.body;
 
    const updatedBook = await bookService.updateBook(updatedBookData,id);

    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(500).json({message:error.message});
  }
   
}


const deleteBook = async(req, res) => {
   try {
     const {id} = req.params;
  let success = await bookService.deleteBook(id);

  if(!success) {
    res.status(200).json({message:"Book not found"});

   }
     res.status(200).json({message:"Book deleted successfully"});
   } catch (error) {
    res.status(500).json({message:error.message});
   }

}


module.exports = {postBook,getAllBooks,updateBook,deleteBook,searchBooks}





