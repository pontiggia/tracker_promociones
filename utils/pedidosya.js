// script to get the menu from PedidosYa

const getMenuPedidosya = async (url) => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (!data.sections) {
      throw new Error("No sections found in data.");
    }

    const content = data.sections.flatMap((section) =>
      section.products.map((product) => {
        const { name, price } = product;
        const { originalPrice, finalPrice, discount } = price;

        // Determining if there is a promo based on discount presence or special naming
        const isPromo = discount !== null || name.includes("OFF");
        const percentage = discount ? discount.percentage : null;

        return {
          product_name: name,
          original_price: originalPrice || finalPrice,
          discount_price: finalPrice,
          isPromo,
          percentage,
          category: section.name,
          site: "PedidosYa",
          restaurant: data.name,
        };
      })
    );

    return content;
  } catch (error) {
    console.error("Failed to fetch menu:", error);
    throw error; // Rethrowing the error after logging it
  }
};

export default getMenuPedidosya;
