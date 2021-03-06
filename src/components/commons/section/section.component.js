import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import Paper from '@material-ui/core/Paper';

import IconHeader from './icon-header/icon-header.component';
import TitleHeader from './title-header/title-header.component';

import { COLORS, VARIANTS } from './section.constants';
import useStyles from './section.styles';

const Section = ({
  children,
  variant,
  icon,
  color,
  title,
  subTitle,
}) => {
  const classes = useStyles();
  const paperClasses = clsx(
    classes.paper,
    {
      [classes.normalHeader]: ((icon && variant === VARIANTS.ICON) || (title && variant === VARIANTS.TITLE))
    }
  );

  return (
    <Paper className={paperClasses}>
      {variant && variant === VARIANTS.ICON && icon && (
        <IconHeader
          icon={icon}
          title={title}
          subTitle={subTitle}
          paperClass={clsx(classes.header, classes[color])}
        />
      )}
      {variant && variant === VARIANTS.TITLE && title && (
        <TitleHeader
          title={title}
          subTitle={subTitle}
          paperClass={clsx(classes.header, classes[color])}
        />
      )}
      {children}
    </Paper>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(Object.values(VARIANTS)),
  icon: PropTypes.elementType,
  color: PropTypes.oneOf(Object.values(COLORS)),
  title: PropTypes.string,
  subTitle: PropTypes.string,
};

Section.defaultProps = {
  variant: VARIANTS.DEFAULT,
  icon: null,
  color: COLORS.INFO,
  title: '',
  subTitle: '',
};

export default Section;
