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
    mostaza_low: "https://www.pedidosya.com.ar/v2/niles/partners/55837/menus?isJoker=false&occasion=DELIVERY",
    mostaza_medium: "https://www.pedidosya.com.ar/v2/niles/partners/146815/menus?isJoker=false&occasion=DELIVERY",
    mostaza_high: "https://www.pedidosya.com.ar/v2/niles/partners/102616/menus?isJoker=false&occasion=DELIVERY",
    mostaza_high_competitive: "https://www.pedidosya.com.ar/v2/niles/partners/407732/menus?isJoker=false&occasion=DELIVERY",
    burger_king_low: "https://www.pedidosya.com.ar/v2/niles/partners/6316/menus?isJoker=false&occasion=DELIVERY",
    burger_king_medium: "https://www.pedidosya.com.ar/v2/niles/partners/16725/menus?isJoker=false&occasion=DELIVERY",
    burger_king_high: "https://www.pedidosya.com.ar/v2/niles/partners/6431/menus?isJoker=false&occasion=DELIVERY",
    burger_king_high_competitive: "https://www.pedidosya.com.ar/v2/niles/partners/128507/menus?isJoker=false&occasion=DELIVERY"

}

const pedidosYaMostaza = {
    "low": {
        "address": "Av. Santa Fe 3253",
        "id": 55837,
        "zone": "Mostaza Alto Palermo"
    },
    "medium": {
        "address": "Olga Cossettini 800",
        "id": 146815,
        "zone": "Mostaza Puerto Madero"
    },
    "high": {
        "address": "Avenida Presidente Juan Domingo Perón 1205",
        "id": 102616,
        "zone": "Mostaza San Miguel"
    },
    "high_competitive": {
        "address": "Av. Rivadavia 2261",
        "id": 407732,
        "zone": "Mostaza Once"
    }
}

const pedidosYaBurgerKing = {
    "low": {
        "address": "Carlos pelegrini 451",
        "id": 6316,
        "zone": "Burger king Obelisco"
    },
    "medium": {
        "address": "Av. Santa Fe 4190",
        "id": 16725,
        "zone": "Burger king Plaza Italia"
    },
    "high": {
        "address": "Av. Córdoba 2332",
        "id": 6431,
        "zone": "Burger king Facultad de medicina"
    },
    "high_competitive": {
        "address": "Av. Bartolomé Mitre 2729, Moreno",
        "id": 128507,
        "zone": "Burger King Moreno"
    }
    
}


export { rappiUrls, pedidosyaUrls, authRappi, pedidosYaMostaza, pedidosYaBurgerKing};