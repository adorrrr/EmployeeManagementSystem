import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) =>{
        e.preventDefault()
    }


  return (
    <div>
        <div className='flex h-screen w-screen items-center justify-center'>
            <div className='border-2 rounded-xl border-indigo-600 p-16'>
                <form
                onSubmit={(e)=>{
                    submitHandler(e)
                }}
                className="flex flex-col items-center justify-center">
                    <input
                    value={email }
                    onChange={()=>{
                        console.log(e.target.value)
                    }}
                    required className='text-white outline-none bg-transparent border-2 border-indigo-500 text-xl py-3 px-5 rounded-full' type="email" placeholder='Enter your email'/>
                    <input required className='text-white outline-none bg-transparent border-2 border-indigo-500 text-xl py-3 px-5 rounded-full m-3' type="password" placeholder='Enter your password'/>
                    <button className='text-white outline-none bg-indigo-500 text-xl py-2 px-5 rounded-full m-3' >Login</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login