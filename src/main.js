import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importation du fichier CSS de Bootstrap
import 'bootstrap-icons/font/bootstrap-icons.css'; // Importation du fichier CSS de Bootstrap Icons
import './assets/media-queries.scss' // Importation de votre fichier main.css pour les styles personnalisés
import './assets/main.css' // Importation de votre fichier main.css pour les styles personnalisés
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
