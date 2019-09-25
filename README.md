# Vue Errors

Use Laravel validation error messages in Vue.

## Usage

Install the package using yarn or npm.

```sh
yarn add @iamproperty/vue-errors
``` 

When setting up your Vuex store add the module as a top level module 

```js
import Vuex from 'vuex';
import { errors } from '@iamproperty/vue-errors';

export default new Vuex.Store({
  modules: {
    errors,
  }
})
```

and register the plugin.

```js
import Vue from 'vue';
import Errors from '@iamproperty/vue-errors';

Vue.use(Errors);
```

If you register the store module to a different name you can use the `installer` 
function to register the plugin to the custom location.

```js

import Vue from 'vue';
import { installer } from '@iamproperty/vue-errors';

Vue.use(installer('custom/namespace'));
```
