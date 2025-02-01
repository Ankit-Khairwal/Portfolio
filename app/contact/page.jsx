const Contact = () => {
  return (
    <section className="py-16 bg-blue-600 text-white text-center">
      <h2 className="text-3xl font-bold">Let's Work Together</h2>
      <p className="mt-2 text-lg">
        Feel free to reach out for collaborations or freelance opportunities.
      </p>

      {/* Contact Details */}
      <div className="mt-6 space-y-4 text-lg">
        <p>
          📧{" "}
          <a href="mailto:khairwalankit7@gmail.com" className="underline">
            khairwalankit7@gmail.com
          </a>
        </p>
        <p>
          📞{" "}
          <a href="tel:9988049348" className="underline">
            9988049348
          </a>
        </p>
      </div>

      {/* Contact Button */}
      <a
        href="mailto:khairwalankit7@gmail.com"
        className="inline-block mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition"
      >
        Contact Me
      </a>
    </section>
  );
};

export default Contact;
