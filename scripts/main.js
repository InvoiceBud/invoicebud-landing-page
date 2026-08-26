document.addEventListener("alpine:init", () => {
  let { benefits, features, faqs, how_it_works } = window.data;
  let { signup, login } = window.constants;

  /***** Custom Data *****/
  Alpine.data("auth", () => ({
    signup: signup,
    login: login,
  }));

  Alpine.data("data", () => ({
    benefits: benefits,
    features: features,
    howItWorks: how_it_works,
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
