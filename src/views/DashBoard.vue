<template>
  <div class="container py-5">
    <RegisterPage></RegisterPage>
    <div class="row">
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
export default {
  components: {
    RegisterPage,
    AddSkill,
    AddProject,
    AddQualification,
  },
};
</script>

<style>
</style>