<script setup lang="ts">
import { RouteNameProvider, RoutePathProvider } from '@/provider';
</script>

<template>
  <div class="header">
    <nav class="nav-links">
      <router-link :to=RoutePathProvider.home>{{ RouteNameProvider.home }}</router-link>
      <router-link :to=RoutePathProvider.products>{{ RouteNameProvider.products }}</router-link>
      <router-link :to=RoutePathProvider.customers>{{ RouteNameProvider.customers }}</router-link>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
.nav-links {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 1rem;
  margin: 1rem 0;

  a {
    color: var(--link-color);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>