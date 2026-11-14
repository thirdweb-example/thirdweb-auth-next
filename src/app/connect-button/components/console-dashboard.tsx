"use client";

import { useMemo, useState } from "react";
import { ConnectButton } from "thirdweb/react";
import { defineChain } from "thirdweb";
import { client } from "../../../lib/client";
import { generatePayload, isLoggedIn, login, logout } from "../actions/auth";

type ApiCategory = {
  name: string;
  count: string;
  description: string;
  accent: string;
};

const categories: ApiCategory[] = [
  { name: "Authentication", count: "12 endpoints", description: "Wallet auth, social login, passkeys and SIWE.", accent: "violet" },
  { name: "Wallets", count: "34 endpoints", description: "Create, manage and transact with user wallets.", accent: "blue" },
  { name: "Tokens", count: "28 endpoints", description: "Launch, mint and manage ERC20, ERC721 and ERC1155.", accent: "mint" },
  { name: "Gateway", count: "19 endpoints", description: "Real-time and historical onchain infrastructure.", accent: "amber" },
  { name: "Bridge", count: "8 endpoints", description: "Move assets across chains and wallets.", accent: "rose" },
  { name: "AI", count: "6 endpoints", description: "Build agents that understand live onchain data.", accent: "indigo" },
];

const activity = [
  ["Wallet authentication", "POST /v1/auth/complete", "2 min ago", "200"],
  ["Token balance lookup", "GET /v1/tokens/balances", "18 min ago", "200"],
  ["Bridge quote requested", "POST /v1/bridge/quote", "42 min ago", "200"],
];

export function ConsoleDashboard() {
  const [activeView, setActiveView] = useState("Overview");
  const [selectedCategory, setSelectedCategory] = useState("Authentication");
  const [copied, setCopied] = useState(false);

  const selected = useMemo(
    () => categories.find((category) => category.name === selectedCategory) ?? categories[0],
    [selectedCategory],
  );

  const copyExample = async () => {
    await navigator.clipboard?.writeText("curl https://api.thirdweb.com/v1/auth/initiate \\\n  -H 'x-client-id: YOUR_CLIENT_ID'");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="console-shell">
      <header className="topbar">
        <a className="brand" href="/" aria-label="thirdweb API home">
          <span className="brand-mark">t</span>
          <span>thirdweb <strong>API</strong></span>
        </a>
        <nav className="topnav" aria-label="Primary navigation">
          {["Overview", "API reference", "Activity"].map((item) => (
            <button key={item} className={activeView === item ? "nav-link active" : "nav-link"} onClick={() => setActiveView(item)}>{item}</button>
          ))}
        </nav>
        <div className="top-actions">
          <span className="version-pill">v1.22.13</span>
          <ConnectButton
            client={client}
            accountAbstraction={{ chain: defineChain(17000), sponsorGas: true }}
            auth={{
              isLoggedIn: async () => isLoggedIn(),
              doLogin: async (params) => { await login(params); },
              getLoginPayload: async ({ address }) => generatePayload({ address, chainId: 17000 }),
              doLogout: async () => { await logout(); },
            }}
            connectButton={{ label: "sign in" }}
          />
        </div>
      </header>

      <main className="workspace">
        <section className="hero">
          <div className="eyebrow"><span className="status-dot" /> API server operational</div>
          <h1>Build onchain,<br /><span>without the overhead.</span></h1>
          <p>One unified API for wallets, authentication, tokens, bridging and intelligent onchain apps.</p>
          <div className="hero-actions">
            <button className="primary-button" onClick={() => setActiveView("API reference")}>Explore API reference <span>→</span></button>
            <button className="secondary-button" onClick={copyExample}>{copied ? "Copied to clipboard" : "Copy quickstart"}</button>
          </div>
        </section>

        <section className="metrics" aria-label="API metrics">
          <div><span className="metric-label">REQUESTS TODAY</span><strong>24,891</strong><small className="positive">+18.4%</small></div>
          <div><span className="metric-label">SUCCESS RATE</span><strong>99.98%</strong><small className="positive">+0.02%</small></div>
          <div><span className="metric-label">AVG. LATENCY</span><strong>142ms</strong><small>— 8ms</small></div>
          <div><span className="metric-label">SUPPORTED CHAINS</span><strong>2,000+</strong><small>Across EVM & Solana</small></div>
        </section>

        <div className="content-grid">
          <section className="panel api-panel">
            <div className="panel-heading"><div><span className="section-kicker">EXPLORE THE PLATFORM</span><h2>Everything you need to ship</h2></div><button className="text-button" onClick={() => setActiveView("API reference")}>View all endpoints <span>↗</span></button></div>
            <div className="category-grid">
              {categories.map((category) => <button key={category.name} className={`category-card ${selectedCategory === category.name ? "selected" : ""}`} onClick={() => setSelectedCategory(category.name)}><span className={`category-icon ${category.accent}`}>{category.name.slice(0, 1)}</span><span className="category-copy"><strong>{category.name}</strong><small>{category.count}</small><em>{category.description}</em></span><span className="card-arrow">↗</span></button>)}
            </div>
          </section>

          <aside className="panel reference-panel">
            <div className="panel-heading"><div><span className="section-kicker">SELECTED MODULE</span><h2>{selected.name}</h2></div><span className="openapi-badge">OpenAPI 3.1</span></div>
            <p className="reference-description">{selected.description} Explore authenticated endpoints with your connected wallet.</p>
            <div className="endpoint-row"><span className="method post">POST</span><code>/v1/auth/initiate</code><span className="endpoint-status">200</span></div>
            <div className="endpoint-row"><span className="method post">POST</span><code>/v1/auth/complete</code><span className="endpoint-status">200</span></div>
            <button className="outline-button" onClick={() => setActiveView("API reference")}>Open module reference <span>→</span></button>
          </aside>
        </div>

        <section className="panel activity-panel">
          <div className="panel-heading"><div><span className="section-kicker">LIVE ACTIVITY</span><h2>Recent API requests</h2></div><button className="text-button" onClick={() => setActiveView("Activity")}>View activity <span>↗</span></button></div>
          <div className="activity-list">{activity.map(([label, endpoint, time, status]) => <div className="activity-row" key={endpoint}><span className="activity-mark">✓</span><span className="activity-name"><strong>{label}</strong><code>{endpoint}</code></span><time>{time}</time><span className="success-code">{status}</span></div>)}</div>
        </section>
      </main>
      <footer><span>thirdweb API <b>•</b> Built for developers</span><span>Docs <b>·</b> Support <b>·</b> Status <i className="footer-status" /> All systems operational</span></footer>
    </div>
  );
}
