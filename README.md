# Cholas

A public guide to the later Chola dynasty, from Vijayalaya to Rajendra III.

| | |
|---|---|
| **Live site** | https://gopal9797.github.io/Cholas/ |
| **Repository** | https://github.com/gopal9797/Cholas |

The coronation list is ordered by the conventional year associated with Nilakanta Sastri. A debated pill marks a real alternative. King pages lead with the meikeerthi, in Tamil where a short inscriptional opening is secure, then family, battles, and a schematic realm on a current OpenStreetMap.

The prose was written for this site. Sadasiva Pandarathar’s *Pirkaala Chozhar Sarithiram*, K. A. Nilakanta Sastri’s *The Cōḷas*, *South India Under the Cholas*, and the named Wikipedia articles are cited, not quoted.

## Develop

```powershell
cd web
npm install
npm run dev
```

Open http://localhost:5173/Cholas/

```powershell
npm test
npm run test:e2e
```

## Publish

GitHub Pages serves the built files at the repository root (`index.html`, `assets/`, `404.html`, `.nojekyll`).

```powershell
.\scripts\publish-pages.ps1
```

Commit the updated root files and push to `main`.
