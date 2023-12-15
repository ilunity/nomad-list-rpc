import React from 'react';
import {CardPropertyProps} from './card-property.types';
import {Typography} from '@mui/material';

export const CardProperty: React.FC<CardPropertyProps> = ({title, value}) => {
    return (
        <div style={{display: 'flex', alignItems: 'baseline'}}>
            <Typography variant={'subtitle2'} fontWeight={700}>
                {title}:&nbsp;
            </Typography>
            <Typography variant={'body2'} noWrap>
                {value}
            </Typography>
        </div>
    );
};
