import { db } from "@/firebase/config";
import { ref } from "vue";

let useCollection = (path) => {
  let error = ref("");
  // add new doc to firebase
  let addDoc = async (doc) => {
    try {
      let res = await db.collection(path).add(doc);
      if (!res) {
        throw new Error("Can't reach your process!");
      }
      return res;
    } catch (err) {
      error.value = err.message;
    }
  };
  return { error, addDoc };
};

export default useCollection;
