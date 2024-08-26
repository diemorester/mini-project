"use client";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function Page() {
  const [referralCode, setReferralCode] = useState("");
  const [showReferralForm, setShowReferralForm] = useState(false);
  const [message, setMessage] = useState("");
  const [generatedReferralCode, setGeneratedReferralCode] = useState("");
  const params = useParams();
  const router = useRouter();

  const handleVerify = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/users/activate`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${params.token}`,
          },
          body: JSON.stringify({ referral: referralCode }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        if (data.referralCode) {
          setGeneratedReferralCode(data.referralCode);
          setShowReferralForm(true);
        } else {
          router.push("/login");
        }
      } else {
        setMessage(typeof data.message === 'string' ? data.message : "Activation failed");
      }
    } catch (err) {
      console.log(err);
      setMessage("An error occurred");
    }
  };

  const handleReferralSubmit = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/users/activate`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${params.token}`,
          },
          body: JSON.stringify({ referral: referralCode }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        router.push("/login");
      } else {
        setMessage(typeof data.message === 'string' ? data.message : "Referral submission failed");
      }
    } catch (err) {
      console.log(err);
      setMessage("An error occurred");
    }
  };

  return (
    <div className="flex min-h-[60vh] flex-col w-[480px] items-center mx-auto justify-center gap-8">
      <h1 className="text-2xl font-bold">Click Here to activate your account</h1>
      {showReferralForm ? (
        <div className="flex flex-col items-center gap-4">
          {generatedReferralCode && (
            <p>Your referral code: <span className="font-bold">{generatedReferralCode}</span></p>
          )}
          <input
            type="text"
            value={referralCode}
            onChange={(e) => setReferralCode(e.target.value)}
            placeholder="Enter referral code from someone else"
            className="border px-4 py-2 rounded"
          />
          <button
            className="bg-primary-500 px-4 py-2 text-white rounded-full transition-all hover:bg-primary-50 hover:text-black"
            onClick={handleReferralSubmit}
          >
            Submit Referral Code
          </button>
        </div>
      ) : (
        <button
          className="bg-primary-500 px-4 py-2 text-white rounded-full transition-all hover:bg-primary-50 hover:text-black"
          onClick={handleVerify}
        >
          Activate Account
        </button>
      )}
      {message && (
        <p className="text-red-500">{message}</p>
      )}
    </div>
  );
}  