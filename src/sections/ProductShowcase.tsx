'use client'
import productImage from '@/assets/product-image.png'
import pyramidImage from '@/assets/pyramid.png'
import tubeImage from '@/assets/tube.png'
import {motion,useScroll, useTransform} from 'framer-motion'

import Image from 'next/image';
import { useRef } from 'react'
export const ProductShowcase = () => {
  const sectionRef = useRef(null)
  const {scrollYProgress} =useScroll({
    target:sectionRef,
    offset:['start end','end start']
  });
  const translateY = useTransform(scrollYProgress,[0,1],[150,-150])

  return (
    <section ref={sectionRef} className='bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip'>
      <div className="container">
        <div className='section-heading'>
          <div className='flex justify-center'>
            <div className='tag'>Boost your productivity</div>
          </div>
          <h2 className='section-title  mt-5'>A more effective way to task progress</h2>
          <p className='section-description mt-5'>
            Streamline your workflow and keep track of tasks more efficiently with our innovative tools. Stay organized, meet deadlines, and boost your productivity with features designed to help you succeed every step of the way.
          </p>
        </div>
        <div className='relative'>
          <Image src={productImage} alt='product image' className='mt-10' />

          <motion.img 
          style={{
            translateY,
          }}
          src={pyramidImage.src} 
          alt='pyramid image' 
          height={262} 
          width={262} 
          className='hidden md:block absolute -right-36 -top-32'
          />

          <motion.img 
          style={{
            translateY,
          }}
          src={tubeImage.src} 
          alt='tube image' 
          height={248} 
          width={248} 
          className='hidden md:block absolute bottom-24 -left-36'
          />
          
        </div>
      </div>
    </section>
  );
};
