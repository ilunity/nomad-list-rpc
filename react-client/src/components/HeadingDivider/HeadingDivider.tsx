import React from 'react';
import { HeadingDividerProps } from './HeadingDivider.types.ts';
import { Divider, Typography, useTheme } from '@mui/material';

export const HeadingDivider: React.FC<HeadingDividerProps> = ({ headingText }) => {
  const theme = useTheme();

  return (
    <Divider flexItem sx={ {
      borderColor: theme.palette.common.white,
      '::before': {
        borderColor: theme.palette.common.white,
      },
      '::after': {
        borderColor: theme.palette.common.white,
      },
    } }>
      { headingText &&
        <Typography
          variant={ 'h2' }
          component={ 'div' }
          color={ theme.palette.common.white }
        >
          { headingText }
        </Typography>
      }
    </Divider>
  );
};
