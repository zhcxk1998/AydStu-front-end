import LoadableComponent from '../components/LoadableComponent'

const Login = LoadableComponent(() => import('./Login'))
const Register = LoadableComponent(() => import('./Register'))

const DashBoard = LoadableComponent(() => import('./DashBoard'))
const Community = LoadableComponent(() => import('./Community'))
const Rank = LoadableComponent(() => import('./Rank'))
const Talk = LoadableComponent(() => import('./Talk'))
const Course = LoadableComponent(() => import('./Course'))

export {
  Login,
  Register,

  DashBoard,
  Community,
  Rank,
  Talk,
  Course,
}
