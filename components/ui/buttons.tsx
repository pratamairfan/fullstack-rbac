import { useFormStatus } from "react-dom";

type Props = {
  text: string;
};

export const Buttons = ({ text } : Props) => {
  const {pending} = useFormStatus();

  return (
    <button
      disabled={pending}
      type="submit"
      className="w-full text-white bg-teal-500 hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
    >
      {pending ? "Loading..." : text}
    </button>
  );
};
