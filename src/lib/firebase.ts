import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBNUISntntDxq0sgWRrkh6iCrbaQ_MTGV8",
  authDomain: "lily-portfolio-895d4.firebaseapp.com",
  projectId: "lily-portfolio-895d4",
  storageBucket: "lily-portfolio-895d4.firebasestorage.app",
  messagingSenderId: "355229386040",
  appId: "1:355229386040:web:6e37c383a403a4ba982dcd",
  measurementId: "G-XQXK1V3FCS",
};

export const firebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);

// isSupported() guards against SSR/build-time environments where window is unavailable.
export async function initAnalytics() {
  if (typeof window === "undefined") return null;
  if (!(await isSupported())) return null;
  return getAnalytics(firebaseApp);
}
