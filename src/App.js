import logo from './logo.svg';
import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HomeScreen from "./screens/HomeScreen"
import {ProfileLoggedIn, ProfileScreen} from "./screens/ProfileScreen";
import OtherProfile from "./screens/OtherProfile"
import SecureRoute from "./components/Security/secure-route";
import RegisterScreen from "./screens/RegisterScreen"
import SignIn from "./screens/SignInScreen"
import DetailsScreen from "./screens/DetailsScreen";
import SearchScreen from "./screens/SearchScreen";
import {ProfileProvider} from "./contexts/profile-context";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {EditProfile} from "./screens/editProfile";

function App() {
    return (
        <div className="container">
            <ProfileProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/">
                            <Route path="register" element={<RegisterScreen/>}/>
                            <Route path="signin" element={<SignIn/>}/>
                            <Route path="home" element={<HomeScreen/>}/>
                            {/*<Route path="profile" element={<SecureRoute>*/}
                            {/*    <ProfileLoggedIn/>*/}
                            {/*</SecureRoute>}/>*/}
                        </Route>
                        <Route path="/">
                            <Route path="register" element={<RegisterScreen/>}/>
                            <Route path="signin" element={<SignIn/>}/>
                            <Route path="home" element={<HomeScreen/>}/>
                            <Route path="profile" element={<ProfileScreen/>}/>
                            <Route path="editProfile" element={<EditProfile/>}/>
                            <Route path="profile/:userId" element={<OtherProfile/>}/>
                            <Route path="search" element={<SearchScreen/>}/>
                            <Route path="search/:movieSearch" element={<SearchScreen/>}/>
                            <Route path="/details/:imdbID" element={<DetailsScreen/>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </ProfileProvider>

        </div>
    );
}

export default App;
