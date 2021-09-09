import { Box,Button,makeStyles } from '@material-ui/core'
import React from 'react'


const useStyles=makeStyles({
    button:{
        backgroundColor:'#212121',
        color:'#00000',
        height:'50px',
        borderRadius:'8px',
        '&:hover':{
           backgroundColor:'#6d4c41' ,
          
        }
    }
})




function CTA() {
    const classes= useStyles()
    return (
        <Box display="flex" justifyContent="space-between" width="520px" style={{marginTop:'50px',marginLeft:'70px'}} >
           <Button  color="primary" variant="contained" className={classes.button} >
                     Game Slots Available
                   </Button>
                   <Button  color="primary" variant="contained" className={classes.button}  >
                    Arena Bookings
                   </Button>
            
        </Box>
    )
}

export default CTA
