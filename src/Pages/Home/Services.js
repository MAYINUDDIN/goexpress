import React from 'react';
import service from '../../assets/service/service.jpg'
import service1 from '../../assets/service/service1.jpg'
import service2 from '../../assets/service/service2.jpg'
import night from '../../assets/service/overNight.png'
import express from '../../assets/service/fstdelevry.png'
import standard from '../../assets/service/fdelevery.jpg'

const Services = () => {
    return (
        <div className=' py-8 bg-[#01579b]' style={{ marginTop: '-20px', marginBottom: '60px' }}>

            <h1 className='text-white font-bold text-2xl drop-shadow-xl btn btn-primary px-16'>SERVICES</h1>
            <h2 className='text-white  text-2xl drop-shadow-lg mt-2'>What We Serve</h2>
            <p className='text-white px-52 drop-shadow-lg text-justify'>Ut recusandae non veniam obcaecati, sunt earum atque cumque, alias quae molestiae quo, ad debitis saepeUt recusandae non veniam obcaecati, sunt earum atque cumque, alias quae  molestiae quo, ad debitis saepe molestiae quo, ad debitis saepe</p>


            <div className='grid px-6 lg:px-16 py-8 grid-col-4 lg:grid-cols-3 gap-2  mt-5 mb-5 flex justify-center'>
                <div class="card w-96 bg-[#006db3]  border-2 border-blue-500 shadow-lg">
                    <figure class="px-10 pt-10">
                        <img src={night} alt="Night" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h1 class="card-title text-2xl text-white drop-shadow font-bold">Over Night Courier</h1>
                        <p className=' text-white'>Ut recusandae non veniam obcaecati, sunt earum atque cumque, alias quae molestiae quo, ad debitis saepeUt recusandae non veniam obcaecati, sunt earum atque cumque, alias quae  molestiae quo,  </p>
                        <div class="card-actions">
                            <button class="btn btn-primary mt-4">COURIER NOW</button>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-[#006db3]  border-2 border-blue-500 shadow-lg">
                    <figure class="px-10 pt-10">
                        <img src={express} alt="express courier" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h1 class="card-title text-2xl text-white drop-shadow font-bold">Express Courier</h1>
                        <p className=' text-white'>Ut recusandae non veniam obcaecati, sunt earum atque cumque, alias quae molestiae quo, ad debitis saepeUt recusandae non veniam obcaecati, sunt earum atque cumque, alias quae  molestiae quo,  </p>
                        <div class="card-actions">
                            <button class="btn btn-primary mt-4">COURIER NOW</button>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-[#006db3]  border-2 border-blue-500 shadow-lg">
                    <figure class="px-10 pt-10">
                        <img src={standard} alt="standard" class="rounded-xl h-40 w-64" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h1 class="card-title text-2xl text-white drop-shadow font-bold">Standard Courier</h1>
                        <p className=' text-white'>Ut recusandae non veniam obcaecati, sunt earum atque cumque, alias quae molestiae quo, ad debitis saepeUt recusandae non veniam obcaecati, sunt earum atque cumque, alias quae  molestiae quo,  </p>
                        <div class="card-actions">
                            <button class="btn btn-primary mt-4">COURIER NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Services;