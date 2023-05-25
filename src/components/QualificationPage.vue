<template>
  <h2 class="text-center text-white mt-3" id="qualification">QUALIFICATIONS</h2>
  <div class="row mt-3">
    <div
      class="col-12 col-md-6 col-lg-4 mb-4"
      v-for="qualification in qualifications"
      :key="qualification.id"
    >
      <div class="card bg-gray text-white hScale p-2 m-0">
        <div class="card-title text-center">
          {{ qualification.name }}
        </div>
        <img
          :src="qualification.image_url"
          alt=""
          class="card-img border shadow-sm"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["qualifications"],
};
</script>

<style>
</style>