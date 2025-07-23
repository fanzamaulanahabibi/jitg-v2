import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import bgImage from './assets/bar.jpg';
import localAudio from './assets/sjitg.mp3';
import foto1 from './assets/1j.jpg';
import foto2 from './assets/2j.jpg';
import foto3 from './assets/3j.jpg';
import foto4 from './assets/4j.jpg';
import foto5 from './assets/5j.jpg';
import foto6 from './assets/6j.jpg';

const photos = [foto1, foto2, foto3, foto4, foto5, foto6];

const audioUrl = localAudio;

function App() {
  const audioRef = useRef(null);
  const [showPlayNotice, setShowPlayNotice] = useState(false);

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => setShowPlayNotice(false))
            .catch(() => setShowPlayNotice(true));
        }
      }
    };
    playAudio();
    // Jika autoplay gagal, dengarkan klik user untuk coba play lagi
    const tryPlayOnUserAction = () => {
      playAudio();
      setShowPlayNotice(false);
      window.removeEventListener('click', tryPlayOnUserAction);
    };
    window.addEventListener('click', tryPlayOnUserAction);
    return () => window.removeEventListener('click', tryPlayOnUserAction);
  }, []);

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center py-8 relative overflow-visible"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay nostalgia */}
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ backgroundColor: 'rgba(19, 18, 18, 0.6)', backdropFilter: 'blur(1px)', WebkitBackdropFilter: 'blur(3px)' }} />
      {/* Konten utama */}
      <div className="relative z-20 flex flex-col items-center w-full">
        {/* Nama Tim */}
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold mb-6 tracking-widest text-center"
          style={{
            fontFamily: `'Georgia', 'Times New Roman', serif`,
            background: 'linear-gradient(90deg, #FFD600 30%, #FF9800 70%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 4px 24px #FFD60055, 0 2px 8px #FF980099',
            letterSpacing: '0.18em',
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          JITG
        </motion.h1>
        {/* Box Kutipan */}
        <div
  className="relative flex flex-col items-center justify-center mb-8 w-full"
  style={{ maxWidth: '1076px', minHeight: '220px', height: 'clamp(220px, 40vw, 400px)' }}
>
  <div
    className="w-full h-full flex flex-col items-center justify-center rounded-3xl shadow-2xl border-4 border-yellow-300/80 bg-white/60 backdrop-blur-sm transition-all duration-500 px-6 py-4"
    style={{ boxShadow: '0 8px 32px 0 rgba(255, 193, 7, 0.15)' }}
  >
    {/* KUTIPAN UTAMA */}
    <p
      className="italic text-center text-gray-800 font-semibold px-4 md:px-8"
      style={{
        fontSize: 'clamp(1.1rem, 2vw, 2.2rem)',
        lineHeight: 1.4,
        textShadow: '0 2px 8px rgba(255,255,255,0.5)',
        letterSpacing: '0.01em',
      }}
    >
      "Dulu Kami Juga memilki cerita dunia malam yang hebat, Tapi kami sekarang sudah di buku yang baru yang jauh lebih baik, Dengan judul yang berbeda beda"
    </p>

    {/* TEKS TAMBAHAN */}
    <p
      className="mt-15 text-center text-black-900 font-extrabold uppercase tracking-wide"
      style={{
        fontSize: 'clamp(1rem, 1.4vw, 1.5rem)',
        textShadow: '0 1px 4px rgba(0, 0, 0, 0.4)',
      }}
    >
      SEHAT SELALU KAWAN DI MANA KALIAN BERADA.
    </p>
  </div>
</div>

        {/* Foto-foto */}
        <div className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8 px-2">
          {photos.map((url, idx) => (
            <motion.img
              key={idx}
              src={url}
              alt={`Kenangan ${idx + 1}`}
              className="rounded-xl shadow-lg object-cover w-full h-64 border-2 border-yellow-300/80 bg-white/10"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              whileHover={{ scale: 1.06, boxShadow: '0 8px 32px 0 rgba(255, 193, 7, 0.25)' }}
              style={{ cursor: 'pointer', transition: 'box-shadow 0.3s, transform 0.3s' }}
            />
          ))}
        </div>
        {/* Audio player fixed pojok kanan bawah */}
        <div className="fixed right-4 bottom-4 z-30 flex flex-col items-end" style={{ minWidth: 0 }}>
          <div className="bg-white/90 rounded-2xl shadow-xl p-2 flex flex-col items-center w-[340px] max-w-[90vw] h-[60px] justify-center border border-yellow-200">
            <audio ref={audioRef} src={audioUrl} controls autoPlay loop className="w-full h-10" style={{ outline: 'none' }} />
            {showPlayNotice && (
              <div className="mt-1 px-2 py-1 bg-yellow-200 text-yellow-900 rounded shadow text-xs animate-pulse">
                Klik di mana saja untuk memulai musik
              </div>
            )}
          </div>
        </div>
        <footer className="mt-8 text-white text-sm drop-shadow">&copy; 2022-2025 JITG MEMORIES </footer>
      </div>
    </div>
  );
}

export default App;
