import React, { useEffect, useState } from 'react';
import Axios from "axios";



const Apiprac = () => {

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(()=>
    Axios.get("https://childsnack-test.appspot.com/_ah/api/category/v1/getAllList")
    .then(response => {
            
            var json = {response.data.msg};
            console.log(json);
            setProduct(response.data.setup + " ... " + response.data.something);
        }
    )
    );


    return (
        <div>
            {/* <ul>
            {product.map(user => (
          <li key={product.id}>
            {product.username} ({product.name})
          </li>
        ))}
      </ul> */}
      <button onClick={fetch}>다시 불러오기</button>
        </div>
    );
};

export default Apiprac;