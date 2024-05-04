// URLS for different restaurants

// RAPPI URLS

const rappiUrls = {
    mostaza_low: "https://services.rappi.com.ar/api/web-gateway/web/restaurants-bus/store/id/132120/",
    mostaza_medium: "https://services.rappi.com.ar/api/web-gateway/web/restaurants-bus/store/id/209774/",
    mostaza_high: "https://services.rappi.com.ar/api/web-gateway/web/restaurants-bus/store/id/219510",
    mostaza_high_competitive: "https://services.rappi.com.ar/api/web-gateway/web/restaurants-bus/store/id/140374",
    burger_king_low: "https://services.rappi.com.ar/api/web-gateway/web/restaurants-bus/store/id/140418",
    burger_king_medium: "https://services.rappi.com.ar/api/web-gateway/web/restaurants-bus/store/id/124990",
    burger_king_high: "https://services.rappi.com.ar/api/web-gateway/web/restaurants-bus/store/id/125031",
    burger_king_high_competitive: "https://services.rappi.com.ar/api/web-gateway/web/restaurants-bus/store/id/206245"
}

// AUTH RAPPI

const authRappi = {
    Authorization: "Bearer ft.gAAAAABmNqIjbRLZdbAhgAlA2aYWJNeyDbifk4ggqORdilcvlNYMGXoicnPvS4p6VgJxsX4sqhFP6JQ5430lZxKDHvxNJUNsyiL3shYJqQjaz0orjta1mQ8P-DopkFVnVM_MC8jyBkt8w21MKbsPHyeq1lIxjYYi9v0YhyfC67ZnLmqnWxH1Y4u7gb36ml1GcHceaVOZDVVuIxplG6vOOpCxcXEP6FUyTsRsD_WB7r6pzFMVnDH3erxTWO232YHAhmScuWJzlDlsSGKfWOYAmVvAHu4-jGJ27z1aZN3-nE_EOKQ5WJcRvYJml-ljKeZprvUKq5ci-siREOhtC2j5Jf5vTOk6qf_DKdnQCF0C4_rrMTj5y6m4ssc="
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

const mostazaRestaurants = {}

export { rappiUrls, pedidosyaUrls, authRappi };