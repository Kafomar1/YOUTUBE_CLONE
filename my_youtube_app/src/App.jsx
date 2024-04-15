import { Box } from '@mui/material';
import { appWrapper } from '@styles/styles';
import AppNavMenu from '@navigation/AppNavMenu';
const App = () => {
 return (
 <Box sx={appWrapper}>
 <AppNavMenu />
 </Box>
 );
}
export default App;