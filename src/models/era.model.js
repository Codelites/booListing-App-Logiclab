// import dependencies
import { Schema, model } from 'mongoose';

// define handler
const EraSchema = new Schema( {
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

  createdAt: {
    type: Date,
    required: true
  },
     
  updatedAt: {
    type: Date,
    required: true
  },
    
});

const Era = model("Era", EraSchema);

// export handler
export default Era;