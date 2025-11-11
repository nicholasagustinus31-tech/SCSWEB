# SCS Media Representation Website

Single-page company profile website for a media representation agency. The site uses the brand colors `#670e16` and `#036f6d` with the Lucida Fax font family, and provides animated sections for home, people, media, partners, case studies, solutions, and contact.

## Features

- Responsive hero layout with animated statistics and call-to-action buttons.
- Sections for leadership, media clients, strategic partners, and global case studies.
- Contact form and newsletter subscription forms.
- Secure client single sign-on (SSO) modal with Azure AD, Google Workspace, and Okta entry points.
- Intersection Observer-powered reveal animations and mobile navigation toggle.

## Getting Started

Open `index.html` in a modern web browser to preview the site.

## Structure

```
.
├── index.html
├── assets
│   ├── css
│   │   └── styles.css
│   ├── images
│   │   ├── placeholder-person-1.svg
│   │   ├── placeholder-person-2.svg
│   │   └── placeholder-person-3.svg
│   └── js
│       └── main.js
```

## Development Notes

- Animations leverage CSS transitions triggered via Intersection Observer in `assets/js/main.js`.
- All components are built with accessible markup, including semantic headings, labeled forms, and ARIA attributes for the modal dialog.
