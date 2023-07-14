// import dependencies
import { Schema, model } from 'mongoose';

// define handler
const BookSchema = new Schema( {
    id: {
       type: String  
    },

    title: {
        type: String,
        required: true
    },  

    year: {
        type: Number,
        required: true
    }, 

    author: {
        type: Schema.Types.ObjectId, ref: "Author"
      },

    era: {
        type: Schema.Types.ObjectId, ref: "era"
    },
    
    publisher: {
        type: String,
        required: true
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

const Books = model("Books", BookSchema);

// export handler
export default Books;