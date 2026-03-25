const BANNER = `░█▀▀░█▀█░█▀█░█▀█░█▀▀░█▀▀░▀█▀░░░█░█░▀█▀░▀▀█░█▀█░█▀▄░█▀▄
░█░░░█░█░█░█░█░█░█▀▀░█░░░░█░░░░█▄█░░█░░▄▀░░█▀█░█▀▄░█░█
░▀▀▀░▀▀▀░▀░▀░▀░▀░▀▀▀░▀▀▀░░▀░░░░▀░▀░▀▀▀░▀▀▀░▀░▀░▀░▀░▀▀░`;

const SCENARIOS = {
  discover: [
    { type: 'prompt', text: '$ ', delay: 300 },
    { type: 'command', text: '/connect-discover', delay: 600 },
    { type: 'banner', text: BANNER, delay: 200, instant: true },
    { type: 'dim', text: '/connect-discover | Use /connect-help to see all commands', delay: 400 },
    { type: 'output', text: '', delay: 200 },
    { type: 'question', text: 'What kind of platform are you building?', delay: 300 },
    { type: 'output', text: '', delay: 100 },
    { type: 'option', text: '  1. Marketplace (buyers + sellers)', delay: 80 },
    { type: 'option', text: '  2. SaaS platform with payments', delay: 80 },
    { type: 'option', text: '  3. On-demand services (rides, delivery)', delay: 80 },
    { type: 'option', text: '  4. Other', delay: 80 },
    { type: 'output', text: '', delay: 800 },
    { type: 'input', text: '> 1', delay: 600 },
    { type: 'output', text: '', delay: 400 },
    { type: 'output', text: 'Analyzing marketplace requirements...', delay: 800 },
    { type: 'output', text: '', delay: 200 },
    { type: 'question', text: 'How should sellers access their Stripe dashboard?', delay: 300 },
    { type: 'output', text: '', delay: 100 },
    { type: 'option', text: '  1. Express dashboard (lightweight, Stripe-hosted)', delay: 80 },
    { type: 'option', text: '  2. Full Stripe dashboard (independent accounts)', delay: 80 },
    { type: 'option', text: '  3. No dashboard (fully embedded in your app)', delay: 80 },
    { type: 'output', text: '', delay: 600 },
    { type: 'input', text: '> 1', delay: 500 },
    { type: 'output', text: '', delay: 400 },
    { type: 'success', text: 'Recommendation:', delay: 200 },
    { type: 'success', text: '  Account type:    Express (Stripe-hosted dashboard)', delay: 150 },
    { type: 'success', text: '  Charge pattern:  Destination charges', delay: 150 },
    { type: 'success', text: '  Platform fee:    15% (configurable)', delay: 150 },
    { type: 'success', text: '  Onboarding:      Stripe-hosted', delay: 150 },
    { type: 'output', text: '', delay: 200 },
    { type: 'dim', text: 'Saved to .connect-wizard-config.json', delay: 300 },
    { type: 'dim', text: 'Next: run /connect-integrate to build it', delay: 200 },
  ],

  integrate: [
    { type: 'prompt', text: '$ ', delay: 300 },
    { type: 'command', text: '/connect-integrate', delay: 600 },
    { type: 'banner', text: BANNER, delay: 200, instant: true },
    { type: 'dim', text: '/connect-integrate | Use /connect-help to see all commands', delay: 400 },
    { type: 'output', text: '', delay: 200 },
    { type: 'output', text: 'Detecting project stack...', delay: 800 },
    { type: 'success', text: '  Found: React 18 + Vite 5 + React Router v6', delay: 300 },
    { type: 'output', text: '', delay: 300 },
    { type: 'output', text: 'Reading config: Express + destination charges + 15%', delay: 400 },
    { type: 'output', text: '', delay: 300 },
    { type: 'heading', text: 'Building backend...', delay: 200 },
    { type: 'dim', text: '  + server/index.js                    Express server', delay: 150 },
    { type: 'dim', text: '  + server/routes/accounts.js          Account creation + onboarding', delay: 150 },
    { type: 'dim', text: '  + server/routes/payments.js          PaymentIntents + fee splitting', delay: 150 },
    { type: 'dim', text: '  + server/routes/webhooks.js          Event handling', delay: 150 },
    { type: 'output', text: '', delay: 300 },
    { type: 'heading', text: 'Building frontend...', delay: 200 },
    { type: 'dim', text: '  + src/context/StripeContext.jsx       Elements provider', delay: 150 },
    { type: 'dim', text: '  + src/components/CheckoutForm.jsx     Payment form', delay: 150 },
    { type: 'dim', text: '  + src/components/ConnectOnboarding.jsx Seller onboarding', delay: 150 },
    { type: 'output', text: '', delay: 300 },
    { type: 'heading', text: 'Wiring webhooks...', delay: 200 },
    { type: 'dim', text: '  + account.updated, payment_intent.succeeded', delay: 150 },
    { type: 'dim', text: '  + charge.refunded, payout.paid', delay: 150 },
    { type: 'output', text: '', delay: 400 },
    { type: 'success', text: 'Done! Your app has Stripe Connect.', delay: 200 },
    { type: 'dim', text: 'Run npm run dev:full to start (frontend + backend)', delay: 200 },
  ],

  status: [
    { type: 'prompt', text: '$ ', delay: 300 },
    { type: 'command', text: '/connect-status', delay: 600 },
    { type: 'banner', text: BANNER, delay: 200, instant: true },
    { type: 'dim', text: '/connect-status | Use /connect-help to see all commands', delay: 400 },
    { type: 'output', text: '', delay: 200 },
    { type: 'table-border', text: '+--------------------------+----------------------------------------------+', delay: 100, instant: true },
    { type: 'heading', text: '| ITEM                     | STATUS                                       |', delay: 100, instant: true },
    { type: 'table-border', text: '+-- Your Stripe account -----------------------------------------------+', delay: 100, instant: true },
    { type: 'output', text: '| Authenticated            | \x1b[32m●\x1b[0m sk_test_4eC3...dN3p                          |', delay: 200, instant: true },
    { type: 'output', text: '| API keys                 | \x1b[32m●\x1b[0m Loaded from .env · test mode                  |', delay: 200, instant: true },
    { type: 'output', text: '| Connect enabled          | \x1b[32m●\x1b[0m Yes                                          |', delay: 200, instant: true },
    { type: 'table-border', text: "+-- Your app's code ----------------------------------------------------+", delay: 100, instant: true },
    { type: 'output', text: '| Business model           | \x1b[32m●\x1b[0m Express · destination · 15%                  |', delay: 200, instant: true },
    { type: 'output', text: '| Integration              | \x1b[32m●\x1b[0m Generated (3 routes + 2 components)          |', delay: 200, instant: true },
    { type: 'table-border', text: '+-- Your app works -----------------------------------------------------+', delay: 100, instant: true },
    { type: 'output', text: '| Test connected account   | \x1b[32m●\x1b[0m Created · acct_1NqBn9...R4pK                 |', delay: 200, instant: true },
    { type: 'warn', text:   '| Test payment             | \x1b[31m○\x1b[0m Not run — run /connect-test                  |', delay: 200, instant: true },
    { type: 'table-border', text: '+--------------------------+----------------------------------------------+', delay: 100, instant: true },
    { type: 'output', text: '', delay: 100 },
    { type: 'success', text: '  Progress [████████████████░░░░] 80% · ~5 min remaining', delay: 300, instant: true },
    { type: 'heading', text: '  Next: Run /connect-test to make a test payment', delay: 200, instant: true },
  ],
};

// Replace ANSI escape codes with styled spans for HTML rendering
function ansiToHtml(text) {
  return text
    .replace(/\x1b\[32m/g, '<span class="t-success">')
    .replace(/\x1b\[31m/g, '<span class="t-warn">')
    .replace(/\x1b\[0m/g, '</span>');
}

export class Terminal {
  constructor(outputEl, statusEl) {
    this.outputEl = outputEl;
    this.statusEl = statusEl;
    this.isPlaying = false;
    this.lineIndex = 0;
    this.charIndex = 0;
    this.currentScenario = null;
    this.timeouts = [];
    this.autoCycleTimer = null;
    this.userInteracted = false;
    this.onScenarioComplete = null;
  }

  play(scenarioId) {
    this.stop();
    this.clear();
    this.currentScenario = scenarioId;
    this.isPlaying = true;
    this.lineIndex = 0;
    this.statusEl.textContent = `playing ${scenarioId}...`;
    this._playNextLine();
  }

  stop() {
    this.isPlaying = false;
    this.timeouts.forEach(t => clearTimeout(t));
    this.timeouts = [];
  }

  replay() {
    if (this.currentScenario) {
      this.play(this.currentScenario);
    }
  }

  clear() {
    this.outputEl.innerHTML = '';
  }

  _playNextLine() {
    if (!this.isPlaying) return;

    const scenario = SCENARIOS[this.currentScenario];
    if (!scenario || this.lineIndex >= scenario.length) {
      this.isPlaying = false;
      this.statusEl.textContent = 'done';
      this._addCursor();
      if (this.onScenarioComplete) {
        this.onScenarioComplete(this.currentScenario);
      }
      return;
    }

    const line = scenario[this.lineIndex];
    const delay = line.delay || 100;

    const tid = setTimeout(() => {
      if (!this.isPlaying) return;

      if (line.instant || line.type === 'banner') {
        this._appendLine(line);
        this.lineIndex++;
        this._playNextLine();
      } else if (line.type === 'prompt') {
        // Prompt: render instantly, then next line is the command to type
        this._appendLineStart(line);
        this.lineIndex++;
        this._playNextLine();
      } else if (line.type === 'command' || line.type === 'input') {
        this._typewriterLine(line, () => {
          this.lineIndex++;
          this._playNextLine();
        });
      } else {
        this._appendLine(line);
        this.lineIndex++;
        this._playNextLine();
      }
    }, delay);

    this.timeouts.push(tid);
  }

  _typewriterLine(line, callback) {
    const span = document.createElement('span');
    span.className = `t-${line.type}`;
    // Append to the last line element or output
    const lastLine = this.outputEl.lastElementChild;
    if (lastLine && !lastLine.dataset.complete) {
      lastLine.appendChild(span);
    } else {
      const div = document.createElement('div');
      div.appendChild(span);
      this.outputEl.appendChild(div);
    }

    let i = 0;
    const chars = line.text;

    const typeNext = () => {
      if (!this.isPlaying || i >= chars.length) {
        if (lastLine) lastLine.dataset.complete = 'true';
        const lineDiv = span.closest('div');
        if (lineDiv) lineDiv.dataset.complete = 'true';
        callback();
        return;
      }
      span.textContent += chars[i];
      i++;
      const tid = setTimeout(typeNext, 30 + Math.random() * 20);
      this.timeouts.push(tid);
    };

    typeNext();
  }

  _appendLine(line) {
    const div = document.createElement('div');
    div.dataset.complete = 'true';

    if (line.type === 'banner') {
      div.className = 't-banner';
      div.textContent = line.text;
    } else {
      const span = document.createElement('span');
      span.className = `t-${line.type}`;
      if (line.text.includes('\x1b[')) {
        span.innerHTML = ansiToHtml(line.text);
      } else {
        span.textContent = line.text;
      }
      div.appendChild(span);
    }

    this.outputEl.appendChild(div);
    this._scrollToBottom();
  }

  _appendLineStart(line) {
    const div = document.createElement('div');
    const span = document.createElement('span');
    span.className = `t-${line.type}`;
    span.textContent = line.text;
    div.appendChild(span);
    this.outputEl.appendChild(div);
  }

  _addCursor() {
    const cursor = document.createElement('div');
    cursor.style.display = 'flex';
    cursor.style.alignItems = 'center';
    cursor.style.gap = '4px';
    cursor.innerHTML = '<span class="t-prompt">$ </span><span class="terminal__cursor"></span>';
    this.outputEl.appendChild(cursor);
    this._scrollToBottom();
  }

  _scrollToBottom() {
    const body = this.outputEl.closest('.terminal__body');
    if (body) {
      body.scrollTop = body.scrollHeight;
    }
  }

  // Auto-cycle through scenarios
  startAutoCycle(tabEls) {
    const scenarioIds = Object.keys(SCENARIOS);
    let currentIdx = 0;

    const playNext = () => {
      if (this.userInteracted) return;
      currentIdx = (currentIdx) % scenarioIds.length;
      const id = scenarioIds[currentIdx];

      // Activate tab
      tabEls.forEach(t => t.classList.remove('terminal__tab--active'));
      const activeTab = [...tabEls].find(t => t.dataset.scenario === id);
      if (activeTab) activeTab.classList.add('terminal__tab--active');

      this.play(id);
      currentIdx++;
    };

    this.onScenarioComplete = () => {
      if (this.userInteracted) return;
      this.autoCycleTimer = setTimeout(playNext, 3000);
    };

    // Start first scenario after a short delay
    setTimeout(playNext, 1500);
  }

  stopAutoCycle() {
    this.userInteracted = true;
    if (this.autoCycleTimer) {
      clearTimeout(this.autoCycleTimer);
    }
  }
}
