# Connect Wizard Website

A showcase website for Connect Wizard featuring an interactive terminal demo.

## Installing Connect Wizard

### Option 1: Install from GitHub (coming soon)

```bash
claude plugin install github:stripe-sandbox/connect-wizard
```

> Plugin marketplace support is not yet available in Claude Code. Once it launches, this will be the recommended install method.

### Option 2: Install from a local clone (recommended)

```bash
git clone https://github.com/stripe-sandbox/connect-wizard.git
claude plugin install ./connect-wizard
```

### Option 3: Copy into your project

If you just want the skills available in a single project, copy the plugin files into your project's `.claude/` directory:

```bash
git clone https://github.com/stripe-sandbox/connect-wizard.git /tmp/connect-wizard
cp -r /tmp/connect-wizard/.claude/skills/ your-project/.claude/skills/
cp -r /tmp/connect-wizard/.claude/agents/ your-project/.claude/agents/
```

After installing, open Claude Code and run `/connect-help` to verify the plugin is loaded.

## Getting Started

**Before you begin:**
- Create a [Stripe account](https://dashboard.stripe.com/register) if you don't have one (free)
- [Enable Connect](https://dashboard.stripe.com/test/connect/accounts/overview) on your account (one-time setup)
- Have your [test API keys](https://dashboard.stripe.com/test/apikeys) ready — the plugin will ask for them during setup

Everything runs in Stripe's test mode, so no real money is involved.

### Quick start

Just describe your business and the plugin handles the rest:

> "I'm building a marketplace where mechanics list their services and customers book them"

The plugin will recommend the right Connect shape, build the integration, and guide you through testing. You can also use slash commands directly — run `/connect-help` to see all available commands.

## Development (Website)

```bash
npm install
npm run dev
```

### Build

```bash
npm run build
npm run preview
```

## Tech Stack

- Vite
- Vanilla JS/CSS
