<script setup>
import { ref } from "vue";

const props = defineProps({
  date: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
  desp: {
    type: String,
    default: "",
  },
  videoID: {
    type: String,
    default: "",
  },
});

const coverImage = ref(new URL(props.imageSrc, import.meta.url).href);
</script>

<template>
  <article class="scroll-mt-16">
    <div>
      <header class="relative">
        <div
          class="pointer-events-none absolute left-[max(-0.5rem,calc(50%-18.625rem))] top-0 z-50 flex h-4 items-center justify-end gap-x-2 lg:left-0 lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem] xl:h-8"
        >
          <div class="inline-flex">
            <div
              class="hidden xl:pointer-events-auto xl:block xl:text-2xs/4 xl:font-medium xl:text-white/50"
            >
              {{ date }}
            </div>
          </div>
          <div
            class="h-[0.0625rem] w-3.5 bg-gray-400 lg:-mr-3.5 xl:mr-0 xl:bg-gray-300"
          ></div>
        </div>
        <div class="px-6 mx-auto max-w-7xl lg:flex lg:px-8">
          <div class="lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32">
            <div
              class="max-w-lg mx-auto lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto"
            >
              <div class="flex">
                <div class="inline-flex">
                  <div
                    class="text-2xs/4 font-medium text-gray-500 dark:text-white/50 xl:hidden"
                  >
                    {{ date }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div class="px-6 mx-auto max-w-7xl lg:flex lg:px-8">
        <div class="lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32">
          <div
            class="max-w-lg mx-auto text-gray-300 lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto typography py-6 px-8 border-2 rounded-xl border-white border-opacity-10"
          >
            <div
              class="relative mt-5 xl:mt-0 overflow-hidden rounded-xl bg-gray-900 [&+*]:mt-8 flex items-center justify-center"
            >
              <!-- Main Image -->

              <a class="w-full" :href="url" target="_blank">
                <iframe
                  className="w-full h-52"
                  :src="'https://www.youtube.com/embed/' + videoID"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </a>
            </div>
            <h2>
              <div class="text-2xl">{{ title }}</div>
            </h2>
            <p class="pt-3 text-sm text-gray-400">{{ desp }}</p>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>
