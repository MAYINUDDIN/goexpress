import React from 'react';
import parcel from '../../assets/service/parcel.png'
import service from '../../assets/service/service_icon.jpg'
import delevery from '../../assets/service/fastDelevery.jpg'
import payment from '../../assets/service/payment.png'

const Delevery = () => {
    return (
        <div class="hero min-h-screen bg-base-100 px-16">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={parcel} class="sm:max-w-sm lg:max-w-lg p-5" />
                <div>
                    <div class="tooltip tooltip-open tooltip-primary p-3justify-left" data-tip="Why We are Best?">
                        <h1 class="font-bold drop-shadow text-3xl">Experiences in Courier Service</h1>
                        <p className='text-justify mt-2'>Doloribus debitis dolores amet, minus qui eaque itaque, doloremque at ipsa ab reiciendis assumenda et labore asperiores, cumque impedit! Corrupti, alias laboriosam!Doloribus debitis dolores amet, minus qui eaque itaque, doloremque at ipsa ab reiciendis assumenda et labore asperiores, cumque </p>
                    </div>

                    <div className='  lg:flex mt-5'>
                        <div className='rounded-lg p-1 mt-4 shadow bordered border-2 hover:skew-y-3 shadow-lg'>
                            <img className='sm:w-16 lg:w-52' src={service} alt="" />
                        </div>
                        <div className=''>
                            <h1 className='text-left ml-5 font-bold text-2xl mt-3 drop-shadow'>Secure Services</h1>
                            <p className='text-justify ml-5'>Ut recusandae non veniam obcaecati, sunt earum atque cumque, alias quae molestiae quo, ad debitis saepe.
                                Ut recusandae non veniam obcaecati, sunt earum atque cumque, alias quae </p>
                        </div>
                    </div>
                    <div className='lg:flex mt-5'>
                        <div className='rounded-lg p-1 mt-4 shadow bordered border-2 hover:skew-y-3 shadow-lg'>
                            <img className='w-32' src={delevery} alt="" />
                        </div>
                        <div className=''>
                            <h1 className='text-left ml-5 font-bold text-2xl mt-3 drop-shadow'>Fast Delivery</h1>
                            <p className='text-justify ml-5'>Ut recusandae non veniam obcaecati, sunt earum atque cumque, alias quae molestiae quo, ad debitis saepe.
                            </p>

                        </div>
                    </div>
                    <div className='lg:flex mt-5'>
                        <div className='rounded-lg p-1 mt-4 shadow bordered border-2 hover:skew-y-3 shadow-lg'>
                            <img className='w-32 h-16 p-2' src={payment} alt="" />
                        </div>
                        <div className=''>
                            <h1 className='text-left ml-5 font-bold text-2xl mt-3 drop-shadow'>Lowest Cost</h1>
                            <p className='text-justify ml-5'>Ut recusandae non veniam obcaecati, sunt earum atque cumque, alias quae molestiae quo, ad debitis saepe </p>

                        </div>

                    </div>

                </div>
            </div>



        </div>

    );
};

export default Delevery;