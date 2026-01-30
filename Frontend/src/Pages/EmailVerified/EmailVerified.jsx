import { useSearchParams, useNavigate } from "react-router-dom";

const EmailVerified = () => {
  const [params] = useSearchParams();
  const status = params.get("status");
  const email = params.get("email");
  const navigate = useNavigate();


  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 relative overflow-hidden">
  
      <div className="absolute top-0 left-0 w-full h-2 bg-blue-600"></div>
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-teal-100 rounded-full blur-3xl opacity-50"></div>

      <div className="bg-white border border-slate-100 shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] rounded-3xl p-8 md:p-12 max-w-md w-full text-center relative z-10">
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="bg-blue-600 p-1.5 rounded-lg">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-800">Med<span className="text-blue-600">Track</span></span>
        </div>

        {status === "success" ? (
          <div className="animate-in fade-in zoom-in duration-500">
            <div className="relative w-24 h-24 mx-auto mb-8">
              <div className="absolute inset-0 bg-emerald-100 rounded-full animate-ping opacity-25"></div>
              <div className="relative bg-emerald-50 w-24 h-24 rounded-full flex items-center justify-center border-4 border-white shadow-sm">
                <svg
                  className="w-12 h-12 text-emerald-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
            </div>
            
            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">
              Account Verified
            </h1>
            <p className="text-slate-500 mb-8 leading-relaxed">
              Welcome to the community! <span className="font-semibold text-slate-700">{email}</span> is now ready for use.
            </p>
          </div>
        ) : (
          <div className="animate-in fade-in zoom-in duration-500">
            <div className="bg-rose-50 w-24 h-24 mx-auto mb-8 rounded-full flex items-center justify-center border-4 border-white shadow-sm">
              <svg
                className="w-12 h-12 text-rose-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </div>
            
            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-3">
              Invalid Link
            </h1>
            <p className="text-slate-500 mb-8 leading-relaxed">
              This verification link has expired or is invalid. Please request a new one from your dashboard.
            </p>
          </div>
        )}

        <div className="space-y-4">
          <button
            onClick={() => navigate("/signin")}
            className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-lg shadow-blue-200 transition-all duration-200 active:scale-[0.98] flex items-center justify-center gap-2"
          >
            {status === "success" ? "Get Started" : "Back to Sign In"}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
          
          <p className="text-xs text-slate-400">
            Need help? <a href="#" className="text-blue-600 hover:underline font-medium">Contact MedTrack Support</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default EmailVerified;
