import React, { useRef } from 'react';
// import React from 'react'
import emailjs from '@emailjs/browser';

export const SectionF = () => {
    const form = useRef();

    const sendEmail = (e) => {
        let a = document.getElementById("name").value;
        let b = document.getElementById("email").value;
        console.log(a);
        console.log(typeof a);
        if (a === "" || b === "") {
            alert("enter all info");
        }
        else {
            e.preventDefault();
            emailjs.sendForm('service_zfc92ln', 'template_vtv389t', form.current, 'X3ZfdWCyAAJxu5w9u')
                .then((result) => {
                    console.log(result.text);
                    alert("message is send")
                }, (error) => {
                    console.log(error.text);
                    alert("error")
                });
        };
    };
    return (
        <>
            <section className="section-6">
                <div className="container">
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="descr">Contact us</div>
                        <div className="input">
                            <input id='name' name='user_name' required="" autoComplete="off" type="text" />
                            <label htmlFor="name">Name<b>*</b></label>
                        </div>

                        <div className="input">
                            <input id='email' required="" autoComplete="off" name="user_email" type="text" />
                            <label htmlFor="email">E-mail<b>*</b></label>
                        </div>

                        <div className="input">
                            <textarea name='message' required="" cols="30" rows="1" id="message"></textarea>
                            <label htmlFor="message">Message</label>
                        </div>
                        <button type='submit' id="formbt">Send message →</button>
                    </form>
                </div>
            </section>
        </>
    )
}
