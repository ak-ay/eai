import { mkdir, writeFile } from "node:fs/promises";

const root = "https://www.eaiorg.in";
const whatsapp = "https://wa.me/919747735355";

const pages = [
  {
    path: "courses/skill-certificate/index.html",
    url: `${root}/courses/skill-certificate/`,
    title: "3-Month Skill Certificate Programs | Empowering Aspirational India",
    description:
      "Explore 3-month online Skill Certificate Programs awarded by SUNY Potsdam through Empowering Aspirational India.",
    eyebrow: "SUNY and NEF",
    h1: "3-Month Skill Certificate Programs",
    lead:
      "Short-format certification for learners who need practical job-ready capability, online delivery, and a fast credential pathway.",
    provider: "State University of New York at Potsdam, USA",
    credential: "Skill Certificate",
    duration: "3 months",
    mode: "Online through Skillsoft LMS",
    recognition: "UGC and AIU accredited in India",
    audience: "Students and early-career learners who want practical career-oriented upskilling.",
    outcomes: [
      "Build job-ready capability through structured online learning.",
      "Receive a SUNY Potsdam certificate with secure QR verification.",
      "Use the certificate pathway for career advancement and higher education readiness.",
    ],
    details: [
      "Study materials, recorded lectures, assignments, tutorials, and assessments are delivered online.",
      "The program is designed for learners who have completed 12th grade or an undergraduate degree, subject to individual eligibility criteria.",
      "Scholarship and course selection guidance is available through the EAI enquiry process.",
    ],
    groupUrl: `${root}/#job-ready`,
    providerUrl: "https://www.potsdam.edu/",
  },
  {
    path: "courses/professional-diploma/index.html",
    url: `${root}/courses/professional-diploma/`,
    title: "6-Month Professional Diploma Programs | Empowering Aspirational India",
    description:
      "Explore 6-month online Professional Diploma Programs awarded by SUNY Potsdam through Empowering Aspirational India.",
    eyebrow: "SUNY and NEF",
    h1: "6-Month Professional Diploma Programs",
    lead:
      "A deeper professional pathway for working learners who want structured upskilling, applied learning, and stronger role readiness.",
    provider: "State University of New York at Potsdam, USA",
    credential: "Professional Diploma",
    duration: "6 months",
    mode: "Online through Skillsoft LMS",
    recognition: "UGC and AIU accredited in India",
    audience: "Working professionals, graduates, and learners seeking stronger career-oriented credentials.",
    outcomes: [
      "Develop industry-focused professional capability.",
      "Earn a professional diploma awarded by SUNY Potsdam.",
      "Strengthen career advancement, higher education, and professional growth pathways.",
    ],
    details: [
      "Course delivery includes online learning resources, recorded lectures, assignments, tutorials, and assessments.",
      "Certificates are issued directly by SUNY Potsdam with secure QR verification.",
      "EAI helps learners identify the appropriate diploma pathway before applying.",
    ],
    groupUrl: `${root}/#job-ready`,
    providerUrl: "https://www.potsdam.edu/",
  },
  {
    path: "courses/postgraduate-diploma/index.html",
    url: `${root}/courses/postgraduate-diploma/`,
    title: "12-Month Postgraduate Diploma Programs | Empowering Aspirational India",
    description:
      "Explore 12-month online Postgraduate Diploma Programs awarded by SUNY Potsdam through Empowering Aspirational India.",
    eyebrow: "SUNY and NEF",
    h1: "12-Month Postgraduate Diploma Programs",
    lead:
      "An extended pathway for advanced career preparation, higher education progression, and globally relevant professional growth.",
    provider: "State University of New York at Potsdam, USA",
    credential: "Postgraduate Diploma",
    duration: "12 months",
    mode: "Online through Skillsoft LMS",
    recognition: "UGC and AIU accredited in India",
    audience: "Graduates and professionals seeking a longer, more comprehensive credential pathway.",
    outcomes: [
      "Build a stronger academic and professional profile.",
      "Earn a postgraduate diploma awarded by SUNY Potsdam.",
      "Prepare for advanced career movement, higher education, and professional recognition.",
    ],
    details: [
      "The pathway is delivered online for flexible study alongside work or existing commitments.",
      "Learning support includes study materials, recorded lectures, assignments, tutorials, and assessments.",
      "EAI provides guidance for program selection and application readiness.",
    ],
    groupUrl: `${root}/#job-ready`,
    providerUrl: "https://www.potsdam.edu/",
  },
  {
    path: "doctoral-programs/dba/index.html",
    url: `${root}/doctoral-programs/dba/`,
    title: "Doctor of Business Administration (DBA) | Empowering Aspirational India",
    description:
      "Explore the online experience-based Doctor of Business Administration pathway from The Thames International University through EAI.",
    eyebrow: "TIU Paris",
    h1: "Doctor of Business Administration (DBA)",
    lead:
      "An online experience-based doctorate for senior professionals pursuing recognition in business leadership, management practice, and strategic decision-making.",
    provider: "The Thames International University, Paris, France",
    credential: "Doctor of Business Administration",
    duration: "Experience-based doctoral pathway",
    mode: "Fully online and flexible",
    recognition: "European professional doctorate pathway",
    audience: "Senior professionals, executives, business leaders, consultants, and management practitioners.",
    outcomes: [
      "Strengthen professional credibility for leadership and consulting roles.",
      "Position business experience within an advanced doctoral pathway.",
      "Support recognition for strategic thinking, innovation, and practical leadership expertise.",
    ],
    details: [
      "Professional Doctorate pathways require a minimum of 15 years of work experience.",
      "The program is designed for working professionals seeking advancement without career interruption.",
      "EAI guides candidates through eligibility review and application preparation.",
    ],
    groupUrl: `${root}/#doctoral`,
    providerUrl: `${root}/#doctoral`,
  },
  {
    path: "doctoral-programs/dhum/index.html",
    url: `${root}/doctoral-programs/dhum/`,
    title: "Doctor of Humanities (DHum) | Empowering Aspirational India",
    description:
      "Explore the online experience-based Doctor of Humanities pathway from The Thames International University through EAI.",
    eyebrow: "TIU Paris",
    h1: "Doctor of Humanities (DHum)",
    lead:
      "An online experience-based doctorate for professionals working across humanities, social impact, culture, public thought, and leadership fields.",
    provider: "The Thames International University, Paris, France",
    credential: "Doctor of Humanities",
    duration: "Experience-based doctoral pathway",
    mode: "Fully online and flexible",
    recognition: "European professional doctorate pathway",
    audience: "Professionals in humanities, culture, education, communication, social impact, and community-facing leadership roles.",
    outcomes: [
      "Build a stronger global academic and professional profile.",
      "Connect professional experience with humanities-focused doctoral recognition.",
      "Support leadership, advisory, and public-facing professional roles.",
    ],
    details: [
      "Professional Doctorate pathways require a minimum of 15 years of work experience.",
      "The program is delivered online for professionals who cannot interrupt their careers.",
      "EAI supports candidates with course guidance and application next steps.",
    ],
    groupUrl: `${root}/#doctoral`,
    providerUrl: `${root}/#doctoral`,
  },
  {
    path: "doctoral-programs/dpsych/index.html",
    url: `${root}/doctoral-programs/dpsych/`,
    title: "Doctor of Psychology (DPsych) | Empowering Aspirational India",
    description:
      "Explore the online experience-based Doctor of Psychology pathway from The Thames International University through EAI.",
    eyebrow: "TIU Paris",
    h1: "Doctor of Psychology (DPsych)",
    lead:
      "An online experience-based doctorate connected to psychology, human behavior, people-centered leadership, and professional practice.",
    provider: "The Thames International University, Paris, France",
    credential: "Doctor of Psychology",
    duration: "Experience-based doctoral pathway",
    mode: "Fully online and flexible",
    recognition: "European professional doctorate pathway",
    audience: "Experienced professionals working in people-centered, organizational, educational, counseling, or behavioral domains.",
    outcomes: [
      "Enhance professional credibility in psychology-adjacent and people-centered roles.",
      "Support leadership, consulting, and specialized strategic opportunities.",
      "Connect practical experience with doctoral-level recognition.",
    ],
    details: [
      "Professional Doctorate pathways require a minimum of 15 years of work experience.",
      "The qualification is designed around professional experience and flexible online advancement.",
      "EAI helps candidates understand fit, eligibility, and application requirements.",
    ],
    groupUrl: `${root}/#doctoral`,
    providerUrl: `${root}/#doctoral`,
  },
  {
    path: "doctoral-programs/edd/index.html",
    url: `${root}/doctoral-programs/edd/`,
    title: "Doctor of Education (EdD) | Empowering Aspirational India",
    description:
      "Explore the online experience-based Doctor of Education pathway from The Thames International University through EAI.",
    eyebrow: "TIU Paris",
    h1: "Doctor of Education (EdD)",
    lead:
      "An online experience-based doctorate for education leaders, academic professionals, trainers, and institutional decision-makers.",
    provider: "The Thames International University, Paris, France",
    credential: "Doctor of Education",
    duration: "Experience-based doctoral pathway",
    mode: "Fully online and flexible",
    recognition: "European professional doctorate pathway",
    audience: "Educators, academic leaders, trainers, education consultants, and institutional professionals.",
    outcomes: [
      "Strengthen credibility for academic leadership and education consulting.",
      "Position professional education experience within a doctoral pathway.",
      "Support advancement in training, institutional strategy, and leadership roles.",
    ],
    details: [
      "Professional Doctorate pathways require a minimum of 15 years of work experience.",
      "The program is structured for working professionals seeking flexible academic advancement.",
      "EAI guides applicants through program fit and application preparation.",
    ],
    groupUrl: `${root}/#doctoral`,
    providerUrl: `${root}/#doctoral`,
  },
  {
    path: "doctoral-programs/das/index.html",
    url: `${root}/doctoral-programs/das/`,
    title: "Doctor of Applied Sciences (DAS) | Empowering Aspirational India",
    description:
      "Explore the online experience-based Doctor of Applied Sciences pathway from The Thames International University through EAI.",
    eyebrow: "TIU Paris",
    h1: "Doctor of Applied Sciences (DAS)",
    lead:
      "An online applied sciences doctoral pathway for professionals using scientific, technical, operational, or interdisciplinary expertise.",
    provider: "The Thames International University, Paris, France",
    credential: "Doctor of Applied Sciences",
    duration: "Experience-based doctoral pathway",
    mode: "Fully online and flexible",
    recognition: "European professional doctorate pathway",
    audience: "Experienced technical, scientific, operational, and interdisciplinary professionals.",
    outcomes: [
      "Support recognition for applied expertise and practical innovation.",
      "Strengthen professional profile for leadership and specialized strategic roles.",
      "Translate professional experience into a globally oriented doctoral pathway.",
    ],
    details: [
      "Professional Doctorate pathways require a minimum of 15 years of work experience.",
      "The program supports flexible advancement without career interruption.",
      "EAI helps candidates identify fit and complete the enquiry process.",
    ],
    groupUrl: `${root}/#doctoral`,
    providerUrl: `${root}/#doctoral`,
  },
  {
    path: "doctoral-programs/phd/index.html",
    url: `${root}/doctoral-programs/phd/`,
    title: "Doctor of Philosophy (Ph.D.) | Empowering Aspirational India",
    description:
      "Explore the online Doctor of Philosophy pathway across multiple disciplines through Empowering Aspirational India.",
    eyebrow: "TIU Paris",
    h1: "Doctor of Philosophy (Ph.D.)",
    lead:
      "A globally oriented doctoral pathway across multiple disciplines for qualified learners seeking advanced academic and professional recognition.",
    provider: "The Thames International University, Paris, France",
    credential: "Doctor of Philosophy",
    duration: "Doctoral pathway across multiple disciplines",
    mode: "Online and flexible",
    recognition: "European doctoral pathway",
    audience: "Qualified learners and professionals seeking an advanced academic profile across eligible disciplines.",
    outcomes: [
      "Strengthen global academic profile and professional credibility.",
      "Support advancement into leadership, consulting, academic, or strategic roles.",
      "Pursue doctoral recognition across multiple discipline areas.",
    ],
    details: [
      "Available discipline pathways are reviewed through the application guidance process.",
      "The program is designed for flexible academic advancement.",
      "EAI helps candidates clarify fit, eligibility, and next steps.",
    ],
    groupUrl: `${root}/#doctoral`,
    providerUrl: `${root}/#doctoral`,
  },
];

const whatsappPath = (course) =>
  `${whatsapp}?text=${encodeURIComponent(`Hello Empowering Aspirational India,\n\nI would like to know more about ${course}.`)}`;

const json = (value) => JSON.stringify(value, null, 2).replace(/</g, "\\u003c");

function renderPage(page) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        "@id": page.url,
        url: page.url,
        name: page.h1,
        description: page.description,
        courseMode: page.mode,
        educationalCredentialAwarded: page.credential,
        provider: {
          "@type": "Organization",
          name: page.provider,
          url: page.providerUrl,
        },
      },
      {
        "@type": "WebPage",
        "@id": `${page.url}#webpage`,
        url: page.url,
        name: page.title,
        description: page.description,
        isPartOf: {
          "@type": "WebSite",
          name: "Empowering Aspirational India",
          url: root,
        },
      },
    ],
  };

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${page.title}</title>
    <meta name="description" content="${page.description}" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <link rel="canonical" href="${page.url}" />
    <link rel="icon" href="../../assets/logo.jpeg" />
    <link rel="stylesheet" href="../../assets/course-page.css" />
    <meta property="og:type" content="article" />
    <meta property="og:site_name" content="Empowering Aspirational India" />
    <meta property="og:title" content="${page.title}" />
    <meta property="og:description" content="${page.description}" />
    <meta property="og:url" content="${page.url}" />
    <meta property="og:image" content="${root}/assets/hero.jpeg" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${page.title}" />
    <meta name="twitter:description" content="${page.description}" />
    <meta name="twitter:image" content="${root}/assets/hero.jpeg" />
    <script type="application/ld+json">${json(structuredData)}</script>
  </head>
  <body>
    <header class="site-header">
      <nav class="nav" aria-label="Main navigation">
        <a class="brand" href="../../">
          <img src="../../assets/logo.jpeg" width="54" height="54" alt="Empowering Aspirational India logo" />
          <span>Empowering<br />Aspirational India</span>
        </a>
        <div class="nav-links">
          <a href="../../#about">About</a>
          <a href="../../#programs">Programs</a>
          <a href="../../#faqs">FAQs</a>
          <a href="../../#contact">Contact</a>
        </div>
        <a class="button primary" href="${whatsappPath(page.h1)}">Apply Now</a>
      </nav>
    </header>

    <main>
      <section class="hero">
        <div class="hero-inner">
          <div>
            <p class="eyebrow">${page.eyebrow}</p>
            <h1>${page.h1}</h1>
            <p>${page.lead}</p>
            <div class="hero-actions">
              <a class="button primary" href="${whatsappPath(page.h1)}">Request Course Guidance</a>
              <a class="button secondary" href="${page.groupUrl}">View Program Group</a>
            </div>
          </div>
          <aside class="facts" aria-label="Course facts">
            <div class="fact">
              <strong>Credential</strong>
              <span>${page.credential}</span>
            </div>
            <div class="fact">
              <strong>Duration</strong>
              <span>${page.duration}</span>
            </div>
            <div class="fact">
              <strong>Mode</strong>
              <span>${page.mode}</span>
            </div>
            <div class="fact">
              <strong>Provider</strong>
              <span>${page.provider}</span>
            </div>
          </aside>
        </div>
      </section>

      <section>
        <div class="container">
          <div class="section-head">
            <h2>Who This Pathway Is For</h2>
            <p>${page.audience}</p>
          </div>
          <div class="detail-grid">
            ${page.outcomes
              .map(
                (item, index) => `<article class="panel">
              <h3>${String(index + 1).padStart(2, "0")}</h3>
              <p>${item}</p>
            </article>`,
              )
              .join("\n            ")}
          </div>
        </div>
      </section>

      <section class="info-band">
        <div class="container split">
          <div class="panel">
            <h2>Program Details</h2>
            <ul class="list">
              ${page.details.map((item) => `<li>${item}</li>`).join("\n              ")}
            </ul>
          </div>
          <aside class="panel">
            <h3>Recognition</h3>
            <p>${page.recognition}</p>
            <h3 style="margin-top: 22px;">Next Step</h3>
            <p>Share your details with EAI to confirm eligibility, course fit, and application guidance.</p>
          </aside>
        </div>
      </section>

      <section class="cta">
        <div class="container">
          <p class="eyebrow">Apply Now</p>
          <h2>Get guidance for ${page.h1}.</h2>
          <p>Send a WhatsApp enquiry with the course name pre-filled. The team can guide you on fit, eligibility, and application steps.</p>
          <div class="hero-actions">
            <a class="button primary" href="${whatsappPath(page.h1)}">Apply Through WhatsApp</a>
            <a class="button secondary" href="../../#programs">Back to All Programs</a>
          </div>
        </div>
      </section>
    </main>

    <a class="whatsapp-widget" href="${whatsappPath(page.h1)}" aria-label="Chat on WhatsApp">
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M16.04 3.2A12.63 12.63 0 0 0 5.18 22.3L3.4 28.8l6.66-1.75a12.58 12.58 0 0 0 5.98 1.52h.01A12.69 12.69 0 0 0 28.8 15.94 12.69 12.69 0 0 0 16.04 3.2Zm0 23.22h-.01a10.48 10.48 0 0 1-5.34-1.46l-.38-.23-3.95 1.04 1.05-3.85-.25-.4a10.45 10.45 0 1 1 8.88 4.9Zm5.74-7.82c-.31-.16-1.86-.92-2.15-1.02-.29-.11-.5-.16-.71.16-.21.31-.81 1.02-.99 1.23-.18.21-.37.24-.68.08-.31-.16-1.33-.49-2.53-1.56-.94-.84-1.57-1.87-1.75-2.18-.18-.31-.02-.48.14-.64.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.71-.97-2.34-.26-.62-.52-.53-.71-.54h-.61c-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.63 0 1.55 1.13 3.05 1.29 3.26.16.21 2.23 3.4 5.4 4.77.75.32 1.34.52 1.8.66.76.24 1.45.21 1.99.13.61-.09 1.86-.76 2.12-1.5.26-.73.26-1.36.18-1.5-.08-.13-.29-.21-.6-.37Z" />
      </svg>
    </a>

    <footer class="footer">
      <div class="footer-inner">
        <span>Empowering Aspirational India</span>
        <span>Copyright 2026 K M Consulting. All rights reserved.</span>
      </div>
    </footer>
  </body>
</html>
`;
}

for (const page of pages) {
  await mkdir(page.path.replace(/\/index\.html$/, ""), { recursive: true });
  await writeFile(page.path, renderPage(page), "utf8");
}

console.log(`Generated ${pages.length} course pages.`);
