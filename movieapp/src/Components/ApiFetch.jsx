import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function ApiFetch() {
  const [data, setdata] = useState([]);
  const [page, setpage] = useState(1)

  function fetchdata(page) {
    fetch(
      `https://fathomless-everglades-39788.herokuapp.com/api/movies?_limit=8&_page=${page}`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setdata(res);
      });
  }

  /* 
  useEffect is --> The useEffect Hook allows you to perform an action on every rendor.
  Some examples of useEffects are: fetching data and updating onto DOM when page reload 
  according to given progarame..
  useEffect runs on every render. That means that when the count changes, a render happens, 
  which then triggers another effect.

  But when you pass dependancy array it call only once and if you can pass any value in
  that array that useEffect call on every page changes value 
  */

  useEffect(() => {
    fetchdata(page);
  }, [page]);


  /* 
  

  --> How pagination Works in that application

      When we click on that particluar page using Pre and Next button
      then page state changes so according to that we change into same page
      in API as well then data start changing into console but not
      DOM 

      for changing dom we need to change useEffect dependacy and pass page into
      inside that useEffect as well

      Meaning

  */


  return (
    <div>
      {data.map((el) => (
        <div>
          <button disabled={page==1} onClick={()=>setpage(page-1)}>Pevious</button>
          <button disabled={page.length>=0}  onClick={()=>setpage(page+1)}>Next</button>
          <p>{el.title}</p>
          <img src={el.poster} alt="" />
        </div>
      ))}
    </div>
  );
}

export default ApiFetch;
