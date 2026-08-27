document.addEventListener("alpine:init", () => {
  let { benefits, features, faqs, how_it_works, footer } = window.data;
  let { signup, login, navigation } = window.constants;

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
    footer: footer,

    openFaq: null,
  }));

  Alpine.data("routes", () => ({
    navRoutes: navigation,
  }));
});
