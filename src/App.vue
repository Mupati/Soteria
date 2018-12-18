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

let devless = require('@/assets/js/dv_sdk.min.js');
//production backend
// let constants = {
//         "token": "77c8a39846f93b49501bbcc05dff33af",
//         "domain": "https://apoga-ent.herokuapp.com/"
//     };
  
//development backend
let constants = {
  "token":"00c41647176ef85da6f9d75d88a6f343",
  "domain": "http://localhost:4545"
}

window.SDK = new Devless(constants);

export default {
  name: 'App'
}
</script>

<style>

</style>