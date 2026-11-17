# AI Agent Security Standard

This document defines mandatory security principles and restrictions for all AI coding assistants operating in this repository. All AI agents must follow these requirements without exception.

**Authority:** Derived from [Zendesk Minimum Baseline Security Standard](https://docs.google.com/document/d/17GZ9TpjKCt6WCdw3yxL44Ra_YscbOBVnVkUVGgx5Hz0/) and internal security policies.

---

## Core Security Mandate

Security is a first-class requirement. Every code suggestion must be evaluated against these guidelines. If a request would result in insecure code:

1. **Stop** and flag the security concern
2. **Explain** why it's problematic
3. **Propose** a secure alternative

AI-generated code requires human review before merging.

---

## Absolute Prohibitions

AI agents must **NEVER** do the following:

### Secrets & Credentials
- Hardcode secrets, credentials, API keys, tokens, or passwords in source code
- Store secrets in version control (`.env` files, config with real values)
- Log, print, or expose secret values
- Expose credentials in URLs, logs, or error messages

### Security Controls
- Disable or weaken security controls (`verify=False`, `ALLOW_ALL` CORS, disabled auth)
- Bypass authentication or authorization checks
- Disable certificate validation

### Dangerous Code Patterns
- Execute shell commands using raw string interpolation from user input
- Use `eval()` or `exec()` with user-supplied input
- Implement custom cryptography
- Use deprecated algorithms (MD5, SHA-1, DES, RC4, ECB mode)

### Data Exposure
- Log sensitive data (PII, credentials, tokens)
- Expose stack traces or internal paths to end users
- Transmit sensitive data over unencrypted channels

---

## Repository-Specific Security Notes

This is a **CSS linting configuration package** with no runtime execution, no authentication, no database access, and no user data handling. The primary security considerations are:

### Dependency Security
- Do not add new runtime `dependencies` without security review — the published package is consumed by many downstream projects
- Prefer well-maintained, widely-used packages; avoid packages with known vulnerabilities
- Dependabot and Renovate are configured to keep dependencies current — do not disable them

### Supply Chain Integrity
- Do not modify `package.json` `dependencies` or `devDependencies` directly — propose changes and let maintainers review
- The `publishConfig.access: "public"` setting means changes ship directly to public npm; take extra care with published files (`plugins/`, `rules/`)
- Only files listed in the `files` field of `package.json` are published; do not add sensitive files there

### Published File Safety
- Do not add API keys, tokens, internal URLs, or internal system names to any file under `rules/` or `plugins/` — these are shipped to npm and are public
- The copyright header in every JS file is required — do not remove it

---

## When to Stop and Escalate

Stop, explain the concern, and recommend involving Security if a task requires:

- Adding a new runtime dependency from an unfamiliar or unvetted source
- Modifying the `files` field in `package.json` in a way that could expose sensitive files
- Disabling Dependabot or Renovate security updates
- Any change that could introduce executable code that runs in consumer projects at lint time

---

## Security Testing

When generating features or changes, include:

- Verification that no secrets or internal paths appear in files under `rules/` or `plugins/`
- Checks that new dependencies have recent publish dates and active maintenance
- Review that the `files` field in `package.json` only includes intended public files

---

## References

- [Minimum Baseline Security Standard](https://docs.google.com/document/d/17GZ9TpjKCt6WCdw3yxL44Ra_YscbOBVnVkUVGgx5Hz0/)
- [Cryptography Standards](https://techmenu.zende.sk/standards/cryptography-standards/)
- [Zendesk Security Engagement](https://techmenu.zende.sk/security/)

---

**Questions?** Reach out to the Security team or file a ticket via the Security Engagement process.
