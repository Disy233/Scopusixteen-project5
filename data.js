/* Mock data for Scopusixteen static demo */
window.SX = window.SX || {};

SX.journals = [
  { id: "eng-applied", title: "Journal of Engineering and Applied Sciences", short: "JEAS", issn: "2616-7300", category: "Engineering", mode: "APC", color: "linear-gradient(135deg,#2563eb,#1e40af)", latest: "Vol. 8 No. 2 (2025)", apc: 850 },
  { id: "med-health", title: "International Journal of Medical and Health Research", short: "IJMHR", issn: "2708-9516", category: "Medicine & Health", mode: "HYBRID", color: "linear-gradient(135deg,#0891b2,#0f766e)", latest: "Vol. 7 No. 2 (2025)", apc: 980 },
  { id: "business", title: "Journal of Business, Management & Economics", short: "JBME", issn: "2617-4611", category: "Business & Management", mode: "SUBSCRIPTION", color: "linear-gradient(135deg,#4f46e5,#1d4ed8)", latest: "Vol. 9 No. 1 (2025)", apc: 750 },
  { id: "env-sci", title: "Advances in Environmental Science & Sustainability", short: "AESS", issn: "2738-1141", category: "Environmental Science", mode: "APC", color: "linear-gradient(135deg,#16a34a,#047857)", latest: "Vol. 6 No. 1 (2025)", apc: 900 },
  { id: "comp-sci", title: "Scopusixteen Journal of Computer Science", short: "SJCS", issn: "2789-4412", category: "Computer Science", mode: "HYBRID", color: "linear-gradient(135deg,#7c3aed,#5b21b6)", latest: "Vol. 4 No. 1 (2025)", apc: 1100 },
  { id: "edu-research", title: "International Journal of Education Research", short: "IJER", issn: "2810-3302", category: "Education", mode: "HYBRID", color: "linear-gradient(135deg,#db2777,#9d174d)", latest: "Vol. 5 No. 2 (2025)", apc: 650 },
  { id: "law-policy", title: "Journal of Law, Policy & Society", short: "JLPS", issn: "2790-1121", category: "Law & Policy", mode: "SUBSCRIPTION", color: "linear-gradient(135deg,#0f766e,#115e59)", latest: "Vol. 3 No. 1 (2025)", apc: 700 },
  { id: "social-sci", title: "African Journal of Social Sciences", short: "AJSS", issn: "2788-9910", category: "Social Sciences", mode: "APC", color: "linear-gradient(135deg,#ea580c,#c2410c)", latest: "Vol. 6 No. 1 (2025)", apc: 600 }
];

SX.articles = [
  {
    id: "art-001",
    title: "Machine Learning Approaches for Predicting Protein Structures: A Review",
    authors: "A. Jana, R. K. Singh, P. Verma",
    journalId: "eng-applied",
    journalTitle: "Journal of Engineering and Applied Sciences",
    date: "May 20, 2025",
    doi: "10.5678/jeas.2025.0821",
    isOA: true,
    gradient: "linear-gradient(135deg,#3b82f6,#4f46e5)",
    abstract: "Recent advances in deep learning have transformed protein structure prediction. We review AlphaFold, RoseTTAFold and related methods, their accuracy, limitations, and implications for structural biology.",
    teaser: "Deep learning models now achieve near-experimental accuracy for many single-domain proteins.",
    fullText: `<h2>1. Introduction</h2>
<p>Protein structure determination has long been a bottleneck in molecular biology. Experimental methods such as X-ray crystallography and cryo-EM remain gold standards but are time-consuming and expensive.</p>
<p>Machine learning approaches, particularly deep neural networks trained on the Protein Data Bank, have dramatically accelerated prediction.</p>
<h2>2. Key Methods</h2>
<p><strong>AlphaFold2</strong> introduced an end-to-end architecture combining multiple sequence alignments, attention mechanisms and iterative refinement. <strong>RoseTTAFold</strong> and subsequent models further improved multi-chain and ligand-aware prediction.</p>
<h2>3. Limitations</h2>
<p>Multi-domain assembly, intrinsically disordered regions, and proteins with few homologues remain challenging. Experimental validation is still essential for critical applications.</p>
<h2>4. Conclusion</h2>
<p>ML-based structure prediction is production-ready for many use cases. Combined with experimental techniques it is reshaping structural biology workflows. (Open Access – APC route.)</p>`
  },
  {
    id: "art-002",
    title: "Impact of Climate Change on Vector-Borne Diseases: A Global Perspective",
    authors: "M. Ibrahim, L. K. Mensah, S. A. Adeyemi",
    journalId: "med-health",
    journalTitle: "International Journal of Medical and Health Research",
    date: "May 18, 2025",
    doi: "10.5678/ijmhr.2025.0719",
    isOA: false,
    gradient: "linear-gradient(135deg,#f43f5e,#db2777)",
    abstract: "Climate change alters the geographic range and seasonality of vector-borne diseases. We synthesise evidence for malaria, dengue, and tick-borne pathogens across continents.",
    teaser: "Rising temperatures expand habitats for mosquitoes and ticks. This article maps risk shifts and public-health implications.",
    fullText: `<h2>1. Background</h2>
<p>Vector-borne diseases account for a substantial share of the global infectious disease burden. Climate variables influence vector survival, biting rates and pathogen incubation periods.</p>
<h2>2. Evidence synthesis</h2>
<p>We review observational and modelling studies (2010–2024) for Anopheles- and Aedes-borne pathogens and Ixodes ticks. Clear northward and altitudinal shifts are documented in multiple regions.</p>
<h2>3. Adaptation options</h2>
<p>Enhanced surveillance, early-warning systems, and integrated vector management are evaluated as priority responses.</p>
<h2>4. Conclusion</h2>
<p>Without mitigation and adaptation, climate-sensitive vector-borne diseases are likely to expand in many regions. (Full text available to subscribers.)</p>`
  },
  {
    id: "art-003",
    title: "Financial Inclusion and Economic Growth in Developing Economies",
    authors: "T. Okafor, H. Bello",
    journalId: "business",
    journalTitle: "Journal of Business, Management & Economics",
    date: "May 15, 2025",
    doi: "10.5678/jbme.2025.0915",
    isOA: false,
    gradient: "linear-gradient(135deg,#f59e0b,#ea580c)",
    abstract: "Using panel data for 42 developing economies, we estimate the effect of financial inclusion on real GDP growth and discuss policy implications.",
    teaser: "Account ownership, digital payments, and credit access are linked to growth, with stronger effects where regulatory quality is high.",
    fullText: `<h2>1. Introduction</h2>
<p>Financial inclusion is a policy priority in many developing economies. This paper quantifies its contribution to growth.</p>
<h2>2. Data and methods</h2>
<p>Panel (2004–2022) from World Bank Findex and World Development Indicators. Fixed-effects and system-GMM estimators are employed.</p>
<h2>3. Results</h2>
<p>A 10-percentage-point increase in account ownership is associated with approximately 0.3–0.5 percentage points higher annual growth, conditional on institutional quality.</p>
<h2>4. Conclusion</h2>
<p>Policies that expand formal financial access can support growth, especially when complemented by sound regulation. (Full text available to subscribers.)</p>`
  },
  {
    id: "art-004",
    title: "Sustainable Urban Water Management in Sub-Saharan Africa",
    authors: "K. Ndlovu, J. Mensah",
    journalId: "env-sci",
    journalTitle: "Advances in Environmental Science & Sustainability",
    date: "May 12, 2025",
    doi: "10.5678/aess.2025.0612",
    isOA: true,
    gradient: "linear-gradient(135deg,#10b981,#059669)",
    abstract: "Rapid urbanisation strains water systems across Sub-Saharan Africa. We review nature-based solutions and decentralised treatment options that improve resilience.",
    teaser: "Nature-based and hybrid systems can reduce cost and improve climate resilience of urban water services.",
    fullText: `<h2>1. Context</h2>
<p>Cities in Sub-Saharan Africa face growing water stress driven by population growth, informal settlements and climate variability.</p>
<h2>2. Approaches</h2>
<p>We examine constructed wetlands, rainwater harvesting, and decentralised membrane systems through case studies from Ghana, Kenya and South Africa.</p>
<h2>3. Findings</h2>
<p>Hybrid grey–green infrastructure often outperforms purely centralised systems on cost and resilience metrics.</p>
<h2>4. Conclusion</h2>
<p>Policy and financing frameworks should prioritise modular, nature-based solutions. (Open Access.)</p>`
  },
  {
    id: "art-005",
    title: "Transformer Architectures for Low-Resource Language Processing",
    authors: "S. Adebayo, N. Chen",
    journalId: "comp-sci",
    journalTitle: "Scopusixteen Journal of Computer Science",
    date: "May 10, 2025",
    doi: "10.5678/sjcs.2025.0410",
    isOA: false,
    gradient: "linear-gradient(135deg,#8b5cf6,#6d28d9)",
    abstract: "We evaluate multilingual and monolingual transformer models on several African languages and propose data-efficient fine-tuning strategies.",
    teaser: "Careful pre-training and transfer learning can close much of the performance gap for low-resource languages.",
    fullText: `<h2>1. Introduction</h2>
<p>Most large language models are trained predominantly on high-resource languages. This paper focuses on practical approaches for African languages.</p>
<h2>2. Experiments</h2>
<p>We compare mBERT, XLM-R, and language-specific models on POS tagging, NER and machine translation tasks.</p>
<h2>3. Results</h2>
<p>Continued pre-training on modest monolingual corpora yields substantial gains. Adapter-based methods further reduce compute cost.</p>
<h2>4. Conclusion</h2>
<p>Targeted investment in data and efficient adaptation techniques can make modern NLP accessible for low-resource languages. (Subscriber access.)</p>`
  },
  {
    id: "art-006",
    title: "Digital Pedagogy and Learning Outcomes in Higher Education",
    authors: "R. Okonkwo, E. Thompson",
    journalId: "edu-research",
    journalTitle: "International Journal of Education Research",
    date: "May 8, 2025",
    doi: "10.5678/ijer.2025.0508",
    isOA: false,
    gradient: "linear-gradient(135deg,#ec4899,#be185d)",
    abstract: "A multi-institution study of blended learning models and their impact on student engagement and assessment performance.",
    teaser: "Well-designed blended courses improve engagement without sacrificing learning outcomes.",
    fullText: `<h2>1. Background</h2>
<p>The shift to digital and blended delivery accelerated after 2020. Evidence on long-term learning effects remains mixed.</p>
<h2>2. Methods</h2>
<p>We analyse data from 12 universities using mixed methods: learning analytics, surveys and focus groups.</p>
<h2>3. Findings</h2>
<p>Active learning designs and timely feedback are stronger predictors of outcomes than the sheer volume of online content.</p>
<h2>4. Conclusion</h2>
<p>Pedagogy, not platform, drives results. (Subscriber access.)</p>`
  },
  {
    id: "art-007",
    title: "Open Access Publishing Models in African Scholarly Communication",
    authors: "F. Adeyemi, C. Mwangi",
    journalId: "social-sci",
    journalTitle: "African Journal of Social Sciences",
    date: "May 5, 2025",
    doi: "10.5678/ajss.2025.0605",
    isOA: true,
    gradient: "linear-gradient(135deg,#f97316,#c2410c)",
    abstract: "We survey APC, diamond OA and subscription hybrids across African journals and discuss sustainability and equity implications.",
    teaser: "Diamond OA and institutional support are critical for equitable knowledge production.",
    fullText: `<h2>1. Landscape</h2>
<p>African scholarly publishing faces unique funding and visibility challenges. Multiple OA models coexist.</p>
<h2>2. Survey</h2>
<p>We map publishing models of 180 journals and interview editors and librarians.</p>
<h2>3. Discussion</h2>
<p>High APCs risk excluding researchers without grants. Diamond OA and consortial funding offer more equitable paths.</p>
<h2>4. Recommendations</h2>
<p>Funders and universities should prioritise support for non-APC open access. (Open Access.)</p>`
  }
];

SX.users = {
  "author@scopusixteen.com": { name: "Demo Author", role: "author", password: "demo1234" },
  "editor@scopusixteen.com": { name: "Demo Editor", role: "editor", password: "demo1234" },
  "reviewer@scopusixteen.com": { name: "Demo Reviewer", role: "reviewer", password: "demo1234" },
  "admin@scopusixteen.com": { name: "Demo Admin", role: "admin", password: "demo1234" }
};

SX.modeBadge = function (mode) {
  if (mode === "APC") return '<span class="badge badge-apc">APC</span>';
  if (mode === "HYBRID") return '<span class="badge badge-hybrid">HYBRID</span>';
  return '<span class="badge badge-sub">SUBSCRIPTION</span>';
};
