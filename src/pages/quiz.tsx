// src/pages/quiz.tsx
import { useState } from "react";
import LottiePlayer from "../components/LottiePlayer";
import loadingAnimation from "/public/animations/loading.json";
import successAnimation from "/public/animations/success.json";

type Step = 0 | 1 | 2 | 3;

export default function Quiz() {
  const [step, setStep] = useState<Step>(0);
  const [answers, setAnswers] = useState<{ [k: string]: string }>({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const next = () => setStep((s) => (s < 3 ? ((s + 1) as Step) : s));
  const prev = () => setStep((s) => (s > 0 ? ((s - 1) as Step) : s));

  const submit = async () => {
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200)); // simulate API call
    setSubmitting(false);
    setDone(true);
  };

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Quick insight quiz</h1>

      {!done && (
        <div className="bg-white rounded shadow p-6 w-full max-w-xl">
          {step === 0 && (
            <div className="space-y-4">
              <p className="text-gray-700">What kind of signals are you collecting?</p>
              <select
                className="border p-2 w-full"
                value={answers.signals || ""}
                onChange={(e) => setAnswers({ ...answers, signals: e.target.value })}
              >
                <option value="">Select</option>
                <option value="feedback">User feedback</option>
                <option value="analytics">Product analytics</option>
                <option value="ops">Operational metrics</option>
              </select>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-4">
              <p className="text-gray-700">How often do you publish reports?</p>
              <select
                className="border p-2 w-full"
                value={answers.cadence || ""}
                onChange={(e) => setAnswers({ ...answers, cadence: e.target.value })}
              >
                <option value="">Select</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="quarterly">Quarterly</option>
              </select>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <p className="text-gray-700">Do you need role-based access?</p>
              <select
                className="border p-2 w-full"
                value={answers.roles || ""}
                onChange={(e) => setAnswers({ ...answers, roles: e.target.value })}
              >
                <option value="">Select</option>
                <option value="viewer">Viewer only</option>
                <option value="editor">Editors + viewers</option>
                <option value="admin">Admins + editors + viewers</option>
              </select>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <p className="text-gray-700">Ready to generate your recommendation?</p>
              <ul className="text-sm text-gray-600 list-disc pl-6">
                <li>Signals: {answers.signals || "-"}</li>
                <li>Cadence: {answers.cadence || "-"}</li>
                <li>Roles: {answers.roles || "-"}</li>
              </ul>
            </div>
          )}

          <div className="flex justify-between mt-6">
            <button className="px-3 py-2 border rounded" onClick={prev} disabled={step === 0}>
              Back
            </button>
            {step < 3 ? (
              <button className="px-3 py-2 bg-black text-white rounded" onClick={next}>
                Next
              </button>
            ) : (
              <button
                className="px-3 py-2 bg-orange-600 text-white rounded"
                onClick={submit}
                disabled={submitting}
              >
                {submitting ? "Submitting..." : "Generate"}
              </button>
            )}
          </div>
        </div>
      )}

      {submitting && (
        <div className="mt-8">
          <LottiePlayer animation={loadingAnimation} className="h-24 w-24" />
        </div>
      )}

      {done && (
        <div className="bg-white rounded shadow p-6 w-full max-w-xl mt-6 text-center">
          <LottiePlayer animation={successAnimation} loop={false} className="h-32 w-32 mx-auto" />
          <h2 className="text-xl font-bold mt-4">Recommendation ready</h2>
          <p className="text-gray-700">Check your inbox for a PDF summary and next steps.</p>
        </div>
      )}
    </main>
  );
}
