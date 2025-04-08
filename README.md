# **PokeHub Monorepo**

This is a monorepo for the **PokeHub** project, built using **Lerna**, **TypeScript**, and **Webpack**. The repository includes a **Next.js** app, a component library, and a utility library.

---

## 🚀 **Project Structure**

The repository is organized into the following workspaces:

```
pokehub/
├── apps/
│   └── pokehub/          # Next.js app (Main PokeHub App)
├── packages/
│   ├── components/       # React Component Library (Webpack + TypeScript)
│   └── utils/            # Utility Library (Webpack + TypeScript)
├── .gitignore
├── package.json
├── lerna.json
├── tsconfig.json
└── README.md
```

---

## 📦 **Workspaces**

### 1. **@pokehub/components**

- React component library built with **Webpack** and **TypeScript**.
- Exports components as **ESM** modules.
- Supports type exports for TypeScript integration.

### 2. **@pokehub/utils**

- Utility library built with **Webpack** and **TypeScript**.
- Includes reusable TypeScript functions.
- Outputs ESM and type definitions.

### 3. **pokehub**

- Next.js app built with **Redux**, **next-redux-wrapper**, and **TypeScript**.
- Uses the component and utility libraries directly from the monorepo.
- Fetches Pokémon data from [PokéAPI](https://pokeapi.co/).
- Displays Pokémon data in an **MUI DataGrid** with pagination.

---

## 🛠️ **Setup and Installation**

### **1. Install Dependencies**

From the root directory, run:

```bash
npm install
```

### **2. Build All Packages**

To build all packages (components and utils):

```bash
npm run build
```

### **3. Start the Next.js App**

To run the app and packages locally:

```bash
npm run dev
```

---

## 🚧 **Development**

### **Build Component Library**

To build the component library:

```bash
cd packages/components
npm run build
```

### **Build Utility Library**

To build the utility library:

```bash
cd packages/utils
npm run build
```

---

## ✅ **Testing**

To run tests:

```bash
npm test
```

---

## 📄 **License**

This project is licensed under the **MIT License**.
