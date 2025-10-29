import team from "@/config/team.json";

export default function Team() {
  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="bg-linear-to-br from-primary to-[#066026] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Meet the Minds Behind FarmAI
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Passionate innovators and field experts building an AI super app to
            support farmers worldwide.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.members.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className="w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full border-[6px] border-primary/10">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (
                        e.target as HTMLImageElement
                      ).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                        member.name
                      )}&background=0a7c2f&color=fff&size=128`;
                    }}
                  />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">
                  {member.name}
                </h3>
                <p className="text-secondary font-semibold mb-4">
                  {member.role}
                </p>
                <p className="text-muted leading-relaxed text-sm">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 bg-linear-to-b from-bg to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-primary mb-6">
            Want to Join Our Team?
          </h2>
          <p className="text-lg text-muted mb-8">
            We're always looking for passionate individuals who want to make a
            difference in agriculture and technology.
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary text-white px-10 py-4 rounded-xl font-bold hover:bg-primary/90 transition-colors"
          >
            View Open Positions
          </a>
        </div>
      </section>
    </div>
  );
}
