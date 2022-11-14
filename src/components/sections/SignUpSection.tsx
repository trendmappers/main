import Wrapper from "components/containers/layouts/Wrapper";
import ImageSection from "components/containers/pagesections/ImageSection";
import { default as heroImage } from "../../../public/images/bg.jpg";
import emailjs from "@emailjs/browser";
import { useRef } from 'react';



const SignUpSection = () => {

const handleSubmit = (e:any) => {
  e.preventDefault();
  let name = e.target.elements.name.value;
  let phone = e.target.elements.phone.value;
  let email = e.target.elements.email.value;
  let values = {
    "to_name":"The Trend Mappers Team",
    "from_name":name,
    "message":phone,
    "reply_to":email,
  }
  emailjs
      .send(
        "service_fxm6dsk",
        "template_qak5lwt",
        values,
        "CQzcJkPZnTbkX1oI1"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Your Message was Received!");
        },
        (error) => {
          console.log(error.text);
          alert("Error: Message not received.");
        }
      );
};
  const form:any = useRef();
  return (
    <ImageSection
      image={heroImage}
      className="bg-black bg-opacity-70"
      height="h-[500px]"
      sectionId="learn-more"
    >
      <div className="absolute top-[20%] w-full translate-y-[-20%]">
        <Wrapper className="h-full space-y-10 text-center text-white">
          <div className="space-y-5">
            <h1 className="title-page mx-auto max-w-4xl">
               Learn More Today!
            </h1>
            <p className="mx-auto max-w-md">
              Lets go! Give me a little more information about the Trend Mappers and the Starfish Platform!<br /><br />
              <hr /><br />
              GET OUR INFORMATION AND START SAVING NOW.
            </p>
          </div>
          <form ref={form} onSubmit={handleSubmit}>
              <div className="form-group mb-6">
                <input type="text" id="name" name="name" className="form-control block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Full Name" />
              </div>
              <div className="form-group mb-6">
                <input type="email" id="email" name="email" className="form-control block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="jbrown@myemail.com" />
              </div>
              <div className="form-group mb-6">
                <input type="text" id="phone" name="phone" className="form-control block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="801.555.5555" />
              </div>
              <button type="submit" className="
                w-full
                px-6
                py-2.5
                bg-blue-600
                text-white
                font-medium
                text-xs
                leading-tight
                uppercase
                rounded
                shadow-md
                hover:bg-blue-700 hover:shadow-lg
                focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                active:bg-blue-800 active:shadow-lg
                transition
                duration-150
                ease-in-out">Get Info Packet</button>
            </form>
        </Wrapper>
      </div>
    </ImageSection>
  );
};

export default SignUpSection;
