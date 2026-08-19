import { TallyContactForm } from "./TallyContactForm";

export function Contact() {
  return <section className="section contact" id="contact"><div className="container contact-grid"><div className="contact-copy"><p className="section-number">04 / CONTACT</p><h2>Let&apos;s talk about<br /><span>your business.</span></h2><p>Tell me what&apos;s slowing your business down, where repetitive work is piling up, or what you&apos;d like to automate. I&apos;ll look at the problem and see where an AI agent could actually help.</p><div className="email-link"><small>Prefer email?</small><a href="mailto:contact@codense.in">contact@codense.in</a></div></div><TallyContactForm /></div></section>;
}
