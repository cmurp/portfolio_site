import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
    borderRadius: '5px',

    colors: {
        main: 'rgb(0, 0, 0)', // black - primary background color
        secondary: 'rgb(0, 51, 102)', // Medium blue - secondary background color for panels, modals
        tertiary: 'rgb(51, 102, 153)', // Light blue - used for backgrounds of selected items, hover states

        accent: 'rgb(255, 215, 0)', // Gold - accent color for buttons, links
        secondaryAccent: 'rgb(255, 255, 255)', // White - secondary accent color for highlights, notifications

        textPrimary: 'rgb(250, 250, 250)', // Almost white - primary text color
        textSecondary: 'rgb(235, 235, 235)', // Light gray - secondary text color for less important information
        textOnAccent: 'rgb(51, 51, 102)', // Dark blue - text color on accent backgrounds
        textOnSecondaryAccent: 'rgb(51, 51, 102)', // Dark blue - text color on secondary accent backgrounds

        border: 'rgb(51, 102, 153)', // Light blue - border color for dividers, tables, etc
        borderAccent: 'rgb(255, 215, 0)', // Gold - border color for emphasis

        success: 'teal', // Green - success color for notifications, alerts
        warning: 'rgb(255, 165, 0)', // Orange - warning color for notifications, alerts
        error: 'rgb(255, 0, 0)', // Red - error color for notifications, alerts
        info: 'rgb(0, 0, 255)', // Blue - info color for notifications, alerts

        background: 'black', // Almost white - background color for the page
        backgroundSecondary: 'rgb(235, 235, 235)', // Light gray - secondary background color for panels, modals

        title: 'rgb(255, 215, 0)', // Gold - color for titles, headings, etc
    },

    fonts: {
        primary:  'consolas, monospace', /* This is a Google Font similar to old terminal fonts */
        code: 'consolas, monospace', // Font for code blocks, data presentation
    },

    fontSizes: {
        xs: '0.75rem',     // 12px
        sm: '0.875rem',    // 14px
        md: '1rem',        // 16px
        lg: '1.125rem',    // 18px
        xl: '1.25rem',     // 20px
        xxl: '1.5rem',     // 24px
      },
    
      fontWeights: {
        normal: "400",
        bold: "700",
        bolder: "900",
        light: "300",
        lighter: "200",
      },

    breakpoints: {
        mobile: '480px', // Mobile breakpoint
        tablet: '768px', // Tablet breakpoint
        desktop: '1024px', // Desktop breakpoint
    },

    animations: {
        transitionTime: '0.3s', // Standard transition time
    },

    sizes: {
        topnav: '3rem' // Height of the top navigation bar
    },

    shadows: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
};
  

export default theme;