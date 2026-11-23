import React from "react";

export function DeactivatedNotice() {
  return (
    <div
      style={{
        minHeight: "100vh",
        margin: 0,
        backgroundColor: "#0d1117",
        backgroundImage:
          "radial-gradient(1200px 600px at 50% -10%, #1a2230 0%, #0d1117 55%)",
        color: "#e8edf3",
        fontFamily:
          '"Plus Jakarta Sans", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        lineHeight: 1.55,
        boxSizing: "border-box",
      }}
    >
      <main
        style={{
          maxWidth: "520px",
          width: "100%",
          backgroundColor: "#161b22",
          border: "1px solid #232b36",
          borderRadius: "18px",
          padding: "40px 32px 28px",
          textAlign: "center",
          boxShadow: "0 24px 60px rgba(0,0,0,0.45)",
          boxSizing: "border-box",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "16px",
            backgroundColor: "#2a2113",
            border: "1px solid #3a2f17",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 22px",
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ width: "30px", height: "30px", stroke: "#d4a24e" }}
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 2" />
          </svg>
        </div>

        <h1
          style={{
            fontSize: "23px",
            fontWeight: 700,
            margin: "0 0 10px",
            letterSpacing: "-0.01em",
            color: "#e8edf3",
          }}
        >
          Website Sementara Tidak Aktif
        </h1>
        <p
          style={{
            margin: "0 auto",
            color: "#8b97a7",
            fontSize: "15px",
            maxWidth: "40ch",
          }}
        >
          Mohon maaf, halaman ini sedang tidak dapat diakses untuk sementara
          karena proses administrasi. Silakan kembali lagi nanti.
        </p>

        <div
          style={{
            height: "1px",
            backgroundColor: "#232b36",
            margin: "28px 0 20px",
          }}
        />

        <div
          style={{
            fontSize: "12.5px",
            color: "#8b97a7",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: "14px",
          }}
        >
          Website ini dibuat oleh
        </div>

        <a
          href="https://www.hammad.studio"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "block",
            backgroundColor: "#161b22",
            border: "1px solid #232b36",
            borderRadius: "12px",
            padding: "16px 18px",
            textAlign: "left",
            textDecoration: "none",
            transition: "border-color 0.2s, background 0.2s",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "12px",
            }}
          >
            <div>
              <div style={{ fontWeight: 700, color: "#e8edf3", fontSize: "15px" }}>
                <span style={{ fontWeight: 800, color: "#d4a24e" }}>
                  Hammad Studio
                </span>
              </div>
              <div style={{ color: "#8b97a7", fontSize: "13px", marginTop: "3px" }}>
                Jasa pembuatan website profesional untuk usahamu
              </div>
            </div>
            <div
              aria-hidden="true"
              style={{
                color: "#d4a24e",
                fontWeight: 700,
                fontSize: "18px",
                flex: "none",
              }}
            >
              &rarr;
            </div>
          </div>
        </a>

        <div
          style={{
            marginTop: "18px",
            fontSize: "11.5px",
            color: "#5c6775",
          }}
        >
          Butuh website untuk bisnismu? Kunjungi hammad.studio
        </div>
      </main>
    </div>
  );
}
