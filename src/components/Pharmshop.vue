<!-- eslint-disable --> 
<template>
<div id="pharmacyHome">

<!-- fixed header for all views -->
<header class="navbar navbar-expand-lg navbar-light bg-light py-3">
	<router-link to="/" class="navbar-brand hvr-underline-from-left">
			<img src="" class="d-inline" alt="logo">
	</router-link>
	<button class="navbar-toggler" type="button"  data-toggle="collapse" data-target="#topNav" aria-controls="topNav" aria-expanded="true" aria-label="Toggle navigation">
		<span><i class="fas fa-2x fa-bars"></i></span>
	</button>
	<div class="collapse navbar-collapse justify-content-around" id="topNav">
		<ul class="navbar-nav justify-content-between">	
			<li class="navbar-item active"><router-link to="/pharmshop/home"><i class="fas fa-home"></i> Home</router-link></li>
			<li class="navbar-item"><router-link   to="/pharmshop/locate"><i class="fas fa-comments"></i> Locate Store</router-link></li>
			<li class="navbar-item"><router-link   to="/pharmshop/lifestyle"><i class="fas fa-comments"></i> Lifestyle</router-link></li>
			<li class="navbar-item"><router-link   to="/pharmshop/account"><i class="fas fa-user"></i>Account</router-link></li>
			<li class="navbar-item"><router-link to="/pharmshop/cart">Cart<i class="fas fa-shopping-cart"></i></router-link></li>
		</ul>
	</div>
</header>

<!-- render all the views over here -->
<div id="contents" class="my-5 py-5">
	<router-view></router-view>
</div>

<!-- fixed footer for all views -->
<footer>
	<div class="container">
		<div class="row">
			<div class="col-md-6 offset-md-3 text-center">
				&copy; Soteria - Pharmshop
			</div>
		</div>
	</div>
</footer>

</div>
	
</template>



<script>
	export default{

		data(){
			return{
				
			}
		},

		methods:{

		},

		computed:{

			cart:function(){
				return 3;
			}
		}
	}

</script>

<style scoped>
	

</style>