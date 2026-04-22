const books = [
  {
    title: "Hunt Like a Buffalo Hunter",
    status: "Available now",
    description:
      "A reflective leadership work on patience, discipline, resilience, and the long game of meaningful pursuit.",
  },
  {
    title: "Dagga Boy",
    status: "Coming soon",
    description:
      "A deeper, more personal work on strength, solitude, survival, and the quiet weight a man learns to carry.",
  },
  {
    title: "Falling Mantle",
    status: "In development",
    description:
      "A meditation on calling, identity, responsibility, and the gap between what one is called and what one answers to.",
  },
];

const pillars = [
  {
    title: "Books",
    text: "Give each title a proper home with excerpts, themes, endorsements, launch updates, and a clear path to buy or preorder.",
  },
  {
    title: "Thought Leadership",
    text: "Turn social media writing into a structured body of ideas around leadership, becoming, strategy, discipline, endurance, and growth.",
  },
  {
    title: "Platform",
    text: "Build one central place where readers, media, collaborators, and decision-makers can understand the work and the man behind it.",
  },
];

const contentStreams = [
  "Leadership reflections",
  "Running and endurance lessons",
  "Books and excerpts",
  "Strategy and execution insights",
  "Speaking and media features",
  "Newsletter and community building",
];

const roles = [
  "Author",
  "Strategist",
  "Coach",
  "Speaker",
  "Executive leader",
];

export default function Home() {
  return (
    <main className="site-shell">
      <div className="site-glow site-glow-left" />
      <div className="site-glow site-glow-right" />

      <header className="topbar">
        <div className="container topbar-inner">
          <div>
            <a href="#hero" className="brand-mark">
              Lovemore Nyatsine
            </a>
            <p className="brand-subtitle">
              Author, coach, speaker, and executive leader
            </p>
          </div>

          <nav className="nav">
            <a href="#about">About</a>
            <a href="#books">Books</a>
            <a href="#writing">Writing</a>
            <a href="#platform">Platform</a>
            <a href="#contact">Contact</a>
          </nav>

          <details className="mobile-menu">
            <summary aria-label="Open navigation menu">
              <span />
              <span />
              <span />
            </summary>
            <nav className="mobile-menu-panel" aria-label="Mobile navigation">
              <a href="#about">About</a>
              <a href="#books">Books</a>
              <a href="#writing">Writing</a>
              <a href="#platform">Platform</a>
              <a href="#contact">Contact</a>
            </nav>
          </details>
        </div>
      </header>

      <section id="hero" className="hero">
        <div className="container hero-grid">
          <div className="hero-copy reveal">
            <span className="eyebrow">Becoming, deliberately</span>
            <h1>
              A distinguished digital home for books, leadership, and the quiet
              force behind the work.
            </h1>
            <p className="hero-lead">
              Lovemore Nyatsine operates where authorship, coaching, disciplined
              growth, and executive leadership meet. This site is designed to
              turn attention into permanence and credibility into opportunity.
            </p>

            <div className="hero-actions">
              <a href="#books" className="button button-primary">
                Explore the books
              </a>
              <a href="#platform" className="button button-secondary">
                View the platform
              </a>
            </div>

            <div className="role-list">
              {roles.map((role) => (
                <span key={role}>{role}</span>
              ))}
            </div>
          </div>

          <div className="hero-panel reveal reveal-delay">
            <div className="hero-panel-frame">
              <div className="hero-panel-label">Positioning</div>
              <h2>
                Not a résumé. A body of work shaped by discipline, strategy, and
                earned perspective.
              </h2>
              <p>
                The tone leans editorial and authoritative: less motivational
                noise, more weight, clarity, and conviction.
              </p>
            </div>

            <div className="hero-note">
              <span className="stat-value">3</span>
              <span className="stat-label">Books in the ecosystem</span>
            </div>

            <div className="hero-quote">
              <p>
                Social platforms create momentum. A website lets that momentum
                accumulate into a legacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container section-grid">
          <div className="section-heading reveal">
            <span className="eyebrow">About</span>
            <h2>Build the man behind the message.</h2>
          </div>

          <div className="about-card reveal reveal-delay">
            <p className="about-intro">
              Lovemore Nyatsine is an author, strategist, coach, and reflective
              voice on leadership, endurance, growth, execution, and becoming.
              His work carries the credibility of lived responsibility at senior
              management level while remaining deeply human and inwardly
              attentive.
            </p>
            <p>
              The site should feel elegant, grounded, and unmistakably
              intentional, with enough warmth for readers and enough authority
              for media, collaborators, and corporate audiences.
            </p>
            <div className="about-metrics">
              <div>
                <span>Positioning</span>
                <strong>Author-led personal brand</strong>
              </div>
              <div>
                <span>Audience</span>
                <strong>Readers, leaders, media, partners</strong>
              </div>
              <div>
                <span>Commercial edge</span>
                <strong>Books, speaking, advisory credibility</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="books" className="section section-books">
        <div className="container">
          <div className="section-row reveal">
            <div className="section-heading compact books-heading">
              <span className="eyebrow">Books</span>
              <h2>The books should anchor the entire platform.</h2>
            </div>
            <p className="section-copy">
              Each title can grow into its own destination with cover art,
              synopsis, excerpt pages, endorsement lines, launch content, and a
              direct path to purchase.
            </p>
          </div>

          <div className="book-grid">
            {books.map((book, index) => (
              <article
                key={book.title}
                className={`book-card reveal reveal-step-${index + 1}`}
              >
                <div className="book-status">{book.status}</div>
                <h3>{book.title}</h3>
                <p>{book.description}</p>
                <a href="#contact" className="text-link">
                  View book pathway
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="writing" className="section section-writing">
        <div className="container writing-grid">
          <div className="writing-copy reveal">
            <span className="eyebrow">Writing and ideas</span>
            <h2>Turn timely posts into a lasting intellectual footprint.</h2>
            <p>
              Lovemore&apos;s social writing already signals clarity and depth.
              The website gives those reflections a structure people can return
              to, search, cite, share, and subscribe to.
            </p>
          </div>

          <div className="writing-panel reveal reveal-delay">
            <div className="writing-panel-header">
              <span>Content streams to organise</span>
              <strong>Editorial architecture</strong>
            </div>

            <div className="tag-grid">
              {contentStreams.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="platform" className="section">
        <div className="container">
          <div className="section-row reveal">
            <div className="section-heading compact platform-heading">
              <span className="eyebrow">Platform architecture</span>
              <h2>What the website should do, beyond looking polished.</h2>
            </div>
            <p className="section-copy">
              The strongest personal brand sites do more than introduce a person.
              They create a system for discoverability, trust, and long-term
              audience ownership.
            </p>
          </div>

          <div className="pillar-grid">
            {pillars.map((pillar, index) => (
              <article
                key={pillar.title}
                className={`pillar-card reveal reveal-step-${index + 1}`}
              >
                <span className="pillar-index">0{index + 1}</span>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </article>
            ))}
          </div>

          <div className="platform-banner reveal">
            <span className="eyebrow">Recommended next step</span>
            <h2>
              Launch with a sharp personal brand site first, then expand into
              dedicated book pages, newsletter capture, media features, and
              speaking inquiries.
            </h2>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container newsletter-card reveal">
          <div>
            <span className="eyebrow">Email list</span>
            <h2>Own the audience you are building.</h2>
            <p>
              A mailing list turns passing readers into a reachable community for
              launches, essays, reflections, events, and strategic updates.
            </p>
          </div>

          <form className="newsletter-form">
            <label className="sr-only" htmlFor="email">
              Email address
            </label>
            <input id="email" type="email" placeholder="Enter your email" />
            <button type="submit" className="button button-primary">
              Join the list
            </button>
          </form>
        </div>
      </section>

      <section id="contact" className="section section-contact">
        <div className="container contact-grid">
          <div className="section-heading reveal">
            <span className="eyebrow">Contact</span>
            <h2>Create room for the right opportunities.</h2>
            <p className="section-copy">
              The contact section should be designed for meaningful inbound
              interest: media requests, speaking opportunities, collaborations,
              consulting, and book-related enquiries.
            </p>
          </div>

          <div className="contact-card reveal reveal-delay">
            <div>
              <span>Speaking and media</span>
              <strong>Available for selected conversations and features</strong>
            </div>
            <div>
              <span>Books</span>
              <strong>Launches, interviews, excerpts, and reader engagement</strong>
            </div>
            <div>
              <span>Consulting</span>
              <strong>Strategic advisory through Katalytic</strong>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <div className="brand-mark brand-mark-footer">Lovemore Nyatsine</div>
            <p className="brand-subtitle">Becoming, deliberately.</p>
          </div>
          <p className="footer-copy">
            A platform for books, ideas, leadership, and thoughtful influence.
          </p>
        </div>
      </footer>
    </main>
  );
}
