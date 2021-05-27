import React, { useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';


function Contact() {
    const [state, handleSubmit] = useForm("xvodakgb");
    useEffect(() => {
            if (state.succeeded) {
                NotificationManager.success('Success!', 'Message Status');
            }
            if (state.submitting && state.errors) {
                NotificationManager.error('Something wrong...', 'Message Status', 5000);
            }
        console.log(state)
    }, [state])
  return (
    <div className='w-full text-gray-300 font-oswaldMedium my-5 md:my-20 max-w-2xl mx-auto'>
        <form onSubmit={handleSubmit} className='w-full flex flex-col box-border'>
            <div className='w-full flex md:py-8 flex-col md:flex-row box-border'>
                <label htmlFor="name" className='w-full md:w-1/5 p-3 md:p-0'>
                    Name
                </label>
                <input
                    id="name"
                    type="name" 
                    name="name"
                    className='text-gray-700 h-6 w-11/12 mx-auto flex-grow bg-gray-300 box-border m-3 md:m-0'
                />
                <ValidationError 
                    prefix="Name" 
                    field="name"
                    errors={state.errors}
                />
            </div>

            <div className='w-full flex md:py-8 flex-col md:flex-row box-border'>
                <label htmlFor="email"  className='w-full md:w-1/5 p-3 md:p-0'>
                    Email Address
                </label>
                <input
                    id="email"
                    type="email" 
                    name="email"
                    className='text-gray-700 h-6 w-11/12 mx-auto flex-grow bg-gray-300 box-border m-3 md:m-0'
                />
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                />
            </div>

            <div className='w-full flex md:py-8 flex-col md:flex-row box-border'>
                <label htmlFor="message"  className='w-full md:w-1/5 p-3 md:p-0'>
                    Content
                </label>
                <textarea
                    id="message"
                    name="message"
                    className='text-gray-700 h-96 w-11/12 mx-auto flex-grow bg-gray-300 box-border m-3 md:m-0'
                />
                <ValidationError 
                    prefix="Message" 
                    field="message"
                    errors={state.errors}
                />
            </div>
            <button type="submit" disabled={state.submitting}>
                Submit
            </button>
        </form>
        <NotificationContainer />
    </div>
  );
}

export default Contact