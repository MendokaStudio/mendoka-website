<script setup>
import HomeMainContent from "@/components/HomeMainContent.vue";
import HomeHeaderContent from "@/components/HomeHeaderContent.vue";
</script>

<template>
  <main class="flex flex-col min-h-full bg-slate-950">
    <div>
      <HomeHeaderContent />
      <HomeMainContent>
        <router-view />
      </HomeMainContent>
    </div>
  </main>
</template>
