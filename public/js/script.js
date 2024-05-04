document.addEventListener("DOMContentLoaded", function (event) {
  const showNavbar = (toggleId, navId, bodyId, headerId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId),
      bodypd = document.getElementById(bodyId),
      headerpd = document.getElementById(headerId);

    // Validate that all variables exist
    if (toggle && nav && bodypd && headerpd) {
      toggle.addEventListener("click", () => {
        // show navbar
        nav.classList.toggle("show");
        // change icon
        toggle.classList.toggle("bx-x");
        // add padding to body
        bodypd.classList.toggle("body-pd");
        // add padding to header
        headerpd.classList.toggle("body-pd");
      });
    }
  };

  showNavbar("header-toggle", "nav-bar", "body-pd", "header");

  /*===== LINK ACTIVE =====*/
  const linkColor = document.querySelectorAll(".nav_link");

  function colorLink() {
    if (linkColor) {
      linkColor.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    }
  }
  linkColor.forEach((l) => l.addEventListener("click", colorLink));

});

// Create user in admin page

document
  .querySelector(".create__user__form")
  .addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const passwordConfirm = document.querySelector("#passwordConfirm").value;
    const role = document.querySelector("#role").value;

    fetch("/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password, passwordConfirm, role }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en el registro");
        }
        return response.json();
      })
      .then((data) => {
        // Alert message
        alert("Usuario creado correctamente");
        location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  });

// Delete user in admin page

document
  .querySelectorAll(".btn.btn-danger.button__delete")
  .forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();

      const id = button.dataset.userId;

      if (confirm("Seguro que quieres eliminar a este usuario?")) {
        fetch(`/api/v1/users/${id}`, {
          method: "DELETE",
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Error en el borrado");
            }
            if (response.status !== 204) {
              return response.json();
            } else {
              return {};
            }
          })
          .then((data) => {
            alert("Usuario borrado correctamente");
            location.reload();
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  });

// fetch filter products (rappi)
