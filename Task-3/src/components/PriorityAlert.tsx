import React from "react";

function PriorityAlert() {
  return (
    <div >
      <div className="flex justify-between mb-3">
        <h1 className="font-semibold text-xl text-start">
          High Priority Alert
        </h1>
        <a href="">View All > </a>
      </div>
      <div className="flex justify-between mt-4">
        <div className=" bg-white rounded-2xl shadow-xl">
          <div className="flex justify-between ">
            <div className="flex justify-between m-3 gap-x-2">
              <div className="px-3 py-3 bg-slate-200 rounded-md">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.99893 9.91463C9.04505 9.91463 8.26516 9.61168 7.65926 9.00578C7.05336 8.39987 6.75041 7.61998 6.75041 6.66609C6.75041 5.71222 7.05336 4.93199 7.65926 4.3254C8.26516 3.71882 9.04505 3.41553 9.99893 3.41553C10.9528 3.41553 11.7339 3.71882 12.3421 4.3254C12.9504 4.93199 13.2545 5.71222 13.2545 6.66609C13.2545 7.61998 12.9504 8.39987 12.3421 9.00578C11.7339 9.61168 10.9528 9.91463 9.99893 9.91463ZM3.20874 16.8562V14.7644C3.20874 14.215 3.34704 13.7425 3.62364 13.3469C3.90023 12.9512 4.25741 12.6508 4.69516 12.4454C5.63235 12.0254 6.53294 11.7105 7.39693 11.5005C8.26093 11.2905 9.12816 11.1855 9.99862 11.1855C10.8754 11.1855 11.7421 11.2939 12.5985 11.5109C13.4549 11.7278 14.3495 12.0407 15.2823 12.4495C15.739 12.6522 16.1054 12.9507 16.3817 13.3452C16.658 13.7396 16.7962 14.2123 16.7962 14.7631V16.8562H3.20874ZM4.62812 15.4368H15.3718V14.7833C15.3718 14.5632 15.3058 14.3534 15.1739 14.1537C15.0419 13.9541 14.8787 13.8062 14.6843 13.7099C13.8087 13.2893 13.007 13.0008 12.2792 12.8444C11.5514 12.688 10.7908 12.6098 9.99749 12.6098C9.21078 12.6098 8.44492 12.688 7.69991 12.8444C6.95489 13.0008 6.1539 13.2891 5.29693 13.7092C5.10105 13.8054 4.94062 13.9535 4.81562 14.1532C4.69062 14.353 4.62812 14.563 4.62812 14.7833V15.4368ZM9.99893 8.49526C10.528 8.49526 10.9654 8.32258 11.3113 7.97721C11.6572 7.63187 11.8301 7.19455 11.8301 6.66526C11.8301 6.1346 11.6575 5.69689 11.3123 5.35211C10.9671 5.00732 10.53 4.83492 10.001 4.83492C9.47191 4.83492 9.03445 5.0074 8.68857 5.35234C8.34271 5.69727 8.16978 6.13409 8.16978 6.6628C8.16978 7.19287 8.34238 7.63079 8.68757 7.97657C9.03275 8.32236 9.46987 8.49526 9.99893 8.49526Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div>
                <h6 className="font-semibold text-start">
                  Driver Raised Consern
                </h6>
                <h6 className="text-sm">
                  Load No : 12454 , Bill to : RoaDo demo bangluru
                </h6>
              </div>
            </div>
            <p className="mt-4 text-xs mr-2">13-feb-2024</p>
          </div>
          <h3 className="max-w-96 text-sm ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
            inventore voluptatibus nostrum libero beatae quia exercitationem eum
            magnam,{" "}
          </h3>
          <div className="flex justify-end gap-3 mt-4 mr-3 items-center">
            <a href="" className="underline">Ignore</a>
            <button className="px-2 py-1.5 bg-slate-950 rounded-lg text-white">resolve</button>
          </div>
        </div>
        <div className=" bg-white rounded-2xl shadow-xl p-3">
          <div className="flex justify-between ">
            <div className="flex justify-between m-3 gap-x-2">
              <div className="px-3 py-3 bg-slate-200 rounded-md">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.99893 9.91463C9.04505 9.91463 8.26516 9.61168 7.65926 9.00578C7.05336 8.39987 6.75041 7.61998 6.75041 6.66609C6.75041 5.71222 7.05336 4.93199 7.65926 4.3254C8.26516 3.71882 9.04505 3.41553 9.99893 3.41553C10.9528 3.41553 11.7339 3.71882 12.3421 4.3254C12.9504 4.93199 13.2545 5.71222 13.2545 6.66609C13.2545 7.61998 12.9504 8.39987 12.3421 9.00578C11.7339 9.61168 10.9528 9.91463 9.99893 9.91463ZM3.20874 16.8562V14.7644C3.20874 14.215 3.34704 13.7425 3.62364 13.3469C3.90023 12.9512 4.25741 12.6508 4.69516 12.4454C5.63235 12.0254 6.53294 11.7105 7.39693 11.5005C8.26093 11.2905 9.12816 11.1855 9.99862 11.1855C10.8754 11.1855 11.7421 11.2939 12.5985 11.5109C13.4549 11.7278 14.3495 12.0407 15.2823 12.4495C15.739 12.6522 16.1054 12.9507 16.3817 13.3452C16.658 13.7396 16.7962 14.2123 16.7962 14.7631V16.8562H3.20874ZM4.62812 15.4368H15.3718V14.7833C15.3718 14.5632 15.3058 14.3534 15.1739 14.1537C15.0419 13.9541 14.8787 13.8062 14.6843 13.7099C13.8087 13.2893 13.007 13.0008 12.2792 12.8444C11.5514 12.688 10.7908 12.6098 9.99749 12.6098C9.21078 12.6098 8.44492 12.688 7.69991 12.8444C6.95489 13.0008 6.1539 13.2891 5.29693 13.7092C5.10105 13.8054 4.94062 13.9535 4.81562 14.1532C4.69062 14.353 4.62812 14.563 4.62812 14.7833V15.4368ZM9.99893 8.49526C10.528 8.49526 10.9654 8.32258 11.3113 7.97721C11.6572 7.63187 11.8301 7.19455 11.8301 6.66526C11.8301 6.1346 11.6575 5.69689 11.3123 5.35211C10.9671 5.00732 10.53 4.83492 10.001 4.83492C9.47191 4.83492 9.03445 5.0074 8.68857 5.35234C8.34271 5.69727 8.16978 6.13409 8.16978 6.6628C8.16978 7.19287 8.34238 7.63079 8.68757 7.97657C9.03275 8.32236 9.46987 8.49526 9.99893 8.49526Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div>
                <h6 className="font-semibold text-start">
                  Driver Raised Consern
                </h6>
                <h6 className="text-sm">
                  Load No : 12454 , Bill to : RoaDo demo bangluru
                </h6>
              </div>
            </div>
            <p className="mt-4 text-xs mr-2">13-feb-2024</p>
          </div>
          <h3 className="max-w-96 text-sm ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
            inventore voluptatibus nostrum libero beatae quia exercitationem eum
            magnam,{" "}
          </h3>
          <div className="flex justify-end gap-3 mt-4 mr-3 items-center">
            <a href="" className="underline">Ignore</a>
            <button className="px-2 py-1.5 bg-slate-950 rounded-lg text-white">resolve</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PriorityAlert;
