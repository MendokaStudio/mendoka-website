<template>
  <div
    class="no-scrollbar relative flex-auto min-h-screen h-screen overflow-auto"
  >
    <div
      class="pointer-events-none absolute inset-0 z-50 overflow-hidden lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem] lg:overflow-visible"
    >
      <svg
        class="absolute left-[max(0px,calc(50%-18.125rem))] top-0 h-full w-1.5 lg:left-full lg:ml-1 xl:left-auto xl:right-1 xl:ml-0"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id=":R1t6:"
            width="6"
            height="8"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 0H6M0 8H6"
              class="stroke-sky-900/10 dark:stroke-white/10 xl:stroke-white/10"
              fill="none"
            ></path>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#:R1t6:)"></rect>
      </svg>
    </div>
    <main
      class="py-20 space-y-20 sm:space-y-32 sm:py-32 mt-[-100px] md:mt-[-200px] lg:mt-0"
    >
      <slot></slot>
    </main>
  </div>
</template>
