import React from 'react';
import { Stack } from '@mui/material';
import { InfinitySpin } from 'react-loader-spinner';

const Loader = () => (
  <Stack
    direction='row'
    width='100%'
    alignItems='center'
    justifyContent='center'
  >
    <InfinitySpin color='gray' />
  </Stack>
);

export default React.memo(Loader);
