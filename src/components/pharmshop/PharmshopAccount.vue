<template>
<!-- try using facebook to log in -->
<div class="container">
    <div class="row">
        <div class="col-sm-12 col-md-10 offset-md-1">
            <div class="col-sm-12 col-md-6 offset-md-3">
            <div class="card my-3">
                    <ul class="nav nav-tabs nav-fill" id="myTab" role="tablist">
                        <li class="nav-item py-2">
                            <a class="nav-link active" id="login-tab" data-toggle="tab" href="#login" role="tab" aria-controls="login" aria-selected="true">Log in</a>
                        </li>
                        <li class="nav-item py-2">
                            <a class="nav-link" id="signup-tab" data-toggle="tab" href="#signup" role="tab" aria-controls="signup" aria-selected="false">Sign up</a>
                        </li>
                    </ul>
                <div class="card-body tab-content" id="myTabContent">
                    <!-- Login form tab -->
                    <div class="tab-pane fade show active" id="login" role="tabpanel" aria-labelledby="login-tab">
                    <h3 class="card-title text-center">Login Here</h3>
                    <form class="dv-signin px-sm-0 px-md-4 py-3" action="admin/dashboard/">
                        <div class="form-group">
                            <label for="email">Email Address</label>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                <span class="input-group-text" id="emailPrepend"><i class="fas fa-envelope"></i></span>
                                </div>
                                <input type="email" class="form-control" id="email" placeholder="example@gmail.com" aria-describedby="emailPrepend" required>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                <span class="input-group-text" id="passwordPrepend"><i class="fas fa-unlock-alt"></i></span>
                                </div>
                                <input type="password" class="form-control" id="password" aria-describedby="passwordPrepend" required>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-outline-primary float-right">Log in <i class="fas fa-user"></i></button>
                    </form>
                    </div> <!-- End of login tab -->
                
                    <!-- Signup form tab -->
        
                    <div class="tab-pane fade" id="signup" role="tabpanel" aria-labelledby="signup-tab">
                            <h3 class="card-title text-center">Create Account Here</h3>
                            <form class="dv-signup" action="admin/dashboard/">
                                <div class="form-group">
                                    <label for="firstname">Given Name</label>
                                    <input type="text" class="form-control" name="firstname" aria-describedby="firstnameHelp" required>
                                </div>
                                <div class="form-group"> 
                                    <label for="lastname">Last Name</label>
                                    <input type="text" class="form-control" name="lastname" aria-describedby="lastnameHelp" required>
                                </div>

                                <div class="form-group">
                                    <label for="username">Username</label>
                                    <input type="text" class="form-control" name="username" aria-describedby="usernameHelp" required>
                                </div>
                                <div class="form-group">
                                    <label for="userEmail">Email address</label>
                                    <input type="email" class="form-control" name="email" aria-describedby="emailHelp">
                                </div>
                                <div class="form-group">
                                    <label for="phonenumber">Phone Number</label>
                                    <input type="number" class="form-control" name="phonenumber" aria-describedby="phonenumberHelp" required>
                                </div>
                                <div class="form-group">
                                    <label for="password">Password</label>
                                    <input type="password" class="form-control" name="password"  aria-describedby="passwordHelp" required>
                                </div>
                                <div class="d-flex justify-content-center mt-3 py-2 px-5">
                                    <button type="submit" class="btn btn-outline-success text-center">Sign up <i class="fas fa-user-plus"></i></button>
                                </div>
                                </form>
                
                    </div> 
                    <!-- End of Signup tab -->
                </div>
                </div>
            </div>
        </div>
    </div>
</div>
    
</template>
