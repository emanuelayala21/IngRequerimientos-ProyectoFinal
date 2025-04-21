document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("form").addEventListener("submit", function(e) {
        e.preventDefault();

        const cedula = document.getElementById("cedula").value;
        const nombre = document.getElementById("nombre").value;
        const clave =  document.getElementById("clave").value;

        fetch("../../BackendPHP/register_barbero.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: `cedula=${encodeURIComponent(cedula)}&nombre=${encodeURIComponent(nombre)}&clave=${encodeURIComponent(clave)}`
        })
        .then(res => res.text())
        .then(data => {
            const mensaje = document.getElementById("mensaje");
            mensaje.innerText = data;
            if (data.trim() === "success") {
                mensaje.innerText = "Barbero registrado con éxito.";
                mensaje.classList.remove("text-danger");
                mensaje.classList.add("text-success");

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
            const mensaje = document.getElementById("mensaje");
            mensaje.innerText = "Error al conectar con el servidor.";
            mensaje.classList.remove("text-success");
            mensaje.classList.add("text-danger");
        });
    });
});
