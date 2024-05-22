"use client";

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  mobile: string;
};

type ResumeProps = {
  data: Inputs | null;
};

const Resume = ({ data }: ResumeProps) => {
  data = {
    name: "Rahul",
    email: "Rahul@gmail.com",
    mobile: "89452784788",
  };
  if (!data) return;
  return (
    <div>
      <div className="flex justify-between items-start">
        <h1 className="text-white mb-5 text-3xl">
          {data.name ? `${data.name}'s Resume` : ""}{" "}
        </h1>
        <div className="flex items-center gap-4">
          <a href="download">
            <button
              className="bg-slate-400 rounded-sm p-2 text-white disabled:opacity-70"
              disabled
            >
              Download
            </button>
          </a>
        </div>
      </div>
      <div className="p-10 w-full min-h-screen bg-white text-black rounded-sm">
        <h1>{data.name}</h1>
        <h1>{data.email}</h1>
        <h1>{data.mobile}</h1>
      </div>
    </div>
  );
};

const AddDetails = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const [data, setData] = useState<Inputs | null>(null);
  const onSubmit: SubmitHandler<Inputs> = (values) => {
    setData(values);
  };
  //console.log(watch("name"));

  return (
    <div className="grid grid-cols-4 w-3/4 gap-10">
      <div className="col-span-2">
        <h1 className="text-white text-bold text-2xl">
          Please fill in the details{" "}
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
          <label>Full Name</label>
          <input
            {...register("name", { required: true })}
            className="w-full h-10 p-2 outline-none shadow-sm border"
            placeholder="Full name"
          />
          {errors.name && (
            <span className="text-red-400 font-bold">Name is required</span>
          )}

          <label>Email ID</label>
          <input
            {...register("email", { required: true })}
            className="w-full h-10 p-2 outline-none shadow-sm border"
            placeholder="Email ID"
          />

          {errors.email && (
            <span className="text-red-400 font-bold">Email is required</span>
          )}

          <label>Mobile</label>
          <input
            {...register("mobile", { required: true })}
            className="w-full h-10 p-2 outline-none shadow-sm border"
            placeholder="Mobile"
          />
          {errors.mobile && (
            <span className="text-red-400 font-bold">Mobile is required</span>
          )}

          <input
            type="submit"
            className="bg-gray-400 p-3 w-fit text-slate-900 mt-5"
          />
        </form>
      </div>

      <div className="col-span-2">
        <Resume data={data} />
      </div>
    </div>
  );
};

export default AddDetails;
