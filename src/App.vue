<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

var devless = require('@/assets/js/dv_sdk.min.js');
var constants = {
        "token": "00c41647176ef85da6f9d75d88a6f343",
        "domain": "http://localhost:4545"
    };

window.SDK = new Devless(constants);

export default {
  name: 'App'
}
</script>

<style>

</style>
