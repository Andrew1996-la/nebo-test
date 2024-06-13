import { ChangeEvent, FC, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = (props) => {
    const { onChange, onKeyDown, className, style, ...rest } = props;

    return (
        <input
            onKeyDown={onKeyDown}
            className={className}
            style={style}
            onChange={onChange}
            {...rest}
        />
    );
};

export default Input;
