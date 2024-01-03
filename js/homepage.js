// JavaScript to handle the blur effect on entering the 'about' section
const nav = document.getElementById('navbar');
const aboutSection = document.getElementById('about');
const insights = document.getElementById('insights');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log(entry.isIntersecting)
            // Entering the 'about' section, apply blur
            nav.style.background = 'transparent';
            nav.style.backdropFilter = 'blur(10px) brightness(0.6)';
            nav.style.webkitBackdropFilter = 'blur(10px)';
        } else {
          console.log(entry.isIntersecting)
            // Leaving the 'about' section, remove blur
            nav.style.background = 'var(--primary-color)';
            nav.style.backdropFilter = 'blur(0)';
            nav.style.webkitBackdropFilter = 'blur(0)';
        }
    });
}, {
  threshold: 0
});

observer.observe(aboutSection);
observer.observe(insights);

// technology

function toggleTech(section) {
    const webPlatformSection = document.getElementById("webplatform");
    const databaseSection = document.getElementById("database");
    const cloudSection = document.getElementById("cloud");
    const appSection = document.getElementById("mobileapps");
    const webPlatformBtn = document.getElementById("webBtn");
    const databaseBtn = document.getElementById("databaseBtn");
    const cloudBtn = document.getElementById("cloudBtn");
    const mobileAppBtn = document.getElementById("mobileAppBtn");

    if (section === "webplatform") {
      webPlatformSection.style.display = "flex";
      databaseSection.style.display = "none";
      cloudSection.style.display= "none";
      appSection.style.display= "none";
      webPlatformBtn.style.fontWeight = "600";
      webPlatformBtn.style.color = "var(--secondary-color)";
      databaseBtn.style.color = "white";
      databaseBtn.style.fontWeight = "normal";
      cloudBtn.style.color = "white";
      cloudBtn.style.fontWeight = "normal";
      mobileAppBtn.style.color = "white";
      mobileAppBtn.style.fontWeight = "normal";

    } 
    else if (section === "database") {
      webPlatformSection.style.display = "none";
      databaseSection.style.display = "flex";
      cloudSection.style.display= "none";
      appSection.style.display= "none";
      webPlatformBtn.style.fontWeight = "normal";
      databaseBtn.style.fontWeight = "600";
      webPlatformBtn.style.color = "white";
      databaseBtn.style.color = "var(--secondary-color)";
      cloudBtn.style.color = "white";
      cloudBtn.style.fontWeight = "normal";
      mobileAppBtn.style.color = "white";
      mobileAppBtn.style.fontWeight = "normal";
    }
    else if (section === "cloud") {
      webPlatformSection.style.display = "none";
      databaseSection.style.display = "none";
      appSection.style.display= "none";
      cloudSection.style.display= "flex";
      webPlatformBtn.style.fontWeight = "normal";
      cloudBtn.style.fontWeight = "600";
      webPlatformBtn.style.color = "white";
      cloudBtn.style.color = "var(--secondary-color)";
      databaseBtn.style.color = "white";
      databaseBtn.style.fontWeight = "normal";
      mobileAppBtn.style.color = "white";
      mobileAppBtn.style.fontWeight = "normal";
    }

    else if (section === "mobileapps") {
      webPlatformSection.style.display = "none";
      databaseSection.style.display = "none";
      appSection.style.display= "flex";
      cloudSection.style.display= "none";
      webPlatformBtn.style.fontWeight = "normal";
      cloudBtn.style.fontWeight = "normal";
      webPlatformBtn.style.color = "white";
      cloudBtn.style.color = "white";
      databaseBtn.style.color = "white";
      databaseBtn.style.fontWeight = "normal";
      mobileAppBtn.style.color = "var(--secondary-color)";
      mobileAppBtn.style.fontWeight = "600";
    }
  }