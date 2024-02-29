import mongoose from 'mongoose';

const configurationsSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  data: {
    type: [[String]],
    required: true
  },
  remark: {
    type: String,
    required: true
  }
});


 export const Configuration = mongoose.model('Configuration', configurationsSchema);

