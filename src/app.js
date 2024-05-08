/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronouns = ["The", "our"];
let adj = ["great", "Last"];
let nouns = ["Of", "puedes"];
let domains = [".com", ".es", ".us"];

let container = document.querySelector("#container");

function domainGenerator(pronouns, adj, nouns, domains) {
  for (let pronoun in pronouns) {
    for (let adjective in adj) {
      for (let noun in nouns)
        for (let domain in domains) {
          if (nouns[noun] == "puedes" && domains[domain] == ".es") {
            container.innerHTML +=
              pronouns[pronoun] +
              adj[adjective] +
              "pued" +
              domains[domain] +
              "</br>";
            console.log(
              pronouns[pronoun] + adj[adjective] + "pued" + domains[domain]
            );
          } else if (
            pronouns[pronoun] == "The" &&
            adj[adjective] == "Last" &&
            nouns[noun] == "Of" &&
            domains[domain] == ".us"
          ) {
            container.innerHTML +=
              pronouns[pronoun] +
              adj[adjective] +
              nouns[noun] +
              domains[domain] +
              " " +
              "Juegassssso" +
              "</br>";
            console.log(
              pronouns[pronoun] +
                adj[adjective] +
                nouns[noun] +
                domains[domain] +
                " " +
                "Juegassssso"
            );
          } else {
            container.innerHTML +=
              pronouns[pronoun] +
              adj[adjective] +
              nouns[noun] +
              domains[domain] +
              "</br>";
            console.log(
              pronouns[pronoun] + adj[adjective] + nouns[noun] + domains[domain]
            );
          }
        }
    }
  }
}

domainGenerator(pronouns, adj, nouns, domains);
