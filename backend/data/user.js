import bcrypt from 'bcryptjs'
// While submitting a form, there are some sensitive data (like passwords) that must not 
// be visible to anyone, not even to the database admin. To avoid the sensitive data being 
// visible from anyone, Node.js uses “bcryptjs”.

// This module enables storing of passwords as hashed passwords(

// Let us assume you set your password to "Batman". Hashing, or running it through a 
// hashing algorithm, will give you a random seeming string (let us assume) "Bruce". 
// Facebook immediately forgets "Batman" and stores only "Bruce". Now everytime you enter 
// password "Batman", they hash it, Match if the result is "Bruce", and grant or deny you access.

// ) instead of plaintext.
const users = [
    {
        name: "Admin User",
        email: "admin@example.com",
        password: bcrypt.hashSync('123456',10), //Synchronously generates a hash for the given string.
        isAdmin: true
    },
    {
        name: "Snehashish Ghosh",
        email: "Snehashish@example.com",
        password: bcrypt.hashSync('123456',10),
    },
    {
        name: "Roni Ghosh",
        email: "roni@example.com",
        password: bcrypt.hashSync('123456',10),
    },

]

export default users;