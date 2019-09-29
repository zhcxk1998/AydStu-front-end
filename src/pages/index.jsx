import LoadableComponent from '../components/LoadableComponent'

const Home = LoadableComponent(() => import('./Home'))
const Login = LoadableComponent(() => import('./Login'))
const Register = LoadableComponent(() => import('./Register'))

export {
  Home,
  Login,
  Register,
}
