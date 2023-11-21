import React from 'react'
import { useState } from 'react';
  
  const Content = () => {
    // function newWords(){
    //     let words = [ 'trail and error ' , 'slow way' , 'chat gpt ' , 'stack overflow']
    //     let int  = Math.floor(Math.random()*4)
    //     return words[int]
    // }
      
    //   const hadleCLick = () => {
        
    //         console.log('Welcome')
        
    //   }
      // const hadleCLick2 = (name) => {
        
      //       console.log(`Welcome ${name}`)
        
      // }

      // const [count,setCount] = useState(0);
      // function decrimentFunction(){
      //     // setCount(count-1)
      //     // setCount(count-1)
      //     // setCount(count-1)
      //     setCount(count => count-1)
      //     setCount(count => count-1)
      //     setCount(count => count-1)
      // }
      // function incrementFunction(){
      //   // setCount(count+1)
      //   setCount(count => count+1)
      //   setCount(count => count+1)
      //   setCount(count => count+1)
      // }
      
      const [name,setName] = useState('Hari')
      function newWord(){
        let word = ['hari','dinesh','johnson','black','blue','jack']
        let int  = Math.floor(Math.random()*4)
        setName(word[int])
      }


    return (
      
        <main>
            {/* <p> let learn react <button onClick= {()=> newWords() }> press here</button></p> */}
            {/* <button onClick={() => hadleCLick }>Subscribe</button> */}
            {/* <button onClick={() => hadleCLick2('Hari') }>Subscribe2</button>   {/* singe click *
            <button onDoubleClick={() =>  hadleCLick }> Click Double Time </button> */}

            {/* <button onClick ={() => decrimentFunction() }>-</button> */}
            {/* <span>{co/nt}</span> */}
            {/* <button onClick ={() => incrementFunction() }>+</button> */}




            <p> Get new name  { name } </p>
            <button onClick={ newWord }> Change Name</button>
        </main>
 
    )
  }
  
  export default Content
  