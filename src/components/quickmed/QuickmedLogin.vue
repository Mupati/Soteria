<template>
    <div id="login">
    <div class="container pt-5 pb-4">
	<div class="row py-5">
		<div class="col-sm-12 col-md-10 offset-md-1">
            <!-- <div class="col-sm-12 col-md-4 offset-md-4">
				<router-link  to="/quickmed"><img src="@/assets/logo2.png" class="img img-fluid"></router-link>
			</div> -->
            <div class="col-sm-12 col-md-6 offset-md-3">
            <div class="card my-3">
                <div class="col-sm-12 col-md-4 offset-md-4 text-center">
				    <router-link  to="/quickmed"><img src="@/assets/logo2.png" class="img img-fluid"></router-link>
			    </div> 
                <!-- <img class="card-img-top" src="@/assets/logo2.png" alt="Card image cap"> -->
                <div class="card-body">
                    <h3 class="card-title text-center">Personnel Login</h3>
                    <form class="px-sm-0 px-md-4 py-3">
                        <!-- <div class="form-group">
                        <label for="email">Email Address</label>
                        
                        <input type="email" class="form-control" id="email"  required>
                        </div> -->
                        <div class="form-group">
                            <label for="email">Email Address</label>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                <span class="input-group-text" id="emailPrepend"><i class="fas fa-envelope"></i></span>
                                </div>
                                <input type="email" class="form-control" id="email" placeholder="example@gmail.com" aria-describedby="emailPrepend" v-model="credentials.email" required>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                <span class="input-group-text" id="passwordPrepend"><i class="fas fa-unlock-alt"></i></span>
                                </div>
                                <input type="password" class="form-control" id="password" aria-describedby="passwordPrepend" v-model="credentials.pwd" required>
                            </div>
                        </div>
                        <!-- <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" id="password"  required>
                        </div>
                         -->

                        <button type="submit" v-on:click.prevent="login" class="btn btn-outline-primary float-right">Log in <i class="fas fa-user"></i></button>
			        </form>
                </div>
                </div>
            </div>
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
		name: 'QuickmedLogin',
		data(){
			return{
				credentials:{},
				error: false,

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
		
    }
}
</script>


<style scoped>
#login{
    background: linear-gradient(90deg, #ddc 40%, #d40);
}

.card img{
    height: 7em;
    width: 8em;
}
</style>
