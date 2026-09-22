import './Content.css';
import {Box, Typography} from '@mui/material';
import {UpdateTimeButton} from '../UpdateTimeButton/UpdateTimeButton';
import type {ContentProps} from './ContentModels';

export const Content = ({title, onUpdateTime}: ContentProps) => (
    <Box component="main" className="content">
        <Typography component="h1" className="content-title">{title}</Typography>
        <UpdateTimeButton onClick={onUpdateTime} />
    </Box>
);
