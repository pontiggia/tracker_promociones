document.querySelector(".form").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  fetch("/api/v1/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error en el login");
      }
      return response.json();
    })
    .then((data) => {
      setTimeout(() => {
        window.location.href = "/home";
      }, 1000);
    })
    .catch((error) => {
      console.log(error);
    });
});
