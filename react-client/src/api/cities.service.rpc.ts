import {createClient} from "@node-rpc/client";
import {axiosXHR} from "@node-rpc/client/dist/xhr/axios";
import {ICity, ICityPreview} from "./cards.types.ts";
import {jsonFormDataSerializer} from "@node-rpc/client/dist/serializers/jsonFormDataSerializer";

export interface IApi {
    getAll: () => ICityPreview[];
    getOne: (cityName: string) => ICity;
}


const api = createClient<IApi>({
    endpoint: "http://localhost:8000/",
    serializer: jsonFormDataSerializer,
    xhr: axiosXHR,
    // auth: () => "secret",
});


class Service {
    getAll = async (): Promise<ICityPreview[]> => {
        const response = await api.getAll().call();

        if (response.type === 'success') {
            return response.data;
        }

        if (response.type === 'fail') {
            console.log("error", response.code, response.error);
        }

        throw new Error('unsuccessful request');
    };

    getOne = async (name: string): Promise<ICity> => {
        const response = await api.getOne(name).call();

        if (response.type === 'success') {
            return response.data;
        }

        if (response.type === 'fail') {
            console.log("error", response.code, response.error);
        }

        throw new Error('unsuccessful request');
    };
}

export const CitiesServiceRPC = new Service();
