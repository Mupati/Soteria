<template>
	<div>	
<!--Navigation-->
<div class="container">
<nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light py-3">
	  <router-link to="/" class="navbar-brand ml-5"><img src="@/assets/soteria-text.png"></router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#topNav" aria-controls="topNav" aria-expanded="true" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>


  <div class="collapse navbar-collapse d-sm-flex justify-content-end" id="topNav">
    <form class="form-inline my-2 my-lg-0">
    	<div class="form-group">
			<input type="email" class="form-control" placeholder="Email Address"  v-model="credentials.email" required autofocus>
		</div>
		<div class="form-group mx-sm-2">
			<input type="password" class="form-control" placeholder="Password" v-model="credentials.pwd" required>
		</div>
		<div class="form-group">
      <input  type="submit" value="Login" v-on:click.prevent="login" class="btn btn-outline-success my-2 my-sm-0 d-sm-block">
  		</div>
    </form>
  </div>
</nav>
</div>

<div class="container mt-4 pt-5" id="nav2">
	<div class="row bg-light d-flex justify-content-around border-bottom border-info rounded-bottom">
		<ul class="list-inline">
		  <li class="list-inline-item mr-md-5"><a href="#serv" v-smooth-scroll="{ duration: 700, container: '#serv' }">Services</a></li>
		  <li class="list-inline-item mx-md-5 px-md-5"><router-link to="/quickmed/feedback">Feedback</router-link></li>
		  <li class="list-inline-item ml-md-5"><router-link to="/quickmed/register">Register</router-link></li>
		</ul>
	</div>
</div>

<!--Contents-->
<div class="container my-5 pt-5 pb-4">
	<div class="row my-5 py-5">
		<div class="col-sm-12 col-md-8 offset-md-2 text-center">
			  <!-- alert box for search box -->
			  <div v-if="noKeyword" class="alert alert-danger alert-dismissible fade show" role="alert">
				  <strong>There is no Personnel avaible in Location Entered - <em>{{searchlocation}}</em></strong>.
				  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
				    <span aria-hidden="true">&times;</span>
				  </button>
			   </div>

			<img src="@/assets/logo2.png" class="img img-fluid">		
			<form role="form" class="mt-4">
			        <div class="form-group">
						<input type="text" name="location" class="form-control" v-model="searchlocation" ref="search" placeholder="Enter Your Location">
					</div>
				<button type="submit" class="btn btn-lg btn-success" @click.prevent="searchPersonnel">Reach Health Officer <i class="fa fa-search fa-lg"></i></button>
			</form>
		<!--	<form role="form">
		 	<div class="form-group">
				<label for="image">Profile Picture</label>
				<input type="file" class="form-control-file" accept="image/*">
			</div>
			<input type="submit" class="btn btn-primary" v-on:click="upload">
			</form> -->
		</div>
	</div>
</div>

<section id="serv">
<div class="container pt-3">			
	<h3 class="text-center mb-2"> PERSONNEL AVAILABLE</h3>		
	<div class="row">

			<div class="col-sm">
				<div class="card border-0 text-center">
				  <div class="card-body">
				  	<img class="card-img-top thumbnail" src="@/assets/logo.png" alt="Card image cap">
				  	<h4 class="card-title text-center">Midwife</h4>
				    <p class="card-text text-justify">
				    	Midwives deliver babies and provide antenatal and postnatal advice, care and 
						support to women, their babies, their partners and families. Midwives need the 
						ability to deal with emotionally charged situations as part of their everyday work.
					</p>
				  </div>
				</div>
			</div>

		<div class="col-sm">
			<div class="card border-0 text-center">
				  <div class="card-body">
				  	<img class="card-img-top" src="@/assets/logo.png" alt="Card image cap">
				  	<h4 class="card-title text-center">Medical Doctor</h4>
				    <p class="card-text text-justify">
				    	Medical Doctors diagnose and treat medical conditions, disorders, and diseases 
						through the application of specialist medical skills and knowledge.
					</p>
				  </div>
			</div>
		</div>

		<div class="col-sm">
			<div class="card border-0 text-center">
				  <div class="card-body">
				  	<img class="card-img-top text-center" src="@/assets/logo.png" alt="Card image cap">
				  	<h4 class="card-title text-center">Nurse</h4>
				    <p class="card-text text-justify">
				    	Nurses provide and coordinate patient care, educate patients and the public about 
			   various health conditions, and provide advice and emotional support to patients and their family members.
					</p>
				  </div>
			</div>
		</div>

		<div class="col-sm">
			<div class="card border-0 text-center">
				  <div class="card-body">
				  	 <img class="card-img-top" src="@/assets/logo.png" alt="Card image cap">
				  	<h4 class="card-title text-center">Physician Assistant</h4>
				    <p class="card-text text-justify">
				    	They are formally trained to examine patients, diagnose injuries and illnesses, and provide treatment. Working as members of the health care team, PAs take medical histories, examine and treat patients, order and interpret laboratory tests and X-rays, make diagnoses, and prescribe medications
				    </p>
				  </div>
			</div>
		</div>

	</div>
</div>
</section>

<!--Footer-->

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
		data(){
			return{
				credentials:{},
				error: false,
				searchResults:{},
				noKeyword: false,
				searchlocation: ''

			}
		},

		methods:{
			login: function() {	
				
				var that = this;
				SDK.call('devless','login',["",that.credentials.email,"",that.credentials.pwd], 
					function(res){
						console.log(res);
						if(res.payload.result == false){
							that.$swal('Login Failed',"Email and Password do not match",'warning');
							return;
							/*that.error = true;
							return;*/
						}
					/*	else if(res.payload.error.code == 643){
							that.$swal('Pending Activation',res.payload.error.message,'info');
							that.$router.push({ path: "/"});
						}*/
						else {
						SDK.setToken(res.payload.result.token);
						that.$router.push({ path: "/quickmed/dashboard"});
						}
					});
				
			},

			searchPersonnel: function(){
				var that = this
				var params = {
					where: ["location,"+this.$refs.search.value],
					related: "*"
				};
				SDK.queryData("Ninja","details", params, function(res){
					that.searchResults = res.payload.results;
					console.log(that.searchResults);
					if(that.searchResults.length != 0){
					that.$router.push({
						name: "QuickmedSearchResults",
						params: {searchResults: that.searchResults}
						});
					}
					else{
						that.noKeyword = true;
						setTimeout(location.reload.bind(location), 5000);
						/*location.reload();*/
					/*	return;*/

					}
					})

			}

			
			}
		
	}
</script>

<style scoped>
	.navbar-brand img{
		height: 1.4em; 
		width: 3.5em;
		margin: 0;
		padding: 0;	 
	}
	.card img{
		width: 10em;
		height: 10em;
	}

	li > a{
		text-decoration: none;
	}

	#nav2{
		 position: fixed;
		  top: 0;
		  right: 0;
		  left: 0;
		  z-index: 1029;
	}

	#serv{
		background: #f6f8f9;
	}
</style>