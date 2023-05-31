<script src="./script.js"></script>
<style lang="scss" scoped src="./style.scss"></style>

<template>
  <div class="add-blog_modal">
    <img
      src="@/assets/images/close.png"
      alt="close"
      class="add-blog_modal_close"
      @click="closeEditBlog"
    />
    <div class="container">
      <div v-if="!sttSuccess">
        <h4 class="text-center">EDIT BLOG</h4>
        <b class="text-danger text-center d-block">{{ dataShowNoticeAlert }}</b>
        <form @submit.prevent="submitForm(dataEditBlog.id)">
          <div class="mb-3">
            <label for="inputTitle" class="form-label">Title</label>
            <input
              type="text"
              class="form-control"
              id="inputTitle"
              v-model="dataEditBlog.title"
              required
            />
          </div>
          <div class="mb-3">
              <label for="content" class="form-label">Content</label>
            <textarea
              type="text"
              class="form-control"
              id="content"
              v-model="dataEditBlog.content"
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
      <div v-if="sttSuccess">
        <h4 class="text-center text-success">EDIT SUCCESS</h4>
        <div class="btn btn-success btn-ok" @click="closeEditBlog">OK</div>
      </div>
    </div>
  </div>
</template>
