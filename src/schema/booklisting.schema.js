// import dependencies
import Joi from "joi";

// define handler
const booklistingValidationSchema = Joi.object({
  title: Joi.string().min(3).max(50).required(),
  year: Joi.number().integer().min(1900).max(2100).required(),
  author: Joi.string().required(),
  genre: Joi.string(),
  era: Joi.string().required(),
  publisher: Joi.string().required(),
  genrewritten: Joi.string().required(),
  name: Joi.string().required(),
  createdAt: Joi.date().max('now').required(),
  updatedAt: Joi.date().max('now').required(),
});

// export handler
export default booklistingValidationSchema;