# ARIA Live MFE

## Implementation

This app contains two independent micro-frontends, `app-a` and `app-b`, along with a host app, `root-app`, which loads the code from both these micro-frontends. [Module federation](https://webpack.js.org/concepts/module-federation/), a bundler technique, is used to create a MFE setup by exposing the code of the two micro-frontends to the `root-app`.

## Starting demo app

To start the demo, clone the repository, then run the following:

```shell
npm run build
npm start
```