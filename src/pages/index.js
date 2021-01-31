import React from "react"
import { Link } from "gatsby"
import Header from "/Users/Emma/hello-world/src/pages/components/header"
import Layout from "/Users/Emma/hello-world/src/pages/components/layout"


export default function Home() {
<<<<<<< HEAD
  return <div>
    <style>
    
  
    </style>
    It's me Mario
    <div>This is a test </div>
    
    <div> type button 1 </div>
    <a href="http://google.com">
    <input type="submit" value = "hey you" class />
    </a>

  </div>
        





  

=======

  return (
    <form>
    <button type="submit" class="button2" >Submit</button>
 

    <div style={{ margin: `2rem auto`, maxWidth: 600 , color: `purple` }}>
    <Link to="/contact">Contact</Link>
    <h1>What have you accomplished today?</h1>
    <p>What a world. </p>
    <Layout>
   {
    <img src="https://images.unsplash.com/photo-1540991825428-5b54b09f7338?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1197&q=80" alt="" class="dogpicture" />
  }
    </Layout>
  </div>
  </form>
  );
>>>>>>> dcc72adab6c54bf22755fcc94b44c174f8688506
}
