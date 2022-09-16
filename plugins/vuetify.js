// import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader
import "@canvas-fonts/helvetica";
import "line-awesome/dist/line-awesome/css/line-awesome.css";


let checkTheme = localStorage.getItem('store') ?  JSON.parse( localStorage.getItem('store')).app.useDarkMode : false


export default {
  icons: {
    iconfont: "la",
  },
  theme: {
    dark:checkTheme,
     options: {
            customProperties: true
        },
    themes: {
      dark: {
        title: '#EBEDEF',
        background: '#2C3E50',
        itemBgColor: '#31465B',
        primary: '#01B1FF',
        secondary: '#b0bec5',
        accent: '#8c9eff',
        error: '#b71c1c',
        text: '#919191'
      },

      light: {
        title: '#263F68',
        background: '#EBEDEF',
        itemBgColor: '#FFFFFF',
        primary: '#01B1FF',
        secondary: '#b0bec5',
        accent: '#8c9eff',
        error: '#b71c1c',
        text: '#B1B1B1'

      }
    }
  },
  
}