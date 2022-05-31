import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      background: string;
      backgroundLight: string;
      backgroundDark: string;
      backgroundDarkLight: string;

      selected: string;
      selectedHover: string;

      buttonLight: string;
      bullet: string;
      bulletSvg: string;

      dark: string;
      pink: string;
      blue: string;
      green: string;
      red: string;

      primary: string;
      secondary: string;
      gradient: string;

      text: string;
      textCard: string;

      shade: string;
      textHighlight: string;
      textLight: string;

      border: string;
      borderLight: string;
      inputBackground: string;

      success: string;
      pending: string;
      declined: string;

      successLight: string;
      pendingLight: string;
      declinedLight: string;

      successMedium: string;
      pendingMedium: string;
      declinedMedium: string;

      successDark: string;
      pendingDark: string;
      declinedDark: string;

      error: string;
    };
  }

  export interface CustomTheme {
    title: string;

    colors: {
      background: string;
      backgroundLight: string;
      backgroundDark: string;
      backgroundDarkLight: string;

      selected: string;
      selectedHover: string;

      buttonLight: string;
      bullet: string;
      bulletSvg: string;

      dark: string;
      pink: string;
      blue: string;
      green: string;
      red: string;

      primary: string;
      secondary: string;
      gradient: string;

      text: string;
      textCard: string;

      shade: string;
      textHighlight: string;
      textLight: string;

      border: string;
      borderLight: string;
      inputBackground: string;

      success: string;
      pending: string;
      declined: string;

      successLight: string;
      pendingLight: string;
      declinedLight: string;

      successMedium: string;
      pendingMedium: string;
      declinedMedium: string;

      successDark: string;
      pendingDark: string;
      declinedDark: string;

      error: string;
    };
  }
}
