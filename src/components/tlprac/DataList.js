import React, { useEffect, useState } from 'react';
import axios from 'axios'

function DataList  () {

    const [msg, setMsg] = useState([])
    const [dataimg, setdataImg] = useState("")
    const [loading, setLoading] = useState(false);
    const [productId, setProductId] = useState([])
    // const [data,setData] = useState("")



    // useEffect(()=>{
    //     loadData();
    //     console.log(response)
    // },[]);

    // const loadData = async () =>{
    //     await fetch("https://igre-prod.appspot.com/_ah/api/category/v1/getList?id=6476096291733504")
    //     .then(response=> response.json())
    //     .then(receiveData => setMsg(receiveData));
    // }


    // useEffect(()=>{
    //     const fetchData = async ()=>{
    //         // setLoading(true);
    //         try {
    //             const res = await axios.get(`https://igre-prod.appspot.com/_ah/api/category/v1/getList?id=6476096291733504`)
    //             // setLoading(false);
    //             if(res && res.data.code === "1"){
    //                 const parseJson = JSON.parse(res.data.msg);
    //                 console.log(parseJson[0].products)
    //                             setLoading(true);

    //                 setMsg(parseJson)
    //             }
    //             console.log("read");
    //         }catch (err){
    //             console.log(err);
    //         }
    // }
    // })


    

    
    useEffect(()=>{
        axios
        .get(`https://igre-prod.appspot.com/_ah/api/category/v1/getList?id=6476096291733504`)
        .then(res=>{
            if(res && res.data.code === "1"){ //switch도 가능할까,,,?
                const parseJson = JSON.parse(res.data.msg);
                // res.data.msg --> [category array]
                // [category array ] -> products [ product array ]
                
                // console.log(parseJson[0].products)
                // console.log(parseJson[0].parseJson)
                console.log(parseJson)
                setMsg(parseJson[0].products)
                // console.log({res})

            }
        })
       
        .catch(err=>{
            console.log(err)
        })
    },[])


        // <div className="inSide_slide">
        //                 <div className="slide_img">
        //                     <p key={msg.categoryId} className="imgSize">
        //                         Name 
        //                     </p>
        //                 </div>

        //                 <div className="slide_icon">
        //                     <p>이모티콘</p>
        //                 </div>
        //                 {/* <div className="slide">

        //                 </div> */}
        //                 <div className="slide_text">
        //                     <p>Review : </p>
        //                 </div>
        //             </div>
                    

    return (
        <div>
            <ul>
                <h1>hello world</h1>
              

                {/* <imput>{msg.description}</imput> */}
                {
                    msg.map( msg => (
                        <p key={msg.categoryId}>
                            Name : {msg.name} | Description :{msg.description} | <img src={msg.thumnail}/>
                            </p>
                             
                ))
                }

                   
                        
            {/* <input>{fetchData}</input> */}
            </ul>
        </div>
    );
};

export default DataList;