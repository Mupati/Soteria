<template>
	<div class="container">
		<div class="row pb-3">
			<div class="col-sm-12 float-left">
				<router-link  to="/quickmed"><img src="@/assets/logo2.png" class="img img-fluid" id="logo"></router-link>
			</div>
		<!-- col-md-4 offset-md-4 text-center
		<div class="col-sm-12 col-md-4 offset-md-4">
			<nav aria-label="breadcrumb" class="text-center">
			  	<ol class="breadcrumb">
			    	<li class="breadcrumb-item"><router-link to="/quickmed">Home</router-link></li>
			    	<li class="breadcrumb-item active" aria-current="page">Register</li>
			  	</ol>
			</nav>
			</div> -->
		</div>

		<div class="row">
			<div class="col-sm-12 col-md-6 offset-md-3" v-for="result in results">
				<div class="card py-3">
				  <img class="card-img-top mx-auto my-3 img img-fluid" :src="result.image" alt="Card image" id="profilePic">
				<!--   <div class="card-body "> -->
				  <ul class="list-group list-group-flush text-center">
				    <li class="list-group-item"><i class="fas fa-user-md fa-2x"></i>{{result.related._devless_users[0].first_name}} {{result.related._devless_users[0].last_name}}</li>
				    <li class="list-group-item"><i class="fa fa-phone-square fa-2x"></i>{{result.profession}}</li>
				    <li class="list-group-item"><i class="fa fa-map-marker fa-2x"></i>{{result.location}}</li>
				  </ul>
				<!--   </div> -->
				 <!--  <div class="card-body text-center">
				    <h4 class="card-title">Name: </h4>
				    <p class="card-text"></p>
				    <a href="#" class="btn btn-primary">See Profile</a>
				  </div> -->
				</div>
				<br>
			</div>	
		</div>
	</div>
</template>


<script>

	export default{
	/*	name: 'QuickmedSearchResults',*/
		props:['searchResults'],

		data(){
			return{
			results: this.searchResults
				
			}
		},

		mounted(){

		}

	}
</script>

<style scoped>
#logo{
	height: 5em;
	width: 5em;
}
#profilePic{
	height: 10em;
	width: 10em;   
}
</style>