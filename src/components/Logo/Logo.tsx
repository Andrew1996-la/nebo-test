import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import s from './logo.module.css';

const Logo = () => {
    const navigate = useNavigate();

    return (
        <img
            className={s.logo}
            src={logo}
            alt='logo'
            onClick={() => navigate('/')}
        />
    );
};

export default Logo;
