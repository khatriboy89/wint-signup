import { useState } from "react";
import { useForm } from "react-hook-form";
import "./Form.css";
import {Form1} from "./Form1";
// import { useNavigate } from "react-router-dom"

function Form2() {
  const intiallValues = {
    street: "",
    addInfo: "",
    zip: "",
    code: "",
    phone: "",
    email: "",
  };
  // const [formmValue, setFormmValues] = useState(intiallValues);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ shouldUseNativeValidation: true });
  const onSubmit = async  (data) => {
    // data.preventDefault();
    console.log(data);
  };

  
  // const handlechange = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   setFormmValues({...formmValue, [name] : value})
  //   register(name, {required : "Please fill this feild"});
  // }
  return (
    <div className="cards">
      <div className="card2">
        <form className="full2" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="heading2">Contact Details </h1>

          <input
            type="text"
            name="street"
            // value={formmValue.street}
            // onChange={handlechange}
            placeholder="Street +Nr"
            className="Street"
            {...register("Street", { required: "Please enter your Street", maxLength: 50 })}
          />
          <br />

          <input
            type="text"
            name="addInfo"
            // value={formmValue.addInfo}
            // onChange={handlechange}
            placeholder="Additonal Information"
            className="Add-info"
            {...register("addInfo", { required: "Please enter your addInfo" })}
          />
          <br />

          <input
            type="number"
            name="zip"
            // value={formmValue.zip}
            // onChange={handlechange}
            placeholder="Zip"
            className="zip"
            {...register("Zip", { required: "Please enter your Zip" , maxLength: 10})}
          />

          <select id="Place" name="Place" className="place">
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
            type="number"
            name="code"
            // value={formmValue.code}
            // onChange={handlechange}
            placeholder="Code +"
            className="code"
            {...register("code", { required: "Please enter your code" })}
          />

          <input
            type="number"
            name="phone"
            // value={formmValue.phone}
            // onChange={handlechange}
            placeholder="Phone number"
            className="phne"
            {...register("phone", { required: "Please enter your phone", maxLength: 10})}
          />
          <br />
          <input
            type="email"
            name="email"
            // value={formmValue.email}
            // onChange={handlechange}
            placeholder="Your Email"
            className="email"
            {...register("email", { required: "Please enter your email",
            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          })}
          />
          <br />
          <input type="checkbox" id="terms" name="terms" 
          {...register("terms", { required: "Please enter your terms" })}/>
          <span>
            {" "}
            <label for="html" className="terms">
              I do accept the{" "}
              <a href="#" target="blank" style={{ color: "white" }}>
                Terms and Condition 
              </a>
              of your site.
            </label>
            <br></br>
          </span>
          <br />
          <button className="button">
            Register Badge
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form2;
