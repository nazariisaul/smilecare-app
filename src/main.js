// main.js
import validator from 'validator';

const email = 'patient@smilecare.com';
console.log(`${email} — валідний email?`, validator.isEmail(email));
