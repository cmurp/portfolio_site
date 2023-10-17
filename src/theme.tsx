import { ThemeInterface } from 'styled-components';

const theme: ThemeInterface = {
    borderRadius: '5px',

    colors: {
        main: '#000000', // Dark blue - primary background color
        secondary: '#082032', // Medium blue - secondary background color for panels, modals
        tertiary: '#334756', // Light blue - used for backgrounds of selected items, hover states

        accent: '#F0A500', // Gold - accent color for buttons, links
        secondaryAccent: '#FFFFFF', // White - secondary accent color for highlights, notifications

        textPrimary: '#F7FAFC', // Almost white - primary text color
        textSecondary: '#E2E8F0', // Light gray - secondary text color for less important information
        textOnAccent: '#0F1624', // Dark blue - text color on accent backgrounds
        textOnSecondaryAccent: '#0F1624', // Dark blue - text color on secondary accent backgrounds

        border: '#334756', // Light blue - border color for dividers, tables, etc
        borderAccent: '#F0A500', // Gold - border color for emphasis

        success: '#007E33', // Green - success color for notifications, alerts
        warning: '#FF8800', // Orange - warning color for notifications, alerts
        error: '#CC0000', // Red - error color for notifications, alerts
        info: '#2196F3', // Blue - info color for notifications, alerts

        background: '#F7FAFC', // Almost white - background color for the page
        backgroundSecondary: '#E2E8F0', // Light gray - secondary background color for panels, modals

        title: '#F0A500', // Gold - color for titles, headings, etc
    },

    fonts: {
        primary: 'Poppins, sans-serif', // Primary font for text
        code: 'Courier, monospace', // Font for code blocks, data presentation
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

    shadows: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
};
  

export default theme;