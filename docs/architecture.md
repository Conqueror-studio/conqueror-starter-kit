# Architecture

## Recommended application structure

```text
src/
  app/                 # routes, metadata, server composition
  components/          # reusable UI grouped by domain
  content/             # schemas, queries, local fixtures
  lib/                 # CMS, analytics, utilities
  styles/              # tokens and global styles
  types/               # shared types
public/                # optimized public assets only
docs/                  # project-specific handoff
```

Use server rendering by default; use client components only for interaction. Separate CMS/content models from presentation. Validate form input server-side and client-side. Store secrets only in host-managed environment variables.

## Integrations

Choose an approved CMS (Sanity is the default candidate), email provider, analytics platform, and image CDN per project ADR. Do not enable analytics before consent and privacy obligations are decided.
