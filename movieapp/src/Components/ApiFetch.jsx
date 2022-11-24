import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function ApiFetch() {
  const [data, setdata] = useState([]);
  const [page, setpage] = useState(1);

  function fetchdata(page) {
    fetch(
      `https://fathomless-everglades-39788.herokuapp.com/api/movies?_limit=9&_page=${page}`
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

      Meaning of ""putting page into array is"" this when we change page value
      useEffect call and rendor that value and then Pagination work..

  */

  return (
    <div className="parent">
      <div className="maindiv">
        <h1 className="h1">Movie APP using React with Pagination 😎</h1>
        <br />
        <button
          className="headerbtn"
          disabled={page == 1}
          onClick={() => setpage(page - 1)}
        >
          Pevious
        </button>
        <button
          className="headerbtn"
          disabled={page.length >= 0}
          onClick={() => setpage(page + 1)}
        >
          Next
        </button>
        <div className="rendordiv">
          {data.map((el) => (
            <div key={el.id} className="contentdivv">
              <img className="mainimage" src={el.poster} alt="" />
              <br />
              <br />
              <h3 className="movietitle">{el.title}</h3>
              <br />
              <h4>{el.genres[0]}</h4>
              <br />
              <h5>Rating:- {el.rating}</h5>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ApiFetch;
