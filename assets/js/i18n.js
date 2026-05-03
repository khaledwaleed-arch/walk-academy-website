const translations = {
  en: {
    nav: {
      home: "Home", about: "About", services: "Services",
      academy: "Academy", blog: "Blog", contact: "Contact", register: "Register Now"
    },
    hero: {
      badge: "Professional Accounting Academy for Graduates",
      title: "Launching Your Career: From Graduate to Certified Accountant",
      subtitle: "Transform into a confident, tech-savvy accounting professional with in-demand ERP skills. Master GAAP, IFRS, financial analysis, and Odoo ERP — all in one program.",
      cta_primary: "Enroll Now",
      cta_secondary: "Explore the Program"
    },
    hero_card: {
      title: "What You Will Learn",
      subtitle: "A complete career-launching program for accounting graduates",
      li1: "Core Accounting (GAAP & IFRS)",
      li2: "Financial Statements & Analysis",
      li3: "Odoo ERP — Hands-On",
      li4: "Sales, Purchase & Inventory",
      li5: "Tax & Compliance",
      li6: "Industry Certification",
      badge_cert: "Industry Certified"
    },
    stats: {
      s1: "Graduates Struggle Without Practical Training",
      s2: "Companies Use Odoo Worldwide",
      s3: "Employers Prefer ERP-Skilled Accountants",
      s4: "Average Time to Land a Job After Training"
    },
    problem: {
      badge: "The Real Challenge",
      title_1: "Bridging the Gap Between",
      title_accent: "Academic",
      title_2: "& Real-World Accounting",
      subtitle: "University gives you the theory. Walk Academy gives you the edge to actually get hired.",
      p1_title: "Outdated Curricula",
      p1_desc: "University programs often don't cover the latest accounting software or market tools like Odoo or SAP.",
      p2_title: "No Practical Training",
      p2_desc: "Absence of hands-on training with essential accounting systems leaves graduates unprepared for day-one work.",
      p3_title: "Skills Gap",
      p3_desc: "85% of business graduates struggle to adapt to actual corporate accounting demands — Walk Academy closes that gap."
    },
    services: {
      badge: "What We Offer",
      title: "What You Will Learn",
      subtitle: "From fundamentals to advanced accounting — a complete career-ready curriculum",
      accounting: { title: "Core Principles & Standards", desc: "Deep understanding of fundamental accounting principles, GAAP, and international financial reporting standards (IFRS)." },
      academy: { title: "Financial Operations Mastery", desc: "Proficiency in bookkeeping, financial statement preparation, and regulatory compliance — building a solid career foundation." },
      consulting: { title: "Real-World Financial Analysis", desc: "Practical skills to analyze complex financial data, interpret key metrics, and present insights that drive sound business decisions." },
      odoo: { title: "Odoo ERP — Hands-On", desc: "Practical use of Odoo ERP covering Accounting, Sales & Purchases, Inventory & Warehousing, and Manufacturing modules." },
      audit: { title: "Simulated Business Scenarios", desc: "Apply concepts through realistic case studies covering full sales, purchase, and inventory workflows from start to finish." },
      tax: { title: "Certification & Career Launch", desc: "Earn industry-recognized credentials that validate your expertise and position you as a highly sought-after professional." }
    },
    odoo: {
      badge: "Hands-On ERP Training",
      title_1: "Odoo: The Key to",
      title_accent: "Modern Accounting Success",
      subtitle: "Used by over <strong>7 million companies worldwide</strong> — mastering Odoo gives you a clear competitive advantage and opens doors to higher salaries and faster promotions.",
      m1_title: "Accounting", m1_desc: "Automated bookkeeping, seamless bank reconciliations, efficient invoicing, and comprehensive payment processing inside Odoo.",
      m2_title: "Sales & Purchases", m2_desc: "Streamlined management of customer orders, supplier relationships, and precise customer invoicing from end to end.",
      m3_title: "Inventory & Warehousing", m3_desc: "Robust stock control, real-time inventory tracking, and optimized warehouse management for maximum efficiency.",
      m4_title: "Manufacturing", m4_desc: "Detailed production planning, accurate bill of materials, and efficient work order management inside Odoo.",
      m5_title: "Dashboards & Analytics", m5_desc: "Utilize Odoo's powerful dashboards to extract real-time insights and inform strategic data-driven business decisions.",
      m6_title: "Business Integration", m6_desc: "Understand how ERP systems integrate finance, HR, sales, and supply chain into one cohesive, centralized platform."
    },
    about: {
      title: "About Walk Academy",
      subtitle: "Who We Are",
      exp_label: "Years Experience",
      desc1: "Walk Academy is a professional accounting training academy dedicated to transforming graduates into confident, job-ready accountants equipped with both theoretical knowledge and hands-on ERP expertise.",
      desc2: "Our experienced instructors — industry veterans with years of practical experience — guide you through a comprehensive curriculum covering GAAP, IFRS, financial analysis, and Odoo ERP, offering continuous mentorship every step of the way.",
      mission: "Our Mission",
      mission_desc: "To empower businesses and individuals with the financial knowledge and tools for sustainable growth.",
      vision: "Our Vision",
      vision_desc: "To be the leading accounting and ERP solutions provider across the region.",
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
    common: {
      certificate: "Certificate",
      online: "Online"
    },
    why: {
      badge: "Academy Structure & Support",
      title: "Why Choose Walk Academy?",
      subtitle: "Your success is our priority — a supportive, enriching learning environment",
      p1_title: "Practical Curriculum",
      p1_desc: "A hands-on approach entirely focused on the skills actually demanded by the market — not just what's in a textbook.",
      p2_title: "Flexible Training",
      p2_desc: "Continuous training with no fixed time limit — learn at your own pace with no pressure, until you are truly ready.",
      p3_title: "Expert Mentorship",
      p3_desc: "Personalized, ongoing support from experienced trainers in both accounting and Odoo systems throughout your journey.",
      p4_title: "Recognized Certificates",
      p4_desc: "Accredited certifications that help you build a strong professional resume and stand out in a competitive job market."
    },
    testimonials: {
      badge: "Testimonials",
      title: "What Our Clients Say",
      subtitle: "Trusted by businesses across the region",
      t1_text: "From university student to accountant at a major import-export company within 6 months of training. Walk Academy bridged the gap that my degree never could.",
      t1_name: "Ahmed", t1_role: "Accountant, Import-Export Company",
      t2_text: "Successfully managed the accounting department of a startup using my acquired Odoo skills. The hands-on training made all the difference — it felt like real work from day one.",
      t2_name: "Sarah", t2_role: "Accounting Department Head, Startup",
      t3_text: "Secured a position in a multinational corporation thanks to my proficiency in modern accounting systems. Walk Academy's flexible training allowed me to learn at my own pace.",
      t3_name: "Mohamed", t3_role: "Accountant, Multinational Corporation"
    },
    blog: {
      badge: "Blog",
      title: "Latest Insights",
      subtitle: "Stay updated with accounting, finance, and ERP news",
      read_more: "Read More",
      b1_cat: "Accounting", b1_title: "Top 5 Accounting Mistakes Small Businesses Make", b1_desc: "Avoid these common pitfalls that cost businesses thousands every year...", b1_date: "May 1, 2026",
      b2_cat: "Odoo ERP",  b2_title: "Why Odoo is the Best ERP for Growing Businesses", b2_desc: "A deep dive into how Odoo streamlines operations and reduces costs...", b2_date: "Apr 25, 2026",
      b3_cat: "Training",  b3_title: "How to Start Your Accounting Career in 2026", b3_desc: "A complete roadmap for aspiring accountants entering the job market...", b3_date: "Apr 18, 2026"
    },
    cta: {
      title: "Start Now: Become the Professional Accountant the Market Needs!",
      subtitle: "Don't just rely on theoretical lectures. Go beyond theory — master Odoo, excel in any accounting system, and prepare for real opportunities with our full support.",
      btn_enroll: "Enroll Now",
      btn_connect: "Connect With Us",
      pill1: "Go Beyond Theory",
      pill2: "Master Odoo ERP",
      pill3: "Get Certified"
    },
    contact: {
      badge: "Contact",
      title: "Get In Touch", subtitle: "We'd love to hear from you",
      name: "Full Name", email: "Email Address", phone: "Phone Number",
      subject: "Subject", message: "Your Message", send: "Send Message",
      address: "Address", phone_label: "Phone", email_label: "Email", follow: "Follow Us"
    },
    register: {
      title: "Register for a Course", subtitle: "Take the first step toward your future",
      full_name: "Full Name", email: "Email Address", phone: "Phone Number",
      course: "Select Course", country: "Country", payment_title: "Payment Details",
      card: "Card Number", expiry: "Expiry Date", cvv: "CVV",
      amount: "Total Amount", submit: "Complete Registration & Pay",
      secure: "Secured by Stripe — Your payment is fully encrypted"
    },
    footer: {
      desc: "Your trusted partner for accounting, training, consulting, audit, and Odoo ERP solutions.",
      quick_links: "Quick Links", our_services: "Our Services", newsletter: "Newsletter",
      newsletter_desc: "Subscribe to get the latest updates and offers.",
      subscribe: "Subscribe", email_placeholder: "Your email address",
      rights: "All Rights Reserved", privacy: "Privacy Policy", terms: "Terms of Service"
    }
  },

  ar: {
    nav: {
      home: "الرئيسية", about: "من نحن", services: "خدماتنا",
      academy: "الأكاديمية", blog: "المدونة", contact: "اتصل بنا", register: "سجل الآن"
    },
    hero: {
      badge: "أكاديمية محاسبة احترافية للخريجين",
      title: "انطلق في مسيرتك: من خريج إلى محاسب معتمد",
      subtitle: "تحول إلى محاسب محترف واثق ومتمكن من تقنيات ERP المطلوبة. أتقن GAAP وIFRS والتحليل المالي وOdoo ERP — كل ذلك في برنامج واحد.",
      cta_primary: "سجل الآن",
      cta_secondary: "استكشف البرنامج"
    },
    hero_card: {
      title: "ماذا ستتعلم",
      subtitle: "برنامج متكامل لإطلاق مسيرة خريجي المحاسبة",
      li1: "أساسيات المحاسبة (GAAP & IFRS)",
      li2: "القوائم المالية والتحليل",
      li3: "Odoo ERP — تطبيق عملي",
      li4: "المبيعات والمشتريات والمخزون",
      li5: "الضرائب والامتثال",
      li6: "شهادة احترافية معتمدة",
      badge_cert: "معتمد دولياً"
    },
    stats: {
      s1: "من الخريجين يعانون بدون تدريب عملي",
      s2: "شركة تستخدم Odoo حول العالم",
      s3: "أصحاب العمل يفضلون المحاسبين المتمكنين من ERP",
      s4: "متوسط الوقت للحصول على وظيفة بعد التدريب"
    },
    problem: {
      badge: "التحدي الحقيقي",
      title_1: "سد الفجوة بين",
      title_accent: "الأكاديمي",
      title_2: "والمحاسبة الواقعية",
      subtitle: "الجامعة تعطيك النظرية. ووك أكاديمي تعطيك الميزة لتُوظَّف فعلاً.",
      p1_title: "مناهج قديمة",
      p1_desc: "برامج الجامعة غالباً لا تغطي أحدث برامج المحاسبة وأدوات السوق مثل Odoo أو SAP.",
      p2_title: "غياب التدريب العملي",
      p2_desc: "غياب التدريب التطبيقي على أنظمة المحاسبة الأساسية يجعل الخريجين غير مستعدين للعمل من اليوم الأول.",
      p3_title: "فجوة المهارات",
      p3_desc: "85% من خريجي إدارة الأعمال يكافحون للتكيف مع متطلبات المحاسبة الحقيقية — ووك أكاديمي تسد هذه الفجوة."
    },
    services: {
      badge: "ما نقدمه",
      title: "ماذا ستتعلم",
      subtitle: "من الأساسيات إلى المحاسبة المتقدمة — منهج متكامل جاهز لسوق العمل",
      accounting: { title: "المبادئ والمعايير الأساسية", desc: "فهم عميق لمبادئ المحاسبة الأساسية وGAAP ومعايير التقارير المالية الدولية IFRS." },
      academy: { title: "إتقان العمليات المالية", desc: "الكفاءة في مسك الدفاتر وإعداد القوائم المالية والامتثال التنظيمي — لبناء أساس مهني متين." },
      consulting: { title: "التحليل المالي الواقعي", desc: "مهارات عملية لتحليل البيانات المالية المعقدة وتفسير المؤشرات الرئيسية وتقديم رؤى تدعم القرارات التجارية السليمة." },
      odoo: { title: "Odoo ERP — تطبيق عملي", desc: "الاستخدام العملي لـ Odoo ERP يشمل وحدات المحاسبة والمبيعات والمشتريات والمخزون والتصنيع." },
      audit: { title: "سيناريوهات أعمال محاكاة", desc: "تطبيق المفاهيم عبر دراسات حالة واقعية تغطي سير عمل كاملة للمبيعات والمشتريات والمخزون من البداية للنهاية." },
      tax: { title: "الشهادة وإطلاق المسيرة", desc: "احصل على اعتمادات معترف بها في الصناعة تُثبت خبرتك وتضعك في مكانة المحترف المطلوب." }
    },
    odoo: {
      badge: "تدريب ERP عملي",
      title_1: "Odoo: مفتاح",
      title_accent: "نجاح المحاسبة الحديثة",
      subtitle: "يستخدمه أكثر من <strong>7 ملايين شركة حول العالم</strong> — إتقان Odoo يمنحك ميزة تنافسية واضحة ويفتح أبواب رواتب أعلى وترقيات أسرع.",
      m1_title: "المحاسبة", m1_desc: "مسك دفاتر آلي، تسوية بنكية سلسة، فوترة فعّالة، ومعالجة مدفوعات شاملة داخل Odoo.",
      m2_title: "المبيعات والمشتريات", m2_desc: "إدارة مبسّطة لطلبات العملاء وعلاقات الموردين وفواتير العملاء الدقيقة من البداية إلى النهاية.",
      m3_title: "المخزون والمستودعات", m3_desc: "تحكم قوي في المخزون، تتبع فوري، وإدارة مستودعات محسّنة لتحقيق أقصى كفاءة.",
      m4_title: "التصنيع", m4_desc: "تخطيط إنتاج تفصيلي، قائمة مواد دقيقة، وإدارة أوامر عمل فعّالة داخل Odoo.",
      m5_title: "لوحات البيانات والتحليلات", m5_desc: "استخدم لوحات Odoo القوية لاستخراج رؤى فورية واتخاذ قرارات أعمال استراتيجية مدفوعة بالبيانات.",
      m6_title: "التكامل المؤسسي", m6_desc: "تفهم كيف تدمج أنظمة ERP المالية والموارد البشرية والمبيعات وسلاسل التوريد في منصة مركزية متكاملة."
    },
    about: {
      title: "عن ووك أكاديمي",
      subtitle: "من نحن",
      exp_label: "سنوات خبرة",
      desc1: "ووك أكاديمي أكاديمية تدريب محاسبي احترافية مكرسة لتحويل الخريجين إلى محاسبين واثقين وجاهزين لسوق العمل، مجهزين بالمعرفة النظرية والخبرة العملية في ERP.",
      desc2: "مدربونا المتمرسون — خبراء الصناعة بسنوات من الخبرة العملية — يرشدونك عبر منهج شامل يغطي GAAP وIFRS والتحليل المالي وOdoo ERP، مع إرشاد مستمر في كل خطوة.",
      mission: "مهمتنا",
      mission_desc: "تمكين الأعمال والأفراد بالمعرفة المالية والأدوات اللازمة لتحقيق نمو مستدام.",
      vision: "رؤيتنا",
      vision_desc: "أن نكون المزود الرائد لحلول المحاسبة وERP في المنطقة.",
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
    common: {
      certificate: "شهادة",
      online: "أونلاين"
    },
    why: {
      badge: "هيكل الأكاديمية والدعم",
      title: "لماذا تختار ووك أكاديمي؟",
      subtitle: "نجاحك أولويتنا — بيئة تعليمية داعمة ومثرية",
      p1_title: "منهج عملي",
      p1_desc: "نهج تطبيقي يركز كلياً على المهارات المطلوبة فعلاً في السوق — لا مجرد ما في الكتب.",
      p2_title: "تدريب مرن",
      p2_desc: "تدريب مستمر بلا حد زمني ثابت — تعلّم بالسرعة التي تناسبك دون ضغط، حتى تكون جاهزاً حقاً.",
      p3_title: "إرشاد متخصص",
      p3_desc: "دعم شخصي ومستمر من مدربين ذوي خبرة في المحاسبة وأنظمة Odoo طوال رحلتك.",
      p4_title: "شهادات معترف بها",
      p4_desc: "شهادات معتمدة تساعدك على بناء سيرة ذاتية قوية والتميز في سوق عمل تنافسي."
    },
    testimonials: {
      badge: "آراء العملاء",
      title: "ماذا يقول عملاؤنا",
      subtitle: "موثوق به من قبل الشركات في جميع أنحاء المنطقة",
      t1_text: "من طالب جامعي إلى محاسب في شركة استيراد وتصدير كبرى خلال 6 أشهر من التدريب. ووك أكاديمي سدّت الفجوة التي لم تستطع شهادتي سدّها أبداً.",
      t1_name: "أحمد", t1_role: "محاسب، شركة استيراد وتصدير",
      t2_text: "أدرتُ القسم المحاسبي لشركة ناشئة بنجاح باستخدام مهارات Odoo التي اكتسبتها. التدريب العملي أحدث الفارق كله — شعر وكأنه عمل حقيقي من اليوم الأول.",
      t2_name: "سارة", t2_role: "رئيسة القسم المحاسبي، شركة ناشئة",
      t3_text: "حصلت على منصب في شركة متعددة الجنسيات بفضل إتقاني لأنظمة المحاسبة الحديثة. التدريب المرن لووك أكاديمي سمح لي بالتعلم بالوتيرة التي تناسبني.",
      t3_name: "محمد", t3_role: "محاسب، شركة متعددة الجنسيات"
    },
    blog: {
      badge: "المدونة",
      title: "آخر المستجدات",
      subtitle: "ابقَ على اطلاع بأخبار المحاسبة والمال وERP",
      read_more: "اقرأ المزيد",
      b1_cat: "محاسبة", b1_title: "أهم 5 أخطاء محاسبية ترتكبها الشركات الصغيرة", b1_desc: "تجنب هذه الأخطاء الشائعة التي تكلف الشركات آلاف الدولارات سنوياً...", b1_date: "1 مايو 2026",
      b2_cat: "Odoo ERP",  b2_title: "لماذا Odoo هو أفضل ERP للشركات النامية", b2_desc: "تعمق في كيفية تبسيط Odoo للعمليات وتقليل التكاليف...", b2_date: "25 أبريل 2026",
      b3_cat: "تدريب", b3_title: "كيف تبدأ مسيرتك المحاسبية في 2026", b3_desc: "خارطة طريق متكاملة للمحاسبين الطموحين الدخلاء على سوق العمل...", b3_date: "18 أبريل 2026"
    },
    cta: {
      title: "ابدأ الآن: كن المحاسب المحترف الذي يحتاجه السوق!",
      subtitle: "لا تعتمد فقط على المحاضرات النظرية. تجاوز النظرية — أتقن Odoo، وتفوق في أي نظام محاسبي، واستعد لفرص حقيقية بدعمنا الكامل.",
      btn_enroll: "سجل الآن",
      btn_connect: "تواصل معنا",
      pill1: "تجاوز النظرية",
      pill2: "أتقن Odoo ERP",
      pill3: "احصل على شهادة"
    },
    contact: {
      badge: "اتصل بنا",
      title: "تواصل معنا", subtitle: "يسعدنا سماع منك",
      name: "الاسم الكامل", email: "البريد الإلكتروني", phone: "رقم الهاتف",
      subject: "الموضوع", message: "رسالتك", send: "إرسال الرسالة",
      address: "العنوان", phone_label: "الهاتف", email_label: "البريد الإلكتروني", follow: "تابعنا"
    },
    register: {
      title: "سجل في دورة", subtitle: "اتخذ الخطوة الأولى نحو مستقبلك",
      full_name: "الاسم الكامل", email: "البريد الإلكتروني", phone: "رقم الهاتف",
      course: "اختر الدورة", country: "الدولة", payment_title: "تفاصيل الدفع",
      card: "رقم البطاقة", expiry: "تاريخ الانتهاء", cvv: "CVV",
      amount: "المبلغ الإجمالي", submit: "إتمام التسجيل والدفع",
      secure: "مؤمّن بواسطة Stripe — مدفوعاتك مشفرة بالكامل"
    },
    footer: {
      desc: "شريكك الموثوق للمحاسبة والتدريب والاستشارات والتدقيق وحلول Odoo ERP.",
      quick_links: "روابط سريعة", our_services: "خدماتنا", newsletter: "النشرة البريدية",
      newsletter_desc: "اشترك للحصول على آخر التحديثات والعروض.",
      subscribe: "اشتراك", email_placeholder: "بريدك الإلكتروني",
      rights: "جميع الحقوق محفوظة", privacy: "سياسة الخصوصية", terms: "شروط الخدمة"
    }
  },

  fr: {
    nav: {
      home: "Accueil", about: "À Propos", services: "Services",
      academy: "Académie", blog: "Blog", contact: "Contact", register: "S'inscrire"
    },
    hero: {
      badge: "Académie de Comptabilité Professionnelle pour Diplômés",
      title: "Lancez Votre Carrière: Du Diplômé au Comptable Certifié",
      subtitle: "Transformez-vous en un comptable professionnel confiant et technophile avec des compétences ERP recherchées. Maîtrisez GAAP, IFRS, l'analyse financière et Odoo ERP — tout en un programme.",
      cta_primary: "S'inscrire Maintenant",
      cta_secondary: "Explorer le Programme"
    },
    hero_card: {
      title: "Ce Que Vous Allez Apprendre",
      subtitle: "Un programme complet pour lancer la carrière des diplômés en comptabilité",
      li1: "Comptabilité de Base (GAAP & IFRS)",
      li2: "États Financiers & Analyse",
      li3: "Odoo ERP — Pratique",
      li4: "Ventes, Achats & Inventaire",
      li5: "Fiscalité & Conformité",
      li6: "Certification Professionnelle",
      badge_cert: "Certifié Professionnel"
    },
    stats: {
      s1: "Des diplômés peinent sans formation pratique",
      s2: "Entreprises utilisent Odoo dans le monde",
      s3: "Les employeurs préfèrent les comptables ERP",
      s4: "Temps moyen pour décrocher un emploi après formation"
    },
    problem: {
      badge: "Le Vrai Défi",
      title_1: "Combler l'Écart Entre",
      title_accent: "Académique",
      title_2: "& Comptabilité Réelle",
      subtitle: "L'université vous donne la théorie. Walk Academy vous donne l'avantage pour être réellement embauché.",
      p1_title: "Curricula Obsolètes",
      p1_desc: "Les programmes universitaires ne couvrent souvent pas les derniers logiciels comptables ou outils de marché comme Odoo ou SAP.",
      p2_title: "Pas de Formation Pratique",
      p2_desc: "L'absence de formation pratique avec les systèmes comptables essentiels laisse les diplômés non préparés pour le premier jour de travail.",
      p3_title: "Fossé des Compétences",
      p3_desc: "85% des diplômés en gestion peinent à s'adapter aux exigences comptables réelles — Walk Academy comble ce fossé."
    },
    services: {
      badge: "Ce que Nous Offrons",
      title: "Ce Que Vous Allez Apprendre",
      subtitle: "Des fondamentaux à la comptabilité avancée — un curriculum complet prêt pour l'emploi",
      accounting: { title: "Principes & Normes de Base", desc: "Compréhension approfondie des principes fondamentaux de la comptabilité, GAAP et normes IFRS." },
      academy: { title: "Maîtrise des Opérations Financières", desc: "Compétences en comptabilité, préparation des états financiers et conformité réglementaire — base solide pour votre carrière." },
      consulting: { title: "Analyse Financière Réelle", desc: "Compétences pratiques pour analyser des données financières complexes et présenter des insights qui guident les décisions." },
      odoo: { title: "Odoo ERP — Pratique", desc: "Utilisation pratique d'Odoo ERP couvrant Comptabilité, Ventes & Achats, Inventaire & Entreposage, et Fabrication." },
      audit: { title: "Scénarios d'Affaires Simulés", desc: "Appliquez les concepts via des études de cas réalistes couvrant des workflows complets de vente, achat et inventaire." },
      tax: { title: "Certification & Lancement de Carrière", desc: "Obtenez des accréditations reconnues par l'industrie qui valident votre expertise et vous positionnent comme professionnel recherché." }
    },
    odoo: {
      badge: "Formation ERP Pratique",
      title_1: "Odoo: La Clé du",
      title_accent: "Succès Comptable Moderne",
      subtitle: "Utilisé par plus de <strong>7 millions d'entreprises</strong> — maîtriser Odoo vous donne un avantage concurrentiel clair et ouvre les portes à de meilleurs salaires.",
      m1_title: "Comptabilité", m1_desc: "Comptabilité automatisée, rapprochements bancaires fluides, facturation efficace et traitement complet des paiements dans Odoo.",
      m2_title: "Ventes & Achats", m2_desc: "Gestion simplifiée des commandes clients, relations fournisseurs et facturation précise de bout en bout.",
      m3_title: "Inventaire & Entreposage", m3_desc: "Contrôle robuste des stocks, suivi en temps réel et gestion optimisée des entrepôts pour une efficacité maximale.",
      m4_title: "Fabrication", m4_desc: "Planification détaillée de la production, nomenclature précise et gestion efficace des ordres de travail dans Odoo.",
      m5_title: "Tableaux de Bord & Analytiques", m5_desc: "Utilisez les puissants tableaux de bord Odoo pour extraire des insights en temps réel et prendre des décisions stratégiques.",
      m6_title: "Intégration Métier", m6_desc: "Comprenez comment les ERP intègrent finance, RH, ventes et chaîne d'approvisionnement en une plateforme centralisée."
    },
    about: {
      title: "À Propos de Walk Academy",
      subtitle: "Qui Sommes-Nous",
      exp_label: "Ans d'Expérience",
      desc1: "Walk Academy est une académie professionnelle de formation comptable dédiée à transformer les diplômés en comptables confiants et prêts pour l'emploi, équipés de connaissances théoriques et d'expertise ERP pratique.",
      desc2: "Nos formateurs expérimentés — vétérans de l'industrie — vous guident à travers un curriculum complet couvrant GAAP, IFRS, l'analyse financière et Odoo ERP, avec un mentorat continu à chaque étape.",
      mission: "Notre Mission",
      mission_desc: "Donner aux entreprises et aux individus les connaissances financières et les outils nécessaires pour une croissance durable.",
      vision: "Notre Vision",
      vision_desc: "Être le fournisseur leader de solutions comptables et ERP dans la région.",
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
    common: {
      certificate: "Certificat",
      online: "En Ligne"
    },
    why: {
      badge: "Structure & Support de l'Académie",
      title: "Pourquoi Choisir Walk Academy?",
      subtitle: "Votre succès est notre priorité — un environnement d'apprentissage enrichissant",
      p1_title: "Curriculum Pratique",
      p1_desc: "Une approche pratique entièrement axée sur les compétences réellement demandées par le marché — pas seulement ce qui est dans les livres.",
      p2_title: "Formation Flexible",
      p2_desc: "Formation continue sans limite de temps fixe — apprenez à votre rythme sans pression, jusqu'à ce que vous soyez vraiment prêt.",
      p3_title: "Mentorat Expert",
      p3_desc: "Soutien personnalisé et continu de formateurs expérimentés en comptabilité et systèmes Odoo tout au long de votre parcours.",
      p4_title: "Certificats Reconnus",
      p4_desc: "Des certifications accréditées qui vous aident à construire un CV solide et à vous démarquer dans un marché de l'emploi compétitif."
    },
    testimonials: {
      badge: "Témoignages",
      title: "Ce que Disent Nos Clients",
      subtitle: "Fait confiance par des entreprises à travers la région",
      t1_text: "D'étudiant universitaire à comptable dans une grande entreprise import-export en 6 mois de formation. Walk Academy a comblé le fossé que mon diplôme n'a jamais pu.",
      t1_name: "Ahmed", t1_role: "Comptable, Entreprise Import-Export",
      t2_text: "J'ai réussi à gérer le département comptable d'une startup grâce à mes compétences Odoo. La formation pratique a tout changé — c'était comme du vrai travail dès le premier jour.",
      t2_name: "Sarah", t2_role: "Responsable Comptabilité, Startup",
      t3_text: "J'ai décroché un poste dans une multinationale grâce à ma maîtrise des systèmes comptables modernes. La formation flexible de Walk Academy m'a permis d'apprendre à mon rythme.",
      t3_name: "Mohamed", t3_role: "Comptable, Multinationale"
    },
    blog: {
      badge: "Blog",
      title: "Dernières Actualités",
      subtitle: "Restez informé des nouvelles de la comptabilité, finance et ERP",
      read_more: "Lire la Suite",
      b1_cat: "Comptabilité", b1_title: "Top 5 des Erreurs Comptables des Petites Entreprises", b1_desc: "Évitez ces erreurs courantes qui coûtent des milliers aux entreprises chaque année...", b1_date: "1 Mai 2026",
      b2_cat: "Odoo ERP", b2_title: "Pourquoi Odoo est le Meilleur ERP pour les Entreprises en Croissance", b2_desc: "Une plongée profonde dans la façon dont Odoo simplifie les opérations et réduit les coûts...", b2_date: "25 Avril 2026",
      b3_cat: "Formation", b3_title: "Comment Démarrer Votre Carrière Comptable en 2026", b3_desc: "Une feuille de route complète pour les comptables aspirants entrant sur le marché du travail...", b3_date: "18 Avril 2026"
    },
    cta: {
      title: "Commencez Maintenant: Devenez le Comptable Professionnel dont le Marché a Besoin!",
      subtitle: "Ne comptez pas seulement sur les cours théoriques. Allez au-delà de la théorie — maîtrisez Odoo, excellez dans tout système comptable, et préparez-vous pour de vraies opportunités.",
      btn_enroll: "S'inscrire Maintenant",
      btn_connect: "Nous Contacter",
      pill1: "Au-delà de la Théorie",
      pill2: "Maîtriser Odoo ERP",
      pill3: "Obtenir une Certification"
    },
    contact: {
      badge: "Contact",
      title: "Contactez-Nous", subtitle: "Nous serions ravis de vous entendre",
      name: "Nom Complet", email: "Adresse Email", phone: "Numéro de Téléphone",
      subject: "Sujet", message: "Votre Message", send: "Envoyer le Message",
      address: "Adresse", phone_label: "Téléphone", email_label: "Email", follow: "Suivez-Nous"
    },
    register: {
      title: "S'inscrire à un Cours", subtitle: "Faites le premier pas vers votre avenir",
      full_name: "Nom Complet", email: "Adresse Email", phone: "Numéro de Téléphone",
      course: "Sélectionner un Cours", country: "Pays", payment_title: "Détails de Paiement",
      card: "Numéro de Carte", expiry: "Date d'Expiration", cvv: "CVV",
      amount: "Montant Total", submit: "Finaliser l'Inscription & Payer",
      secure: "Sécurisé par Stripe — Votre paiement est entièrement chiffré"
    },
    footer: {
      desc: "Votre partenaire de confiance pour la comptabilité, la formation, le conseil, l'audit et les solutions Odoo ERP.",
      quick_links: "Liens Rapides", our_services: "Nos Services", newsletter: "Newsletter",
      newsletter_desc: "Abonnez-vous pour recevoir les dernières mises à jour et offres.",
      subscribe: "S'abonner", email_placeholder: "Votre adresse email",
      rights: "Tous Droits Réservés", privacy: "Politique de Confidentialité", terms: "Conditions d'Utilisation"
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
    if (val !== undefined && val !== null) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = val;
      } else {
        el.innerHTML = val;
      }
    }
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
  const saved = localStorage.getItem('walk_lang') || 'ar';
  setLanguage(saved);
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang')));
  });
});
