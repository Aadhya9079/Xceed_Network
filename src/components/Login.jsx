import React, { useMemo, useState } from "react";
import "./auth.css";

export default function Login() {
  const [form, setForm] = useState({
    user: "",   // email or username
    password: "",
  });
  const [touched, setTouched] = useState({});

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const markTouched = (e) => setTouched((t) => ({ ...t, [e.target.name]: true }));

  const isValid = useMemo(() => {
    return form.user.trim().length > 0 && form.password.trim().length >= 6;
  }, [form]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;
    alert(`Logging in as ${form.user}`);
  };

  return (
    <div className="auth-page plain">
      <div className="auth-card gradient-card">
        <h2>Member’s Login</h2>

        <form onSubmit={handleSubmit} noValidate>
          <label>
            Email or Username <span className="req">*</span>
          </label>
          <input
            name="user"
            placeholder="name@example.com or username"
            value={form.user}
            onChange={onChange}
            onBlur={markTouched}
            required
            className={touched.user && !form.user.trim() ? "invalid" : ""}
          />

          <label>
            Password <span className="req">*</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Minimum 6 characters"
            value={form.password}
            onChange={onChange}
            onBlur={markTouched}
            required
            className={touched.password && form.password.trim().length < 6 ? "invalid" : ""}
          />

          <button type="submit" className="auth-btn" disabled={!isValid}>
            Login
          </button>
        </form>

        <p className="auth-note">
          New here? <a href="/join-xceed">Join Xceed</a>
        </p>
      </div>
    </div>
  );
}
