# Website UI kit

Click-through recreation of Cohere's 2026 marketing site, composed from the design-system components. Built from `uploads/DESIGN-cohere.md` only (no source code or screenshots available), so layouts follow the documented structure and all imagery/logos are labelled placeholder slots.

Screens (nav links switch between them; "Request a demo" goes to Contact):
- `Home.jsx` — hero declaration, two-card media composition with agent console, trust strip, 3-up capabilities.
- `ProductPage.jsx` — deep-green product hero (North), trust strip, pale-green wash behind dark feature band, stone model cards. (Products / Solutions)
- `Blog.jsx` — coral filter chips (interactive), article grid, pale-blue CTA. (Resources / Company)
- `Research.jsx` — outlined topic pills + search filtering a rule-separated publication list.
- `Contact.jsx` — deep-green section with white rounded form card; submit shows a confirmation.

Chrome in `index.html`: AnnouncementBar, NavBar, FooterNewsletter.
