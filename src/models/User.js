const {Schema, model} = require('mongoose');
const bcrypt = require('bcryptjs');
const UserSchema = new Schema({
  name:{type: String, required: true},
  email:{type:String, required:true, unique: true},
  password: {type: String, required:true}
},{
  timestamps:true
});

//Para cifrar la contraseña
UserSchema.methods.encryptPassword = async password => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

//Para ver si la contraseña es correcta
UserSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
}

module.exports = model('User', UserSchema);
