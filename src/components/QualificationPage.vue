<template>
  <h2 class="text-center text-white mt-3" id="qualification">QUALIFICATIONS</h2>
  <div class="row mt-3">
    <div
      class="col-12 col-md-6 col-lg-4 mb-4"
      v-for="qualification in data"
      :key="qualification.name"
    >
      <div class="card bg-gray text-white hScale p-2 m-0">
        <div class="card-title text-center">
          {{ qualification.name }}
        </div>
        <QualificationPhoto :image="qualification.image"></QualificationPhoto>
      </div>
    </div>
  </div>
</template>

<script>
import QualificationPhoto from "./QualificationPhoto";
import getDoc from "@/composables/getDoc";

export default {
  components: { QualificationPhoto },
  setup() {
    let { data } = getDoc("qualifications");

    return { data };
  },
};
</script>

<style>
</style>