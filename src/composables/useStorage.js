import { storage, storageReference, uploadBytes } from "@/firebase/config";
import { ref } from "vue";

let useStorage = (path) => {
  let error = ref("");
  //  add file to firebase storage
  let addFile = async (file) => {
    try {
      const storageRef = storageReference(storage, `${path}/${file.name}`);
      if (path && file) {
        let res = await uploadBytes(storageRef, file);
        return res;
      } else {
        throw new Error("Can't reach your process!");
      }
    } catch (err) {
      error.value = err.message;
    }
  };

  return { error, addFile };
};

export default useStorage;
