import HomeView from '../views/HomeView.vue'
import FeedbacksView from '../views/FeedbacksView.vue'
import CredentialsView from '../views/CredentialsView.vue'

const routes = [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/feedbacks',
      name: 'Feedbacks',
      component: FeedbacksView,
      meta: {
        hasAuth: true
      }
    },
    {
      path: '/credentials',
      name: 'Credentials',
      component: CredentialsView,
      meta: {
        hasAuth: true
      }
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: { name: 'Home' }
    }
]

export default routes