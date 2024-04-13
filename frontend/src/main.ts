import "@/assets/styles/main.scss";
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { DefaultApolloClient } from '@vue/apollo-composable';
import { apolloClient } from './apolloClient';


const app = createApp(App);

app.provide(DefaultApolloClient, apolloClient);

app.use(router);
app.mount('#app');
