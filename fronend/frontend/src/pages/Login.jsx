import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../api/axios";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      const res = await API.post(
        "/auth/login",
        form
      );

      login(res.data);

      navigate("/");
    } catch (err) {
      setError(
        err.response?.data?.message ||
        "Login Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">

        <h1>Pro-Tasker</h1>
        <h3>Welcome Back 👋</h3>

        {error && (
          <p className="error">
            {error}
          </p>
        )}

        <form onSubmit={submit}>

          <input
            type="email"
            placeholder="Enter Email"
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={form.password}
            onChange={(e) =>
              setForm({
                ...form,
                password: e.target.value,
              })
            }
          />

          <button type="submit">
            {loading
              ? "Logging In..."
              : "Login"}
          </button>

        </form>

        <p>
          Don't have an account?
          <Link to="/register">
            {" "}Register
          </Link>
        </p>

      </div>
    </div>
  );
}