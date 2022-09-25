import React from 'react'
import Card from '../UI/Card'
import avatar from '../assets/avatars/image-juliusomo.png'
import { FaShare } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import { useState } from 'react'

function Subcomments({ ele }) {

    const [show, setShow] = useState(false)
    

    const toggleModal = () => {
        setShow(!show)
    }

    if (ele.replies.length != 0) {
        return (

            ele.replies.map(reply => (

                <Card key={reply.id}>
                    <div className=''>
                        <div className="containerr flex flex-col-reverse md:flex-row   items-center space-x-5  relative">
                            <div className="likes bg-grayishBlue md:px-2 md:py-7 space-x-6 md:space-x-0 flex md:flex-col self-start text-lg justify-center items-center rounded-md ">
                                <button className='text-blue-300' >+</button>
                                <p className='text-blue-900'>{reply.score}</p>
                                <button className='text-blue-300'>-</button>
                            </div>
                            <div className="body w-full">
                                <div className="userstates flex justify-between">
                                    <div className="left flex space-x-4  justify-center items-center">
                                        <img src={avatar} alt='pic' className='w-10' />
                                        <p className='font-[600]'>{reply.user.username}</p>
                                        <p>{ele.createdAt}</p>
                                    </div>
                                    <div className="right text-Darkblue font-[600]  absolute bottom-0 right-0 md:top-0 ">
                                        <button className=' text-red-400 mr-3  items-center ' onClick={toggleModal}> <MdDelete className='inline mr-1' />Delete</button>
                                        <button className=' items-center'> <FaShare className='inline mr-1' />Reply</button>
                                      
                                    </div>

                                </div>
                                <p className='text-gray-600 p-3 text-[16px]'> {reply.content} </p>
                            </div>
                        </div>
                        
                    </div>
           

                </Card>



            ))
            




        )



    }

}


export default Subcomments