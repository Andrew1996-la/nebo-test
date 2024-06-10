import Logo from '../Logo/Logo';
import s from './header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <Logo />
            {/* навигации не было в тз, если будет необходимость
            то воткнуть сюда */}
            <h1>Gallery of Heroes</h1>
        </header>
    );
};

export default Header;
