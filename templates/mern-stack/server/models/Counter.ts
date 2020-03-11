import mongoose = require("mongoose");
import Schema = mongoose.Schema;
import Document = mongoose.Document;

export interface ICounter extends Document {
    amount: Number;
}

const CounterSchema: Schema = new Schema({
    amount: { type: Number }
});

export default mongoose.model<ICounter>("Counter", CounterSchema);
