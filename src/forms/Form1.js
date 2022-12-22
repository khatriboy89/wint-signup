import { useState } from "react";
import { useForm } from "react-hook-form";
import "./Form.css";

function Form1() {
  const intialValues = {
    title: "",
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
  } = useForm({ shouldUseNativeValidation: true });
  // const onSubmit = (data) => console.log(data);

  const onSubmit = (data) => {
    data.preventDefault();
    console.log(formValues);
    
  };
  const handlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormValues({...formValues, [name] : value})
    console.log(formValues);
  }
  
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
              onClick={handlechange}
            >
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
            </select>
            <br />

            <input
              type="text"
              name = "fname"
              value={formValues.fname}
              onChange={handlechange}
              
              placeholder="First Name"
              className="fname"
              {...register("firstName", { required: "Please enter your first name." })}
            />
            <error>
                              {errors.fname?.type ==="required" && "First Name is required"}
                            </error>

            <input
              type="text"
              name = 'lname'
              value={formValues.lname}
              onChange={handlechange}
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
              name = 'company'
              value={formValues.company}
              onChange={handlechange}
              placeholder="Company"
              className="posi"
            />
            <br />

            <input
              type="text"
              name='business'
              value={formValues.business}
              onChange={handlechange}
              placeholder="Business Arena"
              className="fname"
            />

            <select id="Position" name="employees" className="lname">
              <option value="" disabled selected hidden>
                Employees
              </option>
              <option value="10">10</option>
              <option value="20">20</option>
            </select>
           
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form1;
