import React from 'react';
import {CardContainerProps} from './card-container.types';
import {Container, Grid, Stack} from '@mui/material';
import {CardSkeleton} from "../CardSkeleton";
import {HeadingDivider} from "../HeadingDivider";
import {CityCard} from "../CityCard";

export const CardContainer: React.FC<CardContainerProps> = ({cities, setCityName}) => {
    return (
        <Stack
            alignItems={'center'}
            spacing={2}
            marginBottom={10}
        >
            <HeadingDivider headingText={'Cities'}/>
            <Container>
                <Grid
                    container
                    spacing={4}
                    justifyContent={'center'}
                    marginBottom={6}
                >
                    {cities.length
                        ? cities.map((city) => <CityCard key={city.long_slug} city={city} setCityName={setCityName}/>)
                        : <><CardSkeleton/><CardSkeleton/><CardSkeleton/></>
                    }
                </Grid>
            </Container>
        </Stack>
    );
};
