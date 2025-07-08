'use client';

import Link from 'next/link';

export default function WebinarAd() {
  return (
    <section id='webinar' className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-12 px-6 rounded-2xl shadow-xl mx-auto my-10 text-center  !m-3">
      <h2 className="text-3xl font-bold mb-4"> Join Our Free Tech Training Webinar!</h2>
      <p className="text-lg mb-6">
        Level up your skills in Web Development, AI, and Cloud Computing. Learn from industry experts and get real-world insights.
      </p>
      <p className="font-semibold text-yellow-300 mb-6">
        Date: July 26th, 2025 &nbsp; | &nbsp; 🕒 Time: 4PM (WAT)
      </p>
      <Link href="https://docs.google.com/forms/d/e/1FAIpQLSehgBn2S7GnF0stc4KsAX0TdZ0LXMPwco7ltE15jnG4HvlwrA/viewform" target='_blank' passHref>
        <button className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-full hover:bg-yellow-300 hover:text-black transition duration-300">
          Reserve Your Spot Now
        </button>
      </Link>
    </section>
  );
}
