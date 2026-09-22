import './SideMenu.css';
import {Box, List} from '@mui/material';
import type {SideMenuProps} from './SideMenuModels';
import {SideMenuItem} from "./SideMenuItem/SideMenuItem";

export const SideMenu = ({activeContent, onSelect}: SideMenuProps) => (
    <Box component="nav" className="side-menu">
        <List disablePadding>
            <SideMenuItem label="MenuItem1" selected={activeContent === 'content1'} onClick={() => onSelect('content1')} />
            <SideMenuItem label="MenuItem2" selected={activeContent === 'content2'} onClick={() => onSelect('content2')} />
        </List>
    </Box>
);
