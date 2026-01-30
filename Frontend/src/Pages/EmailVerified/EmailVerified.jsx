import { useSearchParams, useNavigate } from "react-router-dom";

const EmailVerified = () => {
  const [params] = useSearchParams();
  const status = params.get("status");
  const email = params.get("email");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-2xl rounded-xl p-8 md:p-12 max-w-md w-full text-center">
        {status === "success" ? (
          <>
            <svg
              className="w-20 h-20 mx-auto mb-6 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <h1 className="text-3xl font-bold text-green-600 mb-4">
              ✅ Email Verified
            </h1>
            <p className="text-gray-700 mb-6">
              {email} has been successfully verified!
            </p>
          </>
        ) : (
          <>
            <svg
              className="w-20 h-20 mx-auto mb-6 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <h1 className="text-3xl font-bold text-red-600 mb-4">
              ❌ Verification Failed
            </h1>
            <p className="text-gray-700 mb-6">
              The verification link is invalid or has expired.
            </p>
          </>
        )}

        <button
          onClick={() => navigate("/signin")}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg transition duration-150"
        >
          Go to Login
        </button>
      </div>
    </div>
  );
};

export default EmailVerified;
