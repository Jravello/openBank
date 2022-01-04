import mongoose from 'mongoose';
import { DATABASE_URI } from '../envConfig';

export async function conectionDatabase() {
  try {
    mongoose.connect(DATABASE_URI, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
      if (!err) {
        console.log('MongoDB connection succeeded.');
      } else {
        throw new Error('Failed Conection DB');
      }
    });
  } catch (err) {
    console.log('Error in MongoDB connection : ' + JSON.stringify(err, undefined, 2));
  }
}
