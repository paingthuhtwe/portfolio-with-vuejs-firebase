<template>
  <h2 class="text-center text-white" id="qualification">QUALIFICATIONS</h2>
  <div class="row mt-3">
    <div
      class="col-12 col-md-6 col-lg-4 mb-4"
      v-for="qualification in qualifications"
      :key="qualification.id"
    >
      <div class="card alert alert-primary hScale p-2 m-0 sBottom">
        <div class="card-title fw-bold text-center">
          {{ qualification.name }}
        </div>
        <img
          :src="qualification.image_url"
          alt=""
          class="card-img border shadow-sm"
          data-bs-toggle="modal"
          data-bs-target="#PWDC"
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