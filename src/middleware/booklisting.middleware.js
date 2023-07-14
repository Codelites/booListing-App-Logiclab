// import dependencies
import errorHandler from "../config/errorHandler.config.js";
import booklistingValidationSchema from "../schema/booklisting.schema.js";

// define handler
const booklistingValidationMiddleware = function ( req, res, next )
{
    const errors = errorHandler( req.body, booklistingValidationSchema );
    
    if ( typeof errors === 'object' && errors !== null && !Array.isArray( errors ) )
    {
        return res.status( 422 ).json( {
            success: false,
            error: errors
        })
    }
    next();
 }

// export handler
export default booklistingValidationMiddleware;