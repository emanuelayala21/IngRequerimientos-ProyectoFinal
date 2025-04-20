document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const cedula = document.getElementById("cedula").value;
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const celular = document.getElementById("celular").value;
    const clave =  document.getElementById("clave").value;

    fetch("../backendphp/register.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `cedula=${cedula}&nombre=${nombre}&email=${email}&celular=${celular}&clave=${clave}`,
    })
    .then(res => res.text())
    .then(data => {
        alert(data);
        document.getElementById("registerForm").reset();

        window.location.href = "login.html"; 

        localStorage.setItem("userID", cedula);
    })
    .catch(err => console.error("Error:", err));
});