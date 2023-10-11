import app from "./app.js";
import {configVariables} from "./config/variables.config.js";
import {sequelize} from "./database/database.js";
import https from 'https';
import fs from 'fs';

async function main(port) {
    try{

        await sequelize.sync({force: false});
        sequelize.authenticate().then(() => {
            console.log('Connection has been established successfully.');
        }).catch(error => {
            console.error('Unable to connect to the database:', error);
        });

        if(process.env.NODE_ENV !== 'production'){
            /*
            const credentials = {
                key: fs.readFileSync('server/src/config/key.pem'),
                cert: fs.readFileSync('server/src/config/cert.pem')
            }
            https.createServer(credentials, app).listen(port, () => {
                console.log(`Server on port ${port}`);
            });
            */
           console.log("Server on port",port);
           app.listen(port);
        }else{
            app.listen(port);
            console.log("Server on port",port);
        }

    }catch(error){
        console.error(error);
    }
}

main(configVariables.port);