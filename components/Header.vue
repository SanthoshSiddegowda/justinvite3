<template>
  <div>
    <header class="header-holder center-relative relative">
      <div class="header-logo">
        <a href="/"><img src="/images/logo.png" alt="Just invite logo" /></a>
      </div>

      <div class="wrapper" v-if="path == '/'">
        <div class="mobile-display">
          <div class="inner">
            <article>
              <div class="last">
                <div class="image-slider-wrapper">
                  <div class="slider-wrapper">
                    <ul id="slider6" class="image-slider slides center-text">
                      <li>
                        <a href="/wedding"
                          ><img src="/demo-images/banner_main_2.png" alt=""
                        /></a>
                      </li>
                      <li>
                        <img src="/demo-images/wed_banner.png" alt="" />
                      </li>
                    </ul>
                  </div>
                  <div
                    class="slider6_pagination carousel_pagination left"
                  ></div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>

      <div class="header-txt" v-if="path == '/'">
        <h1 class="entry-title">
          <span class="entry-title cd-headline letters type">
            <span>Provides </span>
            <span class="cd-words-wrapper waiting">
              <b class="is-visible">Wedding Invitation</b>
              <b>Event Invitation</b>
              <b>Conferance Invitation</b>
            </span>
            <span class="sec-line">to suit all your needs.</span>
          </span>
        </h1>
      </div>

      <div class="header-txt" v-if="path == '/wedding/'">
        <div class="header-fix-for-wedding-page">
          <h1 class="entry-title">
            <span class="entry-title cd-headline letters type">
              <span>Wedding Invitation</span>
              <span class="cd-words-wrapper waiting">
                <b class="is-visible">Ethnic</b>
                <b>Professional</b>
                <b>Innovative</b>
              </span>
              <span class="sec-line">to suit all your needs.</span>
            </span>
          </h1>
        </div>
      </div>

      <div
        class="header-txt"
        v-if="path == '/coming-soon/' || path == '/coming-soon'"
      >
        <h1 class="entry-title">
          <span class="entry-title cd-headline letters type">
            <span>Thanks !!! Process in Development .. </span>
            <span class="cd-words-wrapper waiting">
              <b class="is-visible">We are Coming Soon</b>
            </span>
            <span class="sec-line">to suit all your needs.</span>
          </span>
        </h1>
      </div>

      <div class="toggle-holder absolute">
        <div id="toggle" class="">
          <div class="first-menu-line"></div>
          <div class="second-menu-line"></div>
          <div class="third-menu-line"></div>
          <div class="fourth-menu-line"></div>
        </div>
      </div>

      <div class="clear"></div>
    </header>
  </div>
</template>

<script>
export default {
  setup() {
    const route = useRouter();

    const path = computed(() => route.currentRoute.value.path);

    return {
      path,
    };
  },
};
</script>

<style></style>
