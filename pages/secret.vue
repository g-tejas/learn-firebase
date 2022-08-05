<template>
  <div>
    <NuxtLink to="/"><v-btn>Back home</v-btn></NuxtLink>
    <div v-if="firebaseUser">
        <pre>
            {{ firebaseUser.credentials }}
        </pre>
    </div>
    <div v-else>
        User is not signed in
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  middleware: ["auth"],
});

const firebaseUser = useUserStore();
</script>
