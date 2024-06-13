import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import s from './notFoundPage.module.css';

const NotFoundPage = () => {
    const navigate = useNavigate();
    return (
        <div className={s.notFound}>
            <div>
                <h1> 404: Страница ушла на тёмную сторону</h1>
                <div>
                    Темная сторона поглотила эту страницу. Вернитесь на главную,
                    чтобы найти свет.
                </div>
            </div>
            <Button onClick={() => navigate(-1)} className={s.button}>
                На светлую
            </Button>
        </div>
    );
};

export default NotFoundPage;
