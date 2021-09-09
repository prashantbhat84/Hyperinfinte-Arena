import {Box,Grid } from '@material-ui/core'
import React from 'react'
import DashboardCards from 'components/Dashboard/DashboardContainer/DashboardCards/DashboardCards'
import DashboardTable from 'components/Dashboard/DashboardContainer/DashboardTable/DashboardTable'
import CTA from 'components/Dashboard/DashboardContainer/CTA/CTA'
function DashboardContainer() {
    return (
  
    <Grid container spacing={2}>
        <Grid item>
           <Box style={{display:'flex',justifyContent:'space-between',marginTop:'30px', flexDirection:'column'}}>
          <DashboardTable/>
           <CTA/>
       </Box>
        </Grid>
        <Grid item sm></Grid>
        <Grid item>
          <DashboardCards/>
        </Grid>

    </Grid>

        )
        
     
}

export default DashboardContainer
