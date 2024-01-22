import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import Image from 'next/image';
import project1 from "../../public/images/projects/bridal1.JPG";
import project2 from "../../public/images/projects/bridal2.jpg";
import project3 from "../../public/images/projects/bridal3.JPG";
import project4 from "../../public/images/projects/groom.jpg";
import project5 from "../../public/images/projects/bridal5.JPG";
import project6 from "../../public/images/projects/bridal4.jpg";
import {motion} from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedService = ({type, title, line1, line2, line3, line4, line5, line6, img, link}) => {
    return(
        <article className="w-full flex items-center justify-between relative rounded-br-2xl
        rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
        lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
        ">

            <div className='absolute top-0 -right-3 -z-10 w-[100.75%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light
            rounded-br-3xl xs:-right-2 xs:h-[102%] xs:w-full xs:rounded-[1.5rem]' />
            
                <FramerImage src={img} alt={title} className="w-1/4 cursor-ponter overflow-hidden rounded-lg lg:w-full" 
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width:1200px) 50vw,
                50vw"
                />

            <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
                <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">{type}</span>
                <Link href={link} target="_blank" className="hover:underline underline-offset-2">
                <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">{title}</h2>
                </Link>
                <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{line1}</p>
                <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{line2}</p>
                <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{line3}</p>
                <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{line4}</p>
                <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{line5}</p>
                <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">{line6}</p>
            </div>
        </article>
    )
}

const services= () => {
    return (
        <>
            <Head>
                <title> Makeup By Anylu | Services </title>
                <meta name="services" content="any services" />
            </Head>
            <TransitionEffect />
            <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText text="Makeup is Art, Beauty is Spirit!"
                    className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"/>

                    <div className="grid grid-col-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
                        <div className="col-span-12">
                            <FeaturedService 
                            title="Bride"
                            img={project1}
                            line1= "~1.5 hour service" 
                            line2= "~Lip/Face Touch-Up kit" 
                            line3="~Variety of eyelashes to choose from" 
                            line4="~Personalized schedule for all parties involved" 
                            line5="~Touch up services upon completion of all other services"
                            line6=""
                            link="/"
                            github="/"
                            type="$280"
                            
                            />
                        </div>

                        <div className="col-span-12">
                        <FeaturedService 
                            title="Bridal Trial"
                            img={project3}
                            line1="~1 - 1.5 hour service"
                            line2="~Provide wedding consultation"
                            line3= ""
                            line4= ""
                            line5= ""
                            line6= ""
                            link="/"
                            github="/"
                            type="$120"
                            
                            />
                        </div>

                        <div className="col-span-12">
                        <FeaturedService 
                            title="Bridesmaids / Mothers"
                            img={project2}
                            line1="~1 hour service"
                            line2="~Eyelash options"
                            line3= ""
                            line4= ""
                            line5= ""
                            line6= ""
                            link="/"
                            github="/"
                            type="$150"
                            
                            />
                        </div>

                        <div className="col-span-12">
                        <FeaturedService 
                            title="Groom"
                            img={project4}
                            line1="~0.5 hour service"
                            line2= "~Concealer / Foundation"
                            line3= ""
                            line4= ""
                            line5= ""
                            line6= ""
                            link="/"
                            github="/"
                            type="$50"
                            
                            />
                        </div>

                        <div className="col-span-12">
                        <FeaturedService 
                            title="Special Event Makeup"
                            img={project6}
                            line1="~1 hour service"
                            line2= "~Birthday, Headshots, Engagement, Maternity , Quinceaneras etc."
                            line3= "~On-Site Travel"
                            line4= "~Lip Touch-Up kit"
                            line5= "~Eyelash options"
                            line6= ""
                            link="/"
                            github="/"
                            type="$150"
                            
                            />
                        </div>

                        <div className="col-span-12">
                        <FeaturedService 
                            title="Additional Info"
                            img={project5}
                            line1="~Optional - Assistant fee -  $150"
                            line2= "~Optional - On-Site Touch-Up Services - $100 per hour (Ideal for Brides wanting touch up before reception)"
                            line3= "~Required - 4 person minimum for Friday and Saturday"
                            line4= "~Required - All parking fees to paid by client"
                            line5= "~Required - Travel Fees based on location for all services"
                            line6= "~Required - Non-Refundable Retainer and signed contract to secure date "
                            link="/"
                            github="/"
                            type=""
                
                            />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default services
