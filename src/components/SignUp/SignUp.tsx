import { TextInput } from '../../UI/TextInput/TextInput';
import { RadioInput } from '../../UI/RadioInput/RadioInput';
import type {IOnSubmtProp} from "../../types/logic.types";
import { IconAt } from '@tabler/icons-react';
import { useState, useRef } from 'react';


export const SignUp = ({ onSubmit }: IOnSubmtProp) => {
    const [inputs, setInputs] = useState({sex: "male"});
    const formRef = useRef<HTMLFormElement>(null);
    
    const handleChange = (event: React.ChangeEvent<HTMLFormElement>) => {
        setInputs(values => ({...values, [event.target.name]: event.target.value}));
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(inputs);
        handleReset();
        if(formRef.current)
            formRef.current.reset();
    }

    const handleReset = () => {
        setInputs({sex: "male"});
    }
    
    return (
        <form
        ref={formRef}
        onChange = {handleChange}
        onSubmit={handleSubmit}
        onReset={handleReset}
        >
            <TextInput
                name='fullname'
                label='Имя пользователя'
                placeholder="Ваше имя"
                description='Введите ваше имя'
                variant='default'
                radius='lg'
                size='xs'
                withAsterisk
            />
            <TextInput
                name='username'
                label='Никнейм'
                placeholder="Ваш никнейм"
                description='Введите ваш никнейм'
                variant='default'
                radius='lg'
                size='xs'
                withAsterisk
                icon={<IconAt size="0.8rem"/>}
            />
            <TextInput
                name='email'
                label='Email'
                placeholder="Ваш email"
                description='Введите вашу электронную почту'
                variant='default'
                radius='lg'
                size='xs'
                withAsterisk
            />
            <RadioInput
                name='sex'
                label='Пол'
                description='Укажите ваш пол'
                size='xs'
                withAsterisk
                options = {[{ label: 'Мужской', value: 'male' },{ label: 'Женский', value: 'female' },]} 
            />
            <TextInput
                name='password'
                label='Пароль'
                placeholder="Ваш пароль"
                description='Введите ваш пароль'
                variant='default'
                radius='lg'
                size='xs'
                withAsterisk
            />
            <TextInput
                name='repeat-password'
                label='Повторить пароль'
                placeholder="Ваш пароль"
                description='Потворите ваш пароль'
                variant='default'
                radius='lg'
                size='xs'
                withAsterisk
            />
            <button type="submit">Sign Up</button>
        </form>
    );
};