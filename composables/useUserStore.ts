export const useUserStore = defineStore('user', {
    state: () => ({
        credentials: null,
    }),
    persist: true,
})