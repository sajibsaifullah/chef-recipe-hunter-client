import React from 'react';

const Cuisine = () => {
    return (
        <div className='container ms-lg-5 mt-4'>
            <h3 className='text-center mb-3'>Browse by Cuisine</h3>
            <div className="row row-cols-1 row-cols-lg-6">
                <div className='col text-center card pt-2 me-4'>
                    <img className='w-100 rounded' src="https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg" alt="" />
                    <h5 className='mt-2 mb-0'>Bangladeshi</h5>
                    <p>(3 recipes)</p>
                </div>
                <div className='col text-center card pt-2 me-4'>
                    <img className='w-100 rounded' src="https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg" alt="" />
                    <h5 className='mt-2 mb-0'>Indian</h5>
                    <p>(3 recipes)</p>
                </div>
                <div className='col text-center card pt-2 me-4'>
                    <img className='w-100 rounded' src="https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg" alt="" />
                    <h5 className='mt-2 mb-0'>Italian</h5>
                    <p>(3 recipes)</p>
                </div>
                <div className='col text-center card pt-2 me-4'>
                    <img className='w-100 rounded' src="https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg" alt="" />
                    <h5 className='mt-2 mb-0'>Mexican</h5>
                    <p>(3 recipes)</p>
                </div>
                <div className='col text-center card pt-2'>
                    <img className='w-100 rounded' src="https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg" alt="" />
                    <h5 className='mt-2 mb-0'>Japanese</h5>
                    <p>(3 recipes)</p>
                </div>
                {/* <div className='col text-center card pt-2 me-2'>
                    <img className='w-100 rounded' src="https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg" alt="" />
                    <h5 className='mt-2 mb-0'>Korean</h5>
                    <p>(3 recipes)</p>
                </div> */}
            </div>
            
        </div>
    );
};

export default Cuisine;