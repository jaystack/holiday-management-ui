import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import useStyles from './title-header.styles';

const TitleHeader = ({
  title,
  subTitle,
  paperClass
}) => {
  const classes = useStyles();

  return (
    <Paper className={clsx(classes.paper, paperClass)}>
      <Typography variant="h5">
        {title}
      </Typography>
      <Typography variant="subtitle1" className={classes.subTitle}>
        {subTitle}
      </Typography>
    </Paper>
  );
};

TitleHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  paperClass: PropTypes.string,
};

TitleHeader.defaultProps = {
  paperClass: ''
};

export default TitleHeader;
