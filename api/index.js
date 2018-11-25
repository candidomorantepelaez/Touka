const routes = [
  {
    method: "post",
    path: "/credentials",
    response: {
      user: {
        nif: "12345678Z",
        sessionId: "eyJhbGciOiJIUzI1NiIsInR5cCI6I…v4Ef9juII",
        role: "ADMIN_ROLE"
      }
    }
  }, {
    method: "get",
    path: "/test",
    response: {
      message: "test ok"
    }
  }
];

module.exports = routes;
