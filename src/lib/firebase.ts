import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBIZI_3bjlytLOAKFiscH9SvaRVM7eIDKs",
  authDomain: "lilywang-portfolio.firebaseapp.com",
  projectId: "lilywang-portfolio",
  storageBucket: "lilywang-portfolio.firebasestorage.app",
  messagingSenderId: "114801239847",
  appId: "1:114801239847:web:56fde8b257730f3c7f2b02",
  measurementId: "G-4W9NXDL0SV",
};

export const firebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);

// isSupported() guards against SSR/build-time environments where window is unavailable.
export async function initAnalytics() {
  if (typeof window === "undefined") return null;
  if (!(await isSupported())) return null;
  return getAnalytics(firebaseApp);
}
