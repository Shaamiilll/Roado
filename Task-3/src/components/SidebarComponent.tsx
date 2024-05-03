import React from "react";

function SidebarComponent() {
  return (
    <div className="flex bg-gray-100 text-gray-900">
      <aside className="flex h-screen w-20 flex-col items-center -200 bg-white">
        <div className="flex h-[4.5rem] w-full items-center justify-center  p-2">
          <svg
            width="32"
            height="29"
            viewBox="0 0 32 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="10" cy="19" r="9" stroke="#1AEA22" stroke-width="2" />
            <circle cx="22" cy="19" r="9" stroke="#EA1414" stroke-width="2" />
            <circle cx="16" cy="10" r="9" stroke="#2429A9" stroke-width="2" />
          </svg>
        </div>

        <nav className="flex flex-1 flex-col gap-y-3 pt-2">
          <a
            href="/home"
            className="group relative rounded-xl  p-2 hover:bg-gray-50"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.75 9.75V3H21V9.75H12.75ZM3 12.75V3H11.25V12.75H3ZM12.75 21V11.25H21V21H12.75ZM3 21V14.25H11.25V21H3ZM4.5 11.25H9.75V4.5H4.5V11.25ZM14.25 19.5H19.5V12.75H14.25V19.5ZM14.25 8.25H19.5V4.5H14.25V8.25ZM4.5 19.5H9.75V15.75H4.5V19.5Z"
                fill="#676666"
              />
            </svg>

            <div className="absolute inset-y-0 left-12 hidden items-center group-hover:flex">
              <div className="relative whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 drop-shadow-lg">
                <div className="absolute inset-0 -left-1 flex items-center">
                  <div className="h-2 w-2 rotate-45 bg-white"></div>
                </div>
                Layouts <span className="text-gray-400">(Y)</span>
              </div>
            </div>
          </a>
          <a
            href="/home"
            className="group relative rounded-xl  p-2 hover:bg-gray-50"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.25 15H12.75V11.75H16V10.25H12.75V7H11.25V10.25H8V11.75H11.25V15ZM8.25 21V19H3.5C3.1 19 2.75 18.85 2.45 18.55C2.15 18.25 2 17.9 2 17.5V4.5C2 4.1 2.15 3.75 2.45 3.45C2.75 3.15 3.1 3 3.5 3H20.5C20.9 3 21.25 3.15 21.55 3.45C21.85 3.75 22 4.1 22 4.5V17.5C22 17.9 21.85 18.25 21.55 18.55C21.25 18.85 20.9 19 20.5 19H15.75V21H8.25ZM3.5 17.5H20.5V4.5H3.5V17.5ZM3.5 17.5V4.5V17.5Z"
                fill="#676666"
              />
            </svg>
            <div className="absolute inset-y-0 left-12 hidden items-center group-hover:flex">
              <div className="relative whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 drop-shadow-lg">
                <div className="absolute inset-0 -left-1 flex items-center">
                  <div className="h-2 w-2 rotate-45 bg-white"></div>
                </div>
                Layouts <span className="text-gray-400">(Y)</span>
              </div>
            </div>
          </a>
          <a
            href="/home"
            className="group relative rounded-xl  p-2 hover:bg-gray-50"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 19L7.5 12L3 5H14.95C15.3167 5 15.65 5.09583 15.95 5.2875C16.25 5.47917 16.5083 5.71667 16.725 6L21 12L16.725 18C16.5083 18.2833 16.25 18.5208 15.95 18.7125C15.65 18.9042 15.3167 19 14.95 19H3ZM5.75 17.5H15.25L19.15 12L15.25 6.5H5.75L9.3 12L5.75 17.5ZM9.3 12L5.75 6.5L9.3 12L5.75 17.5L9.3 12Z"
                fill="#676666"
              />
            </svg>

            <div className="absolute inset-y-0 left-12 hidden items-center group-hover:flex">
              <div className="relative whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 drop-shadow-lg">
                <div className="absolute inset-0 -left-1 flex items-center">
                  <div className="h-2 w-2 rotate-45 bg-white"></div>
                </div>
                Layouts <span className="text-gray-400">(Y)</span>
              </div>
            </div>
          </a>
          <a
            href="/home"
            className="group relative rounded-xl  p-2 hover:bg-gray-50"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.5 21C4.08333 21 3.72917 20.8542 3.4375 20.5625C3.14583 20.2708 3 19.9167 3 19.5V4.5C3 4.08333 3.14583 3.72917 3.4375 3.4375C3.72917 3.14583 4.08333 3 4.5 3H9.625C9.70833 2.41667 9.975 1.9375 10.425 1.5625C10.875 1.1875 11.4 1 12 1C12.6 1 13.125 1.1875 13.575 1.5625C14.025 1.9375 14.2917 2.41667 14.375 3H19.5C19.9167 3 20.2708 3.14583 20.5625 3.4375C20.8542 3.72917 21 4.08333 21 4.5V19.5C21 19.9167 20.8542 20.2708 20.5625 20.5625C20.2708 20.8542 19.9167 21 19.5 21H4.5ZM4.5 19.5H19.5V4.5H4.5V19.5ZM7 17H13.825V15.5H7V17ZM7 12.75H17V11.25H7V12.75ZM7 8.5H17V7H7V8.5ZM12 4.075C12.2333 4.075 12.4375 3.9875 12.6125 3.8125C12.7875 3.6375 12.875 3.43333 12.875 3.2C12.875 2.96667 12.7875 2.7625 12.6125 2.5875C12.4375 2.4125 12.2333 2.325 12 2.325C11.7667 2.325 11.5625 2.4125 11.3875 2.5875C11.2125 2.7625 11.125 2.96667 11.125 3.2C11.125 3.43333 11.2125 3.6375 11.3875 3.8125C11.5625 3.9875 11.7667 4.075 12 4.075ZM4.5 19.5V4.5V19.5Z"
                fill="#676666"
              />
            </svg>

            <div className="absolute inset-y-0 left-12 hidden items-center group-hover:flex">
              <div className="relative whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 drop-shadow-lg">
                <div className="absolute inset-0 -left-1 flex items-center">
                  <div className="h-2 w-2 rotate-45 bg-white"></div>
                </div>
                Layouts <span className="text-gray-400">(Y)</span>
              </div>
            </div>
          </a>
          <a
            href="/home"
            className="group relative rounded-xl  p-2 hover:bg-gray-50"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.1429 6.83333L17.7381 6.2381L15.9286 4.42857V1.52381H15.0952V4.64286L17.1429 6.83333ZM3.95238 15.4286C4.31746 15.4286 4.62698 15.3016 4.88095 15.0476C5.13492 14.7936 5.2619 14.4841 5.2619 14.119C5.2619 13.754 5.13492 13.4444 4.88095 13.1905C4.62698 12.9365 4.31746 12.8095 3.95238 12.8095C3.5873 12.8095 3.27778 12.9365 3.02381 13.1905C2.76984 13.4444 2.64286 13.754 2.64286 14.119C2.64286 14.4841 2.76984 14.7936 3.02381 15.0476C3.27778 15.3016 3.5873 15.4286 3.95238 15.4286ZM11.2857 15.4286C11.6508 15.4286 11.9603 15.3016 12.2143 15.0476C12.4683 14.7936 12.5952 14.4841 12.5952 14.119C12.5952 13.754 12.4683 13.4444 12.2143 13.1905C11.9603 12.9365 11.6508 12.8095 11.2857 12.8095C10.9206 12.8095 10.6111 12.9365 10.3571 13.1905C10.1032 13.4444 9.97619 13.754 9.97619 14.119C9.97619 14.4841 10.1032 14.7936 10.3571 15.0476C10.6111 15.3016 10.9206 15.4286 11.2857 15.4286ZM1.33333 20V17.3571C0.873016 17.0873 0.535714 16.7143 0.321429 16.2381C0.107143 15.7619 0 15.2619 0 14.7381V5.28571C0 4.61905 0.194444 4.05159 0.583333 3.58333C0.972222 3.11508 1.5754 2.74603 2.39286 2.47619C3.21032 2.20635 4.25794 2.03571 5.53571 1.96429C6.81349 1.89286 8.33333 1.90476 10.0952 2C10 2.2381 9.9127 2.47222 9.83333 2.70238C9.75397 2.93254 9.69048 3.1746 9.64286 3.42857C7.24603 3.26984 5.34921 3.30556 3.95238 3.53571C2.55556 3.76587 1.71429 4.14286 1.42857 4.66667H9.54762C9.54762 4.90476 9.56746 5.14286 9.60714 5.38095C9.64682 5.61905 9.69841 5.85714 9.7619 6.09524H1.42857V10.2143H13.8333C13.9921 10.2778 14.2103 10.3333 14.4881 10.381C14.7659 10.4286 15.0159 10.4524 15.2381 10.4524V14.7381C15.2381 15.2619 15.131 15.7619 14.9167 16.2381C14.7024 16.7143 14.3651 17.0873 13.9048 17.3571V20H11.8571V18.0476H3.38095V20H1.33333ZM11.8571 11.6429H1.42857H13.8095H11.8571ZM15.5 9.04762C14.246 9.04762 13.1746 8.60318 12.2857 7.71429C11.3968 6.8254 10.9524 5.75397 10.9524 4.5C10.9524 3.24603 11.3968 2.18254 12.2857 1.30952C13.1746 0.436508 14.246 0 15.5 0C16.7381 0 17.7976 0.440476 18.6786 1.32143C19.5595 2.20238 20 3.2619 20 4.5C20 5.75397 19.5635 6.8254 18.6905 7.71429C17.8175 8.60318 16.754 9.04762 15.5 9.04762ZM3.38095 16.619H11.8571C12.4127 16.619 12.877 16.4048 13.25 15.9762C13.623 15.5476 13.8095 15.0556 13.8095 14.5V11.6429H1.42857V14.5C1.42857 15.0556 1.61508 15.5476 1.9881 15.9762C2.36111 16.4048 2.8254 16.619 3.38095 16.619Z"
                fill="#676666"
              />
            </svg>

            <div className="absolute inset-y-0 left-12 hidden items-center group-hover:flex">
              <div className="relative whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 drop-shadow-lg">
                <div className="absolute inset-0 -left-1 flex items-center">
                  <div className="h-2 w-2 rotate-45 bg-white"></div>
                </div>
                Layouts <span className="text-gray-400">(Y)</span>
              </div>
            </div>
          </a>
          <a
            href="/home"
            className="group relative rounded-xl  p-2 hover:bg-gray-50"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.6 19.975C4.78333 19.975 4.0875 19.6875 3.5125 19.1125C2.9375 18.5375 2.65 17.8417 2.65 17.025H1V5.5C1 5.1 1.15 4.75 1.45 4.45C1.75 4.15 2.1 4 2.5 4H16.975V8.175H19.6L23 12.7V17.025H21.225C21.225 17.8417 20.9375 18.5375 20.3625 19.1125C19.7875 19.6875 19.0917 19.975 18.275 19.975C17.4583 19.975 16.7625 19.6875 16.1875 19.1125C15.6125 18.5375 15.325 17.8417 15.325 17.025H8.55C8.55 17.8417 8.2625 18.5375 7.6875 19.1125C7.1125 19.6875 6.41667 19.975 5.6 19.975ZM5.6 18.475C6 18.475 6.34167 18.3333 6.625 18.05C6.90833 17.7667 7.05 17.425 7.05 17.025C7.05 16.625 6.90833 16.2833 6.625 16C6.34167 15.7167 6 15.575 5.6 15.575C5.2 15.575 4.85833 15.7167 4.575 16C4.29167 16.2833 4.15 16.625 4.15 17.025C4.15 17.425 4.29167 17.7667 4.575 18.05C4.85833 18.3333 5.2 18.475 5.6 18.475ZM2.5 15.525H3.05C3.33333 15.075 3.69167 14.7167 4.125 14.45C4.55833 14.1833 5.04167 14.05 5.575 14.05C6.10833 14.05 6.59583 14.1875 7.0375 14.4625C7.47917 14.7375 7.84167 15.0917 8.125 15.525H15.475V5.5H2.5V15.525ZM18.275 18.475C18.675 18.475 19.0167 18.3333 19.3 18.05C19.5833 17.7667 19.725 17.425 19.725 17.025C19.725 16.625 19.5833 16.2833 19.3 16C19.0167 15.7167 18.675 15.575 18.275 15.575C17.875 15.575 17.5333 15.7167 17.25 16C16.9667 16.2833 16.825 16.625 16.825 17.025C16.825 17.425 16.9667 17.7667 17.25 18.05C17.5333 18.3333 17.875 18.475 18.275 18.475ZM16.975 13.375H21.625L18.85 9.675H16.975V13.375Z"
                fill="#676666"
              />
            </svg>

            <div className="absolute inset-y-0 left-12 hidden items-center group-hover:flex">
              <div className="relative whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 drop-shadow-lg">
                <div className="absolute inset-0 -left-1 flex items-center">
                  <div className="h-2 w-2 rotate-45 bg-white"></div>
                </div>
                Layouts <span className="text-gray-400">(Y)</span>
              </div>
            </div>
          </a>
          <a
            href="/home"
            className="group relative rounded-xl  p-2 hover:bg-gray-50"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.6 19.975C4.78333 19.975 4.0875 19.6875 3.5125 19.1125C2.9375 18.5375 2.65 17.8417 2.65 17.025H1V5.5C1 5.1 1.15 4.75 1.45 4.45C1.75 4.15 2.1 4 2.5 4H16.975V8.175H19.6L23 12.7V17.025H21.225C21.225 17.8417 20.9375 18.5375 20.3625 19.1125C19.7875 19.6875 19.0917 19.975 18.275 19.975C17.4583 19.975 16.7625 19.6875 16.1875 19.1125C15.6125 18.5375 15.325 17.8417 15.325 17.025H8.55C8.55 17.8417 8.2625 18.5375 7.6875 19.1125C7.1125 19.6875 6.41665 19.975 5.6 19.975ZM5.6 18.475C6 18.475 6.34165 18.3333 6.625 18.05C6.90835 17.7666 7.05 17.425 7.05 17.025C7.05 16.625 6.90835 16.2833 6.625 16C6.34165 15.7167 6 15.575 5.6 15.575C5.2 15.575 4.85833 15.7167 4.575 16C4.29166 16.2833 4.15 16.625 4.15 17.025C4.15 17.425 4.29166 17.7666 4.575 18.05C4.85833 18.3333 5.2 18.475 5.6 18.475ZM2.5 15.525H3.05C3.33333 15.075 3.69166 14.7167 4.125 14.45C4.55834 14.1833 5.04165 14.05 5.575 14.05C6.10835 14.05 6.59585 14.1875 7.0375 14.4625C7.47915 14.7375 7.84165 15.0917 8.125 15.525H15.475V5.5H2.5V15.525ZM18.275 18.475C18.675 18.475 19.0166 18.3333 19.3 18.05C19.5833 17.7666 19.725 17.425 19.725 17.025C19.725 16.625 19.5833 16.2833 19.3 16C19.0166 15.7167 18.675 15.575 18.275 15.575C17.875 15.575 17.5333 15.7167 17.25 16C16.9667 16.2833 16.825 16.625 16.825 17.025C16.825 17.425 16.9667 17.7666 17.25 18.05C17.5333 18.3333 17.875 18.475 18.275 18.475ZM16.975 13.375H21.625L18.85 9.675H16.975V13.375Z"
                fill="#676666"
              />
              <path
                d="M8.16665 9.43335L9 9.01665L9.83335 9.43335V7.5H8.16665V9.43335ZM7.33335 11.6666V11H9V11.6666H7.33335ZM6.5 13C6.36665 13 6.25 12.95 6.15 12.85C6.05 12.75 6 12.6333 6 12.5V7.5C6 7.36665 6.05 7.25 6.15 7.15C6.25 7.05 6.36665 7 6.5 7H11.5C11.6333 7 11.75 7.05 11.85 7.15C11.95 7.25 12 7.36665 12 7.5V12.5C12 12.6333 11.95 12.75 11.85 12.85C11.75 12.95 11.6333 13 11.5 13H6.5ZM6.5 7.5V12.5V7.5ZM6.5 12.5H11.5V7.5H10.3334V10.2416L9 9.575L7.66665 10.2416V7.5H6.5V12.5Z"
                fill="#676666"
              />
            </svg>

            <div className="absolute inset-y-0 left-12 hidden items-center group-hover:flex">
              <div className="relative whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 drop-shadow-lg">
                <div className="absolute inset-0 -left-1 flex items-center">
                  <div className="h-2 w-2 rotate-45 bg-white"></div>
                </div>
                Layouts <span className="text-gray-400">(Y)</span>
              </div>
            </div>
          </a>
          <a
            href="/home"
            className="group relative rounded-xl  p-2 hover:bg-gray-50"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.5 21C3.1 21 2.75 20.85 2.45 20.55C2.15 20.25 2 19.9 2 19.5V7.275C2 6.875 2.15 6.525 2.45 6.225C2.75 5.925 3.1 5.775 3.5 5.775H8.25V3.5C8.25 3.1 8.4 2.75 8.7 2.45C9 2.15 9.35 2 9.75 2H14.25C14.65 2 15 2.15 15.3 2.45C15.6 2.75 15.75 3.1 15.75 3.5V5.775H20.5C20.9 5.775 21.25 5.925 21.55 6.225C21.85 6.525 22 6.875 22 7.275V19.5C22 19.9 21.85 20.25 21.55 20.55C21.25 20.85 20.9 21 20.5 21H3.5ZM9.75 5.775H14.25V3.5H9.75V5.775ZM20.5 14.725H14.275V16.225H9.775V14.725H3.5V19.5H20.5V14.725ZM11.275 14.725H12.775V13.225H11.275V14.725ZM3.5 13.225H9.775V11.725H14.275V13.225H20.5V7.275H3.5V13.225Z"
                fill="#676666"
              />
            </svg>

            <div className="absolute inset-y-0 left-12 hidden items-center group-hover:flex">
              <div className="relative whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 drop-shadow-lg">
                <div className="absolute inset-0 -left-1 flex items-center">
                  <div className="h-2 w-2 rotate-45 bg-white"></div>
                </div>
                Layouts <span className="text-gray-400">(Y)</span>
              </div>
            </div>
          </a>
          <a
            href="/home"
            className="group relative rounded-xl  p-2 hover:bg-gray-50"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.3 13.6C16.7167 13.6 17.0875 13.4375 17.4125 13.1125C17.7375 12.7875 17.9 12.4083 17.9 11.975C17.9 11.5583 17.7375 11.1917 17.4125 10.875C17.0875 10.5583 16.7167 10.4 16.3 10.4C15.8833 10.4 15.5125 10.5583 15.1875 10.875C14.8625 11.1917 14.7 11.5583 14.7 11.975C14.7 12.4083 14.8625 12.7875 15.1875 13.1125C15.5125 13.4375 15.8833 13.6 16.3 13.6ZM4.5 18.175V19.5V4.5V18.175ZM4.5 21C4.11667 21 3.77083 20.85 3.4625 20.55C3.15417 20.25 3 19.9 3 19.5V4.5C3 4.11667 3.15417 3.77083 3.4625 3.4625C3.77083 3.15417 4.11667 3 4.5 3H19.5C19.9 3 20.25 3.15417 20.55 3.4625C20.85 3.77083 21 4.11667 21 4.5V7.85H19.5V4.5H4.5V19.5H19.5V16.175H21V19.5C21 19.9 20.85 20.25 20.55 20.55C20.25 20.85 19.9 21 19.5 21H4.5ZM13.45 16.675C12.8833 16.675 12.4333 16.5083 12.1 16.175C11.7667 15.8417 11.6 15.4 11.6 14.85V9.175C11.6 8.60833 11.7667 8.1625 12.1 7.8375C12.4333 7.5125 12.8833 7.35 13.45 7.35H20.2C20.7667 7.35 21.2167 7.5125 21.55 7.8375C21.8833 8.1625 22.05 8.60833 22.05 9.175V14.85C22.05 15.4 21.8833 15.8417 21.55 16.175C21.2167 16.5083 20.7667 16.675 20.2 16.675H13.45ZM20.55 15.175V8.85H13.1V15.175H20.55Z"
                fill="#676666"
              />
            </svg>

            <div className="absolute inset-y-0 left-12 hidden items-center group-hover:flex">
              <div className="relative whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 drop-shadow-lg">
                <div className="absolute inset-0 -left-1 flex items-center">
                  <div className="h-2 w-2 rotate-45 bg-white"></div>
                </div>
                Layouts <span className="text-gray-400">(Y)</span>
              </div>
            </div>
          </a>
          <a
            href="/home"
            className="group relative rounded-xl  p-2 hover:bg-gray-50"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.5 21C3.1 21 2.75 20.85 2.45 20.55C2.15 20.25 2 19.9 2 19.5V10.225H3.5V19.5H14.8V21H3.5ZM6.525 18C6.125 18 5.77083 17.85 5.4625 17.55C5.15417 17.25 5 16.9 5 16.5V7.225H6.5V16.5H17.825V18H6.525ZM9.5 15C9.1 15 8.75 14.85 8.45 14.55C8.15 14.25 8 13.9 8 13.5V4.5C8 4.1 8.15 3.75 8.45 3.45C8.75 3.15 9.1 3 9.5 3H20.5C20.9 3 21.25 3.15 21.55 3.45C21.85 3.75 22 4.1 22 4.5V13.5C22 13.9 21.85 14.25 21.55 14.55C21.25 14.85 20.9 15 20.5 15H9.5ZM9.5 13.5H20.5V6.05H9.5V13.5Z"
                fill="#676666"
              />
            </svg>

            <div className="absolute inset-y-0 left-12 hidden items-center group-hover:flex">
              <div className="relative whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 drop-shadow-lg">
                <div className="absolute inset-0 -left-1 flex items-center">
                  <div className="h-2 w-2 rotate-45 bg-white"></div>
                </div>
                Layouts <span className="text-gray-400">(Y)</span>
              </div>
            </div>
          </a>
          <a
            href="/home"
            className="group relative rounded-xl  p-2 hover:bg-gray-50"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.7 22L9.2 18.85C8.88333 18.7333 8.55 18.575 8.2 18.375C7.85 18.175 7.54167 17.9667 7.275 17.75L4.325 19.1L2 15L4.7 13.025C4.66667 12.875 4.64583 12.7042 4.6375 12.5125C4.62917 12.3208 4.625 12.15 4.625 12C4.625 11.85 4.62917 11.6792 4.6375 11.4875C4.64583 11.2958 4.66667 11.125 4.7 10.975L2 9L4.325 4.9L7.275 6.25C7.54167 6.03333 7.85 5.825 8.2 5.625C8.55 5.425 8.88333 5.275 9.2 5.175L9.7 2H14.3L14.8 5.15C15.1167 5.26667 15.4542 5.42083 15.8125 5.6125C16.1708 5.80417 16.475 6.01667 16.725 6.25L19.675 4.9L22 9L19.3 10.925C19.3333 11.0917 19.3542 11.2708 19.3625 11.4625C19.3708 11.6542 19.375 11.8333 19.375 12C19.375 12.1667 19.3708 12.3417 19.3625 12.525C19.3542 12.7083 19.3333 12.8833 19.3 13.05L22 15L19.675 19.1L16.725 17.75C16.4583 17.9667 16.1542 18.1792 15.8125 18.3875C15.4708 18.5958 15.1333 18.75 14.8 18.85L14.3 22H9.7ZM12 15.25C12.9 15.25 13.6667 14.9333 14.3 14.3C14.9333 13.6667 15.25 12.9 15.25 12C15.25 11.1 14.9333 10.3333 14.3 9.7C13.6667 9.06667 12.9 8.75 12 8.75C11.1 8.75 10.3333 9.06667 9.7 9.7C9.06667 10.3333 8.75 11.1 8.75 12C8.75 12.9 9.06667 13.6667 9.7 14.3C10.3333 14.9333 11.1 15.25 12 15.25ZM12 13.75C11.5167 13.75 11.1042 13.5792 10.7625 13.2375C10.4208 12.8958 10.25 12.4833 10.25 12C10.25 11.5167 10.4208 11.1042 10.7625 10.7625C11.1042 10.4208 11.5167 10.25 12 10.25C12.4833 10.25 12.8958 10.4208 13.2375 10.7625C13.5792 11.1042 13.75 11.5167 13.75 12C13.75 12.4833 13.5792 12.8958 13.2375 13.2375C12.8958 13.5792 12.4833 13.75 12 13.75ZM10.9 20.5H13.1L13.45 17.7C14 17.5667 14.5208 17.3583 15.0125 17.075C15.5042 16.7917 15.95 16.45 16.35 16.05L19 17.2L20 15.4L17.65 13.675C17.7167 13.3917 17.7708 13.1125 17.8125 12.8375C17.8542 12.5625 17.875 12.2833 17.875 12C17.875 11.7167 17.8583 11.4375 17.825 11.1625C17.7917 10.8875 17.7333 10.6083 17.65 10.325L20 8.6L19 6.8L16.35 7.95C15.9667 7.51667 15.5333 7.15417 15.05 6.8625C14.5667 6.57083 14.0333 6.38333 13.45 6.3L13.1 3.5H10.9L10.55 6.3C9.98333 6.41667 9.45417 6.61667 8.9625 6.9C8.47083 7.18333 8.03333 7.53333 7.65 7.95L5 6.8L4 8.6L6.35 10.325C6.28333 10.6083 6.22917 10.8875 6.1875 11.1625C6.14583 11.4375 6.125 11.7167 6.125 12C6.125 12.2833 6.14583 12.5625 6.1875 12.8375C6.22917 13.1125 6.28333 13.3917 6.35 13.675L4 15.4L5 17.2L7.65 16.05C8.05 16.45 8.49583 16.7917 8.9875 17.075C9.47917 17.3583 10 17.5667 10.55 17.7L10.9 20.5Z"
                fill="#676666"
              />
            </svg>

            <div className="absolute inset-y-0 left-12 hidden items-center group-hover:flex">
              <div className="relative whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 drop-shadow-lg">
                <div className="absolute inset-0 -left-1 flex items-center">
                  <div className="h-2 w-2 rotate-45 bg-white"></div>
                </div>
                Layouts <span className="text-gray-400">(Y)</span>
              </div>
            </div>
          </a>
        </nav>
      </aside>
    </div>
    
  );
}

export default SidebarComponent;
