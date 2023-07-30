<script setup>
const webinar = reactive({ details: {}, speakers: [], points: [] });
const loaded = reactive({ webinar: false, details: false, points: false });

const { data: details } = await useAsyncData("details", () =>
  $fetch("https://webinar-api.eazzysocial.blog/webinar_details")
);
const { data: speakers } = await useAsyncData("speakers", () =>
  $fetch("https://webinar-api.eazzysocial.blog/speakers")
);
const { data: points } = await useAsyncData("points", () =>
  $fetch("https://webinar-api.eazzysocial.blog/points")
);
</script>

<template>
  <Suspense>
    <div>
    <Navbar />
    <HeroSection :webinar="details.items[0]" :speakers="speakers.items" />
    <ContentWebinar :webinar="details.items[0]" :speakers="speakers.items" :points="points.items" />
    <Speakers :speakers="speakers.items" />
    <Foote></Foote>
  </div>
  <template #pending>
    <div class="w-screen h-screen flex flex-col items-center justify-center">
      <lottie-player
        src="https://assets8.lottiefiles.com/packages/lf20_dkz94xcg.json"
        background="transparent"
        speed="1"
        class="h-32 w-auto"
        loop
        autoplay
      ></lottie-player>
  
      <p class="text-sm font-semibold text-gray-700 leading-6 text-center mt-2">
        loading Webinar ...
      </p>
    </div>
  </template>
  </Suspense>
</template>
