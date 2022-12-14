import { useState } from "react";
import { useForm } from "react-hook-form";
import "./Form.css";

function Form2() {
  const intiallValues = {
    street: "",
    addInfo: "",
    zip: "",
    code: "",
    phone: "",
    email: "",
  };
  const [formmValue, setFormmValues] = useState(intiallValues);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="cards">
      <div className="card2" >
        <form className="full2" >
          <h1 className="heading2">Contact Details </h1>

          <input
            type="text"
            value={formmValue.street}
            onChange={(e) => setFormmValues(e.target.value)}
            placeholder="Street +Nr"
            className="Street"
            {...register("street", { required: true })}
          />
          <error>
            {errors.fname?.type === "required" && "First Name is required"}
          </error>
          <br />

          <input
            type="text"
            value={formmValue.addInfo}
            onChange={(e) => setFormmValues(e.target.value)}
            placeholder="Additonal Information"
            className="Add-info"
          />
          <br />

          <input
            type="text"
            value={formmValue.zip}
            onChange={(e) => setFormmValues(e.target.value)}
            placeholder="Zip"
            className="zip"
          />

          <select id="Place" name="Place" className="place" >
            <option value="" disabled selected hidden>
              Place
            </option>
            <option value="Software Developer">Software Developer</option>
            <option value="Junior Software Developer">
              Junior Software Developer
            </option>
            <option value="Project Manager">Project Manager</option>
          </select>
          <br />
          <select id="country" name="country" className="country">
            <option value="" disabled selected hidden>
              Country
            </option>
            <option value="Software Developer">Software Developer</option>
            <option value="Junior Software Developer">
              Junior Software Developer
            </option>

            <option value="Project Manager">Project Manager</option>
            <option value="VP of Engineering">VP of Engineering</option>
            <option value="HR Manager">HR Manager</option>
            <option value="GROWTH HACKER">GROWTH HACKER</option>
          </select>
          <br />
          <input
            type="text"
            value={formmValue.code}
            onChange={(e) => setFormmValues(e.target.value)}
            placeholder="Code +"
            className="code"
          />

          <input
            type="tel"
            value={formmValue.phone}
            onChange={(e) => setFormmValues(e.target.value)}
            placeholder="Phone number"
            className="phne"
          />
          <br />
          <input
            type="email"
            value={formmValue.email}
            onChange={(e) => setFormmValues(e.target.value)}
            placeholder="Your Email"
            className="email"
          />
          <br />
          <input type="checkbox" id="terms" name="terms" value="" />
          <span>
            {" "}
            <label for="html" className="terms">
              I do accept the{" "}
              <a href="#" target="blank" style={{color: "white"}}>
                Terms and Condition {"\n"}
              </a> 
              of your site.
            </label>
            <br></br>
          </span>
          <br />
          <button className="button" onSubmit={handleSubmit(onSubmit)}>
            Register Badge
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form2;
