import React from "react"



export default function Home() {

  return (
    <form>
    <button type="submit" class="button2" >Submit</button>
 

    <div style={{ margin: `2rem auto`, maxWidth: 600 , color: `purple` }}>
   
    <h1>What have you accomplished today? help</h1>
    <p>What a world. </p>
  
   {
    <img src="https://images.unsplash.com/photo-1540991825428-5b54b09f7338?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1197&q=80" alt="" class="dogpicture" />
  }
  
  </div>
  </form>
  );
}
