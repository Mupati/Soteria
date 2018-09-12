<template>
<div id="quickmedhome">	
<!-- <header class="d-flex-row"> -->
<header class="navbar navbar-expand-lg fixed-top justify-content-between" :class="{scrolled: scrollPosition > 50}" id="mainNav">
	<router-link to="/" class="navbar-brand">
	  	<img src="@/assets/soteria-text.png" class="d-inline">
	</router-link>
	<ul class="navbar-nav flex-row d-none d-md-flex pt-2">
		<li class="navbar-item active"><a class="nav-link" href="#serv" v-smooth-scroll="{ duration: 700, container: '#serv' }"><i class="fas fa-hospital"></i> Personnel</a></li>
		<li class="navbar-item px-md-5 mx-md-5"><router-link  class="nav-link" to="/quickmed/feedback"><i class="fas fa-comments"></i> Feedback</router-link></li>
		<li class="navbar-item"><router-link  class="nav-link" to="/quickmed/register"><i class="fas fa-user-plus"></i> Register</router-link></li>
	</ul>
	<span class="navbar-text flex-row d-none d-md-flex mr-3"><router-link  class="nav-link" to="/quickmed/login"><i class="fas fa-2x fa-user" data-toggle="tooltip" data-placement="left" title="Personnel Login"></i></router-link></span>
	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#topNav" aria-controls="topNav" aria-expanded="true" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"><i class="fas fa-2x fa-bars"></i></span>
  </button>
</header>
<div class="collapse navbar-collapse" id="topNav">
	<ul class="navbar-nav px-4 pt-4 mt-5 float-right">
		<li class="navbar-item active"><a class="nav-link" href="#serv" v-smooth-scroll="{ duration: 700, container: '#serv' }"><i class="fas fa-hospital"></i> Personnel</a></li>
		<li class="navbar-item px-md-5 mx-md-5"><router-link  class="nav-link" to="/quickmed/feedback"><i class="fas fa-comments"></i> Feedback</router-link></li>
		<li class="navbar-item"><router-link  class="nav-link" to="/quickmed/register"><i class="fas fa-user-plus"></i> Register</router-link></li>
		<li class="navbar-item"><router-link  class="nav-link" to="/quickmed/login"><i class="fas fa-user"></i> Log in</router-link></li>
	</ul>
	<div class="clearfix"></div>
	<!-- <form class="px-4 pb-3 pt-5 mt-5">
		<div class="form-group">
		<label for="exampleDropdownFormEmail1">Email address</label>
		<input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com">
		</div>
		<div class="form-group">
		<label for="exampleDropdownFormPassword1">Password</label>
		<input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password">
		</div>
		<button type="submit" class="btn btn-primary">Sign in</button>
	</form> -->
</div>
  <!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#topNav" aria-controls="topNav" aria-expanded="true" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button> -->


  <!-- <div class="collapse navbar-collapse d-sm-flex justify-content-end mr-sm-5" id="topNav"> -->
	  <!-- <div class="dropdown dropleft mr-5">
	  <button class="btn btn-secondary dropdown-toggle" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			 <i class="fas fa-user"></i>
		</button>
	  <div class="dropdown-menu dropdown-menu-left mr-5">
			<form class="px-4 py-3">
				<div class="form-group">
				<label for="exampleDropdownFormEmail1">Email address</label>
				<input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com">
				</div>
				<div class="form-group">
				<label for="exampleDropdownFormPassword1">Password</label>
				<input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password">
				</div>
				<button type="submit" class="btn btn-primary">Sign in</button>
			</form>
		</div>
	  </div> -->
    <!-- <form class="form-inline my-2 my-lg-0">
    	<div class="form-group">
			<input type="email" class="form-control" placeholder="Email Address"  v-model="credentials.email" required autofocus>
		</div>
		<div class="form-group mx-sm-2">
			<input type="password" class="form-control" placeholder="Password" v-model="credentials.pwd" required>
		</div>
		<div class="form-group">
      <input  type="submit" value="Log in" v-on:click.prevent="login" class="btn btn-outline-success">
  		</div>
    </form> -->
  <!-- </div> -->

		<!-- </div>
	</div>
</div> -->

<!-- <div class="container pt-3 mt-5" id="nav2">
	<div class="row bg-light justify-content-around border-bottom border-info rounded-bottom">
		<div class="col-12"> -->
<!-- <nav class="navbar bg-light border-bottom border-info rounded-bottom">
	<ul class="navbar-nav">
		<li class="navbar-item"><a href="#serv" v-smooth-scroll="{ duration: 700, container: '#serv' }">Personnel</a></li>
		<li class="navbar-item"><router-link to="/quickmed/feedback">Feedback</router-link></li>
		<li class="navbar-item"><router-link to="/quickmed/register">Register</router-link></li>
	</ul>
</nav> -->
<!-- </header> -->
		<!-- </div>
	</div>
</div> -->

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
						<input type="text" name="location" class="form-control" v-model="searchlocation" placeholder="Enter Your Location">
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
<div class="container py-5">			
	<h3 class="text-center mb-5"> PERSONNEL AVAILABLE</h3>		
	<div class="row">
			<div class="col-sm">
				<div class="card border-0 text-center">
				  <div class="card-body">
				  	<img class="card-img-top thumbnail" src="@/assets/midwife.jpg" alt="Card image cap">
				  	<h4 class="card-title text-center my-3">Midwife</h4>
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
				  	<img class="card-img-top" src="@/assets/doctor.jpg" alt="Card image cap">
				  	<h4 class="card-title text-center my-3">Medical Doctor</h4>
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
				  	<img class="card-img-top text-center" src="@/assets/nurse.jpg" alt="Card image cap">
				  	<h4 class="card-title text-center my-3">Nurse</h4>
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
				  	 <img class="card-img-top" src="@/assets/physician.jpg" alt="Card image cap">
				  	<h4 class="card-title text-center my-3">Physician Assistant</h4>
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
		name: 'QuickMed',
		data(){
			return{
				credentials:{},
				error: false,
				searchResults:{},
				noKeyword: false,
				searchlocation: '',
				scrollPosition: null,

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
					where: ["location,"+this.searchlocation],
					related: "*"
				};
				SDK.queryData("Ninja","details", params, function(res){
					that.searchResults = res.payload.results;
				/*	console.log(that.searchResults);*/
					if(that.searchResults.length != 0){
				/*	that.$nextTick(function(){*/
					that.$router.push({
						path:'/quickmed/personnel/',
						name: "QuickmedSearchResults",
						/*query:{location: that.searchlocation},*/
						params: {searchResults: that.searchResults}
						});
			/*		})*/
					}
					else{
						that.noKeyword = true;
						/*that.$router.go({
						    path: that.$router.path,
						    query: {
						        t: + new Date()
						    }
						})*/
						/*that.$forceUpdate();*/
					/*	setTimeout(location.reload.bind(location), 5000);*/
						/*location.reload();*/
					/*	return;*/

					}
					})

			},

			updateScroll() {
      			this.scrollPosition = window.scrollY
    		}

			
			},

			 mounted() {
    			window.addEventListener('scroll', this.updateScroll);
  			}
		
	}
</script>

<style scoped>
	#quickmedhome, header{
		background: linear-gradient(90deg, #ddc 40%, #d40) !important;
	}
	.fixed-top{
		 transition:500ms ease;
	}
	.scrolled{
  		background:#08090a80 !important;		
	}
	
	/* .hvr-underline-from-left {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px transparent;
    position: relative;
    overflow: hidden;
} */
	.navbar-brand img{
		height: 2.0em; 
		width: 4.0em;
		margin: 0;
		padding: 0;	 
	}
	.card img{
		width: 12em;
		height: 12em;
	}

	.navbar li, #topNav li{
		font-size: 1.5em;
	}

/* #nav2{
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	z-index: 1029;
	background-image: linear-gradient(90deg, #afc  40%, #81cfd8) !important;
} */

	#serv{
		background: #f6f8f9;
	}
</style>