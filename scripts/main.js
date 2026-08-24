document.addEventListener("alpine:init", () => {
  /***** Custom Data *****/
  Alpine.data("signup", () => ({
    url: "https://dash.billgig.app/signup",
  }));

  Alpine.data("benefits", () => ({
    data: window.data.benefits,
  }));
});
