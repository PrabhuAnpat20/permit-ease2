"use client"

// import { useState } from "react";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";
function App() {

  const downloadpdf = () => {
    const capture = document.querySelector(".receipt");
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL("image/jpeg"); // Use 'image/jpeg' format
      const { width, height } = canvas; // Get the width and height of the captured content
      const doc = new jsPDF({
        orientation: width > height ? "l" : "p", // Choose landscape or portrait based on content dimensions
        unit: "px", // Set unit to pixels
        format: [width, height], // Set PDF page size to match content dimensions
      });
      doc.addImage(imgData, "JPEG", 0, 0, width, height); // Add the captured image to the PDF
      doc.save("receipt.pdf");
    });
  };
  return (
    <>
      
      <div className=" mx-2 md:mx-auto  md:w-1/2 bg-slate-50 my-4 ">
      <div className="receipt">
        <div className=" border-2 border-black p-4 ">
          <div className=" flex justify-between my-auto">
            <img src="logo.png" alt="" className=" h-16 md:h-40" />
            <img src="acm.png" alt="" className=" h-14 md:h-36" />
          </div>

          <div className=" text-[10px] sm:text-sm md:text-lg">
            <div className=" flex justify-between my-2 items-center">
              <p>
                <span className=" font-medium">Permission id :</span> 5465
              </p>
              <p>Date :14/3/24</p>
            </div>
            <div className="grid grid-cols-10 my-3 ">
              <p className=" col-span-3 font-bold">Subject</p>
              <p className=" col-span-7 ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
                necessitatibus, iusto expedita, velit architecto inventore nam
                saepe hic repellat corrupti laudantium provident. Adipisci,
                accusantium pariatur nemo ipsum consequuntur facilis. Doloribus?
              </p>
            </div>
            <div className="grid grid-cols-10 my-10">
              <p className=" col-span-3 font-bold ">Description</p>
              <p className=" col-span-7 ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem
                necessitatibus, iusto expedita, velit architecto inventore nam
                saepe hic repellat corrupti laudantium provident Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. Dolorum aspernatur
                deleniti totam quasi. Modi accusamus dolor, maxime quos vel eum
                officia neque voluptas in fugit animi expedita non ea
                tempore?Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Iusto a accusantium officia voluptatibus et eligendi. Est neque
                perferendis, ad omnis assumenda, incidunt deserunt magnam autem
                alias a, eveniet hic aliquam.{" "}
              </p>
            </div>
          </div>
          <div>
          <img src="approve.webp" alt=""  className=" h-[85px] md:h-[160px]"/>
        </div>
        </div>
       
      </div>
      </div>
      

      <div className=" flex justify-center my-5">
        <button
          className=" bg-blue-600 rounded-md p-3 text-white font-bold "
          onClick={downloadpdf}
        >
          Download
        </button>
      </div>
    </>
  );
}

export default App;
