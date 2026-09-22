import {StyledEngineProvider} from '@mui/material';
import {MainLayout} from './Layout/MainLayout';
import {HomePage} from './Pages/Home/HomePage';

function App() {
    return (
        <StyledEngineProvider injectFirst>
            <MainLayout>
                <HomePage />
            </MainLayout>
        </StyledEngineProvider>
    );
}

export default App;
