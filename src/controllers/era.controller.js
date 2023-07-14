
import Era from '../models/era.model.js';

// define handlers
const getEras = async function ( req, res, next )
{
    try {
        const eras = await Era.find();

        return res.status(200).json({ 
          success: true,
          message: "The era is available 🙌",
          data: {
            era: eras,
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

const getEra = async function ( req, res, next )
{ 
    try {
        const { id } = req.params
       
        const era = await Era.findById( id );
        
        if ( !era ) throw new Error( 'Era is not available 😪' );
        
        return res.status(200).json({
          success: true,
          message: "The era is available 🙌",
          data: {
            era: era,
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

const createEra = async function ( req, res, next )
{
  try {
    const { name, book, createdAt, updatedAt } = req.body;
 
    const era = await Era.create( { name, book, createdAt, updatedAt});
    
    await era.save();


    return res.status( 201 ).json( {
      success: true,
      message: 'Era created',
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

const updateEra = async function ( req, res, next ) { 
  try {
    const { name, book, createdAt, updatedAt} = req.body
    const update = await Era.findOneAndUpdate({_id: req.params.id}, {name, book, createdAt, updatedAt }, { new: true })
    if (!update) {
      return res.status(400).json({
        success: false,
        message: 'Not successfully updated',
      })
    }
    return res.status(200).json({
      success: true,
      message: 'Era successfully updated',
      data: {
        era: update
      }
    })
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message
    })
  }
}


const deleteEra =  async function ( req, res, next ) { 
  try {
    const deleteEra = await Era.findOneAndDelete({_id: req.params.id})
    if (!deleteEra) {
      throw new Error('Era not deleted')
    }
    return res.status(200).json({
      success: true,
      message: 'Era deleted'
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
    getEras, getEra, createEra, updateEra, deleteEra
}