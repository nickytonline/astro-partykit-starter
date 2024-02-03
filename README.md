# Astro Partykit Minimal Starter Kit

This is a minimal starter kit for [Astro](https://astro.build) and [Partykit](https://partykit.io) using [React](https://reactjs.org/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                                                                                             |
| :------------------------ | :----------------------------------------------------------------------------------------------------------------- |
| `npm install`             | Installs dependencies                                                                                              |
| `npm run dev`             | Starts local dev server at `localhost:4321` as well as partykit on `localhost:1999`                                |
| `ntl dev`                 | Starts Netlify integration along with local dev server at `localhost:8888` as well as partykit on `localhost:1999` |
| `npm run build`           | Build your production site to `./dist/`                                                                            |
| `npm run preview`         | Preview your build locally, before deploying                                                                       |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check`                                                                   |
| `npm run astro -- --help` | Get help using the Astro CLI                                                                                       |

If you plan to use Netlify, you need to install the [Netlify CLI](https://docs.netlify.com/cli/get-started/) to run `ntl dev`.

## 👀 Want to learn more about Astro?

Feel free to check [their documentation](https://docs.astro.build) or jump into their [Discord server](https://astro.build/chat).

## 👀 Want to learn more about Partykit?

Feel free to check [their documentation](https://docs.partykit.io/) or jump into their [Discord server](https://discord.gg/KDZb7J4uxJ).

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── party/
│   └── index.ts
├── src/
│   └── components/
│       └── Party.tsx
│       └── Modal.tsx
│   └── pages/
│       └── index.astro
│       └── chat/
│           └── index.astro
├── tests/
|    ├── join-room.spec.ts
|    ├── modal.spec.ts
|    └── send-messages.spec.ts
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

`src/components/` is where components go, Astro/React/Vue/Svelte/Preact components. For this starter project, we're using React, but feel free to switch to your favorite framework.

Any static assets, like images, can be placed in the `public/` directory.

## End-to-End Testing With Playwright

This starter kit uses [Playwright](https://playwright.dev/) for end-to-end testing. You can find the tests in the `tests/` directory. To run all of the tests, you can run `npx playwright test` from the root of the project. After all of the tests are complete, you will see a report of the tests that passed and failed. Run `npx playwright show-report` to see a visual representation of the test results on `http://localhost:9323`.

Here are a few other commands you can use for Playwright testing:

- `npx playwright test --ui` - Starts the interactive UI mode.
- `npx playwright test --project=chromium` - Runs the tests only on Desktop Chrome.
- `npx playwright test example-file.spec.ts` - Runs the tests in a specific file.
- `npx playwright test --debug` - Runs the tests in debug mode.
- `npx playwright codegen` - Auto generates tests with Codegen.

## Deployment

### Setting up Environment Variables

1. Run `npx partykit@latest token generate` to generate a token.
2. Run `ntl env:set PARTYKIT_LOGIN your-username` to add it to the environment variables for Netlify deploys.
3. Run `ntl env:set PARTYKIT_TOKEN THE_GENERATED_SUPER_SECRET_TOKEN` to add it to the environment variables for Netlify deploys.
4. Run `ntl env:set PUBLIC_PARTYKIT_HOST set-your-url-here` so that the production URL for Partykit is available for the deployment.

_Note_: The `ntl env:set` command is for Netlify deployments only. If you choose to deploy elsewhere, please refer to those particular docs on setting environment variables for your application.

### Deploy to Netlify

The project is configured to deploy to Netlify. For more information on deploying to Netlify, see [A Step-by-Step Guide: Deploying on Netlify](https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/).

If you'd like to deploy via the Netlify CLI, you can run the following commands:

```bash
npm install netlify-cli -g # Install the Netlify CLI
netlify init # Connect your project to Netlify
netlify deploy --build # Deploy your site add --prod for production
```

### Deploy to Partykit

For the Partykit side of things, you can use the [Partykit CLI](https://docs.partykit.io/cli).

```bash
npx partykit deploy
```

For more information see their [documentation](https://docs.partykit.io/guides/deploying-your-partykit-server).
