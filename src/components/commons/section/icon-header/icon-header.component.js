import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import useStyles from './icon-header.styles';

const IconHeader = ({
  icon: Icon,
  title,
  subTitle,
  paperClass
}) => {
  const classes = useStyles();

  return (
    <Fragment>
      <Grid container>
        <Grid item xs={6}>
          <Paper className={clsx(classes.iconPaper, paperClass)}>
            <Icon fontSize="large" className={classes.icon} />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Typography align="right" color="textSecondary">
            {title}
          </Typography>
          <Typography align="right" variant="h5">
            {subTitle}
          </Typography>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
    </Fragment>
  );
};

IconHeader.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  paperClass: PropTypes.string,
};

IconHeader.defaultProps = {
  paperClass: ''
};

export default IconHeader;
