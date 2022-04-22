import { toast } from "react-toastify";

export const handleUpdateUserProfile = async function ({
  e,
  state,
  email,
  setusername,
}) {
  e.preventDefault();
  setusername(email);
  const id = toast.loading("Loading...");
  setTimeout(() => {
    toast.update(id, {
      render: "Logged in",
      type: "success",
      isLoading: false,
      autoClose: 2000,
    });
  }, 1000);
};
