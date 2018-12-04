import renderApplication from "touka";
import clients from "./clients/module";

renderApplication({
  defaultLanguage: "es",
  languages: ["es", "en"],
  modules: [
    clients,
  ],
});
