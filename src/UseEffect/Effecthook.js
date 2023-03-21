import React, { useEffect, useState } from "react";
import axios from "axios";

function Effecthook() {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);
  const apiUrl = "https://jsonplaceholder.typicode.com/comments"

  //using fetch
  // useEffect(()=>{
  //   fetch(apiUrl)
  //   .then((resp)=> resp.json())
  //   .then((comments)=>{console.log(comments)})
  //   .catch((err)=>{console.log(err);})
  // },[])
  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data[count].email);
        console.log("API WAS CALLED",count,response[count]);
      });
  }, [count]);

  //using async await 
  useEffect(()=>{
    try {
      const fetchData = async()=>{
        const response = await axios.get(apiUrl);
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  },[])

  return (
    <div>
      Hello World
      <h1>{data}</h1>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
    </div>
  );
}

export default Effecthook;
