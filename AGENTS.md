# Garden stylelint Config

## Project Overview

`@zendeskgarden/stylelint-config` is a shareable [stylelint](https://stylelint.io/) configuration for Zendesk Garden design-system projects. It exports a single config object (`index.js`) that extends a set of focused rule files covering error-avoidance and convention-enforcement, plus a concentric property-ordering plugin.

## Setup & Commands

```bash
# Install dependencies
npm install

# Run all checks (lint CSS + lint JS + verify formatting)
npm test

# Lint only
npm run lint          # CSS self-test + JS linting
npm run lint:css      # Validates config syntax by running stylelint against itself
npm run lint:js       # ESLint with zero warnings allowed

# Format package.json
npm run format

# Create a release tag (main branch only)
npm run tag
```

## Repository Structure

```
stylelint-config/
├── index.js                         # Entry point — extends all rule files
├── rules/
│   ├── avoid-errors/                # Rules that prevent CSS mistakes
│   │   ├── deprecated.js            # Disallow deprecated at-rules/properties/etc.
│   │   ├── descending.js            # Disallow descending specificity
│   │   ├── duplicate.js             # Disallow duplicate selectors/properties
│   │   ├── empty.js                 # Disallow empty blocks/sources
│   │   ├── invalid.js               # Disallow invalid CSS constructs
│   │   ├── irregular.js             # Disallow irregular whitespace
│   │   ├── missing.js               # Require generic font families, etc.
│   │   ├── non-standard.js          # Disallow non-standard direction/syntax
│   │   ├── overrides.js             # Disallow overriding shorthand properties
│   │   ├── unknown.js               # Disallow unknown rules/properties/values
│   │   └── unmatchable.js           # Disallow unmatchable selectors
│   └── enforce-conventions/         # Rules that enforce CSS coding style
│       ├── allowed-disallowed-required.js  # Vendor prefix bans, named-color ban, etc.
│       ├── case.js                  # Lowercase for functions/types/keywords
│       ├── empty-lines.js           # Empty-line rules before at-rules/rules
│       ├── max-min.js               # Max specificity, nesting depth limits
│       ├── notation.js              # Color notation, font-weight numeric, hex short
│       ├── pattern.js               # Naming patterns (zd-.+ for custom props/media/keyframes)
│       ├── quotes.js                # Quote rules for fonts, urls, attributes
│       ├── redundant.js             # Disallow longhand/redundant values
│       └── whitespace-inside.js     # Whitespace inside comment markers
└── plugins/
    └── stylelint-order.js           # Concentric property-sort order
```

## Code Conventions

- **Each rule file exports a single `module.exports = { rules: { ... } }` object** — no default exports, no named exports
- Copyright header (Apache-2.0) is required at the top of every JS file
- Inline comments above each rule explain its purpose (see existing files for the pattern)
- Rule files must be registered in `index.js` under the `extends` array
- New rule categories go in `rules/avoid-errors/` or `rules/enforce-conventions/`; a new top-level category would require a new subdirectory plus a matching entry in `index.js`
- ESLint config (`eslint.config.mjs`) uses `@zendeskgarden/eslint-config` + prettier; match that style

## Key Rules to Know

- **`reportNeedlessDisables: true`** — needless `/* stylelint-disable */` comments are errors
- **Custom naming pattern `zd-.+`** applies to: custom properties, custom media queries, and keyframe names
- **No vendor prefixes** — at-rules, media features, properties, selectors, and values must all be unprefixed
- **No `!important`** — `declaration-no-important: true`
- **No named colors** — `color-named: 'never'`; use hex/rgb/hsl instead
- **Property order** follows the concentric CSS model (layout → box model → typography); defined in `plugins/stylelint-order.js`
- **Modern color notation**: short hex (`#fff` not `#ffffff`), numeric font-weight, `color()` modern syntax

## Do

- Keep each rule file focused on one logical category — match the existing naming/grouping
- Add a short inline comment above every new rule explaining what it does
- Run `npm test` before opening a PR; it catches lint violations and formatting drift
- When adding a new rule file, add it to the `extends` array in `index.js`
- Follow conventional commits format for PR titles (`feat:`, `fix:`, `chore:`, etc.)
- Use `null` to intentionally leave a rule unconfigured (documents that it was considered)

## Don't

- Don't duplicate rules across multiple files — each rule lives in exactly one file
- Don't add vendor-prefixed rules; the config explicitly bans vendor prefixes
- Don't enable rules that conflict with the `reportNeedlessDisables: true` global setting
- Don't change `index.js` structure without understanding that consumers extend the whole config
- Don't modify `package.json` manually — use `npm run format` to keep it formatted

## Architecture

See `ARCHITECTURE.md` for component map and design decisions.

## Security

See `SECURITY.md` for mandatory security requirements.

## Safety & Permissions

Allowed without approval:
- Read/list files
- Run `npm test`, `npm run lint`, `npm run lint:css`, `npm run lint:js`

Ask before:
- Installing or removing packages
- Running `npm run tag` (creates a release)
- Pushing to remote branches
- Modifying `package.json` dependencies

## PR & Commit Guidelines

- PR title must follow [Conventional Commits](https://conventionalcommits.org/): `type(scope): description` or `type: description`
- Types: `feat`, `fix`, `chore`, `breaking`
- Breaking changes: add `BREAKING CHANGE?` checkbox to PR description
- Branch naming: `username/verb-noun`
- Every PR must pass CI and receive at least one approval
- See `.github/CONTRIBUTING.md` for full workflow

## References

- Architecture: `ARCHITECTURE.md`
- Security: `SECURITY.md`
- Contributing: `.github/CONTRIBUTING.md`
- stylelint rules reference: https://stylelint.io/user-guide/rules
- Concentric CSS order: https://github.com/brigade/scss-lint/blob/master/data/property-sort-orders/concentric.txt
