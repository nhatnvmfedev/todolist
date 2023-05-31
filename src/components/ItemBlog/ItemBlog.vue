<script src="./script.js"></script>
<style lang="scss" scoped src="./style.scss"></style>

<template>
  <li class="media py-3 col-md-6">
    <span class="edit-blog" @click="editBlog(data.id)">
      <i class="bi bi-pencil-square text-danger"></i>
    </span>
    <div class="d-flex align-item-start " @click="handleGoToDetailBlog(data.id)">
      <img :src="data.img" class="list-unstyled_img mr-3" :alt="data.title" />
      <div class="media-body text-left">
        <h5 class="mt-0 mb-1">{{ data.title }}</h5>
        <p>{{ data.content }}</p>
      </div>
    </div>
  </li>
</template>
