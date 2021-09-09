
import React from 'react'



import Dashboard from 'components/Dashboard/Dashboard';

import {makeStyles} from '@material-ui/core'
const useStyles=makeStyles({
  root:{
    backgroundColor:'#fff00'
  }
})


const App = () => {
   const classes= useStyles();
    return (
       
      <Dashboard className={classes.root}/ >
    )
}

export default App
