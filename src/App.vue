<template>
  <div id="app">
	  <transition>
	  	<keep-alive include="QuickmedSearchResults">
	    	<router-view></router-view>
	  	</keep-alive>
	  </transition>
  </div>
</template>

<script>

var devless = require('@/assets/js/dv_sdk.min.js');
var constants = {
        "token": "77c8a39846f93b49501bbcc05dff33af", // 00c41647176ef85da6f9d75d88a6f343
        "domain": "https://apoga-ent.herokuapp.com/" //http://localhost:4545
    };

window.SDK = new Devless(constants);

export default {
  name: 'App'
}
</script>

<style>

</style>