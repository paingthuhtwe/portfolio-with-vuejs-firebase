<template>
  <div class="container py-5">
    <div v-if="!user">
      <RegisterPage></RegisterPage>
    </div>
    <div class="row" v-if="user">
      <div class="col-12 col-md-6 mb-3">
        <AddQualification></AddQualification>
      </div>
      <div class="col-12 col-md-6 mb-3"><AddSkill></AddSkill></div>
      <div class="col-12 col-md-6 mb-3"><AddProject></AddProject></div>
    </div>
  </div>
</template>

<script>
import RegisterPage from "../components/RegisterPage";
import AddSkill from "../components/AddSkill";
import AddProject from "../components/AddProject";
import AddQualification from "../components/AddQualification";
import getUser from "../composables/getUser";

export default {
  components: {
    RegisterPage,
    AddSkill,
    AddProject,
    AddQualification,
  },

  setup() {
    let { user } = getUser();

    return { user };
  },
};
</script>

<style>
</style>