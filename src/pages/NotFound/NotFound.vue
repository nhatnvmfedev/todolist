<script src="./script.js"></script>
<style lang="scss" scoped src="./style.scss"></style>

<template>
  <div class="container">
    <div class="col-md-6 mx-auto">
      <img src="@/assets/images/404.png" alt="404" class="w-100">
      <div>
        <router-link to="/" class="d-grid gap-2 col-6 mx-auto text-decoration-none">
          <button class="btn btn-success py-3" type="button">Go To HomePage</button>
        </router-link>
      </div>
    </div>
  </div>
</template>
