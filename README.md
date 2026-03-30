# Connect Wizard Website

A showcase website for Connect Wizard featuring an interactive terminal demo.

## Installing Connect Wizard

Install from the **Stripe internal plugin marketplace**:

1. Open Claude Code
2. Run `/plugin`
3. Find the **Stripe internal marketplace** (update the marketplace if you don't see it)
4. Search for **connect-wizard** and install it

After installing, run `/connect-help` to verify the plugin is loaded.

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
