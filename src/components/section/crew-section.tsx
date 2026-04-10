"use client";
import { crew } from "@/lib/config";

export function CrewSection() {
  return (
    <section className="section-py" style={{ background: "linear-gradient(135deg, #f8f4ff 0%, #e8f4fd 100%)" }}>
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-label mb-3" style={{ color: "#7c3aed" }}>THE TEAM</p>
          <h2 className="heading-display text-foreground">
            The People Behind<br />
            <span style={{ color: "#7c3aed" }}>Every Job Well Done</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-base leading-relaxed">
            22 years. Thousands of homes. One team that shows up every single day.
          </p>
        </div>

        {/* Crew cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {crew.map((member) => (
            <div
              key={member.name}
              style={{
                background: "#ffffff",
                borderRadius: "1.25rem",
                padding: "2rem 1.5rem",
                boxShadow: "0 4px 24px rgba(124,58,237,0.08)",
                border: "1px solid rgba(124,58,237,0.12)",
                textAlign: "center",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              className="hover:scale-[1.02] hover:shadow-lg"
            >
              {/* Avatar */}
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 32,
                  margin: "0 auto 1rem",
                  boxShadow: "0 4px 16px rgba(124,58,237,0.3)",
                }}
              >
                {member.emoji}
              </div>

              {/* Name & role */}
              <h3 style={{ fontWeight: 900, fontSize: "1.1rem", color: "#1e1b4b", marginBottom: "0.25rem" }}>
                {member.name}
              </h3>
              <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "#7c3aed", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                {member.role}
              </p>

              {/* Years badge */}
              <div
                style={{
                  display: "inline-block",
                  background: "rgba(124,58,237,0.08)",
                  border: "1px solid rgba(124,58,237,0.2)",
                  borderRadius: "999px",
                  padding: "0.25rem 0.875rem",
                  fontSize: "0.7rem",
                  fontWeight: 800,
                  color: "#7c3aed",
                  marginBottom: "1rem",
                }}
              >
                {member.years} years with Smart Construction
              </div>

              {/* Quote */}
              <p style={{ fontSize: "0.85rem", color: "#64748b", lineHeight: 1.6, fontStyle: "italic" }}>
                "{member.quote}"
              </p>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-muted-foreground text-sm mt-10">
          🏆 Together, this team has completed <strong>15,000+ roofs</strong>, <strong>12,000+ siding projects</strong>, and recovered <strong>$47M+ in insurance settlements</strong> for Minnesota homeowners.
        </p>
      </div>
    </section>
  );
}
