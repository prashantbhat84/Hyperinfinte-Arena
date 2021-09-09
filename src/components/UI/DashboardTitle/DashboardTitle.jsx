import { Box,Typography } from '@material-ui/core'
import React from 'react'


const DashboardTitle = ({title}) => {
    return (
       <Box display="flex" justifyContent="center">
           <Typography variant="h4">{title}</Typography>
       </Box>
    )
}

export default DashboardTitle
