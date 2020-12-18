import React, { useEffect, useState } from 'react';
import axios from 'axios'
const Axios = () => {

    const [name, setName] = useState('');

    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get("https://childsnack-test.appspot.com/_ah/api/category/v1/getAllList");
            setName(request.data.results);
            return request;
        }
        fetchData();
    }, []);
    console.log(name);

    return (
        <div>
            <ul>
                {
                    name.map(name=> <li key={name.name}>{name.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Axios;