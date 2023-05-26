import { db } from "@/firebase/config";
import { ref } from "vue";

let getDoc = (path) => {
  let data = ref();
  let error = ref("");
  //   get data from firebase
  try {
    db.collection(path)
      //   .orderBy("id", "desc")
      .onSnapshot((snap) => {
        data.value = snap.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
      });
  } catch (err) {
    error.value = err.message;
  }
  return { data, error };
};

export default getDoc;
