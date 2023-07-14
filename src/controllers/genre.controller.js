
import Genre from '../models/genre.model.js';

// define handlers
const getGenres = async function ( req, res, next )
{
    try {
        const genres = await Genre.find();

        return res.status(200).json({ 
          success: true,
          message: "The genre is available 🙌",
          data: {
            genre: genre,
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

const getGenre = async function ( req, res, next )
{ 
    try {
        const { id } = req.params
       
        const genre = await Genre.findById( id );
        
        if ( !genre ) throw new Error( 'Genre is not available 😪' );
        
        return res.status(200).json({
          success: true,
          message: "The Genre is available 🙌",
          data: {
            genre: genre,
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

const createGenre = async function ( req, res, next )
{
  try {
    const { name, book, createdAt, updatedAt } = req.body;
 
    const genre = await Genre.create( { name, book, createdAt, updatedAt});
    
    await genre.save();


    return res.status( 201 ).json( {
      success: true,
      message: 'Genre created',
      data: {
        era: era
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

const updateGenre = async function ( req, res, next ) { 
  try {
    const { name, book, createdAt, updatedAt} = req.body
    const update = await Genre.findOneAndUpdate({_id: req.params.id}, {name, book, createdAt, updatedAt }, { new: true })
    if (!update) {
      return res.status(400).json({
        success: false,
        message: 'Not successfully updated',
      })
    }
    return res.status(200).json({
      success: true,
      message: 'Genre successfully updated',
      data: {
        genre: update
      }
    })
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message
    })
  }
}


const deleteGenre =  async function ( req, res, next ) { 
  try {
    const deleteGenre = await Genre.findOneAndDelete({_id: req.params.id})
    if (!deleteGenre) {
      throw new Error('Genre not deleted')
    }
    return res.status(200).json({
      success: true,
      message: 'Genre deleted'
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
    getGenres, getGenre, createGenre, updateGenre, deleteGenre
}