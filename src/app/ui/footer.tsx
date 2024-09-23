"use client"
import React from 'react'
import Image from 'next/image'
import cv from "D:/Portfolio/portfolio/public/cv.svg"
import phone from "D:/Portfolio/portfolio/public/phone.svg"
import { motion } from 'framer-motion'
import Link from 'next/link'


export default function Footer() {
    return (
        <div className='absolute lg:-m-20  flex flex-col md:flex-row  h-[100vh]  w-screen z-50 '>
            <div className='grow   flex items-center justify-center  shadow-inner-lg bg-primary    '>
                <motion.div whileHover={{scale:1.3}} className='h-40 w-40  text-center text-2xl text-secundary  font-extrabold '> <Link  href="/curriculum.pdf" target="_blank" rel="noopener noreferrer"><Image src={cv} alt={''}></Image> CURRICULUM </Link></motion.div>
            </div>

            <div className='grow  flex items-center justify-center bg-secundary'>
                <motion.div whileHover={{scale:1.3}} className='h-40 w-40 text-center  font-extrabold text-2xl text-black'>   <Link href={'/contact'} ><Image src={phone} alt={''}></Image>MY CONTACT</Link></motion.div>

            </div>
        </div>
    )
}
