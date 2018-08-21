<template>
<div>
<!--Contents-->
<div class="container py-2">

	<div class="row pb-3">
			<div class="col-sm-12 col-md-4 offset-md-4 text-center">
				<router-link  to="/quickmed"><img src="@/assets/logo2.png" class="img img-fluid"></router-link>
			</div>
			<div class="col-sm-12 col-md-4 offset-md-4">
			<nav aria-label="breadcrumb" class="text-center">
			  	<ol class="breadcrumb">
			    	<li class="breadcrumb-item"><router-link to="/quickmed">Home</router-link></li>
			    	<li class="breadcrumb-item active" aria-current="page">Feedback</li>
			  	</ol>
			</nav>
			</div>
	</div>

    <div class="row">
        <div class="col-12 col-md-8 col-lg-8 offset-md-2 offset-lg-2">
    <fieldset>
    <legend class="text-center">User Feedback Form</legend>
        <form role="form">
        	<div class="form-row">
	            <div class="form-group col-md-6">
	                <label role="name" class="control-label">Name</label>
	                <input type="text" name="name" class="form-control" required> 
	            </div>
	            <div class="form-group col-md-6">
	                <label role="email" class="control-label">Email</label>
	                <input type="email" name="email" class="form-control" required>
	            </div>
        	</div>
            <div class="form-group">
                <label role="phone_number" class="control-label">Phone Number</label>
                <input type="text" name="phone" class="form-control" required>
            </div>
            <div class="form-group">
                <label role="message" class="control-label">Your Comments</label>
                <textarea name="message" class="form-control"></textarea> 
            </div>
                <button type="submit" class="btn btn-block btn-success">Submit</button>
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

			}
		}
	}
</script>


<style scoped>
	
	
</style>