import { Box,Typography,makeStyles } from '@material-ui/core'
import React from 'react'
const useStyles= makeStyles({
    box:{
        borderRadius:'12px',
        marginBottom:'20px'
    }
})
const list=[{bgcolor:'#207fb7',text:"Total Bookings",value:100},
{bgcolor:'#a298a1',text:"In Progress",value:50},
{bgcolor:'#1b5e20',text:"Completed",value:20},
{bgcolor:'#a21e2d',text:"Expired/Cancelled",value:30}
]
function DashboardCards() {
    const classes= useStyles()
    return (
       <Box display="flex"
        flexDirection="column" 
       >      
        {list.map(item =>
            <Box display="flex"
            justifyContent="center" 
            alignItems="center" 
            height={100} 
            width={150} 
            flexDirection="column"
            className={classes.box}
            key={item.text}
            bgcolor={item.bgcolor}>
                  <Typography variant="body2">
                    {item.value}
                </Typography>
               <Typography variant="body2">
                      {item.text}
               </Typography>
           </Box>
            )}     
        
       </Box>
    )
}

export default DashboardCards
