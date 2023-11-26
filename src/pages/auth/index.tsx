import {
  BackButton,
  Mail,
  NameIcon,
  ShowPwd,
  WhiteLogoPin,
} from "@/components/Icons/Icons";
import { AuthStyles } from "@/styles/Auth/Signup";

const Login = () => {
  return (
    <AuthStyles>
      <div className="fl">
      <div className="logo-div-mobile">
        <WhiteLogoPin />
      </div>
        <div className="logo-div-desktop">
          <WhiteLogoPin />
        </div>
        <div className="form-div">
          <BackButton href="/" />
          <div className="intro">
            <h3>Welcome back!!!</h3>
            <p>
              Manage Your Meds Like a Pro with Kimiko managing a chronic
              condition like diabetes{" "}
            </p>
          </div>
          <form>
            <div className="fg">
              <div className="form-ele">
                <label htmlFor="">Full Name</label>
                <div className="inp">
                  <input
                    type="text"
                    name="name"
                    id=""
                    placeholder="Okoye Jude"
                  />
                  <NameIcon />
                </div>
              </div>
              <div className="form-ele">
                <label htmlFor="">Email Address</label>
                <div className="inp">
                  <input
                    type="email"
                    name="email"
                    id=""
                    placeholder="jude@gmail.com"
                  />
                  <Mail />
                </div>
              </div>
              <div className="form-ele">
                <label htmlFor="">Password</label>
                <div className="inp">
                  <input type="password" name="pwd" id="" />
                  <ShowPwd />
                </div>
              </div>
            </div>
            <div className="btn">
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </AuthStyles>
  );
};

export default Login;
