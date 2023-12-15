import {createServer, RPCFunctions} from "@node-rpc/server";
import {IApi} from "./Api.types";
import {readFileSync} from "fs";
import {jsonFormDataDeserializer} from "@node-rpc/server/dist/deserializers/jsonFormDataDeserializer";

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const api: RPCFunctions<IApi, {}> = {
    getAll: () => () => {
        const nomadList = JSON.parse(readFileSync('nomad-list.json', 'utf8'));
        const result = nomadList.map(
            ({
                 name,
                 rank,
                 cost_for_nomad_in_usd,
                 descriptionFromReview,
                 long_slug,
                 country_code,
                 country,
                 region
             }) => ({
                name,
                rank,
                cost_for_nomad_in_usd,
                descriptionFromReview,
                long_slug,
                country_code,
                country,
                region
            }));

        return result;
    },

    getOne: (cityName: string) => () => {
        const nomadList = JSON.parse(readFileSync('nomad-list.json', 'utf8'));
        const city = nomadList.find(({name}) => name === cityName);
        return city;
    },
};


const rpcServer = createServer({
    api,
    deserializer: jsonFormDataDeserializer,
});

const request = async (req, res) => {
    try {
        const result = await rpcServer.handleAPIRequest(req, {});
        res.json(result);
    } catch (e) {
        return await res.sendStatus(500);
    }
};

const server = express();

server.use(bodyParser.urlencoded({extended: false}))
server.use(bodyParser.json())
server.use(cors());

server.post("/", request);
server.post("/word", (req, res)=>{
    console.log(req);
    res.sendStatus(200);
})

server.listen(8000, function () {
    console.log('server initialized...');
});
