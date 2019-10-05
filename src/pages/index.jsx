import LoadableComponent from '../components/LoadableComponent'
import Index from './Index/index'

const Login = LoadableComponent(() => import('./Login'))
const Register = LoadableComponent(() => import('./Register'))

const DashBoard = LoadableComponent(() => import('./DashBoard'))

export {
  Index,

  Login,
  Register,

  DashBoard,
}
