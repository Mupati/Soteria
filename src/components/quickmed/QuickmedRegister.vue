<template>
	<div id="register">
	<div class="container py-2" id="signup-container">
		<div class="row pb-3">
			<div class="col-sm-12 col-md-4 offset-md-4 text-center">
				<router-link  to="/quickmed"><img src="@/assets/logo2.png" class="img img-fluid"></router-link>
			</div>
			<div class="col-8 offset-2 col-sm-6 offset-sm-2 col-md-3 offset-md-4  text-center">
			<nav aria-label="breadcrumb">
			  	<ol class="breadcrumb float-sm-right">
			    	<li class="breadcrumb-item"><router-link to="/quickmed">Home</router-link></li>
			    	<li class="breadcrumb-item active" aria-current="page">Register</li>
			  	</ol>
			</nav>
			</div>
		</div>
		<div class="row py-5">
			<div class="col-12 col-md-8 col-lg-8 offset-md-2 offset-lg-2">
			<!-- 	<p  class="text-danger">{{errorMessage}}</p> -->
			<div v-if="error" class="alert alert-danger alert-dismissible fade show text-center" role="alert">
				  <strong>{{errorMessage}}</strong>.
				  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
				    <span aria-hidden="true">&times;</span>
				  </button>
			   </div>
				<form>
					<div class="form-row">
					    <div class="form-group col-md-6">
						    <label for="givenName">Given Name</label>
						    <input type="text" class="form-control" id="givenName" aria-describedby="givennameHelp" placeholder="Enter Given Name" v-model="details.givenName" required>
					 	</div>
					  	<div class="form-group col-md-6"> 
						    <label for="lastName">Last Name</label>
						    <input type="text" class="form-control" id="lastName" aria-describedby="lastnameHelp" placeholder="Enter Last Name" v-model="details.lastName" required>
						</div>
					</div>
					
					<div class="form-row">
					  <div class="form-group col-md-6">
					    <label for="username">Username</label>
					    <input type="text" class="form-control" id="username" aria-describedby="username" placeholder="Enter Username" v-model="details.userName" required>
					  </div>
					  <div class="form-group col-md-6">
					    <label for="userEmail">Email address</label>
					    <input type="email" class="form-control" id="userEmail" aria-describedby="emailHelp" placeholder="Enter Email" v-model="details.email" required>
					  </div>
					</div>
					<div class="form-row">
					   <div class="form-group col-md-6">
					    <label for="password">Password</label>
					    <input type="password" class="form-control" id="passwordOne" placeholder="Password" v-model="details.pwd1" required>
					   </div>
					   <div class="form-group col-md-6">
					    <label for="password">Confirm Password</label>
					    <input type="password" class="form-control" id="passwordTwo" placeholder="Retype Password"
					    v-model="details.pwd2" required>
					  </div>
					</div>
					  <div class="d-flex justify-content-center mt-3 py-2 px-5">
					  	<button type="submit" class="btn btn-success text-center" v-on:click.prevent="signup">Submit</button>
					  </div>
				</form>
				
			</div>
			
		</div>
	</div>
	<footer> 
		<div class="container my-3 pb-3">
		<div class="row">
		<div class="col-sm-12 col-md-8 offset-md-2 text-center">
			&copy;2018 Powered by Team QuickMed &reg;<br>
		    <div class="text-center">
		        <a href="#"><i class="fab fa-facebook"></i></a>
		        <a href="#"><i class="fab fa-twitter"></i></a>
		        <a href="#"><i class="fab fa-instagram"></i></a>
		    </div>
		    </div>
		</div>
		</div>
	</footer>
</div>
</template>


<script> 
	export default{
		name: 'QuickmedRegister', 
		data(){
			return{
				details: {},
				error: false,
				errorMessage:'',
			}
			
		},

		methods: {

			signup: function(){
				var that = this;
				if(that.details.pwd1 != that.details.pwd2)
					{
						that.error = true;
						that.errorMessage = 'Password Mismatch';
						return;
					}

				SDK.call('devless', 'signUp', 
					[
						that.details.email,
					 	that.details.pwd1, 
						that.details.userName, 
						'', 
						that.details.givenName, 
						that.details.lastName
					],
						function(resp){
							/*console.log(resp.payload.result);
							return;*/
							if(resp.payload.result[0] == false){
								that.error = true;
								that.errorMessage = 'No details found';
								return;
							}
							
							SDK.setToken(resp.payload.result.token);
							that.$router.push({ path: "/quickmed/dashboard"});
						});			
			}
		}
	}
</script>


<style scoped>
#register{
	background: linear-gradient(90deg, #ddc 40%, #d40);
}
a{
	text-decoration: none;
}
.breadcrumb{
	background: none;
}
.breadcrumb-item + .breadcrumb-item::before {
  content: ">";
}
.signup-container{
	box-sizing: border-box;
}
	
</style>