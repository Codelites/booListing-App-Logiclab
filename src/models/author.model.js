// import dependencies
import { Schema, model } from 'mongoose';

// define handler
const AuthorSchema = new Schema( {
    id: {
       type: String  
    },

    name: {
        type: String,
        required: true
    },  

    book: {
        type: Schema.Types.ObjectId, ref: "book"
      },

    genre: {
        type: Schema.Types.ObjectId, ref: "genre"
      },

  createdAt: {
    type: Date,
    required: true
  },
     
  updatedAt: {
    type: Date,
    required: true
  },
    
});

const Author = model("Book", AuthorSchema);

// export handler
export default Author;