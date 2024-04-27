import './assets/css/style.css'
import './assets/js/main.js'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faSearch, faBarsStaggered, faAngleLeft, faEye } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faSearch, faBarsStaggered, faAngleLeft, faEye)

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)

app.mount('#app')
