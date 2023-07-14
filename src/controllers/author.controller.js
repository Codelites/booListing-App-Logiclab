
import Author from '../models/author.model.js';

// define handlers
const getAuthors = async function ( req, res, next )
{
    try {
        const authors = await Author.find();

        return res.status(200).json({ 
          success: true,
          message: "Author Found 🙌",
          data: {
            author: authors,
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

const getAuthor = async function ( req, res, next )
{ 
    try {
        const { id } = req.params
       
        const author = await Author.findById( id );
        
        if ( !author ) throw new Error( 'Author not Found 😪' );
        
        return res.status(200).json({
          success: true,
          message: "Author Found 🙌",
          data: {
            author: author,
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

const createAuthor = async function ( req, res, next )
{
  try {
    const { id, name, book, genre, createdAt, updatedAt, } = req.body;
 
    const author = await Author.create( { id, name, book, genre, createdAt, updatedAt});
    
    await author.save();


    return res.status( 201 ).json( {
      success: true,
      message: 'Author created',
      data: {
        author: author
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

const updateAuthor = async function ( req, res, next ) { 
  try {
    const { name, book, genre} = req.body
    const update = await Author.findOneAndUpdate({_id: req.params.id}, {name, book, genre }, { new: true })
    if (!update) {
      return res.status(400).json({
        success: false,
        message: 'Not successfully updated',
      })
    }
    return res.status(200).json({
      success: true,
      message: 'Booklist successfully updated',
      data: {
        author: update
      }
    })
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message
    })
  }
}


const deleteAuthor =  async function ( req, res, next ) { 
  try {
    const deleteAuthor = await Author.findOneAndDelete({_id: req.params.id})
    if (!deleteAuthor) {
      throw new Error('Author not deleted')
    }
    return res.status(200).json({
      success: true,
      message: 'Author deleted'
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
    getAuthors, getAuthor, createAuthor, updateAuthor, deleteAuthor
}