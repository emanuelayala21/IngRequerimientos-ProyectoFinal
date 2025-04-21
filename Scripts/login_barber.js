document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const cedula = document.getElementById("cedula").value;
        const clave = document.getElementById("clave").value;

        fetch("../../BackendPHP/login_barbero.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: `cedula=${encodeURIComponent(cedula)}&clave=${encodeURIComponent(clave)}`
        })
        .then(res => res.text())
        .then(data => {
            const mensaje = document.getElementById("mensaje");
            mensaje.innerText = data;
            if (data.trim() === "success") {
                mensaje.innerText = "Inicio de sesión con éxito.";
                mensaje.classList.remove("text-danger");
                mensaje.classList.add("text-success");

                // Redirigir al panel del barbero después de 2 segundos
                setTimeout(() => {
                   window.location.href = "barber_panel.html";
                }, 2000);
            } else {
                mensaje.classList.remove("text-success");
                mensaje.classList.add("text-danger");
            }
        })
        .catch(err => {
            console.error("Error:", err);
            const mensaje = document.getElementById("mensaje");
            mensaje.innerText = "Error al conectar con el servidor.";
            mensaje.classList.remove("text-success");
            mensaje.classList.add("text-danger");
        });
    });
});
