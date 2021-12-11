import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Redirect } from "react-router";
import AuthServices from "../../services/authServices";
import { useDispatch, useSelector } from "react-redux";
import { ERROR_LOGIN, LOGIN_SUCCESS } from "../../../store/type";

const schema = yup
  .object({
    email: yup.string().email().required("Email is a required field"),
    password: yup
      .string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  })
  .required();

export default function ReturningCustomer() {
  const dispatch = useDispatch();
  const { user, errorLogin } = useSelector((store) => store.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  /*Login */
  const onSubmit = async (dataFormLogin) => {
    let dataLogin = await AuthServices.login(dataFormLogin);
    console.log(dataLogin);

    try{
      if (dataLogin.data) {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: dataLogin.data,
        });
      } else if (dataLogin.error) {
        dispatch({
          type: ERROR_LOGIN,
          payload: dataLogin.error,
        });
      }
    }
    catch(error){
      console.log(error)
    }
  };
  /*Login */

  if (user) {
    return <Redirect to="/account" />;
  }

  return (
    <div className="col-12 col-md-6">
      {/* Card */}
      <div className="card card-lg mb-10 mb-md-0">
        <div className="card-body">
          {/* Heading */}
          <h6 className="mb-7">Returning Customer</h6>
          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-12">
                {/* Email */}

                <p className="error-class">{errorLogin}</p>

                <div className="form-group">
                  <label className="sr-only" htmlFor="loginEmail">
                    Email Address *
                  </label>
                  <input
                    className={`form-control form-control-sm ${
                      errors?.email ? "errorborder" : ""
                    }`}
                    type="email"
                    placeholder="Email Address *"
                    {...register("email")}
                  />
                  <p className="error-class">{errors.email?.message}</p>
                </div>
              </div>
              <div className="col-12">
                {/* Password */}
                <div className="form-group">
                  <label className="sr-only" htmlFor="loginPassword">
                    Password *
                  </label>
                  <input
                    className={`form-control form-control-sm ${
                      errors?.password ? "errorborder" : ""
                    }`}
                    type="password"
                    placeholder="Password *"
                    {...register("password")}
                  />
                  <p className="error-class">{errors.password?.message}</p>
                </div>
              </div>
              <div className="col-12 col-md">
                {/* Remember */}
                <div className="form-group">
                  <div className="custom-control custom-checkbox">
                    <input
                      className="custom-control-input"
                      id="loginRemember"
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="loginRemember"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-auto">
                {/* Link */}
                <div className="form-group">
                  <a
                    className="font-size-sm text-reset"
                    data-toggle="modal"
                    href="#modalPasswordReset"
                  >
                    Forgot Password?
                  </a>
                </div>
              </div>
              <div className="col-12">
                {/* Button */}
                <button className="btn btn-sm btn-dark" type="submit">
                  Sign In
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
