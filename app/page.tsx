function MailIcon() {
  return (
    <svg
      className="contact-icon"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path fill="#4285f4" d="M3 5.5 12 12v3L3 8.5Z" />
      <path fill="#34a853" d="M3 5.5v13h3v-11Z" />
      <path fill="#fbbc04" d="M21 5.5v13h-3v-11Z" />
      <path fill="#ea4335" d="M3 5.5 12 12l9-6.5v3L12 15 3 8.5Z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      className="contact-icon"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="#181717"
        d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3Z"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      className="contact-icon"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <rect width="24" height="24" rx="2.5" fill="#0a66c2" />
      <circle cx="6.8" cy="7.1" r="1.55" fill="#fff" />
      <path
        fill="#fff"
        d="M5.45 9.8h2.7v8.75h-2.7Zm4.35 0h2.6V11c.55-.85 1.55-1.5 2.95-1.5 3 0 3.55 1.95 3.55 4.5v4.55h-2.7V14.5c0-1.15 0-2.65-1.65-2.65s-1.95 1.25-1.95 2.55v4.15H9.8Z"
      />
    </svg>
  );
}

function ScholarIcon() {
  return (
    <svg
      className="contact-icon"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path fill="#4285f4" d="M12 2 1 8l11 6 9-4.9V17h2V8Z" />
      <path
        fill="#a8c7fa"
        d="M5 12.3V17c0 2.2 3.1 4 7 4s7-1.8 7-4v-4.7l-7 3.8Z"
      />
    </svg>
  );
}

const news = [
  {
    date: "2026/05",
    text: "Started as a Software Engineering Intern on the NVIDIA Dynamo team.",
    award: "",
    links: [],
  },
  {
    date: "2026/05",
    text: "O3-LSM appeared at ACM SIGMOD 2026.",
    award: "",
    links: [{ label: "paper", href: "https://doi.org/10.1145/3802093" }],
  },
  {
    date: "2025/07",
    text: "LegoIndex received the ",
    award: "ACM HPDC 2025 Best Student Paper Award.",
    links: [
      { label: "paper", href: "https://doi.org/10.1145/3731545.3731591" },
    ],
  },
  {
    date: "2025/07",
    text: "Mosaic-Cache appeared at ACM HotStorage 2025.",
    award: "",
    links: [
      { label: "paper", href: "https://doi.org/10.1145/3736548.3737839" },
    ],
  },
  {
    date: "2025/05",
    text: "Started a research internship at ByteDance.",
    award: "",
    links: [],
  },
  {
    date: "2024/07",
    text: "Our work on ZNS SSDs for persistent caching appeared at ACM HotStorage 2024.",
    award: "",
    links: [
      { label: "paper", href: "https://doi.org/10.1145/3655038.3665946" },
    ],
  },
  {
    date: "2024/06",
    text: "CaaS-LSM appeared at ACM SIGMOD 2024.",
    award: "",
    links: [{ label: "paper", href: "https://doi.org/10.1145/3654927" }],
  },
  {
    date: "2024/06",
    text: "SAS-Cache and Prophet appeared at IEEE MSST 2024.",
    award: "",
    links: [
      {
        label: "SAS-Cache",
        href: "https://www.msstconference.org/MSST-history/2024/Papers/msst24-3.2.pdf",
      },
      {
        label: "Prophet",
        href: "https://www.msstconference.org/MSST-history/2024/Papers/msst24-3.1.pdf",
      },
    ],
  },
  {
    date: "2024/05",
    text: "Returned to Oak Ridge National Laboratory for a second research internship.",
    award: "",
    links: [],
  },
  {
    date: "2023/05",
    text: "Started a research internship with the ADIOS2 team at Oak Ridge National Laboratory.",
    award: "",
    links: [],
  },
  {
    date: "2022/08",
    text: "Started my PhD in Computer Science at Arizona State University.",
    award: "",
    links: [],
  },
];

const selectedResearch = [
  {
    venue: "HPDC'25",
    title:
      "LegoIndex: A Scalable and Modular Indexing Framework for Efficient Analysis of Extreme-Scale Particle Data",
    award: "ACM HPDC 2025 Best Student Paper Award",
    image: "./research/legoindex-figure8.png",
    imageAlt:
      "LegoIndex architecture with a cell index and customizable multi-level in-cell indexes",
    imageWidth: 990,
    imageHeight: 463,
    authors: (
      <>
        <strong>Chang Guo</strong>, Ning Yan, Lipeng Wan, and Zhichao Cao
      </>
    ),
    links: [
      { label: "paper", href: "https://doi.org/10.1145/3731545.3731591" },
    ],
    pptHref:
      "https://hpdc.sci.utah.edu/2025/assets/slides/main_session/guo.pdf",
  },
  {
    venue: "HotStorage'25",
    title:
      "Mosaic-Cache — Unlocking the Unusable: A Proactive Caching Framework for Reusing Partial Overlapped Data",
    award: "",
    image: "./research/mosaic-cache-figure2.png",
    imageAlt:
      "Mosaic-Cache architecture with overlap-aware partitioning, metadata management, fetch planning, and asynchronous merging",
    imageWidth: 990,
    imageHeight: 571,
    authors: (
      <>
        <strong>Chang Guo</strong>, Norbert Podhorszki, Greg Eisenhauer, Zhiwen
        Xie, Scott Klasky, and Zhichao Cao
      </>
    ),
    links: [
      { label: "paper", href: "https://doi.org/10.1145/3736548.3737839" },
    ],
    pptHref: "./research/mosaic-cache-hotstorage25.pdf",
  },
];

type ProjectLink = {
  label: string;
  href: string;
};

type OpenSourceProject = {
  name: string;
  href: string;
  description: string;
  links: ProjectLink[];
  linkGroups?: {
    label: string;
    links: ProjectLink[];
  }[];
};

const openSourceProjects: OpenSourceProject[] = [
  {
    name: "vLLM",
    href: "https://github.com/vllm-project/vllm",
    description:
      "Defined backend configuration boundaries and tier ownership for native KV offloading. Added self-describing placement events for external routers across CPU, filesystem, and object-store tiers.",
    links: [],
    linkGroups: [
      {
        label: "Architecture",
        links: [
          {
            label: "config boundary",
            href: "https://github.com/vllm-project/vllm/pull/48150",
          },
          {
            label: "tier ownership",
            href: "https://github.com/vllm-project/vllm/pull/46544",
          },
        ],
      },
      {
        label: "Placement events",
        links: [
          {
            label: "CPU KV events",
            href: "https://github.com/vllm-project/vllm/pull/43468",
          },
          {
            label: "FS/OBJ events",
            href: "https://github.com/vllm-project/vllm/pull/47923",
          },
        ],
      },
    ],
  },
  {
    name: "NVIDIA Dynamo",
    href: "https://github.com/ai-dynamo/dynamo",
    description:
      "Connected vLLM CPU-offload events to the lower-tier KV index and exposed host and disk cache-hit weights for routing.",
    links: [
      {
        label: "CPU-tier events",
        href: "https://github.com/ai-dynamo/dynamo/pull/10368",
      },
      {
        label: "routing weights",
        href: "https://github.com/ai-dynamo/dynamo/pull/10157",
      },
    ],
  },
  {
    name: "llm-d",
    href: "https://github.com/llm-d/llm-d-kv-cache",
    description:
      "Improved KV-event compatibility and cache-index correctness for vLLM offloading.",
    links: [
      {
        label: "map encoding",
        href: "https://github.com/llm-d/llm-d-kv-cache/pull/661",
      },
      {
        label: "duplicate removals",
        href: "https://github.com/llm-d/llm-d-kv-cache/pull/680",
      },
    ],
  },
  {
    name: "ADIOS2",
    href: "https://github.com/ornladios/ADIOS2",
    description:
      "Built client-side caching for remote scientific-data reads, with partial-overlap reuse, dataset-aware keys, and query metadata.",
    links: [
      {
        label: "core cache",
        href: "https://github.com/ornladios/ADIOS2/pull/4210",
      },
      {
        label: "cache keys",
        href: "https://github.com/ornladios/ADIOS2/pull/4267",
      },
      {
        label: "query metadata",
        href: "https://github.com/ornladios/ADIOS2/pull/4294",
      },
    ],
  },
];

const experience = [
  {
    organization: "NVIDIA",
    href: "https://www.nvidia.com/",
    team: "Dynamo",
    teamHref: "https://github.com/ai-dynamo/dynamo",
    dates: "May 2026 - Present",
    role: "Software Engineering Intern",
    location: "Santa Clara, CA",
    bullets: [
      "Defined a clean backend configuration boundary for vLLM native KV offloading. Moved cache-layout parsing into the connector and standardized the configuration passed to offloading backends.",
      "Built self-describing KV events across vLLM, Dynamo, and llm-d. Enabled external routers to track CPU-offloaded blocks and validated routing in normal-block and chunk modes.",
    ],
    paper: null,
    linksLabel: "Selected PRs",
    links: [
      {
        label: "vLLM #48150",
        href: "https://github.com/vllm-project/vllm/pull/48150",
      },
      {
        label: "vLLM #43468",
        href: "https://github.com/vllm-project/vllm/pull/43468",
      },
      {
        label: "Dynamo #10368",
        href: "https://github.com/ai-dynamo/dynamo/pull/10368",
      },
      {
        label: "llm-d #680",
        href: "https://github.com/llm-d/llm-d-kv-cache/pull/680",
      },
    ],
  },
  {
    organization: "ByteDance",
    href: "https://www.bytedance.com/en/",
    team: "",
    teamHref: "",
    dates: "May 2025 - Aug 2025",
    role: "Research Intern",
    location: "San Jose, CA",
    bullets: [
      "Co-developed GPU-centric storage for LLM checkpointing and KV cache offloading, integrated with LMCache and vLLM.",
    ],
    paper: null,
    linksLabel: "",
    links: [],
  },
  {
    organization: "Oak Ridge National Laboratory",
    href: "https://www.ornl.gov/",
    team: "ADIOS2",
    teamHref: "https://github.com/ornladios/ADIOS2",
    dates: "Summers 2023 and 2024",
    role: "Research Intern",
    location: "Oak Ridge, TN",
    bullets: [
      "Built client-side caching for remote scientific data, including partial-overlap reuse and metadata indexing.",
      "Developed Mosaic-Cache during the internship; the work appeared at ACM HotStorage '25 and was upstreamed through three merged ADIOS2 pull requests.",
    ],
    paper: {
      label: "HotStorage '25",
      href: "https://doi.org/10.1145/3736548.3737839",
    },
    linksLabel: "Selected PR",
    links: [
      {
        label: "ADIOS2 #4210",
        href: "https://github.com/ornladios/ADIOS2/pull/4210",
      },
    ],
  },
  {
    organization: "Caixin Data",
    href: "https://www.caixinglobal.com/",
    team: "",
    teamHref: "",
    dates: "Aug 2018 - Jul 2022",
    role: "Algorithm Engineer",
    location: "Beijing, China",
    bullets: [
      "Built NLP pipelines for information extraction, topic modeling, and sentiment analysis over financial documents and business news.",
    ],
    paper: null,
    linksLabel: "",
    links: [],
  },
];

const education = [
  {
    school: "Arizona State University",
    href: "https://scai.engineering.asu.edu/",
    dates: "Aug 2022 - Present",
    degree: "PhD Candidate, Computer Science",
    note: "Intelligent Data Infrastructure Lab; advisor: Prof. Zhichao Cao.",
  },
  {
    school: "Tsinghua University",
    href: "https://www.tsinghua.edu.cn/en/",
    dates: "Aug 2014 - Jul 2018",
    degree: "B.E. in Automation",
    note: "Dual degree: B.B.A. in Business Administration.",
  },
  {
    school: "KTH Royal Institute of Technology",
    href: "https://www.kth.se/en",
    dates: "Jan 2017 - Jun 2017",
    degree: "Exchange Student",
    note: "",
  },
];

const teaching = [
  {
    course: "CSE 511: Data Processing at Scale",
    dates: "Fall 2024, Fall 2025",
    role: "Teaching Assistant · Graduate-level",
  },
  {
    course: "CSE 330: Operating Systems",
    dates: "Fall 2023",
    role: "Teaching Assistant · Undergraduate-level",
  },
];

export default function Home() {
  return (
    <main className="site-shell">
      <header className="hero" aria-labelledby="page-title">
        <div className="portrait-wrap">
          {/* A direct relative asset avoids the unavailable image optimizer. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="portrait"
            src="./profile-chang-guo.png"
            alt="Chang Guo"
            width={260}
            height={260}
            fetchPriority="high"
          />
        </div>

        <div className="hero-copy">
          <p className="eyebrow">Biography</p>
          <h1 id="page-title">Chang Guo</h1>
          <p>
            I am a PhD Candidate in Computer Science at Arizona State
            University, advised by Prof.{" "}
            <a href="https://search.asu.edu/profile/4082902">Zhichao Cao</a>.
            Before joining ASU, I earned a B.E. in Automation and a B.B.A. in
            Business Administration from Tsinghua University.
          </p>
          <p>
            My research focuses on indexing, caching, and storage systems for
            LLM inference and scientific computing. LegoIndex received the ACM
            HPDC 2025 Best Student Paper Award.
          </p>
          <p>
            I am currently a Software Engineering Intern on the NVIDIA Dynamo
            team. I work on tiered KV cache management across GPU, CPU, and
            SSD.
          </p>
          <nav className="contact-links" aria-label="Contact links">
            <a href="mailto:cguo51@asu.edu">
              <MailIcon />
              <span>Mail</span>
            </a>
            <a href="https://github.com/Change72">
              <GitHubIcon />
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/chang-guo-systems/">
              <LinkedInIcon />
              <span>LinkedIn</span>
            </a>
            <a href="https://scholar.google.com/citations?user=tUgdcCoAAAAJ&hl=en">
              <ScholarIcon />
              <span>Google Scholar</span>
            </a>
          </nav>
        </div>
      </header>

      <section className="section" aria-labelledby="news-heading">
        <h2 id="news-heading">News</h2>
        <div className="news-window" tabIndex={0}>
          <ul className="news-list">
            {news.map((item) => (
              <li key={item.date + item.text}>
                <time>{item.date}</time>
                <span>
                  {item.text}
                  {item.award ? (
                    <strong className="news-award">{item.award}</strong>
                  ) : null}
                  {item.links.length ? (
                    <span className="news-links">
                      {item.links.map((link) => (
                        <a href={link.href} key={link.href}>
                          [{link.label}]
                        </a>
                      ))}
                    </span>
                  ) : null}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="research-heading">
        <h2 id="research-heading">Selected Research</h2>
        <div className="publication-list">
          {selectedResearch.map((paper) => (
            <article className="publication" key={paper.title}>
              <div
                className={
                  paper.image
                    ? "publication-marker publication-marker-image"
                    : "publication-marker"
                }
              >
                {paper.image ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    className="publication-image"
                    src={paper.image}
                    alt={paper.imageAlt}
                    width={paper.imageWidth}
                    height={paper.imageHeight}
                  />
                ) : (
                  paper.venue
                )}
              </div>
              <div>
                <h3>
                  <span className="publication-venue">[{paper.venue}]</span>{" "}
                  {paper.title}
                  {paper.links.map((link) => (
                    <a
                      className="publication-paper-link"
                      href={link.href}
                      key={link.href}
                    >
                      [{link.label}]
                    </a>
                  ))}
                  {paper.pptHref ? (
                    <a
                      className="publication-paper-link"
                      href={paper.pptHref}
                    >
                      [ppt]
                    </a>
                  ) : null}
                </h3>
                {paper.award ? (
                  <p className="publication-award">{paper.award}</p>
                ) : null}
                <p className="authors">{paper.authors}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="experience-heading">
        <h2 id="experience-heading">Experience</h2>
        <div className="timeline-list">
          {experience.map((item) => (
            <article className="timeline-item" key={item.organization}>
              <div className="timeline-heading experience-heading">
                <h3>
                  <a href={item.href}>{item.organization}</a>
                  {item.team ? (
                    <>
                      {" ("}
                      <a href={item.teamHref}>{item.team}</a>
                      {")"}
                    </>
                  ) : null}
                </h3>
                <time>{item.dates}</time>
              </div>
              <div className="experience-subheading">
                <p className="role">{item.role}</p>
                {item.location ? (
                  <span className="timeline-location">{item.location}</span>
                ) : null}
              </div>
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              {item.paper || item.links.length ? (
                <p className="experience-links">
                  {item.paper ? (
                    <span className="experience-link-group">
                      <span className="experience-links-label">Paper:</span>
                      <a href={item.paper.href}>[{item.paper.label}]</a>
                    </span>
                  ) : null}
                  {item.links.length ? (
                    <span className="experience-link-group">
                      {item.linksLabel ? (
                        <span className="experience-links-label">
                          {item.linksLabel}:
                        </span>
                      ) : null}
                      {item.links.map((link) => (
                        <a href={link.href} key={link.href}>
                          [{link.label}]
                        </a>
                      ))}
                    </span>
                  ) : null}
                </p>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="education-heading">
        <h2 id="education-heading">Education</h2>
        <div className="timeline-list education-list">
          {education.map((item) => (
            <article className="timeline-item" key={item.school}>
              <div className="timeline-heading">
                <h3>
                  <a href={item.href}>{item.school}</a>
                </h3>
                <time>{item.dates}</time>
              </div>
              <p className="role">{item.degree}</p>
              {item.note ? <p>{item.note}</p> : null}
            </article>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="teaching-heading">
        <h2 id="teaching-heading">Teaching</h2>
        <div className="timeline-list">
          {teaching.map((item) => (
            <article className="timeline-item" key={item.course}>
              <div className="timeline-heading">
                <h3>{item.course}</h3>
                <time>{item.dates}</time>
              </div>
              <p className="role">{item.role}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="opensource-heading">
        <h2 id="opensource-heading">Selected Open-Source Contributions</h2>
        <div className="project-list">
          {openSourceProjects.map((project) => (
            <article className="project" key={project.name}>
              <h3>
                <a href={project.href}>{project.name}</a>
              </h3>
              <div>
                <p>{project.description}</p>
                {project.linkGroups ? (
                  <div className="project-link-groups">
                    {project.linkGroups.map((group) => (
                      <span className="project-link-group" key={group.label}>
                        <span className="project-links-label">
                          {group.label}:
                        </span>
                        {group.links.map((link) => (
                          <a href={link.href} key={link.href}>
                            [{link.label}]
                          </a>
                        ))}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="project-links">
                    {project.links.map((link) => (
                      <a href={link.href} key={link.href}>
                        [{link.label}]
                      </a>
                    ))}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="awards-heading">
        <h2 id="awards-heading">Awards</h2>
        <ul className="award-list">
          <li>
            <strong>ACM HPDC 2025 Best Student Paper Award</strong> for
            LegoIndex.
          </li>
          <li>
            Student Travel Grants: USENIX FAST 2025, ACM HPDC 2025, and ACM
            HotStorage 2025.
          </li>
        </ul>
      </section>

      <section className="section" aria-labelledby="service-heading">
        <h2 id="service-heading">Academic Service</h2>
        <ul className="service-list">
          <li>
            <strong>Shadow Program Committee:</strong> VLDB 2027, EuroSys
            2026, and ACM SIGMETRICS 2026.
          </li>
          <li>
            <strong>Artifact Evaluation Committee:</strong> MLSys 2026.
          </li>
        </ul>
      </section>

      <footer>
        <span>© 2026 Chang Guo</span>
        <a href="mailto:cguo51@asu.edu">cguo51@asu.edu</a>
      </footer>
    </main>
  );
}
