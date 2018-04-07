import Hapi from "hapi";
import { routes } from "./routes";

const server = Hapi.server({
    host: "localhost",
    port: 5000
});

routes.forEach((route) => {
    server.route(route);
});

async function start(){
    try{
        await server.start();
    }
    catch(err){
        console.log(err);
    }

    console.log("Happi Server has successfully ran");
}

start();