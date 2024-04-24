import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import OtherParticipation from '../views/OtherParticipation.vue'
import ProfessionalSkill from '../views/ProfessionalSkill.vue'
import ProjectAchieve from '../views/ProjectAchieve.vue'
import FirstView from '../views/FirstProject.vue'
import SecondView from '../views/SecondProject.vue'
import ThirdView from '../views/ThirdProject.vue'
import FourView from '../views/FourProject.vue'
import FiveView from '../views/FiveProject.vue'
import SixView from '../views/SixProject.vue'
import SevenView from '../views/SevenProject.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/particpate',
    name: 'particpate',
    component: OtherParticipation
  },
  {
    path: '/skill',
    name: 'skill',
    component: ProfessionalSkill
  },
  {
    path: '/project',
    name: 'project',
    component: ProjectAchieve
  },
  {
    path: '/collegeproject',
    name: 'collegeproject',
    component: FirstView
  },
  {
    path: '/blockchain',
    name: 'blockchain',
    component: SecondView
  },
  {
    path: '/labor',
    name: 'labor',
    component: ThirdView
  },
  {
    path: '/sign',
    name: 'sign',
    component: FourView
  },
  {
    path: '/design',
    name: 'design',
    component: FiveView
  },
  {
    path: '/blockchain_sign',
    name: 'blockchain_sign',
    component: SixView
  },
  {
    path: '/class_analyze',
    name: 'class_analyze',
    component: SevenView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
