import React from 'react'

const Temp = ( {data}) => {
    console.log(data)
    return (
            <div className='section-center'>
                
                {data.map((d) => {
                    const { id, donor, reciever, pin, wheat, rice, milk, fruits } = d;
                    // const {id, user, details} = d;
                    return (
                        <article  className='menu-item'>
                            <div className='item-info'>
                                <header>
                                    <h6>{donor}</h6>
                                    {/* <h6>{user}</h6> */}
                                </header>
                                {/* <p>{details}</p> */}
                                <p className='item-text'>{wheat}kg wheat</p>
                                <p className='item-text'>{rice}kg rice</p>
                                <p className='item-text'>{milk}kg milk</p>
                                <p className='item-text'>{fruits}kg fruits</p>
                            </div>
                        </article>
                    );
                })}
            </div>
    )
}

export default Temp
