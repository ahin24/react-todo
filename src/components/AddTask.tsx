import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

type AddTaskProps = {
  onAdd: (text: string) => void;
};

// validation schema with Yup
const validationSchema = Yup.object({
  task: Yup.string().trim().required("Task is required"),
});

function AddTask({ onAdd }: AddTaskProps) {
  return (
    <Formik
      initialValues={{ task: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onAdd(values.task);
        resetForm(); // clear form after add
      }}
    >
      {() => (
        <Form style={{ marginBottom: "20px" }}>
          <Field
            name="task"
            type="text"
            placeholder="Enter a task"
            style={{ marginRight: "8px" }}
          />
          <button type="submit">Add</button>
          <div style={{ color: "red", marginTop: "4px" }}>
            <ErrorMessage name="task" />
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default AddTask;
