import './bootstrap';
import '../css/app.css';
import '../css/materialize.css';
import '../css/startup-materialize.css';
import '../css/startup-standalone.css';
import '../css/docs.css';
import '../fonts/simple-line-icons/simple-line-icons.woff';
import 'https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js';
import {createApp, h} from 'vue';
import {createInertiaApp} from '@inertiajs/vue3';
import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers';
import {ZiggyVue} from '../../vendor/tightenco/ziggy/dist/vue.m';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Rare Fire';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({el, App, props, plugin}) {
        return createApp({render: () => h(App, props)})
            .use(plugin)
            .use(ZiggyVue, Ziggy)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
