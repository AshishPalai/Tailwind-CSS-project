import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav
        class="w-full h-14 bg-indigo-200 flex justify-between
        px-4 items-center md:px-4"
      >
        <div class="text-2xl text-indigo-700 font-bold">Artificial Intelligence</div>
        <ul class="text-xl md:flex hidden font-semibold ">
          <li class="mx-[10px] cursor-pointer">Home</li>
          <li class="mx-[10px] cursor-pointer">About Us</li>
          <li class="mx-[10px] cursor-pointer">Contact Us</li>
        </ul>
        <div
          class="hidden md:block px-2 py-2 bg-indigo-700 text-white rounded
          font-bold cursor-pointer"
        >
          Login/Signup
        </div>
        <div class="md:hidden">
          <a class="text-4xl" href="#">
            {" "}
            &#8801;
          </a>
        </div>
      </nav>

      {/* Student Section */}

      <header class="w-full h-auto">
        <img
          class="w-full hidden md:block"
          src="https://i.pinimg.com/564x/f3/c6/7c/f3c67cd577ba0e18083df7cdd165c6ca.jpg"
          alt=""
          srcset=""
        />
        <img
          class="w-full md:hidden"
          src="https://i.pinimg.com/474x/5c/b1/97/5cb19711445c68f0d6a21edd4773db52.jpg"
          alt=""
          srcset=""
        />
      </header>

      <div class="h-auto w-100 flex flex-wrap flex-col items-center text-center p-10">
        <div class="w-full h-auto flex flex-wrap flex-col items-center">
          <p class="text-indigo-800 font-bold text-3xl md:text-4xl text-center">
            "Pure Hardwork, No Shortcuts!"
          </p>
          <div
            class="w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl
             md:mt-4 mb-12 items-center text-center"
          ></div>
          <div class="w-full flex flex-wrap justify-evenly ">
            <div class="w-50 flex flex-col item-center mb-12">
              <img class="w-50 h-44" 
              src="https://i.pinimg.com/236x/db/26/18/db261825c698d6a982262c34e4db4755.jpg" alt="" />
              <p class="text-2xl font-bold text-black">500+</p>
              <p class="text-2xl font-bold text-gray-500">Different Application</p>
            </div>
            <div class="w-46 flex flex-col item-center mb-12">
              <img class="w-50 h-44" 
              src="https://i.pinimg.com/236x/66/87/2b/66872b75886cefaf298b0dc9e98b2982.jpg" alt="" />
              <p class="text-2xl font-bold text-black">700,000+</p>
              <p class="text-2xl font-bold text-gray-500">Student Enrolled</p>
            </div>
            <div class="w-46 flex flex-col item-center mb-12">
              <img class="w-50 h-44" 
              src="https://i.pinimg.com/564x/7f/82/f5/7f82f50915fe46d9979a960da40895ba.jpg" alt="" />
              <p class="text-2xl font-bold text-black">10,000+</p>
              <p class="text-2xl font-bold text-gray-500">
                Sucessful Transation
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Section */}

      <div class="h-auto w-100 flex flex-wrap flex-col items-center text-center p-10">
        <div class="w-full h-auto flex flex-wrap flex-col items-center">
          <p class="text-indigo-800 font-bold text-3xl md:text-4xl text-center">
            "Our Products"
          </p>
          <div
            class="w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl
             md:mt-4 mb-12 items-center text-center"
          ></div>
        </div>
        <div class="w-[90%] h-auto flex flex-wrap justify-around">
          <div
            class="w-64 flex flex-col items-center mb-12 border-black border-2
           rounded-xl p-2"
          >
            <img class="h-48 w-46" 
            src="https://i.pinimg.com/236x/a8/96/e7/a896e73429c7028d4dd5d0a5c53782ee.jpg" alt="" />
            <p class="text-2xl font-bold text-black">AI Skills Lab</p>
            <p class="text-xl font-bold text-gray-500">
              Supercharge your project development with our robust lab.
            </p>
          </div>
          <div class="w-64 flex flex-col items-center mb-12  p-2">
            <img class="h-48 w-46" 
            src="https://i.pinimg.com/564x/96/a3/98/96a398842cf66d4f363aac07be642fbc.jpg" alt="" />
            <p class="text-2xl font-bold text-black">Job portal</p>
            <p class="text-xl font-bold text-gray-500">
            Job portals are websites or online platforms that connect job seekers with potential employers.
            </p>
          </div>
          <div class="w-64 flex flex-col items-center mb-12 p-2">
            <img class="h-48 w-46" 
            src="https://i.pinimg.com/236x/d8/4e/67/d84e6702453ded4878b0e55f791e3795.jpg" alt="" />
            <p class="text-2xl font-bold text-black">Experience Portal</p>
            <p class="text-xl font-bold text-gray-500">
            Online courses can help you learn the basics of AI, such as the common algorithms, frameworks, and tools
            </p>
          </div>
          <div class="w-64 flex flex-col items-center mb-12  border-black border-2
           rounded-xl p-2">
            <img class="h-48 w-46" 
            src="https://i.pinimg.com/236x/08/be/1e/08be1ea1888a648ca71a9af0c6c8813a.jpg"
             alt="" />
            <p class="text-2xl font-bold text-black">AI Command</p>
            <p class="text-xl font-bold text-gray-500">
            AI commands are instructions that are given to AI agents to tell them what to do.
            </p>
          </div>
        </div>
      </div>

      {/* //Footer Section */}

      <footer
        className="w-full bg-gray-900 px-4 pt-8 flex flex-col
      md:flex-row  flex-wrap justify-between md:px-12 text-white font-bold"
      >
        <div>
          <img class="w-50 h-40" 
          src="https://i.pinimg.com/236x/32/bc/4b/32bc4bb5a1f35d9d983b0bada40ff471.jpg" alt="" />
          <p class="my-4">Email Us: palaiashish924@gmail.com</p>
          <p class="my-4">Contacts: +91 9348188456</p>
          
        </div>
        <div>
          <h2 class="font-bold text-xl">PW Skills</h2>
          <div class="w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2"></div>
          <div>
            <p>About Us</p>
            <p>FAQs</p>
            <p>Privacy Policy</p>
            
          </div>
        </div>
        <div>
          <h2 class="font-bold text-xl">Products</h2>
          <div class="w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2"></div>
          <div>
            <p>AI Skills Lab</p>
            <p>Job Portal</p>
            <p>Experience Portal</p>
            <p>AI Command</p>
          </div>
        </div>
        <div>
          <h2 class="font-bold text-xl">Skills</h2>
          <div class="w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2"></div>
          <div>
            <p>Discord Channel</p>
            <p>AI Youtube</p>
            <p>Links</p>
          </div>
        </div>
      </footer>
      <p class="text-center items-center font-bold">Copyrights@2024 by Ashish Palai</p>
    </>
  );
}

export default App;
