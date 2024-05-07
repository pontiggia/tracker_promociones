document
  .getElementById("submitBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // Get the values from your form
    const site = document.querySelector("#site").value;
    const restaurant = document.querySelector("#restaurant").value;
    const promo = document.querySelector("#promo").value;
    const dateStart = document.querySelector("#dateStart").value;
    const endDate = document.querySelector("#endDate").value;
    const time = document.querySelector("#time").value;

    fetch("/api/v1/products/history", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ site, restaurant, promo, dateStart, endDate, time }),
    })
      .then((response) => response.json())
      .then((data) => {
        const tableContainer = document.getElementById("table__products");
        tableContainer.innerHTML = "";
        // Create table
        const table = document.createElement("table");
        table.className = "table table-striped table-bordered";

        // Create thead
        const thead = document.createElement("thead");
        const trHead = document.createElement("tr");
        [
          "Producto",
          "Precio original",
          "Precio final",
          "Porcentaje",
          "Categoria",
        ].forEach((text) => {
          const th = document.createElement("th");
          th.textContent = text;
          trHead.appendChild(th);
        });
        thead.appendChild(trHead);
        table.appendChild(thead);
        let siteProducts;
        if (site === "Rappi") {
          siteProducts = data.data.rappiProducts;
        } else if (site === "PedidosYa") {
          siteProducts = data.data.pyaProducts;
        }

        // Create tbody
        const tbody = document.createElement("tbody");
        siteProducts.forEach((product) => {
          const trBody = document.createElement("tr");
          [
            product.product_name,
            product.original_price,
            product.discount_price,
            product.percentage,
            product.category,
          ].forEach((text) => {
            const td = document.createElement("td");
            td.textContent = text;
            trBody.appendChild(td);
          });
          tbody.appendChild(trBody);
        });
        table.appendChild(tbody);

        // Append table to table__products
        tableContainer.appendChild(table);
      })
      .catch((error) => console.error("Error:", error));
  });
