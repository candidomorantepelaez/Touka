import renderApplication from "touka";
import clients from "./clients/module";
import ClientFile from "./clients/pages/create-client-page";

renderApplication({
  defaultLanguage: "es",
  languages: ["es", "en"],
  modules: [
    clients
  ],
  config: {
    noMatchComponent: ClientFile
  }
});
