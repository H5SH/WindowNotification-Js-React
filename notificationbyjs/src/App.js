import './App.css';
import React, { useEffect } from 'react'



function App() {

  const array = []
  let value = 0

  
  while(true){
    if(value === 10){
      break
    }
    array.push(value++)
  }


  function incriment(){
    array.push(value++)
    const div = document.getElementById('1')
    const ul = document.getElementById('ul')
    array.map((ar)=>{
      const li = document.createElement('li')
      li.innerHTML = `${ar}`
      ul.appendChild(li)
    })
    
    div.scrollTo(0, div.scrollHeight)
    // if (document.visibilityState !== "visible"){
      notification("Data")
    // }
  
  }

  function notification(msg){
    if(!window.Notification){
      console.log("Does not allow Ntification")
    } else {
      if (Notification.permission === 'granted'){
        var notify = new Notification('Hello', {
            body: msg,
            icon: 'favicon.ico',
            image: 'logo192.png'
          })
          // setTimeout(()=>{
          //   notify.close()
          // },500)
          // notify.addEventListener("show", (e)=>{
          //   console.log("Inside Show")
          //   console.log(e)
          // })
          notify.addEventListener("close", (e)=>{
            console.log("Inside Close")
            console.log(e)
          })
          notify.addEventListener("click", (e)=>{
            console.log("Inside Click")
            e.preventDefault()
            console.log(e)
          })
      } else {
        Notification.requestPermission().then((permission)=>{
          if (permission === 'granted'){
            var notify = new Notification('Hello', {
              body: msg,
              icon: 'favicon.ico',
            })
            
          } else {
            console.log("User blocked")
          }
        }).catch((err)=>{
          console.error(err)
        })
      }
    }
  }


  window.setInterval(()=>{
    incriment()
  },10000)

  useEffect(()=>{
    // incriment()
  },[])



  

  return (
    <div id='body'>
     <div 
     style={{
      width: '50%', 
      height: '500px', 
      overflow: 'scroll', 
      marginLeft: '20%', 
      marginTop: '10%'
      }} 
      id='1' 
      className="App"
       >
      <ul id='ul'>

      </ul>
      </div>
    {/*<audio muted={true} id='sound'>
      <source src='score.wav' />
  </audio>*/}
    {/* <embed src='score.wav' autoStart="false" width='0' height="0" id='sound' muted={true}></embed>/ */}
     {/* <button onClick={incriment}>Change Icon</button>  */}
    </div>
  );
}

export default App;