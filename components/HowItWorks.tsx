const steps = [
  ["01", "Understand", "We learn how your business operates, where repetitive work exists, and what problems actually matter."],
  ["02", "Design", "We map the workflow, define what the agent should handle, and establish where people stay in control."],
  ["03", "Build & Integrate", "We build the agent and connect it to the tools, information, and workflows it needs."],
  ["04", "Improve", "We test against real workflows, find weak points, and refine the system based on actual use."],
];

export function HowItWorks() {
  return <section className="section process" id="process"><div className="container"><div className="section-heading"><p className="section-number">02 / HOW IT WORKS</p><h2>From business problem<br />to useful system.</h2></div><div className="process-track">{steps.map(([n, title, body]) => <article className="process-step" key={n}><div className="step-marker"><span>{n}</span><i /></div><h3>{title}</h3><p>{body}</p></article>)}</div><p className="process-statement">You understand your business. <span>Codense handles the AI complexity.</span></p></div></section>;
}
