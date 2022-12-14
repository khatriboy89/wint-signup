import { useState } from "react";
import { useForm } from "react-hook-form";
import "./Form.css";

function Form1() {
  const intialValues = {
    title: "title",
    fname: "",
    lname: "",
    company: "",
    business: "",
    employees: "",
  };
  const [formValues, setFormValues] = useState(intialValues);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="cards">
      <div className="card1">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="full">
            <h1 className="heading">General Information </h1>

            <select
              id="title"
              name="title"
              className="labl"
              onClick={(e) => {
                setFormValues(e.target.value);
              }}
            >
              <option value="" disabled selected hidden>
                {formValues.title}
              </option>
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              console.log(title);
            </select>
            <br />

            <input
              type="text"
              // value={formValues.fname}
              // onChange={(e) => setFormValues(e.target.value)}
              placeholder="First Name"
              className="fname"
              {...register("fname", { required: "first name is required" })}
            />
            {/* <error>
                              {errors.fname?.type ==="required" && "First Name is required"}
                            </error> */}

            <input
              type="text"
              value={formValues.lname}
              onChange={(e) => setFormValues(e.target.value)}
              placeholder="Last Name"
              className="lname"
            />
            <br />

            <select id="Position" name="Position" className="posi">
              <option value="" disabled selected hidden>
                Position
              </option>
              <option value="Software Developer">Software Developer</option>
              <option value="Junior Software Developer">
                Junior Software Developer
              </option>
            </select>
            <br />
            <input
              type="text"
              value={formValues.company}
              onChange={(e) => setFormValues(e.target.value)}
              placeholder="Company"
              className="posi"
            />
            <br />

            <input
              type="text"
              value={formValues.business}
              onChange={(e) => setFormValues(e.target.value)}
              placeholder="Business Arena"
              className="fname"
            />

            <select id="Position" name="Position" className="lname">
              <option value="" disabled selected hidden>
                Employees
              </option>
              <option value="">10</option>
              <option value="">20</option>
            </select>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form1;
