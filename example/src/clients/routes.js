import ListClientsPage from "./pages/list-clients-page";
import CreateClientPage from "./pages/create-client-page";
import DetailClientPage from "./pages/detail-client-page";
import EditClientPage from "./pages/edit-client-page";

export default [
  { path: "/clients", exact: true, component: ListClientsPage },
  { path: "/clients/new", exact: true, component: CreateClientPage },
  { path: "/clients/detail/:id", exact: true, component: DetailClientPage },
  { path: "/clients/edit/:id", exact: true, component: EditClientPage },
];
