import './MainLayout.css';
import type {ReactNode} from 'react';
import {Box} from '@mui/material';

export const MainLayout = ({children}: {children: ReactNode}) => (
    <Box className="main-layout">
        <Box className="main-layout-container">{children}</Box>
    </Box>
);
