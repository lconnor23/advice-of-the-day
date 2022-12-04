

  fetch(`https://api.adviceslip.com/advice`)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data)
    document.querySelector('p').innerText = data.slip.advice
  })
  
  

  
  