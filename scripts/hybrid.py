"""BlueHatch hybrid platform pages. No external dependencies; prototype, not a live AI service."""
HOME = """
<section class="bh-hero">
  <div class="container bh-hero-grid">
    <div class="bh-hero-copy">
      <span class="bh-kicker"><i></i> THE SMARTER WAY TO RUN YOUR BUSINESS</span>
      <h1>Less busywork.<br><span>More brilliant</span> business.</h1>
      <p>Simple tools to create better marketing, make clearer decisions and get more done. Start with our hands-on workspace, explore free calculators, or find a ready-made digital resource.</p>
      <div class="bh-actions"><a class="btn btn-primary" href="/studio/">Try the marketing studio <span aria-hidden="true">↗</span></a><a class="btn btn-secondary" href="/free-tools/">Explore free tools <span aria-hidden="true">→</span></a></div>
      <div class="bh-trust"><span>✦ Made for small businesses</span><span>✓ No account needed for demos</span></div>
    </div>
    <div class="bh-window-wrap" aria-label="Illustration of the BlueHatch marketing workspace">
      <div class="bh-float bh-float-one">✦ Ideas, organised.</div>
      <div class="bh-window">
        <div class="bh-window-top"><div class="bh-dots"><i></i><i></i><i></i></div><span>BlueHatch / Marketing Studio</span><span class="bh-window-status">● Demo</span></div>
        <div class="bh-window-main">
          <div class="bh-window-side"><div class="bh-avatar">B</div><div class="bh-side-line long"></div><div class="bh-side-line"></div><div class="bh-side-line"></div><div class="bh-side-line short"></div></div>
          <div class="bh-window-content"><span class="bh-chip">YOUR WORKSPACE</span><h3>A week of content.<br>One simple workflow.</h3>
            <div class="bh-window-input"><span>Business</span><strong>Willow Beauty Studio</strong></div>
            <div class="bh-window-row"><div class="bh-window-input"><span>Goal</span><strong>More bookings</strong></div><div class="bh-window-input"><span>Tone</span><strong>Friendly</strong></div></div>
            <div class="bh-generate">✦ Create my content plan <span>→</span></div>
            <div class="bh-mini-results"><div><b>MON</b><span></span><span></span></div><div><b>WED</b><span></span><span></span></div><div><b>FRI</b><span></span><span></span></div></div>
          </div>
        </div>
      </div><div class="bh-float bh-float-two">✓ Plan ready to edit</div>
    </div>
  </div>
</section>
<section class="bh-category-bar"><div class="container bh-category-inner"><span>BUILD FOR WHAT MATTERS</span><b>Marketing</b><b>Productivity</b><b>Business planning</b><b>Digital resources</b></div></section>
<section class="section bh-section-soft"><div class="container">
  <div class="bh-heading"><div><span class="bh-kicker">WHAT YOU CAN DO HERE</span><h2>One place. Smarter ways to work.</h2></div><p>Our approach combines interactive software, genuinely useful free tools and high-quality digital products.</p></div>
  <div class="bh-card-grid">
    <article class="bh-feature-card"><div class="bh-feature-icon bh-icon-blue">✦</div><span class="bh-tag">INTERACTIVE DEMO</span><h3>Marketing Studio</h3><p>Turn a few business details into a structured, editable seven-day content plan. Try the guided prototype today.</p><a href="/studio/">Open the studio <span>↗</span></a></article>
    <article class="bh-feature-card"><div class="bh-feature-icon bh-icon-mint">▥</div><span class="bh-tag">FREE • WORKING NOW</span><h3>Business calculators</h3><p>Explore your costs, test a selling price and understand profit margins with a practical browser-based calculator.</p><a href="/free-tools/">Try free tools <span>↗</span></a></article>
    <article class="bh-feature-card"><div class="bh-feature-icon bh-icon-lilac">▤</div><span class="bh-tag">COMING SOON</span><h3>Digital resources</h3><p>Editable templates, planners and business toolkits designed for busy founders. Browse our upcoming collection.</p><a href="/shop/">Explore resources <span>↗</span></a></article>
  </div>
</div></section>
<section class="section"><div class="container bh-two-col"><div class="bh-text-block"><span class="bh-kicker">BUILT AROUND REAL WORK</span><h2>From a blank page<br>to your next move.</h2><p>General AI can do a lot. We're building focused workflows that remove the friction between having an idea and putting it to work.</p>
<ul class="bh-checklist"><li><span>✓</span> Set up your business details just once in your browser.</li><li><span>✓</span> Create an editable weekly marketing draft.</li><li><span>✓</span> Copy or download the result instantly.</li><li><span>✓</span> Move from planning to action with free business tools.</li></ul><div class="bh-actions"><a class="btn btn-primary" href="/studio/">Explore the workspace →</a></div></div>
<div class="bh-process"><div><span>01</span><strong>Tell us about your business</strong><small>Your services, audience, goal and tone.</small></div><div><span>02</span><strong>Get an organised starting point</strong><small>Our current demo uses reusable templates, not an AI API.</small></div><div><span>03</span><strong>Make it yours and take it further</strong><small>Edit, copy and download your work.</small></div></div></div></section>
<section class="section bh-section-soft"><div class="container"><div class="bh-heading"><div><span class="bh-kicker">BUILT FOR AMBITIOUS INDEPENDENTS</span><h2>Different businesses. Same big ambition.</h2></div><p>Start with examples for service businesses, beauty professionals and freelancers—then customise everything for your own brand.</p></div>
<div class="bh-audience-row"><span>✺ Beauty & wellness</span><span>◉ Service businesses</span><span>◌ Fitness & coaching</span><span>▣ Freelancers & founders</span></div></div></section>
<section class="section-sm"><div class="container"><div class="bh-dark-banner"><div><span class="bh-kicker">GET STARTED FOR FREE</span><h2>See what better business tools feel like.</h2><p>Try our interactive marketing demo or work out your next product price—no sign-up, no card details.</p></div><a href="/free-tools/" class="btn btn-light">Explore free tools →</a></div></div></section>
"""
TOOLS = """
<section class="bh-subhero"><div class="container"><span class="bh-kicker">AI TOOLS & BUSINESS WORKFLOWS</span><h1>Practical software.<br>Designed for your working day.</h1><p>Explore what's ready to try and what we're building next. Every tool is focused on a clear business task, not another long list of prompts.</p></div></section>
<section class="section bh-section-soft"><div class="container">
<div class="bh-tool-grid">
<article class="bh-tool-wide"><div><span class="bh-tag">TRY THE PROTOTYPE</span><h2>Marketing Studio</h2><p>Build a seven-day content plan using a guided form, ready-to-edit outputs and one-click downloads. The current preview uses local templates; live AI generation is on our roadmap.</p><a href="/studio/" class="btn btn-primary">Launch the studio →</a></div><div class="bh-tool-graphic"><div>MON <span>Content idea</span></div><div>WED <span>Useful tip</span></div><div>FRI <span>Offer spotlight</span></div></div></article>
<article class="bh-feature-card"><div class="bh-feature-icon bh-icon-mint">£</div><span class="bh-tag">LIVE • FREE</span><h3>Pricing & profit calculator</h3><p>Estimate your costs, test pricing and see how your margin changes.</p><a href="/free-tools/">Open calculator ↗</a></article>
<article class="bh-feature-card"><div class="bh-feature-icon bh-icon-lilac">▤</div><span class="bh-tag">ON THE ROADMAP</span><h3>AI Business Plan Builder</h3><p>We're exploring a guided planning workspace with editable sections, exports and business-specific suggestions.</p><span class="bh-muted-link">In development</span></article>
<article class="bh-feature-card"><div class="bh-feature-icon bh-icon-blue">◎</div><span class="bh-tag">ON THE ROADMAP</span><h3>Customer Message Assistant</h3><p>Draft professional customer replies, follow-ups and service reminders in a consistent tone.</p><span class="bh-muted-link">In development</span></article>
</div></div></section>
<section class="section-sm"><div class="container bh-info-panel"><strong>How is this different from ChatGPT?</strong><p>BlueHatch is designed around a task—inputs, workflow, reusable outputs and export. We're still developing the AI-powered parts. The current demo is an honest preview, not a connected language model.</p></div></section>
"""
STUDIO = """
<section class="bh-subhero"><div class="container"><span class="bh-kicker">BLUEHATCH MARKETING STUDIO</span><h1>Make the next seven days<br><span>easier to market.</span></h1><p>Tell us about your business and get an editable content plan. Copy individual ideas or download the complete draft to work on later.</p><div class="bh-demo-disclosure"><strong>Prototype mode:</strong> This version uses guided templates in your browser. It is <strong>not connected to a live AI model</strong> and does not publish to social media.</div></div></section>
<section class="section bh-section-soft"><div class="container bh-studio-layout">
<div class="bh-studio-form-wrap"><div class="bh-studio-heading"><span class="bh-step-dot">01</span><div><h2>Tell us a little about your business</h2><p>No account needed. Information stays in your browser.</p></div></div>
<form data-studio-form class="bh-studio-form">
<div class="field"><label for="business-name">Business name</label><input id="business-name" name="business" maxlength="80" required placeholder="e.g. Willow Beauty Studio"></div>
<div class="field"><label for="business-type">What kind of business?</label><select id="business-type" name="industry"><option value="beauty">Beauty & wellness</option><option value="cleaning">Cleaning & home services</option><option value="fitness">Fitness & coaching</option><option value="retail">Retail & online shop</option><option value="other">Another small business</option></select></div>
<div class="field"><label for="business-service">Main service or product</label><input id="business-service" name="service" maxlength="100" required placeholder="e.g. Brow styling and facials"></div>
<div class="field"><label for="business-audience">Who do you serve?</label><input id="business-audience" name="audience" maxlength="100" required placeholder="e.g. Busy local professionals"></div>
<div class="bh-form-duo"><div class="field"><label for="business-goal">Main goal</label><select name="goal" id="business-goal"><option value="bookings">More enquiries & bookings</option><option value="awareness">Build awareness</option><option value="loyalty">Encourage repeat customers</option><option value="launch">Promote something new</option></select></div>
<div class="field"><label for="business-tone">Brand voice</label><select name="tone" id="business-tone"><option value="friendly">Warm & friendly</option><option value="confident">Confident & professional</option><option value="playful">Light & playful</option></select></div></div>
<div class="field"><label for="business-platform">Primary channel</label><select id="business-platform" name="platform"><option>Instagram</option><option>Facebook</option><option>LinkedIn</option></select></div>
<button class="btn btn-primary btn-full" type="submit">✦ Create my 7-day content plan <span aria-hidden="true">→</span></button>
<p class="bh-form-note">For planning and inspiration. Check all claims, offers and details before publishing.</p></form></div>
<div class="bh-studio-preview"><div class="bh-preview-top"><div><span class="bh-step-dot light">02</span><h2>Your content plan</h2></div><span class="bh-tag">EDITABLE OUTPUT</span></div>
<div class="bh-empty-state" data-studio-empty><div class="bh-empty-icon">✧</div><h3>Great ideas start here.</h3><p>Complete the form and we'll turn your details into a simple seven-day plan.</p><div class="bh-preview-lines"><span></span><span></span><span></span><span></span></div></div>
<div class="bh-result hide" data-studio-result><div class="bh-result-label" data-studio-summary></div><div class="bh-output-actions"><button type="button" class="bh-mini-btn" data-studio-copy>Copy all</button><button type="button" class="bh-mini-btn" data-studio-download>Download .txt</button><button type="button" class="bh-mini-btn" data-studio-csv>Download .csv</button></div><div class="bh-output-cards" data-studio-cards aria-live="polite"></div><p class="bh-form-note" data-studio-notice role="status"></p></div>
</div></div></section>
<section class="section-sm"><div class="container bh-info-panel"><strong>What's next for this studio?</strong><p>We're working toward secure, real AI generation, optional saved projects and more industry-specific workflows. Those features are <strong>not available yet</strong>. The guided preview and downloads above are usable today.</p><a class="link-arrow" href="/pricing/">See our plans →</a></div></section>
"""
FREE_TOOLS = """
<section class="bh-subhero"><div class="container"><span class="bh-kicker">FREE BUSINESS TOOLS</span><h1>Make the numbers<br><span>make sense.</span></h1><p>A simple pricing calculator for small business owners. Find your estimated cost, explore a selling price and see what profit margin that could leave you.</p></div></section>
<section class="section bh-section-soft"><div class="container bh-calc-layout">
<div class="bh-studio-form-wrap"><span class="bh-tag">PRICING CALCULATOR</span><h2>What's the right starting price?</h2><p class="bh-calc-intro">Enter your costs below. Results update as you type.</p>
<form class="bh-studio-form" data-pricing-form>
<div class="field"><label for="calc-materials">Materials / direct costs per sale (£)</label><input type="number" id="calc-materials" name="materials" min="0" max="10000000" step=".01" value="12" required></div>
<div class="bh-form-duo"><div class="field"><label for="calc-hours">Hours spent per sale</label><input type="number" id="calc-hours" name="hours" min="0" max="10000" step=".25" value="1.5" required></div>
<div class="field"><label for="calc-rate">Your hourly labour rate (£)</label><input type="number" id="calc-rate" name="rate" min="0" max="100000" step=".01" value="18" required></div></div>
<div class="field"><label for="calc-overheads">Other costs per sale (£)</label><input type="number" id="calc-overheads" name="overheads" min="0" max="10000000" step=".01" value="5" required></div>
<div class="field"><label for="calc-margin">Target profit margin (%) <span data-margin-label>30%</span></label><input type="range" id="calc-margin" name="margin" min="5" max="80" value="30" step="1"></div>
</form><p class="bh-form-note">Indicative pricing only. Consider VAT, fees, demand, returns and any other expenses separately.</p></div>
<div class="bh-calc-results"><span class="bh-kicker">YOUR ESTIMATED RESULTS</span><div class="bh-price-large"><small>Suggested selling price</small><strong data-calc-price>£0.00</strong></div>
<div class="bh-stat-grid"><div><small>Estimated cost per sale</small><strong data-calc-cost>£0.00</strong></div><div><small>Gross profit per sale</small><strong data-calc-profit>£0.00</strong></div><div><small>Target profit margin</small><strong data-calc-margin>30%</strong></div><div><small>Markup on cost</small><strong data-calc-markup>0%</strong></div></div>
<div class="bh-result-note"><strong>How this works</strong><p>Your estimated price is total cost divided by (1 − target margin). This calculator does not determine market demand or guarantee profitability.</p></div>
</div></div></section>
<section class="section-sm"><div class="container bh-dark-banner"><div><span class="bh-kicker">THERE'S MORE</span><h2>Plan the marketing behind your price.</h2><p>Try our free guided Marketing Studio preview and download a seven-day content plan.</p></div><a href="/studio/" class="btn btn-light">Open studio →</a></div></div></section>
"""
PRICING = """
<section class="bh-subhero"><div class="container"><span class="bh-kicker">SIMPLE PRICING, NO SURPRISES</span><h1>Start free.<br><span>Grow when you're ready.</span></h1><p>Explore the free tools available today and the subscription plans we're considering for a future AI-powered platform.</p></div></section>
<section class="section bh-section-soft"><div class="container"><div class="bh-pricing-grid">
<article class="bh-price-card"><span class="bh-tag">AVAILABLE NOW</span><h2>Explore</h2><div class="bh-plan-price">£0 <small>/ free</small></div><p>Try our guided marketing prototype and business calculator.</p><ul><li>✓ Marketing Studio template demo</li><li>✓ Seven-day downloadable plan</li><li>✓ Pricing & profit calculator</li><li>✓ No account or card needed</li></ul><a href="/studio/" class="btn btn-secondary btn-full">Try it free →</a></article>
<article class="bh-price-card featured"><span class="bh-tag">CONCEPT • NOT FOR SALE</span><h2>Starter</h2><div class="bh-plan-price">£15 <small>/ month proposed</small></div><p>A future plan for independents who want more tailored AI-powered workflows.</p><ul><li>✓ Planned live AI generation</li><li>✓ Planned reusable brand profile</li><li>✓ Planned content exports</li><li>✓ Planned saved projects</li></ul><span class="btn btn-disabled btn-full" aria-disabled="true">Not available yet</span></article>
<article class="bh-price-card"><span class="bh-tag">CONCEPT • NOT FOR SALE</span><h2>Growth</h2><div class="bh-plan-price">£29 <small>/ month proposed</small></div><p>A potential next step for businesses managing frequent campaigns.</p><ul><li>✓ Everything in proposed Starter</li><li>✓ Planned advanced campaigns</li><li>✓ Planned additional workflows</li><li>✓ Planned higher usage limits</li></ul><span class="btn btn-disabled btn-full" aria-disabled="true">Not available yet</span></article>
</div><div class="bh-pricing-disclaimer">These are <strong>early planning prices</strong>, not active subscriptions or an offer to purchase. No payment details are collected. Final prices and features may change after customer research.</div></div></section>
<section class="section-sm"><div class="container bh-info-panel"><strong>Prefer downloadable resources?</strong><p>We're also developing one-off digital templates and business toolkits. They'll be listed separately when ready for sale.</p><a class="link-arrow" href="/shop/">Browse digital resources →</a></div></section>
"""
def render(page):
    """Called after the original pages are generated; replaces home and adds hybrid pages."""
    page("Smarter business tools, AI workflows & digital resources",
         "Practical business tools for founders: try the Marketing Studio prototype, free calculators and upcoming digital resources.",
         HOME, path="/")
    page("AI tools and business workflows",
         "Explore BlueHatch Marketing Studio, free tools and our roadmap for practical AI business software.",
         TOOLS, active="tools", path="/ai-tools/")
    page("Marketing Studio - guided business content planner",
         "Create a free editable seven-day social media content plan for your small business. Template-powered preview, no account required.",
         STUDIO, active="tools", path="/studio/")
    page("Free pricing and profit calculator",
         "Calculate estimated selling prices, costs and target profit margins with our free browser-based business tool.",
         FREE_TOOLS, active="free", path="/free-tools/")
    page("Plans and pricing",
         "See BlueHatch Digital's free business tools and transparent preview of proposed future AI subscriptions.",
         PRICING, active="pricing", path="/pricing/")
