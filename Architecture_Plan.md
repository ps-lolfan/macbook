# Engineering Plan

## 🧠 Overview

A MacBook landing page built in React, designed as a product engineering demo for Google recruiters.  
Focus areas: analytics-driven personalization, scalable architecture, and clean modular design.

---

## 🏗️ Phase Plan

| Phase                        | Focus                          | Description                                  |
| ---------------------------- | ------------------------------ | -------------------------------------------- |
| **1. Base Build (Now)**      | Static Monorepo                | Plain React app with all assets in `public/` |
| **2. Analytics Integration** | GA4 + Clarity                  | Implement event tracking & behavior logging  |
| **3. Modularization**        | Multi-Repo / Workspaces        | Split CSS, UI kit, analytics, and app        |
| **4. Personalization Layer** | Config-driven + local behavior | Target content per segment                   |
| **5. Observability & Docs**  | Web Vitals + Architecture.md   | Show quality engineering mindset             |

---

## ⚙️ Tools & Stack

| Category         | Tool                    | Notes                    |
| ---------------- | ----------------------- | ------------------------ |
| Framework        | React                   | Core                     |
| Styling          | Tailwind / CSS Modules  | Reusable UI kit later    |
| Analytics        | GA4 + Microsoft Clarity | Free + powerful combo    |
| Hosting          | Vercel                  | Free + analytics add-on  |
| Version Control  | GitHub                  | For mono & multi repo    |
| State Management | React Context / Zustand | Lightweight              |
| Personalization  | JSON config + GA data   | Simulated intelligent UX |

---

## 🧩 Repo Structure (Future)

```
google-getter/
├── app/              # main landing page
├── ui-kit/           # reusable components + tokens
├── analytics/        # tracking and event schema
└── docs/             # documentation & architecture
```

---

## 🔍 Tracking Plan

| Event              | Description                    | Purpose             |
| ------------------ | ------------------------------ | ------------------- |
| `scroll_depth`     | User scrolls 50%, 80%, 100%    | Engagement tracking |
| `interaction_chip` | Hover/click on M2 chip section | Feature interest    |
| `buy_click`        | Clicks CTA                     | Conversion intent   |

---

## 💡 Personalization Concept

Based on user behavior:

- Highlight performance features for dev-type visitors
- Emphasize battery life for student-type visitors
- Default to balanced layout otherwise

Uses config-driven rendering via JSON.

---

## 🧠 Future Enhancements

- A/B Testing simulation
- Edge analytics via Vercel
- Feature flags using context
- Performance dashboard

---

## 🧾 Docs to Include

- `Architecture.md`
- `Analytics.md`
- `Personalization.md`
- `Lessons.md`

---

## 📈 Notes

All concepts are free to implement using public tools and open-source libraries.  
The project is designed to demonstrate product thinking, not budget or tech dependency.
