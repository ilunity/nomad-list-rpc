import React from 'react';
import {CityCardProps} from './CityCard.types.ts';
import {Avatar, Button, Card, CardActions, CardContent, CardHeader, Grid} from "@mui/material";
import {grey} from "@mui/material/colors";
import {CardProperty} from "../card-property";

export const CityCard: React.FC<CityCardProps> = ({city, setCityName}) => {
    const {name, country_code, rank, cost_for_nomad_in_usd, descriptionFromReview, country, region} = city;

    return (
        <Grid item xs={6} sm={4} md={3} lg={2.4}>
            <Card sx={{maxWidth: 345}}>
                <CardHeader
                    sx={{bgcolor: grey[500]}}
                    avatar={
                        <Avatar
                            src={`https://flagsapi.com/${country_code}/flat/32.png`}
                            variant="square"
                            // sx={{width: 64, height: 64}}
                        />
                    }
                    title={name}
                />
                <CardContent>
                    <CardProperty title={'Region'} value={region}/>
                    <CardProperty title={'Country'} value={country}/>
                    <CardProperty title={'Nomad cost'} value={`${cost_for_nomad_in_usd}$`}/>
                    <CardProperty title={'Rank'} value={`${rank}`}/>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={() => setCityName(name)}>Learn More</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};
