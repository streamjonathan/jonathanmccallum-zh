# AGENTS.md — jonathanmccallum-zh (Mandarin (Simplified Chinese) mirror of jonathanmccallum.com)

Mandarin (Simplified Chinese) mirror site. Same theme and design as the main site (Paper Light),
content translated into Mandarin (Simplified Chinese), meaning-first. Repo: streamjonathan/jonathanmccallum-zh.
Live (when approved): zh.jonathanmccallum.com. Proof: jonathanmccallum-zh.pages.dev.

## Mission

Mirror jonathanmccallum.com in Mandarin (Simplified Chinese) — every article translated for meaning,
not word for word, in Jonathan's voice: plain short sentences, friendly, positive,
never preachy. An average person interested in Jesus, not an expert or theologian.

## Roles

- **Bobby (Muse) is the lead builder.** He coordinates, builds, pushes to GitHub
  and deploys to Cloudflare. He is the ONLY one who pushes or deploys.
- **Claude advises and reviews** translation quality. He does not push or deploy.
- **Helper Muses translate** one article at a time, drafts only.

## The one rule above all

**Never publish or alter live production assets without Jonathan's clear
permission.** The Mandarin (Simplified Chinese) site goes live on zh.jonathanmccallum.com only when
he says so, after reading the pilot article(s). Drafts stay drafts until he
approves them. Work on a branch, never straight on main. Give Bobby a preview URL.

## Translation rules

- English repo (streamjonathan.github.io) is the source of truth. Articles are
  translated from the English Markdown, keeping the same date, slug, source_video
  and shareImage. Only the title and body are translated.
- Lewis quotations: use the published Mandarin (Simplified Chinese) translation where one exists
  (cite it); otherwise translate fresh and mark it "translated for this site".
- Bible verses: use the Chinese Union Version (和合本, public domain) wording, never
  re-translate from the English article.
- Names (never vary): 耶稣, 上帝, 阿斯兰, 纳尼亚, 迪戈里, 波莉, 贾迪斯, C.S.路易斯. Book titles use the standard published Mandarin (Simplified Chinese) titles.
- Voice: Plain everyday register, short sentences, warm and direct.
- No emojis, no newsletter form, no links the English article does not have.
- Never invent facts, dates, links or details.

## Site facts

- Eleventy 3, Cloudflare Pages, Paper Light theme (Fraunces + Newsreader).
- No Ask chat and no note Worker on this site yet — search (Pagefind) works,
  Ask and notes come later. The Ask floating button and ask.js are removed.
- CSS is preloaded, not inlined (CSP blocks inline style). Bump the `?v=` query
  on any CSS/JS file you change.
