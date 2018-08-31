<template>
<div id="home">
    <div class="container pt-3 py-5">
      <div class="row pb-5">
        <div class=" col-12 col-sm-6 offset-md-3 col-md-4 offset-md-4 text-center">
            <img src="@/assets/soteria.png">
        </div>
      </div>
   <!--  </div> -->

<!--   <div class="container py-sm-5 py-md-5"> -->
    <div class="row py-5">
      <div class="col-sm-12 col-md-4">
        <div class="card text-center">
          <div class="card-body">
             <img class="card-img-top" src="@/assets/logo2.png" alt="QuickMed">
            <p class="card-text text-muted mt-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

            <router-link v-bind:to="'/quickmed'" class="card-link"><button class="btn btn-md btn-primary">Checkup <i class="fas fa-flip-horizontal fa-ambulance"></i></button></router-link>
          </div>
        </div>
      </div>
       <div class="col-sm-12 my-5 my-sm-0 col-md-4 my-md-0">
      <div class="card text-center">
          <div class="card-body">
            <img class="card-img-top" src="@/assets/logo2.png" alt="Pharmshop">
            <p class="card-text text-muted mt-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <router-link  v-bind:to="'/pharmshop'" class="card-link"><button class="btn btn-md btn-success">Search Drug <i class="fas fa-pills"></i></button></router-link>
          </div>
        </div>
      </div>
       <div class="col-sm-12 col-md-4">
        <div class="card text-center">
          <div class="card-body">
            <img class="card-img-top" src="@/assets/logo2.png" alt="Ifix">
            <p class="card-text text-muted mt-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <router-link v-bind:to="'/ifix'" class="card-link"><button class="btn btn-md btn-info px-3">FixIt <i class="fas fa-flip-horizontal fa-wrench "></i></button></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#home{
  background-image: linear-gradient(90deg, #afc  40%, #81cfd8);  /*#7961aa  #81cfd8 #b1a3cd*/
}

.card-body img{
  width: 10em;
  height: 8em;
}

</style>
