import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import ExercisesContext from '../../context/ExercisesContext'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

const styles = {
  root: {
    flexGrow: 1
  }
}

const CenteredTabs = ({ classes }) => {
  // to hold Tabs index
  const [index, setIndex] = useState(0)
  
  const exercisesContext = useContext(ExercisesContext)
  const { muscles } = exercisesContext

  const handleChange = (event, value) => {
    setIndex(value)
  }

  return (
    <Paper className={classes.root}>
      <Tabs
        value={index}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        centered
      >
        <Tab label={'ALL'} />
        {muscles.map((group, idx) => (
          <Tab key={idx} label={group} />
        ))}
      </Tabs>
    </Paper>
  )
}

CenteredTabs.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(CenteredTabs)
