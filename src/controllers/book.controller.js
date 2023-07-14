
import Book from '../models/book.model.js';

// define handlers
const getBooks = async function ( req, res, next )
{
    try {
        const books = await Book.find();

        return res.status(200).json({ 
          success: true,
          message: "The book is available 🙌",
          data: {
            book: books,
          },
        });
    } catch (e) {
        return res.status(400).json({
          success: false,
          error: {
            message: e.message,
            code: e.code,
          },
        });
    }
 }

const getBook = async function ( req, res, next )
{ 
    try {
        const { id } = req.params
       
        const book = await Book.findById( id );
        
        if ( !book ) throw new Error( 'Book is not available 😪' );
        
        return res.status(200).json({
          success: true,
          message: "The book is available 🙌",
          data: {
            book: book,
          },
        });
    } catch (e) {
        return res.status( 404 ).json( {
            success: false,
            error: {
                message: e.message,
                code: 404
            }
        })
    }
}

const createBook = async function ( req, res, next )
{
  try {
    const { title, year, author, genre, era, publisher, createdAt, updatedAt } = req.body;
 
    const book = await Book.create( { title, year, author, genre, era, publisher, createdAt, updatedAt});
    
    await book.save();


    return res.status( 201 ).json( {
      success: true,
      message: 'Author created',
      data: {
        book: book
      }
    })
  } catch (e) {
    return res.status( 422 ).json( {
      success: false,
      error: {
        message: e.message,
        code: e.code,
      }
    })
  }
 }

const updateBook = async function ( req, res, next ) { 
  try {
    const { title, year, author, genre, era, publisher} = req.body
    const update = await Book.findOneAndUpdate({_id: req.params.id}, {title, year, author, genre, era, publisher }, { new: true })
    if (!update) {
      return res.status(400).json({
        success: false,
        message: 'Not successfully updated',
      })
    }
    return res.status(200).json({
      success: true,
      message: 'Book successfully updated',
      data: {
        book: update
      }
    })
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message
    })
  }
}


const deleteBook =  async function ( req, res, next ) { 
  try {
    const deleteBook = await Book.findOneAndDelete({_id: req.params.id})
    if (!deleteBook) {
      throw new Error('Book not deleted')
    }
    return res.status(200).json({
      success: true,
      message: 'Book deleted'
    })
  } catch (error){
    return res.status(400).json({
      success: false,
      message: error.message
    })
  }
}


// export handlers
export
{
    getBooks, getBook, createBook, updateBook, deleteBook
}