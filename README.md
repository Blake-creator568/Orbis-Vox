# ORBIS VOX — EDITOR'S QUICK GUIDE

## 1. HOW TO ADD A NEW ARTICLE
1. Open `index.html` on GitHub and click the **pencil icon** (Edit).
2. Press **Ctrl + F** (or **Cmd + F**) and search for: `const ARTICLES = [`
3. Copy the template below and paste it **right underneath** `const ARTICLES = [` (above the first existing article):

      {
        id: 24,
        featured: false,
        dept: "local",
        category: "Local News",
        date: "20 Nov 2026",
        title: "Your New Article Headline Here",
        intro: "Write a 1–2 sentence summary here that shows on the homepage preview.",
        body: [
          "Write your first paragraph here.",
          "Write your second paragraph here.",
          "Add as many paragraphs in quotation marks as you need — just put a comma after every paragraph except the last one!"
        ]
      },

4. **Important Rules:**
   - **id:** Always give the new article a unique number higher than the last one (e.g., `24`, `25`, `26`).
   - **dept & category:** Must match one of your 4 departments:
     - `dept: "local"` -> `category: "Local News"`
     - `dept: "community"` -> `category: "Community"`
     - `dept: "opinions"` -> `category: "Opinions"`
     - `dept: "fun"` -> `category: "Fun & Features"`
   - **Quotation marks:** If you use speech marks inside a paragraph, use curly quotes `“ ”` or single quotes `' '` so they don't break the code.
5. Click the green **Commit changes** button at the top right.

---

## 2. HOW TO CHANGE THE MAIN FEATURED HEADLINE
Only **ONE** article should have `featured: true` at a time.
1. Search for `featured: true` in `index.html` and change it to `featured: false`.
2. On the article you want as your big front-page headline, change `featured: false` to `featured: true`.
3. Click **Commit changes**.

---

## 3. HOW TO EDIT OR ADD INTERACTIVE FUN FACT CIRCLES
1. Search for `const FUN_FACTS = [` in `index.html`.
2. Edit the text inside any existing circle, or paste a new one using this template:

      {
        theme: "theme-red",
        label: "Press Fact V",
        title: "Short Front Title",
        fact: "The fun fact that appears on the back when someone clicks the circle."
      },

3. **Available circle colours (`theme`):**
   - `"theme-red"` (Dark red circle with white text)
   - `"theme-cream"` (Vintage cream tint circle with black text)
   - `"theme-white"` (Crisp white circle with black text)
4. Click **Commit changes**.
