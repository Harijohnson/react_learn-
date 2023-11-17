function App(){
  function newWords(){
    let words = [ 'trail and error ' , 'slow way' , 'chat gpt ' , 'stack overflow']
    let int  = Math.floor(Math.random()*4)
    return words[int]
  }

  return(
    <>
    Learn react

    <p> lets think { newWords() } to leran react first time using proejct</p>
    
    
    
    </>
  )
}


export default App;