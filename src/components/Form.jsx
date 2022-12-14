import ErrorMessage from "./ErrorMessage";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  // Create a function to handle the form submission
  const onSubmit = async (data) => {
    const isDarkMode = document.documentElement.classList.contains("dark");

    reset();
    toast.success("Thanks for subscribing!", {
      toastId: "success",
      role: "status",
      theme: isDarkMode ? "dark" : "light",
    });
  };

  // When the form is submitted, but there are errors
  const onInvalid = () => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    toast.error("Please check your email", {
      toastId: "error",
      role: "alert",
      theme: isDarkMode ? "dark" : "light",
    });
  };

  return (
    <form
      className="relative mx-auto mt-4 grid w-full max-w-[39.375rem] gap-y-3 md:grid-cols-[2.15fr,1fr] md:gap-x-4 md:gap-y-2"
      onSubmit={handleSubmit(onSubmit, onInvalid)}
    >
      <input
        placeholder="Your email address"
        className={`w-full rounded-full border-2 border-gray-300 p-2 text-custom-gray placeholder-custom-gray transition-colors duration-300 ease-in-out dark:border-gray-700 dark:bg-gray-900 dark:text-stone-50 dark:placeholder-stone-50 md:p-3 ${
          errors.email
            ? "!border-red-500 !outline-red-500 hover:border-red-500"
            : "focus:border-custom-blue"
        }`}
        // If there are errors in the email field, add a class to the input
        aria-invalid={errors.email ? "true" : "false"}
        aria-describedby={errors.email ? "email-error" : null}
        {...register("email", {
          required: {
            value: true,
            message: "Please add your email",
          },
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Please enter a valid email",
          },
        })}
      />
      <button className="block w-full rounded-full bg-custom-blue p-2 text-white transition-colors duration-300 ease-in-out hover:bg-pale-blue dark:text-gray-900">
        Notify Me
      </button>
      {errors.email?.type === "required" && (
        <ErrorMessage id="email-error">{errors.email.message}</ErrorMessage>
      )}
      {errors.email?.type === "pattern" && (
        <ErrorMessage id="email-error">{errors.email.message}</ErrorMessage>
      )}
    </form>
  );
};

export default Form;
