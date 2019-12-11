import 'zone.js'
import * as singleSpa from 'single-spa';

async function loadApp(name, prefix, appURL, customProps) {
  // register the app with singleSPA and pass a reference to the store of the app as well as a reference to the globalEventDistributor
  singleSpa.registerApplication(name, () => SystemJS.import(appURL), () => location.hash.startsWith(`#${prefix}`), customProps);
}

async function init() {
  const loadingPromises = [];

  // app1: The URL "/react/..." is being redirected to "http://localhost:8001/..." this is done by the webpack proxy (webpack.config.js)
  loadingPromises.push(loadApp('react-app', '/react', '/react/singleSpaEntry.js'));

  // app2: The URL "/vue/..." is being redirected to "http://localhost:8002/..." this is done by the webpack proxy (webpack.config.js)
  loadingPromises.push(loadApp('vue-app', '/vue', '/vue/singleSpaEntry.js'));

  // wait until all stores are loaded and all apps are registered with singleSpa
  await Promise.all(loadingPromises);
  singleSpa.start();
}

init();