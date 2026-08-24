import { site, telLink, whatsappLink } from "@/data/site";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-12 right-5 z-40 flex flex-col gap-3 sm:bottom-5">
      <div className="relative" style={{ height: 52, width: 52 }}>
        <span className="absolute inset-0 rounded-full bg-sky opacity-75 animate-ping" />
        <a
          href={telLink()}
          aria-label={`Call ${site.name}`}
          className="relative flex h-full w-full items-center justify-center rounded-full bg-sky text-white shadow-lg shadow-sky/30 transition-transform hover:scale-105"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1L6.6 10.8z" />
          </svg>
        </a>
      </div>
      <div className="relative" style={{ height: 52, width: 52 }}>
        <span className="absolute inset-0 rounded-full bg-whatsapp opacity-75 animate-ping" />
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noreferrer"
          aria-label={`Chat with ${site.name} on WhatsApp`}
          className="relative flex h-full w-full items-center justify-center rounded-full bg-whatsapp text-white shadow-lg shadow-whatsapp/30 transition-transform hover:scale-105"
        >
          <svg width="24" height="24" viewBox="0 0 16 16" fill="currentColor">
            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.006-3.492c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.593-6.593 6.593zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.588-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.337-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
          </svg>
        </a>
      </div>
    </div>
  );
}
