(this["webpackJsonpstudy-master"]=this["webpackJsonpstudy-master"]||[]).push([[0],{27:function(t,e,C){},48:function(t,e,C){"use strict";C.r(e);var n=C(1),a=C(21),s=C.n(a),c=(C(27),C(6)),i=C.n(c),r=C(7),o=C(4),l=C(5),u=C.n(l),j=C(3),d=C(0),h=Object(n.createContext)();var b=function(t){var e=Object(n.useState)(0),C=Object(o.a)(e,2),a=C[0],s=C[1],c=Object(n.useState)({}),i=Object(o.a)(c,2),r=i[0],l=i[1],u=Object(n.useState)(!1),b=Object(o.a)(u,2),O=b[0],p=b[1],x=function(t){l(t),m(t)},m=function(t){switch(t.active){case"study":s(t.study);break;case"short":s(t.short);break;case"long":s(t.long);break;default:s(0)}};return Object(d.jsx)(h.Provider,{value:{stopStudying:function(){p(!1)},updateExecute:x,pomodoro:a,executing:r,startAnimate:O,startStudying:function(){p(!0)},pauseStudying:function(){p(!1)},SettingButton:function(){l({}),s(0)},setCurrentTimer:function(t){x(Object(j.a)(Object(j.a)({},r),{},{active:t})),m(r)},children:function(t){var e=t.remainingTime,C=Math.floor(e/60),n=e%60;return"".concat(C,":").concat(n)}},children:t.children})},O=function(){var t=Object(n.useState)({study:25,short:5,long:10,active:"study"}),e=Object(o.a)(t,2),C=e[0],a=e[1],s=Object(n.useContext)(h).updateExecute,c=function(t){var e=t.target,n=e.name,s=e.value;switch(n){case"study":a(Object(j.a)(Object(j.a)({},C),{},{study:parseInt(s)}));break;case"shortBreak":a(Object(j.a)(Object(j.a)({},C),{},{short:parseInt(s)}));break;case"longBreak":a(Object(j.a)(Object(j.a)({},C),{},{long:parseInt(s)}))}};return Object(d.jsx)("div",{className:"form-container",children:Object(d.jsxs)("form",{noValidate:!0,onSubmit:function(t){t.preventDefault(),s(C)},children:[Object(d.jsxs)("div",{className:"input-wrapper",children:[Object(d.jsx)("input",{className:"input",type:"number",name:"study",onChange:c,value:C.study}),Object(d.jsx)("input",{className:"input",type:"number",name:"shortBreak",onChange:c,value:C.short}),Object(d.jsx)("input",{className:"input",type:"number",name:"longBreak",onChange:c,value:C.long})]}),Object(d.jsx)("button",{type:"submit",children:" Set Timer"})]})})},p=function(t){var e=t.title,C=(t.activeClass,t._callBack);return Object(d.jsx)("button",{style:{position:"relative",zIndex:"2"},onClick:C,children:e})},x=C(22),m=function(t){var e=t.key,C=t.timer,a=t.animate,s=t.children,c=Object(n.useContext)(h).stopStudying;Object(n.useEffect)((function(){}));return Object(d.jsx)(x.CountdownCircleTimer,{style:{fontSize:"2.5rem"},isPlaying:a,duration:60*C,colors:[["#FE6F6B",.33],["#FE6F6B",.33],["#FE6F6B",.33]],strokeWidth:30,size:320,trailColor:"#151932",onComplete:function(){c(),alert("timer is done"),function(t){var e,C=document.title;e||(e=setInterval((function(){document.title=document.title==t?" ":t}),1e3),window.onmousemove=function(){clearInterval(e),document.title=C,window.onmousemove=null,e=null})}("stop studying")},children:s},e)},f=C(12),k=C(10);var v=function(t){var e=Object(n.useState)({task1:{name:""},task2:{name:""},task3:{name:""}}),C=Object(o.a)(e,2),a=C[0],s=C[1],c=function(t){s((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(k.a)({},t.target.name,{name:t.target.value}))}))};return Object(d.jsx)("div",{className:"task-container",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)("div",{className:"task-box",children:Object(d.jsx)("p",{children:Object(d.jsx)("input",{className:"task-input",name:"task1",onChange:function(t){return c(t)},type:"text",placeholder:"Task name"})})})},"task1"),Object(d.jsx)("li",{children:Object(d.jsx)("div",{className:"task-box",children:Object(d.jsx)("p",{children:Object(d.jsx)("input",{className:"task-input",name:"task2",onChange:function(t){return c(t)},type:"text",placeholder:"Task Name"})})})},"task2"),Object(d.jsx)("li",{children:Object(d.jsx)("div",{className:"task-box",children:Object(d.jsx)("p",{children:Object(d.jsx)("input",{className:"task-input",name:"task3",onChange:function(t){return c(t)},type:"text",placeholder:"Task name"})})})},"task3"),Object(d.jsx)("li",{children:Object(d.jsx)("button",{style:{fontSize:"small",width:"auto",height:"auto"},onClick:function(){""!==a.task1.name&&""!==a.task2.name&&""!==a.task3.name&&t.submit(a)},children:"Submit"})})]})})};var g=function(t){return Object(d.jsxs)(d.Fragment,{children:[" ",t.tasksList.length>0&&Object(d.jsxs)("ul",{id:"task-list",children:[t.tasksList.map((function(e,C){return Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{children:"Task Name:"})," ",e.taskName," ",Object(d.jsx)("button",{className:"task-list-button",id:e.idtasks,onClick:function(){return t.delete(e.idtasks)},children:"Delete"})]},e.idtasks)})),Object(d.jsx)("li",{children:Object(d.jsx)("button",{style:{fontSize:"small",width:"auto",height:"auto"},onClick:t.onDelete,children:"Delete All"})})]})]})};var w=function(t){return Object(d.jsx)("div",{id:t.id,className:"cloud"})};var y=function(){var t=Object(n.useContext)(h),e=t.pomodoro,C=t.executing,a=t.setCurrentTimer,s=t.SettingButton,c=t.children,l=t.startAnimate,j=t.startStudying,b=t.pauseStudying,x=t.updateExecute,k=Object(n.useState)([]),y=Object(o.a)(k,2),L=y[0],V=y[1];function N(){return S.apply(this,arguments)}function S(){return(S=Object(r.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.a.get("http://localhost:3001/api/get").then((function(t){V(t.data)}));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function B(){return(B=Object(r.a)(i.a.mark((function t(e){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:u.a.post("http://localhost:3001/api/insert",{newTasks:e}).then((function(){return N()}));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}Object(n.useEffect)((function(){x(C)}),[C,l,x]);var M=function(){var t=Object(r.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u.a.delete("http://localhost:3001/api/delete"),t.next=3,N();case 3:console.log(L);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),Z=function(){var t=Object(r.a)(i.a.mark((function t(e){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e),t.next=3,u.a.delete("http://localhost:3001/api/deleteTask/".concat(e)).then((function(){N()}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){u()("http://localhost:3001/api/get").then((function(t){V(t.data)}))}),[]),Object(n.useEffect)((function(){Object(f.a)({targets:"#title2 path",strokeDashoffset:[f.a.setDashoffset,0],easing:"linear",duration:2500,delay:function(t,e){return 100*e},direction:"alternate",loop:!1,fill:"#ffffff"})}),[]),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("svg",{id:"title2",width:"462",height:"91",viewBox:"0 0 462 91",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(d.jsx)("path",{d:"M46.4019 11.8052L38.6089 21.2217C37.9285 19.1807 37.0472 17.2324 35.9648 15.377C34.8825 13.5215 33.5991 11.8979 32.1147 10.5063C30.6304 9.11475 28.945 8.00146 27.0586 7.1665C25.1722 6.33154 23.0693 5.91406 20.75 5.91406C19.0801 5.91406 17.5339 6.22331 16.1113 6.8418C14.6888 7.42936 13.4364 8.26432 12.354 9.34668C11.3026 10.3981 10.4676 11.6506 9.84912 13.104C9.26156 14.5575 8.96777 16.1191 8.96777 17.7891C8.96777 19.5208 9.29248 21.1444 9.94189 22.6597C10.5913 24.175 11.4572 25.5511 12.5396 26.7881C13.6219 27.9941 14.8589 29.0456 16.2505 29.9424C17.673 30.8392 19.1419 31.535 20.6572 32.0298C22.1725 32.5555 23.7651 33.1431 25.4351 33.7925C27.105 34.4419 28.744 35.1995 30.3521 36.0654C31.9601 36.9313 33.4909 37.9054 34.9443 38.9878C36.3978 40.0392 37.6812 41.2298 38.7944 42.5596C39.9077 43.8893 40.7891 45.3737 41.4385 47.0127C42.0879 48.6208 42.4126 50.3835 42.4126 52.3008C42.4126 55.084 41.7941 57.5889 40.5571 59.8154C39.3511 62.0111 37.7585 63.8665 35.7793 65.3818C33.8001 66.8971 31.5272 68.0568 28.9604 68.8608C26.4246 69.6649 23.8424 70.0669 21.2139 70.0669C19.4202 70.0669 17.5957 69.804 15.7402 69.2783C13.9157 68.7526 12.153 68.0413 10.4521 67.1445C8.78223 66.2168 7.20508 65.1499 5.7207 63.9438C4.26725 62.7378 2.99935 61.439 1.91699 60.0474L9.43164 51.4194C9.89551 52.9038 10.6995 54.481 11.8438 56.1509C13.0189 57.8208 14.3796 59.367 15.9258 60.7896C17.472 62.2121 19.1265 63.4027 20.8892 64.3613C22.6828 65.2891 24.4146 65.7529 26.0845 65.7529C27.0431 65.7529 28.0327 65.5055 29.0532 65.0107C30.0737 64.516 31.0015 63.882 31.8364 63.1089C32.7023 62.3049 33.4136 61.439 33.9702 60.5112C34.5269 59.5835 34.8052 58.6712 34.8052 57.7744C34.8052 56.4137 34.5269 55.1304 33.9702 53.9243C33.4136 52.6873 32.6714 51.5277 31.7437 50.4453C30.8468 49.363 29.7954 48.3734 28.5894 47.4766C27.4142 46.5488 26.1772 45.7293 24.8784 45.0181C23.6105 44.2759 22.3271 43.6419 21.0283 43.1162C19.7604 42.5596 18.5853 42.1266 17.5029 41.8174C15.3691 41.168 13.2817 40.2402 11.2407 39.0342C9.23063 37.8281 7.43701 36.3747 5.85986 34.6738C4.28271 32.973 3.01481 31.0711 2.05615 28.9683C1.09749 26.8345 0.618164 24.5615 0.618164 22.1494C0.618164 20.0775 0.942871 18.1138 1.59229 16.2583C2.2417 14.4028 3.13851 12.6865 4.28271 11.1094C5.42692 9.53223 6.77214 8.1097 8.31836 6.8418C9.86458 5.54297 11.5345 4.46061 13.3281 3.59473C15.1217 2.69792 16.9927 2.01758 18.9409 1.55371C20.8892 1.05892 22.8529 0.811523 24.832 0.811523C29.1615 0.811523 33.1816 1.78564 36.8926 3.73389C40.6035 5.6512 43.7733 8.34163 46.4019 11.8052Z",stroke:"white",strokeWidth:"2"}),Object(d.jsx)("path",{d:"M67.647 63.5728C66.9357 65.0881 66.1162 66.2477 65.1885 67.0518C64.2607 67.8558 63.3485 68.4434 62.4517 68.8145C61.4312 69.2474 60.3797 69.4948 59.2974 69.5566C57.9058 69.5566 56.7616 69.3402 55.8647 68.9072C54.9989 68.4743 54.3031 67.9022 53.7773 67.1909C53.2826 66.4797 52.9269 65.6756 52.7104 64.7788C52.5249 63.882 52.4321 62.9697 52.4321 62.042V37.7354H47.5151L49.5098 33.0967H52.4321V16.6758L60.9209 13.707V33.0967H69.7344L67.8325 37.7354H60.9209V62.2739C60.9209 63.0161 61.091 63.6037 61.4312 64.0366C61.7713 64.4696 62.2043 64.7015 62.73 64.7324C63.2557 64.7324 63.8433 64.5314 64.4927 64.1294C65.1421 63.7274 65.776 63.078 66.3945 62.1812L67.647 63.5728Z",stroke:"white",strokeWidth:"2"}),Object(d.jsx)("path",{d:"M112.92 63.5728C112.209 65.0881 111.374 66.2477 110.416 67.0518C109.457 67.8558 108.545 68.4434 107.679 68.8145C106.658 69.2474 105.622 69.4948 104.571 69.5566C103.179 69.5566 102.035 69.3402 101.138 68.9072C100.272 68.4743 99.5765 67.9022 99.0508 67.1909C98.5251 66.4797 98.154 65.6756 97.9375 64.7788C97.752 63.882 97.6592 62.9697 97.6592 62.042V47.2446C97.4118 48.3579 97.0871 49.6877 96.6851 51.2339C96.314 52.7801 95.8501 54.4036 95.2935 56.1045C94.7368 57.7744 94.0874 59.4443 93.3452 61.1143C92.603 62.7533 91.7371 64.2222 90.7476 65.521C89.7889 66.8198 88.6911 67.8867 87.4541 68.7217C86.248 69.5257 84.8874 69.9277 83.3721 69.9277C82.1042 69.9277 81.0991 69.6803 80.3569 69.1855C79.6457 68.7217 79.1045 68.0568 78.7334 67.1909C78.3932 66.2941 78.1768 65.2427 78.084 64.0366C78.0221 62.7996 77.9912 61.439 77.9912 59.9546V39.8228C77.9912 39.0806 77.8211 38.493 77.481 38.0601C77.1408 37.6271 76.6924 37.4106 76.1357 37.4106C75.61 37.3797 75.0225 37.5653 74.373 37.9673C73.7236 38.3693 73.0897 39.0187 72.4712 39.9155L71.2188 38.5239C71.93 37.0396 72.7495 35.8953 73.6772 35.0913C74.605 34.2563 75.5173 33.6533 76.4141 33.2822C77.4346 32.8493 78.486 32.6019 79.5684 32.54C80.96 32.54 82.0887 32.7565 82.9546 33.1895C83.8514 33.6224 84.5472 34.1945 85.042 34.9058C85.5677 35.5861 85.9233 36.3747 86.1089 37.2715C86.3254 38.1683 86.4336 39.0806 86.4336 40.0083V59.2124C86.4336 60.4185 86.6501 61.207 87.083 61.5781C87.516 61.9492 88.0726 61.9028 88.7529 61.439C89.4642 60.9442 90.2373 60.0628 91.0723 58.7949C91.9382 57.4961 92.804 55.7952 93.6699 53.6924C94.2266 51.6823 94.7677 49.6104 95.2935 47.4766C95.7264 45.652 96.1593 43.6419 96.5923 41.4463C97.0562 39.2507 97.4118 37.1323 97.6592 35.0913L106.194 32.1226V62.2739C106.194 63.0161 106.364 63.6037 106.705 64.0366C107.045 64.4696 107.478 64.7015 108.003 64.7324C108.529 64.7324 109.101 64.5314 109.72 64.1294C110.369 63.7274 111.003 63.078 111.622 62.1812L112.92 63.5728Z",stroke:"white",strokeWidth:"2"}),Object(d.jsx)("path",{d:"M155.225 63.48C154.854 64.284 154.375 65.0417 153.787 65.7529C153.2 66.4642 152.55 67.0981 151.839 67.6548C151.128 68.2114 150.339 68.6598 149.473 69C148.638 69.3092 147.772 69.4639 146.875 69.4639C144.432 69.4639 142.654 68.799 141.541 67.4692C140.459 66.1086 139.917 64.2686 139.917 61.9492V61.1143C139.392 62.1657 138.789 63.2171 138.108 64.2686C137.428 65.32 136.639 66.2632 135.743 67.0981C134.877 67.9331 133.887 68.6134 132.774 69.1392C131.692 69.6649 130.47 69.9277 129.109 69.9277C127.037 69.9277 125.213 69.5257 123.636 68.7217C122.09 67.8867 120.791 66.7889 119.739 65.4282C118.688 64.0366 117.884 62.4285 117.327 60.604C116.801 58.7795 116.539 56.8621 116.539 54.8521C116.539 52.2544 116.941 49.6413 117.745 47.0127C118.549 44.3841 119.724 42.0029 121.27 39.8691C122.816 37.7354 124.718 36.0036 126.976 34.6738C129.233 33.3132 131.815 32.6328 134.722 32.6328C136.516 32.6328 138.248 33.0658 139.917 33.9316V5.4502L148.499 2.48145V62.1812C148.499 62.7996 148.638 63.3717 148.917 63.8975C149.226 64.3923 149.721 64.6396 150.401 64.6396C151.112 64.6396 151.777 64.3613 152.396 63.8047C153.014 63.2171 153.509 62.6296 153.88 62.042L155.225 63.48ZM139.917 49.5176V39.6372C139.206 38.9259 138.402 38.3384 137.505 37.8745C136.639 37.4106 135.681 37.1787 134.629 37.1787C132.805 37.1787 131.259 37.6735 129.991 38.6631C128.723 39.6527 127.687 40.8896 126.883 42.374C126.079 43.8584 125.491 45.4665 125.12 47.1982C124.749 48.8991 124.563 50.4917 124.563 51.9761C124.563 53.1512 124.672 54.481 124.888 55.9653C125.136 57.4188 125.538 58.7949 126.094 60.0938C126.682 61.3617 127.439 62.444 128.367 63.3408C129.326 64.2067 130.516 64.6396 131.939 64.6396C133.083 64.6396 134.073 64.3923 134.908 63.8975C135.774 63.3717 136.5 62.7069 137.088 61.9028C137.675 61.0679 138.155 60.1247 138.526 59.0732C138.897 57.9909 139.175 56.8931 139.361 55.7798C139.577 54.6665 139.716 53.5687 139.778 52.4863C139.871 51.373 139.917 50.3835 139.917 49.5176Z",stroke:"white",strokeWidth:"2"}),Object(d.jsx)("path",{d:"M191.453 65.1963C191.453 67.4229 191.175 69.5876 190.618 71.6904C190.062 73.8242 189.288 75.8188 188.299 77.6743C187.34 79.5607 186.196 81.277 184.866 82.8232C183.536 84.4004 182.083 85.7456 180.506 86.8589C178.96 88.0031 177.321 88.8844 175.589 89.5029C173.857 90.1523 172.11 90.4771 170.347 90.4771C169.017 90.4771 167.765 90.2451 166.59 89.7812C165.415 89.3483 164.301 88.7607 163.25 88.0186L168.445 81.4316C168.909 81.8027 169.419 82.1893 169.976 82.5913C170.564 82.9933 171.167 83.349 171.785 83.6582C172.404 83.9984 173.038 84.2612 173.687 84.4468C174.367 84.6632 175.032 84.7715 175.682 84.7715C176.857 84.7715 177.846 84.4159 178.65 83.7046C179.485 82.9933 180.166 82.0811 180.691 80.9678C181.217 79.8545 181.635 78.5866 181.944 77.1641C182.253 75.7725 182.47 74.3809 182.593 72.9893C182.748 71.5977 182.841 70.2679 182.872 69C182.903 67.763 182.918 66.7425 182.918 65.9385V47.2446C182.671 48.327 182.346 49.6413 181.944 51.1875C181.542 52.7028 181.032 54.3109 180.413 56.0117C179.826 57.6816 179.145 59.3516 178.372 61.0215C177.599 62.6605 176.718 64.1449 175.728 65.4746C174.769 66.8044 173.687 67.8867 172.481 68.7217C171.306 69.5257 170.022 69.9277 168.631 69.9277C167.208 69.9277 166.126 69.6185 165.384 69C164.673 68.3506 164.147 67.5465 163.807 66.5879C163.497 65.5983 163.327 64.516 163.296 63.3408C163.265 62.1657 163.25 61.0369 163.25 59.9546V39.9155C163.25 39.3589 163.095 38.8177 162.786 38.292C162.477 37.7354 161.998 37.457 161.348 37.457C160.575 37.457 159.864 37.7508 159.214 38.3384C158.596 38.895 158.101 39.4517 157.73 40.0083L156.478 38.6167C156.849 37.8436 157.312 37.1014 157.869 36.3901C158.457 35.6479 159.106 34.9985 159.817 34.4419C160.56 33.8853 161.348 33.4523 162.183 33.1431C163.049 32.8029 163.946 32.6328 164.874 32.6328C167.286 32.6328 169.017 33.3132 170.069 34.6738C171.151 36.0036 171.692 37.8127 171.692 40.1011V59.2124C171.692 59.3979 171.692 59.6453 171.692 59.9546C171.723 60.2329 171.785 60.5112 171.878 60.7896C171.971 61.0369 172.11 61.2689 172.295 61.4854C172.481 61.6709 172.728 61.7637 173.038 61.7637C173.625 61.7637 174.228 61.4235 174.847 60.7432C175.465 60.0628 176.053 59.2743 176.609 58.3774C177.166 57.4806 177.645 56.5838 178.047 55.687C178.449 54.7902 178.743 54.1253 178.929 53.6924C179.485 52.3626 179.98 50.9092 180.413 49.332C180.846 47.7549 181.217 46.1468 181.526 44.5078C181.867 42.8379 182.145 41.1989 182.361 39.5908C182.609 37.9518 182.794 36.3901 182.918 34.9058L191.453 31.937V65.1963Z",stroke:"white",strokeWidth:"2"}),Object(d.jsx)("path",{d:"M300.184 62.645C299.72 63.5418 299.132 64.4077 298.421 65.2427C297.741 66.0776 296.952 66.8198 296.055 67.4692C295.189 68.0877 294.262 68.598 293.272 69C292.282 69.3711 291.262 69.5566 290.21 69.5566C288.51 69.5566 287.01 69.2319 285.711 68.5825C284.412 67.9331 283.33 67.0672 282.464 65.9849C281.598 64.8716 280.949 63.6037 280.516 62.1812C280.083 60.7586 279.866 59.2588 279.866 57.6816V11.5269C279.866 11.063 279.804 10.5991 279.681 10.1353C279.588 9.64046 279.418 9.20752 279.17 8.83643C278.923 8.43441 278.598 8.12516 278.196 7.90869C277.825 7.6613 277.361 7.5376 276.805 7.5376C275.877 7.5376 274.872 7.92415 273.79 8.69727C272.738 9.43945 271.671 10.5218 270.589 11.9443C269.537 13.3359 268.517 15.0213 267.527 17.0005C266.538 18.9797 265.656 21.1753 264.883 23.5874C264.141 25.9995 263.538 28.6126 263.074 31.4268C262.61 34.21 262.378 37.1323 262.378 40.1938V67.0054L252.776 70.438V11.5269C252.776 11.063 252.715 10.5991 252.591 10.1353C252.498 9.64046 252.328 9.20752 252.081 8.83643C251.833 8.43441 251.524 8.12516 251.153 7.90869C250.782 7.6613 250.318 7.5376 249.761 7.5376C248.833 7.5376 247.828 8.1097 246.746 9.25391C245.695 10.3672 244.628 11.867 243.545 13.7534C242.494 15.6089 241.458 17.7581 240.438 20.2012C239.448 22.6442 238.567 25.18 237.793 27.8086C237.051 30.4062 236.448 33.0039 235.984 35.6016C235.521 38.1992 235.289 40.5959 235.289 42.7915V67.0054L225.687 70.438V4.01221L235.289 0.57959V26.7417C236.495 21.5464 237.855 17.2788 239.371 13.939C240.917 10.5991 242.509 7.95508 244.148 6.00684C245.818 4.05859 247.519 2.71338 249.251 1.97119C250.983 1.19808 252.668 0.811523 254.307 0.811523C256.163 0.811523 257.632 1.04346 258.714 1.50732C259.796 1.94027 260.616 2.55876 261.172 3.36279C261.729 4.1359 262.069 5.06364 262.193 6.146C262.347 7.19743 262.409 8.3571 262.378 9.625V23.4019C263.306 19.5672 264.512 16.2428 265.997 13.4287C267.481 10.5837 269.089 8.2334 270.821 6.37793C272.553 4.49154 274.331 3.09993 276.155 2.20312C278.011 1.27539 279.758 0.811523 281.397 0.811523C283.995 0.811523 285.989 1.36816 287.381 2.48145C288.772 3.5638 289.468 5.40381 289.468 8.00146V59.2124C289.468 59.8309 289.53 60.4494 289.654 61.0679C289.778 61.6864 289.979 62.243 290.257 62.7378C290.566 63.2017 290.968 63.5882 291.463 63.8975C291.958 64.2067 292.561 64.3613 293.272 64.3613C294.323 64.3613 295.328 64.0521 296.287 63.4336C297.246 62.8151 298.034 62.1038 298.653 61.2998L300.184 62.645Z",stroke:"white",strokeWidth:"2"}),Object(d.jsx)("path",{d:"M341.514 63.48C341.143 64.284 340.679 65.0417 340.123 65.7529C339.566 66.4642 338.917 67.0981 338.174 67.6548C337.463 68.2114 336.674 68.6598 335.809 69C334.974 69.3092 334.092 69.4639 333.165 69.4639C330.722 69.4639 328.959 68.799 327.876 67.4692C326.825 66.1086 326.299 64.2686 326.299 61.9492V61.1143C325.743 62.1657 325.109 63.2171 324.397 64.2686C323.717 65.32 322.929 66.2632 322.032 67.0981C321.166 67.9331 320.192 68.6134 319.109 69.1392C318.027 69.6649 316.821 69.9277 315.491 69.9277C313.481 69.9277 311.703 69.5412 310.157 68.7681C308.611 67.995 307.312 66.959 306.26 65.6602C305.209 64.3304 304.42 62.7842 303.895 61.0215C303.369 59.2588 303.106 57.3879 303.106 55.4087C303.106 52.7183 303.57 50.0433 304.498 47.3838C305.456 44.6934 306.786 42.2967 308.487 40.1938C310.219 38.091 312.275 36.3901 314.656 35.0913C317.068 33.7616 319.743 33.0967 322.681 33.0967C323.856 33.0967 325.031 33.2049 326.207 33.4214C327.382 33.6379 328.495 33.9935 329.546 34.4883C330.629 34.9521 331.603 35.5706 332.469 36.3438C333.366 37.1169 334.092 38.0601 334.649 39.1733L327.737 42.0957C327.366 41.5081 326.933 40.9515 326.438 40.4258C325.975 39.8691 325.449 39.3898 324.861 38.9878C324.305 38.5858 323.702 38.2611 323.052 38.0137C322.403 37.7663 321.722 37.6426 321.011 37.6426C319.403 37.6426 317.965 38.1374 316.697 39.127C315.46 40.1165 314.393 41.3381 313.497 42.7915C312.631 44.245 311.966 45.7912 311.502 47.4302C311.038 49.0692 310.806 50.5535 310.806 51.8833C310.806 53.0584 310.914 54.3882 311.131 55.8726C311.378 57.326 311.796 58.7021 312.383 60.001C312.971 61.2998 313.744 62.3976 314.703 63.2944C315.661 64.1912 316.867 64.6396 318.321 64.6396C319.465 64.6396 320.455 64.3923 321.29 63.8975C322.125 63.3717 322.836 62.7069 323.423 61.9028C324.011 61.0679 324.49 60.1247 324.861 59.0732C325.263 57.9909 325.557 56.8931 325.743 55.7798C325.959 54.6665 326.098 53.5687 326.16 52.4863C326.253 51.373 326.299 50.3835 326.299 49.5176V46.3169L334.742 43.3481V62.1812C334.742 62.7996 334.896 63.3717 335.206 63.8975C335.515 64.3923 335.994 64.6396 336.644 64.6396C337.417 64.6396 338.112 64.3613 338.731 63.8047C339.38 63.2171 339.891 62.6296 340.262 62.042L341.514 63.48Z",stroke:"white",strokeWidth:"2"}),Object(d.jsx)("path",{d:"M367.212 56.1973C367.212 58.1146 366.857 59.9082 366.146 61.5781C365.434 63.248 364.46 64.7015 363.223 65.9385C362.017 67.1755 360.564 68.1496 358.863 68.8608C357.193 69.5721 355.384 69.9277 353.436 69.9277C352.601 69.9277 351.688 69.8504 350.699 69.6958C349.74 69.5412 348.781 69.3092 347.823 69C346.864 68.6908 345.952 68.3042 345.086 67.8403C344.251 67.3765 343.555 66.8198 342.999 66.1704L348.472 59.0269C348.843 59.6144 349.292 60.2638 349.817 60.9751C350.374 61.6554 350.977 62.2894 351.626 62.877C352.307 63.4645 353.018 63.9593 353.76 64.3613C354.533 64.7324 355.306 64.918 356.08 64.918C356.976 64.918 357.811 64.7633 358.584 64.4541C359.389 64.1449 360.084 63.7119 360.672 63.1553C361.259 62.5677 361.723 61.8874 362.063 61.1143C362.404 60.3411 362.574 59.4907 362.574 58.563C362.574 57.326 362.141 56.1973 361.275 55.1768C360.44 54.1253 359.435 53.1203 358.26 52.1616C357.116 51.172 355.91 50.167 354.642 49.1465C353.405 48.0951 352.4 46.9508 351.626 45.7139L346.802 52.7646L344.993 51.4194L350.56 43.7192C350.127 42.8224 349.786 41.8792 349.539 40.8896C349.292 39.9001 349.168 38.9105 349.168 37.9209C349.168 37.0859 349.307 36.2046 349.585 35.2769C349.864 34.3491 350.266 33.4987 350.792 32.7256C351.317 31.9525 351.951 31.3185 352.693 30.8237C353.466 30.298 354.348 30.0352 355.337 30.0352C356.296 30.0352 357.1 30.3289 357.75 30.9165C358.43 31.5041 358.77 32.3236 358.77 33.375C358.77 33.9316 358.677 34.4883 358.492 35.0449C358.306 35.6016 358.074 36.1582 357.796 36.7148C357.518 37.2715 357.208 37.8127 356.868 38.3384C356.528 38.8332 356.203 39.297 355.894 39.73C356.636 40.7814 357.44 41.6937 358.306 42.4668C359.172 43.2399 360.022 43.9666 360.857 44.647C361.692 45.3273 362.496 46.0076 363.27 46.688C364.043 47.3683 364.708 48.1414 365.264 49.0073C365.852 49.8732 366.316 50.8783 366.656 52.0225C367.027 53.1667 367.212 54.5583 367.212 56.1973ZM356.683 34.21C356.683 33.777 356.528 33.4523 356.219 33.2358C355.94 33.0194 355.616 32.9111 355.245 32.9111C354.719 32.9111 354.348 33.0967 354.131 33.4678C353.915 33.8079 353.807 34.1945 353.807 34.6274C353.807 35.2459 353.899 35.849 354.085 36.4365C354.301 37.0241 354.564 37.5807 354.874 38.1064C354.997 37.89 355.152 37.6117 355.337 37.2715C355.554 36.9313 355.755 36.5757 355.94 36.2046C356.157 35.8026 356.327 35.4315 356.451 35.0913C356.605 34.7202 356.683 34.4264 356.683 34.21Z",stroke:"white",strokeWidth:"2"}),Object(d.jsx)("path",{d:"M391.055 63.5728C390.344 65.0881 389.524 66.2477 388.597 67.0518C387.669 67.8558 386.757 68.4434 385.86 68.8145C384.839 69.2474 383.788 69.4948 382.706 69.5566C381.314 69.5566 380.17 69.3402 379.273 68.9072C378.407 68.4743 377.711 67.9022 377.186 67.1909C376.691 66.4797 376.335 65.6756 376.119 64.7788C375.933 63.882 375.84 62.9697 375.84 62.042V37.7354H370.923L372.918 33.0967H375.84V16.6758L384.329 13.707V33.0967H393.143L391.241 37.7354H384.329V62.2739C384.329 63.0161 384.499 63.6037 384.839 64.0366C385.18 64.4696 385.612 64.7015 386.138 64.7324C386.664 64.7324 387.251 64.5314 387.901 64.1294C388.55 63.7274 389.184 63.078 389.803 62.1812L391.055 63.5728Z",stroke:"white",strokeWidth:"2"}),Object(d.jsx)("path",{d:"M429.881 59.9546C428.799 61.3462 427.608 62.645 426.309 63.8511C425.041 65.0571 423.65 66.1086 422.134 67.0054C420.65 67.9022 419.073 68.6134 417.403 69.1392C415.733 69.6649 414.001 69.9277 412.208 69.9277C409.919 69.9277 407.816 69.5257 405.899 68.7217C403.982 67.8867 402.327 66.758 400.936 65.3354C399.544 63.882 398.462 62.1812 397.688 60.2329C396.915 58.2537 396.529 56.1354 396.529 53.8779C396.529 52.0225 396.792 50.1979 397.317 48.4043C397.843 46.6107 398.585 44.9253 399.544 43.3481C400.503 41.771 401.631 40.3175 402.93 38.9878C404.26 37.6271 405.713 36.4674 407.291 35.5088C408.868 34.5501 410.538 33.8079 412.3 33.2822C414.063 32.7256 415.872 32.4473 417.728 32.4473C419.026 32.4473 420.248 32.6019 421.392 32.9111C422.567 33.2204 423.603 33.7152 424.5 34.3955C425.397 35.0449 426.108 35.8953 426.634 36.9468C427.16 37.9673 427.422 39.1888 427.422 40.6113C427.422 41.7865 427.067 43.0234 426.355 44.3223C425.675 45.6211 424.763 46.9199 423.619 48.2188C422.505 49.5176 421.237 50.8009 419.815 52.0688C418.392 53.3058 416.939 54.4655 415.455 55.5479C414.001 56.5993 412.594 57.527 411.233 58.3311C409.873 59.1351 408.682 59.7536 407.662 60.1865C408.806 61.609 410.136 62.7687 411.651 63.6655C413.166 64.5623 414.774 65.0107 416.475 65.0107C417.557 65.0107 418.655 64.8097 419.769 64.4077C420.882 63.9748 421.949 63.4336 422.969 62.7842C424.021 62.1348 425.01 61.4235 425.938 60.6504C426.897 59.8773 427.747 59.1506 428.489 58.4702L429.881 59.9546ZM418.702 42.3276C418.702 41.6164 418.578 40.936 418.331 40.2866C418.114 39.6372 417.789 39.0806 417.356 38.6167C416.924 38.1219 416.398 37.7354 415.779 37.457C415.192 37.1478 414.511 36.9932 413.738 36.9932C412.347 36.9932 411.063 37.488 409.888 38.4775C408.713 39.4362 407.693 40.6268 406.827 42.0493C405.992 43.4718 405.327 44.9871 404.832 46.5952C404.368 48.1724 404.136 49.564 404.136 50.77C404.136 51.9451 404.322 53.1512 404.693 54.3882C405.064 55.6252 405.574 56.8158 406.224 57.96C407.461 57.2796 408.806 56.3364 410.259 55.1304C411.713 53.9243 413.058 52.61 414.295 51.1875C415.563 49.734 416.614 48.2342 417.449 46.688C418.284 45.1418 418.702 43.6883 418.702 42.3276Z",stroke:"white",strokeWidth:"2"}),Object(d.jsx)("path",{d:"M461.749 63.9438C461.192 64.8097 460.512 65.5983 459.708 66.3096C458.903 66.9899 458.022 67.5775 457.063 68.0723C456.105 68.5671 455.1 68.9536 454.048 69.2319C452.997 69.5103 451.961 69.6494 450.94 69.6494C449.58 69.6494 448.405 69.402 447.415 68.9072C446.456 68.3815 445.668 67.7012 445.049 66.8662C444.431 66.0312 443.967 65.0571 443.658 63.9438C443.379 62.8306 443.24 61.6709 443.24 60.4648C443.24 58.8877 443.472 57.2023 443.936 55.4087C444.431 53.5841 445.08 51.7905 445.884 50.0278C446.719 48.2651 447.662 46.6261 448.714 45.1108C449.765 43.5955 450.879 42.3431 452.054 41.3535C450.971 42.0648 449.781 42.6214 448.482 43.0234C447.214 43.4255 445.915 43.6265 444.585 43.6265C443.627 43.6265 442.792 43.5492 442.081 43.3945C441.369 43.2399 440.581 42.9461 439.715 42.5132L434.891 52.5791L432.896 51.7905L437.906 41.5391C437.38 41.168 436.808 40.7041 436.189 40.1475C435.602 39.5599 435.169 38.9878 434.891 38.4312L441.338 31.1948C441.617 32.0298 442.003 32.8802 442.498 33.7461C442.993 34.5811 443.565 35.3387 444.214 36.019C444.895 36.6685 445.637 37.2096 446.441 37.6426C447.276 38.0755 448.173 38.292 449.131 38.292C450.77 38.292 452.363 37.9982 453.909 37.4106C455.455 36.7922 456.893 36.05 458.223 35.1841L459.476 36.4365C458.3 37.5189 457.11 38.7249 455.904 40.0547C454.729 41.3535 453.662 42.7451 452.703 44.2295C451.744 45.7139 450.971 47.2756 450.384 48.9146C449.796 50.5535 449.502 52.208 449.502 53.8779C449.502 54.8366 449.626 55.9189 449.874 57.125C450.152 58.3001 450.569 59.4289 451.126 60.5112C451.683 61.5627 452.378 62.4595 453.213 63.2017C454.048 63.9129 455.053 64.2686 456.229 64.2686C457.033 64.2686 457.806 64.1294 458.548 63.8511C459.321 63.5418 460.017 63.1707 460.635 62.7378L461.749 63.9438Z",stroke:"white",strokeWidth:"2"})]}),Object(d.jsx)("svg",{id:"waves",width:"462",height:"91",viewBox:"0 0 1288 85",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(d.jsx)("polygon",{points:" 0, 300, 200, 450, 350, 250, 550, 450, 750, 250 ",fill:"blue",stroke:"none"})}),Object(d.jsx)("div",{className:"waves"}),Object(d.jsx)("div",{className:"waves2"}),Object(d.jsx)("div",{className:"waves3"}),Object(d.jsx)(w,{id:"cloud1"}),Object(d.jsx)(w,{id:"cloud2"}),Object(d.jsx)("h2",{style:{position:"relative",zIndex:"2"},children:"Let's be productive "}),0!==e?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(g,{tasksList:L,onDelete:M,delete:Z}),Object(d.jsxs)("ul",{className:"labels",style:{position:"relative",zIndex:"2"},children:[Object(d.jsx)("li",{children:Object(d.jsx)(p,{title:"Study",activeClass:"work"===C.active?"active-label":void 0,_callBack:function(){return a("study")}})}),Object(d.jsx)("li",{children:Object(d.jsx)(p,{title:"Short Break",activeClass:"short"===C.active?"active-label":void 0,_callBack:function(){return a("short")}})}),Object(d.jsx)("li",{children:Object(d.jsx)(p,{title:"Long-Break",activeClass:"long"===C.active?"active-label":void 0,_callBack:function(){return a("long")}})})]}),Object(d.jsx)(p,{title:"Settings",_callBack:s}),Object(d.jsxs)("div",{className:"timer-container",children:[Object(d.jsx)(m,{style:{fontSize:"2.5rem"},timer:e,animate:l,children:c},e),Object(d.jsx)(v,{_callBack:N,submit:function(t){return B.apply(this,arguments)}})]}),Object(d.jsxs)("div",{className:"button-wrapper",children:[Object(d.jsx)(p,{title:"Start",className:"timer-btns",activeClass:l?void 0:"active",_callBack:j}),Object(d.jsx)(p,{title:"Pause",className:"timer-btns",activeClass:l?"active":void 0,_callBack:b})]})]}):Object(d.jsx)(O,{})]})};s.a.render(Object(d.jsx)(b,{children:Object(d.jsx)(y,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.d25843da.chunk.js.map