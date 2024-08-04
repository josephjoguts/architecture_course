import { registerApplication, start } from 'single-spa';

registerApplication({
    name: 'login',
    app: () => import('auth-microfrontend/login'),  //Микрофронтед отвечающий за аутентификацию/регистрацию
    activeWhen: ['/login']
});

registerApplication({
    name: 'display',
    app: () => import('display-microfrontend/display'),
    activeWhen: ['/display']
});

registerApplication({
    name: 'addContent',
    app: () => import('new-content-microfrontend/addContent'),
    activeWhen: ['/addContent']
});

registerApplication({
    name: 'profile',
    app: () => import('profile-microfrontend/profile'),
    activeWhen: ['/profile']
});

start();