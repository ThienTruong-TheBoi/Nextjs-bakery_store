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

    const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setRegisterData({ ...registerData, [e.target.name]: e.target.value });
    };

    const [alert, setAlert] = useState({
        status: '',
        message: ''
    })
    const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault()
        try {
            console.log(1)
            await fetch('/api/auth/signup/route.ts', {
                method: 'POST',
                body: JSON.stringify(registerData)
            })
            setAlert({ status: 'success', message: 'Signup successfully' })
            //setRegisterData({ name: '', password: '' })
        } catch (error: any) {
            console.log({ error })
            setAlert({ status: 'error', message: 'Something went wrong' })
        }
    }

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
                <form onSubmit={onSubmit} className="auth-form__form">
                        <div className="auth-form__group">
                            <input
                                type="text"
                                className="auth-form__input"
                                placeholder="Tên đăng nhập"
                                onChange={onChange}
                                value={registerData.name}
                                name='name'
                                required
                            />
                        </div>
                        <div className="auth-form__group">
                            <input
                                type="text"
                                className="auth-form__input"
                                placeholder="Mật khẩu"
                                onChange={onChange}
                                value={registerData.password}
                                name='password'
                                required
                            />
                        </div>
                    

                    <div className="auth-form__controls">
                        <button className="btn"
                            onClick={() => router.push('/')}
                        > ĐÓNG </button>
                        <button
                            className="btn btn--primary"
                            type='submit'
                            // onClick={onSubmit}
                        > ĐĂNG KÝ </button>
                    </div>
                </form>
          </div>
        </div>
    </div>
    )
}

export default regispage;