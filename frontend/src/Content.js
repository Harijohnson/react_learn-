import React from 'react'
  
  const Content = () => {
    function newWords(){
        let words = [ 'trail and error ' , 'slow way' , 'chat gpt ' , 'stack overflow']
        let int  = Math.floor(Math.random()*4)
        return words[int]
    }
      
      const hadleCLick = () => {
        
            console.log('Welcome')
        
      }
      const hadleCLick2 = (name) => {
        
            console.log(`Welcome ${name}`)
        
      }
      
    return (
      
        <main>
            <p> let learn react { newWords() }</p>
            <button onClick={() => hadleCLick }>Subscribe</button>
            <button onClick={() => hadleCLick2('Hari') }>Subscribe2</button>   {/* singe click */}
            <button onDoubleClick={() =>  hadleCLick }> Click Double Time </button>
        </main>
 
    )
  }
  
  export default Content
  