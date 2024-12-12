import FormSignin from "@/components/auth/formSignin";


const SignIn = () => {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl text-gray-900">Sign In to your account</h1>
      <FormSignin />
    </div>
  );
};

export default SignIn;
