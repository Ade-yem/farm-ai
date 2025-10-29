import { useState } from "react";
import faq from "@/config/faq.json";

export default function FAQ() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  const toggleQuestion = (question: string) => {
    setOpenQuestion(openQuestion === question ? null : question);
  };

  const filteredCategories = faq.categories
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (q) =>
          q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((category) => category.questions.length > 0);

  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="bg-linear-to-br from-primary to-[#066026] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-white/90">
            Find answers to common questions about FarmAI and how we can help
            you succeed.
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 pr-12 rounded-xl border-2 border-green-200 focus:border-primary focus:outline-none transition-colors"
            />
            <svg
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredCategories.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted text-lg">
                No results found. Try a different search term.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredCategories.map((category, categoryIndex) => (
                <div
                  key={categoryIndex}
                  className="bg-white rounded-xl border-2 border-green-100 overflow-hidden"
                >
                  {/* Category Header */}
                  <button
                    onClick={() => toggleCategory(category.category)}
                    className="w-full px-6 py-4 bg-primary text-white font-bold text-left flex items-center justify-between hover:bg-primary/90 transition-colors"
                  >
                    <span className="text-white">{category.category}</span>
                    <svg
                      className={`w-5 h-5 transform transition-transform ${
                        openCategory === category.category ? "rotate-180" : ""
                      }`}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Questions */}
                  {openCategory === category.category && (
                    <div className="p-6 space-y-4">
                      {category.questions.map((item, questionIndex) => (
                        <div
                          key={questionIndex}
                          className="border-b border-green-50 last:border-b-0 pb-4 last:pb-0"
                        >
                          <button
                            onClick={() =>
                              toggleQuestion(
                                `${category.category}-${questionIndex}`
                              )
                            }
                            className="w-full text-left flex items-start justify-between gap-4 hover:text-primary transition-colors"
                          >
                            <span className="font-semibold text-lg flex-1">
                              {item.question}
                            </span>
                            <svg
                              className={`w-5 h-5 text-muted shrink-0 transform transition-transform ${
                                openQuestion ===
                                `${category.category}-${questionIndex}`
                                  ? "rotate-180"
                                  : ""
                              }`}
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                          {openQuestion ===
                            `${category.category}-${questionIndex}` && (
                            <div className="mt-3 text-muted leading-relaxed pl-0">
                              {item.answer}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-linear-to-b from-bg to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-muted mb-6">
            Still have questions? We're here to help!
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary text-white px-10 py-3 rounded-xl font-bold hover:bg-primary/90 transition-colors"
          >
            Contact Support
          </a>
        </div>
      </section>
    </div>
  );
}
