<template>
  <div class="container py-3">
    <div class="h6 text-center alert alert-info">
      Due to an issue with the hosting, I am currently only able to offer
      preview of my project with
      <a href="#description">Description.</a>
    </div>
    <div class="h6 text-center alert alert-info">
      I apologize for any inconvenience caused and appreciate your
      understanding. Thank you.
    </div>
    <div class="row" v-if="project">
      <div
        class="col-12 col-md-6 mb-4"
        v-for="usage in project.usages"
        :key="usage"
      >
        <ProjectPhoto :image="usage"></ProjectPhoto>
      </div>
    </div>
    <div class="alert alert-info border border-danger" id="description">
      <h1 class="border-bottom border-danger h5 mb-2 pb-2 text-danger">
        Description For Mini Shopping Site
      </h1>
      <div class="row" v-if="project">
        <div
          class="col-12 col-md-6 col-lg-4 p-3"
          v-for="des in project.descriptions"
          :key="des.id"
        >
          <h4 class="h6 mb-1">
            {{ des.title }}
          </h4>
          <ul>
            <li v-for="detail in des.detail" :key="detail">
              {{ detail }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectPhoto from "./ProjectPhoto";
import getUserData from "@/composables/getUserData";
import { onMounted, ref } from "vue";

export default {
  components: { ProjectPhoto },
  props: {
    id: { type: String, requierd: true },
    slug: { type: String, required: true },
  },
  setup(props) {
    let { userData } = getUserData();

    let project = ref(null);

    onMounted(() => {
      project.value = userData.projects.find(
        (pj) => pj.id === parseInt(props.id)
      );
    });

    return { project };
  },
};
</script>

<style>
</style>