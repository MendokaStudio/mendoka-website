<script setup>
import HomeMenuContent from "@/components/HomeMenuContent.vue";
import HomeMainContent from "@/components/HomeMainContent.vue";
import GameCollectionContent from "@/components/GameCollectionContent.vue";
</script>

<template>
  <main class="flex flex-col min-h-full bg-gray-950 over">
    <div>
      <HomeMenuContent />
      <HomeMainContent>
        <GameCollectionContent />
      </HomeMainContent>
    </div>
  </main>
</template>
