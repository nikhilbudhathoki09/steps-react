// import { useState } from "react";

// const messages = ["Learn React ", "Apply for Jobs", "Invest your new income"];

// export default function App() {
//   const [step, setStep] = useState(1);
//   const [isOpen, setIsOpen] = useState(true);

//   function handlePrevious() {
//     if (step > 1) {
//       setStep((step) => step - 1);
//     }
//   }

//   function handleNext() {
//     if (step < 3) setStep((step) => step + 1);
//   }
//   return (
//     <div>
//       <button className="close" onClick={() => setIsOpen((is) => !is)}>
//         &times;
//       </button>
//       {isOpen && (
//         <div className="steps">
//           <div className="numbers">
//             <div className={step >= 1 ? "active" : ""}>1</div>
//             <div className={step >= 2 ? "active" : ""}>2</div>
//             <div className={step >= 3 ? "active" : ""}>3</div>
//           </div>

//           <p className="message">
//             Step {step} : {messages[step - 1]}
//           </p>
//           <div className="buttons">
//             <button
//               style={{
//                 backgroundColor: step <= 1 ? "grey" : "#7950f2",
//                 color: "#fff",
//               }}
//               onClick={handlePrevious}
//             >
//               Previous
//             </button>
//             <button
//               style={{
//                 backgroundColor: step > 2 ? "grey" : "#7950f2",
//                 color: "#fff",
//               }}
//               onClick={handleNext}
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div style={{ position: "relative", left: "50%" }}>
      <div style={{ display: "flex" }}>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
        <span>Step :{step}</span>
        <button onClick={() => setStep((s) => (s > 1 ? s - 1 : 1))}>-</button>
      </div>
      <div style={{ display: "flex" }}>
        <button onClick={() => setCount((count) => count + step)}>+</button>
        <p>Count :{count}</p>
        <button onClick={() => setCount((count) => count - step)}>-</button>
      </div>
      <div>
        <p>
          {Math.abs(count)}
          <span>
            {count === 0
              ? "Today is "
              : count > 0
              ? " day from now is "
              : " day ago was "}
          </span>
          <span>{date.toDateString()}</span>
        </p>
      </div>
    </div>
  );
}
