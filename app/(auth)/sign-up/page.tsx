import FormSignup from "@/components/auth/formSignup";

const SignUp = () => {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl text-foreground">Create an account</h1>
      <FormSignup />
    </div>
  );
};

export default SignUp;
