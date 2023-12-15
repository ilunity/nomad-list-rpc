import React from 'react';
import {Card, CardContent, Grid, Skeleton, Stack} from '@mui/material';

export const CardSkeleton: React.FC = () => {
    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card>
                <Skeleton sx={{height: '250px'}} animation="wave" variant="rectangular"/>
                <CardContent>
                    <Stack height={112} justifyContent={'space-between'}>
                        <Skeleton width={'55%'}/>
                        <Skeleton width={'45%'}/>
                        <Skeleton width={'55%'}/>
                        <Skeleton width={'50%'}/>
                    </Stack>
                </CardContent>
                <Skeleton height={53} variant={'rectangular'}/>
            </Card>
        </Grid>
    );
};
