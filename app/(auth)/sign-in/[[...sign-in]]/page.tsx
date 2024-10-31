import { SignIn } from '@clerk/nextjs'
import React from 'react'

export async function generateStaticParams() {
  return [
    { signIn: [] }, // This would correspond to the base route /sign-in
  ];
}

const SignInPage = () => {
  return (
    <div className='flex items-center justify-center h-screen w-full'>
      <SignIn />
    </div>
  )
}

export default SignInPage;
