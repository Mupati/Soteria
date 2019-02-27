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
import QuickmedLogin from '@/components/quickmed/QuickmedLogin'
import QuickmedFeedback from '@/components/quickmed/QuickmedFeedback'
import QuickmedDashboard from '@/components/quickmed/QuickmedDashboard'
import QuickmedSearchResults from '@/components/quickmed/QuickmedSearchResults'


// components for Pharmshop
import PharmshopHomepage from '@/components/pharmshop/PharmshopHomepage'
import PharmshopAccount from '@/components/pharmshop/PharmshopAccount'
import PharmshopCart from '@/components/pharmshop/PharmshopCart'
import PharmshopLifestyle from '@/components/pharmshop/PharmshopLifestyle'
import PharmshopLocate from '@/components/pharmshop/PharmshopLocate'





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
      path: '/quickmed/login',
      name: 'QuickmedLogin', 
      component: QuickmedLogin,
      meta:{
            'title': 'QuickMed - Log in'
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
      path: '/pharmshop/', 
      component: Pharmshop,
      meta:{
        'title': 'Pharmshop - Your Online Pharmacy'
         },
      children: [
        {
          path: 'home',
          component: PharmshopHomepage,
          meta:{
            'title': 'Pharmaceutical Products Brought Closer - Pharmshop'
             }
        },
        {
          path: 'locate',
          component: PharmshopLocate,
          meta:{
            'title': 'Pharmacy Locator - Pharmshop'
             }
        },
        {

          path: 'lifestyle',
          component: PharmshopLifestyle,
          meta:{
            'title': 'Healthy Living Tips - Pharmshop'
             }
        },
        {

          path: 'account',
          component: PharmshopAccount,
          meta:{
            'title': 'Customer Log in - Pharmshop'
             }
        },
        {
          path: 'cart',
          component: PharmshopCart,
          meta:{
            'title': 'Cart Items - Pharmshop'
             }
        },
      ]
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

  mode: 'history',
  
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
