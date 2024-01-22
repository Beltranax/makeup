import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import profilePic from "../../public/images/profile/profile2.jpeg";
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'

const AnimatedNumbers = ({value}) => {
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref, {once:true});

    //for the number animation
    useEffect(() => {
        if(isInView){
            motionValue.set(value);
        }
    }, [isInView, value, motionValue])

    //for updating the value
    useEffect(() =>{ 
        springValue.on("change", (latest) => {
            if(ref.current && latest.toFixed(0) <= value ){
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springValue, value])
    
    return <span ref={ref}></span>
}

const about = () => {
    return (
        <>
            <Head>
                <title>Makeup by Adylu | About Me</title>
                <meta name="description" content="any description" />
            </Head>

            <TransitionEffect />

            <main className='flex w-full flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text="Passion Fuels Purpose!"  className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>
                    <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                        <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
                            <p className='font-medium'>
                            - My passion for makeup and teaching started at a young age. 
                            </p>
            
                            <p className='my-4 font-medium'>
                            - Upon high school graduation, I challenged myself by graduating from MUD Makeup Designory School in Los Angeles, California
                            and then San Diego State University, because I aspire to have a Makeup Academy in San Diego California.  
                            </p>

                            <p className='my-4 font-medium'>
                            - As a freelance artist for more than ten years, I continue to specialize in Bridal and Special Occasion events throughout Southern California, Columbia and  Mexico. 
                            </p>

                            <p className='my-4 font-medium'>
                            - I strongly believe in enhancing one's natural beauty and providing a comfortable space for all.
                            </p>

                            <p className='my-4 font-medium'>
                            - It is a privilege to be your makeup artist and will ensure you leave my chair with great satisfaction. 
                            </p>

                            <p className='my-4 font-medium'>
                            - I look forward to being a part of your special day. 
                            </p>

                            <p className='my-4 font-bold'>
                            With Love, 
                            </p>

                            <p className='font-bold'>
                            Adylu Llanes
                            </p>

                        </div>

                        <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
                        bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
                            <Image src={profilePic} alt="profile pic" className="w-full h-auto rounded-2"
                            priority
                            sizes="(max-width: 768px) 100vw,
                            (max-width: 1200px) 50vw,
                            33vw"
                            />
                        </div>
                        <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimatedNumbers value={50} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base
                                xs:text-sm'>
                                    Satisfied clients
                                </h2>
                            </div>

                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimatedNumbers value={40} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base
                                xs:text-sm'> 
                                    Projects Completed
                                </h2>
                            </div>

                            <div className='flex flex-col items-end justify-center xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimatedNumbers value={10} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base
                                xs:text-sm'>
                                    Years Experience
                                </h2>
                            </div>
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default about
