<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-12 col-md-6 mb-4">
        <AddQualification></AddQualification>
      </div>
      <div class="col-12 col-md-6 mb-4"><AddProject></AddProject></div>
      <div class="col-12 col-md-6 mb-4"><AddSkill></AddSkill></div>
    </div>
  </div>
</template>

<script>
import AddSkill from "../components/AddSkill";
import AddProject from "../components/AddProject";
import AddQualification from "../components/AddQualification";
export default {
  components: {
    AddSkill,
    AddProject,
    AddQualification,
  },
};
</script>

<style>
</style>