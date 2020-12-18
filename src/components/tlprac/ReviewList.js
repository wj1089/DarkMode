import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ReviewList = () => {

// const [msg, setMsg] = useState([]);
const [item, setItem] = useState([]);

useEffect(()=>{
    axios
    .get(`https://childsnack-test.appspot.com/_ah/api/review/v1/getReviewList?count=5&startCursor=0`)
    .then(res=>{
        if(res && res.data.code === "1"){
            const parseJson = JSON.parse(res.data.msg)
            const aaaa = parseJson.item

            // console.log(parseJson)
            // console.log(parseJson.item[0].product)
            console.log(aaaa)

            // setMsg(parseJson[0].item[0].product)
            setItem(aaaa);
        }
    })
    .catch(error=>{
        console.log(error)
    })
},[])

    return (
        <div>
            <h1>hello world</h1>
            {
                item.map(item=>(
                    <p key={item.id}>
                     Name : {item.point} |  img : <img src={item.product.thumnail}/>
                    </p>
                ))
            }
        </div>
    );
};

export default ReviewList;