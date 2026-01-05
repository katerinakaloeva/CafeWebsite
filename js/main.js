

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
      "Στο Daily Café πιστεύουμε ότι ο καλός καφές είναι αναπόσπαστο κομμάτι της καθημερινότητάς μας. Το ταξίδι μας ξεκίνησε το 1990, με στόχο να δημιουργήσουμε έναν ζεστό και φιλόξενο χώρο για όλους όσοι αγαπούν τον ποιοτικό καφέ. Από τότε μέχρι σήμερα, παραμένουμε πιστοί στην ποιότητα και τη φροντίδα σε κάθε λεπτομέρεια. Με προσεκτικά επιλεγμένους κόκκους καφέ, φρέσκα ροφήματα και λαχταριστά snacks, προσφέρουμε μια ολοκληρωμένη εμπειρία από το πρωί μέχρι το βράδυ."



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




