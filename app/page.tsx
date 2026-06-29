import Image from "next/image";

const news = [
  {
    date: "2026/05",
    text: "Started a software engineering internship with the NVIDIA Dynamo team.",
  },
  {
    date: "2026/05",
    text: "O3-LSM appeared at ACM SIGMOD 2026.",
  },
  {
    date: "2025/07",
    text: "LegoIndex received the ACM HPDC 2025 Best Student Paper Award.",
  },
  {
    date: "2025/07",
    text: "Mosaic-Cache appeared at ACM HotStorage 2025.",
  },
];

const selectedResearch = [
  {
    venue: "SIGMOD '26",
    title:
      "O3-LSM: Maximizing Disaggregated LSM Write Performance via Three-Layer Offloading",
    authors: (
      <>
        Qi Lin, Gangqi Huang, Te Guo, <strong>Chang Guo</strong>, Viraj
        Thakkar, Zichen Zhu, Jianguo Wang, and Zhichao Cao
      </>
    ),
    description: "Three-layer offloading for disaggregated LSM systems.",
    links: [{ label: "paper", href: "https://doi.org/10.1145/3802093" }],
  },
  {
    venue: "HPDC '25",
    title:
      "LegoIndex: A Scalable and Modular Indexing Framework for Efficient Analysis of Extreme-Scale Particle Data",
    authors: (
      <>
        <strong>Chang Guo</strong>, Ning Yan, Lipeng Wan, and Zhichao Cao
      </>
    ),
    description:
      "Modular indexing for extreme-scale particle data. Best Student Paper Award.",
    links: [
      { label: "paper", href: "https://doi.org/10.1145/3731545.3731591" },
    ],
  },
  {
    venue: "HotStorage '25",
    title:
      "Unlocking the Unusable: A Proactive Caching Framework for Reusing Partial Overlapped Data",
    authors: (
      <>
        <strong>Chang Guo</strong>, Norbert Podhorszki, Greg Eisenhauer, Zhiwen
        Xie, Scott Klasky, and Zhichao Cao
      </>
    ),
    description:
      "Mosaic-Cache enables proactive reuse of partially overlapping scientific data.",
    links: [
      { label: "paper", href: "https://doi.org/10.1145/3736548.3737839" },
    ],
  },
];

const openSourceProjects = [
  {
    name: "vLLM",
    href: "https://github.com/vllm-project/vllm",
    description:
      "Added self-describing events for CPU-offloaded KV cache, so external routers can track offloaded blocks without a second event stream.",
    links: [
      {
        label: "KV events",
        href: "https://github.com/vllm-project/vllm/pull/43468",
      },
      {
        label: "benchmark",
        href: "https://github.com/vllm-project/vllm/pull/43756",
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
    organization: "NVIDIA Dynamo",
    href: "https://github.com/ai-dynamo/dynamo",
    dates: "May 2026 - Present",
    role: "Software Engineering Intern",
    bullets: [
      "Built self-describing KV events for vLLM native CPU offloading and integrated them with Dynamo and llm-d.",
      "Validated KV-aware routing in normal-block and chunk modes.",
    ],
  },
  {
    organization: "ByteDance",
    href: "https://www.bytedance.com/en/",
    dates: "May 2025 - Aug 2025",
    role: "Research Intern",
    bullets: [
      "Co-developed GPU-centric storage for LLM checkpointing and KV cache offloading, integrated with LMCache and vLLM.",
    ],
  },
  {
    organization: "Oak Ridge National Laboratory",
    href: "https://www.ornl.gov/",
    dates: "Summers 2023 and 2024",
    role: "Research Intern, ADIOS2",
    bullets: [
      "Built client-side caching for remote scientific data, including partial-overlap reuse and metadata indexing.",
      "Developed Mosaic-Cache and upstreamed the design to ADIOS2.",
    ],
  },
  {
    organization: "Caixin Data",
    href: "https://www.caixinglobal.com/",
    dates: "Aug 2018 - Jul 2022",
    role: "Algorithm Engineer",
    bullets: [
      "Built NLP pipelines for information extraction, topic modeling, and sentiment analysis over financial documents and business news.",
    ],
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

export default function Home() {
  return (
    <main className="site-shell">
      <header className="hero" aria-labelledby="page-title">
        <div className="portrait-wrap">
          <Image
            className="portrait"
            src="/chang-guo.jpg"
            alt="Chang Guo"
            width={260}
            height={260}
            priority
          />
        </div>

        <div className="hero-copy">
          <p className="eyebrow">Biography</p>
          <h1 id="page-title">Chang Guo</h1>
          <p>
            I am a PhD Candidate in Computer Science at Arizona State
            University, advised by Prof.{" "}
            <a href="https://search.asu.edu/profile/4082902">Zhichao Cao</a>. I
            build indexing, caching, and storage systems for LLM inference and
            scientific computing.
          </p>
          <p>
            I am currently a Software Engineering Intern with the NVIDIA
            Dynamo team. My work focuses on tiered KV cache management and data
            movement across GPU, CPU, and SSD tiers.
          </p>
          <nav className="contact-links" aria-label="Contact links">
            <a href="mailto:cguo51@asu.edu">Email</a>
            <a href="https://github.com/Change72">GitHub</a>
            <a href="https://www.linkedin.com/in/chang-guo-systems/">
              LinkedIn
            </a>
            <a href="https://orcid.org/0009-0001-4561-9945">ORCID</a>
          </nav>
        </div>
      </header>

      <section className="section" aria-labelledby="news-heading">
        <h2 id="news-heading">News</h2>
        <div className="news-window" tabIndex={0}>
          <ul className="news-list">
            {news.map((item) => (
              <li key={item.text}>
                <time>{item.date}</time>
                <span>{item.text}</span>
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
              <div className="publication-marker" aria-hidden="true">
                {paper.venue}
              </div>
              <div>
                <h3>{paper.title}</h3>
                <p className="authors">{paper.authors}</p>
                <p>{paper.description}</p>
                <p className="paper-links">
                  {paper.links.map((link) => (
                    <a href={link.href} key={link.href}>
                      [{link.label}]
                    </a>
                  ))}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="opensource-heading">
        <h2 id="opensource-heading">Open Source</h2>
        <div className="project-list">
          {openSourceProjects.map((project) => (
            <article className="project" key={project.name}>
              <h3>
                <a href={project.href}>{project.name}</a>
              </h3>
              <div>
                <p>{project.description}</p>
                <p className="project-links">
                  {project.links.map((link) => (
                    <a href={link.href} key={link.href}>
                      [{link.label}]
                    </a>
                  ))}
                </p>
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
              <div className="timeline-heading">
                <h3>
                  <a href={item.href}>{item.organization}</a>
                </h3>
                <time>{item.dates}</time>
              </div>
              <p className="role">{item.role}</p>
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
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

      <footer>
        <span>© 2026 Chang Guo</span>
        <a href="mailto:cguo51@asu.edu">cguo51@asu.edu</a>
      </footer>
    </main>
  );
}
