import './Header.css';
import {Box} from '@mui/material';
import {LiveClock} from '../LiveClock/LiveClock';
import {DateTimeText} from '../DateTimeText/DateTimeText';
import type {HeaderProps} from './HeaderModels';

export const Header = ({lastUpdatedTime}: HeaderProps) => (
    <Box component="header" className="header">
        <DateTimeText value={lastUpdatedTime} placeholder="Press on the button to see a value" />
        <LiveClock />
    </Box>
);
