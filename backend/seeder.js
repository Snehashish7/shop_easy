// // why seeder.js?

// // It's a way of quickly adding data to the database for testing.
// // The file clears out all of the info in the database and then adds it again, 
// //think of it as a reset button.


// import mongoose from 'mongoose'
// import dotenv from 'dotenv'
// import colors from 'colors'
// import users from './data/user.js'
// import products from './data/products.js'
// import User from './models/userModel.js'
// import Product from './models/productModel.js'
// import Order from './models/orderModel.js'
// import connectDB from './config/db.js'

// dotenv.config()

// connectDB()

// const importData = async () => {
//     try {
//         //Just in case there are values in those tables, 
//         //we want to get rid of them in order to have a fresh set of data

//         await Order.deleteMany()    //deletes all at once
//         await Product.deleteMany()
//         await User.deleteMany()

//         const createdUsers = await User.insertMany(users)
//         const adminUser = createdUsers[0]._id;  //id of the admin user.
//         const sampleProducts = products.map(product => {
//             return {
//                 ...product,
//                 user: adminUser
//             }
//         })

//         await Product.insertMany(sampleProducts)
//         console.log("Data imported!".green)
//         process.exit()

//     } catch (error) {
//         console.log(`Error message: ${error}`.red.bold.underline)
//         process.exit(1) //we are exiting with a failure so exit(1)
//     }
// }

// const destroyData = async () => {
//     try {
//         //Just in case there are values in those tables, 
//         //we want to get rid of them in order to have a fresh set of data

//         await Order.deleteMany()    //deletes all at once
//         await Product.deleteMany()
//         await User.deleteMany()

//         console.log("Data destroyed!".red)
//         process.exit()

//     } catch (error) {
//         console.log(`Error message: ${error}`.red.bold.underline)
//         process.exit(1) //we are exiting with a failure so exit(1)
//     }
// }

// if(process.argv[2] === '-d'){
//     destroyData()   //if node backend/seeder -d is written in terminal then it destroys data
// }else {
//     importData()    //else it imports data
// }
// //instead of writing node backend/seeder everytime we can add npm script in package.json:
// // ---- "data.import":"node backend/seeder",
// // ---- "data.destroy":"node backend/seeder -d"

import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/user.js'
import products from './data/products.js'
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'
import connectDB from './config/db.js'

dotenv.config()


const importData = async () => {
    try {

        await connectDB();
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        const createdUsers = await User.insertMany(users)

        const adminUser = createdUsers[0]._id

        const sampleProducts = products.map((product) => {
            return { ...product, user: adminUser }
        })

        await Product.insertMany(sampleProducts)

        console.log('Data Imported!'.green.inverse)
        process.exit()
    } catch (error) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}

const destroyData = async () => {
    try {

        await connectDB();
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        console.log('Data Destroyed!'.red.inverse)
        process.exit()
    } catch (error) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}

if (process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}