# vue-mixpanel-browser

[![NPM](https://nodei.co/npm/vue-mixpanel-browser.png)](https://www.npmjs.com/package/vue-mixpanel-browser)

A vue plugin for [Mixpanel Browser](https://www.npmjs.com/package/mixpanel-browser)

## Installation

```
yarn add vue-mixpanel-browser
```

From you main file.
```typescript
import Vue from 'vue';
import VueMixpanelBrowser from 'vue-mixpanel-browser';
Vue.use(VueMixpanelBrowser, {
  token: YOUR_TOKEN,
  config: {...}
});
```

# Usage

From your vue components you can now access [Mixpanel Browser](https://www.npmjs.com/package/mixpanel-browser) via `$mixpanel`
```typescript
this.$mixpanel.track('sign up');
```

## Passing mixpanel options


Available config for mixpanel can be found [here](https://developer.mixpanel.com/docs/javascript-full-api-reference#mixpanelset_config);

```typescript
import Vue from 'vue';
import VueMixpanelBrowser from 'vue-mixpanel-browser';
import { MixpanelPluginOptions } from 'vue-mixpanel-browser';

const options: MixpanelPluginOptions = {
    token: YOUR_TOKEN,
    config: {...} // Mixpanel config

Vue.use(VueMixpanelBrowser, options);
```
