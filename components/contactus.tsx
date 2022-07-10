import React, {useState, useCallback} from "react";
import Image from "next/image";
import axios from "axios"

const ContactUs: React.FC = () => {
    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: { error:false , msg:null }
    })

    const [inputs, setInputs] = useState({
        companyName: '',
        email: '',
        message: ''
    })

    const handleOnChange = useCallback((e: { persist: () => void; target: { id: any; value: any; }; }) => {
        e.persist()
        setInputs(prev => ({
            ...prev,
            [e.target.id]: e.target.value
        }))
        setStatus({
            submitted: false,
            submitting: false,
            info: {error: false, msg: null}
        })
    }, [])

    const handleServerResponse = useCallback((ok: any, msg: any) => {
        if (ok) {
            setStatus({
                submitted: true,
                submitting: false,
                info: {error: false, msg}
            })
            setInputs({
                companyName: '',
                email: '',
                message: ''
            })
        } else {
            setStatus({
                submitted: false,
                submitting: false,
                info: {error: true, msg}
            })
        }
    }, [])

    const handleSubmit = useCallback((e: { preventDefault: () => void; }) => {
        e.preventDefault()
        setStatus(prevStatus => ({...prevStatus, submitting:true}))
        axios({
            method: 'POST',
            url: 'https://formspree.io/f/xgeppbjg',
            data: inputs
        }).then(_response => {
            handleServerResponse(true, 'Thank you, your message has been submitted :)')
        })
    }, [inputs, handleServerResponse])

    return (
        <div className="bg-black text-white flex flex-col justify-center pt-10 min-h-screen">
            <div className="flex-1 flex flex-col justify-center items-center pt-10 lg:pt-6">
                <div className="pb-10">
                    <Image src="/assets/logo.svg" width={40} height={40} alt="logo" />
                </div>
                <h2 className="text-4xl font-bold">Contact Us</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-16 px-10 lg:mt-20 min-w-full lg:min-w-[500px]">
                    {status.info.error && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                            <strong className="font-bold">Error</strong>:{' '}
                            <span className="block sm:inline">{status.info.msg}</span>
                        </div>
                    )}
                    {status.submitted ? (
                        <div className="text-white text-xl font-bold px-4 py-2 rounded relative" role="alert">Your message has been successfully sent. We will contact you very soon!</div>
                    ): (
                        <>
                            <input onChange={handleOnChange} value={inputs.companyName} className="bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-2" required maxLength={128} type="text" name="companyName" id="companyName" placeholder="Company name" />
                            <input onChange={handleOnChange} value={inputs.email} className="bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-2" required maxLength={128} type="email" name="email" id="email" placeholder="Your E-mail" />
                            <textarea onChange={handleOnChange} value={inputs.message} required maxLength={1048576} name="message" id="message" placeholder="Additional information" className="bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-6 min-h-[16em]"></textarea>
                            <div className="text-center mt-10">
                                <button type="submit" className="bg-white text-black rounded-3xl px-8 py-2">
                                    {!status.submitting ? !status.submitted ? 'Submit' : 'Submitted' : 'Submitting...'}
                                </button>
                            </div>
                        </>
                    )}

                </form>
            </div>
        </div>
    )
}

export default ContactUs