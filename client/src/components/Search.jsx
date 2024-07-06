import { InputBase, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
    return (
        <>
            <Box style={{ backgroundColor: '#FFFFFF', display: 'flex', marginLeft: '1%', width: '50%' }}>
                <InputBase placeholder="Search for products, brands and more" style={{ width: '100%', paddingLeft: '10px' }} />
                <InputBase />


                <Box style={{ color: '#0000FF' }}>
                    <img src="https://img.icons8.com/ios/452/search--v1.png" alt="search" style={{ width: '25px', height: '25px', marginBottom: '0px', marginTop: '5px' }} />
                </Box>
            </Box>
        </>
    )
}

export default Search;