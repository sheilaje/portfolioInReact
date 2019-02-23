import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
})

const gridStyles = {
  marginTop: '50px',
  backgroundColor: '#f4bb41'
  
}

const individualGridStyles ={
  // border: '2px solid black'
  // backgroundColor: '#f4bb41'
  
}

const pStyles = {
  fontFamily: 'Georgia',
  lineHeight: '1.4',
  fontWeight: 'normal',
  fontStretch: 'normal',
  fontSize: '27px',
}


function Resume(props) {
  const { classes } = props

  return (
    <div className={classes.root}>
      <Grid container spacing={24} style={gridStyles}>
        <Grid item xs={12} style={individualGridStyles}>
          <Paper className={classes.paper}> <h1>Objective</h1><p style={pStyles}>Motivated junior developer transitioning from a career in Teaching. Excited to apply my people and technical skills to solving technical problems for organizations and collaborating with team mates.</p></Paper>
        </Grid>
        <Grid item xs={6} style={individualGridStyles}>
          <Paper className={classes.paper}>
            <h1>Academic Qualification</h1>
            <p style={pStyles}>
              <p>Epicodus - coding School (October 2018 - March 2019)</p>
              <p>Masters of Engineering in Computer Science (June - 2007),Anna University, India.</p>
              <p>Bachelor of Engineering, Computer Science (May - 2004), Anna University, India.   </p>
              <br></br>
              <br></br>
              <br></br>
            </p>
          </Paper>
        </Grid>
        <Grid item xs={6} style={individualGridStyles}>
          <Paper className={classes.paper}><h1>Technical Skills</h1>
            <p style={pStyles}>
              <p>Databases : MySQL</p>
              <p>Languages : C#, .Net, Node JS, Angular JS, React JS, CSS, Java Script, JQuery, HTML</p>
              <p>Testing Framework : Jasmine, Karma, MSTest</p>
              <p>Tools : Git, Github, Slack, Postman</p>
              <p>IDE : Microsoft Visual Studio Code, Atom</p>
            </p>
          </Paper>
        </Grid>
        <Grid item xs={12} style={individualGridStyles}>
          <Paper className={classes.paper}> <h1>Experience</h1>
            <p style = {pStyles}>Mepco Schlenk Engineering College, India–  June 2008 to December 2008</p>
            <p style = {pStyles}>Jerusalem College of Engineering, India - March 2009 to October 2009</p>
            <p style = {pStyles}>Tiny Blessings Montessori, Beaverton, OR - Nov 2016 to April 2017</p>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

Resume.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Resume)