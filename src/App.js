import logo from './logo.svg';
import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HomeScreen from "./screens/HomeScreen"
import ProfileScreen from "./screens/ProfileScreen";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
          <BrowserRouter>
            <div className="container">
              <Routes>
                <Route path="/">
                  <Route path="home"
                         element={<HomeScreen/>}/>
                  <Route path="profile"
                         element={<ProfileScreen/>}/>
                </Route>
              </Routes>
            </div>
          </BrowserRouter>
  );
}

export default App;
