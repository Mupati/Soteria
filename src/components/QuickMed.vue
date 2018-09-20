<template>
<div id="quickmedhome">	
<header class="navbar navbar-expand-md  fixed-top mr-md-0 py-md-3" :class="{scrolled: scrollPosition > 30, nextScrolled: scrollPosition > 550}" id="mainNav">
	<router-link to="/" class="navbar-brand">
			<img src="@/assets/soteria-text.png" class="d-inline">
	</router-link>
	<button class="navbar-toggler" type="button" @click="burgerChange" data-toggle="collapse" data-target="#topNav" aria-controls="topNav" aria-expanded="true" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"><i class="fas fa-2x fa-bars" :class="{'fas fa-times': newBurger}" ></i></span>
	</button>
<div class="collapse navbar-collapse justify-content-around" id="topNav">
	<ul class="navbar-nav float-right">	
		<li class="navbar-item active ml-md-5 pl-md-5"><a class="nav-link" href="#serv" v-smooth-scroll="{ duration: 700, container: '#serv' }"><i class="fas fa-hospital"></i> Personnel</a></li>
		<li class="navbar-item px-md-5 mx-md-5"><router-link  class="nav-link" to="/quickmed/feedback"><i class="fas fa-comments"></i> Feedback</router-link></li>
		<li class="navbar-item mr-md-5 pr-md-5"><router-link  class="nav-link" to="/quickmed/register"><i class="fas fa-user-plus"></i> Register</router-link></li>
		<li class="navbar-item pl-md-5 ml-md-5"><router-link  class="nav-link" to="/quickmed/login"><i class="fas fa-user"></i> Log in</router-link></li>
	</ul>
</div>
</header>

<!--Contents-->
<div class="container my-5 pt-5 pb-4">
	<div class="row my-5 py-5">
		<div class="col-sm-12 col-md-8 offset-md-2 text-center">
			  <!-- alert box for search box -->
			  <div v-if="noKeyword" class="alert alert-danger alert-dismissible fade show" role="alert">
				  <strong>Enter location name to search</strong>
				  <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="noKeyword = !noKeyword, searching = false, error = false">
				    <span aria-hidden="true">&times;</span>
				  </button>
			   </div>
			  <div v-if="error" class="alert alert-danger alert-dismissible fade show" role="alert">
				  <strong>There is no Personnel avaible in Location Entered - <em>{{searchlocation}}</em></strong>.
				  <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="error = !error, searching = false, noKeyword = false">
				    <span aria-hidden="true">&times;</span>
				  </button>
			   </div>

			<img src="@/assets/logo2.png" class="img img-fluid">		
			<form role="form" class="mt-4">
				<div class="form-group">
					<input type="text" name="location" class="form-control" v-model="searchlocation" placeholder="Enter Your Location">
				</div>
				<button type="submit" class="btn btn-lg btn-outline-primary" @click.prevent="searchPersonnel" :disabled="searching">Reach Health Officer <i class="fa fa-search fa-lg" :class="{'fas fa-spinner fa-pulse' : searching}"></i></button>
			</form>
		</div>
	</div>
</div>

<section id="serv">
<div class="container py-5">
	<h3 class="text-center mb-5"><i class="fas fa-2x fa-hospital"></i><br><br>PERSONNEL AVAILABLE</h3>		
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
				scrollPosition: 0,
				newBurger: false,
				searching: false,

			}
		},


		methods:{
			burgerChange: function(){
				this.newBurger = !this.newBurger
			},

			login: function() {	
				
				var that = this;
				SDK.call('devless','login',["",that.credentials.email,"",that.credentials.pwd], 
					function(res){
						console.log(res);
						if(res.payload.result == false){
							that.$swal('Login Failed',"Check Email and Password",'warning');
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
				that.searching = !that.searching
				if(this.searchlocation == ''){
					that.noKeyword = true
					that.searching = false
					return;
				}
				var params = {
					where: ["location,"+this.searchlocation],
					related: "*"
				};
				SDK.queryData("Quickmed","details", params, function(res){
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
						that.error = true;
						that.searching = false;
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

	.scrolled{
		background:#08090a80 !important;		
	}
	.nextScrolled{
		background: #f6f8f9 !important;
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
		font-size: 1.4em;
	}

	#serv{
		background: #f6f8f9;
	}
</style>