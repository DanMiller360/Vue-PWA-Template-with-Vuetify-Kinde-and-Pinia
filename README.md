# Vue PWA Template (Vuetify + Kinde + Pinia + BFF)

A production-ready **Progressive Web App (PWA)** template built with:

* [Vue 3](https://vuejs.org/) + [Vite](https://vitejs.dev/)
* [Vuetify](https://vuetifyjs.com/) for UI components
* [Pinia](https://pinia.vuejs.org/) for state management (auth + account info)
* [Kinde](https://kinde.com/) for authentication
* [vite-plugin-pwa](https://vite-pwa-org.netlify.app/) for PWA support
* Designed for use with a **Backend-for-Frontend (BFF)** to persist user data
* Recommended hosting: [Cloudflare Pages / Workers](https://developers.cloudflare.com/pages/)

---

## ✨ Features

* ✅ Installable PWA with offline support
* ✅ Centralized auth state with Pinia
* ✅ Secure authentication via Kinde
* ✅ BFF integration point for persistent user data
* ✅ Modern Vue 3 + Vite development experience
* ✅ Vuetify-based responsive UI out of the box

---

## ⚙️ Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-org/your-repo.git
cd your-repo
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root with the following:

```bash
VITE_BFF_URL=
VITE_KINDE_CLIENT_ID=
VITE_KINDE_DOMAIN=
VITE_KINDE_AUDIENCE=
```

* `VITE_BFF_URL`: URL of your Backend-for-Frontend (BFF) service
* `VITE_KINDE_CLIENT_ID`: Kinde application client ID
* `VITE_KINDE_DOMAIN`: Kinde domain (e.g., `yourdomain.kinde.com`)
* `VITE_KINDE_AUDIENCE`: Kinde API audience

### 4. Run locally

```bash
npm run dev
```

The app runs at [http://localhost:8080](http://localhost:8080).

### 5. Build for production

```bash
npm run build
npm run preview
```

This generates an installable PWA with a service worker.

---

## 🌐 Hosting Recommendation

* **Frontend**: Deploy with **Cloudflare Pages** (static hosting with automatic HTTPS).
* **Service Worker / API Proxy**: Use **Cloudflare Workers** as middleware to:

  * Handle API proxying
  * Securely call your BFF
  * Keep auth flows smooth in a PWA context

---

## 📂 Project Structure

```
├── public/             # Icons & manifest assets
├── src/
│   ├── api/            # API helpers (calls to Kinde & BFF)
│   ├── components/     # Vue components
│   ├── plugins/        # Vuetify and other plugins
│   ├── router/         # Vue Router config
│   ├── services/       # Auth / BFF integration logic
│   ├── stores/         # Pinia stores (auth, account info)
│   ├── utils/          # Utility helpers
│   ├── App.vue         # Root component
│   └── main.ts         # App entry (includes PWA registration)
├── vite.config.mts     # Vite + Vuetify + PWA setup
├── .env                # Environment variables (not committed)
├── README.md
└── LICENSE
```

---

## 🔑 Authentication Flow

1. The frontend redirects users to **Kinde** for login.
2. On successful login, an **ID token + access token** are returned.
3. **Pinia** stores auth state in-memory.
4. Access tokens are sent to the **BFF**, which persists user data securely.

---

## 📜 License

This project is licensed under the [MIT License](./LICENSE).
