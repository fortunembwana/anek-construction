export default function Footer() {
  return (
    <footer className="bg-[#0B335A] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold">Anek Construction</h3>
          <p className="text-sm mt-2">
            Building Malawi’s infrastructure with excellence and reliability.
          </p>
        </div>

        <div className="text-sm">
          <p>Phone: +265 999 300 826</p>
          <p>Email: info@anek.mw</p>
        </div>
      </div>

      <p className="text-center text-sm mt-6 opacity-70">
        © {new Date().getFullYear()} Anek Construction. All rights reserved.
      </p>
    </footer>
  );
}