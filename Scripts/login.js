document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const clave = document.getElementById("clave").value;

    fetch("../backendphp/login.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `email=${encodeURIComponent(email)}&clave=${encodeURIComponent(clave)}`
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById("mensaje").innerText = data;
        window.location.href = "index.html"; 
    })
    .catch(error => {
        console.error("Error:", error);
        document.getElementById("mensaje").innerText = "Error en la conexión.";
    });
});
