import React from 'react'
  
  const Content = () => {
    function newWords(){
        let words = [ 'trail and error ' , 'slow way' , 'chat gpt ' , 'stack overflow']
        let int  = Math.floor(Math.random()*4)
        return words[int]
      }
    return (
      <div>
        <p> let learn react { newWords() }</p>
      </div>
    )
  }
  
  export default Content
  