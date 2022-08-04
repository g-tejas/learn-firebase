import { initializeApp } from "firebase/app";

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig()

    // Doing something with nuxtApp
    const firebaseConfig = {
        apiKey: config.FIREBASE_API_KEY,
    };
    const app = initializeApp(firebaseConfig);
    console.log(app);
});
