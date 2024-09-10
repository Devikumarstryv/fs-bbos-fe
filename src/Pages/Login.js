import logo from "../../src/Assets/images/BBOS_Logo.svg";
import digi from "../../src/Assets/images/digicert.png";
import LoginFooter from "../components/LoginFooter";
import LoginHeader from "../components/LoginHeader";
import { useDispatch, useSelector } from "react-redux";
import { useMsal } from "@azure/msal-react";
import { loginRequest, msalInstance } from "../authConfig.js";
import {
  loginStart,
  loginSuccess,
  loginFailure,
} from "../Redux/User/UserReducer";
import { useNavigate } from "react-router-dom";
import { LoginUrl } from "../Utils/api";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup"; // Import Yup for validation
import { useState, useEffect } from "react";

// Define validation schema with Yup
const validationSchema = Yup.object({
  prwu_email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  prwu_password: Yup.string().required("Password is required"),
});

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevVisibility) => !prevVisibility);
  };

  const url = "https://fie-keyvault.vault.azure.net/";
  // const handleLogin = async (values, { setSubmitting, setErrors }) => {
  //   try {
  //     // Dispatch the login start action
  //     dispatch(loginStart());

  //     // Hardcoded users (you can add more users here)
  //     const hardcodedUsers = [
  //       {
  //         email: "jkaden@pulverdigital.com",
  //         password: "Clear54Book",
  //         name: "Jkaden",
  //       },
  //       {
  //         email: "sanjay@stryv.ai",
  //         password: "P2wd_4321",
  //         name: "Sanjay",
  //       },
  //     ];

  //     // Check if input values match any hardcoded user
  //     const matchedUser = hardcodedUsers.find(
  //       (user) =>
  //         user.email === values.prwu_email &&
  //         user.password === values.prwu_password
  //     );

  //     if (matchedUser) {
  //       // Dispatch success and navigate to home
  //       dispatch(loginSuccess(matchedUser));
  //       navigate("/home");
  //     } else {
  //       throw new Error("Invalid email or password");
  //     }
  //   } catch (error) {
  //     console.error("Login error", error);
  //     setErrors({ submit: "Invalid credentials or server error" });
  //     dispatch(loginFailure(error.message));
  //   } finally {
  //     setSubmitting(false);
  //   }
  // };

  const handleLogin = async (values, { setSubmitting, setErrors }) => {
    try {
      // Call MSAL login if needed
      await instance.loginPopup(loginRequest);

      // Proceed with your backend login
      dispatch(loginStart());
      const res = await fetch(LoginUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        throw new Error("Failed to login");
      }

      const user = await res.json();
      dispatch(loginSuccess(user));
      navigate("/home");
    } catch (error) {
      console.error("Login error", error);
      setErrors({ submit: "Invalid credentials or server error" });
      dispatch(loginFailure(error.message));
    } finally {
      setSubmitting(false);
    }
  };

  // const { instance, accounts } = useMsal(); // Ensure useMsal is used within an MsalProvider
  // const handleLogin = () => {
  //   instance
  //     .loginRedirect({
  //       scopes: ["user.read"],
  //     })
  //     .catch((error) => {
  //       console.error("Login error", error);
  //     });
  // };

  //  useEffect(() => {
  //     if (accounts.length > 0) {
  //       // User is already logged in, navigate to home page
  //       navigate('/home');
  //     } else {
  //       // Attempt silent token acquisition
  //       instance.acquireTokenSilent({
  //         scopes: ["user.read"],
  //         account: accounts[0] // If there's a signed-in account
  //       }).then(() => {
  //         navigate('/home');
  //       }).catch(() => {
  //         // Silent token acquisition failed; fallback to redirect login
  //         instance.loginRedirect({
  //           scopes: ["user.read"]
  //         });
  //       });
  //     }
  //   }, [accounts, instance, navigate]);

  return (
    <>
      <div className="App">
        {/* Navbar */}
        <LoginHeader />

        {/* Form */}
        <div className="grid grid-cols-12 gap-4">
          <div className="lg:col-start-5 lg:col-span-4 col-span-full px-4">
            <div className="w-full rounded border overflow-hidden shadow-lg mt-10 mb-6">
              <h3 className="font-medium bg-primary text-white px-4 py-4">
                Blue Book Online Services Member Login
              </h3>
              <Formik
                initialValues={{ prwu_email: "", prwu_password: "" }} // Updated keys
                validationSchema={validationSchema}
                onSubmit={handleLogin}
              >
                {({ isSubmitting, errors, touched }) => (
                  <Form>
                    <div className="space-y-12">
                      <div className="border-b border-gray-900/10 pb-12">
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 px-10">
                          <div className="col-span-full">
                            <label
                              htmlFor="prwu_email"
                              className="block text-sm text-left font-medium leading-6 text-gray-900"
                            >
                              Email Address:
                            </label>
                            <div className="mt-2">
                              <div className="flex rounded-md  shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-md">
                                <Field
                                  type="email"
                                  name="prwu_email" // Updated name to match backend expectation
                                  className={`block flex-1 border-0 bg-transparent py-1.5 pl-4 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 ${
                                    errors.prwu_email && touched.prwu_email
                                      ? "ring-red-500"
                                      : ""
                                  }`}
                                  placeholder="Enter your email"
                                />
                              </div>
                              <ErrorMessage
                                name="prwu_email"
                                component="div"
                                className="text-red-500 text-sm text-left"
                              />
                            </div>

                            <label
                              htmlFor="prwu_password"
                              className="block text-sm text-left font-medium leading-6 text-gray-900"
                            >
                              Password:
                            </label>
                            <div className="mt-2">
                              <div className="flex relative rounded-md shadow-sm ring-1 ring-inset ring-gray-300 sm:max-w-md">
                                <Field
                                  type={passwordVisible ? "text" : "password"}
                                  name="prwu_password" // Updated name to match backend expectation
                                  className={`block flex-1 border-0 bg-transparent py-1.5 pl-4 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 ${
                                    errors.prwu_password &&
                                    touched.prwu_password
                                      ? "ring-red-500"
                                      : ""
                                  }`}
                                  placeholder="Enter your password"
                                />
                                <button
                                  type="button"
                                  id="togglePassword"
                                  onClick={togglePasswordVisibility}
                                  className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
                                >
                                  {passwordVisible ? (
                                    <svg
                                      className="h-5"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    >
                                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                      <circle cx="12" cy="12" r="3" />
                                    </svg>
                                  ) : (
                                    <svg
                                      className="h-5"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    >
                                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                                      <line x1="1" y1="1" x2="23" y2="23" />
                                    </svg>
                                  )}
                                </button>
                              </div>
                              <ErrorMessage
                                name="prwu_password"
                                component="div"
                                className="text-red-500 text-sm text-left"
                              />
                              <p className="text-right cursor-pointer mt-1 mb-6 text-primary text-sm">
                                Forgot Password?
                              </p>
                            </div>

                            <div className="flex items-center mb-4">
                              <Field
                                id="default-checkbox"
                                type="checkbox"
                                name="rememberMe"
                                className="w-4 h-4 accent-[#235495] rounded"
                              />
                              <label
                                htmlFor="default-checkbox"
                                className="ms-2 text-sm font-medium text-primary dark:text-gray-300"
                              >
                                Keep Me Logged In
                              </label>
                            </div>

                            <button
                              type="submit"
                              className="rounded-md w-full bg-secondary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                              disabled={isSubmitting}
                            >
                              {isSubmitting ? "Logging in..." : "Login"}
                            </button>
                            {errors.submit && (
                              <div className="text-red-500 text-sm mt-2">
                                {errors.submit}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
            <div className="col-span-full mb-6">
              <p>
                Forgot which email address was used for registration? Has your
                email address changed? Contact Blue Book Services at 630
                668-3500 or{" "}
                <a
                  href="mailto:info@bluebookservices.com"
                  className="text-primary hover:text-secondary"
                >
                  info@bluebookservices.com
                </a>{" "}
                for assistance. <br />
                Visitors, find out more about{" "}
                <a
                  href="http://www.bluebookservices.com/"
                  className="text-primary hover:text-secondary"
                >
                  membership here
                </a>
                .
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <LoginFooter />
      </div>
    </>
  );
}

export default Login;
