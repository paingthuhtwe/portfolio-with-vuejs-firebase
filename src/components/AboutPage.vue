<template>
  <div class="row mt-4 mb-3" id="about">
    <div
      class="col-12 col-lg-6 d-flex justify-content-center align-items-center"
      style="height: 460px"
    >
      <img
        class="sBottom"
        style="width: 320px"
        src="https://lh3.google.com/u/0/d/1Xgfrk8yszY6pG6flVIJGBo16hwXUzGur=w3360-h950-iv1"
        alt=""
      />
    </div>
    <div
      class="col-12 col-lg-6 mb-4 d-flex flex-column justify-content-center sBottom p-3"
      style="height: 500px"
    >
      <h2 class="text-white">ABOUT ME</h2>
      <p class="text-secondary hColor">
        {{ user.description }}
      </p>
      <ul class="list-group">
        <li class="list">
          <span class="row">
            <span class="col-3 text-white"><b>Name</b> </span
            ><span class="col-9 text-secondary"
              >:
              <span class="hColor">
                {{ user.name }}
              </span></span
            >
          </span>
        </li>
        <li class="list">
          <span class="row">
            <span class="col-3 text-white"><b>Age</b> </span
            ><span class="col-9 text-secondary"
              >: <span class="hColor">19</span></span
            >
          </span>
        </li>
        <li class="list">
          <span class="row">
            <span class="col-3 text-white"><b>Address</b> </span
            ><span class="col-9 text-secondary"
              >: <span class="hColor">{{ user.address }}</span></span
            >
          </span>
        </li>
        <li class="list">
          <span class="row">
            <span class="col-3 text-white"><b>Phone</b> </span
            ><span class="col-9 text-secondary"
              >:
              <a href="tel:+959780909574" class="hColor">{{
                user.phone
              }}</a></span
            >
          </span>
        </li>
        <li class="list">
          <span class="row">
            <span class="col-3 text-white"><b>Email</b> </span
            ><span class="col-9 text-secondary"
              >:
              <a href="mailto:paingthuhtwe.official@gmail.com" class="hColor">{{
                user.email
              }}</a></span
            >
          </span>
        </li>
      </ul>
      <div>
        <a
          :href="user.cv_url"
          download
          class="btn btn-danger rounded-5 px-4 py-2 mt-3"
        >
          <b>Download CV</b>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["user"],
};
</script>

<style>
</style>