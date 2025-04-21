document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const clave = document.getElementById("clave").value;

    fetch("../../BackendPHP/login.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `email=${encodeURIComponent(email)}&clave=${encodeURIComponent(clave)}`
    })
    .then(response => response.text())
    .then(data => {
        const mensaje = document.getElementById("mensaje");
        mensaje.innerText = data;
        if (data.trim() === "success") {
            mensaje.innerText = "Inicio de sesion con éxito.";
            mensaje.classList.remove("text-danger");
            mensaje.classList.add("text-success");

            // Redirigir a login luego de 2 segundos
            setTimeout(() => {
                window.location.href = "../index.html";
            }, 2000);
        } else {
            mensaje.classList.remove("text-success");
            mensaje.classList.add("text-danger");
        }
    })
    .catch(error => {
        console.error("Error:", error);
        document.getElementById("mensaje").innerText = "Error al conectar con el servidor.";
        mensaje.classList.remove("text-success");
        mensaje.classList.add("text-danger");
    });
});