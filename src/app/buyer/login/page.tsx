'use client'

import Link from 'next/link'
import '@/styles/main.css';
import { useState } from "react";
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react';
const loginpage = () => {
    const router = useRouter();

    const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const [loginData, setLoginData] = useState({
        name: "",
        password: "",
    });

    const [alert, setAlert] = useState({
        status: "",
        message: "",
    });

    const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        try {
            await signIn("credentials", loginData);
            setAlert({ status: "success", message: "Login successfully" });
            setLoginData({ name: "", password: "" });
        } catch (error: any) {
            console.log({ error });
            setAlert({ status: "error", message: "Something went wrong" });
        }
    };  

    return (
    <div className="modal">
        <div className="modal__overlay"> </div>
        <div className="modal__body">
           
            
          <div className="auth-form">
            <div className="auth-form__header">
                <h3 className="auth-form__heading"> ĐĂNG NHẬP </h3>
                <Link href="/buyer/register" className="auth-form__switch-btn"> 
                ĐĂNG KÝ </Link>
            </div>
            
            <div className="auth-form__form">
                        <div className="auth-form__group">
                            <input
                                type="text"
                                className="auth-form__input"
                                placeholder="Tên đăng nhập"
                                name='name'
                                onChange={onChange}
                                required
                            />
                        </div>
                        <div className="auth-form__group">
                            <input
                                type="text"
                                className="auth-form__input"
                                placeholder="Mật khẩu"
                                name='password'
                                onChange={onChange}
                                required
                            />
                        </div>
            </div>
                    <div className="auth-form__controls">
                        <button className="btn"
                            onClick={() => router.push('/')}
                        > ĐÓNG </button>
                        <button
                            className="btn btn--primary"
                            type='submit'
                            onClick={() => router.push('/buyer/home')}                            
                        > ĐĂNG NHẬP </button>
                    </div>
          </div>
        </div>
    </div>
    )
}

export default loginpage;