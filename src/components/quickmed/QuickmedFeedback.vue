<template>
<div id="feedback">
<!--Contents-->
<div class="container py-2">

	<div class="row pb-3">
			<div class="col-sm-12 col-md-4 offset-md-4 text-center">
				<router-link  to="/quickmed"><img src="@/assets/logo2.png" class="img img-fluid"></router-link>
			</div>
			<div class="col-8 offset-2 col-sm-6 offset-sm-2 col-md-3 offset-md-4  text-center">
			<nav aria-label="breadcrumb">
			  	<ol class="breadcrumb float-sm-right">
			    	<li class="breadcrumb-item"><router-link to="/quickmed">Home</router-link></li>
			    	<li class="breadcrumb-item active" aria-current="page">Feedback</li>
			  	</ol>
			</nav>
			</div>
	</div>

    <div class="row">
        <div class="col-12 col-md-8 col-lg-8 offset-md-2 offset-lg-2">
        	 <!-- <div v-if="userAlert.state" class="alert alert-danger alert-dismissible fade show" role="alert">
				  <strong>There is no Personnel avaible in Location Entered - <em>{{searchlocation}}</em></strong>.
				  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
				    <span aria-hidden="true">&times;</span>
				  </button>
			   </div> -->
    <fieldset>
    <legend class="text-center">User Feedback Form</legend>
        <form role="form">
        	<div class="form-row">
	            <div class="form-group col-md-6">
	                <label role="name" class="control-label">Name</label>
	                <input type="text" v-model="feedback.name" class="form-control" required> 
	            </div>
	            <div class="form-group col-md-6">
	                <label role="email" class="control-label">Email</label>
	                <input type="email" v-model="feedback.email" class="form-control" required>
	            </div>
        	</div>
            <div class="form-group">
                <label role="phone_number" class="control-label">Phone Number</label>
                <input type="text" v-model="feedback.phone" class="form-control" required>
            </div>
            <div class="form-group">
                <label role="comment" class="control-label">Your Comments</label>
                <textarea v-model="feedback.comment" class="form-control"></textarea> 
            </div>
                <button type="submit" @click.prevent="sendFeedback" class="btn btn-block btn-success">Submit</button>
        </form>
    </fieldset>
        </div>
    </div>
</div>

<!--Footer-->
<footer> 
	<div class="container py-5">
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
			 feedback:{},
			 userAlert:{
			 	state:false,
			 	error:'',
			 	success:''
			 }
			}
		},

		methods:{
			sendFeedback: function(){
			var that = this;
			/*var feedback = {
				"name": that.userFeedback.fullName,
				"email": that.userFeedback.email,
				"phone": that.userFeedback.phoneNumber,
				"comment": that.userFeedback.comment
			}*/
			console.log(that.feedback);
			SDK.addData("Ninja", "feedback", that.feedback,
				function(res){
					console.log(res);
				});
		/*	that.$router.push({path:"/quickmed/feedback"});*/
		/*	setTimeout(location.reload.bind(location), 5000);*/
		}
	}

	}
</script>


<style scoped>
#feedback{
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
	
</style>