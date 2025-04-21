document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    const cedula = document.getElementById("cedula").value;
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const celular = document.getElementById("celular").value;
    const clave = document.getElementById("clave").value;

    fetch("../../BackendPHP/register.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `cedula=${encodeURIComponent(cedula)}&nombre=${encodeURIComponent(nombre)}&email=${encodeURIComponent(email)}&celular=${encodeURIComponent(celular)}&clave=${encodeURIComponent(clave)}`
    })
    .then(response => response.text())
    .then(data => {
        const mensaje = document.getElementById("mensaje");
        mensaje.innerText = data;
        if (data.trim() === "success") {
            mensaje.innerText = "Usuario registrado con éxito.";
            mensaje.classList.remove("text-danger");
            mensaje.classList.add("text-success");

            // Redirigir a login luego de 2 segundos
            setTimeout(() => {
                window.location.href = "login.html";
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
