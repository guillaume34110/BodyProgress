
import Signup from './dependances/Signup';
import { Container } from 'react-bootstrap'
import { AuthProvider } from './dependances/context/AuthContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from './dependances/Dashboard';
import Login from './dependances/Login';
import PrivateRoute from "./dependances/PrivateRoute"
import ForgotPassword from './dependances/ForgotPassword';
import UpdateProfile from './dependances/UpdateProfile';
import User from './dependances/User';
import TrophyPage from './dependances/TrophyPage';
import MainMusculation from './dependances/MainMusculation';
import NewMuscuTrain from './dependances/NewMuscuTrain';
import NewExercice from './dependances/NewExercice'
import TrainingView from './dependances/TrainingView';
import ViewExercice from './dependances/ViewExercice';
import FullExercice from './dependances/FullExercice';
import CreateExercice from './dependances/CreateExercice';
import ViewUserExercice from './dependances/ViewUserExercice';
function App() {


  return (

    <Container className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}>
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute  path ="/update-profile" component={UpdateProfile} />
              <PrivateRoute  path = "/user" component={User} />
              <PrivateRoute  path = "/trophy" component={TrophyPage} />
              <PrivateRoute path = "/mainMusculation" component = {MainMusculation} />
              <PrivateRoute path = "/newMuscuTrain" component = {NewMuscuTrain} />
              <PrivateRoute path = "/newExercice" component = {NewExercice} />
              <PrivateRoute path = "/trainingView" component = {TrainingView} />
              <PrivateRoute path = "/viewExercice" component = {ViewExercice} />
              <PrivateRoute path = "/fullExercice" component = {FullExercice} />
              <PrivateRoute path = "/createExercice" component = {CreateExercice} />
              <PrivateRoute path = "/viewUserExercice" component = {ViewUserExercice} />
              <PrivateRoute exact path ="/" component={Dashboard}/>
              <Route path="/signup" component={Signup}/>
              <Route path="/login" component={Login}/>
              <Route path="/forgot-password" component ={ForgotPassword}></Route>
            </Switch>
          </AuthProvider>
        </Router>
        
      </div>
    </Container>

  )
}

export default App;
