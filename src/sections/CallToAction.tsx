'use client';
import ArrowRight from '@/assets/arrow-right.svg'
import starImage from '@/assets/star.png'
import springImage from '@/assets/spring.png'
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react';

export const CallToAction = () => {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return <section ref={sectionRef} className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
    <div className="container">
      <div className='section-heading relative'>
        <h2 className="section-title">Sign up for free today</h2>
        <p className="section-description mt-5">
          Join thousands of users who are already boosting their productivity. Sign up now and get instant access to all our tools, completely free, with no credit card required.
        </p>

        <motion.img
          style={{
            translateY
          }}
          src={starImage.src}
          alt='star image'
          width={360}
          className='absolute -left-[350px] -top-[137px]'
        />
        <motion.img
          style={{
            translateY
          }}
          src={springImage.src}
          alt='spring image'
          width={360}
          className='absolute -right-[331px] -top-[19px]'
        />
        
      </div>

      <div className=" flex gap-2 mt-10 justify-center">
        <button className="btn btn-primary">Get for free</button>
        <button className="btn btn-text gap-1">
          <span>Learn more</span>
          <ArrowRight className='w-5  h-5' />
        </button>
      </div>
    </div>
  </section>;
};
