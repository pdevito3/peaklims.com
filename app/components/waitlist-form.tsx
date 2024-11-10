import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { cn } from "~/utils";
export function RequestAccessForm({
  classNames,
}: {
  classNames?: {
    root?: string;
    form?: string;
    content?: string;
  };
}) {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const mutation = useMutation({
    mutationFn: subscribeEmail,
    onSuccess: () => {
      setSuccessMessage("Awesome, we'll be in touch!");
      setErrorMessage(null);
      setEmail("");
    },
    onError: (error) => {
      setErrorMessage("An error occurred. Please try again.");
      setSuccessMessage(null);
      setEmail("");
    },
  });

  const handleSubscribe = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutation.mutate({ email, tags: ["early requestor"] });
  };

  return (
    <div
      className={cn(
        "flex items-center justify-center w-full",
        classNames?.root
      )}
    >
      <form
        className={cn(
          "flex items-center justify-center w-full",
          classNames?.form
        )}
        onSubmit={handleSubscribe}
      >
        <div className={cn("relative w-full sm:max-w-md", classNames?.content)}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full px-4 py-3 text-base text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 focus:outline-none pr-[160px]"
            placeholder="Enter your work email"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center px-4 py-1.5 justify-center text-base font-semibold text-white bg-emerald-600 border border-transparent rounded-md shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-0"
          >
            Join Waitlist
          </button>
        </div>
      </form>

      {successMessage && !errorMessage && (
        <div className="text-center font-semibold mt-4 text-green-600">
          {successMessage}
        </div>
      )}
      {errorMessage && (
        <div className="text-center font-semibold mt-4 text-rose-600">
          {errorMessage}
        </div>
      )}
    </div>
  );
}

async function subscribeEmail({
  email,
  tags,
}: {
  email: string;
  tags: string[];
}) {
  const response = await fetch(
    "https://api.convertkit.com/v3/forms/6923037/subscribe",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        api_key: "aFI-BFw65ze9YH5syuGbaA",
        email: email,
        tags: tags, // Optional: include only if you want to tag subscribers
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
}
