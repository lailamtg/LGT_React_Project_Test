import './UpdateTimeButton.css';
import {Button} from '@mui/material';
import type {UpdateTimeButtonProps} from './UpdateTimeButtonModels';

export const UpdateTimeButton = ({onClick}: UpdateTimeButtonProps) => (
    <Button type="button" variant="contained" disableElevation className="update-time-button" onClick={onClick}>Update time</Button>
);