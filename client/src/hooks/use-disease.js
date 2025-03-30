import { useMutation } from "@tanstack/react-query";
import api_methods from "../lib/api";
import { useDispatch } from "react-redux";
import { setDiseaseData } from "@/Redux/Slices/diseaseDataSlice";

export const useDiseaseDetection = () => {
  const dispatch = useDispatch();
  return useMutation({
    mutationFn: (data) =>
      api_methods.postRequest("http://192.168.70.35:5001/", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }),
    onSuccess: (data) => {
      dispatch(setDiseaseData(data.data));
    },
  });
};
