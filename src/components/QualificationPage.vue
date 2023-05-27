<template>
  <h2 class="text-center text-white mt-3" id="qualification">QUALIFICATIONS</h2>
  <div v-if="!user">
    <RegisterPage></RegisterPage>
  </div>
  <div class="row mt-3" v-if="user">
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
import RegisterPage from "./RegisterPage";
import QualificationPhoto from "./QualificationPhoto";
import getDoc from "@/composables/getDoc";
import getUser from "@/composables/getUser";

export default {
  components: {
    RegisterPage,
    QualificationPhoto,
  },
  setup() {
    let { data } = getDoc("qualifications");

    let { user } = getUser();

    return { data, user };
  },
};
</script>

<style>
</style>