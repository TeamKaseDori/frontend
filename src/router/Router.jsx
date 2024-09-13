import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../components/pages/homePage';
import { UserPage } from '../components/pages/userPage';
import { LogoutPage } from '../components/pages/logoutPage';
import { LoginPage } from '../components/pages/loginPage';
import { SignupPage } from '../components/pages/signupPage';
import { Page404 } from '../components/pages/page404';
import { MatchingPage } from '../components/pages/matchingPage';
import { MessagePage } from '../components/pages/messagePage';
// import { LeaderPage } from '../components/pages/leaderPage';



export const Router = () => {

    return (
        <Routes>
            <Route path="/"  element={<HomePage  />} />
            <Route path="/matching"  element={<MatchingPage  />} />
            <Route path="/message"  element={<MessagePage  />} />
            <Route path="/user"  element={<UserPage  />} />
            <Route path="/logout"  element={<LogoutPage/>} />
            <Route path="/login"  element={<LoginPage  />} />
            <Route path="/signup"  element={<SignupPage />} />
            {/* <Route path="/leader"  element={<LeaderPage />} /> */}
            <Route path="*" element={<Page404 />} />
        </Routes>
    );
}