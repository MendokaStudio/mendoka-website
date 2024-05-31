<template>
  <article class="mb-5 scroll-mt-16">
    <div>
      <header v-if="date" class="relative mb-10 xl:mb-0">
        <div
          class="pointer-events-none absolute left-[max(-0.5rem,calc(50%-18.625rem))] top-0 z-50 flex h-4 items-center justify-end gap-x-2 lg:left-0 lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem] xl:h-8"
        >
          <a class="inline-flex" href="/#commit-message-suggestions">
            <time
              :datetime="date"
              class="hidden xl:pointer-events-auto xl:block xl:text-2xs/4 xl:font-medium xl:text-white/50"
            >
              {{ date }}
            </time>
          </a>
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
                <a class="inline-flex" href="/#commit-message-suggestions">
                  <time
                    :datetime="date"
                    class="text-2xs/4 font-medium text-gray-500 dark:text-white/50 xl:hidden"
                  >
                    {{ date }}
                  </time>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div class="px-6 mx-auto max-w-7xl lg:flex lg:px-8">
        <div class="lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32">
          <div
            class="max-w-lg mx-auto text-white lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto typography"
          >
            <div
              class="relative mt-8 overflow-hidden rounded-xl bg-gray-900 [&+*]:mt-8"
            >
              <img
                :alt="imageAlt"
                loading="lazy"
                decoding="async"
                data-nimg="1"
                class="object-cover w-full h-64"
                :src="imageSrc"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    date: {
      type: String,
      required: false,
    },
    imageSrc: {
      type: String,
      required: true,
    },
    imageAlt: {
      type: String,
      required: false,
      default: "",
    },
    steamUrl: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
