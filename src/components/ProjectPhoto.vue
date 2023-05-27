<template>
  <img :src="img_url" class="card-img" :alt="image" />
</template>

<script>
import { onMounted, ref } from "vue";
import { storage, getDownloadURL, storageReference } from "@/firebase/config";

export default {
  props: ["image"],
  setup(props) {
    let img_url = ref("");
    onMounted(async () => {
      try {
        const storageRef = storageReference(storage, `projects/${props.image}`);
        let _url = await getDownloadURL(storageRef);
        img_url.value = _url;
      } catch (err) {
        console.log(err);
      }
    });
    return { img_url };
  },
};
</script>

<style>
</style>