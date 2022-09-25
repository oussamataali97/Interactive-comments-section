import React from 'react'
import {useState, useEffect} from 'react'
import AddComments from './AddComments'
import CommentsList from './CommentsList'
import Subcomments from './Subcomments'

function Comments() {
    const [data,setData]=useState([])
    

    useEffect(()=>{
        fetchData()
    },[])



    const fetchData =async()=>{
        const fetchDa =await fetch('http://localhost:9000/comments')
        const response =await fetchDa.json()
        setData(response)
     
    }
  return (
    <div className="max-w-3xl mx-auto p-2">
        {
            data.map((ele,index)=>(
                <div className="cont" key={index}>
                <CommentsList ele={ele} key={ele.id} />
                <div className="md:max-w-2xl max-w-[26rem] ml-auto p-2 border-l-2">
                <Subcomments ele={ele} key={ele.id}/>
                </div>
                </div>
            ))
        }
                <AddComments dataa={data} setData={setData}/>

    </div>
  )
}

export default Comments