<script setup>
import MenuButton from "@/components/MenuButton.vue";
import router from "@/router";
</script>

<template>
  <div
    class="relative flex-none px-6 overflow-hidden lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex lg:px-0"
  >
    <div
      class="absolute inset-0 -z-10 overflow-hidden bg-gray-950 lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem]"
    >
      <svg
        class="absolute -bottom-48 left-[-40%] h-[80rem] w-[180%] lg:-right-40 lg:bottom-auto lg:left-auto lg:top-[-40%] lg:h-[180%] lg:w-[80rem]"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id=":R1d6:-desktop" cx="100%">
            <stop offset="0%" stop-color="rgba(56, 189, 248, 0.3)"></stop>
            <stop offset="53.95%" stop-color="rgba(0, 71, 255, 0.09)"></stop>
            <stop offset="100%" stop-color="rgba(10, 14, 23, 0)"></stop>
          </radialGradient>
          <radialGradient id=":R1d6:-mobile" cy="100%">
            <stop offset="0%" stop-color="rgba(56, 189, 248, 0.3)"></stop>
            <stop offset="53.95%" stop-color="rgba(0, 71, 255, 0.09)"></stop>
            <stop offset="100%" stop-color="rgba(10, 14, 23, 0)"></stop>
          </radialGradient>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="url(#:R1d6:-desktop)"
          class="hidden lg:block"
        ></rect>
        <rect
          width="100%"
          height="100%"
          fill="url(#:R1d6:-mobile)"
          class="lg:hidden"
        ></rect>
      </svg>
      <div
        class="absolute inset-x-0 bottom-0 right-0 h-px bg-white mix-blend-overlay lg:left-auto lg:top-0 lg:h-auto lg:w-px"
      ></div>
    </div>

    <div
      class="relative justify-center sm:justify-start flex w-full lg:pointer-events-auto lg:mr-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem] lg:overflow-y-auto lg:overflow-x-hidden lg:pl-[max(4rem,calc(50%-38rem))]"
    >
      <div
        class="max-w-lg mx-auto lg:mx-0 lg:flex lg:w-96 lg:max-w-none lg:flex-col lg:before:pt-6 justify-center items-center"
      >
        <div class="pt-20 pb-16 sm:pb-20 sm:pt-32 lg:py-20 h-fit">
          <div class="relative">
            <div class="max-w-xs mx-auto">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/mendoka-game.appspot.com/o/Logo%2Fmendoka_logo.png?alt=media&token=9c93c587-b3a9-401a-9f54-593ca95e8e48"
              />
            </div>
            <h1
              class="mt-14 font-display text-2xl text-center font-light text-white"
            >
              From Pixels to Wonders
            </h1>
            <p
              class="mx-auto mt-4 text-sm/6 text-gray-300 text-center max-w-xs sm:max-w-sm px-5"
            >
              A Solo developer who strives to turn every pixel into an
              extraordinary wonder.
            </p>

            <div
              class="mt-8 flex items-center justify-center gap-x-10 gap-y-3 sm:gap-x-2 lg:justify-center"
            >
              <div class="block space-y-3 sm:space-y-0 sm:flex">
                <div
                  @click="
                    () => {
                      router.push({ name: 'Events' });
                    }
                  "
                  class="hover:cursor-pointer flex-none group relative isolate flex items-center rounded-lg px-2 py-0.5 text-[0.8125rem]/6 font-medium text-white/30 transition-colors hover:text-sky-300 gap-x-3"
                >
                  <MenuButton
                    title="Events"
                    svgPath="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                  />
                </div>
                <div
                  @click="
                    () => {
                      router.push({ name: 'Games' });
                    }
                  "
                  class="hover:cursor-pointer flex-none group relative isolate flex items-center rounded-lg px-2 py-0.5 text-[0.8125rem]/6 font-medium text-white/30 transition-colors hover:text-sky-300 gap-x-3"
                >
                  <MenuButton
                    title="Games"
                    svgPath="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </div>
              </div>

              <div class="block space-y-3 sm:space-y-0 sm:flex">
                <div
                  @click="
                    () => {
                      router.push({ name: 'About' });
                    }
                  "
                  class="hover:cursor-pointer flex-none group relative isolate flex items-center rounded-lg px-2 py-0.5 text-[0.8125rem]/6 font-medium text-white/30 transition-colors hover:text-sky-300 gap-x-3"
                >
                  <MenuButton
                    title="About"
                    svgPath="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </div>
                <div
                  @click="
                    () => {
                      router.push({ name: 'Contact' });
                    }
                  "
                  class="hover:cursor-pointer flex-none group relative isolate flex items-center rounded-lg px-2 py-0.5 text-[0.8125rem]/6 font-medium text-white/30 transition-colors hover:text-sky-300 gap-x-3"
                >
                  <MenuButton
                    title="Contact"
                    svgPath="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </div>
              </div>
            </div>
            <div
              class="flex items-end justify-center flex-1 pt-3 pb-4 lg:justify-center lg:pb-6"
            >
              <p
                class="flex items-baseline gap-x-2 text-[0.8125rem]/6 text-gray-500"
              >
                Support me on

                <a
                  class="group relative isolate flex items-center rounded-lg px-2 py-0.5 text-[0.8125rem]/6 font-medium text-white/30 transition-colors hover:text-sky-300 gap-x-2"
                  href="https://ko-fi.com/mendoka"
                  target="_blank"
                >
                  <MenuButton
                    title="Kofi"
                    svgPath="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
