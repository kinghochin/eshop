import React from 'react'

const Footer = () => {
  return (
    <div className='pt-20 pb-12'>
        <div className='w-4/5 border-b-[1.2px] pb-8 border-b-slate-500 mx-auto grid-cols-1 grid md:grid-cols-2 lg:grid-cols-4 gap-12'>
            <div>
                <h1 className='text-[25px] uppercase font-semibold text-black mb-4'>
                    eShop
                </h1>
                <p className='text-sm text-black opacity-60'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio optio nulla quam a sit eius totam nam, laudantium, ipsum ad corrupti natus incidunt. Id voluptates quos iste, quo rerum quaerat.
                </p>
                <p className='text-base mt-2 text-black opacity-80'>(+44) 07777 999111</p><p className='text-base text-black opacity-80'>cs@eshop-example.co.uk</p>
            </div>

            <div className='lg:mx-auto'>
                <h1 className='footer__title'>Information</h1>
                <p className='footer__link'>About US</p>
                <p className='footer__link'>Privacy Policy</p>
                <p className='footer__link'>Return Policy</p>
                <p className='footer__link'>Terms & Conditions</p>
            </div>

            <div className='lg:mx-auto'>
                <h1 className='footer__title'>Account</h1>
                <p className='footer__link'>Dashboard</p>
                <p className='footer__link'>My Orders</p>
                <p className='footer__link'>Account Details</p>
                <p className='footer__link'>Track Orders</p>
            </div>

            <div className='lg:mx-auto'>
                <h1 className='footer__title'>Shop</h1>
                <p className='footer__link'>Best Sellers</p>
                <p className='footer__link'>Latest Products</p>
                <p className='footer__link'>Sale Products</p>
                <p className='footer__link'>Membership</p>
            </div>
        </div>

        <div className='mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 justify-between w-4/5 mx-auto'>
            <p className='text-sm text-black opacity-60'>© Copyright eShop 2024</p>
        </div>
    </div>
  )
}

export default Footer