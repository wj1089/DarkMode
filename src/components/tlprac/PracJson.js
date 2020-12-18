import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PracJson () {

// 첫번쨰 타입변화 연습

    // var data = {
    //     name : "Park",
    //     job : "programmer",
    //     age : 26
    // }
    // console.log(typeof(data))

    // var result = JSON.stringify(data);
    // console.log("변환된 타입은 => : " + typeof(result));
    // console.log("json => string 변환결과 = " + result)

    // var result2 = JSON.parse(result)
    // console.log("변환된 타입은  -> : " + typeof(result2));
    // console.log("string => json변환 결과 = " + result2)


// 두번째 axios 활용 연습
    // const [demo,setDemo] = useState([])


    // useEffect(()=>{
    //     axios
    //     .get(data)
    //     .then(res=>{
    //         const parseJson = JSON.parse(res.data.demo)
    //         console.log(parseJson[0].name)
    //     })
    //     .catch(err=>{
    //         console.log(err)
    //     })
    // },[])

// 세번째 기본적인 String 유무 결과

    const str = `{"data": [{"shoppingCart": "ABC123", "items":["123", "456"]}]}`;
    const obj = {data: [{shoppingCart: 'ABC123', items:['123', '456']}]};

    // console.log(str)
    // console.log(obj.data[0].shoppingCart);
    console.log(JSON.parse(str).data[0].items)





    return (
        <div>
            <h1>hello world</h1>
            {/* <ul>
            {
                demo.map(demo =>(
                    <li key={demo.name}>{demo.name}</li>
                ))
            }
                </ul> */}
        </div>
    );
};

export default PracJson;