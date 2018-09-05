import Vue from 'vue'
import Router from 'vue-router'
import vueSmoothScroll from 'vue2-smooth-scroll'
import VueSwal from 'vue-swal'


/*top level components*/
import HomePage from '@/components/HomePage'
import QuickMed from '@/components/QuickMed'
import Pharmshop from '@/components/Pharmshop'
import Ifix from '@/components/Ifix'

/*components for quickmed*/
import QuickmedRegister from '@/components/quickmed/QuickmedRegister'
import QuickmedFeedback from '@/components/quickmed/QuickmedFeedback'
import QuickmedDashboard from '@/components/quickmed/QuickmedDashboard'
import QuickmedSearchResults from '@/components/quickmed/QuickmedSearchResults'

Vue.use(vueSmoothScroll)
Vue.use(VueSwal)
Vue.use(Router)

export default new Router({
  routes: [
    { /*Soteria landing page*/
      path: '/',
      name: 'HomePage',
      component: HomePage,
      meta:{
      			'title': 'Soteria - Home'
     	   }
    },

    { /*QuickMed Pages*/
      path: '/quickmed',
      name: 'QuickMed',
      component: QuickMed,
      meta:{
      			'title': 'Soteria - QuickMed'
     	   },

    },

    {
      path: '/quickmed/register',
      name: 'QuickmedRegister', 
      component: QuickmedRegister,
      meta:{
            'title': 'QuickMed - Register'
           },
     },

    { 
      path: '/quickmed/feedback',
      name: 'QuickmedFeedback', 
      component: QuickmedFeedback,
      meta:{
           'title': 'QuickMed - Send Feedback'
            } 
    },

    { 
      path: '/quickmed/dashboard', 
      name: 'QuickmedDashboard',
      component: QuickmedDashboard,
      meta:{
           'title': 'QuickMed - User Dashboard'
            } 
    },

    { 
      path: '/quickmed/personnel', 
      name: 'QuickmedSearchResults',
      component: QuickmedSearchResults,
      meta:{
           'title': 'QuickMed - Personnel Available'
            },
      props: true,
    },

   /* End of QuickMed pages*/

   /*Pharmshop pages*/

    {
      path: '/pharmshop',
      name: 'Pharmshop',
      component: Pharmshop,
      meta:{
      			'title': 'Soteria - Pharmshop'
     	   }
    },


    /*End of Pharmshop pages*/


    /*Ifix Pages*/
    {
      path: '/ifix',
      name: 'Ifix',
      component: Ifix,
      meta:{
      			'title': 'Soteria - Ifix'
     	   }
    },

   /* End of Ifix pages*/

  ],

  mode: 'history'
})
