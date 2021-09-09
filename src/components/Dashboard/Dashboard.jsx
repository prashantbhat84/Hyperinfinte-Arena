import React from 'react'
import {  Box, Grid,} from '@material-ui/core'
import SideDrawer from 'components/Dashboard/SideDrawer/SideDrawer'
import DashboardTitle from 'components/UI/DashboardTitle/DashboardTitle'
import DashboardContainer from 'components/Dashboard/DashboardContainer/DashboardContainer'


const disabled=[false,false,false,false,false]
const Dashboard = () => {
    
    return (
        <Grid container spacing={2} >
            <Grid item  md={2} >
            <SideDrawer disabled={disabled}/>
            </Grid>
           
            <Grid item md={10}  style={{height:'100vh' }}>
                   <Box display="flex" flexDirection="column" justifyContent="space-between" style={{marginTop:'50px'}}>
                      <DashboardTitle title="ADMIN DASHBOARD"/>
                      <DashboardContainer/>
                   </Box>
               
                </Grid>
              
               

              
              
         
            
        </Grid>
    )
}

export default Dashboard
