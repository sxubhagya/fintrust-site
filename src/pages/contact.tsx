import type { NextPage } from 'next';

const ContactPage: NextPage = () => {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="text-3xl font-bold">Contact</h1>
      <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input className="mt-1 w-full rounded border p-2" type="text" placeholder="Your name" />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            className="mt-1 w-full rounded border p-2"
            type="email"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Message</label>
          <textarea
            className="mt-1 w-full rounded border p-2"
            rows={4}
            placeholder="Your message"
          />
        </div>
        <button className="rounded bg-brand px-4 py-2 font-medium text-white" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
