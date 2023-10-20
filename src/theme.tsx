import { ThemeInterface } from 'styled-components';

const theme: ThemeInterface = {
    borderRadius: '5px',

    colors: {
        main: 'oklch(0% 0 0)', // Dark blue - primary background color
        secondary: 'oklch(23.5% 0.046 244.24)', // Medium blue - secondary background color for panels, modals
        tertiary: 'oklch(38.74% 0.036 241.23)', // Light blue - used for backgrounds of selected items, hover states

        accent: 'oklch(77.52% 0.16272623898676697 76.16781831368107)', // Gold - accent color for buttons, links
        secondaryAccent: 'oklch(100% 0 0)', // White - secondary accent color for highlights, notifications

        textPrimary: 'oklch(98.34% 0.004 236.5)', // Almost white - primary text color
        textSecondary: 'oklch(92.88% 0.013 255.51)', // Light gray - secondary text color for less important information
        textOnAccent: 'oklch(20.07% 0.03 263.54)', // Dark blue - text color on accent backgrounds
        textOnSecondaryAccent: 'oklch(20.07% 0.03 263.54)', // Dark blue - text color on secondary accent backgrounds

        border: 'oklch(38.74% 0.036 241.23)', // Light blue - border color for dividers, tables, etc
        borderAccent: 'oklch(77.52% 0.16272623898676697 76.16781831368107)', // Gold - border color for emphasis

        success: 'oklch(51.77% 0.147 148.71)', // Green - success color for notifications, alerts
        warning: 'oklch(74.42% 0.181 56.46)', // Orange - warning color for notifications, alerts
        error: 'oklch(53.08% 0.2177996666501933 29.23388519234262)', // Red - error color for notifications, alerts
        info: 'oklch(65.82% 0.169 248.81)', // Blue - info color for notifications, alerts

        background: 'oklch(98.34% 0.004 236.5)', // Almost white - background color for the page
        backgroundSecondary: 'oklch(92.88% 0.013 255.51)', // Light gray - secondary background color for panels, modals

        title: 'oklch(77.52% 0.16272623898676697 76.16781831368107)', // Gold - color for titles, headings, etc
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