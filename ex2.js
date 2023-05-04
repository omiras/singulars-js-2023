const countries = [
  { name: "España", continent: "Europa" },
  { name: "Brasil", continent: "América del Sur" },
  { name: "Estados Unidos", continent: "América del Norte" },
  { name: "China", continent: "Asia" },
  { name: "Australia", continent: "Oceanía" },
  { name: "Egipto", continent: "África" },
  { name: "Canadá", continent: "América del Norte" },
  { name: "Italia", continent: "Europa" },
  { name: "México", continent: "América del Norte" },
  { name: "Argentina", continent: "América del Sur" },
];

function filterCountries(countries, continentToFilter) {
  

  /** Modificar a partir de aquí */
  let filteredCountries = countries.filter((country) => {
    return country.continent === continentToFilter;
  });;
  /** No modificar a partir de aquí */

  return filteredCountries;
}

console.log("Paises de Europa: ", filterCountries(countries, "Europa")); // [{ name: "España", continent:"Europa" },{ name: "Italia", continent: "Europa" }];
console.log("Paises de Asia: ", filterCountries(countries, "Asia")); // [{ name: "China", continent: "Asia" }];

/**
 * Implementa la función filterCountries. La función recibe dos parámetros
 * 1. Un array de objetos, que representa paises
 * 2. Un string, que contiene el valor de un continente
 *
 * La función debe devolver un nuevo array, con todos los paises que pertenecen a dicho continente.
 *
 * Ayuda: hay dos enfoques para este problema
 *
 * 1. Recorrer el array manualmente. Para cada país que pertenezca al continente 'continentToFilter', añadirlo al array filteredCountries
 * 2. Usar adecuadamente un método de array que nos permita 'filtrar' el array 'countries' por el continente 'continentToFilter'
 *
 */
