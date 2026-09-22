import {ContentId} from "../../Pages/Home/HomePageModels";

export interface SideMenuProps{activeContent:ContentId; onSelect:(id:ContentId) => void;}