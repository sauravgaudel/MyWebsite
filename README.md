# Saurav Gaudel — Portfolio
Plain HTML, CSS and vanilla JavaScript. No build step.

**Run:** open `index.html`, or `python3 -m http.server` in this folder.

**Edit content:** everything lives in `js/data.js`.
- Add `email`, `linkedin` and `cv` in `SITE`. Empty values are hidden or marked "Not added yet".
- Add `repo` / `demo` per project. Without `repo`, the link points to your GitHub profile.
- Add `paper` in `RESEARCH` only when a document exists.
- Keep `CERTS` honest: use `Completed`, `Participation` or `Coursework`.

**Photo:** place `profile.jpg` in `assets/images/` and replace the `.ph` placeholders in `index.html` with `<img src="assets/images/profile.jpg" alt="Saurav Gaudel">`.
**CV:** put `cv.pdf` in `assets/documents/`.
**Contact form:** opens a `mailto:` draft. Nothing is stored or sent by the site.
