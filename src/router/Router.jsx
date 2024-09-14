import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../components/pages/homePage';
import { UserPage } from '../components/pages/userPage';
import { Page404 } from '../components/pages/page404';
import { MatchingPage } from '../components/pages/matching/matchingPage';
import { LeaderPage } from '../components/pages/matching/leaderPage';
import { LogoutPage } from '../components/pages/auth/logoutPage';
import { LoginPage } from '../components/pages/auth/loginPage';
import { SignupPage } from '../components/pages/auth/signupPage';


export const Router = () => {

    return (
        <Routes>
            <Route path="/"  element={<HomePage  />} />
            <Route path="/matching"  element={<MatchingPage  />} />
            <Route path="/user"  element={<UserPage  />} />
            <Route path="/logout"  element={<LogoutPage/>} />
            <Route path="/login"  element={<LoginPage  />} />
            <Route path="/signup"  element={<SignupPage />} />
            <Route path="/leader"  element={<LeaderPage />} />
            <Route path="*" element={<Page404 />} />
        </Routes>
    );
}