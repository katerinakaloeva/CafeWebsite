

const translations = {
  el: {
    navHome: "Home",
    navAbout: "About",
    navMenu: "Menu",
    navContact: "Contact",

    slogan: "Coffee • Moments • Quality",

    ctaTitle: "Έτοιμος για τον επόμενο καφέ;",
    ctaText: "Δες το μενού μας ή επικοινώνησε μαζί μας.",
    ctaMenu: "Δες το Μενού",
    ctaContact: "Επικοινωνία",

    featureCoffee: "Ποιοτικός Καφές",
    featureCoffeeText: "Επιλεγμένοι κόκκοι & άψογη παρασκευή.",
    featureAtmosphere: "Ζεστή Ατμόσφαιρα",
    featureAtmosphereText: "Χώρος για χαλάρωση και στιγμές.",
    featureHours: "Καθημερινά",
    featureHoursText: "Από νωρίς το πρωί μέχρι το βράδυ.",

    // about us
    aboutTitle: "Σχετικά με εμάς",
    aboutText:
      "Στο Daily Café πιστεύουμε ότι ο καλός καφές είναι αναπόσπαστο κομμάτι της καθημερινότητάς μας. Το ταξίδι μας ξεκίνησε το 1990, με στόχο να δημιουργήσουμε έναν ζεστό και φιλόξενο χώρο για όλους όσοι αγαπούν τον ποιοτικό καφέ. Από τότε μέχρι σήμερα, παραμένουμε πιστοί στην ποιότητα και τη φροντίδα σε κάθε λεπτομέρεια. Με προσεκτικά επιλεγμένους κόκκους καφέ, φρέσκα ροφήματα και λαχταριστά snacks, προσφέρουμε μια ολοκληρωμένη εμπειρία από το πρωί μέχρι το βράδυ.",

    //  μενού
    menuCoffeeCategory: "Καφέδες",
    menuCoffeeShopCategory: "Καφεκοπτείο",
    menuFreddoEspressoTitle: "Freddo Espresso",
    menuFreddoEspressoDesc: "Κρύος καφές",
    menuEspressoTitle: "Espresso",
    menuEspressoDesc: "Δυνατός καφές με πλούσιο άρωμα",
    menuGreekCoffeeTitle: "Ελληνικός",
    menuGreekCoffeeDesc: "Παραδοσιακός ελληνικός καφές",
    menuAmericanoTitle: "Αμερικάνο",
    menuAmericanoDesc: "Απαλός καφές",
    menuFreddoCappuccinoTitle: "Freddo Cappuccino",
    menuFreddoCappuccinoDesc: "Κρύος καφές",
    menuCappuccinoTitle: "Cappuccino",
    menuCappuccinoDesc: "Αφρόγαλα & espresso",
    menuLatteTitle: "Latte",
    menuLatteDesc: "Απαλός καφές με γάλα",
    menuJuiceTitle: "Φυσικός Χυμός",
    menuJuiceDesc: "Με φρούτα εποχής",
    menuCoffeeShopCategory: "Καφεκοπτείο",
    menuPremiumTitle: "Premium",
    menuPremiumDesc: "100% Arabica – σοκολάτα, ξηροί καρποί, μπισκότο",
    menuElegantTitle: "Elegant",
    menuElegantDesc: "Arabica με κακάο, καστανή ζάχαρη και αποξηραμένα φρούτα",
    menuFlavorTitle: "Flavor",
    menuFlavorDesc: "Blend Arabica & Costa Rica, έντονη καφεΐνη",
    menuDecafTitle: "Decaf",
    menuDecafDesc: "100% Arabica χωρίς καφεΐνη",



  },

  en: {
    navHome: "Home",
    navAbout: "About",
    navMenu: "Menu",
    navContact: "Contact",

    slogan: "Coffee • Moments • Quality",

    ctaTitle: "Ready for your next coffee?",
    ctaText: "Check our menu or get in touch.",
    ctaMenu: "View Menu",
    ctaContact: "Contact Us",

    featureCoffee: "Quality Coffee",
    featureCoffeeText: "Selected beans & perfect brewing.",
    featureAtmosphere: "Cozy Atmosphere",
    featureAtmosphereText: "A place to relax and enjoy moments.",
    featureHours: "Every Day",
    featureHoursText: "From early morning until late.",
    // about us
    aboutTitle: "About Us",
    aboutText: "At Daily Café, we believe that good coffee is an essential part of everyday life.Our journey began in 1990, with the goal of creating a warm and welcoming space for everyone who loves quality coffee.From then until today, we remain committed to quality and attention to every detail.With carefully selected coffee beans, freshly prepared beverages, and delicious snacks, we offer a complete experience from early morning until late in the evening.",

    //  μενού
    menuCoffeeCategory: "Coffees",
    menuCoffeeShopCategory: "Coffee Shop",
    menuFreddoEspressoTitle: "Freddo Espresso",
    menuFreddoEspressoDesc: "Iced coffee",
    menuEspressoTitle: "Espresso",
    menuEspressoDesc: "Strong coffee with rich aroma",

    menuGreekCoffeeTitle: "Greek Coffee",
    menuGreekCoffeeDesc: "Traditional Greek coffee",
    menuAmericanoTitle: "Αmericano",
    menuAmericanoDesc: "Smooth coffee",
    menuFreddoCappuccinoTitle: "Freddo Cappuccino",
    menuFreddoCappuccinoDesc: "Iced cappuccino",
    menuCappuccinoTitle: "Cappuccino",
    menuCappuccinoDesc: "Milk foam & espresso",
    menuLatteTitle: "Latte",
    menuLatteDesc: "Smooth coffee with milk",
    menuJuiceTitle: "Fresh Juice",
    menuJuiceDesc: "Fresh seasonal fruits",

    menuCoffeeShopCategory: "Coffee Shop",
    menuPremiumTitle: "Premium",
    menuPremiumDesc: "100% Arabica – chocolate, nuts, biscuit",
    menuElegantTitle: "Elegant",
    menuElegantDesc: "Arabica with cocoa, brown sugar and dried fruits",
    menuFlavorTitle: "Flavor",
    menuFlavorDesc: "Arabica & Costa Rica blend, high caffeine",
    menuDecafTitle: "Decaf",
    menuDecafDesc: "100% Arabica decaffeinated",
  }

};



function setLanguage(lang) {
  const dataKey = document.querySelectorAll("[data-key]")
  dataKey.forEach(el => {
    const key = el.dataset.key;
    el.textContent = translations[lang][key];

  });
};
window.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("language");

  if (savedLang) {
    setLanguage(savedLang);
  } else {
    setLanguage("el");
  }
});




const langEl = document.querySelector('#lang-el')
langEl.addEventListener('click', () => {
  setLanguage('el')
  localStorage.setItem("language", "el")


})
const langEn = document.querySelector('#lang-en')
langEn.addEventListener('click', () => {
  setLanguage('en')
  localStorage.setItem("language", "en")


})














