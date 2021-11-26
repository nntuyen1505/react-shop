import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuth } from "../../../hook/useAuth";

const schema = yup
  .object({
    firstName: yup.string().required("FirstName is a required field"),
    lastName: yup.string().required("LastName is a required field"),
    email: yup.string().email().required("Email is a required field"),
    password: yup
      .string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  })
  .required();

export default function NewCustomer() {

  let{logUp}=useAuth()
  const [errorLogup,  setErrorLogup]=useState('')


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async(dataFormRegister) => {
    let res = await logUp(dataFormRegister)
    if(res){
      setErrorLogup(res)
    }else if(dataFormRegister.error){
      setErrorLogup(res.errorLogup)
    }
  }

  return (
    <div className="col-12 col-md-6">
      {/* Card */}
      <div className="card card-lg">
        <div className="card-body">
          {/* Heading */}
          <h6 className="mb-7">New Customer</h6>
          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-12">
              <p className="error-class">{errorLogup}</p>

                {/* Email */}
                <div className="form-group">
                  <label className="sr-only" htmlFor="registerFirstName">
                    First Name *
                  </label>
                  <input
                    className={`form-control form-control-sm ${errors?.firstName ? "errorborder":""}`}
                    type="text"
                    placeholder="First Name *"
                    {...register("firstName")}
                  />
                  <p className="error-class">{errors.firstName?.message}</p>
                </div>
              </div>
              <div className="col-12">
                {/* Email */}
                <div className="form-group">
                  <label className="sr-only" htmlFor="registerLastName">
                    Last Name *
                  </label>
                  <input
                    className={`form-control form-control-sm ${errors?.lastName ? "errorborder":""}`}
                    type="text"
                    placeholder="Last Name *"
                    {...register("lastName")}
                  />
                  <p className="error-class">{errors.lastName?.message}</p>
                </div>
              </div>
              <div className="col-12">
                {/* Email */}
                <div className="form-group">
                  <label className="sr-only" htmlFor="registerEmail">
                    Email Address *
                  </label>
                  <input
                    className={`form-control form-control-sm ${errors?.email ? "errorborder":""}`}
                    type="email"
                    placeholder="Email Address *"
                    {...register("email")}
                  />
                  <p className="error-class">{errors.email?.message}</p>
                </div>
              </div>
              <div className="col-12 col-md-6">
                {/* Password */}
                <div className="form-group">
                  <label className="sr-only" htmlFor="registerPassword">
                    Password *
                  </label>
                  <input
                    className={`form-control form-control-sm ${errors?.password ? "errorborder":""}`}
                    type="password"
                    placeholder="Password *"
                    {...register("password")}
                  />
                  <p className="error-class">{errors.password?.message}</p>
                </div>
              </div>
              <div className="col-12 col-md-6">
                {/* Password */}
                <div className="form-group">
                  <label className="sr-only" htmlFor="registerPasswordConfirm">
                    Confirm Password *
                  </label>
                  <input
                    className={`form-control form-control-sm ${errors?.passwordConfirmation ? "errorborder":""}`}
                    type="password"
                    placeholder="Confrm Password *"
                    {...register("passwordConfirmation")}
                  />
                  <p className="error-class">
                    {errors.passwordConfirmation?.message}
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-auto">
                {/* Link */}
                <div className="form-group font-size-sm text-muted">
                  By registering your details, you agree with our Terms &amp;
                  Conditions, and Privacy and Cookie Policy.
                </div>
              </div>
              <div className="col-12 col-md">
                {/* Newsletter */}
                <div className="form-group">
                  <div className="custom-control custom-checkbox">
                    <input
                      className="custom-control-input"
                      id="registerNewsletter"
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="registerNewsletter"
                    >
                      Sign me up for the Newsletter!
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-12">
                {/* Button */}
                <button className="btn btn-sm btn-dark" type="submit">
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
