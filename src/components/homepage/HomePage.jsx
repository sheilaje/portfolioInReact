import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
// import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'

const AppBarStyles = {
  height: '100px'
}

const buttonStyles = {
  fontSize: '20px',
  paddingTop: '30px'
}

const toolbarStyles = {
  display: 'flex',
  alignItems: 'stretch',
  justifyContent: 'space-around'
}

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function HomePage(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
    
      <AppBar position="static" style = {AppBarStyles} >
        <Toolbar style= {toolbarStyles}>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography style ={buttonStyles} variant="h6" color="inherit" className={classes.grow} component={Link} to='/'>
            Home
          </Typography>
          <Button style ={buttonStyles} color="inherit" component={Link} to='/aboutme'>About Me</Button>
          <Button style ={buttonStyles} color="inherit" component={Link} to='/resume'>Resume</Button>
          <Button style ={buttonStyles} color="inherit" component={Link} to='/projects'>Projects</Button>
          <Button style ={buttonStyles} color="inherit" component={Link} to='/contactme'>Contact Me</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

HomePage.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(HomePage)
