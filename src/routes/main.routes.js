// import depencies
import { Router } from 'express';
import {createAuthor, deleteAuthor, getAuthor, getAuthors, updateAuthor } from '../controllers/author.controller.js';
import {createBook, deleteBook, getBook, getBooks, updateBook} from '../controllers/book.controller.js';
import {createEra, deleteEra, getEra, getEras, updateEra} from '../controllers/era.controller.js';
import {createGenre, deleteGenre, getGenre, getGenres, updateGenre} from '../controllers/genre.controller.js';
import booklistingValidationMiddleware from '../middleware/booklisting.middleware.js';

// configure router
const router = Router(); 

// define routes
// Author routes
router.get('/authors', getAuthors);

router.get( '/authors/:name', getAuthor )

router.post( '/author', booklistingValidationMiddleware, createAuthor );

router.put( '/author/:id', updateAuthor );

router.delete( '/author/:id', deleteAuthor );

// Book routes
router.get('/books', getBooks);

router.get( '/books/:id', getBook )

router.post( '/book', booklistingValidationMiddleware, createBook );

router.put( '/book/:id', updateBook );

router.delete( '/book/:id', deleteBook );

// Genre routes
router.get('/genres', getGenres);

router.get( '/genres/:id', getGenre )

router.post( '/genre', booklistingValidationMiddleware, createGenre );

router.put( '/genre/:id', updateGenre );

router.delete( '/genre/:id', deleteGenre );

// Era routes
router.get('/eras', getEras);

router.get( '/eras/:id', getEra )

router.post( '/era', booklistingValidationMiddleware, createEra );

router.put( '/era/:id', updateEra);

router.delete( '/era/:id', deleteEra);
// export handler
export default router;