import {
  DefaultTheme,
  CustomTheme
} from "styled-components";
import dark from './dark';
import light from './light';

const defaultTheme = {
  colors: {
    background: '#FFFFFF',
    backgroundLight: 'rgb(251,251,255)',
    backgroundDark: '#212429',
    backgroundDarkLight: '#F5F5F5',

    selected: 'rgb(240,240,255)',

    buttonLight: '#EEEEF7',

    bullet: '#fe0956',
    bulletSvg: '#ECECEC',

    dark: '#282b30',
    pink: '#fe0956',
    blue: '#4351de',
    green: '#28a745',
    red: '#ed403c',

    primary: '#00947e',
    secondary: '#7AC7E3',
    gradient: 'linear-gradient(225deg, #313860 0%, #11172B 100%);',

    text: '#FAFAFA',
    shade: '#848DA0',
    textHighlight: '#444B5B',
    textLight: '#C4C4C4',

    border: '#313958',
    borderLight: '#ECECEC',
    inputBackground: '#1E253E',

    success: '#48bd00',
    pending: '#ffc107',
    declined: '#f83e4c',

    successLight: 'rgba(72,189,0,0.1)',
    pendingLight: 'rgba(255,193,7,0.1)',
    declinedLight: 'rgba(248,62,76,0.1)',

    successMedium: 'rgba(72,189,0,0.8)',
    pendingMedium: 'rgba(255,193,7,0.8)',
    declinedMedium: 'rgba(248,62,76,0.8)',

    successDark: 'rgba(72,189,0,0.25)',
    pendingDark: 'rgba(255,193,7,0.25)',
    declinedDark: 'rgba(248,62,76,0.25)',

    error: '#d45d5d'
  }
}

function combineTheme(theme: CustomTheme): DefaultTheme {
  return { ...defaultTheme, ...theme };
}

export { combineTheme, dark, light };
