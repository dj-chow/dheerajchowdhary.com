# Portfolio Site — Case Study Content Updates

> **IMPORTANT:** Follow each change exactly as described. Do not improvise, reword, or add anything beyond what is specified. If something is unclear, skip it and move on to the next change. Do not change any styling, colors, fonts, or layout unless explicitly instructed.
>
> **Context:** Changes 1-14 from the previous instruction file have already been deployed. This file contains ONLY the remaining case study content updates.

---

## Change 1: Update Home Page Case Study Card Quotes (Home.tsx)

**File:** `artifacts/portfolio/src/pages/Home.tsx` (or wherever the `caseStudies` array lives)

**What to find:** The `caseStudies` array that populates the case study cards on the home page. Each entry has a `quote` or `description` field shown on the card.

**Action:** Update the preview quotes for each case study card:

- **risk-platform** card: Change the quote from `"Executives were making risk decisions by squinting at spreadsheets on their phones."` to `"Leaders were making risk calls from sheets on their phones. The first attempt to fix it failed."`

- **frtb-program** card: Change the quote from `"Six delivery teams working in silos. Critical design decisions stalled for months."` to `"Six teams. Three years in. The hardest feature was not defined. I had to figure out what to build, not just how to ship it."`

- **upgrad-google** card: Change the quote from `"Hired to build an Android Development program from a blank page."` to `"I built a product from zero, partnered with Google, scaled to 5,000+ learners. Then I made the call to kill it."`

- **nlp-assessment** card: Keep the current quote as-is (it already works).

---

## Change 2: Update Case Study 1 Page Content (CaseStudy1.tsx)

**File:** `artifacts/portfolio/src/pages/CaseStudy1.tsx`

### 2a: Update the opening quote

**Find:**
```
"Executives were making risk decisions by squinting at spreadsheets on their phones."
```

**Replace with:**
```
"Leaders were making risk calls from sheets on their phones. The first attempt to fix it failed."
```

### 2b: Replace "The Problem" section content

**Find the two `<p>` tags inside The Problem section and replace their content.**

Replace the first `<p>`:
```
The risk governance team was producing reports manually. Executives reviewed critical risk data on spreadsheets from their phones between meetings.
```
With:
```
The risk team built reports by hand. Leaders checked key data on phones between meetings. A prior pilot had failed fully.
```

Replace the second `<p>`:
```
The first automation pilot had completely failed. Not because the technology was wrong, but because executives resisted a tool that would surface issues they'd immediately have to defend in governance meetings. I was given a blank page, a senior developer, and a mandate to fix it.
```
With:
```
But it wasn't just a tech failure. The tool was built to speed up old work, not solve the problem users had. I was given a blank page, one developer, and $50K.
```

### 2c: Replace "What I Did" section content

Replace the three `<p>` blocks inside the "What I Did" section with:

```tsx
<p>
  A better version of the wrong product is still wrong. Instead of rebuilding, I started over with people. Ran research with analysts and leaders. Found two pain points: analysts wanted to stop chasing data, and leaders feared red flags they couldn't defend.
</p>
<p>
  <strong>Built for real behavior:</strong> Leaders checked breach status on their phones, scanning only for problems. So I built breach status as the top view, mobile-first. Analyst notes sat below so every flag had context before a leader saw it.
</p>
<p>
  <strong>Shipped under constraints:</strong> People wanted custom views, but a 2-person team couldn't maintain those. I said no and built self-serve dashboards instead. Adoption over custom work. Tested with early fans before scaling to the full org.
</p>
```

### 2d: Update "Key Takeaway" text

**Find:**
```
The technical solution was only 30% of the battle. The other 70% was about changing the culture and workflow. The stated problem is almost never the real problem.
```

**Replace with:**
```
The stated problem is almost never the real one. The first pilot failed because nobody saw the fear behind the push-back. Once I found that, the product built itself. Discovery isn't just a phase, it's the job.
```

### 2e: Update sidebar metric labels

- "Reduction in executive reporting requests" -> "Fewer reporting requests"
- "Active platform users across risk & compliance" -> "Active users across risk teams"
- "Freed (~0.5 FTE per business line)" -> "Freed in manual effort"
- "Reduction in BAU support requests" -> "Drop in support requests"

---

## Change 3: Update Case Study 2 Page Content (CaseStudy2.tsx)

**File:** `artifacts/portfolio/src/pages/CaseStudy2.tsx`

### 3a: Update the opening quote

**Find:**
```
"I stepped into the third year of a high-stakes program where features were built in silos and critical decisions were unresolved across six teams."
```

**Replace with:**
```
"Six teams. Three years in. The hardest feature was not defined. I had to figure out what to build, not just how to ship it."
```

### 3b: Replace "The Problem" section content

Replace the first `<p>`:
```
The FRTB (Fundamental Review of the Trading Book) program was a massive, multi-year regulatory initiative. By year three, the delivery momentum had fractured.
```
With:
```
The FRTB program was a $20M+ multi-year rule-driven push at a major bank. By year three, delivery had broken apart. Six teams worked in silos with competing goals.
```

Replace the second `<p>`:
```
Six delivery teams were working in silos with competing priorities. Critical architectural and product design decisions had been stalled. The most complex feature — expanding trade decomposition from single-layer to multi-layer instruments (funds of funds) — was completely undefined and holding up compliance.
```
With:
```
The hardest problem: growing trade breakdown from one layer to many layers. Nobody had defined what this feature needed to do. Without it, the bank's capital costs were bloated. It was a "what to build" problem that nobody owned.
```

### 3c: Replace "What I Did" section content

Replace the three `<p>` blocks with:

```tsx
<p>
  Teams weren't clashing over fixes. They clashed because nobody had defined what the product needed to do. My first move was to own the spec, not the process. I sat with traders, traced data flows end-to-end, and turned user reality into product needs for all six teams.
</p>
<p>
  <strong>Forced shared clarity:</strong> I replaced siloed calls with joint design sessions. Tracing data flows gave all teams the same source of truth.
</p>
<p>
  <strong>Led 10 design reviews:</strong> In regulated settings, rules aren't overhead. Each review was a product call with an audit trail: data ownership, method, reporting order, pros and cons, and a pick to defend. I used it as the tool to resolve gray areas.
</p>
```

### 3d: Update "Key Takeaway" text

**Find:**
```
Adversarial relationships between teams are almost always a process failure, not a people failure. Give people a shared forum and a shared definition of done, and the dynamic shifts.
```

**Replace with:**
```
The highest-value PM skill in a large program is stating the problem clearly enough that shared views become possible. Once I wrote the spec from the user's side, the "politics" resolved on their own.
```

### 3e: Update sidebar metric labels

- "Critical Design Authority decisions resolved" -> "Key design calls resolved"
- "Siloed delivery teams successfully aligned" -> "Siloed teams aligned"
- "Requirements directly reduced via trade decomposition feature" -> "Costs cut via trade breakdown feature"
- "Satisfactory enterprise compliance rating achieved" -> "Full rating achieved"

---

## Change 4: Update Case Study 3 Page Content (CaseStudy3.tsx)

**File:** `artifacts/portfolio/src/pages/CaseStudy3.tsx`

### 4a: Update the opening quote

**Find:**
```
"I was hired to build the Android Development program from a blank page."
```

**Replace with:**
```
"I built a product from zero, partnered with Google, scaled to 5,000+ learners. Then I made the call to kill it."
```

### 4b: Replace "The Problem" section content

Replace the first `<p>`:
```
A $2.25B edtech unicorn wanted to launch a professional Android development program. But there was nothing there yet.
```
With:
```
A $2.25B edtech startup wanted to launch an Android dev program in India. There was no content, no mentor network, no brand deals, and no students.
```

Replace the second `<p>`:
```
There was no existing curriculum, no mentor network, no brand partnerships, and no students. I was tasked to own the full product lifecycle, from initial business case all the way through go-to-market.
```
With:
```
This was a blank page. The company needed someone to figure out if this product should exist, what it should look like, and how to bring it to market.
```

### 4c: Replace "What I Did" section content

Replace the three `<p>` blocks with:

```tsx
<p>
  <strong>Built the case:</strong> I started with market sizing and P&L modeling. Sized the target market, found the gap between free guides and paid programs, and built the case before anyone wrote a line of content.
</p>
<p>
  <strong>Secured Google:</strong> Built the pitch, set the terms, closed the deal. One of only six national partners. This wasn't for show. It defined our credibility, pricing power, and edge. Made every product tradeoff: content structure, pricing, cohort sizes, sync vs. async ratios, mentor criteria. Each one was a tension between scale and quality.
</p>
<p>
  <strong>Led launch, then led the wind-down:</strong> Led a 20-person team across content, video, marketing, and sales to launch. When finish rates and job outcomes dropped below quality bars, I didn't chase vanity growth. Learner count doesn't matter if the outcome you promised isn't landing. Ran a review, showed the data to leaders, and proposed a wind-down with zero learner impact.
</p>
```

### 4d: Update "Key Takeaway" text

**Find:**
```
The hardest business decision is knowing when to stop something that's working but no longer strategically aligned. Product discipline means killing your own creation when the data says so.
```

**Replace with:**
```
The hardest product call is when to stop. The program worked by vanity metrics, but job outcomes told another story. Killing my own product when the data said stop taught me more than building it.
```

### 4e: Update sidebar metric labels

- "Learners reached and scaled" -> "Learners reached"
- "Google national partnerships secured in India" -> "Google national deals in India"
- "Learner disruption during sunset transition" -> "Learner harm during wind-down"
- "Owned from 0 to 1, to scale, to sunset" -> "Zero to launch to scale to sunset"

---

## Change 5: Update Case Study 4 Page Content (CaseStudy4.tsx)

**File:** `artifacts/portfolio/src/pages/CaseStudy4.tsx`

### 5a: The opening quote stays the same (no change needed).

### 5b: Replace "The Problem" section content

Replace the first `<p>`:
```
The product was an NLP-based talent assessment tool. It was technically strong. The POC results were solid. But deals kept stalling.
```
With:
```
The product was an NLP-based talent review tool. Strong on the tech side. POC results were solid. But large deals kept stalling across Southeast Asia.
```

Replace the second `<p>`:
```
The blocker was not the technology and not the buyer. It was the client's own operations team. They were the people who ran manual candidate screening today. They saw the AI tool as a direct threat to their jobs. So they made themselves unavailable, raised every objection they could, and quietly killed the POC from inside.
```
With:
```
The blocker was the client's ops team. They ran manual screening. They saw the AI tool as a direct threat to their jobs. They dodged meetings, raised every concern they could, and quietly killed POCs from inside.
```

Replace the third `<p>`:
```
At the time, "AI resistance" was not a common phrase. But the pattern was already there. And it had nothing to do with the product.
```
With:
```
At the time, "AI pushback" wasn't a phrase anyone used. But the pattern was there.
```

### 5c: Replace "What I Found" section content

Replace the three `<p>` blocks with:

```tsx
<p>
  I went on-site at the first client to learn why people were blocking it.
</p>
<p>
  Informal talks with the ops team surfaced a theme. "This tool screens people on its own, so what do we do?" The word "automated" in every piece of our content confirmed what they feared. It was a messaging problem that had become a trust problem.
</p>
```

### 5d: Replace "The Pivot" section content

Replace the three `<p>` blocks with:

```tsx
<p>
  Reframed the whole pitch from "automated screening" to "expert copilot." New message: the tool handles repeat work, you handle judgment. Your value goes up, not down.
</p>
<p>
  Rewrote all sales and setup materials. Changed how we sold: instead of going around the ops team, brought the most resistant members into the beta. Gave them ownership of the internal rollout. The people blocking the deal became the people pushing it forward.
</p>
```

### 5e: Update "Key Takeaway" text

**Find:**
```
AI adoption fails when people feel replaced. The PM job is not to dismiss that fear. It is to understand it, redesign the message around it, and sometimes redesign the product too. This pattern hasn't changed. It's just affecting more products now.
```

**Replace with:**
```
I learned this in 2012, before "AI pushback" was a phrase. Every product I've touched since follows the same rule: if the people closest to the work feel replaced, they will kill your product from inside. The fix wasn't technical. It was framing and trust.
```

### 5f: Update sidebar metric labels

- "Enterprise contracts across Southeast Asia" -> "Large contracts across Southeast Asia"
- "AI resistance navigation — before it was a mainstream PM problem" -> "AI pushback navigation, before it was a mainstream PM problem"

---

## Summary Checklist

Before marking complete, verify:

- [ ] Home page case study cards have updated quotes for risk-platform, frtb-program, and upgrad-google
- [ ] Case Study 1 page: quote, problem, approach, takeaway, and metric labels all updated
- [ ] Case Study 2 page: quote, problem, approach, takeaway, and metric labels all updated
- [ ] Case Study 3 page: quote, problem, approach, takeaway, and metric labels all updated
- [ ] Case Study 4 page: problem, found, pivot, takeaway, and metric labels all updated
- [ ] No other changes were made beyond what is listed above
