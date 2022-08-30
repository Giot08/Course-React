//No funciona porque estamos en una version de node actualizada, pero si no, es necesario.
module.exports = {
  testEnvironment: "jest-environment-jsdom",
  setupFiles: ["./jest.setup.js"],
};
