import { makeStyles } from '@mui/styles';
import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme-context';
import LandingUI from '../core-ui/landing/landing-ui';

const Landing = () => {
  const { theme, drawerOpen } = useContext(ThemeContext);

  return (
    <LandingUI drawerOpen={drawerOpen} theme={theme} />
  );
};

export default Landing;