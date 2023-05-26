import { auth } from "@/firebase/config";
import { ref } from "vue";

let useAuth = () => {
  let error = ref();
  let register = async (email) => {
    const password = "#MgPanda#";
    try {
      let res = await auth.createUserWithEmailAndPassword(email, password);
      if (!res) {
        throw new Error("Already Submitted with your email!");
      }
      return res;
    } catch (err) {
      error.value = err.message;
    }
  };
  let login = async (email) => {
    const password = "#MgPanda#";
    try {
      let res = await auth.signInWithEmailAndPassword(email, password);
      if (!res) {
        throw new Error("Already Submitted with your email!");
      }
      return res;
    } catch (err) {
      error.value = err.message;
    }
  };
  return { register, error, login };
};

export default useAuth;
