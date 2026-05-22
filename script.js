const contactConfig = {
  phone: "+91 9863194232",
  phoneHref: "+919863194232",
  whatsapp: "919863194232",
  email: "aida.institutes@gmail.com",
  address: "Pahamsohthri, Nongpoh, Meghalaya, 793102",
  whatsappMessage: "Hello AIDA, I want to know about course admission.",
};

const courses = [
  {
    name: "Typing Master (TM)",
    category: "Foundation",
    duration: "1 Month",
    level: "TM",
    fees: "Rs. 1250",
    icon: "keyboard",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=80",
    description: "Build typing speed, accuracy, keyboard confidence, and essential computer handling skills.",
  },
  {
    name: "Microsoft Office (MS-Office)",
    category: "Office",
    duration: "2 Months",
    level: "MS-Office",
    fees: "Rs. 2000",
    icon: "table-2",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
    description: "Learn Word, Excel, PowerPoint, file management, reports, and everyday office productivity.",
  },
  {
    name: "Financial Accounting in Tally (TALLY)",
    category: "Accounting",
    duration: "3 Months",
    level: "TALLY",
    fees: "Rs. 2700",
    icon: "receipt-text",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
    description: "Study accounting entries, ledgers, GST basics, inventory, reports, and Tally workflows.",
  },
  {
    name: "Data Entry Certificate Program (DECP)",
    category: "Data Entry",
    duration: "3 Months",
    level: "DECP",
    fees: "Rs. 2700",
    icon: "database",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80",
    description: "Practice accurate data entry, document handling, spreadsheets, internet use, and workplace typing.",
  },
  {
    name: "Graphics Design & Multimedia (GDM)",
    category: "Creative",
    duration: "3 Months",
    level: "GDM",
    fees: "Rs. 2700",
    icon: "palette",
    image: "https://images.unsplash.com/photo-1613909207039-6b173b755cc1?auto=format&fit=crop&w=900&q=80",
    description: "Create graphics, social media designs, multimedia assets, layouts, and visual communication projects.",
  },
  {
    name: "Diploma in Computer Application (DCA)",
    category: "Diploma",
    duration: "6 Months",
    level: "DCA",
    fees: "Rs. 5000",
    icon: "monitor",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80",
    description: "Cover computer fundamentals, office tools, internet skills, typing, and practical application work.",
  },
  {
    name: "Diploma in Office Management Application (DOMA)",
    category: "Diploma",
    duration: "6 Months",
    level: "DOMA",
    fees: "Rs. 5000",
    icon: "briefcase-business",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
    description: "Learn office administration, computer applications, documentation, spreadsheets, and workplace systems.",
  },
  {
    name: "Post Graduate Diploma in Computer Application (PGDCA)",
    category: "Diploma",
    duration: "1 Year",
    level: "PGDCA",
    fees: "Rs. 9000",
    icon: "graduation-cap",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80",
    description: "Advance through computer applications, office systems, programming foundations, and project work.",
  },
  {
    name: "Certificate in Computer Hardware (CCH)",
    category: "Hardware",
    duration: "3 Months",
    level: "CCH",
    fees: "Rs. 5200",
    icon: "cpu",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
    description: "Understand computer parts, assembly, maintenance, troubleshooting, installation, and hardware basics.",
  },
  {
    name: "Certificate in Computer Networking (CCN)",
    category: "Networking",
    duration: "3 Months",
    level: "CCN",
    fees: "Rs. 5200",
    icon: "network",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80",
    description: "Learn networking basics, connectivity, devices, IP concepts, cabling, and practical troubleshooting.",
  },
  {
    name: "Website & Application Development (WAD)",
    category: "Development",
    duration: "3 Months",
    level: "WAD",
    fees: "Rs. 4200",
    icon: "code-2",
    image: "image/Firefly_Gemini Flash_Website & Application Development 130928.png",
    description: "Build website and app foundations with layouts, interfaces, basic coding, and project practice.",
  },
  {
    name: "Diploma in Hardware & Networking (DHN)",
    category: "Hardware & Networking",
    duration: "6 Months",
    level: "DHN",
    fees: "Rs. 9200",
    icon: "server-cog",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80",
    description: "Combine hardware servicing and networking skills for installation, maintenance, and support roles.",
  },
];

const lmsFeatures = [
  ["video", "Video Lessons", "Organized modules for recorded classes and future live sessions."],
  ["activity", "Progress Tracking", "Course progress, module completion, scores, and milestones."],
  ["clipboard-check", "Assignments", "Submission-ready structure for projects and trainer feedback."],
  ["circle-help", "Online Exams", "Exam cards, attempts, timing, scoring, and certificate readiness."],
  ["download", "Certificates", "Downloadable credentials with verification architecture."],
  ["credit-card", "Payments", "Admission and course payment gateway space for future integration."],
];

const whyChoose = [
  ["graduation-cap", "Experienced Trainers", "Learn from mentors who explain technology in clear, practical language."],
  ["hammer", "Practical Projects", "Build portfolios, assignments, and real-world confidence from day one."],
  ["briefcase", "Job-Oriented Courses", "Every course is shaped around employable digital skills and outcomes."],
  ["wallet", "Affordable Fees", "Premium training structure with accessible pricing and flexible options."],
  ["monitor", "Modern Labs", "A focused learning environment for coding, design, office tools, and practice."],
  ["wifi", "Online + Offline", "Hybrid learning readiness for classroom sessions and digital lessons."],
  ["compass", "Career Guidance", "Support for choosing courses, building resumes, and planning next steps."],
  ["handshake", "Placement Assistance", "Interview preparation and opportunity support for career-focused learners."],
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "DCA Student",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
    quote: "AIDA made computer applications feel clear and practical. The lessons helped me become more confident with daily digital work.",
  },
  {
    name: "Rahul Verma",
    role: "Microsoft Office Student",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    quote: "The MS Office training was structured and useful. I learned documents, spreadsheets, and presentations in a very practical way.",
  },
  {
    name: "Ayesha Khan",
    role: "GDM Student",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=300&q=80",
    quote: "The graphics and multimedia course helped me understand design tools, layouts, and creative project work.",
  },
  {
    name: "Neeraj Patel",
    role: "TALLY Student",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80",
    quote: "I joined for accounting skills and got exactly that. The Tally examples felt connected to real business work.",
  },
  {
    name: "Meera Nair",
    role: "Hardware & Networking Student",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
    quote: "Hardware and networking topics were explained step by step, with enough practice to understand real support work.",
  },
];

const galleryItems = [
  ["https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80", "Collaborative Classrooms", "Hands-on group learning"],
  ["https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80", "Workshop Sessions", "Mentor-led practical training"],
  ["https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80", "Innovation Events", "Career and technology guidance"],
  ["https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80", "Computer Labs", "Focused digital practice"],
  ["https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80", "Student Projects", "Portfolio-building activities"],
  ["https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80", "Career Mentoring", "Guidance for next steps"],
];

const roadmapItems = [
  ["user-check", "Online Admission", "Application forms, seat booking, batch selection, and payment handoff."],
  ["log-in", "Student Login Portal", "Secure accounts for lessons, assignments, exams, and certificates."],
  ["bot", "AI Chatbot Assistant", "Instant course guidance, FAQs, and admission support automation."],
  ["badge-check", "Certificate Verification", "Public verification page with QR and credential ID matching."],
  ["layout-dashboard", "Admin Dashboard", "Course, student, batch, attendance, and enquiry management."],
  ["calendar-check", "Attendance System", "Batch-wise attendance records and student progress insights."],
  ["newspaper", "Blog System", "SEO-friendly articles for local searches and digital skills education."],
  ["languages", "Multi-language Support", "Scalable language structure for regional accessibility."],
];

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

const icon = (name) => `<i data-lucide="${name}"></i>`;

function renderCourses(items = courses) {
  const grid = $("[data-course-grid]");
  if (!grid) return;

  if (!items.length) {
    grid.innerHTML = `<div class="empty-state">No courses found. Try a different search or category.</div>`;
    return;
  }

  grid.innerHTML = items.map((course) => `
    <article class="course-card" data-animate>
      <div class="course-media">
        <img src="${course.image}" alt="${course.name} course" loading="lazy" decoding="async">
        <span class="course-icon">${icon(course.icon)}</span>
      </div>
      <div class="course-body">
        <span class="course-category">${course.category}</span>
        <h3>${course.name}</h3>
        <p>${course.description}</p>
        <div class="course-meta" aria-label="${course.name} details">
          <span>${course.duration}</span>
          <span>${course.level}</span>
          <span>${course.fees}</span>
        </div>
        <a class="btn btn-secondary" href="#contact">${icon("user-plus")} Enroll Now</a>
      </div>
    </article>
  `).join("");

  refreshEnhancements();
}

function renderCategoryFilters() {
  const filters = $("[data-category-filters]");
  if (!filters) return;
  const categories = ["All", ...new Set(courses.map((course) => course.category))];

  filters.innerHTML = categories.map((category, index) => `
    <button type="button" class="filter-chip ${index === 0 ? "is-active" : ""}" data-category="${category}">
      ${category}
    </button>
  `).join("");
}

function applyCourseFilters() {
  const query = ($("#course-search")?.value || "").trim().toLowerCase();
  const activeCategory = $(".filter-chip.is-active")?.dataset.category || "All";
  const filtered = courses.filter((course) => {
    const matchesQuery = [course.name, course.category, course.level, course.description]
      .join(" ")
      .toLowerCase()
      .includes(query);
    const matchesCategory = activeCategory === "All" || course.category === activeCategory;
    return matchesQuery && matchesCategory;
  });

  renderCourses(filtered);
}

function setupCourseFilters() {
  renderCategoryFilters();
  renderCourses();

  $("#course-search")?.addEventListener("input", applyCourseFilters);

  $("[data-category-filters]")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");
    if (!button) return;

    $$(".filter-chip").forEach((chip) => chip.classList.remove("is-active"));
    button.classList.add("is-active");
    applyCourseFilters();
  });

  const courseSelect = $("#course");
  if (courseSelect) {
    courseSelect.innerHTML += courses
      .map((course) => `<option value="${course.name}">${course.name}</option>`)
      .join("");
  }
}

function renderIconCards(selector, items, className) {
  const container = $(selector);
  if (!container) return;

  container.innerHTML = items.map(([iconName, title, text]) => `
    <article class="${className} glass-panel" data-animate>
      ${icon(iconName)}
      <h3>${title}</h3>
      <p>${text}</p>
    </article>
  `).join("");
}

function renderTestimonials() {
  const track = $("[data-testimonial-track]");
  if (!track) return;

  track.innerHTML = testimonials.map((item) => `
    <article class="testimonial-card">
      <div class="student-row">
        <img src="${item.image}" alt="${item.name}" loading="lazy" decoding="async">
        <span>
          <strong>${item.name}</strong>
          <small>${item.role}</small>
        </span>
      </div>
      <div class="rating" aria-label="5 out of 5 stars">★★★★★</div>
      <p>“${item.quote}”</p>
    </article>
  `).join("");
}

function renderGallery() {
  const grid = $("[data-gallery-grid]");
  if (!grid) return;

  grid.innerHTML = galleryItems.map(([image, title, label]) => `
    <figure class="gallery-item" data-animate>
      <img src="${image}" alt="${title}" loading="lazy" decoding="async">
      <figcaption class="gallery-caption">
        <strong>${title}</strong>
        <small>${label}</small>
      </figcaption>
    </figure>
  `).join("");
}

function setupNavigation() {
  const header = $("[data-header]");
  const toggle = $("[data-nav-toggle]");
  const panel = $("[data-nav-panel]");

  const setHeaderState = () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 12);
  };

  setHeaderState();
  window.addEventListener("scroll", setHeaderState, { passive: true });

  toggle?.addEventListener("click", () => {
    const isOpen = panel?.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(Boolean(isOpen)));
    toggle.innerHTML = icon(isOpen ? "x" : "menu");
    window.lucide?.createIcons();
  });

  panel?.addEventListener("click", (event) => {
    if (!event.target.closest("a")) return;
    panel.classList.remove("is-open");
    toggle?.setAttribute("aria-expanded", "false");
    if (toggle) toggle.innerHTML = icon("menu");
    window.lucide?.createIcons();
  });
}

function setupRevealAnimations() {
  const animated = $$("[data-animate]");
  if (!animated.length) return;

  if (!("IntersectionObserver" in window)) {
    animated.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.13 });

  animated.forEach((item) => observer.observe(item));
}

function setupCounters() {
  const counters = $$("[data-counter]");
  if (!counters.length) return;

  const animateCounter = (counter) => {
    const target = Number(counter.dataset.target || 0);
    const duration = 1500;
    const start = performance.now();

    const tick = (time) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      counter.textContent = Math.round(target * eased).toLocaleString("en-IN");
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  };

  if (!("IntersectionObserver" in window)) {
    counters.forEach(animateCounter);
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      animateCounter(entry.target);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.5 });

  counters.forEach((counter) => observer.observe(counter));
}

function setupTestimonialsCarousel() {
  const track = $("[data-testimonial-track]");
  const prev = $("[data-testimonial-prev]");
  const next = $("[data-testimonial-next]");
  if (!track || !prev || !next) return;

  const scrollByPage = (direction) => {
    track.scrollBy({
      left: direction * Math.max(track.clientWidth * 0.86, 280),
      behavior: "smooth",
    });
  };

  prev.addEventListener("click", () => scrollByPage(-1));
  next.addEventListener("click", () => scrollByPage(1));

  let autoScroll = window.setInterval(() => {
    const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 8;
    track.scrollTo({ left: atEnd ? 0 : track.scrollLeft + track.clientWidth * 0.86, behavior: "smooth" });
  }, 5200);

  track.addEventListener("pointerdown", () => {
    window.clearInterval(autoScroll);
    autoScroll = null;
  }, { once: true });
}

function setupContactDetails() {
  $$("[data-phone-text]").forEach((node) => {
    node.textContent = contactConfig.phone;
  });
  $$("[data-email-text]").forEach((node) => {
    node.textContent = contactConfig.email;
  });
  $$("[data-address-text]").forEach((node) => {
    node.textContent = contactConfig.address;
  });
  $$("[data-phone-link]").forEach((node) => {
    node.setAttribute("href", `tel:${contactConfig.phoneHref}`);
  });
  $$("[data-email-link]").forEach((node) => {
    node.setAttribute("href", `mailto:${contactConfig.email}`);
  });
  $$("[data-whatsapp-link]").forEach((node) => {
    const message = encodeURIComponent(contactConfig.whatsappMessage);
    node.setAttribute("href", `https://wa.me/${contactConfig.whatsapp}?text=${message}`);
    node.setAttribute("target", "_blank");
    node.setAttribute("rel", "noopener");
  });
}

function setupForms() {
  const contactForm = $("[data-contact-form]");
  const status = $("[data-form-status]");

  contactForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const name = formData.get("name") || "Student";
    status.textContent = `Thanks, ${name}. AIDA will contact you shortly.`;
    contactForm.reset();
  });

  $("[data-newsletter-form]")?.addEventListener("submit", (event) => {
    event.preventDefault();
    event.currentTarget.reset();
  });
}

function setupParticles() {
  const canvas = $("#gold-particles");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!canvas || reduceMotion) return;

  const ctx = canvas.getContext("2d");
  let particles = [];
  let width = 0;
  let height = 0;
  let animationFrame = null;

  const resize = () => {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    width = canvas.offsetWidth;
    height = canvas.offsetHeight;
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    particles = Array.from({ length: Math.min(90, Math.floor(width / 16)) }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      radius: Math.random() * 1.8 + 0.7,
    }));
  };

  const draw = () => {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "rgba(212, 175, 55, 0.72)";
    ctx.strokeStyle = "rgba(212, 175, 55, 0.16)";

    particles.forEach((particle, index) => {
      particle.x += particle.vx;
      particle.y += particle.vy;

      if (particle.x < 0 || particle.x > width) particle.vx *= -1;
      if (particle.y < 0 || particle.y > height) particle.vy *= -1;

      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fill();

      for (let nextIndex = index + 1; nextIndex < particles.length; nextIndex += 1) {
        const next = particles[nextIndex];
        const distance = Math.hypot(particle.x - next.x, particle.y - next.y);
        if (distance > 115) continue;
        ctx.globalAlpha = 1 - distance / 115;
        ctx.beginPath();
        ctx.moveTo(particle.x, particle.y);
        ctx.lineTo(next.x, next.y);
        ctx.stroke();
        ctx.globalAlpha = 1;
      }
    });

    animationFrame = requestAnimationFrame(draw);
  };

  resize();
  draw();
  window.addEventListener("resize", resize, { passive: true });
  window.addEventListener("pagehide", () => cancelAnimationFrame(animationFrame));
}

function setupLoader() {
  const hideLoader = () => $(".page-loader")?.classList.add("is-hidden");
  window.addEventListener("load", hideLoader);
  window.setTimeout(hideLoader, 1200);
}

function setupYear() {
  $$("[data-year]").forEach((node) => {
    node.textContent = new Date().getFullYear();
  });
}

function refreshEnhancements() {
  window.lucide?.createIcons();
  setupRevealAnimations();
}

function init() {
  setupLoader();
  setupNavigation();
  setupCourseFilters();
  renderIconCards("[data-lms-features]", lmsFeatures, "lms-card");
  renderIconCards("[data-why-grid]", whyChoose, "why-card");
  renderIconCards("[data-roadmap-grid]", roadmapItems, "roadmap-card");
  renderTestimonials();
  renderGallery();
  setupCounters();
  setupTestimonialsCarousel();
  setupContactDetails();
  setupForms();
  setupParticles();
  setupYear();
  refreshEnhancements();
}

document.addEventListener("DOMContentLoaded", init);
