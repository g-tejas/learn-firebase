<template>
  <div>
    <v-btn @click="signIn">Sign In</v-btn>
    <v-btn @click="signOut">Sign Out</v-btn>
    <pre>
      {{ credentials }}
    </pre>
  </div>
</template>

<script setup>
const credentials = ref();

const signIn = async () => {
  const email = "tejas@gmail.com";
  const password = "123456";
  credentials.value = await signInUser(email, password);
  console.log("Credentials: ", credentials)
}

const signOut = async () => {
  const email = "tejas@gmail.com";
  const password = "123456";
  credentials.value = await signOutUser();
  console.log("Credentials: ", credentials) // this will always show undefined because user is not signed i
}

onMounted(async () => {
  console.log('mounted');
});
</script>