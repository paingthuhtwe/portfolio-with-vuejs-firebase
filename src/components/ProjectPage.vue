<template>
  <h2 class="text-white text-center mt-3" id="project">MY RECENT PROJECTS</h2>
  <div class="row">
    <div
      class="col-12 col-md-4 px-2 py-0"
      v-for="project in data"
      :key="project"
    >
      <div class="card bg-gray mb-3">
        <div class="card-body p-2">
          <router-link to="/" class="decoration-none">
            <ProjectPhoto :image="project.image"></ProjectPhoto>
            <div class="card-title h6 mt-2 mb-1 text-center text-white project">
              {{ project.name }}
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectPhoto from "./ProjectPhoto";
import getDoc from "@/composables/getDoc";

export default {
  components: { ProjectPhoto },
  setup() {
    let { data, error } = getDoc("projects");

    return { data, error };
  },
};
</script>

<style>
.project:hover {
  text-decoration: underline white;
}
.bg-gray {
  background: rgb(85, 115, 126) !important;
}
</style>