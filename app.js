/* Scopusixteen static app logic */
(function () {
  const path = window.location.pathname.split("/").pop() || "index.html";

  // ---- Auth helpers (localStorage) ----
  function getSession() {
    try {
      return JSON.parse(localStorage.getItem("sx_session") || "null");
    } catch {
      return null;
    }
  }
  function setSession(user) {
    localStorage.setItem("sx_session", JSON.stringify(user));
  }
  function clearSession() {
    localStorage.removeItem("sx_session");
  }
  function getUnlocked() {
    try {
      return JSON.parse(localStorage.getItem("sx_unlocked") || "[]");
    } catch {
      return [];
    }
  }
  function unlockArticle(id) {
    const list = getUnlocked();
    if (!list.includes(id)) {
      list.push(id);
      localStorage.setItem("sx_unlocked", JSON.stringify(list));
    }
  }

  // ---- Mobile menu ----
  window.toggleMenu = function () {
    const nav = document.getElementById("mobileNav");
    if (nav) nav.classList.toggle("open");
  };

  // ---- Shared header / footer injection ----
  function renderHeader() {
    const session = getSession();
    const loginLabel = session ? session.name.split(" ")[0] : "Login";
    return `
    <div class="topbar">
      <div class="inner">
        <div>
          <a href="mailto:support@scopusixteen.com">📧 support@scopusixteen.com</a>
          <a href="tel:+2348091234567" style="margin-left:1rem;display:none" class="sm-show">📞 +234 809 123 4567</a>
        </div>
        <div class="topbar-links">
          <a href="login.html">Author Login</a>
          <a href="login.html" class="hide-sm">Reviewer Login</a>
          <a href="login.html" class="hide-md">Editor Login</a>
        </div>
      </div>
    </div>
    <header class="site-header">
      <div class="header-inner">
        <a href="index.html" class="logo">
          <div class="logo-mark">Si6</div>
          <div class="logo-text">
            <strong>SCOPUSIXTEEN</strong>
            <span>Publishing</span>
          </div>
        </a>
        <nav class="nav">
          <a href="journals.html">Journals</a>
          <a href="articles.html">Articles</a>
          <a href="subscribe.html">Subscribe</a>
          <a href="about.html">About</a>
          <a href="submit.html">For Authors</a>
        </nav>
        <div class="header-actions">
          <a href="articles.html" class="btn btn-outline btn-sm hide-sm">🔍 Search</a>
          <a href="submit.html" class="btn btn-primary btn-sm">Submit Manuscript</a>
          <a href="${session ? "dashboard.html" : "login.html"}" class="btn btn-outline btn-sm">${loginLabel}</a>
          <button class="menu-btn" onclick="toggleMenu()" aria-label="Menu">☰</button>
        </div>
      </div>
      <div id="mobileNav" class="mobile-nav">
        <a href="journals.html">Journals</a>
        <a href="articles.html">Articles</a>
        <a href="subscribe.html">Subscribe</a>
        <a href="about.html">About</a>
        <a href="submit.html">For Authors</a>
        <a href="login.html">Login</a>
        ${session ? '<a href="dashboard.html">Dashboard</a><a href="#" onclick="SX.logout()">Logout</a>' : ""}
      </div>
    </header>`;
  }

  function renderFooter() {
    return `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <div class="logo">
              <div class="logo-mark">Si6</div>
              <div class="logo-text">
                <strong style="color:#fff">SCOPUSIXTEEN</strong>
                <span>Publishing</span>
              </div>
            </div>
            <p>Advancing Research. Connecting Knowledge. Building a better future.</p>
          </div>
          <div class="footer-col">
            <h4>Explore</h4>
            <ul>
              <li><a href="journals.html">Journals</a></li>
              <li><a href="articles.html">Articles</a></li>
              <li><a href="subscribe.html">Subscribe</a></li>
              <li><a href="about.html">Open Access</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>For Authors</h4>
            <ul>
              <li><a href="submit.html">Submit Manuscript</a></li>
              <li><a href="about.html">Author Guidelines</a></li>
              <li><a href="login.html">Author Login</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:support@scopusixteen.com">support@scopusixteen.com</a></li>
              <li><a href="#">Help Centre</a></li>
              <li><a href="about.html">About Us</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          © 2025–2026 Scopusixteen Publishing. All rights reserved. · Static demo version
        </div>
      </div>
    </footer>`;
  }

  // Inject header/footer if placeholders exist
  const headerEl = document.getElementById("site-header");
  const footerEl = document.getElementById("site-footer");
  if (headerEl) headerEl.innerHTML = renderHeader();
  if (footerEl) footerEl.innerHTML = renderFooter();

  // ---- Page-specific ----
  if (document.getElementById("home-journals")) {
    const grid = document.getElementById("home-journals");
    grid.innerHTML = SX.journals.slice(0, 4).map((j) => `
      <a href="journals.html" class="journal-card">
        <div class="journal-card-top" style="background:${j.color}">
          ${SX.modeBadge(j.mode)}
        </div>
        <div class="journal-card-body">
          <h3>${j.title}</h3>
          <div class="meta">ISSN ${j.issn} · ${j.category}</div>
          <div class="meta mt-2">${j.latest}</div>
        </div>
      </a>
    `).join("");
  }

  if (document.getElementById("home-articles")) {
    const list = document.getElementById("home-articles");
    list.innerHTML = SX.articles.slice(0, 3).map((a) => `
      <div class="article-row">
        <div class="article-thumb" style="background:${a.gradient}"></div>
        <div style="flex:1;min-width:0">
          <h3>${a.title}</h3>
          <div class="authors">${a.authors}</div>
          <div class="journal-name">${a.journalTitle}</div>
        </div>
        <div class="article-meta">
          <span style="font-size:0.75rem;color:var(--slate-500)">${a.date}</span>
          <span class="doi">DOI ${a.doi}</span>
          ${a.isOA ? '<span class="badge badge-oa">Open Access</span>' : '<span class="badge badge-locked">Subscription</span>'}
          <a href="article.html?id=${a.id}" class="btn btn-outline btn-sm">Read Article ↗</a>
        </div>
      </div>
    `).join("");
  }

  // Articles list page
  if (document.getElementById("articles-list")) {
    const list = document.getElementById("articles-list");
    list.innerHTML = SX.articles.map((a) => `
      <div class="article-row">
        <div class="article-thumb" style="background:${a.gradient}"></div>
        <div style="flex:1;min-width:0">
          <h3>${a.title}</h3>
          <div class="authors">${a.authors}</div>
          <div class="journal-name">${a.journalTitle}</div>
        </div>
        <div class="article-meta">
          <span style="font-size:0.75rem;color:var(--slate-500)">${a.date}</span>
          <span class="doi">DOI ${a.doi}</span>
          ${a.isOA ? '<span class="badge badge-oa">Open Access</span>' : '<span class="badge badge-locked">Subscription</span>'}
          <a href="article.html?id=${a.id}" class="btn btn-outline btn-sm">Read Article ↗</a>
        </div>
      </div>
    `).join("");
  }

  // Journals list
  if (document.getElementById("journals-list")) {
    const grid = document.getElementById("journals-list");
    grid.innerHTML = SX.journals.map((j) => `
      <a href="journals.html" class="journal-card">
        <div class="journal-card-top" style="background:${j.color}">
          ${SX.modeBadge(j.mode)}
        </div>
        <div class="journal-card-body">
          <h3>${j.title}</h3>
          <div class="meta">ISSN ${j.issn} · ${j.category}</div>
          <div class="meta mt-2">${j.latest}</div>
          ${j.mode !== "SUBSCRIPTION" ? `<div class="meta mt-2">APC from $${j.apc}</div>` : ""}
        </div>
      </a>
    `).join("");
  }

  // Single article page
  if (document.getElementById("article-root")) {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id") || "art-001";
    const article = SX.articles.find((a) => a.id === id) || SX.articles[0];
    const unlocked = getUnlocked().includes(article.id);
    const session = getSession();
    const canRead = article.isOA || unlocked || (session && (session.role === "editor" || session.role === "admin"));

    document.getElementById("article-root").innerHTML = `
      <div class="article-hero">
        <div class="container" style="max-width:48rem">
          <div style="margin-bottom:0.75rem">
            ${article.isOA ? '<span class="badge badge-oa">Open Access</span>' : '<span class="badge badge-locked">Subscription</span>'}
            <span style="font-size:0.8rem;color:var(--slate-500);margin-left:0.5rem">${article.journalTitle}</span>
          </div>
          <h1 style="font-size:1.75rem;font-weight:700;line-height:1.3">${article.title}</h1>
          <p style="margin-top:0.75rem;color:var(--slate-600)">${article.authors}</p>
          <p style="margin-top:0.35rem;font-size:0.85rem;color:var(--slate-500)">
            Published ${article.date} · <span class="doi">DOI ${article.doi}</span>
          </p>
        </div>
      </div>
      <div class="article-content">
        <div class="abstract">
          <strong>Abstract</strong>
          <p style="margin-top:0.5rem">${article.abstract}</p>
        </div>
        ${
          canRead
            ? `<div class="fulltext">${article.fullText}</div>`
            : `<div class="fulltext"><p>${article.teaser}</p><p style="color:var(--slate-500);font-style:italic">…</p></div>
               <div class="paywall">
                 <h3>🔒 Full text restricted</h3>
                 <p>This article is available via institutional or individual subscription.<br>
                 For this demo you can unlock it instantly.</p>
                 <button class="btn btn-primary" onclick="SX.unlock('${article.id}')">Unlock for demo</button>
                 <p class="mt-4" style="font-size:0.85rem"><a href="subscribe.html">View subscription options →</a></p>
               </div>`
        }
      </div>
    `;
  }

  // Login form
  if (document.getElementById("login-form")) {
    document.getElementById("login-form").addEventListener("submit", function (e) {
      e.preventDefault();
      const email = document.getElementById("email").value.trim().toLowerCase();
      const password = document.getElementById("password").value;
      const user = SX.users[email];
      const err = document.getElementById("login-error");
      if (user && user.password === password) {
        setSession({ email, name: user.name, role: user.role });
        window.location.href = "dashboard.html";
      } else {
        err.textContent = "Invalid email or password. Try the demo accounts below.";
        err.classList.remove("hidden");
      }
    });
  }

  // Dashboard
  if (document.getElementById("dashboard-root")) {
    const session = getSession();
    if (!session) {
      window.location.href = "login.html";
      return;
    }
    const role = session.role;
    document.getElementById("dash-user").textContent = session.name + " (" + role + ")";
    document.getElementById("dashboard-root").innerHTML = `
      <div class="dash-grid">
        <div class="dash-card">
          <h3>Role</h3>
          <div class="value" style="font-size:1.25rem;text-transform:capitalize">${role}</div>
        </div>
        <div class="dash-card">
          <h3>Manuscripts</h3>
          <div class="value">${role === "author" ? "2" : role === "editor" ? "12" : "5"}</div>
        </div>
        <div class="dash-card">
          <h3>Pending actions</h3>
          <div class="value">${role === "reviewer" ? "3" : role === "editor" ? "7" : "1"}</div>
        </div>
      </div>
      <div class="mt-6" style="border:1px solid var(--slate-200);border-radius:0.75rem;padding:1.25rem;background:#fff">
        <h3 style="font-weight:600;margin-bottom:0.75rem">Quick actions</h3>
        <div style="display:flex;flex-wrap:wrap;gap:0.5rem">
          ${role === "author" ? '<a href="submit.html" class="btn btn-primary btn-sm">Submit new manuscript</a>' : ""}
          ${role === "editor" ? '<a href="articles.html" class="btn btn-primary btn-sm">Review submissions</a>' : ""}
          ${role === "reviewer" ? '<a href="articles.html" class="btn btn-primary btn-sm">View assigned reviews</a>' : ""}
          <a href="articles.html" class="btn btn-outline btn-sm">Browse articles</a>
          <button class="btn btn-outline btn-sm" onclick="SX.logout()">Logout</button>
        </div>
        <p class="mt-4" style="font-size:0.85rem;color:var(--slate-500)">
          This is a static demo dashboard. Full editorial workflows (peer review, DOI, Stripe, AI pre-check) require the original Next.js application.
        </p>
      </div>
    `;
  }

  // Public API
  window.SX.logout = function () {
    clearSession();
    window.location.href = "index.html";
  };
  window.SX.unlock = function (id) {
    unlockArticle(id);
    window.location.reload();
  };
})();
