
"use client";
import { useState } from 'react';

export default function Faq() {
  // State to manage which accordion is open
  const [open, setOpen] = useState<number | null>(null);

  // Toggle function
  const toggleAccordion = (index: number) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-manrope text-center font-bold text-gray-900 leading-[3.25rem]">
              Frequently Asked Questions
            </h2>
          </div>

          {/* Accordion container */}
          <div>

            {/* First FAQ item */}
            <div className="accordion border border-solid border-gray-300 p-4 rounded-xl mb-8 lg:p-4">
              <button
                onClick={() => toggleAccordion(1)} // Use React's onClick
                className="accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-gray-900 w-full transition duration-500 hover:text-indigo-600"
              >
                <h5>How can I reset my password?</h5>
                {/* SVG for collapsed state */}
                {open !== 1 && (
                  <svg className="w-6 h-6 text-gray-900 transition duration-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                    <path d="M6 12H18M12 18V6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                )}
                {/* SVG for expanded state */}
                {open === 1 && (
                  <svg className="w-6 h-6 text-gray-900 transition duration-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                    <path d="M6 12H18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                )}
              </button>
              {open === 1 && (
                <div className="accordion-content w-full overflow-hidden pr-4 transition-all duration-300" style={{ maxHeight: '250px' }}>
                  <p className="text-base text-gray-900 font-normal leading-6">
                    To create an account, find the 'Sign up' or 'Create account' button, fill out the registration form with your personal information, and click 'Create account' or 'Sign up.' Verify your email address if needed, and then log in to start using the platform.
                  </p>
                </div>
              )}
            </div>

            {/* Second FAQ item */}
            <div className="accordion border border-solid border-gray-300 p-4 rounded-xl mb-8 lg:p-4">
              <button
                onClick={() => toggleAccordion(2)} // Use React's onClick
                className="accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-gray-900 w-full transition duration-500 hover:text-indigo-600"
              >
                <h5>How do I update my billing information?</h5>
                {/* SVG for collapsed state */}
                {open !== 2 && (
                  <svg className="w-6 h-6 text-gray-900 transition duration-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                    <path d="M6 12H18M12 18V6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                )}
                {/* SVG for expanded state */}
                {open === 2 && (
                  <svg className="w-6 h-6 text-gray-900 transition duration-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                    <path d="M6 12H18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                )}
              </button>
              {open === 2 && (
                <div className="accordion-content w-full overflow-hidden pr-4 transition-all duration-300" style={{ maxHeight: '250px' }}>
                  <p className="text-base text-gray-900 font-normal leading-6">
                    To create an account, find the 'Sign up' or 'Create account' button, fill out the registration form with your personal information, and click 'Create account' or 'Sign up.' Verify your email address if needed, and then log in to start using the platform.
                  </p>
                </div>
              )}
            </div>

            {/* Third FAQ item */}
            <div className="accordion border border-solid border-gray-300 p-4 rounded-xl mb-8 lg:p-4">
              <button
                onClick={() => toggleAccordion(3)} // Use React's onClick
                className="accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-gray-900 w-full transition duration-500 hover:text-indigo-600"
              >
                <h5>How can I contact customer support?</h5>
                {/* SVG for collapsed state */}
                {open !== 3 && (
                  <svg className="w-6 h-6 text-gray-900 transition duration-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                    <path d="M6 12H18M12 18V6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                )}
                {/* SVG for expanded state */}
                {open === 3 && (
                  <svg className="w-6 h-6 text-gray-900 transition duration-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                    <path d="M6 12H18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                )}
              </button>
              {open === 3 && (
                <div className="accordion-content w-full overflow-hidden pr-4 transition-all duration-300" style={{ maxHeight: '250px' }}>
                  <p className="text-base text-gray-900 font-normal leading-6">
                    To create an account, find the 'Sign up' or 'Create account' button, fill out the registration form with your personal information, and click 'Create account' or 'Sign up.' Verify your email address if needed, and then log in to start using the platform.
                  </p>
                </div>
              )}
            </div>

            {/* Fourth FAQ item */}
            <div className="accordion border border-solid border-gray-300 p-4 rounded-xl mb-8 lg:p-4">
              <button
                onClick={() => toggleAccordion(4)} // Use React's onClick
                className="accordion-toggle group inline-flex items-center justify-between text-left text-lg font-normal leading-8 text-gray-900 w-full transition duration-500 hover:text-indigo-600"
              >
                <h5>How do I delete my account?</h5>
                {/* SVG for collapsed state */}
                {open !== 4 && (
                  <svg className="w-6 h-6 text-gray-900 transition duration-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                    <path d="M6 12H18M12 18V6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                )}
                {/* SVG for expanded state */}
                {open === 4 && (
                  <svg className="w-6 h-6 text-gray-900 transition duration-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                    <path d="M6 12H18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                )}
              </button>
              {open === 4 && (
                <div className="accordion-content w-full overflow-hidden pr-4 transition-all duration-300" style={{ maxHeight: '250px' }}>
                  <p className="text-base text-gray-900 font-normal leading-6">
                    To create an account, find the 'Sign up' or 'Create account' button, fill out the registration form with your personal information, and click 'Create account' or 'Sign up.' Verify your email address if needed, and then log in to start using the platform.
                  </p>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
