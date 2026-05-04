import mongoose from 'mongoose';

const cryptoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a cryptocurrency name'],
    trim: true
  },
  symbol: {
    type: String,
    required: [true, 'Please provide a symbol'],
    uppercase: true,
    trim: true
  },
  price: {
    type: Number,
    required: [true, 'Please provide a price'],
    min: 0
  },
  image: {
    type: String,
    required: [true, 'Please provide an image URL']
  },
  change24h: {
    type: Number,
    required: [true, 'Please provide 24h change percentage'],
    default: 0
  },
  listedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Index for sorting by 24h change
cryptoSchema.index({ change24h: -1 });
// Index for sorting by listing date
cryptoSchema.index({ listedAt: -1 });

export default mongoose.model('Crypto', cryptoSchema);
