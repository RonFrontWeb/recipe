import './FormRecipe.scss';
import {useForm } from "react-hook-form";
import axios from "axios";
import { useEffect, useState } from 'react';


function FormRecipe() { 


  const [titleValue, setTitleValue] = useState("PEKDUCK");


  var {register, handleSubmit, formState:{errors} } = useForm();

  // useEffect(async function() {
  //   var { data } = await axios.post("http://localhost:1337/auth/local", {
	// identifier: "albert@recipe-api.com",
	// password: "123Albert123"
  //   });

  //   console.log(data);  
  //     },[] );
      
      useEffect(async function() {
        var { data } = await axios.get("http://localhost:1337/recipes");
    
        console.log(data);  
          },[] );

  function onSubmit(data) {
    console.log(data);
  }

  return (
      <form className="formRecipe" onSubmit={handleSubmit(onSubmit)}>
       <label htmlFor="title">Name of recipe </label>
        <input
        onChange={ e => setTitleValue(e.target.value)}
        value={titleValue}
        type="text" 
        id="title" 
        // {...register("title", {required:true})}
         />
      {errors.name && <span>Gør det nu rigtigt</span>}
      </form>
  );
}

export default FormRecipe;
