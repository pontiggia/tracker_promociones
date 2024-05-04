import { authRappi } from "./selectors.js";

// script to get the menu from Rappi API

const getMenuRappi = async (url) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: authRappi.Authorization,
      },
      body: JSON.stringify({
        lat: -34.589591,
        lng: -58.439876,
        store_type: "restaurant",
        is_prime: false,
        prime_config: {
          unlimited_shipping: false,
        },
      }),
    });

    const data = await response.json();

    if (!data.corridors) {
      throw new Error("No corridors found in the data.");
    }

    const content = data.corridors.flatMap((corridor) =>
      corridor.products.map((product) => {
        const isPromo =
          /2x1|OFF/i.test(product.name) || product.discount_from_go;

        return {
          product_name: product.name,
          original_price: product.real_price,
          discount_price: product.price,
          percentage: product.discount_percentage,
          category: corridor.name,
          isPromo,
          site: "Rappi",
          restaurant: data.name
        };
      })
    );
    return content;
  } catch (error) {
    console.error("Failed to fetch menu from Rappi:", error);
    throw error; // Rethrowing the error after logging it to handle it further up the call stack
  }
};

export default getMenuRappi;
