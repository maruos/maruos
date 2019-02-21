# Devices

Find specific installation instructions, recommended accessories, and more for your device:

<ul>
  <li v-for="page in $site.pages.filter(p => /devices\/\w+\.html/.test(p.path))">
    <router-link v-bind:to="page.path">
      {{ page.title }}
    </router-link>
  </li>
</ul>

::: tip Note
Recommended accessories may contain affiliate links. Please use these links when purchasing accessories if you would like to support Maru.
:::
