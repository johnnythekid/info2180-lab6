var xhr=new XMLHttpRequest();
var url = "superheores.php"; 
xhr.onreadystatechange = doSomething; 
xhr.open('GET', url); 
xhr.send();
function doSomething() { 
    if (xhr.readyState === XMLHttpRequest.DONE) { 
        if (xhr.status === 200) { 
            var response = xhr.responseText; 
             alert(response); 
        }  else{
            alert('There was a problem with the request.'); 
            console.log(xhr.status);

        }
    }
}