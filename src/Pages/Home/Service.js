import React from 'react';
import service from '../../assets/service/service.jpg'
import service1 from '../../assets/service/service1.jpg'
import service2 from '../../assets/service/service2.jpg'


const Service = () => {
    return (
        <div className=''>
            <div className='grid px-6 lg:px-16 grid-col-4 lg:grid-cols-3 gap-2  mt-5 mb-5 flex justify-center'>
                <div class="card bordered rounded w-96 bg-base-100 shadow-xl">
                    <figure><img className='h-56 w-96' src={service} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title font-bold text-primary drop-shadow ">
                            সারাদেশে <span className='text-success'>ডেলিভারি</span>
                            <div class="badge badge-secondary text-white ">মাত্র ৭০ টাকায়</div>
                        </h2>
                        <p className='text-center'> <span className='text-secondary  text-lg font-bold'>৩০ টাকায় ঢাকাতে</span></p>
                        <p className='text-center'> <span className='text-dark text-sm'>আমরাই অল্প সময়ে ডেলিভারি নিশ্চিত করে থাকি</span></p>

                        <div class="card-actions justify-center">
                            <button className='btn btn-primary btn-md rounded px-12 mt-2 ' >কুরিয়ার করুন</button>

                        </div>
                    </div>
                </div>

                <div class="card bordered rounded w-96 bg-base-100 shadow-xl">
                    <figure><img className='h-56 w-96' src={service1} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title font-bold text-primary drop-shadow ">
                            সারাদেশে <span className='text-success'>ডেলিভারি</span>
                            <div class="badge badge-secondary text-white ">মাত্র ৭০ টাকায়</div>
                        </h2>
                        <p className='text-center'> <span className='text-secondary  text-lg font-bold'>৩০ টাকায় ঢাকাতে</span></p>
                        <p className='text-center'> <span className='text-dark text-sm'>আমরাই অল্প সময়ে ডেলিভারি নিশ্চিত করে থাকি</span></p>

                        <div class="card-actions justify-center">
                            <button className='btn btn-primary btn-md rounded px-12 mt-2 ' >কুরিয়ার  করুন</button>

                        </div>
                    </div>
                </div>

                <div class="card bordered rounded w-96 bg-base-100 shadow-xl">
                    <figure><img className='h-56 w-96' src={service2} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title font-bold text-primary drop-shadow ">
                            সারাদেশে <span className='text-success'>ডেলিভারি</span>
                            <div class="badge badge-secondary text-white ">মাত্র ৭০ টাকায়</div>
                        </h2>
                        <p className='text-center'> <span className='text-secondary  text-lg font-bold'>৩০ টাকায় ঢাকাতে</span></p>
                        <p className='text-center'> <span className='text-dark text-sm'>আমরাই অল্প সময়ে ডেলিভারি নিশ্চিত করে থাকি</span></p>

                        <div class="card-actions justify-center">
                            <button className='btn btn-primary btn-md rounded px-12 mt-2 ' >কুরিয়ার  করুন</button>

                        </div>
                    </div>
                </div>

            </div>


        </div >
    );
};

export default Service;