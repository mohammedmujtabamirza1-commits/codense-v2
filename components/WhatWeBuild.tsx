import { ArrowIcon, CheckIcon } from "./Icons";

const services = [
  {
    number: "01", title: "Customer Support Agents",
    body: "Agents that handle repetitive customer conversations, answer from your business information, and know when to bring in a person.",
    tags: ["FAQs", "Order information", "Human escalation"], kind: "support",
  },
  {
    number: "02", title: "Sales Agents",
    body: "Agents that engage incoming leads, ask useful questions, identify intent, and hand qualified opportunities to your sales process.",
    tags: ["Lead qualification", "Conversation summaries", "Routing"], kind: "sales",
  },
  {
    number: "03", title: "Operations Agents",
    body: "Agents that help internal teams find information, surface priorities, and move repetitive work through connected systems.",
    tags: ["Task routing", "Issue detection", "Workflow support"], kind: "operations",
  },
];

function SupportVisual() {
  return <div className="workflow-card support-ui"><div className="chat chat--customer"><span>Customer</span>Can I change my delivery address?</div><div className="thinking"><i /><i /><i /><span>Checking order policy</span></div><div className="chat chat--agent"><span>Codense agent</span>Yes — I can help with that.<b><CheckIcon /> Answered from business info</b></div></div>;
}

function SalesVisual() {
  return <div className="workflow-card sales-ui"><div className="mini-label"><span>Incoming lead</span><b>Qualified</b></div><div className="score"><strong>87</strong><span>/ 100</span><div><i style={{ width: "87%" }} /></div></div><div className="ready"><span><CheckIcon /> Ready for sales</span><ArrowIcon /></div></div>;
}

function OperationsVisual() {
  return <div className="workflow-card operations-ui"><div className="mini-label"><span>Operations overview</span><b>Live view</b></div>{[["3", "Urgent tasks", "Needs attention"], ["2", "Inventory issues", "Review"], ["1", "Approval needed", "Pending"]].map(([n, label, state]) => <div className="ops-row" key={label}><strong>{n}</strong><span>{label}<small>{state}</small></span><ArrowIcon /></div>)}</div>;
}

export function WhatWeBuild() {
  return (
    <section className="section services" id="services">
      <div className="container services-layout">
        <div className="section-intro sticky-intro"><p className="section-number">01 / WHAT WE BUILD</p><h2>AI agents designed around the work your business already does.</h2><p>Clear, focused systems that help real work move forward.</p></div>
        <div className="service-list">
          {services.map((service) => <article className="service" key={service.number}>
            <div className="service-copy"><span className="service-number">{service.number}</span><h3>{service.title}</h3><p>{service.body}</p><ul>{service.tags.map(tag => <li key={tag}>{tag}</li>)}</ul></div>
            <div className="service-visual">{service.kind === "support" ? <SupportVisual /> : service.kind === "sales" ? <SalesVisual /> : <OperationsVisual />}</div>
          </article>)}
        </div>
      </div>
    </section>
  );
}
