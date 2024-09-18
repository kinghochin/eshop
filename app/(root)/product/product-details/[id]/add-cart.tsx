'use client';

import { Button } from '@/components/ui/button';
// import { useToast } from '@/hooks/use-toast';
import { Product } from '@/typing';
import React from 'react'

const AddCart = ({ product }:{product:Product}) => {
  // const { toast } = useToast()

  const addToCartHandler = () => {
    // toast({
    //   description: "Item added!",
    //   variant: "success",
    // });
  };

  return (
    <div className='mt-4'>
        <Button onClick={addToCartHandler} className='bg-logo'>Add To Cart</Button>
    </div>
  )
}

export default AddCart;