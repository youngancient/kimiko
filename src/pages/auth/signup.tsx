import { UserTypeOptions } from "@/components/Auth/Auth";
import {
  BackButton,
  Mail,
  NameIcon,
  ShowPwd,
  WhiteLogoPin,
} from "@/components/Icons/Icons";
import { ErrorStyles } from "@/styles/Auth/Login";
import { AuthStyles, SignupStyles } from "@/styles/Auth/Signup";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";

export interface IUserType {
  name: string;
  isSelected: boolean;
}
const AllUserTypes: IUserType[] = [
  { name: "Patient", isSelected: false },
  { name: "Doctor", isSelected: false },
];
interface IForm {
  fullname: string;
  email: string;
  password: string;
}

const SignUp = () => {
  const [userType, setUserType] = useState<string | undefined>();
  const [savedUserTypes, setSavedUserTypes] = useState(AllUserTypes);
  const selectUserType = (name: string) => {
    const newUserTypes = savedUserTypes.map((ele) => {
      return { ...ele, isSelected: name === ele.name };
    });
    console.log(newUserTypes);
    setSavedUserTypes(newUserTypes);
  };
  const saveUserType = () => {
    const selectedType = savedUserTypes.find((ele) => ele.isSelected == true);
    setUserType(selectedType?.name);
  };

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    mode: "onBlur",
    defaultValues: {
      fullname: "",
      email: "",
      password: "",
    },
  });

  const router = useRouter();
  const signup = (data: IForm) => {
    console.log(data);
    router.push("/auth")
  };
  return (
    <SignupStyles>
      <div className="fl">
        <div className="logo-div-mobile">
          <WhiteLogoPin />
        </div>
        <div className="logo-div-desktop">
          <WhiteLogoPin />
        </div>
        <div className="form-div">
          <BackButton href="/" />
          {userType ? (
            <>
              <div className="intro">
                <h3>Create Account</h3>
                <p>
                  Manage Your Meds Like a Pro with Kimiko managing a chronic
                  condition like diabetes{" "}
                </p>
              </div>
              <form onSubmit={handleSubmit(signup)}>
                <div className="fg">
                  <div className="form-ele">
                    <label htmlFor="">Full Name</label>
                    <div className="inp">
                      <input
                        type="text"
                        {...register("fullname", {
                          required: "Full name is required",
                        })}
                        id="name"
                        placeholder="Okoye Jude"
                      />
                      <NameIcon />
                    </div>
                    {errors?.fullname && errors.fullname.message && (
                      <ErrorStyles>Full Name is required</ErrorStyles>
                    )}
                  </div>
                  <div className="form-ele">
                    <label htmlFor="">Email Address</label>
                    <div className="inp">
                      <input
                        type="email"
                        {...register("email", {
                          required: "Email is required",
                        })}
                        id="email"
                        placeholder="jude@gmail.com"
                      />
                      <Mail />
                    </div>
                    {errors?.email && errors.email.message && (
                      <ErrorStyles> Email is required</ErrorStyles>
                    )}
                  </div>
                  <div className="form-ele">
                    <label htmlFor="">Password</label>
                    <div className="inp">
                      <input
                        type="password"
                        {...register("password", {
                          required: "Password is required",
                          minLength: 8,
                        })}
                        id="pwd"
                      />
                      <ShowPwd />
                    </div>

                    {errors?.password && errors.password.message && (
                      <ErrorStyles> Password is required</ErrorStyles>
                    )}
                    {errors?.password &&
                      errors?.password.type === "minLength" && (
                        <ErrorStyles>min length is 8</ErrorStyles>
                      )}
                  </div>
                </div>
                <div className="btn">
                  <button type="submit">Create Account</button>
                </div>
                <div className="nav">
                  <p>
                    Already have an account?{" "}
                    <Link href="/auth">
                      <strong>Login</strong>
                    </Link>
                  </p>
                </div>
              </form>
            </>
          ) : (
            <>
              <div className="intro">
                <h3>Welcome to Kimiko!</h3>
                <p>
                  To help you manage your medications better we need to make the
                  right choice. Please choose from the option below{" "}
                </p>
              </div>
              <div className="choose">
                {savedUserTypes.map((ele, index) => (
                  <UserTypeOptions
                    key={index}
                    name={ele.name}
                    isSelected={ele.isSelected}
                    handleSelect={() => selectUserType(ele.name)}
                  />
                ))}
              </div>
              <div className="btn">
                <button type="button" onClick={saveUserType}>
                  Next
                </button>
              </div>
              <div className="nav">
                <p>
                  Already have an account?{" "}
                  <Link href="/auth">
                    <strong>Login</strong>
                  </Link>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </SignupStyles>
  );
};

export default SignUp;
