const translations = {
  en: {
    nav: {
      home: "Home", about: "About", services: "Services",
      academy: "Academy", blog: "Blog", contact: "Contact", register: "Register Now"
    },
    hero: {
      badge: "Accounting & ERP Experts",
      title: "Your Partner in Financial Excellence",
      subtitle: "Professional accounting services, training academy, consulting, audit, and Odoo ERP implementation — all under one roof.",
      cta_primary: "Explore Our Services",
      cta_secondary: "Join the Academy"
    },
    stats: {
      clients: "Happy Clients", courses: "Courses Offered", experts: "Expert Trainers", years: "Years Experience"
    },
    services: {
      title: "Our Services",
      subtitle: "Comprehensive financial and ERP solutions tailored to your business needs",
      accounting: { title: "Accounting Services", desc: "Full-cycle bookkeeping, financial statements, payroll, and tax compliance for businesses of all sizes." },
      academy: { title: "Training Academy", desc: "Practical accounting courses designed for beginners to professionals, with certified instructors." },
      consulting: { title: "Accounting Consulting", desc: "Strategic financial advice to optimize your business performance and ensure regulatory compliance." },
      audit: { title: "Audit Services", desc: "Independent internal and external auditing with detailed reports and actionable recommendations." },
      odoo: { title: "Odoo ERP", desc: "Full Odoo implementation, customization, training, and ongoing support for your business automation." },
      tax: { title: "Tax Advisory", desc: "Expert tax planning, filing, and advisory services to minimize liability and ensure compliance." }
    },
    about: {
      title: "About Walk Academy",
      subtitle: "Who We Are",
      desc1: "Walk Academy is a premier accounting and financial services firm dedicated to helping businesses grow through expert financial management, professional training, and cutting-edge ERP solutions.",
      desc2: "Our team of certified accountants, auditors, and Odoo experts bring decades of combined experience to deliver results that matter.",
      mission: "Our Mission",
      mission_desc: "To empower businesses and individuals with the financial knowledge, tools, and expertise needed to achieve sustainable growth.",
      vision: "Our Vision",
      vision_desc: "To be the leading accounting and ERP solutions provider across the region, known for excellence and integrity.",
      learn_more: "Learn More About Us"
    },
    academy: {
      title: "Walk Academy",
      subtitle: "Build Your Accounting Career",
      desc: "Join hundreds of students who have transformed their careers through our practical, industry-aligned courses.",
      cta: "View All Courses",
      register_cta: "Enroll Now",
      courses: {
        c1: { title: "Accounting Fundamentals", level: "Beginner", duration: "4 Weeks", price: "299" },
        c2: { title: "Advanced Financial Analysis", level: "Advanced", duration: "6 Weeks", price: "499" },
        c3: { title: "Odoo ERP Mastery", level: "Intermediate", duration: "8 Weeks", price: "599" },
        c4: { title: "Tax & Compliance", level: "Intermediate", duration: "3 Weeks", price: "349" }
      }
    },
    why: {
      title: "Why Choose Walk Academy?",
      subtitle: "What sets us apart from the rest",
      r1: { title: "Certified Experts", desc: "All our professionals hold internationally recognized certifications." },
      r2: { title: "Practical Approach", desc: "Real-world case studies and hands-on training methods." },
      r3: { title: "Multilingual Support", desc: "We serve clients in Arabic, English, and French." },
      r4: { title: "Odoo Specialists", desc: "Official Odoo partners with deep implementation expertise." },
      r5: { title: "Ongoing Support", desc: "We don't just deliver — we stay with you every step of the way." },
      r6: { title: "Affordable Pricing", desc: "Premium quality services at competitive and transparent rates." }
    },
    testimonials: {
      title: "What Our Clients Say",
      subtitle: "Trusted by businesses across the region"
    },
    blog: {
      title: "Latest Insights",
      subtitle: "Stay updated with accounting, finance, and ERP news",
      read_more: "Read More"
    },
    contact: {
      title: "Get In Touch",
      subtitle: "We'd love to hear from you",
      name: "Full Name", email: "Email Address", phone: "Phone Number",
      subject: "Subject", message: "Your Message", send: "Send Message",
      address: "Address", phone_label: "Phone", email_label: "Email",
      follow: "Follow Us"
    },
    register: {
      title: "Register for a Course",
      subtitle: "Take the first step toward your future",
      full_name: "Full Name", email: "Email Address", phone: "Phone Number",
      course: "Select Course", country: "Country",
      payment_title: "Payment Details",
      card: "Card Number", expiry: "Expiry Date", cvv: "CVV",
      amount: "Total Amount", submit: "Complete Registration & Pay",
      secure: "Secured by Stripe — Your payment is fully encrypted"
    },
    footer: {
      desc: "Your trusted partner for accounting, training, consulting, audit, and Odoo ERP solutions.",
      quick_links: "Quick Links",
      our_services: "Our Services",
      newsletter: "Newsletter",
      newsletter_desc: "Subscribe to get the latest updates and offers.",
      subscribe: "Subscribe",
      email_placeholder: "Your email address",
      rights: "All Rights Reserved",
      privacy: "Privacy Policy",
      terms: "Terms of Service"
    }
  },

  ar: {
    nav: {
      home: "الرئيسية", about: "من نحن", services: "خدماتنا",
      academy: "الأكاديمية", blog: "المدونة", contact: "اتصل بنا", register: "سجل الآن"
    },
    hero: {
      badge: "خبراء المحاسبة وأنظمة ERP",
      title: "شريكك نحو التميز المالي",
      subtitle: "خدمات محاسبية احترافية، أكاديمية تدريب، استشارات، تدقيق، وتطبيق Odoo ERP — كل ذلك تحت سقف واحد.",
      cta_primary: "استكشف خدماتنا",
      cta_secondary: "انضم للأكاديمية"
    },
    stats: {
      clients: "عميل راضٍ", courses: "دورة تدريبية", experts: "مدرب خبير", years: "سنوات خبرة"
    },
    services: {
      title: "خدماتنا",
      subtitle: "حلول مالية وERP شاملة مصممة لاحتياجات عملك",
      accounting: { title: "خدمات المحاسبة", desc: "مسك الدفاتر الكاملة، القوائم المالية، الرواتب، والامتثال الضريبي لجميع أحجام الأعمال." },
      academy: { title: "أكاديمية التدريب", desc: "دورات محاسبية عملية مصممة من المبتدئين إلى المحترفين، مع مدربين معتمدين." },
      consulting: { title: "الاستشارات المحاسبية", desc: "مشورة مالية استراتيجية لتحسين أداء عملك وضمان الامتثال التنظيمي." },
      audit: { title: "خدمات التدقيق", desc: "تدقيق داخلي وخارجي مستقل مع تقارير مفصلة وتوصيات قابلة للتنفيذ." },
      odoo: { title: "نظام Odoo ERP", desc: "تطبيق Odoo الكامل، التخصيص، التدريب، والدعم المستمر لأتمتة أعمالك." },
      tax: { title: "الاستشارات الضريبية", desc: "تخطيط ضريبي متخصص وخدمات إقرار وإرشاد لتقليل الالتزامات وضمان الامتثال." }
    },
    about: {
      title: "عن ووك بيزنس",
      subtitle: "من نحن",
      desc1: "ووك بيزنس شركة رائدة في الخدمات المحاسبية والمالية، مكرسة لمساعدة الأعمال على النمو من خلال الإدارة المالية المتخصصة والتدريب الاحترافي وحلول ERP المتطورة.",
      desc2: "يجمع فريقنا من المحاسبين والمدققين وخبراء Odoo عقوداً من الخبرة المشتركة لتحقيق نتائج ملموسة.",
      mission: "مهمتنا",
      mission_desc: "تمكين الأعمال والأفراد بالمعرفة المالية والأدوات والخبرة اللازمة لتحقيق نمو مستدام.",
      vision: "رؤيتنا",
      vision_desc: "أن نكون المزود الرائد لحلول المحاسبة وERP في المنطقة، المعروف بالتميز والنزاهة.",
      learn_more: "اعرف المزيد عنا"
    },
    academy: {
      title: "أكاديمية ووك",
      subtitle: "ابنِ مسيرتك المحاسبية",
      desc: "انضم إلى مئات الطلاب الذين غيروا مساراتهم المهنية من خلال دوراتنا العملية المتوافقة مع متطلبات الصناعة.",
      cta: "عرض جميع الدورات",
      register_cta: "سجل الآن",
      courses: {
        c1: { title: "أساسيات المحاسبة", level: "مبتدئ", duration: "4 أسابيع", price: "299" },
        c2: { title: "التحليل المالي المتقدم", level: "متقدم", duration: "6 أسابيع", price: "499" },
        c3: { title: "إتقان Odoo ERP", level: "متوسط", duration: "8 أسابيع", price: "599" },
        c4: { title: "الضرائب والامتثال", level: "متوسط", duration: "3 أسابيع", price: "349" }
      }
    },
    why: {
      title: "لماذا تختار ووك بيزنس؟",
      subtitle: "ما الذي يميزنا عن الآخرين",
      r1: { title: "خبراء معتمدون", desc: "جميع متخصصينا يحملون شهادات معترفاً بها دولياً." },
      r2: { title: "منهج عملي", desc: "دراسات حالة واقعية وأساليب تدريب تطبيقية." },
      r3: { title: "دعم متعدد اللغات", desc: "نخدم عملاءنا بالعربية والإنجليزية والفرنسية." },
      r4: { title: "متخصصون في Odoo", desc: "شركاء Odoo رسميون مع خبرة عميقة في التطبيق." },
      r5: { title: "دعم مستمر", desc: "لا نكتفي بالتسليم — بل نبقى معك في كل خطوة." },
      r6: { title: "أسعار تنافسية", desc: "خدمات عالية الجودة بأسعار تنافسية وشفافة." }
    },
    testimonials: {
      title: "ماذا يقول عملاؤنا",
      subtitle: "موثوق به من قبل الشركات في جميع أنحاء المنطقة"
    },
    blog: {
      title: "آخر المستجدات",
      subtitle: "ابقَ على اطلاع بأخبار المحاسبة والمال وERP",
      read_more: "اقرأ المزيد"
    },
    contact: {
      title: "تواصل معنا",
      subtitle: "يسعدنا سماع منك",
      name: "الاسم الكامل", email: "البريد الإلكتروني", phone: "رقم الهاتف",
      subject: "الموضوع", message: "رسالتك", send: "إرسال الرسالة",
      address: "العنوان", phone_label: "الهاتف", email_label: "البريد الإلكتروني",
      follow: "تابعنا"
    },
    register: {
      title: "سجل في دورة",
      subtitle: "اتخذ الخطوة الأولى نحو مستقبلك",
      full_name: "الاسم الكامل", email: "البريد الإلكتروني", phone: "رقم الهاتف",
      course: "اختر الدورة", country: "الدولة",
      payment_title: "تفاصيل الدفع",
      card: "رقم البطاقة", expiry: "تاريخ الانتهاء", cvv: "CVV",
      amount: "المبلغ الإجمالي", submit: "إتمام التسجيل والدفع",
      secure: "مؤمّن بواسطة Stripe — مدفوعاتك مشفرة بالكامل"
    },
    footer: {
      desc: "شريكك الموثوق للمحاسبة والتدريب والاستشارات والتدقيق وحلول Odoo ERP.",
      quick_links: "روابط سريعة",
      our_services: "خدماتنا",
      newsletter: "النشرة البريدية",
      newsletter_desc: "اشترك للحصول على آخر التحديثات والعروض.",
      subscribe: "اشتراك",
      email_placeholder: "بريدك الإلكتروني",
      rights: "جميع الحقوق محفوظة",
      privacy: "سياسة الخصوصية",
      terms: "شروط الخدمة"
    }
  },

  fr: {
    nav: {
      home: "Accueil", about: "À Propos", services: "Services",
      academy: "Académie", blog: "Blog", contact: "Contact", register: "S'inscrire"
    },
    hero: {
      badge: "Experts en Comptabilité & ERP",
      title: "Votre Partenaire pour l'Excellence Financière",
      subtitle: "Services comptables professionnels, académie de formation, conseil, audit et implémentation Odoo ERP — tout sous un même toit.",
      cta_primary: "Découvrir nos Services",
      cta_secondary: "Rejoindre l'Académie"
    },
    stats: {
      clients: "Clients Satisfaits", courses: "Cours Proposés", experts: "Formateurs Experts", years: "Ans d'Expérience"
    },
    services: {
      title: "Nos Services",
      subtitle: "Solutions financières et ERP complètes adaptées à vos besoins",
      accounting: { title: "Services Comptables", desc: "Comptabilité complète, états financiers, paie et conformité fiscale pour toutes tailles d'entreprises." },
      academy: { title: "Académie de Formation", desc: "Cours de comptabilité pratiques conçus pour les débutants aux professionnels, avec des formateurs certifiés." },
      consulting: { title: "Conseil Comptable", desc: "Conseils financiers stratégiques pour optimiser la performance de votre entreprise et assurer la conformité." },
      audit: { title: "Services d'Audit", desc: "Audit interne et externe indépendant avec des rapports détaillés et des recommandations concrètes." },
      odoo: { title: "Odoo ERP", desc: "Implémentation Odoo complète, personnalisation, formation et support continu pour l'automatisation de votre entreprise." },
      tax: { title: "Conseil Fiscal", desc: "Planification fiscale experte, déclarations et services de conseil pour minimiser les obligations et assurer la conformité." }
    },
    about: {
      title: "À Propos de Walk Academy",
      subtitle: "Qui Sommes-Nous",
      desc1: "Walk Academy est un cabinet de services comptables et financiers de premier plan, dédié à aider les entreprises à croître grâce à une gestion financière experte, une formation professionnelle et des solutions ERP de pointe.",
      desc2: "Notre équipe de comptables certifiés, d'auditeurs et d'experts Odoo apporte des décennies d'expérience combinée pour livrer des résultats concrets.",
      mission: "Notre Mission",
      mission_desc: "Donner aux entreprises et aux individus les connaissances financières, les outils et l'expertise nécessaires pour une croissance durable.",
      vision: "Notre Vision",
      vision_desc: "Être le fournisseur leader de solutions comptables et ERP dans la région, reconnu pour l'excellence et l'intégrité.",
      learn_more: "En Savoir Plus"
    },
    academy: {
      title: "Walk Académie",
      subtitle: "Construisez Votre Carrière Comptable",
      desc: "Rejoignez des centaines d'étudiants qui ont transformé leur carrière grâce à nos cours pratiques et alignés sur les besoins de l'industrie.",
      cta: "Voir Tous les Cours",
      register_cta: "S'inscrire Maintenant",
      courses: {
        c1: { title: "Fondamentaux de la Comptabilité", level: "Débutant", duration: "4 Semaines", price: "299" },
        c2: { title: "Analyse Financière Avancée", level: "Avancé", duration: "6 Semaines", price: "499" },
        c3: { title: "Maîtrise Odoo ERP", level: "Intermédiaire", duration: "8 Semaines", price: "599" },
        c4: { title: "Fiscalité & Conformité", level: "Intermédiaire", duration: "3 Semaines", price: "349" }
      }
    },
    why: {
      title: "Pourquoi Choisir Walk Academy?",
      subtitle: "Ce qui nous distingue des autres",
      r1: { title: "Experts Certifiés", desc: "Tous nos professionnels détiennent des certifications reconnues internationalement." },
      r2: { title: "Approche Pratique", desc: "Études de cas réels et méthodes de formation pratiques." },
      r3: { title: "Support Multilingue", desc: "Nous servons nos clients en arabe, anglais et français." },
      r4: { title: "Spécialistes Odoo", desc: "Partenaires Odoo officiels avec une expertise approfondie en implémentation." },
      r5: { title: "Support Continu", desc: "Nous ne livrons pas seulement — nous restons avec vous à chaque étape." },
      r6: { title: "Prix Abordables", desc: "Services de qualité premium à des tarifs compétitifs et transparents." }
    },
    testimonials: {
      title: "Ce que Disent Nos Clients",
      subtitle: "Fait confiance par des entreprises à travers la région"
    },
    blog: {
      title: "Dernières Actualités",
      subtitle: "Restez informé des nouvelles de la comptabilité, finance et ERP",
      read_more: "Lire la Suite"
    },
    contact: {
      title: "Contactez-Nous",
      subtitle: "Nous serions ravis de vous entendre",
      name: "Nom Complet", email: "Adresse Email", phone: "Numéro de Téléphone",
      subject: "Sujet", message: "Votre Message", send: "Envoyer le Message",
      address: "Adresse", phone_label: "Téléphone", email_label: "Email",
      follow: "Suivez-Nous"
    },
    register: {
      title: "S'inscrire à un Cours",
      subtitle: "Faites le premier pas vers votre avenir",
      full_name: "Nom Complet", email: "Adresse Email", phone: "Numéro de Téléphone",
      course: "Sélectionner un Cours", country: "Pays",
      payment_title: "Détails de Paiement",
      card: "Numéro de Carte", expiry: "Date d'Expiration", cvv: "CVV",
      amount: "Montant Total", submit: "Finaliser l'Inscription & Payer",
      secure: "Sécurisé par Stripe — Votre paiement est entièrement chiffré"
    },
    footer: {
      desc: "Votre partenaire de confiance pour la comptabilité, la formation, le conseil, l'audit et les solutions Odoo ERP.",
      quick_links: "Liens Rapides",
      our_services: "Nos Services",
      newsletter: "Newsletter",
      newsletter_desc: "Abonnez-vous pour recevoir les dernières mises à jour et offres.",
      subscribe: "S'abonner",
      email_placeholder: "Votre adresse email",
      rights: "Tous Droits Réservés",
      privacy: "Politique de Confidentialité",
      terms: "Conditions d'Utilisation"
    }
  }
};

let currentLang = 'en';

function setLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];
  const isRTL = lang === 'ar';

  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
  document.body.classList.toggle('rtl', isRTL);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const keys = el.getAttribute('data-i18n').split('.');
    let val = t;
    keys.forEach(k => val = val?.[k]);
    if (val) el.textContent = val;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const keys = el.getAttribute('data-i18n-placeholder').split('.');
    let val = t;
    keys.forEach(k => val = val?.[k]);
    if (val) el.placeholder = val;
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  localStorage.setItem('walk_lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('walk_lang') || 'en';
  setLanguage(saved);
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang')));
  });
});
