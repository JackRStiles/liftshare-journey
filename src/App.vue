<template>
  <header class="has-background-primary">
    <router-link to="/journey">liftshare</router-link>
  </header>
  <div class="columns">
    <div class="column m-4 is-one-quarter-desktop">
      <router-view />
    </div>
    <div class="column is-hidden-touch"></div>
  </div>
</template>

<style>
@import "@/assets/base.css";

header {
  padding: 20px;
  color: #fff;
  font-weight: 600;
}

a {
  color: #fff;
  font-size: 1.5rem;
}

a:hover,
a:focus,
a:active {
  text-decoration: underline;
  color: #fff;
}
</style>
