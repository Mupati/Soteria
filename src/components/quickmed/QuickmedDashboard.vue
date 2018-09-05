<template>
	<div class="container">
		<div class="row">	
			<div class="col-6">
				<h2>Dashboard</h2>
				<div class="profile">
					<div class="text-center">
					<img :src="details.image">
					</div>
				</div>
				<hr>
				<form enctype="multipart/form-data" v-if="addedprofileAlready" >	
				    <div class="form-group">
					    <label for="profession">Profession</label>
					     <select v-model="details.profession" class="form-control" required>
		                    <option disabled selected>Select Profession</option>
		                    <option>Medical Doctor</option>
		                    <option>Nurse</option>
		                    <option>Midwife</option>
		                    <option>Physician Assistant</option>
            			</select>
				 	</div>
				  	<div class="form-group"> 
					    <label for="license">License</label>
					    <input type="text" class="form-control" id="license" aria-describedby="licenseHelp" placeholder="Enter License Number" v-model="details.license" required="true">
					</div>

				  <div class="form-group">
				    <label for="work_id">Work ID</label>
				    <input type="number" class="form-control" id="work_id" aria-describedby="id_numHelp" placeholder="Enter Work ID Number" v-model="details.work_id" required="true">
				  </div>

				  <div class="form-group">
				    <label for="location">Location</label>
				    <input type="text" class="form-control" id="location" aria-describedby="locationHelp" placeholder="Enter Your Residential Location" v-model="details.location" required="true">
				  </div>
			
				   <div class="form-group">
				    <label for="hospital">Hospital</label>
				    <input type="text" class="form-control" id="hospital" placeholder="Stationed Hospital" v-model="details.hospital" required="true">
				   </div>

				   	<div class="form-group">
					    <label for="image">Profile Picture</label>
    					<input type="file" class="form-control-file" v-on:change="uploadPic" accept="image/*" id="pic" name="image">
  					</div>

				   <div class="form-group">
					<button type="submit" class="btn btn-success text-center" v-on:click.prevent="updateDetails">Add</button>
					</div>
				</form>	
			</div>

			<div class="col-6">
				<h3 class="text-center">Updating Your Profile</h3>
		<button type="button" class="btn btn-md btn-info" data-toggle="modal" data-target="#userInfo">User Info</button>
		<button type="button" class="btn btn-md btn-info" data-toggle="modal" data-target="#profileInfo">Profile Info</button>
				<hr>

				<!-- Modal for  User Info-->
				<div class="modal fade" id="userInfo" tabindex="-1" role="dialog" aria-labelledby="userInfolabel" aria-hidden="true">
				  <div class="modal-dialog" role="document">
				    <div class="modal-content">
				      <div class="modal-header">
				        <h5 class="modal-title" id="userInfolabel">Edit Your User Details</h5>
				        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
				          <span aria-hidden="true">&times;</span>
				        </button>
				      </div>
				      <div class="modal-body">
				      
				      	<p v-if="successUpdate" class="text-success">Updated!!</p>
						<form>
					    <div class="form-group">
						    <label for="givenName">Given Name</label>
						    <input type="text" class="form-control" id="givenName" aria-describedby="givennameHelp" v-model="userInfo.first_name" required="true">
					 	</div>
					  	<div class="form-group"> 
						    <label for="lastName">Last Name</label>
						    <input type="text" class="form-control" id="lastName" aria-describedby="lastnameHelp" v-model="userInfo.last_name" required="true">
						</div>

					  <div class="form-group">
					    <label for="username">Username</label>
					    <input type="text" class="form-control" id="username" aria-describedby="username" v-model="userInfo.username" required="true">
					  </div>
					  <div class="form-group">
					    <label for="userEmail">Email address</label>
					    <input type="email" class="form-control" id="userEmail" aria-describedby="emailHelp" v-model="userInfo.email" required="true">
					  </div>
					  <div class="form-group">
					    <label for="image">Profile Picture</label>
    				<input type="file" class="form-control-file" v-on:change="updatePic" accept="image/*" id="pic" name="image">
  						</div>
				  <button type="submit" class="btn btn-success text-center" v-on:click.prevent="updateuserInfo">Update</button>
				</form>
				      </div>
				      <div class="modal-footer">
				        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
				      </div>
				    </div>
				  </div>
				</div>

<!-- Modal for the Profile of the User -->

		<div class="modal fade col-12" id="profileInfo" tabindex="-1" role="dialog" aria-labelledby="profileInfolabel" aria-hidden="true">
	  <div class="modal-dialog" role="document">
	    <div class="modal-content">
	      <div class="modal-header">
	        <h5 class="modal-title" id="userInfolabel">Update Your Profile Details</h5>
	        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
	          <span aria-hidden="true">&times;</span>
	        </button>
	      </div>
	      <div class="modal-body">
	      	<!-- {{profileInfo}} -->
		<form>
		<div class="form-group">
		    <label for="profession">Profession</label>
		     <select v-model="profileInfo.profession" class="form-control" required>
                <option>Medical Doctor</option>
                <option>Nurse</option>
                <option>Midwife</option>
                <option>Physician Assistant</option>
			</select>
	 	</div>
	  	<div class="form-group"> 
		    <label for="license">License</label>
		    <input type="text" class="form-control" id="license" aria-describedby="licenseHelp" placeholder="Enter License Number" v-model="profileInfo.license" required="true">
		</div>

	  <div class="form-group">
	    <label for="work_id">Work ID</label>
	    <input type="number" class="form-control" id="work_id" aria-describedby="id_numHelp" placeholder="Enter Work ID Number" v-model="profileInfo.work_id" required="true">
	  </div>

	  <div class="form-group">
	    <label for="location">Location</label>
	    <input type="text" class="form-control" id="location" aria-describedby="locationHelp" placeholder="Enter Your Residential Location" v-model="profileInfo.location" required="true">
	  </div>

	   <div class="form-group">
	    <label for="hospital">Hospital</label>
	    <input type="text" class="form-control" id="hospital" placeholder="Stationed Hospital" v-model="profileInfo.hospital" required="true">
	   </div>

	  <button type="submit" class="btn btn-success text-center" v-on:click.prevent="updateprofileInfo">Update</button>
	</form>
	      </div>
	      <div class="modal-footer">
	        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
	      </div>
	    </div>
	  </div>
	</div>
	<!-- End of  Modal for the Profile Details-->	
	</div>
		</div>
		<div class="row">
			<div class="col-6 offset-3 mb-5 text-center">
				<input type="submit" value="Logout" class="btn btn-danger" v-on:click="logout">
			</div>
			
		</div>
	</div>
</template>

<script>
export default {
	name: 'QuickmedDashboard', 

	beforeCreate() {
		var that = this;
		SDK.call("devless", "profile", [], function(res) {
			/*console.log(res);*/
			if (res.payload.error) {
				that.$swal(
					"Failed Login",
					"Sorry! You are not authenticated",
					"error"
				);
				that.$router.push({ path: "/quickmed" });
			}
			if (res.payload.result.status == 0) {
				that.$swal(
					"Pending Activation",
					"Sorry, Your account has not been activated yet",
					"details"
				);
				that.$router.push({ path: "/quickmed" });
			} else {
				that.$swal(
					"QuickMed Dashboard",
					"Welcome! " + res.payload.result.username,
					"success"
				);
				that.details.users_id = res.payload.result.id;
				that.userInfo = res.payload.result;
				/*console.log(that.userInfo);*/

				var params = {
					where: ["users_id," + res.payload.result.id]
				};
				SDK.queryData("Ninja", "details", params, function(res) {
					that.profileInfo = res.payload.results[0];
					if (that.profileInfo == undefined) {
						that.profileInfo = {};
					}
					/*console.log(that.profileInfo);*/
					if (res.payload.results != false) {
						that.addedprofileAlready = !that.addedprofileAlready;
					}
				});
			}
		});
	},

	data() {
		return {
			details: {
				"image": null,
			},
			profileInfo: {},
			userInfo: {},
			addedprofileAlready: true,
			successUpdate: false
		};
	},

	methods: {
		logout: function() {
			var that = this;
			SDK.call("devless", "logout", [], function(res) {
				that.$router.push({ path: "/quickmed" });
			});
		},

		updateDetails: function() {
			var that = this;

			console.log(JSON.stringify(that.details));
			if(that.details.image == {}){
				return;
			}
			SDK.addData("Ninja", "details", that.details, function(res) {
				console.log(res);
				if (res.status_code == 609) {
					that.$swal("", "Profile Successfully updated", "success");
				} else {
					that.$swal("", "Update Failed", "error");
				}
			});
		},

		updateuserInfo: function() {
			var that = this;
			SDK.call(
				"devless",
				"updateProfile",
				[
					that.userInfo.email,
					"",
					that.userInfo.username,
					"+2330540420521",
					that.userInfo.first_name,
					that.userInfo.last_name
				],
				function(res) {
					console.log(res.payload.results);
					if (res.payload.result != false) {
						that.successUpdate = true;
					}
					return;
				}
			);
		},

		updateprofileInfo: function() {
			var that = this;
			var data = {
				profession: that.profileInfo.profession,
				location: that.profileInfo.location,
				hospital: that.profileInfo.hospital,
				work_id: that.profileInfo.work_id,
				license: that.profileInfo.license,
				image: that.profileInfo.image
			};
			SDK.updateData(
				"Ninja",
				"details",
				"id",
				that.profileInfo.id,
				data,
				function() {
					console.log("successfull");
					that.successUpdate = true;
				}
			);
		},

		uploadPic: function(event) {
			var pic = event.target.files[0]
			var reader = new FileReader();
			var that = this;
			reader.readAsDataURL(pic);
			reader.onload = function(){
				var pic = reader.result;
				that.details.image = pic;
			}
		},

		updatePic: function(event) {
			var pic = event.target.files[0]
			var reader = new FileReader();
			var that = this;
			reader.readAsDataURL(pic);
			reader.onload = function(){
				var pic = reader.result;
				that.profileInfo.image = pic;
			}
		
		},

	},

	computed: {

		}
	
};
</script>


<style scoped>
</style>
