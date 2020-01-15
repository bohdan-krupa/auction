const { model, Schema } = require('mongoose')

const auctionSchema = new Schema({
  title: {
    type: String,
    require: true
  },
  imgs: [{
    type: Schema.Types.ObjectId,
    require: true
  }],
  description: {
    type: String,
    require: true
  },
  timeToStart: {
    type: Number,
    require: true
  }
})