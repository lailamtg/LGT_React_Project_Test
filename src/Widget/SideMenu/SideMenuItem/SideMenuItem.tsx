import './SideMenuItem.css';
import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import {SideMenuItemProps} from "./SideMenuItemModel";

export const SideMenuItem = ({label, selected, onClick}: SideMenuItemProps) => (
    <ListItem disablePadding className="menu-item">
        <ListItemButton component="button" type="button" selected={selected} onClick={onClick}
                        className="menu-item-button">
            <ListItemText primary={label} className="menu-item-text" />
        </ListItemButton>
    </ListItem>
);