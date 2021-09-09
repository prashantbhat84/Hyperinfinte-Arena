import React from 'react'
import { Drawer, List,ListItem, Button,makeStyles, Typography,createTheme} from '@material-ui/core'

const theme= createTheme()
const useStyles=makeStyles({
    paperwidth:{
        width:theme.spacing(30),
       
    },
    drawerWidth:{
        width:theme.spacing(30)
    },
    button:{
      margin:theme.spacing(1),
      borderRadius:theme.spacing(2),
       width:'250px',
      height:'50px',
     backgroundColor:'#212121',
     color:'#00000',
     '&:hover':{
        backgroundColor:'#6d4c41' ,
       
     },
    
    
    }
})
const buttonClick=(text)=>{
    alert(text);
}
const SideDrawer = ({disabled}) => {
  const classes= useStyles();
    return (
         

            <Drawer variant="permanent"  classes={{paper:classes.paperwidth}}   >
                <Typography variant="">
                         Hello Admin
                    </Typography>
             <List style={{marginTop:'100px'}}>
               
                   
                    <ListItem>
                   <Button  disabled={disabled[0]} color="primary" variant="contained" className={classes.button} onClick={()=>buttonClick("Issue Token")}>
                      New Customer
                   </Button>
                    </ListItem>
                    <ListItem>
                   <Button disabled={disabled[1]} color="primary" variant="contained" className={classes.button} onClick={()=>buttonClick("Issue Token")}>
                      Issue Token
                   </Button>
                    </ListItem>
                    <ListItem>
                   <Button disabled={disabled[2]} color="primary" variant="contained" className={classes.button} onClick={()=>buttonClick("Booking Status")}>
                     Booking Status
                   </Button>
                    </ListItem>
                    <ListItem>
                   <Button disabled={disabled[3]}  color="primary" variant="contained" className={classes.button} onClick={()=>buttonClick("Revoke Token")}>
                      Revoke Token
                   </Button>
                    </ListItem>
                    <ListItem>
                   <Button disabled={disabled[4]} color="primary" variant="contained" className={classes.button} onClick={()=>buttonClick("Logout")}>
                    Logout
                   </Button>
                    </ListItem>
                   
              
                 </List> 
            </Drawer>
      
        )
}

export default SideDrawer
