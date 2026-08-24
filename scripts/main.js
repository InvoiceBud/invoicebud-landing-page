document.addEventListener("alpine:init", () => {
  let { benefits, features, faqs } = window.data;

  /***** Custom Data *****/
  Alpine.data("auth", () => ({
    signup: "https://dash.billgig.app/signup",
    login: "https://dash.billgig.app/login",
  }));

  Alpine.data("data", () => ({
    benefits: benefits,
    features: features,
    faqs: faqs,
  }));

  /***** Custom Declarative *****/
  Alpine.directive("handleClick", (el, { expression }, { evaluate }) => {
    el.addEventListener("click", () => {
      const url = evaluate(expression);
      console.log("🚀 ~ url:", url);

      window.open(url);
    });
  });
});
