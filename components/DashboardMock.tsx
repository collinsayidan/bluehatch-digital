import {BarChart3, Grid2X2, Layers3, Settings2, ShieldCheck, Sparkles} from "lucide-react";
export function DashboardMock(){
  return <div className="mock-stage">
    <div className="hero-stars" aria-hidden="true"><Sparkles size={22}/></div>
    <div className="dashboard-mock" aria-label="Illustrative BlueHatch analytics workspace showing sales trend and insights">
      <div className="mock-toolbar"><span className="mock-toolbar-left"><i/><i/><i/><strong style={{marginLeft:8}}>BlueHatch / workspace</strong></span><span>DEMO DATA</span></div>
      <div className="mock-main">
        <aside className="mock-sidebar" aria-hidden="true"><Grid2X2 size={16}/><BarChart3 size={15}/><Layers3 size={15}/><Settings2 size={15}/></aside>
        <div className="mock-body">
          <div className="mock-topline"><span className="mock-eyebrow">YOUR BUSINESS, AT A GLANCE</span><span className="mock-date">Last 6 months ▾</span></div>
          <h3>Business overview</h3>
          <div className="mock-metrics">
            <div className="mock-metric"><span>Total revenue</span><strong>£84,250</strong><small>↗ 12.8% vs. last period</small></div>
            <div className="mock-metric"><span>Orders</span><strong>1,248</strong><small>↗ 8.2% vs. last period</small></div>
            <div className="mock-metric"><span>Avg. order value</span><strong>£67.51</strong><small>↗ 4.1% vs. last period</small></div>
          </div>
          <div className="mock-bottom"><div className="mock-chart"><div className="mock-card-label">Revenue trend <span>Illustrative</span></div>
            <svg viewBox="0 0 300 128" role="img" aria-label="Illustrative upward trend line chart">
              <defs><linearGradient id="mockFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#3a9a88" stopOpacity=".20"/><stop offset="1" stopColor="#3a9a88" stopOpacity="0"/></linearGradient></defs>
              <path d="M0 106H300 M0 70H300 M0 34H300" stroke="#e9eef3" strokeWidth="1"/>
              <path d="M2 106L39 88L75 94L111 62L147 70L184 50L220 60L257 35L298 14V114H2Z" fill="url(#mockFill)"/>
              <path d="M2 106L39 88L75 94L111 62L147 70L184 50L220 60L257 35L298 14" fill="none" stroke="#258c80" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="298" cy="14" r="5" fill="#258c80" stroke="white" strokeWidth="2"/>
              <text x="3" y="126" fill="#96a2af" fontSize="8">JAN</text><text x="120" y="126" fill="#96a2af" fontSize="8">MAR</text><text x="253" y="126" fill="#96a2af" fontSize="8">JUN</text>
            </svg>
          </div><div className="mock-insights"><div className="mock-card-label"><span> </span>Key observations</div>
            <div className="insight-row"><i>↗</i><p><b>Revenue is trending up.</b><br/>Your recent period is stronger.</p></div>
            <div className="insight-row"><i>✓</i><p><b>Orders are growing.</b><br/>Keep tracking repeat sales.</p></div>
            <div className="insight-row"><i>✦</i><p><b>Know what changed.</b><br/>Explore the drivers.</p></div>
          </div></div>
        </div>
      </div>
    </div>
    <div className="floating-stamp"><ShieldCheck size={18}/><span>Made for real business decisions</span></div>
  </div>;
}
