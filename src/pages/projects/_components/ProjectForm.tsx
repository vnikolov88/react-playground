import * as React from "react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { redirect, useNavigate } from "react-router-dom";
import Loading from "../../../components/Loading";
import Modal from "../../../components/Modal";
import { useProject } from "../../../hooks/useProject";

type Props = {
  projectId?: string

};

const ProjectForm = ({ projectId }: Props) => {
  let navigate = useNavigate();
  const { data, isLoading, error, upsertProject } = useProject(projectId);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isDirty },
    reset
  } = useForm<{
    id?: string;
    title: string;
    color: string;
  }>({
    defaultValues: {
      title: data?.title,
      color: data?.color
    },
  });

  const onSubmit = async (values: { id?: string; title: string; color: string; }) => {
    await upsertProject(values);
  };

  useEffect(() => {
    if (data)
      reset(data);
  }, [data]);

  const [dialog, setDialog] = useState({
    message: "",
    openModal: false,
    title: ""
  });

  const handleDialog = (message: string, openModal: boolean, title: string) => {
    setDialog({
      message,
      openModal,
      title
    });
  };

  const handleCancel = () => {
    if (isDirty && !isSubmitSuccessful)
      handleDialog("You will lost the data", true, "Cancel confirmation");
    else {
      return navigate("/projects");
    }
  };

  const areSureCancel = (choose: boolean) => {
    if (choose) {
      return navigate("/projects");
    } else {
      handleDialog("", false, "");
    }
  };

  return (
    <div>
      <div className="container max-w-screen-sm">
        <h1 className="text-3xl font-bold mb-10">
          {data ? "Edit Project" : "Create Project"}
        </h1>
        <div className="mt-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            {data != null && <><div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                id
              </label>
            </div><input disabled={true} defaultValue={data?.id} className="input input-bordered w-full "
              /></>}
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Name
              </label>
            </div>
            <input placeholder="billing system zgt client" maxLength={50} className="input input-bordered w-full "
              {...register("title", {
                required: true,
                maxLength: 50,
              })}
            />
            {errors?.title?.type === "required" && <p className="text-red-600">This field is required</p>}
            {errors?.title?.type === "maxLength" && (
              <p className="text-red-600">Title cannot exceed 50 characters</p>
            )}
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Color
              </label>
              <input placeholder="#000" maxLength={7} className="input input-bordered w-full max-w-xs"
                {...register("color", {
                  required: true,
                  maxLength: 7,
                  pattern: /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/i
                })
                } />
              {errors?.color?.type === "required" && <p className="text-red-600">This field is required</p>}
              {errors?.color?.type === "pattern" && (
                <p className="text-red-600">Please fill a correct color</p>
              )}
            </div>
            {error && <div className="mt-4">  <p className="text-red-600">
              Something are wrong with your project, please check your fields or contact System Administrator</p>
            </div>}
            {isSubmitSuccessful && !error && <div className="mt-4">  <p className="text-green-600">
            Your project has been successfully saved</p>
            </div>}
            <div className="float mt-4 space-x-4">
              <div className="float-left">
                <button type="submit" className="btn btn-md">Save</button>
              </div>
              {!data &&
                <div className="float-left ">
                  <button type="button" onClick={() => reset()} className="btn btn-md">Reset Form</button>
                </div>}
              <div className="float-right">
                <button type="button" className="btn btn-info" onClick={() => handleCancel()}>Cancel</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {isLoading && <Loading />}
      {dialog.openModal && <Modal message={dialog.message} title={dialog.title} setChoice={areSureCancel} />}
    </div>
  );
};

export default ProjectForm;

