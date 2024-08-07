<template>
  <footer class="h-[90rem] bg-primary pt-[14rem]">
    <div class="container h-full flex flex-col justify-between">
      <p class="text-base pb-[5.6rem]">Is there a project?</p>
      <div class="flex">
        <section class="max-w-[46.4rem] mr-[36.8rem]">
          <div class="flex items-baseline">
            <h1
              class="text-5xl underline decoration-1 underline-offset-8 leading-none"
            >
              <span
                >Let’s work
                <span
                  >to<span class="no-underline inline-block">g</span>ether</span
                >
              </span>
            </h1>
          </div>
        </section>
        <layout-contact-info />
      </div>
      <layout-social-media>
        <div class="flex justify-center">
          <nuxt-link to="/">
            <ui-button variant="circle big colored" aria-label="Start">
              Go
            </ui-button>
          </nuxt-link>
        </div>
      </layout-social-media>
    </div>
  </footer>
</template>
