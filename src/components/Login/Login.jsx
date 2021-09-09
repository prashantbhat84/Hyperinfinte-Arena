import React from 'react'

import { Typography } from '@material-ui/core'
import useStyles from './styles'
const Header = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Typography variant='h2' className={classes.textColor}>
        Hello World
      </Typography>
    </div>
  )
}

export default Header
