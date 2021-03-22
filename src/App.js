import React ,{ useState ,useEffect } from 'react'
import './App.css';
import { Route , BrowserRouter as Router } from 'react-router-dom';
import { Home , Login , SignUp , Chat ,} from './pages';
import { PrivateRoute , PublicRoute } from './HOC'
import { auth } from './services/firebase'

function App() {
   const [authenticated, setAuthenticated] = useState(false);
   const [loading , setLoading] =useState(true);

   useEffect(() => {
     auth().onAuthStateChanged((user)=>{
       console.log(user)
       if(user){
         setAuthenticated(true);
         setLoading(false)
       }else{
        setAuthenticated(false);
        setLoading(true)
       }
     })
   }, [])
  return (
    <Router>
      <PublicRoute  exact path="/" authenticated ={authenticated} Component={Home} />
      <PrivateRoute path="/chat" authenticated={authenticated} Component={Chat } />
      <PublicRoute path="/login" authenticated ={authenticated} Component={Login} />
      <PublicRoute path="/signup" authenticated={authenticated} Component={SignUp} />
    </Router>
  );
}

export default App;
