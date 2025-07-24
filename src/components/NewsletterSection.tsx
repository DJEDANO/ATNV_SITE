import { useState } from "react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");
    setIsSubmitting(true);

    if (!email.trim()) {
      setMessage("Veuillez entrer une adresse email.");
      setIsSubmitting(false);
      return;
    }

    // Simulation d’un envoi à un backend
    setTimeout(() => {
      console.log("Tentative d'abonnement avec :", email);
      setMessage(
        "Merci pour votre abonnement. Vous recevrez nos derniers articles et actualités dès leur publication."
      );
      setEmail("");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section className="mt-16 bg-emerald-50 rounded-xl p-8 text-center">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Restez informé</h2>
      <p className="text-gray-600 mb-6">
        Abonnez-vous à notre newsletter pour recevoir nos derniers articles et actualités
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row max-w-md mx-auto space-y-3 sm:space-y-0 sm:space-x-3"
      >
        <input
          type="email"
          placeholder="Votre adresse email"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={isSubmitting}
        />

        <button
          type="submit"
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-md font-medium transition-colors"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Envoi..." : "S'abonner"}
        </button>
      </form>

      {message && (
        <p
          className={`mt-4 text-sm font-semibold ${
            message.startsWith("Merci") ? "text-emerald-700" : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}
    </section>
  );
}
