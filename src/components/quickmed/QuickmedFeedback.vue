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
        	 <div v-if="userAlert.error" class="alert alert-danger alert-dismissible fade show text-center" role="alert">
				  <strong>{{userAlert.errorMsg}}</strong>.
				  <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="userAlert.error = !userAlert.error, sending=false">
				    <span aria-hidden="true">&times;</span>
				  </button>
			   </div>
			   <div v-if="userAlert.success" class="alert alert-success alert-dismissible fade show text-center" role="alert">
				  <strong>Thank You! <em>{{feedback.name}}</em>. Your feedback has been received.</strong>.
				  <button type="button" class="close" data-dismiss="alert" aria-label="Close" @click="userAlert.success = !userAlert.success, feedback={}, sending=false">
				    <span aria-hidden="true">&times;</span>
				  </button>
			   </div>
	<div class="card">
	<div class="card-body py-5">
    <fieldset>
    <legend class="text-center">User Feedback Form</legend>
        <form role="form">
        	<div class="form-row">
	            <div class="form-group col-md-6">
	                <label role="name" class="control-label">Name</label>
	                <input type="text" v-model="feedback.name" class="form-control" required="true"> 
	            </div>
	            <div class="form-group col-md-6">
	                <label role="email" class="control-label">Email</label>
	                <input type="email" v-model="feedback.email" class="form-control" required="true">
	            </div>
        	</div>
            <div class="form-group">
                <label role="phone_number" class="control-label">Phone Number</label>
                <input type="text" v-model="feedback.phone" class="form-control" required="true">
            </div>
            <div class="form-group">
                <label role="comment" class="control-label">Your Comments</label>
                <textarea v-model="feedback.comment" class="form-control" required="true"></textarea> 
            </div>
			<div class="d-flex justify-content-center mt-3 py-2 px-5">
            	<button type="submit" @click.prevent="sendFeedback" class="btn btn-outline-success" :disabled="sending">Send Feedback <i class="fas fa-comment" :class="{'fas fa-spinner fa-pulse' : sending}"></i></button>
			</div>
	    </form>
    </fieldset>
	</div>
	</div>
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
		name: 'QuickmedFeedback', 
		data(){
			return{
			 feedback:{},
			 userAlert:{
			 	error:false,
			 	errorMsg: "Error!. Feedback Submission Unsuccessful. Check Your Form",
			 	success:false,
			 },
			 sending: false,

			}
		},

		methods:{
			isEmpty: function(obj){
              	return jQuery.isEmptyObject(obj);
           		},

           	objSize: function(obj){
           		return Object.keys(obj).length
           	},

			sendFeedback: function(){
			var that = this;
			this.sending = !this.sending;
			console.log(this.sending)
			/*var sent_feedback = {
				"name": that.feedback.name,
				"email": that.feedback.email,
				"phone": that.feedback.phone,
				"comment": that.feedback.comment
			}*/
			console.log(that.feedback);
			/*alert(that.objSize(that.feedback));
			alert(that.isEmpty(that.feedback));*/
			if(that.isEmpty(that.feedback) || that.objSize(that.feedback)<3){
					that.userAlert.errorMsg = "Please Complete the form"
					that.userAlert.error = true;
					this.sending = !this.sending
					// console.log("Escaped this if");
				}
				else{
			SDK.addData("Quickmed", "feedback", that.feedback,
				function(res){
					console.log(res);
					if(res.payload.length != 0 && res.payload.entry_id > 0){
						that.userAlert.success = true;
						that.sending = false
					}
					else{
						that.userAlert.error = true;
						that.userAlert.errorMsg = "Something went wrong. Kindly resend Feedback, Thank you!"
						that.sending = false
					}
					/*setTimeout(location.reload.bind(location), 5000);*/
				});
				}

			// that.sending = !that.sending
			console.log(that.sending)



			/*	else{
					that.userAlert.errorMsg = "Please fill the form before you Submit"
					that.userAlert.error = true;
				}*/
		/*	that.$router.push({path:"/quickmed"});*/
			/*setTimeout(location.reload.bind(location), 5000);*/
			// setTimeout(that.$router.push({path:"/quickmed/feedback"}), 5000);
		}
	},

	computed:{
          
	}

	}
</script>


<style scoped>
/* a:hover{
		color: #0056b3;
	} */
a{
color: #52b289;
} 

#feedback{
	background: linear-gradient(90deg, #ddc 40%, #d40);
}
	a{
	text-decoration: none;
}
.breadcrumb{
	padding: 0.2em 1em;
	background: #fff;
}
.breadcrumb-item + .breadcrumb-item::before {
  content: ">";
}
.card{
	background-color: none;
}	
</style>