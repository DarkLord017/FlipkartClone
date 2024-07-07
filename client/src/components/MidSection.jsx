
import { imageURL } from "../constants/data"
import { Grid } from '@mui/material';

const MidSection = () => {
    return (
        <Grid lg={12} sm={12} md={12} xs={12} container style={{ marginTop: '12px', justifyContent: 'space-between' }}>
            {
                imageURL.map(image => (
                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        <img src={image} alt="image" style={{ width: '100%' }} />
                    </Grid>
                ))

            }
        </Grid>
    )
}



export default MidSection;