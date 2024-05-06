// URLS for different restaurants

// RAPPI URLS

const rappiUrls = {
    mostaza_low: "https://services.rappi.com.ar/api/web-gateway/web/restaurants-bus/store/id/132120/",
    mostaza_medium: "https://services.rappi.com.ar/api/web-gateway/web/restaurants-bus/store/id/132130/",
    mostaza_high: "https://services.rappi.com.ar/api/web-gateway/web/restaurants-bus/store/id/142497/",
    mostaza_high_competitive: "https://services.rappi.com.ar/api/web-gateway/web/restaurants-bus/store/id/140374",
    burger_king_low: "https://services.rappi.com.ar/api/web-gateway/web/restaurants-bus/store/id/124980/",
    burger_king_medium: "https://services.rappi.com.ar/api/web-gateway/web/restaurants-bus/store/id/124990",
    burger_king_high: "https://services.rappi.com.ar/api/web-gateway/web/restaurants-bus/store/id/125031",
    burger_king_high_competitive: "https://services.rappi.com.ar/api/web-gateway/web/restaurants-bus/store/id/206245"
}

// AUTH RAPPI

const authRappi = {
    Authorization: "Bearer ft.gAAAAABmN_gg6Ux4kUTlAI9-QoawhYq39sbp9GxPA2Nq8w9-rF50BsFqcO6mixDjdc8VEW9y-M967DRXmRfI0kDOG4LRf_IOsD-WdBChbaoeLTLDXjbM1CTvkxD_WbENSnjqJPOny_Iumf4wFk9yNtfX8dlm8QSQ4uNWeM81dKc6WQwMFkvQY3SToErOn-Ick1-Hw0ek0ss9ROk_TDzOrscu51GFksG_HYmX-P0YOZModmnd7rbBKhNXj9ZSXnquIyP3I8a9efTpD_FoW9rcB7sUOvYplykJZGiQKMHRPiKvdKmk8P5K_V7cqI3vtRwWjqfhtL1DmbVrK9Gtf56H6Cgoktzsj9hNvy3neCghk2RXCZdDCfiS2Aw="
}

// PEDIDOSYA URLS

const pedidosyaUrls = {
    mostaza_low: "https://www.pedidosya.com.ar/v2/niles/partners/390551/menus?isJoker=false&occasion=DELIVERY",
    mostaza_medium: "https://www.pedidosya.com.ar/v2/niles/partners/146815/menus?isJoker=false&occasion=DELIVERY",
    mostaza_high: "https://www.pedidosya.com.ar/v2/niles/partners/102616/menus?isJoker=false&occasion=DELIVERY",
    mostaza_high_competitive: "https://www.pedidosya.com.ar/v2/niles/partners/228914/menus?isJoker=false&occasion=DELIVERY",
    burger_king_low: "https://www.pedidosya.com.ar/v2/niles/partners/6316/menus?isJoker=false&occasion=DELIVERY",
    burger_king_medium: "https://www.pedidosya.com.ar/v2/niles/partners/17003/menus?isJoker=false&occasion=DELIVERY",
    burger_king_high: "https://www.pedidosya.com.ar/v2/niles/partners/53544/menus?isJoker=false&occasion=DELIVERY",
    burger_king_high_competitive: "https://www.pedidosya.com.ar/v2/niles/partners/189262/menus?isJoker=false&occasion=DELIVERY"

}

const mostazaRestaurants = {
    "medium": {
        "address": "Olga Cossettini 800",
        "id": 146815
    },
    "high": {
        "address": "Avenida Presidente Juan Domingo Perón 1205",
        "id": 102616
    }
    

}

const burgerKingRestaurants = {
    "Obelisco": 6316
}

export { rappiUrls, pedidosyaUrls, authRappi };