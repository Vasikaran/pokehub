```markdown
# 🧩 PokeHub – Pokémon Explorer (Mono Repo)

> A Next.js 15 app with Redux, built using a mono-repo structure and Lerna. Displays a list of Pokémon with detailed info, powered by the [PokéAPI](https://pokeapi.co/).

🌐 **Live Demo**: [https://pokehub-vws6.onrender.com](https://pokehub-vws6.onrender.com)

---

## 📦 Tech Stack

- **Next.js 15** with **Pages Router**
- **TypeScript**
- **Redux Toolkit** with `next-redux-wrapper`
- **@mui/x-data-grid** for paginated tables
- **Lerna** mono-repo
- **Dockerized** for production deployment
- **ESM/CJS packages** for reusable utilities & components
- **Storybook** Storybook-ready component structure

---

## 🏗️ Monorepo Structure
```

pokehub/
├── packages/
│ ├── components/ → Shared UI components
│ └── utils/ → Reusable helper functions
├── apps/
│ └── pokehub/ → Main Next.js application
├── Dockerfile
├── lerna.json
└── package.json

````

---

## ⚙️ Features

- Lists Pokémon with pagination using MUI DataGrid
- Click on any Pokémon to view detailed stats on a separate page
- Maintains Redux state across navigation (client-side routing)
- Reusable UI components and utility functions shared via mono-repo
- Docker-ready for containerized deployments

---

## 🚀 Deployment

This app is deployed on **Render** with a Dockerfile located at the root.

**Live Link**: [https://pokehub-vws6.onrender.com](https://pokehub-vws6.onrender.com)

### 🐳 Docker Instructions (for local dev or custom deployment)

```bash
# Clone the repo
git clone https://github.com/your-username/pokehub.git
cd pokehub

# Build Docker image
docker build -t pokehub .

# Run the container
docker run -p 3000:3000 pokehub
````

---

## 📚 Scripts

Run these from the root or using Lerna:

```bash
npm install

# Run development server
npm run dev

# Build the project
npm run build

```

---

## ✅ Requirements Coverage

| Feature                                         | Status  |
| ----------------------------------------------- | ------- |
| Mono-repo with Lerna                            | ✅ Done |
| Components & Utils packages                     | ✅ Done |
| Packages exported as ESM/CJS                    | ✅ Done |
| Next.js (Pages Router) + Redux                  | ✅ Done |
| Pokémon list with pagination (DataGrid)         | ✅ Done |
| Pokémon detail page with routing                | ✅ Done |
| Redux state maintained between navigation       | ✅ Done |
| Dockerization                                   | ✅ Done |
| Production-ready code (linted, clean structure) | ✅ Done |
| Storybook for components                        | ✅ Done |
