import React from 'react';
import {ModalCityProps} from './modal-city.types.ts';
import {Chip, Divider, Modal, Paper, Stack, Typography, useMediaQuery, useTheme} from '@mui/material';
import {CardProperty} from "../card-property";

const round = (n: number, digits = 0) => {
    return Math.round(n * 10 ** digits) / 10 ** digits;
}

export const ModalCity: React.FC<ModalCityProps> = ({onClose, city}) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <Modal
            open={!!city}
            onClose={onClose}
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Paper
                sx={{
                    maxHeight: '80vh',
                    maxWidth: 600,
                    mx: 2,
                    p: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    overflowY: 'auto',
                }}
            >
                {!!city &&
                    <Stack spacing={2}>
                        <Typography variant={'h3'} gutterBottom>
                            {`${city.name} (rank: ${city.rank})`}
                        </Typography>
                        <CardProperty title={'Region'} value={city.region}/>
                        <CardProperty title={'Country'} value={city.country}/>
                        <CardProperty title={'Population'} value={city.population}/>
                        <Divider/>
                        <Typography
                            variant={'body2'}
                            component={'p'}
                        >
                            {city.descriptionFromReview}
                        </Typography>
                        <Divider/>
                        <Stack direction="row" spacing={1}>
                            <Chip label={`Air quality score: ${round(city.air_quality_score, 2)}`}/>
                            <Chip label={`Internet score: ${round(city.internet_score, 2)}`}/>
                            <Chip label={`Humidity: ${round(city.humidity)}%`}/>
                            <Chip label={`Temperature: ${round(city.temperatureC)}°C`}/>
                        </Stack>
                        <CardProperty title={'Cost for nomad'} value={`${round(city.cost_for_nomad_in_usd)}$`}/>
                        <CardProperty title={'Cost for expat'} value={`${round(city.cost_for_expat_in_usd)}$`}/>
                        <CardProperty title={'Cost for local'} value={`${round(city.cost_for_local_in_usd)}$`}/>
                        <CardProperty title={'Cost for family'} value={`${round(city.cost_for_family_in_usd)}$`}/>
                    </Stack>
                }
            </Paper>
        </Modal>
    );
};
