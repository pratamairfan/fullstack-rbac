import { ThemeProvider } from "@/components/ui/theme-provider";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="bg-[url('/images/pattern.svg')]">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen">
          <div className="w-full bg-background rounded-lg shadow-md mt-0 max-w-md">
            {children}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default AuthLayout;
