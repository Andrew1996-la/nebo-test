import { Route, Routes } from 'react-router-dom';
import HeroPage from '../../pages/HeroPage/HeroPage';
import MainPage from '../../pages/MainPage/MainPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import Header from '../Header/Header';
import s from './layout.module.css'

const Layout = () => {
    return (
        <>
            <Header />
            <main className={s.main}>
                <Routes>
                    <Route path='/' element={<MainPage />} />
                    <Route path='/page:id' element={<HeroPage />} />
                    <Route path='*' element={<NotFoundPage />} />
                </Routes>
            </main>
        </>
    );
};

export default Layout;
