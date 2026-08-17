const projects = [
  { n: "01", title: "Production LLM Gateway", proof: "One governed interface across model providers", text: "OpenAI-compatible FastAPI edge with LiteLLM routing, streaming, Redis rate limits, sensitive-input redaction, virtual-key spend controls, and alias-only model policy.", tags: ["LiteLLM", "FastAPI", "Model routing"], repo: "production-api-wrapper" },
  { n: "02", title: "Token Cost Estimator", proof: "Spend controlled before inference", text: "Preflight estimates, endpoint-level accounting, budget reservations, and threshold alerts.", tags: ["FinOps", "Budgets", "Usage"], repo: "token-cost-estimator" },
  { n: "03", title: "Validated JSON Agent", proof: "Model output treated as untrusted", text: "Pydantic contracts, bounded repair retries, and complete parse-failure diagnostics.", tags: ["Pydantic", "Schemas", "Retries"], repo: "validated-json-agent" },
  { n: "04", title: "Cited RAG Bot", proof: "Every grounded claim carries evidence", text: "PDF Q&A with hybrid retrieval, reranking, and citations tied to source pages.", tags: ["RAG", "Hybrid search", "Citations"], repo: "cited-rag-bot" },
  { n: "05", title: "Human-in-the-Loop", proof: "Authority stays with the business", text: "Durable pause and resume, scoped approvals, idempotent actions, and immutable audit history.", tags: ["Workflows", "Approval", "Audit"], repo: "human-in-the-loop-workflow" },
  { n: "06", title: "Streaming Copilot UI", proof: "A responsive experience that degrades safely", text: "Real-time streaming, optimistic state, accessible controls, and complete-response fallback.", tags: ["React", "Streaming", "UX"], repo: "streaming-copilot-ui" },
  { n: "07", title: "Automated Eval Harness", proof: "Quality is a release gate", text: "Golden test cases, deterministic scoring, regression comparisons, and CI exit thresholds.", tags: ["Evals", "Golden set", "CI"], repo: "automated-eval-harness" },
  { n: "08", title: "Local Inference Server", proof: "Inference economics understood end to end", text: "vLLM deployment profiles, quantization, KV-cache planning, and capacity validation.", tags: ["vLLM", "GPU", "Quantization"], repo: "local-inference-server" },
  { n: "09", title: "Traced Deployment Pipeline", proof: "Failures explain themselves", text: "Dockerized service with OpenTelemetry traces, Prometheus alerts, cost metrics, and Grafana dashboards.", tags: ["OpenTelemetry", "Docker", "Grafana"], repo: "traced-deployment-pipeline" },
  { n: "10", title: "Security Guardrails", proof: "Defense in depth at every boundary", text: "Prompt-injection detection, bidirectional PII redaction, safe fingerprints, and monitor/block modes.", tags: ["Security", "PII", "ASGI"], repo: "security-guardrail-middleware" },
  { n: "11", title: "Public Architecture", proof: "Decisions are as reviewable as code", text: "System map, trust boundaries, ADRs, verification protocol, and a five-minute demo walkthrough.", tags: ["Architecture", "ADRs", "Benchmarks"], repo: "ai-production-architecture" },
  { n: "12", title: "ARIA AI-SRE Platform", proof: "Incidents move from signal to controlled recovery", text: "Open-source incident investigation with Kubernetes telemetry, RAG runbooks, policy checks, approval-gated self-healing, and recovery validation.", tags: ["AI-SRE", "Kubernetes", "Self-healing"], repo: "aria" },
  { n: "13", title: "Fire Drill", proof: "Agent-driven resilience with human authority", text: "Approval-gated AWS FIS agent for bounded EKS pod faults, verified cloud identity, CloudWatch stop conditions, and a durable audit trail.", tags: ["AWS FIS", "EKS", "Human approval"], repo: "fire-drill-chaos-engineering" },
  { n: "14", title: "Incident Investigation Copilot", proof: "Every hypothesis stays tied to evidence", text: "FastAPI investigation service that builds incident timelines, ranks evidence-backed hypotheses, recommends diagnostic checks, and exposes missing evidence.", tags: ["FastAPI", "Evidence", "Incident RCA"], repo: "incident-investigation-copilot" },
  { n: "15", title: "On-Call SRE Agent", proof: "Fast triage without autonomous production changes", text: "Read-only assistant that prioritizes alerts, retrieves relevant runbooks, assembles diagnostic checklists, and flags every mutating action for human approval.", tags: ["On-call", "Runbooks", "Safe triage"], repo: "on-call-sre-agent" },
  { n: "16", title: "Canadian Retail MLOps Platform", proof: "Features, training, and serving operate as one governed system", text: "Kinesis and Flink feature generation, Iceberg lineage, Airflow and Metaflow training, immutable ECR promotion, SageMaker serving, and multi-account AWS CDK.", tags: ["MLOps", "Apache Flink", "SageMaker"], repo: "canadian-retail-mlops-platform" },
];

const stages = ["Protect", "Validate", "Ground", "Authorize", "Observe", "Evaluate"];

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Sravan Kumar home"><span>SK</span> / AI SYSTEMS</a>
        <div className="navlinks"><a href="#work">Work</a><a href="#system">Approach</a><a href="https://github.com/KumarSravan77" target="_blank" rel="noreferrer">GitHub ↗</a></div>
      </nav>

      <section className="hero shell" id="top">
        <p className="eyebrow"><span className="status-dot" /> Available for AI engineering work</p>
        <h1>I build AI systems<br />that survive <em>production.</em></h1>
        <div className="hero-bottom">
          <p>Sixteen deployable projects covering reliability, cost, grounding, evaluation, inference, observability, security, AI-SRE, and MLOps—built as working evidence, not slideware.</p>
          <div className="hero-actions"><a className="button primary" href="#work">Explore the systems ↓</a><a className="button" href="https://github.com/KumarSravan77" target="_blank" rel="noreferrer">View GitHub ↗</a></div>
        </div>
        <div className="signal" aria-label="Portfolio statistics">
          <div><strong>16</strong><span>Production projects</span></div>
          <div><strong>10</strong><span>Control layers</span></div>
          <div><strong>01</strong><span>Coherent platform</span></div>
        </div>
      </section>

      <section className="system shell" id="system">
        <div className="section-head"><p className="kicker">// OPERATING MODEL</p><h2>Trust is an architecture.</h2></div>
        <p className="system-intro">Every model request crosses explicit controls before it can become a business action.</p>
        <div className="pipeline" role="list" aria-label="Production AI control sequence">
          {stages.map((stage, index) => <div role="listitem" className="stage" key={stage}><span>0{index + 1}</span>{stage}{index < stages.length - 1 && <b aria-hidden="true">→</b>}</div>)}
        </div>
      </section>

      <section className="work shell" id="work">
        <div className="section-head work-head"><div><p className="kicker">// SELECTED SYSTEMS</p><h2>Built to be inspected.</h2></div><p>Each repository includes runnable code, verification, documentation, and an explicit production concern.</p></div>
        <div className="grid">
          {projects.map((project) => (
            <article className="card" key={project.n}>
              <div className="card-top"><span>{project.n}</span><span className="proof">{project.proof}</span></div>
              <h3>{project.title}</h3><p>{project.text}</p>
              <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              <div className="card-links">
                <a href={`https://github.com/KumarSravan77/${project.repo}`} target="_blank" rel="noreferrer">Repository ↗</a>
                {project.live && <a className="live" href={project.live} target="_blank" rel="noreferrer"><i /> Live demo ↗</a>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="principles shell">
        <p className="kicker">// ENGINEERING PRINCIPLES</p>
        <div className="principle-list">
          <p><span>01</span>Treat every model output as untrusted data.</p>
          <p><span>02</span>Measure quality, cost, and failure modes before release.</p>
          <p><span>03</span>Keep human authority around consequential actions.</p>
          <p><span>04</span>Make the safe path the easiest path.</p>
        </div>
      </section>

      <footer className="shell">
        <div><p className="kicker">// LET’S BUILD</p><h2>Need AI that works<br />beyond the demo?</h2></div>
        <div className="footer-right"><p>Explore the code, architecture, and live experience—or start a conversation on GitHub.</p><a className="button primary" href="https://github.com/KumarSravan77" target="_blank" rel="noreferrer">KumarSravan77 on GitHub ↗</a></div>
        <p className="copyright">© 2026 Sravan Kumar <span>Designed for evidence, not hype.</span></p>
      </footer>
    </main>
  );
}
