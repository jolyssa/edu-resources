const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    minlength: [2, 'Title must be at least 2 characters']
  },
  type: {
    type: String,
    required: [true, 'Type is required'],
    enum: {
      values: ['Repository', 'Website', 'Book'],
      message: '{VALUE} is not a valid resource type'
    }
  },
  level: {
    type: String,
    required: [true, 'Level is required'],
    enum: {
      values: ['Beginner', 'Intermediate', 'Advanced', 'Everyone'],
      message: '{VALUE} is not a valid level'
    }
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true
  },
  createdBy: {
    type: String,
    required: [true, 'Creator name is required'],
    trim: true
  },
  info: {
    category: {
      type: String,
      required: [true, 'Category is required'],
      trim: true
    },
    link: {
      type: String,
      required: [true, 'Link is required'],
      trim: true
    },
    published: {
      type: String,
      required: [true, 'Published date is required']
    }
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Resource', resourceSchema);