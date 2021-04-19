module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  pwa: {
    name: 'Mad Multimedia',
    themeColor: '#20303f',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    // configure the workbox plugin
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: 'dev/sw.js',
      // ...other Workbox options...
    }
  },
  iconPaths: {
    favicon32: 'img/icons/favicon.ico',
  }
}
