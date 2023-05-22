<template>
  <h2 class="text-white text-center mt-5" id="project">MY RECENT PROJECTS</h2>
  <div class="row">
    <div
      class="col-12 col-md-4 px-2 py-0"
      v-for="project in projects"
      :key="project.id"
    >
      <div class="card bg-secondary mb-3">
        <div class="card-body p-2">
          <a
            :href="project.project_url"
            class="decoration-none position-relative"
          >
            <img :src="project.image_url" alt="" class="card-img" />
            <div class="card-title h5 mt-2 mb-1 text-center text-white">
              {{ project.name }}
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["projects"],
};
</script>

<style>
</style>