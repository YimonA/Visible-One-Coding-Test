import React from 'react'

const About = () => {
  return (
    <section className=' container mx-auto py-20'>
        <div className=' flex items-stretch justify-between'>
            <div>
                <h1 className=' .OS-36 font-bold text-black mb-5'>ABOUT <span className=' text-[#2DC4EA]'>TRIPPRO </span> </h1>
                <p className=" w-[665px] h-[157px]">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita</p>
                <button className='bg-gradient-to-r from-[#3AE7AB] to-[#2DC4EA] uppercase text-white rounded-[50px] w-[280px] h-[74px] my-2'>tour to website</button>
            </div>
            <div></div>
        </div>
    </section>
  )
}

export default About