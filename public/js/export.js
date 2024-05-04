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
    console.log(site, restaurant, promo, dateStart, time);

    // Make the first API call to filter the products
    fetch("/api/v1/products/history", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ site, restaurant, promo, dateStart, endDate, time }),
    })
      .then((response) => response.json())
      .then((filteredProducts) => {
        console.log(filteredProducts);

        // Make the second API call to export the filtered products
        return fetch("/api/v1/products/export", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(filteredProducts),
        });
      })
      .then((response) => {
        if (response.ok) {
          return response.blob();
        } else {
          throw new Error("Error creating file");
        }
      })
      .then((blob) => {
        // Create a link and click it to download the file
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "products.xlsx";
        document.body.appendChild(a);
        a.click();
        a.remove();
      })
      .catch((error) => console.error("Error:", error));
  });
