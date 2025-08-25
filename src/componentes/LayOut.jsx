import { ThemeProvider } from "./Funciones/ThemeContext";
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';


const Layout = ({ children }) => {
    return (
        <>
            <ThemeProvider>
                <Header />
                <Menu />
                <main className="bg-body-tertiary">
                    {children}
                </main>
                <Footer />
            </ThemeProvider>
        </>
    );
};
export default Layout;