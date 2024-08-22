import { axiosInstance } from ".";

export const getSupportedLanguages = async () => {
  try {
    const response = await axiosInstance.get(
      "/translation/supported-languages"
    );
    return response.data;
  } catch (error) {
    return error;
  }
};
