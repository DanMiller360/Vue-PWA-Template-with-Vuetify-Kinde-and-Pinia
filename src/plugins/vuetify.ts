// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
import { VIconBtn } from 'vuetify/labs/VIconBtn'

const customLightTheme = {
  dark: false,
  colors: {
    background: '#f5f9ff',
    surface: '#6b7280',
    'surface-bright': '#FFFFFF',
    'surface-light': '#F5F5F5',
    'surface-variant': '#E0E0E0',
    'on-surface-variant': '#424242',
    primary:'#f78f4f',
    'primary-darken-1':'#d15050',
    secondary:'#282fff',
    'secondary-darken-1':'#6be4ff',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
    transparent: '#00000000'
  },
  variables: {
    'border-color': '#000000',
    'border-opacity': 0.12,
    'high-emphasis-opacity': 0.87,
    'medium-emphasis-opacity': 0.60,
    'disabled-opacity': 0.38,
    'idle-opacity': 0.04,
    'hover-opacity': 0.04,
    'focus-opacity': 0.12,
    'selected-opacity': 0.08,
    'activated-opacity': 0.12,
    'pressed-opacity': 0.12,
    'dragged-opacity': 0.08,
    'theme-kbd': '#212529',
    'theme-on-kbd': '#FFFFFF',
    'theme-code': '#F5F5F5',
    'theme-on-code': '#000000',
  }
}

const customDarkTheme = {
  dark: true,
  colors: {
    background: '#1f2a44',
    surface: '#6b7280',
    'surface-bright': '#2C2C2C',
    'surface-light': '#333333',
    'surface-variant': '#424242',
    'on-surface-variant': '#EEEEEE',
    primary:'#f78f4f',
    'primary-darken-1':'#d15050',
    secondary:'#282fff',
    'secondary-darken-1':'#6be4ff',
    error: '#CF6679',
    info: '#64B5F6',
    success: '#81C784',
    warning: '#FFB74D',
    transparent: '#00000000'
  },
  variables: {
    'border-color': '#FFFFFF',
    'border-opacity': 0.12,
    'high-emphasis-opacity': 1.0,
    'medium-emphasis-opacity': 0.74,
    'disabled-opacity': 0.38,
    'idle-opacity': 0.10,
    'hover-opacity': 0.08,
    'focus-opacity': 0.24,
    'selected-opacity': 0.16,
    'activated-opacity': 0.24,
    'pressed-opacity': 0.16,
    'dragged-opacity': 0.16,
    'theme-kbd': '#F5F5F5',
    'theme-on-kbd': '#000000',
    'theme-code': '#1E1E1E',
    'theme-on-code': '#FFFFFF',
  }
}

export default createVuetify({
  theme: {
    defaultTheme: 'customDarkTheme',
    themes: {
      customLightTheme: customLightTheme,
      customDarkTheme: customDarkTheme,
    },
  },
  components: {
    VIconBtn,
  },
})