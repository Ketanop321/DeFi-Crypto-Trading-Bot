
const mongoose = require('mongoose');
const next = require('next'); // Importing next for server-side rendering
const dotenv = require('dotenv'); 


const dev = process.env.NODE_ENV !== 'production'; // Check if the environment is development
const nextServer = next({ dev }); // Create a Next.js server instance
const handle  = nextServer.getRequestHandler(); // Get the request handler for Next.js  


const app = require('./app');
const { use } = require('react');

dotenv.config({ path: './config.env' }); 




//BUILDING THE DATABSE CONNECTION

const DB = process.env.DATABASE
  

    mongoose.connect(DB, {
        useNewUrlParser: true,  
        useUnifiedTopology: true,
        
    }).then(() => {
        console.log('DB connection successful!');
    }).catch(err => {
        console.error('DB connection error:', err);
    });

    const port = process.env.PORT || 3000; 

    nextServer.prepare().then(() => {
        app.get("*", (req, res) => {
            return handle(req, res);
        });
            app.listen(port, () => {
                console.log(`App running on port ${port}...`);
            });
        }); 