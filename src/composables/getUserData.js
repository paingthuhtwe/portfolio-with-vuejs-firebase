import sourceData from "@/data.json";

let getUserData = () => {
  const userData = sourceData.users.find((user) => user.id === 1);
  return { userData };
};

export default getUserData;
