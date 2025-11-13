import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Vui lòng nhập email hợp lệ!");
      return;
    }
    alert(`Cảm ơn bạn đã đăng ký nhận tin: ${email}`);
    setEmail("");
  };

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  const featuredMovies = [
    { title: "Trái Tim Quê Quất", link: "/film/trai-tim" },
    { title: "Truy Tìm Lòng Điên Hương", link: "/film/truy-tim" },
    { title: "Bay Tiền", link: "/film/bay-tien" },
  ];

  return (
    <footer className="bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 text-gray-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-white tracking-wide">MPV</h2>
          <p className="text-gray-400">
            Rạp chiếu phim hàng đầu — trải nghiệm điện ảnh tuyệt vời.
          </p>
          <div className="flex gap-3 mt-4">
            {/* Social Icons */}
            {[
              { href: "https://facebook.com", color: "hover:text-blue-600", svgPath: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988H7.898v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" },
              { href: "https://twitter.com", color: "hover:text-blue-400", svgPath: "M22.162 5.656c-.637.283-1.322.475-2.043.56.734-.44 1.296-1.136 1.562-1.966-.687.407-1.45.703-2.262.862C18.77 4.89 17.836 4.5 16.796 4.5c-1.842 0-3.335 1.495-3.335 3.336 0 .262.03.516.086.76-2.772-.14-5.234-1.466-6.88-3.485-.287.492-.45 1.064-.45 1.674 0 1.154.587 2.173 1.48 2.768-.544-.017-1.056-.167-1.503-.417v.042c0 1.612 1.148 2.957 2.672 3.262-.28.077-.576.118-.88.118-.215 0-.424-.02-.627-.06.425 1.327 1.656 2.293 3.116 2.32-1.14.894-2.576 1.427-4.137 1.427-.269 0-.535-.016-.797-.047 1.475.945 3.226 1.495 5.111 1.495 6.134 0 9.49-5.082 9.49-9.488 0-.145-.003-.289-.01-.432.652-.472 1.216-1.06 1.664-1.731-.597.265-1.238.444-1.906.524.686-.411 1.21-1.062 1.458-1.836z" },
            ].map((icon, idx) => (
              <a
                key={idx}
                href={icon.href}
                target="_blank"
                rel="noreferrer"
                className={`text-gray-400 transition-transform transform hover:scale-125 ${icon.color}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d={icon.svgPath} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Liên kết</h3>
          <ul className="space-y-2">
            {[
              { name: "Trang chủ", path: "/" },
              { name: "Phim", path: "/film" },
              { name: "Lịch chiếu", path: "/showtimes" },
              { name: "Tin tức", path: "/news" },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold mb-4 text-white">Liên hệ</h3>
          <p>Email: <a href="mailto:info@mpv.vn" className="hover:text-white">info@mpv.vn</a></p>
          <p>Hotline: <a href="tel:19001234" className="hover:text-white">1900 1234</a></p>
          <p>Địa chỉ: FPT Polytechnic, đường TRịnh Văn Bô, Hà Nội</p>
        </div>

        {/* Newsletter */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold mb-4 text-white">Đăng ký nhận tin</h3>
          <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Nhập email của bạn"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <button
              type="submit"
              className="px-4 py-2 bg-primary hover:bg-primary-dark rounded text-white font-semibold transition-transform transform hover:scale-105"
            >
              Đăng ký
            </button>
          </form>
          <div className="mt-6">
            <h4 className="text-white font-semibold mb-2">Phim nổi bật</h4>
            <ul className="space-y-1">
              {featuredMovies.map((movie) => (
                <li key={movie.title}>
                  <Link to={movie.link} className="hover:text-primary transition-colors">
                    {movie.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800 mt-10 py-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} MPV. All rights reserved.
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary-dark transition-transform transform hover:scale-110"
        aria-label="Back to top"
      >
        ↑
      </button>
    </footer>
  );
};

export default Footer;
