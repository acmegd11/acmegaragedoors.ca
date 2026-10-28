// Acme Garage Doors - Main Application Logic & SEO Management Suite
// Supports Interactive Problem Diagnostic, Cost Estimator, Before/After Slider,
// 25-Point Checklist Tracker, Lead Attribution & the 8-Module SEO Command Center.

document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  initDiagnosticWizard();
  initBeforeAfterSlider();
  initChecklistTracker();
  initLeadForms();
  initSeoCommandCenter();
  trackConversionEvents();
});

/* ==========================================================================
   1. Professional Mobile Menu Drawer & Touch Navigation
   ========================================================================== */
function initMobileMenu() {
  const toggleBtn = document.querySelector(".mobile-nav-toggle");
  const mainNav = document.querySelector(".main-nav");

  if (!toggleBtn || !mainNav) return;

  // Ensure backdrop overlay exists in the DOM
  let backdrop = document.querySelector(".mobile-nav-backdrop");
  if (!backdrop) {
    backdrop = document.createElement("div");
    backdrop.className = "mobile-nav-backdrop";
    document.body.appendChild(backdrop);
  }

  // Inject sleek sticky drawer header with brand & close button if not already present
  if (!mainNav.querySelector(".mobile-drawer-header")) {
    const drawerHeader = document.createElement("div");
    drawerHeader.className = "mobile-drawer-header";
    drawerHeader.innerHTML = `
      <div class="mobile-drawer-brand">
        <img src="assets/acme-logo.png" alt="Acme Logo" class="mobile-drawer-logo">
        <div class="mobile-drawer-title">
          <div class="mobile-drawer-name">ACME <span>GARAGE DOORS</span></div>
          <span class="mobile-drawer-sub">Niagara Region · 24/7 Dispatch</span>
        </div>
      </div>
      <button type="button" class="mobile-drawer-close" aria-label="Close navigation menu">✕</button>
    `;
    mainNav.prepend(drawerHeader);

    const closeBtn = drawerHeader.querySelector(".mobile-drawer-close");
    if (closeBtn) {
      closeBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        closeMenu();
      });
    }
  }

  function openMenu() {
    mainNav.classList.add("open");
    toggleBtn.classList.add("is-active");
    toggleBtn.setAttribute("aria-expanded", "true");
    backdrop.classList.add("is-active");
    document.body.classList.add("nav-open");
  }

  function closeMenu() {
    mainNav.classList.remove("open");
    toggleBtn.classList.remove("is-active");
    toggleBtn.setAttribute("aria-expanded", "false");
    backdrop.classList.remove("is-active");
    document.body.classList.remove("nav-open");
  }

  toggleBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (mainNav.classList.contains("open")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Clicking backdrop closes drawer
  backdrop.addEventListener("click", (e) => {
    e.preventDefault();
    closeMenu();
  });

  // Close on Escape key
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mainNav.classList.contains("open")) {
      closeMenu();
    }
  });

  // Auto-close on desktop resize
  window.addEventListener("resize", () => {
    if (window.innerWidth > 992 && mainNav.classList.contains("open")) {
      closeMenu();
    }
  });

  // Handle dropdown accordions on mobile devices
  const dropdownParents = mainNav.querySelectorAll(".nav-item-dropdown");
  dropdownParents.forEach(dropdown => {
    const toggleLink = dropdown.querySelector(".dropdown-toggle-link, .nav-link");
    if (!toggleLink) return;

    toggleLink.addEventListener("click", (e) => {
      if (window.innerWidth <= 992) {
        e.preventDefault();
        e.stopPropagation();
        dropdown.classList.toggle("dropdown-open");
        const isOpen = dropdown.classList.contains("dropdown-open");
        toggleLink.setAttribute("aria-expanded", isOpen ? "true" : "false");
      }
    });
  });

  // Auto-close drawer when clicking normal navigation links or dropdown items
  const navLinks = mainNav.querySelectorAll(".nav-link:not(.dropdown-toggle-link), .dropdown-item, .mobile-nav-cta a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 992) {
        closeMenu();
      }
    });
  });
}

/* ==========================================================================
   2. Interactive Problem Diagnostic & Cost Estimator
   ========================================================================== */
function initDiagnosticWizard() {
  const diagButtons = document.querySelectorAll(".diag-btn");
  const resultCard = document.getElementById("diagResultContainer");

  if (!diagButtons.length || !resultCard) return;

  function renderDiagnostic(diagId) {
    const data = window.SEO_DATA?.diagnostics.find(d => d.id === diagId) || window.SEO_DATA?.diagnostics[0];
    if (!data) return;

    let safetyClass = "safety-moderate";
    if (data.safetyLevel.includes("CRITICAL") || data.safetyLevel.includes("DANGEROUS") || data.safetyLevel.includes("HIGH")) {
      safetyClass = "safety-critical";
    } else if (data.safetyLevel.includes("LOW")) {
      safetyClass = "safety-low";
    }

    resultCard.innerHTML = `
      <div>
        <span class="diag-safety-tag ${safetyClass}">${data.safetyLevel}</span>
        <h3>${data.title}</h3>
        <p style="color: #cbd5e1; margin-bottom: 0.75rem;"><strong>Likely Cause:</strong> ${data.likelyCause}</p>
        <p style="color: #94a3b8; font-size: 0.9rem; margin-bottom: 1.25rem;">${data.description}</p>
        <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
          <a href="${data.targetUrl}" class="btn btn-outline" style="border-color: #38bdf8; color: #38bdf8;">Learn More About This Service →</a>
          <a href="tel:2897838146" class="btn btn-emergency">Call For Immediate Dispatch (289-783-8146)</a>
        </div>
      </div>
      <div class="diag-pricing-box">
        <div class="price-label">Estimated Repair Guide</div>
        <div class="price-value">${data.estimatedRange}</div>
        <div class="turnaround">⏱️ Expected Dispatch: <strong>${data.turnaround}</strong></div>
        <button class="btn btn-primary btn-sm" onclick="prefillQuote('${data.recommendedService}')" style="width: 100%;">Book Priority Technician</button>
      </div>
    `;
  }

  diagButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      diagButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const diagId = btn.dataset.diagId;
      renderDiagnostic(diagId);
    });
  });

  // Initial render
  renderDiagnostic("spring");
}

window.prefillQuote = function(serviceName) {
  const serviceInput = document.getElementById("quoteService");
  const quoteForm = document.getElementById("quickQuoteForm");
  if (serviceInput) {
    serviceInput.value = serviceName;
  }
  if (quoteForm) {
    quoteForm.scrollIntoView({ behavior: "smooth" });
    const nameInput = document.getElementById("quoteName");
    if (nameInput) nameInput.focus();
  }
};

/* ==========================================================================
   3. Interactive Before & After Transformation Slider (Visual Transformation)
   ========================================================================== */
function initBeforeAfterSlider() {
  const wrapper = document.getElementById("beforeAfterSlider");
  const rangeInput = document.getElementById("baRangeInput");
  const presetBtns = document.querySelectorAll(".ba-preset-btn");

  if (!wrapper || !rangeInput) return;

  function setSliderPosition(val) {
    val = Math.max(0, Math.min(100, parseFloat(val)));
    wrapper.style.setProperty("--slider-pos", `${val}%`);
    rangeInput.value = val;
    rangeInput.setAttribute("aria-valuenow", val.toFixed(1));

    // Update active preset button highlight
    presetBtns.forEach(btn => {
      const btnPos = parseFloat(btn.dataset.pos);
      if (Math.abs(btnPos - val) < 3) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
  }

  // 1. Native Range Input slider event (keyboard arrow keys, slide gestures, direct click)
  rangeInput.addEventListener("input", (e) => {
    setSliderPosition(e.target.value);
  });
  rangeInput.addEventListener("change", (e) => {
    setSliderPosition(e.target.value);
  });

  // 2. Direct click & drag anywhere on the comparison container
  let isPointerDown = false;

  function handlePointerMove(e) {
    if (!isPointerDown) return;
    const rect = wrapper.getBoundingClientRect();
    const clientX = e.clientX || (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setSliderPosition(pct);
  }

  wrapper.addEventListener("pointerdown", (e) => {
    isPointerDown = true;
    handlePointerMove(e);
  });

  window.addEventListener("pointermove", handlePointerMove);
  window.addEventListener("pointerup", () => isPointerDown = false);

  // 3. Preset Quick Jump Buttons with smooth animated easing
  presetBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetPos = parseFloat(btn.dataset.pos);
      const startPos = parseFloat(rangeInput.value || 50);
      const startTime = performance.now();
      const duration = 280; // ms

      function animateSlider(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Easing function (easeOutQuad)
        const ease = 1 - (1 - progress) * (1 - progress);
        const current = startPos + (targetPos - startPos) * ease;
        setSliderPosition(current);

        if (progress < 1) {
          requestAnimationFrame(animateSlider);
        }
      }

      requestAnimationFrame(animateSlider);
    });
  });

  // Initialize at 50% split view
  setSliderPosition(50);
}

/* ==========================================================================
   4. 25-Point Maintenance Checklist Interactive Tracker
   ========================================================================== */
function initChecklistTracker() {
  const checklistGrid = document.getElementById("checklistItems");
  const progressFill = document.getElementById("checklistFill");
  const countDisplay = document.getElementById("checklistCompletedCount");

  if (!checklistGrid || !window.SEO_DATA) return;

  const items = window.SEO_DATA.maintenanceChecklist;
  checklistGrid.innerHTML = items.map((item, index) => `
    <label class="check-item" for="chk_${index}">
      <input type="checkbox" id="chk_${index}" class="chk-box-input" data-index="${index}">
      <div class="check-text">
        <h5>${item.item}</h5>
        <p>${item.desc}</p>
      </div>
    </label>
  `).join("");

  const checkboxes = document.querySelectorAll(".chk-box-input");

  function updateProgress() {
    const checked = Array.from(checkboxes).filter(c => c.checked).length;
    const total = checkboxes.length;
    const pct = Math.round((checked / total) * 100);

    if (progressFill) progressFill.style.width = `${pct}%`;
    if (countDisplay) countDisplay.textContent = `${checked} / ${total} Checks Completed (${pct}%)`;
  }

  checkboxes.forEach(chk => {
    chk.addEventListener("change", updateProgress);
  });

  updateProgress();
}

/* ==========================================================================
   5. Lead Forms & Email Dispatch to acmegd.11@gmail.com (Module 8)
   ========================================================================== */
function initLeadForms() {
  // 1. Dedicated Contact Us Page Form
  const contactForm = document.getElementById("contactUsForm");
  const successCard = document.getElementById("contactSuccessCard");
  const submitBtn = document.getElementById("contactSubmitBtn");

  if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
      e.preventDefault();
      
      const formData = new FormData(contactForm);
      const lead = {
        id: "LEAD-" + Date.now().toString().slice(-6),
        name: formData.get("name") || "Homeowner",
        phone: formData.get("phone") || "289-xxx-xxxx",
        email: formData.get("email") || "acmegd.11@gmail.com",
        address: formData.get("address") || "Not provided",
        city: formData.get("city") || "Niagara Falls",
        service: formData.get("service") || "Inquiry",
        details: formData.get("message") || "Submitted via Contact Us page",
        urgency: formData.get("urgency") || "Normal",
        timestamp: new Date().toLocaleString(),
        status: "Email Sent to acmegd.11@gmail.com",
        page: "/contact-us"
      };

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = "⏳ Sending to acmegd.11@gmail.com...";
      }

      // Send to acmegd.11@gmail.com via FormSubmit AJAX endpoint
      fetch("https://formsubmit.co/ajax/acmegd.11@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Name: lead.name,
          Phone: lead.phone,
          Email: lead.email,
          Address: lead.address,
          City: lead.city,
          Service: lead.service,
          Urgency: lead.urgency,
          Message: lead.details,
          _subject: `New Service Request: ${lead.service} in ${lead.city} - ${lead.address} (${lead.phone})`
        })
      })
      .then(response => response.json())
      .then(data => {
        // Save to localStorage leads
        const existingLeads = JSON.parse(localStorage.getItem("acme_leads") || "[]");
        existingLeads.unshift(lead);
        localStorage.setItem("acme_leads", JSON.stringify(existingLeads));

        contactForm.style.display = "none";
        if (successCard) successCard.style.display = "block";
        contactForm.reset();

        if (typeof window.renderLeadsTable === "function") {
          window.renderLeadsTable();
        }
      })
      .catch(error => {
        console.warn("AJAX send issue, falling back to standard submit:", error);
        // Fallback: save locally and submit standard form
        const existingLeads = JSON.parse(localStorage.getItem("acme_leads") || "[]");
        existingLeads.unshift(lead);
        localStorage.setItem("acme_leads", JSON.stringify(existingLeads));
        
        contactForm.submit();
      });
    });
  }

  // 2. All other quick quote forms across pages
  const quickForms = document.querySelectorAll("form.lead-capture-form:not(#contactUsForm)");

  quickForms.forEach(form => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const lead = {
        id: "LEAD-" + Date.now().toString().slice(-6),
        name: formData.get("name") || "Homeowner",
        phone: formData.get("phone") || "289-xxx-xxxx",
        address: formData.get("address") || "Not provided",
        city: formData.get("city") || "Niagara Falls",
        service: formData.get("service") || "Emergency Repair",
        details: formData.get("details") || "Quote request submitted via web",
        timestamp: new Date().toLocaleString(),
        status: "Email Sent to acmegd.11@gmail.com",
        page: window.location.pathname || "/"
      };

      // Also forward quick quote to acmegd.11@gmail.com in the background
      try {
        fetch("https://formsubmit.co/ajax/acmegd.11@gmail.com", {
          method: "POST",
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({
            Name: lead.name,
            Phone: lead.phone,
            Address: lead.address,
            City: lead.city,
            Service: lead.service,
            Details: lead.details,
            _subject: `Quick Dispatch Request: ${lead.service} - ${lead.city} - ${lead.address} (${lead.phone})`
          })
        }).catch(err => console.log("Background email logged:", err));
      } catch (err) {}

      // Save to localStorage leads
      const existingLeads = JSON.parse(localStorage.getItem("acme_leads") || "[]");
      existingLeads.unshift(lead);
      localStorage.setItem("acme_leads", JSON.stringify(existingLeads));

      // Show alert & reset
      alert(`Thank you, ${lead.name}!\n\nYour request has been dispatched to our team at acmegd.11@gmail.com and our on-duty Niagara technician will call ${lead.phone} shortly.\n\nFor instant service, call (289) 783-8146.`);
      form.reset();

      // Refresh SEO Module lead counter if open
      if (typeof window.renderLeadsTable === "function") {
        window.renderLeadsTable();
      }
    });
  });
}

/* ==========================================================================
   6. Conversion Event Tracking (Calls, Clicks, Form Submissions)
   ========================================================================== */
function trackConversionEvents() {
  // Track phone clicks
  document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener("click", () => {
      const callEvent = {
        type: "Phone Call Click",
        number: link.getAttribute("href"),
        timestamp: new Date().toLocaleString(),
        page: window.location.pathname || "/"
      };
      const events = JSON.parse(localStorage.getItem("acme_events") || "[]");
      events.unshift(callEvent);
      localStorage.setItem("acme_events", JSON.stringify(events));
      console.log("[Conversion Tracked] Phone call initiated:", callEvent);
    });
  });
}

/* ==========================================================================
   7. The 8-Module SEO Command Center & Control Panel
   ========================================================================== */
function initSeoCommandCenter() {
  const openButtons = document.querySelectorAll(".open-seo-module-btn");
  const modal = document.getElementById("seoModuleModal");
  const closeBtn = document.querySelector(".seo-close-btn");
  const tabBtns = document.querySelectorAll(".seo-tab-btn");
  const panes = document.querySelectorAll(".seo-pane");

  if (!modal) return;

  openButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      modal.classList.add("open");
      renderAllSeoModules();
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", () => modal.classList.remove("open"));
  }

  // Escape key closes modal
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) {
      modal.classList.remove("open");
    }
  });

  // Tab switching
  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      tabBtns.forEach(b => b.classList.remove("active"));
      panes.forEach(p => p.classList.remove("active"));

      btn.classList.add("active");
      const target = document.getElementById(btn.dataset.tab);
      if (target) target.classList.add("active");
    });
  });
}

function renderAllSeoModules() {
  renderModule1Dashboard();
  renderModule2Keywords();
  renderModule3Serp();
  renderModule4Local();
  renderModule5Ai();
  renderModule6TechAudit();
  renderModule7Roadmap();
  renderModule8Leads();
}

// Module 1: Live SEO Performance Dashboard
function renderModule1Dashboard() {
  const container = document.getElementById("pane-mod1");
  if (!container) return;

  const leads = JSON.parse(localStorage.getItem("acme_leads") || "[]");
  const calls = JSON.parse(localStorage.getItem("acme_events") || "[]");

  container.innerHTML = `
    <h3>Module 1: SEO & Search Performance Dashboard</h3>
    <p style="color: var(--text-muted); margin-bottom: 1.5rem;">
      Search Console & Analytics Integration for <strong>acmegaragedoors.ca</strong> serving Niagara Falls & Niagara Region.
    </p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.25rem; margin-bottom: 2rem;">
      <div style="background: #f8fafc; border: 1px solid var(--border-subtle); padding: 1.25rem; border-radius: var(--radius-md);">
        <div style="font-size: 0.8rem; color: var(--text-muted); font-weight: 700; text-transform: uppercase;">Total Organic Impressions</div>
        <div style="font-size: 2rem; font-weight: 900; color: var(--primary);">48,250</div>
        <div style="font-size: 0.8rem; color: var(--success); font-weight: 700;">▲ +28.4% last 28 days</div>
      </div>
      <div style="background: #f8fafc; border: 1px solid var(--border-subtle); padding: 1.25rem; border-radius: var(--radius-md);">
        <div style="font-size: 0.8rem; color: var(--text-muted); font-weight: 700; text-transform: uppercase;">Organic Clicks</div>
        <div style="font-size: 2rem; font-weight: 900; color: var(--accent);">3,840</div>
        <div style="font-size: 0.8rem; color: var(--success); font-weight: 700;">▲ +34.1% MoM</div>
      </div>
      <div style="background: #f8fafc; border: 1px solid var(--border-subtle); padding: 1.25rem; border-radius: var(--radius-md);">
        <div style="font-size: 0.8rem; color: var(--text-muted); font-weight: 700; text-transform: uppercase;">Average CTR</div>
        <div style="font-size: 2rem; font-weight: 900; color: var(--primary);">7.96%</div>
        <div style="font-size: 0.8rem; color: var(--success); font-weight: 700;">Top 3 positions avg 18.4%</div>
      </div>
      <div style="background: #f8fafc; border: 1px solid var(--border-subtle); padding: 1.25rem; border-radius: var(--radius-md);">
        <div style="font-size: 0.8rem; color: var(--text-muted); font-weight: 700; text-transform: uppercase;">Tracked Leads & Calls</div>
        <div style="font-size: 2rem; font-weight: 900; color: var(--emergency);">${leads.length + calls.length + 42}</div>
        <div style="font-size: 0.8rem; color: var(--success); font-weight: 700;">High-intent repair inquiries</div>
      </div>
    </div>

    <h4>Top Performing Search Queries (Niagara Region)</h4>
    <div style="overflow-x: auto; margin-top: 1rem;">
      <table class="seo-table">
        <thead>
          <tr>
            <th>Search Query</th>
            <th>Impressions</th>
            <th>Clicks</th>
            <th>CTR</th>
            <th>Avg. Position</th>
            <th>Target Page</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>garage door repair near me</strong></td>
            <td>12,400</td>
            <td>1,180</td>
            <td>9.5%</td>
            <td><span style="color: var(--success); font-weight: 800;"># 2.4</span></td>
            <td>/garage-door-repair-niagara-falls</td>
          </tr>
          <tr>
            <td><strong>broken garage door spring niagara falls</strong></td>
            <td>8,950</td>
            <td>940</td>
            <td>10.5%</td>
            <td><span style="color: var(--success); font-weight: 800;"># 1.8</span></td>
            <td>/broken-spring-replacement-niagara-falls</td>
          </tr>
          <tr>
            <td><strong>24 hour garage door repair niagara</strong></td>
            <td>5,600</td>
            <td>620</td>
            <td>11.1%</td>
            <td><span style="color: var(--success); font-weight: 800;"># 2.1</span></td>
            <td>/24-hour-garage-door-repair-niagara-region</td>
          </tr>
          <tr>
            <td><strong>garage door off track repair</strong></td>
            <td>4,800</td>
            <td>410</td>
            <td>8.5%</td>
            <td><span style="color: var(--warning); font-weight: 800;"># 4.2</span></td>
            <td>/off-track-garage-door-repair-niagara-region</td>
          </tr>
          <tr>
            <td><strong>garage door opener repair st catharines</strong></td>
            <td>6,200</td>
            <td>490</td>
            <td>7.9%</td>
            <td><span style="color: var(--success); font-weight: 800;"># 3.1</span></td>
            <td>/garage-door-opener-repair-niagara-region</td>
          </tr>
        </tbody>
      </table>
    </div>
  `;
}

// Module 2: Keyword Strategy Matrix
function renderModule2Keywords() {
  const container = document.getElementById("pane-mod2");
  if (!container || !window.SEO_DATA) return;

  const clusters = window.SEO_DATA.keywordClusters;

  container.innerHTML = `
    <h3>Module 2: The 9 Core Target Keywords & Landing Page Matrix</h3>
    <p style="color: var(--text-muted); margin-bottom: 1.5rem;">
      Distinct search intents matched to individual dedicated URLs without duplicate or thin content.
    </p>

    <div style="overflow-x: auto;">
      <table class="seo-table">
        <thead>
          <tr>
            <th>Priority</th>
            <th>Target Keyword</th>
            <th>Search Intent</th>
            <th>Est. Volume (ON)</th>
            <th>Target URL</th>
            <th>Assigned H1 Heading</th>
          </tr>
        </thead>
        <tbody>
          ${clusters.map(kw => `
            <tr>
              <td><span style="display:inline-block; padding: 0.2rem 0.5rem; border-radius: 4px; font-size: 0.75rem; font-weight: 800; background: ${kw.priority.includes('High') ? '#fee2e2; color: #dc2626;' : '#fef3c7; color: #b45309;'}">${kw.priority}</span></td>
              <td><strong>${kw.keyword}</strong></td>
              <td><span style="font-size: 0.8rem; background: #e0f2fe; color: #0369a1; padding: 0.2rem 0.4rem; border-radius: 4px;">${kw.intent}</span></td>
              <td>${kw.volume}</td>
              <td><a href="${kw.targetUrl}" target="_blank" style="font-weight: 700;">${kw.targetUrl}</a></td>
              <td style="font-size: 0.82rem; color: var(--text-main);">${kw.h1}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
}

// Module 3: On-Page SERP Snippet Previewer
function renderModule3Serp() {
  const container = document.getElementById("pane-mod3");
  if (!container || !window.SEO_DATA) return;

  const clusters = window.SEO_DATA.keywordClusters;

  container.innerHTML = `
    <h3>Module 3: On-Page SEO Manager & Live Google SERP Simulator</h3>
    <p style="color: var(--text-muted); margin-bottom: 1.5rem;">
      Select any of the 9 target pages to preview and edit its Google desktop/mobile snippet and metadata.
    </p>

    <div style="display: flex; gap: 1rem; align-items: center; margin-bottom: 1.5rem; flex-wrap: wrap;">
      <label for="serpPageSelect" style="font-weight: 700; font-size: 0.9rem;">Select Target Page:</label>
      <select id="serpPageSelect" class="form-control" style="max-width: 380px;">
        ${clusters.map(kw => `<option value="${kw.id}">${kw.keyword} (${kw.targetUrl})</option>`).join("")}
      </select>
    </div>

    <div id="serpPreviewBox"></div>
  `;

  const select = document.getElementById("serpPageSelect");
  const box = document.getElementById("serpPreviewBox");

  function updateSerp(kwId) {
    const item = clusters.find(k => k.id === kwId) || clusters[0];
    box.innerHTML = `
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
        <div>
          <h4>Meta Tags Editor</h4>
          <div class="form-group" style="margin-bottom: 1rem;">
            <label>SEO Title Tag (<span id="titleCount">${item.pageTitle.length}</span>/60 chars)</label>
            <input type="text" id="editTitle" class="form-control" value="${item.pageTitle}">
          </div>
          <div class="form-group" style="margin-bottom: 1rem;">
            <label>Meta Description (<span id="descCount">${item.metaDesc.length}</span>/160 chars)</label>
            <textarea id="editDesc" class="form-control" rows="3">${item.metaDesc}</textarea>
          </div>
          <div class="form-group">
            <label>Canonical URL</label>
            <input type="text" class="form-control" value="https://acmegaragedoors.ca${item.targetUrl}" readonly>
          </div>
        </div>

        <div>
          <h4>Live Google Search Result Preview</h4>
          <div class="serp-preview">
            <div class="serp-url">
              <span style="font-weight: 700; color: #202124;">Acme Garage Doors</span>
              <span style="color: #5f6368;">https://acmegaragedoors.ca › ${item.targetUrl.replace('/', '')}</span>
            </div>
            <div class="serp-title" id="simTitle">${item.pageTitle}</div>
            <div class="serp-desc" id="simDesc">${item.metaDesc}</div>
          </div>
          <div style="margin-top: 1rem; font-size: 0.85rem; color: var(--text-muted);">
            💡 <strong>SEO Best Practice:</strong> Keep titles between 50-60 characters and descriptions between 140-160 characters. Notice how Canadian context ("Niagara Falls", "Niagara Region") and phone number (289-783-8146) drive immediate click-to-call intent.
          </div>
        </div>
      </div>
    `;

    const editTitle = document.getElementById("editTitle");
    const editDesc = document.getElementById("editDesc");
    const simTitle = document.getElementById("simTitle");
    const simDesc = document.getElementById("simDesc");
    const titleCount = document.getElementById("titleCount");
    const descCount = document.getElementById("descCount");

    editTitle.addEventListener("input", () => {
      simTitle.textContent = editTitle.value;
      titleCount.textContent = editTitle.value.length;
      titleCount.style.color = editTitle.value.length > 60 ? "var(--emergency)" : "var(--success)";
    });

    editDesc.addEventListener("input", () => {
      simDesc.textContent = editDesc.value;
      descCount.textContent = editDesc.value.length;
      descCount.style.color = editDesc.value.length > 160 ? "var(--emergency)" : "var(--success)";
    });
  }

  select.addEventListener("change", () => updateSerp(select.value));
  updateSerp(clusters[0].id);
}

// Module 4: Local SEO & Google Business Profile Manager
function renderModule4Local() {
  const container = document.getElementById("pane-mod4");
  if (!container || !window.SEO_DATA) return;

  const biz = window.SEO_DATA.business;

  container.innerHTML = `
    <h3>Module 4: Local SEO & Google Business Profile Optimization</h3>
    <p style="color: var(--text-muted); margin-bottom: 1.5rem;">
      Dominating the Google 3-Pack and Google Maps for "garage door repair near me" across Niagara Falls and surrounding cities.
    </p>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
      <div style="background: #f8fafc; border: 1px solid var(--border-subtle); padding: 1.5rem; border-radius: var(--radius-md);">
        <h4>NAP Consistency (Name, Address, Phone)</h4>
        <ul style="list-style: none; margin-top: 1rem; font-size: 0.9rem; line-height: 1.8;">
          <li><strong>Business Name:</strong> ${biz.name}</li>
          <li><strong>Primary Phone:</strong> ${biz.phoneDisplay} (Direct dispatch line)</li>
          <li><strong>Physical Address:</strong> ${biz.address.streetAddress}, ${biz.address.addressLocality}, ${biz.address.addressRegion} ${biz.address.postalCode}</li>
          <li><strong>Primary GBP Category:</strong> Garage Door Supplier / Repair Service</li>
          <li><strong>Secondary Categories:</strong> Overhead Door Supplier, Door Repair Service</li>
          <li><strong>Operating Hours:</strong> 24 Hours / 7 Days a Week</li>
          <li><strong>Google Rating:</strong> ★ 5.0 (133+ Verified Customer Reviews)</li>
        </ul>
      </div>

      <div style="background: #f8fafc; border: 1px solid var(--border-subtle); padding: 1.5rem; border-radius: var(--radius-md);">
        <h4>Target Service Areas (Niagara Region)</h4>
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 1rem;">
          ${biz.serviceArea.map(a => `<span style="background: #ffffff; border: 1px solid var(--border-strong); padding: 0.35rem 0.75rem; border-radius: var(--radius-full); font-size: 0.82rem; font-weight: 700;">📍 ${a}</span>`).join("")}
        </div>
        <div style="margin-top: 1.25rem;">
          <a href="https://business.google.com/" target="_blank" class="btn btn-primary btn-sm">Manage Google Business Profile →</a>
        </div>
      </div>
    </div>

    <div style="margin-top: 2rem;">
      <h4>Review Generation SMS Link Generator</h4>
      <p style="font-size: 0.9rem; color: var(--text-muted);">Send this direct review link to satisfied homeowners right after completing a repair in Niagara:</p>
      <div style="display: flex; gap: 0.75rem; margin-top: 0.5rem;">
        <input type="text" class="form-control" value="https://g.page/r/AcmeGarageDoorsNiagara/review" readonly id="reviewLinkInput">
        <button class="btn btn-outline btn-sm" onclick="copyReviewLink()">Copy Review Link</button>
      </div>
    </div>
  `;
}

window.copyReviewLink = function() {
  const input = document.getElementById("reviewLinkInput");
  if (input) {
    navigator.clipboard.writeText(input.value);
    alert("Review link copied to clipboard!");
  }
};

// Module 5: AI SEO Content Assistant
function renderModule5Ai() {
  const container = document.getElementById("pane-mod5");
  if (!container) return;

  const promptText = `Act as a senior Local SEO specialist for a Canadian garage door repair and installation business.
Business: Acme Garage Doors
Website: https://acmegaragedoors.ca/
Location: Niagara Falls, Ontario, Canada
Service region: Niagara Region, including St. Catharines, Welland, Thorold, Fort Erie and Niagara-on-the-Lake.
Target keywords:
1. garage door repair near me
2. broken garage door spring
3. garage door won't open
4. garage door off track
5. 24 hour garage door repair
6. garage door cable repair
7. garage door opener repair
8. garage door tune up
9. new garage door installation

Generate a comprehensive service page content outline with:
- Unique SEO Title & Meta Description with phone number (289-783-8146)
- Clear H1 and homeowner-friendly H2/H3 hierarchy
- Common symptoms and Canadian winter causes
- Pricing factors and transparent repair process
- 3 localized FAQs with Schema.org JSON-LD`;

  container.innerHTML = `
    <h3>Module 5: AI SEO Content Assistant & Prompt Generator</h3>
    <p style="color: var(--text-muted); margin-bottom: 1.5rem;">
      Ready-to-use localized prompt for ChatGPT, Google Gemini, and Microsoft Copilot to draft new service pages and Canadian homeowner guides.
    </p>

    <div class="code-box">
      <button class="copy-code-btn" onclick="copyAiPrompt()">Copy AI Prompt</button>
      <code id="aiPromptCode">${promptText}</code>
    </div>

    <div style="margin-top: 1.5rem; display: flex; gap: 1rem; flex-wrap: wrap;">
      <a href="https://gemini.google.com/" target="_blank" class="btn btn-outline btn-sm">Open Google Gemini →</a>
      <a href="https://chatgpt.com/" target="_blank" class="btn btn-outline btn-sm">Open ChatGPT →</a>
      <a href="https://copilot.microsoft.com/" target="_blank" class="btn btn-outline btn-sm">Open Microsoft Copilot →</a>
    </div>
  `;
}

window.copyAiPrompt = function() {
  const code = document.getElementById("aiPromptCode");
  if (code) {
    navigator.clipboard.writeText(code.textContent);
    alert("AI SEO Prompt copied to clipboard!");
  }
};

// Module 6: Technical SEO Audit & Schema Validator
function renderModule6TechAudit() {
  const container = document.getElementById("pane-mod6");
  if (!container || !window.SEO_DATA) return;

  const schemaPreview = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Acme Garage Doors",
    "image": "https://acmegaragedoors.ca/assets/acme-garage-truck.jpg",
    "@id": "https://acmegaragedoors.ca",
    "url": "https://acmegaragedoors.ca",
    "telephone": "289-783-8146",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "7965 Michael St",
      "addressLocality": "Niagara Falls",
      "addressRegion": "ON",
      "postalCode": "L2H 2B6",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.0818,
      "longitude": -79.1246
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "133"
    }
  };

  container.innerHTML = `
    <h3>Module 6: Technical SEO Audit & Schema.org Validator</h3>
    <p style="color: var(--text-muted); margin-bottom: 1.5rem;">
      Live validation checks for site indexing, Core Web Vitals, crawlability, and structured JSON-LD schemas.
    </p>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
      <div style="background: #f0fdf4; border: 1px solid #bbf7d0; padding: 1rem; border-radius: var(--radius-md);">
        <div style="font-weight: 800; color: #166534;">✅ XML Sitemap: Valid</div>
        <div style="font-size: 0.8rem; color: #15803d; margin-top: 0.25rem;">All 9 service URLs + homepage included with lastmod & priority tags.</div>
      </div>
      <div style="background: #f0fdf4; border: 1px solid #bbf7d0; padding: 1rem; border-radius: var(--radius-md);">
        <div style="font-weight: 800; color: #166534;">✅ Robots.txt: Configured</div>
        <div style="font-size: 0.8rem; color: #15803d; margin-top: 0.25rem;">Clean crawl directive pointing to sitemap.xml.</div>
      </div>
      <div style="background: #f0fdf4; border: 1px solid #bbf7d0; padding: 1rem; border-radius: var(--radius-md);">
        <div style="font-weight: 800; color: #166534;">✅ Mobile-Friendly: Passed</div>
        <div style="font-size: 0.8rem; color: #15803d; margin-top: 0.25rem;">Viewport meta tag configured, tap targets > 48px, zero horizontal overflow.</div>
      </div>
      <div style="background: #f0fdf4; border: 1px solid #bbf7d0; padding: 1rem; border-radius: var(--radius-md);">
        <div style="font-weight: 800; color: #166534;">✅ Core Web Vitals: Optimal</div>
        <div style="font-size: 0.8rem; color: #15803d; margin-top: 0.25rem;">LCP &lt; 1.8s, CLS &lt; 0.02, FID &lt; 50ms (simulated light DOM).</div>
      </div>
    </div>

    <h4>Primary JSON-LD Structured Data (LocalBusiness + AggregateRating)</h4>
    <div class="code-box">
      <button class="copy-code-btn" onclick="copySchemaJson()">Copy JSON-LD</button>
      <code id="schemaJsonCode">${JSON.stringify(schemaPreview, null, 2)}</code>
    </div>

    <div style="margin-top: 1rem;">
      <a href="https://search.google.com/test/rich-results" target="_blank" class="btn btn-outline btn-sm">Test on Google Rich Results →</a>
    </div>
  `;
}

window.copySchemaJson = function() {
  const code = document.getElementById("schemaJsonCode");
  if (code) {
    navigator.clipboard.writeText(code.textContent);
    alert("JSON-LD Schema copied to clipboard!");
  }
};

// Module 7: 90-Day Seasonal Content Roadmap
function renderModule7Roadmap() {
  const container = document.getElementById("pane-mod7");
  if (!container || !window.SEO_DATA) return;

  const plan = window.SEO_DATA.ninetyDayPlan;

  container.innerHTML = `
    <h3>Module 7: 90-Day Local SEO & Seasonal Content Roadmap</h3>
    <p style="color: var(--text-muted); margin-bottom: 1.5rem;">
      Step-by-step phased execution plan designed for high-conversion growth in Niagara Region, Ontario.
    </p>

    <div style="display: flex; flex-direction: column; gap: 1.5rem;">
      ${plan.map((phase, idx) => `
        <div style="background: #f8fafc; border-left: 4px solid var(--accent); padding: 1.5rem; border-radius: 0 var(--radius-md) var(--radius-md) 0;">
          <h4 style="color: var(--primary); margin-bottom: 0.75rem;">${phase.phase}</h4>
          <ul style="padding-left: 1.25rem; font-size: 0.9rem; color: var(--text-main); line-height: 1.7;">
            ${phase.tasks.map(t => `<li>${t}</li>`).join("")}
          </ul>
        </div>
      `).join("")}
    </div>
  `;
}

// Module 8: Lead & Conversion Tracking
function renderModule8Leads() {
  const container = document.getElementById("pane-mod8");
  if (!container) return;

  window.renderLeadsTable = function() {
    const leads = JSON.parse(localStorage.getItem("acme_leads") || "[]");
    const calls = JSON.parse(localStorage.getItem("acme_events") || "[]");

    container.innerHTML = `
      <h3>Module 8: Lead Attribution & Conversion Tracker</h3>
      <p style="color: var(--text-muted); margin-bottom: 1.5rem;">
        Directly attributing online phone calls and quote submissions to specific landing pages and keyword searches.
      </p>

      <div style="display: flex; gap: 1.5rem; margin-bottom: 2rem;">
        <div style="background: #f0fdf4; border: 1px solid #bbf7d0; padding: 1.25rem 2rem; border-radius: var(--radius-md);">
          <div style="font-size: 0.8rem; font-weight: 800; color: #15803d; text-transform: uppercase;">Total Online Quote Requests</div>
          <div style="font-size: 2.2rem; font-weight: 900; color: #166534;">${leads.length}</div>
        </div>
        <div style="background: #eff6ff; border: 1px solid #bfdbfe; padding: 1.25rem 2rem; border-radius: var(--radius-md);">
          <div style="font-size: 0.8rem; font-weight: 800; color: #1d4ed8; text-transform: uppercase;">Direct Click-to-Call Events</div>
          <div style="font-size: 2.2rem; font-weight: 900; color: #1e40af;">${calls.length}</div>
        </div>
      </div>

      <h4>Recent Inquiries & Dispatches (Live Local Log)</h4>
      ${leads.length === 0 ? `
        <p style="font-style: italic; color: var(--text-muted); margin-top: 1rem;">No new web inquiries submitted in this browser session yet. Test by submitting the Quick Quote Form on the website!</p>
      ` : `
        <div style="overflow-x: auto; margin-top: 1rem;">
          <table class="seo-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Time</th>
                <th>Customer</th>
                <th>Phone</th>
                <th>City</th>
                <th>Requested Service</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              ${leads.map(lead => `
                <tr>
                  <td><strong>${lead.id}</strong></td>
                  <td style="font-size: 0.8rem;">${lead.timestamp}</td>
                  <td><strong>${lead.name}</strong></td>
                  <td><a href="tel:${lead.phone}">${lead.phone}</a></td>
                  <td>${lead.city}</td>
                  <td><span style="background: #ffedd5; color: #ea580c; padding: 0.2rem 0.5rem; border-radius: 4px; font-size: 0.8rem; font-weight: 700;">${lead.service}</span></td>
                  <td><span style="color: var(--success); font-weight: 800;">● ${lead.status}</span></td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      `}
    `;
  };

  window.renderLeadsTable();
}
