'use client'

import Link from 'next/link'
import '@/styles/main.css';
import { useRouter } from 'next/navigation'
import { useState } from 'react';
import Script from 'next/script';
const regispage = () => {
    const router = useRouter();

    const [registerData, setRegisterData] = useState({
        name: "",
        password: "",
    });

    const [alert, setAlert] = useState({
        status: '',
        message: ''
    })
    const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault()
        try {
            await fetch('/api/authenticate/signup/', {
                method: 'POST',
                body: JSON.stringify(registerData)
            })
            setAlert({ status: 'success', message: 'Signup successfully' })
            setRegisterData({ name: '', password: '' })
        } catch (error: any) {
            console.log({ error })
            setAlert({ status: 'error', message: 'Something went wrong' })
        }
    }

    const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setRegisterData({ ...registerData, [e.target.name]: e.target.value });
    };


    return (
    <div className="modal">
        <div className="modal__overlay"> </div>
        <div className="modal__body">
           
            
        <div className="auth-form">
            <div className="auth-form__header">
                <h3 className="auth-form__heading"> ĐĂNG KÝ </h3>
                <Link href="/buyer/login" className="auth-form__switch-btn"> 
                ĐĂNG NHẬP</Link>
            </div>
            
            <div className="auth-form__form">
                <div className="auth-form__group">
                            <input type="text"
                                onChange={onChange}
                                value={registerData.name}
                                className="auth-form__input"
                                placeholder="Tên đăng nhập"
                                name="name"
                                required
                            />
                </div>
                <div className="auth-form__group">
                            <input type="text"
                                onChange={onChange}
                                value={registerData.password}
                                className="auth-form__input"
                                placeholder="Mật khẩu"
                                name="password"
                                required
                            />
                </div>                       
                        
            </div>

            <div className="auth-form__controls">
                        <button className="btn"
                            type='button'
                            onClick={() => router.push('/')}
                        > ĐÓNG </button>
                        <button className="btn btn--primary"
                            type='submit'
                            onClick={() => router.push('/buyer/home/info')}
                        > ĐĂNG KÝ </button>
            </div>
          </div>
            </div>
    </div>
    )
}

export default regispage;