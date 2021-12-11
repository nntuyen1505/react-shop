import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import AuthServices from "../../services/authServices";
import { useDispatch, useSelector } from "react-redux";
import { ERROR_UPDATE, UPDATE_SUCCESS } from "../../../store/type";

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
    newPassword: yup
      .string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  })
  .required();

export function PersonalInfo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();
  const { user, errorUpdate } = useSelector((store) => store.auth);

  const onSubmit = async (dataFormUpdate) => {
    // console.log(dataFormUpdate);
    alert("Update successful!");
    let res = await AuthServices.updateInfo(dataFormUpdate);
    try{

      if (res.data) {
        dispatch({ type: UPDATE_SUCCESS, payload: res.data });
      } else if (res.error) {
        console.log(res.error);
        dispatch({ type: ERROR_UPDATE, payload: res.error });
      }
    }
    catch(error){
      console.log(error)
    }

    localStorage.setItem("data", JSON.stringify(res.data));
    localStorage.setItem("token", JSON.stringify(res.data.token));
  };

  return (
    <>
      {user ? (
        <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-12 col-md-6">
                {/* Email */}
                <div className="form-group">
                  <label htmlFor="accountFirstName">First Name *</label>
                  <input
                    className="form-control form-control-sm"
                    type="text"
                    placeholder="First Name *"
                    {...register("firstName")}
                  />
                  <p className="error-class">{errors.firstName?.message}</p>
                </div>
              </div>
              <div className="col-12 col-md-6">
                {/* Last Name */}
                <div className="form-group">
                  <label htmlFor="accountLastName">Last Name *</label>
                  <input
                    className="form-control form-control-sm"
                    type="text"
                    placeholder="Last Name *"
                    // value={user.lastName}
                    {...register("lastName")}
                  />
                  <p className="error-class">{errors.lastName?.message}</p>
                </div>
              </div>
              <div className="col-12">
                {/* Email */}
                <div className="form-group">
                  <label htmlFor="accountEmail">Email Address *</label>
                  <input
                    className="form-control form-control-sm"
                    type="email"
                    placeholder="Email Address *"
                    value={user.email}
                    {...register("email")}
                  />
                  <p className="error-class">{errors.email?.message}</p>
                </div>
              </div>
              <div className="col-12 col-md-6">
                {/* Password */}
                <div className="form-group">
                  <label htmlFor="accountPassword">Current Password *</label>
                  <input
                    className="form-control form-control-sm"
                    type="password"
                    placeholder="Current Password *"
                    {...register("password")}
                  />
                  <p className="error-class">{errors.password?.message}</p>
                </div>
              </div>
              <div className="col-12 col-md-6">
                {/* Password */}
                <div className="form-group">
                  <label htmlFor="AccountNewPassword">New Password *</label>
                  <input
                    className="form-control form-control-sm"
                    type="password"
                    placeholder="New Password *"
                    {...register("newPassword")}
                  />
                  <p className="error-class">{errors.newPassword?.message}</p>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                {/* Birthday */}
                <div className="form-group">
                  {/* Label */}
                  <label>Date of Birth</label>
                  {/* Inputs */}
                  <div className="form-row">
                    <div className="col-auto">
                      {/* Date */}
                      <label className="sr-only" htmlFor="accountDate">
                        Date
                      </label>
                      <select
                        className="custom-select custom-select-sm"
                        id="accountDate"
                        {...register("accountDate")}
                      >
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                        <option value={9}>9</option>
                        <option value={10}>10</option>
                        <option value={11}>11</option>
                        <option value={12}>12</option>
                        <option value={13}>13</option>
                        <option value={14}>14</option>
                        <option value={15}>15</option>
                        <option value={16}>16</option>
                        <option value={17}>17</option>
                        <option value={18}>18</option>
                        <option value={19}>19</option>
                        <option value={20}>20</option>
                        <option value={21}>21</option>
                        <option value={22}>22</option>
                        <option value={23}>23</option>
                        <option value={24}>24</option>
                        <option value={25}>25</option>
                        <option value={26}>26</option>
                        <option value={27}>27</option>
                        <option value={28}>28</option>
                        <option value={29}>29</option>
                        <option value={30}>30</option>
                        <option value={31}>31</option>
                      </select>
                    </div>
                    <div className="col">
                      {/* Date */}
                      <label className="sr-only" htmlFor="accountMonth">
                        Month
                      </label>
                      <select
                        className="custom-select custom-select-sm"
                        id="accountMonth"
                        {...register("accountMonth")}
                      >
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                        <option value={9}>9</option>
                        <option value={10}>10</option>
                        <option value={11}>11</option>
                        <option value={12}>12</option>
                      </select>
                    </div>
                    <div className="col-auto">
                      {/* Date */}
                      <label className="sr-only" htmlFor="accountYear">
                        Year
                      </label>
                      <select
                        className="custom-select custom-select-sm"
                        id="accountYear"
                        {...register("accountYear")}
                      >
                        <option value={2021}>2021</option>
                        <option value={2020}>2020</option>
                        <option value={2019}>2019</option>
                        <option value={2018}>2018</option>
                        <option value={2017}>2017</option>
                        <option value={2016}>2016</option>
                        <option value={2015}>2015</option>
                        <option value={2014}>2014</option>
                        <option value={2013}>2013</option>
                        <option value={2012}>2012</option>
                        <option value={2011}>2011</option>
                        <option value={2010}>2010</option>
                        <option value={2009}>2009</option>
                        <option value={2008}>2008</option>
                        <option value={2007}>2007</option>
                        <option value={2006}>2006</option>
                        <option value={2005}>2005</option>
                        <option value={2004}>2004</option>
                        <option value={2003}>2003</option>
                        <option value={2002}>2002</option>
                        <option value={2001}>2001</option>
                        <option value={2000}>2000</option>
                        <option value={1999}>1999</option>
                        <option value={1998}>1998</option>
                        <option value={1997}>1997</option>
                        <option value={1996}>1996</option>
                        <option value={1995}>1995</option>
                        <option value={1994}>1994</option>
                        <option value={1993}>1993</option>
                        <option value={1992}>1992</option>
                        <option value={1991}>1991</option>
                        <option value={1990}>1990</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                {/* Gender */}
                <div className="form-group mb-8">
                  <label>Gender</label>
                  <div className="btn-group-toggle" data-toggle="buttons">
                    <label className="btn btn-sm btn-outline-border active">
                      <input type="radio" /> Male
                    </label>
                    <label className="btn btn-sm btn-outline-border">
                      <input type="radio" /> Female
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-12">
                {/* Button */}
                <button className="btn btn-dark" type="submit">
                  Save Changes
                </button>
              </div>
            </div>
          </form>
        </div>
      ) : null}
    </>
  );
}
