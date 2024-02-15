fetch('https://rs94n73o5f.execute-api.us-east-1.amazonaws.com/prod/cloudupdateprod', {
    method: 'POST',
    headers: {
      "Content-type": 'application/json'
    },
  })
 
    .then(response => response.json())
    .then(json => {
    console.log(json);
  });

  fetch('https://rs94n73o5f.execute-api.us-east-1.amazonaws.com/prod/cloudgetprod')
  .then((response => response.json()))  
  .then((data) => {document.getElementById("counter").innerHTML = data})      