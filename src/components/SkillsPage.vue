<template>
  <div class="row rounded-2">
    <h2 class="text-center text-white my-3">PROGRAMMING SKILLS</h2>
    <div
      class="col-6 col-md-4 col-lg-3 px-2 py-0"
      v-for="skill in skills"
      :key="skill.id"
    >
      <div class="alert alert-info sBottom">
        <div class="h6">{{ skill.name }}</div>
        <div class="progress bg-white" style="height: 7.5px">
          <div
            class="progress-bar progress-bar-striped progress-bar-animated bg-primary"
            :class="`w-${skill.skill}`"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["skills"],
};
</script>

<style>
</style>