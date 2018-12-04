import messages from "./messages/index";
import routes from "./routes";
import reducer from "./reducers/index";
import menu from "./menu";
import reactions from "./reactions";
import PageReview from "./page-review";

export default {
  key: "clients",
  menu,
  messages,
  routes,
  reducer,
  reactions,
  pageReview: PageReview,
};
