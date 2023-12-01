'use client'
import Button from '@/app/components/button'
import Input from '@/app/components/input'
import { useRouter } from 'next/navigation'
import React from 'react'

const SignIn = () => {
    const router = useRouter();
    const handleSubmitButton = () => {
        console.log('clicked')
        router.push('/');
    }
  return (
    <>
    <h1>Sign In </h1>
    <div>
      <form method='post'>
        <Input type="email" placeHolder="Email" />
        <Input type="password" placeHolder="Password" />
        <Button type="submit" name="signIn" onClick={handleSubmitButton} text={"Sign In"}/>
      </form>
    </div>
    </>
  )
}

export default SignIn