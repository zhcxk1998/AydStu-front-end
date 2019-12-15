import LoadableComponent from '../components/LoadableComponent'

const Login = LoadableComponent(() => import('./Login'))
const Register = LoadableComponent(() => import('./Register'))

const DashBoard = LoadableComponent(() => import('./DashBoard'))
const Community = LoadableComponent(() => import('./Community'))
const Rank = LoadableComponent(() => import('./Rank'))
const Talk = LoadableComponent(() => import('./Talk'))
const Course = LoadableComponent(() => import('./Course'))
const ReadingTask = LoadableComponent(() => import('./ReadingTask'))
const Bookmanage = LoadableComponent(() => import('./Bookmanage'))
const Shopping = LoadableComponent(() => import('./Shopping'))

export {
  Login,
  Register,

  DashBoard,
  Community,
  Rank,
  Talk,
  Course,
  ReadingTask,
  Bookmanage,
  Shopping,
}
