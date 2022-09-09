// import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader
import "@canvas-fonts/helvetica";
import "line-awesome/dist/line-awesome/css/line-awesome.css";

export default {
  icons: {
    iconfont: "la",
  },
  theme: {
     options: {
            customProperties: true
        },
    themes: {
      dark: {
        title: '#EBEDEF',
        background: '#263F68',
        primary: '#01B1FF',
        secondary: '#b0bec5',
        accent: '#8c9eff',
        error: '#b71c1c',
        test: '#181818'
      },

      light: {
        title: '#263F68',
        background: '#EBEDEF',
        primary: '#01B1FF',
        secondary: '#b0bec5',
        accent: '#8c9eff',
        error: '#b71c1c',
        test: '#f2f2f2'

      }
    }
  },
  
}