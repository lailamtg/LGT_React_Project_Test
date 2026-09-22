import './HomePage.css';
import {Box, Paper} from '@mui/material';
import {Header} from '../../Widget/Header/Header';
import {SideMenu} from '../../Widget/SideMenu/SideMenu';
import {Content} from '../../Widget/Content/Content';
import {useHomePage} from './useHomePage';

export const HomePage = () => {
    const {activeContent, setActiveContent, lastUpdatedTime, updateTime} = useHomePage();
    return (
        <Paper variant="outlined" className="home-page">
            <Header lastUpdatedTime={lastUpdatedTime} />
            <Box className="home-page-body">
                <SideMenu activeContent={activeContent} onSelect={setActiveContent} />
                <Content title={activeContent === 'content1' ? 'Content 1' : 'Content 2'} onUpdateTime={updateTime} />
            </Box>
        </Paper>
    );
};
