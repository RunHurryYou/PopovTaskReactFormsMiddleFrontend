import { useState, useRef} from 'react';
import { TextInput } from '../../UI/TextInput/TextInput';
import type {IOnSubmtProp} from "../../types/logic.types";


export const SignIn = ({onSubmit}: IOnSubmtProp) => {
    const [inputs, setInputs] = useState({});
    const formRef = useRef<HTMLFormElement>(null);

    const handleChange = (event:React.ChangeEvent<HTMLFormElement>) => {
        setInputs(values => ({...values, [event.target.name]: event.target.value}));
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(inputs);
        if(formRef.current)
            formRef.current.reset();
    }

    const handleReset = () => {
        setInputs({});
    }

    return (
        <form
            ref={formRef}
            onChange = {handleChange}
            onSubmit={handleSubmit}
            onReset={handleReset}
        >
            <TextInput
                name='email'
                label='Email'
                placeholder="Ваш email"
                description='Введите вашу электронную почту'
                variant='default'
                radius='lg'
                size='xs'
            />
            <TextInput
                name='password'
                label='Пароль'
                placeholder="Ваш пароль"
                description='Введите ваш пароль'
                variant='default'
                radius='lg'
                size='xs'
            />
            <button type="submit">Sign In</button>
        </form>
    );
};