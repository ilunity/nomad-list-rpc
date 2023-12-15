import React, {useEffect, useState} from 'react';
import {AppProps} from './App.types';
import {ICity, ICityPreview} from "../../api/cards.types.ts";
import {Container, CssBaseline} from "@mui/material";
import {CardContainer} from "../card-container";
import {ModalCity} from "../modal-city";
import {CitiesServiceRPC} from "../../api/cities.service.rpc.ts";

export const App: React.FC<AppProps> = () => {
    const [cities, setCities] = useState<ICityPreview[]>([]);
    const [currentCityName, setCurrentCityName] = useState<string>('');
    const [city, setCity] = useState<ICity | null>(null);

    useEffect(() => {
        const loadCities = async () => {
            const cities = await CitiesServiceRPC.getAll();
            setCities(cities);
        };

        loadCities();
    }, []);

    useEffect(() => {
        const loadCity = async () => {
            const data = await CitiesServiceRPC.getOne(currentCityName);
            setCity(data);
        }

        if (currentCityName) {
            loadCity();
        }
    }, [currentCityName]);

    return (
        <>
            <CssBaseline/>
            <Container component={'main'}>
                <ModalCity city={city} onClose={() => setCity(null)}/>
                <CardContainer cities={cities} setCityName={setCurrentCityName}/>
            </Container>
        </>
    );
};
