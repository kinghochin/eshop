import { SignUp } from '@clerk/nextjs'
import React from 'react'

export async function generateStaticParams() {
  // If there are no specific dynamic parameters, return an array with a default value
  return [
    { 'sign-up': [] }, // This would correspond to the base route /sign-up
    // If you have specific parameters, you can define them like this:
    // { 'sign-up': ['example1'] },
    // { 'sign-up': ['example2'] },
  ];
}

const signUpPage = () => {
  return (
    <div className='flex items-center justify-center h-screen w-full'>
      <SignUp />
    </div>  )
}

export default signUpPage;
