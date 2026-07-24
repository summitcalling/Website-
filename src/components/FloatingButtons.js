import { site, telLink, whatsappLink } from "@/data/site";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={telLink()}
        aria-label={`Call ${site.name}`}
        className="flex items-center justify-center rounded-full bg-sky text-white shadow-lg shadow-sky/30 transition-transform hover:scale-105"
        style={{ height: 52, width: 52 }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1L6.6 10.8z" />
        </svg>
      </a>
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noreferrer"
        aria-label={`Chat with ${site.name} on WhatsApp`}
        className="flex items-center justify-center rounded-full bg-whatsapp text-white shadow-lg shadow-whatsapp/30 transition-transform hover:scale-105"
        style={{ height: 52, width: 52 }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2a10 10 0 00-8.6 15L2 22l5.2-1.4A10 10 0 1012 2zm0 1.8a8.2 8.2 0 014.9 14.8l-.3.2.1 2.4-2.5-.7-.3.1A8.2 8.2 0 1112 3.8zm-3.3 4a.9.9 0 00-.7.3c-.2.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.1 1.8 2.8 4.4 3.9 2.2.9 2.6.7 3.1.7.5-.1 1.6-.6 1.8-1.3.2-.6.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3l-2-1c-.3-.1-.5-.1-.6.1l-.9 1.1c-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.4.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.1c-.2-.5-.4-.4-.6-.4h-.5z" />
        </svg>
      </a>
    </div>
  );
}
