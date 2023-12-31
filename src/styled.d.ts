import 'styled-components';


// extend styled-components module declarations
declare module 'styled-components' {
    export interface ThemeInterface {
      borderRadius: string;
      
      colors: {
        main: string;
        secondary: string;
        tertiary: string;
        
        accent: string;
        secondaryAccent: string;
        
        textPrimary: string;
        textSecondary: string;
        textOnAccent: string;
        textOnSecondaryAccent: string;
        
        success: string, 
        warning: string, 
        error: string, 
        info: string,

        background: string,
        backgroundSecondary: string,
        
        border: string;
        borderAccent: string;

        title: string;
      };
      
      fonts: {
        primary: string;
        code: string;
      };

      fontSizes: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        xxl: string;
      };
      
      fontWeights: {
        normal: string;
        bold: string;
        bolder: string;
        light: string;
        lighter: string;
      };
      
      breakpoints: {
        mobile: string;
        tablet: string;
        desktop: string;
      };

      sizes: {
        topnav: string;
      };
  
      animations: {
        transitionTime: string;
      };

      shadows: {
        sm: string;
        md: string;
        lg: string;
        xl: string;
      };
    }
  }
  