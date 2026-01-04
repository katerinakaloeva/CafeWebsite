 

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
    featureHoursText: "Από νωρίς το πρωί μέχρι το βράδυ."
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
    featureHoursText: "From early morning until late."
  }
};
 function setLanguage(lang){
   const dataKey=document.querySelectorAll("[data-key]")
   dataKey.forEach(el => {
    const key = el.getAttribute("data-key");
    el.textContent = translations[lang][key];
    
   });
   
};