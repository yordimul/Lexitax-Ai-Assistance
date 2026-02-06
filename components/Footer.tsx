export default function Footer() {
    return (
      <footer className="bg-[#0f172a] border-t border-white/5 py-12 px-10 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <span className="font-bold text-white">Lexi<span className="text-amber-500">Tax</span></span>
          <span>© 2026 LexiTax AI</span>
        </div>
        <div className="flex gap-6">
          <a href="mailto:supportLexiAI@gmail.com">supportLexiAI@gmail.com</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </footer>
    );
  }