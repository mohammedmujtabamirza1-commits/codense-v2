import { Brand } from "./Brand";

export function Footer() {
  return <footer><div className="container footer-inner"><a href="#home" aria-label="Back to home"><Brand compact /></a><a href="mailto:contact@codense.in">contact@codense.in</a><span>© {new Date().getFullYear()} Codense</span></div></footer>;
}
