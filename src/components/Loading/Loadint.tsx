import { Circles } from 'react-loader-spinner';
import s from './loading.module.css';

const Loading = () => {
    return (
        <Circles
            color='#f5b68b'
            ariaLabel='circles-loading'
            wrapperClass={s.loading}
            visible={true}
        />
    );
};

export default Loading;
