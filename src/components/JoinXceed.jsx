import React, { useMemo, useState } from "react";
import "./auth.css";
import { BsWhatsapp } from "react-icons/bs";

// const COUNTRIES = [
//   { name: "India", code: "+91" },
//   { name: "United States", code: "+1" },
//   { name: "United Kingdom", code: "+44" },
//   { name: "Canada", code: "+1" },
//   { name: "Australia", code: "+61" },
//   { name: "New Zealand", code: "+64" },
//   { name: "Singapore", code: "+65" },
//   { name: "UAE", code: "+971" },
//   { name: "Saudi Arabia", code: "+966" },
//   { name: "Qatar", code: "+974" },
//   { name: "Kuwait", code: "+965" },
//   { name: "Bahrain", code: "+973" },
//   { name: "Oman", code: "+968" },
//   { name: "Germany", code: "+49" },
//   { name: "France", code: "+33" },
//   { name: "Netherlands", code: "+31" },
//   { name: "Spain", code: "+34" },
//   { name: "Italy", code: "+39" },
//   { name: "Switzerland", code: "+41" },
//   { name: "Sweden", code: "+46" },
//   { name: "Norway", code: "+47" },
//   { name: "Denmark", code: "+45" },
//   { name: "Belgium", code: "+32" },
//   { name: "Ireland", code: "+353" },
//   { name: "Portugal", code: "+351" },
//   { name: "Greece", code: "+30" },
//   { name: "Turkey", code: "+90" },
//   { name: "South Africa", code: "+27" },
//   { name: "Nigeria", code: "+234" },
//   { name: "Kenya", code: "+254" },
//   { name: "Japan", code: "+81" },
//   { name: "South Korea", code: "+82" },
//   { name: "China", code: "+86" },
//   { name: "Hong Kong", code: "+852" },
//   { name: "Taiwan", code: "+886" },
//   { name: "Malaysia", code: "+60" },
//   { name: "Thailand", code: "+66" },
//   { name: "Indonesia", code: "+62" },
//   { name: "Philippines", code: "+63" },
//   { name: "Vietnam", code: "+84" },
//   { name: "Sri Lanka", code: "+94" },
//   { name: "Bangladesh", code: "+880" },
//   { name: "Nepal", code: "+977" },
//   { name: "Pakistan", code: "+92" },
//   { name: "Israel", code: "+972" },
//   { name: "Mexico", code: "+52" },
//   { name: "Brazil", code: "+55" },
//   { name: "Argentina", code: "+54" },
//   { name: "Chile", code: "+56" },
//   { name: "Colombia", code: "+57" },
//   // add more if you need absolutely every country dial code
// ];

// export default function JoinXceed() {
//   const [form, setForm] = useState({
//     title: "Mr",
//     fullName: "",
//     email: "",
//     countryCode: "+91",
//     phone: "",
//   });
//   const [touched, setTouched] = useState({});

//   const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
//   const markTouched = (e) => setTouched((t) => ({ ...t, [e.target.name]: true }));

//   const isEmail = (v) => /^\S+@\S+\.\S+$/.test(String(v || "").trim());
//   const isPhoneLocal = (v) => /^[0-9]{6,15}$/.test(v || "");

//   const isValid = useMemo(() => {
//     return (
//       form.title &&
//       form.fullName.trim().length >= 2 &&
//       isEmail(form.email) &&
//       form.password.trim().length >= 6 &&
//       form.countryCode &&
//       isPhoneLocal(form.phone)
//     )
//   }, [form])

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!isValid) return;
//     alert(
//       `Registration submitted:\n${form.fullName}\n${form.email}\n${form.password}\n${form.countryCode} ${form.phone}`
//     );
//   };

//   return (
//     <div className="auth-page plain">
//       <div className="auth-card gradient-card">
//         <h2>Join Xceed</h2>

//         <form onSubmit={handleSubmit} noValidate>
//           <label>Full Name <span className="req">*</span></label>
//           <input
//             name="fullName"
//             placeholder="Enter your name"
//             value={form.fullName}
//             onChange={onChange}
//             onBlur={markTouched}
//             required
//             className={touched.fullName && form.fullName.trim().length < 2 ? "invalid" : ""}
//           />

//           <label>Email <span className="req">*</span></label>
//           <input
//             type="email"
//             name="email"
//             placeholder="name@example.com"
//             value={form.email}
//             onChange={onChange}
//             onBlur={markTouched}
//             required
//             className={touched.email && !isEmail(form.email) ? "invalid" : ""}
//           />

//  <label>Password <span className="req">*</span></label>
//           <input
//             type="password"
//             name="password"
//             placeholder="Enter your password"
//             value={form.password}
//             onChange={onChange}
//             onBlur={markTouched}
//             required
//             className={touched.password && form.password.trim().length < 6 ? "invalid" : ""}
//           />

//           <label>Phone <span className="req">*</span></label>
//           <div className="phone-row">
//             <select
//               name="countryCode"
//               value={form.countryCode}
//               onChange={onChange}
//               onBlur={markTouched}
//               required
//               className="cc-select"
//               aria-label="Country code"
//             >
//               {COUNTRIES.map((c) => (
//                 <option key={c.name} value={c.code}>{c.name} ({c.code})</option>
//               ))}
//             </select>
//             <input
//               name="phone"
//               inputMode="numeric"
//               placeholder="Phone number"
//               value={form.phone}
//               onChange={onChange}
//               onBlur={markTouched}
//               required
//               className={`phone-input ${
//                 touched.phone && !isPhoneLocal(form.phone) ? "invalid" : ""
//               }`}
//             />
//           </div>

//           <button type="submit" className="auth-btn" disabled={!isValid}>
//             Register
//           </button>
//         </form>

//         <p className="auth-note">
//           Already a member? <a href="/login">Login here</a>
//         </p>
//       </div>
//     </div>
//   );
// }

export default function JoinXceed() {
  const openCommunity = () => {
    window.open('https://chat.whatsapp.com/JMFmeXFidDn3xlvgQL5xoI?mode=ems_copy_t', '_blank')
  }
  return (
    <div className="join-xceed">
      <div className="join-xceed-box">
        <h4>Join our Whatsapp Community and become a member of Xceed</h4>
        <button className="join" onClick={openCommunity}>Join Now</button>
      </div>
    </div>
  )
}