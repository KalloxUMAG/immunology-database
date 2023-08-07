import {Outlet} from 'react-router-dom';
import Main from "./Main";
import Footer from "./Footer";


const Layout: React.FC = () => {
    return (
        <>
            <Main>
                <Outlet/>
            </Main>
            <Footer/>
        </>
    )
}

export default Layout;