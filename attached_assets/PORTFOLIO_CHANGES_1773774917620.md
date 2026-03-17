# Portfolio Site Changes - Detailed Instructions

> **IMPORTANT:** Follow each change exactly as described. Do not improvise, reword, or add anything beyond what is specified. If something is unclear, skip it and move on to the next change. Do not change any styling, colors, fonts, or layout unless explicitly instructed.

---

## Prerequisites

Before starting, the owner will upload a headshot image file. Save it as `headshot.jpg` (or `.png`, matching the uploaded format) in the `public/images/` directory of the portfolio artifact (`artifacts/portfolio/public/images/`). If the directory doesn't exist, create it.

If no headshot file has been uploaded yet, skip all headshot-related changes (marked with [HEADSHOT]) and leave the "DC" initials in place. The owner will provide the file separately.

---

## Change 1: Hero Headline (Home.tsx)

**File:** `artifacts/portfolio/src/pages/Home.tsx`

**What to find:** The `<motion.h1>` element in the hero section. It currently reads:

```
I build internal products that replace manual workflows at scale.
```

**Replace the entire h1 content with:**

```
I've built products that get adopted in complex, regulated environments.
```

The gradient-highlighted portion (the `<span>` with the gradient text classes) should wrap: `get adopted`

So the h1 should render as:
- "I've built products that " (normal white text)
- "get adopted" (gradient highlighted text, using the existing `text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400` classes)
- " in complex, regulated environments." (normal white text)

**Do not change** any surrounding classes, animation variants, or layout.

---

## Change 2: Remove Extra CTAs from Hero (Home.tsx)

**File:** `artifacts/portfolio/src/pages/Home.tsx`

**What to find:** The hero section has three buttons: "View Case Studies", "Download Resume", and "Get in Touch".

**Action:** Remove the "Download Resume" button and the "Get in Touch" button entirely from the hero. Keep only "View Case Studies" as the single CTA.

The result should be one button only:

```tsx
<Button asChild size="lg" className="rounded-xl text-base px-8 h-14 shadow-lg shadow-primary/25 hover:-translate-y-1 transition-all duration-300">
  <a href="#case-studies">
    View Case Studies <ArrowRight className="w-5 h-5 ml-2" />
  </a>
</Button>
```

Remove the other two `<Button>` blocks. Do not change the wrapping `<motion.div>`.

---

## Change 3: Add Resume Download to Navbar (Layout.tsx)

**File:** `artifacts/portfolio/src/components/Layout.tsx`

**What to find:** The desktop nav section that has LinkedIn icon, GitHub icon, and "Get in Touch" button.

**Action:** Add a "Resume" link between the GitHub icon and the "Get in Touch" button. It should look like the LinkedIn/GitHub icon links but use a download icon.

Add this import at the top of the file (add `FileDown` to the existing lucide-react import):

```tsx
import { Menu, X, Linkedin, Mail, ExternalLink, Github, FileDown } from "lucide-react";
```

Then add this link after the GitHub icon link and before the "Get in Touch" Button:

```tsx
<a
  href={`${import.meta.env.BASE_URL}Dheeraj_Chowdhary_Resume.pdf`}
  download
  className="text-muted-foreground hover:text-primary transition-colors"
  aria-label="Download Resume"
>
  <FileDown className="w-5 h-5" />
</a>
```

Also add the same resume link in the **mobile nav overlay** section, after the GitHub link:

```tsx
<a
  href={`${import.meta.env.BASE_URL}Dheeraj_Chowdhary_Resume.pdf`}
  download
  className="flex items-center gap-3 text-lg text-muted-foreground hover:text-primary"
>
  <FileDown className="w-6 h-6" /> Download Resume
</a>
```

---

## Change 4: Replace "Top 10 North American Bank" with "Bank of Montreal" (Home.tsx)

**File:** `artifacts/portfolio/src/pages/Home.tsx`

**What to find:** The `caseStudies` array near the top of the component. Two entries have `company: "Top 10 North American Bank"`.

**Action:** Replace each one with a specific label:

- For the case study with `id: "risk-platform"`: change `company` to `"Bank of Montreal, Risk Reporting"`
- For the case study with `id: "frtb-program"`: change `company` to `"Bank of Montreal, Regulatory Trading Programs"`

Do not change anything else in these objects.

---

## Change 5: Replace "Top 10 North American Bank" on Case Studies Index Page (CaseStudies.tsx)

**File:** `artifacts/portfolio/src/pages/CaseStudies.tsx`

**What to find:** Similar to Home.tsx, this page lists case studies with "Top 10 North American Bank" labels.

**Action:** Apply the same replacements:
- Risk platform case study: `"Bank of Montreal, Risk Reporting"`
- FRTB program case study: `"Bank of Montreal, Regulatory Trading Programs"`

Search for every occurrence of "Top 10 North American Bank" in this file and replace accordingly.

---

## Change 6: Replace "Top 10 North American Bank" in Individual Case Study Pages

**Files:** `artifacts/portfolio/src/pages/CaseStudy1.tsx` and `artifacts/portfolio/src/pages/CaseStudy2.tsx`

**Action:** Search each file for "Top 10 North American Bank" and replace:
- In CaseStudy1.tsx (risk-platform): replace with `"Bank of Montreal, Risk Reporting"`
- In CaseStudy2.tsx (frtb-program): replace with `"Bank of Montreal, Regulatory Trading Programs"`

Replace ALL occurrences in each file (there may be multiple: in headings, breadcrumbs, metadata, etc.).

---

## Change 7: Add Testimonials Section to Home Page (Home.tsx)

**File:** `artifacts/portfolio/src/pages/Home.tsx`

**What to find:** The section with id `"case-studies"` (the Case Studies section on the home page).

**Action:** Add a new testimonials section IMMEDIATELY BEFORE the case studies section (before `<section id="case-studies" ...>`).

Add this import at the top of the file (add `Quote` to the existing lucide-react import):

```tsx
import { ArrowRight, ChevronRight, BarChart3, Users, Building2, TrendingUp, ShieldCheck, Layers, GitMerge, Workflow, Smartphone, Bot, Cpu, BrainCircuit, Quote } from "lucide-react";
```

Then add this section before the case studies section:

```tsx
{/* Testimonials */}
<section className="py-20 bg-background border-t border-border/50 overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="mb-10">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3 text-foreground">What People Say</h2>
      <p className="text-lg text-muted-foreground">From clients, teammates, and co-founders.</p>
    </div>
    <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      {[
        {
          quote: "Dheeraj is a high performing consultant who knows how to solve the most technical and complex of problems while being able to communicate them in succinct and easy-to-understand solutions. He is stakeholder-oriented and knows how to balance customer needs with project budget and timeline constraints.",
          name: "Aaron W, CBAP, CSPO",
          title: "Lead Product Owner / Associate Director",
          company: "RBC",
          relationship: "Client",
          initials: "AW"
        },
        {
          quote: "He genuinely takes the time to understand the business needs and partner with the business to deliver on those needs. Dheeraj has quickly become the go-to SME and has been the team lead for an entire application, responsible for end-to-end deliverables and presentations to senior leadership.",
          name: "Ikram Ataullah, PMP, Prosci, CBAP",
          title: "Project Manager",
          company: "TELUS",
          relationship: "Teammate, BMO Operations",
          initials: "IA"
        },
        {
          quote: "Having run his own startup, he brought a fresh and entrepreneurial mindset to the team. He did market sizing, recruited a stellar team, did user research, worked on marketing campaigns, helped establish corporate partnerships and a lot more. Very professional, hard working and very data-driven.",
          name: "Kushal Bhagia",
          title: "Tech Investor",
          company: "superdm.com",
          relationship: "Colleague, UpGrad",
          initials: "KB"
        },
      ].map((rec, i) => (
        <div key={i} className="min-w-[340px] max-w-[400px] flex-shrink-0 snap-start p-6 rounded-2xl bg-card/40 border border-border/50 flex flex-col gap-4">
          <Quote className="w-6 h-6 text-primary/30 shrink-0" />
          <p className="text-sm text-foreground/80 leading-relaxed italic flex-1">
            "{rec.quote}"
          </p>
          <div className="flex items-center gap-3 pt-4 border-t border-border/50">
            <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center text-xs font-bold text-primary shrink-0">
              {rec.initials}
            </div>
            <div>
              <div className="text-sm font-bold text-foreground leading-tight">{rec.name}</div>
              <div className="text-xs text-muted-foreground">{rec.title} · {rec.company}</div>
              <div className="text-xs text-muted-foreground/60 mt-0.5">{rec.relationship}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
```

---

## Change 8: Fix "Cross-Functional Alignment" Card Copy (Home.tsx)

**File:** `artifacts/portfolio/src/pages/Home.tsx`

**What to find:** The "How I Build" section has a card titled "Cross-Functional Alignment". Its description currently reads:

```
360 feedback is unanimous: I connect business and tech. Resolved 10 architectural decisions across risk, tech, and ops on a $20M+ program with 6 delivery teams.
```

**Replace the paragraph text with:**

```
Led cross-functional alignment across risk, technology, and operations teams on a $20M+ program, resolving 10 key design decisions across 6 delivery teams without direct authority.
```

Do not change the card title, icon, or any classes.

---

## Change 9: Update About Page Hero Quote (About.tsx)

**File:** `artifacts/portfolio/src/pages/About.tsx`

**What to find:** The large quote near the top of the page inside a `bg-primary/5` styled div. It currently reads:

```
"I build products people actually use. I have done it at startups. I have done it at one of Canada's top banks. The method is always the same: talk to the right people, find the real problem, and ship a fix that sticks."
```

**Replace the entire quote text with:**

```
"I take ambiguous operational problems, align the people who own pieces of the workflow, and deliver solutions that get used, not just released."
```

Do not change any surrounding classes or the Quote icon.

---

## Change 10: Update About Page Intro Paragraph (About.tsx)

**File:** `artifacts/portfolio/src/pages/About.tsx`

**What to find:** The paragraph right after the quote block that currently reads:

```
I bridge business and technology. I turn complex processes into products that work. My career spans 14 years. I have built at startups in India and at a top Canadian bank.
```

**Replace with:**

```
I bridge business and technology. My career spans 14 years across startups in India and one of Canada's largest banks. The pattern is the same everywhere: find the real problem, align the people, ship something that sticks.
```

---

## Change 11: Replace "Top 10 North American Bank" on About Page (About.tsx)

**File:** `artifacts/portfolio/src/pages/About.tsx`

**What to find:** The Career Arc section, Act 2, contains "At a top North American bank".

**Replace** "At a top North American bank" with "At Bank of Montreal".

Search the entire file for any other occurrence of "top North American bank" or "Top 10 North American Bank" and replace with "Bank of Montreal".

---

## Change 12: [HEADSHOT] Add Photo to Navbar (Layout.tsx)

> **Skip this change entirely if no headshot image file has been uploaded.**

**File:** `artifacts/portfolio/src/components/Layout.tsx`

**What to find:** The logo/name link in the header that shows "DC" in a blue square:

```tsx
<div className="w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg tracking-wider shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform duration-300">
  DC
</div>
```

**Replace the entire div with:**

```tsx
<img
  src={`${import.meta.env.BASE_URL}images/headshot.jpg`}
  alt="Dheeraj Chowdhary"
  className="w-10 h-10 rounded-xl object-cover shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform duration-300"
/>
```

**Also find the same "DC" pattern in the footer:**

```tsx
<div className="w-8 h-8 rounded-lg bg-primary/20 text-primary flex items-center justify-center font-bold text-sm">
  DC
</div>
```

**Replace with:**

```tsx
<img
  src={`${import.meta.env.BASE_URL}images/headshot.jpg`}
  alt="Dheeraj Chowdhary"
  className="w-8 h-8 rounded-lg object-cover"
/>
```

> **Note:** If the uploaded file is `.png` instead of `.jpg`, use `headshot.png` in both places above.

---

## Change 13: [HEADSHOT] Add Photo to About Page Hero (About.tsx)

> **Skip this change entirely if no headshot image file has been uploaded.**

**File:** `artifacts/portfolio/src/pages/About.tsx`

**What to find:** The "My Story" heading and the quote block that follows it.

**Action:** Add a headshot image between the h1 heading and the quote block. Insert this right after the closing `</h1>` tag for "My Story" and before the quote `<div>`:

```tsx
<div className="mb-8 flex justify-center">
  <img
    src={`${import.meta.env.BASE_URL}images/headshot.jpg`}
    alt="Dheeraj Chowdhary"
    className="w-32 h-32 rounded-2xl object-cover shadow-lg border-2 border-primary/20"
  />
</div>
```

> **Note:** If the uploaded file is `.png` instead of `.jpg`, use `headshot.png` here too.

---

## Change 14: Clean Up Metrics Bar Icons (Home.tsx)

**File:** `artifacts/portfolio/src/pages/Home.tsx`

**What to find:** The metrics bar section with 5 stats, each having an icon (`<TrendingUp>`, `<Users>`, `<BarChart3>`, `<Building2>`, `<Layers>`).

**Action:** Remove the icon from each stat. Delete the `icon` property and the line that renders `{stat.icon}` in the map function.

The stat objects should just have `metric` and `label`. Each stat div should render only:

```tsx
<div className="text-3xl font-bold text-foreground mb-1">{stat.metric}</div>
<div className="text-sm text-muted-foreground font-medium leading-snug">{stat.label}</div>
```

Remove the `{stat.icon}` line from the rendered output. Also remove the now-unused icon elements from each stat object in the array (the `icon: <TrendingUp .../>` etc. properties).

---

## Summary Checklist

Before marking complete, verify:

- [ ] Hero headline says: "I've built products that **get adopted** in complex, regulated environments."
- [ ] Hero has exactly ONE button: "View Case Studies"
- [ ] Navbar has a Resume download icon (FileDown) between GitHub and "Get in Touch"
- [ ] Mobile nav has a "Download Resume" link
- [ ] All occurrences of "Top 10 North American Bank" replaced with "Bank of Montreal, Risk Reporting" or "Bank of Montreal, Regulatory Trading Programs" across ALL files (Home.tsx, CaseStudies.tsx, CaseStudy1.tsx, CaseStudy2.tsx, About.tsx)
- [ ] Testimonials section exists on home page (horizontally scrollable cards) BEFORE the Case Studies section
- [ ] "Cross-Functional Alignment" card no longer says "360 feedback is unanimous"
- [ ] About page hero quote says: "I take ambiguous operational problems, align the people who own pieces of the workflow, and deliver solutions that get used, not just released."
- [ ] About page intro paragraph updated
- [ ] Metrics bar has no icons, just numbers and labels
- [ ] [HEADSHOT] If photo was uploaded: DC initials replaced with photo in navbar + footer + About page
- [ ] No other changes were made beyond what is listed above
