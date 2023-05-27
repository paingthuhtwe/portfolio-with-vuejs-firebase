<template>
  <div class="row mt-4 mb-3" id="about">
    <div
      class="col-12 col-lg-6 d-flex justify-content-center align-items-center mb-5"
      style="height: 460px"
    >
      <img
        class="sBottom"
        style="width: 320px"
        :src="img_url"
        :alt="user.image"
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
              >:
              <span class="hColor">
                {{ user.age }}
              </span></span
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
              <a :href="`tel:${user.phone}`" class="hColor">{{
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
              <a :href="`mailto:${user.email}`" class="hColor">{{
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
import { storage, storageReference, getDownloadURL } from "@/firebase/config";
import { onMounted, ref } from "vue";

export default {
  props: ["user"],
  setup(props) {
    let img_url = ref();

    onMounted(async () => {
      const storageRef = storageReference(storage, `user/${props.user.image}`);
      let res = await getDownloadURL(storageRef);
      img_url.value = res;
    });

    return { img_url };
  },
};
</script>

<style>
</style>