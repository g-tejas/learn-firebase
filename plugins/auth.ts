export default defineNuxtPlugin(() => {
  addRouteMiddleware("auth", () => {
    const { $auth } = useNuxtApp()

    // console.log($auth?.currentUser)
    
    if (!$auth?.currentUser?.uid) {
      console.log("You shall not pass ❌")
      return abortNavigation() // route guard to a page, and you need to be logged in to get past it.
    }
  });
});
