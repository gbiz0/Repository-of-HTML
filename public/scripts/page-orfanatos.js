// tipos de dados
// Strig ""
// Number 01
// Object {} Boolean true or false
// Arrey

// create map
const map = L.map("mapid").setView([-20.2807833, -50.25493], 15);

//
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// create icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

// create popup overlay
const popup = L.popup({
  closeButton: false,
  className: "map-popup",
  minWidth: 240,
  minHeight: 240,
}).setContent('Associação Assistencial Nosso Lar <a href="orfanatos.html1?id=1"class="choose-orfanatos"> <img src= "./public/images/arrow-white.svg"> </a>')

L.marker([-20.2788197,-50.23552], { icon })
  .addTo(map)
  .bindPopup(popup)
