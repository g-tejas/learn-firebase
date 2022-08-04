<template>
  <div>
    <v-btn @click="signIn" v-if="!firebaseUser.credentials">Sign In</v-btn>
    <v-btn @click="signOut" v-if="firebaseUser.credentials">Sign Out</v-btn>
    <div v-if="firebaseUser.credentials">
      <pre>
        {{ firebaseUser.credentials }}
      </pre>
    </div>
    <div v-else>
      User is signed out
    </div>
  </div>
</template>

<script setup lang="ts">
const firebaseUser = useUserStore()

const signIn = async () => {
  const email = "tejas@gmail.com";
  const password = "123456";
  firebaseUser.credentials = await signInUser(email, password);
}

const signOut = async () => {
  firebaseUser.credentials = await signOutUser();
}

onMounted(async () => {
  console.log('mounted');
});
</script>