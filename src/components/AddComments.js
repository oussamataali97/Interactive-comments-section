import React from 'react'
import Card from '../UI/Card'
import avatar from '../assets/avatars/image-juliusomo.png'
import {useState, useEffect} from 'react'



function AddComments({dataa,setData}) {
    const [user,setUser]=useState([])
    const [msg,setMsg]=useState('')



    const fetchUser=async()=>{
        const requ=await fetch('http://localhost:9000/currentUser')
        const response=await requ.json()
        setUser(response)
        console.log(user)
    }




    useEffect(()=>{
        fetchUser()
    },[])

    const handleSubmit =(e)=>{
        e.preventDefault()

    }
  return (
   <Card>
    <form onSubmit={handleSubmit}>
        <div className="comments flex justify-between items-start space-x-6">
            <img src={avatar} alt="" className='w-8' />
            <textarea className='flex-1 border-2  border-gray-200 h-20 p-4' value={msg} onChange={(e)=>{setMsg(e.target.value)}} placeholder='Write something ...'></textarea>
            <button className='bg-blue-800 px-6 text-white rounded-md py-2'>Send</button>
        </div>
    </form>
   </Card>
  )
}

export default AddComments