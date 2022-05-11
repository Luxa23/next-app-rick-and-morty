import mongoose from 'mongoose';

const CharacterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name for this user.'],
    maxlength: [20, 'Name cannot be more than 20 characters'],
  },
  status: {
    /* Pet's age, if applicable */

    type: String,
  },
});

const model =
  mongoose.models.Character || mongoose.model('Character', CharacterSchema);

export default model;

// export default mongoose.models.User || mongoose.model('User', UserSchema)
