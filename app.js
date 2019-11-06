var xhr = new XMLHttpRequest();
var site="http://localhost:8080/superheroes.php";
xhr.open("GET",site,true);
xhr.send();
console.log(xhr.state);

