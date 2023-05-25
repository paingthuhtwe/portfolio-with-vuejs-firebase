import {
  storage,
  storageReference,
  uploadBytes,
  getDownloadURL,
} from "@/firebase/config";
import { ref } from "vue";

let useStorage = (path) => {
  let error = ref("");
  //  add file to firebase storage
  let addFile = async (file) => {
    try {
      const storageRef = storageReference(storage, `${path}/${file}`);
      if (path && file) {
        let res = await uploadBytes(storageRef);
        return res;
      } else {
        throw new Error("Can't reach your process!");
      }
    } catch (err) {
      error.value = err.message;
    }
  };

  let getFile = async (file) => {
    try {
      const storageRef = storageReference(storage, `${path}/${file}`);
      if (path && file) {
        let url = await getDownloadURL(storageRef);
        return url;
      } else {
        throw new Error("Can't reach your process!");
      }
    } catch (err) {
      error.value = err.message;
    }
  };
  return { error, addFile, getFile };
};

export default useStorage;
