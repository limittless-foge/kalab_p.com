// 1. Mouse Glow Effect
const glow = document.querySelector('.cursor-glow');
document.addEventListener('mousemove', (e) => {
    glow.style.setProperty('--x', e.clientX + 'px');
    glow.style.setProperty('--y', e.clientY + 'px');
});

// 2. Reveal Sections on Scroll & Update Nav Links
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            const id = entry.target.getAttribute('id');
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
            });
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => observer.observe(section));

// 3. Smooth scroll for Nav links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 4. Translation Data
const translations = {
  en: {
    status: "Available for new projects",
    role: "Frontend and Backend Website Engineer",
    hero_desc: "I build high-performance, accessible, and visually stunning digital experiences.",
    nav_about: "ABOUT",
    nav_exp: "EXPERIENCE",
    nav_proj: "PROJECTS",
    resume_btn: "Download CV",
    download_success: "Downloaded!",
    about_quote: '"In the silence of logic, I find the solutions that the noise of the world obscures."',
    about_p1: "I am a Full-Stack Engineer and IT Scholar at <strong>Haramaya University</strong> who believes that code is the most powerful language for change. My journey into technology wasn't a choice; it was an inevitability. While others see a screen, I see an architecture of possibilities.",
    about_p2: "I possess what I call <strong>'The Logic Vortex'</strong>—a rare capacity for absolute focus. When a complex problem sits before me, the outside world ceases to exist. I enter a state of deep cognitive immersion where time stops, and I do not emerge until the logic is flawless and the system is optimized.",
    about_p3: "My ultimate mission is to bridge the growing gap in <strong>modern education</strong> by focusing on cybersecurity, artificial intelligence, and machine learning—the powerful forces shaping the future of our world. These technologies are no longer optional; they are essential to innovation, security, and national progress. I am determined not only to master these fields as an individual, but to help position my country at the forefront of the digital revolution. We deserve an education system and infrastructure that are fully integrated with AI and emerging technologies, empowering us to compete globally and build a smarter, stronger, and more secure future.",
    exp_job1: "Lead Engineer · TechCorp",
    exp_desc1: "Deliver high-quality, robust production code for a diverse array of projects. Collaborate with designers to transform Figma files into pixel-perfect components.",
    footer_text: "True clarity is not found in the noise of the world, but in the silence of deep focus. What is built with purpose remains unshakable."
  },
  it: {
    status: "Disponibile per nuovi progetti",
    role: "Ingegnere di Siti Web Frontend e Backend",
    hero_desc: "Costruisco esperienze digitali ad alte prestazioni, accessibili e visivamente sbalorditive.",
    nav_about: "CHI SONO",
    nav_exp: "ESPERIENZA",
    nav_proj: "PROGETTI",
    resume_btn: "Scarica CV",
    download_success: "Scaricato!",
    about_quote: '"Nel silenzio della logica, trovo le soluzioni che il rumore del mondo nasconde."',
    about_p1: "Sono un ingegnere Full-Stack e studioso di informatica presso l'<strong>Università di Haramaya</strong> che crede che il codice sia il linguaggio più potente per il cambiamento. Il mio viaggio nella tecnologia non è stata una scelta; è stata un'inevitabilità.",
    about_p2: "Possiedo quello che chiamo <strong>'Il Vortice della Logica'</strong>, una rara capacità di concentrazione assoluta. Quando un problema complesso mi sta davanti, il mondo esterno smette di esistere finché il sistema non è ottimizzato.",
    about_p3: "La mia missione finale è colmare il crescente divario nell'<strong>istruzione moderna</strong> concentrandomi sulla cybersicurezza, l'intelligenza artificiale e l'apprendimento automatico. Queste tecnologie sono essenziali per l'innovazione e il progresso nazionale. Sono determinato ad aiutare a posizionare il mio paese all'avanguardia della rivoluzione digitale, costruendo un futuro più intelligente e sicuro.",
    exp_job1: "Ingegnere Capo · TechCorp",
    exp_desc1: "Fornire codice di produzione robusto e di alta qualità per una vasta gamma di progetti. Collaborare con i designer per trasformare i file Figma in componenti perfetti.",
    footer_text: "La vera chiarezza non si trova nel rumore del mondo, ma nel silenzio della <strong>concentrazione profonda</strong>. Ciò che è costruito con <strong>scopo</strong> rimane incrollabile."
  },
  am: {
    status: "ለአዳዲስ ፕሮጀክቶች ዝግጁ ነኝ",
    role: "የፊፊት ገጽ እና የኋላ ገጽ ድረ-ገጽ መሐንዲስ",
    hero_desc: "ከፍተኛ ብቃት ያላቸው፣ ተደራሽ እና ማራኪ የሆኑ ዲጂታል ተሞክሮዎችን እገነባለሁ።",
    nav_about: "ስለ እኔ",
    nav_exp: "ልምድ",
    nav_proj: "ፕሮጀክቶች",
    resume_btn: "ሲቪ አውርድ (CV)",
    download_success: "ተጭኗል!",
    about_quote: '"በአመክንዮ ዝምታ ውስጥ፣ የዓለም ጩኸት የሚደብቃቸውን መፍትሄዎች እገኝበታለሁ።"',
    about_p1: "እኔ በ<strong>ሐረማያ ዩኒቨርሲቲ</strong> የኢንፎርሜሽን ቴክኖሎጂ ተማሪ ስሆን፤ ኮድ የሰውን ልጅ ሕይወት ለመለወጥ ዋነኛው መሣሪያ ነው ብዬ አምናለሁ። ወደ ቴክኖሎጂ ዓለም የገባሁት በአጋጣሚ ሳይሆን በተፈጥሮ በታደልኩት ዝንባሌ ነው። ሌሎች ሰዎች የኮምፒውተር ስክሪን ሲያዩ፣ እኔ የማየው ማለቂያ የሌላቸውን የመፍትሄ ግንባታዎችን ነው።",
    about_p2: "እኔ <strong>'Deep Work'</strong> ወይም <strong>'ጥልቅ የሥራ ትኩረት'</strong> የምለው ልዩ ብቃት አለኝ። አንድ ውስብስብ የቴክኒክ ችግር ሲገጥመኝ፣ በዙሪያዬ ያለው ዓለም ሙሉ በሙሉ ይረሳኛል። ችግሩ እስኪፈታና አመክንዮው (logic) መስመር እስኪይዝ ድረስ፣ ጊዜና ቦታ የማይገታው ከፍተኛ የትኩረት ዓለም ውስጥ እገባለሁ።",
    about_p3: "ዋናው ዓላማዬ በዘመናዊ ትምህርት ውስጥ ያለውን ክፍተት በ<strong>ሳይበር ደህንነት</strong>፣ በ<strong>አርቲፊሻል ኢንተለጀንስ (AI)</strong> እና በ<strong>ማሽን ለርኒንግ</strong> ላይ በማተኮር መሙላት ነው። እነዚህ ቴክኖሎጂዎች አሁን ላይ እንደ ምርጫ የሚታዩ ሳይሆኑ ለፈጠራ፣ ለደህንነት እና ለሀገር እድገት ወሳኝ ናቸው። እነዚህን ዘርፎች በግሌ ከመቆጣጠር ባለፈ ሀገሬ በዲጂታል አብዮት ግንባር ቀደም እንድትሆን የበኩሌን አስተዋጽኦ ለማድረግ ቆርጬ ተነስቻለሁ። በዓለም አቀፍ ደረጃ ተወዳዳሪ ለመሆን ከ AI ጋር የተቆራኘ የትምህርት ሥርዓት እና መሠረተ ልማት ያስፈልገናል።",
    exp_job1: "ዋና መሐንዲስ · ቴክ ኮርፖሬሽን",
    exp_desc1: "ለተለያዩ ፕሮጀክቶች ከፍተኛ ጥራት ያላቸውን ኮዶች አቀርባለሁ። ከዲዛይነሮች ጋር በመሆን ፊግማ (Figma) ዲዛይኖችን ወደ ድረ-ገጽ እቀይራለሁ።",
    footer_text: "እውነተኛ ግልጽነት የሚገኘው ከዓለም ጩኸት ውስጥ ሳይሆን በጥልቅ ትኩረት ዝምታ ውስጥ ነው። በጽኑ ዓላማ የተገነባ ነገር መቼም አይናወጥም"
  }
};

// 5. Language Switching Logic
const langButtons = document.querySelectorAll('.lang-btn');

function updateLanguage(lang) {
  document.querySelectorAll('[data-key]').forEach(element => {
    const key = element.getAttribute('data-key');
    if (translations[lang] && translations[lang][key]) {
      element.innerHTML = translations[lang][key];
    }
  });
}

langButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const selectedLang = btn.getAttribute('data-lang');
    document.querySelector('.lang-btn.active').classList.remove('active');
    btn.classList.add('active');
    updateLanguage(selectedLang);
    localStorage.setItem('preferred-lang', selectedLang);
  });
});

// 6. Ethiopia Real-time Clock
function updateTime() {
    const options = {
        timeZone: 'Africa/Addis_Ababa',
        hour: '2-digit', minute: '2-digit', second: '2-digit',
        hour12: false
    };
    const formatter = new Intl.DateTimeFormat([], options);
    const timeElement = document.getElementById('ethiopia-time');
    if(timeElement) {
        timeElement.textContent = formatter.format(new Date()) + " EAT";
    }
}
setInterval(updateTime, 1000);
updateTime();

// 7. Easter Egg (TARDIS)
const egg = document.getElementById('easter-egg');
if(egg) {
    egg.addEventListener('click', () => {
        const flash = document.createElement('div');
        flash.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;background:white;z-index:9999;opacity:0.5;pointer-events:none;";
        document.body.appendChild(flash);
        setTimeout(() => flash.remove(), 100);
        alert("Logic problem solved in 0.001s inside the TARDIS!");
    });
}

// 8. Resume Download Logic
const downloadBtn = document.getElementById('download-btn');
if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
        const currentLang = localStorage.getItem('preferred-lang') || 'en';
        
        // Visual feedback
        downloadBtn.classList.add('downloaded');
        downloadBtn.innerHTML = `<i class="fas fa-check"></i> <span>${translations[currentLang].download_success}</span>`;
        
        // Reset button after 3 seconds
        setTimeout(() => {
            downloadBtn.classList.remove('downloaded');
            // Re-run language update to restore the correct "Download CV" text
            updateLanguage(currentLang);
        }, 3000);
    });
}

// 9. Initialization
window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferred-lang') || 'en';
    updateLanguage(savedLang);
    langButtons.forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === savedLang);
    });
});