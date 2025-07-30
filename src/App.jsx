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
import foto7 from './assets/j7.jpg';
import foto8 from './assets/j8.jpg';
import foto9 from './assets/j9.jpg';
import foto10 from './assets/j10.jpg';
import foto11 from './assets/j11.jpg';
import foto12 from './assets/j12.jpg';
import foto13 from './assets/j13.jpg';
import foto14 from './assets/j14.jpg';
import foto15 from './assets/j15.jpg';

const photos = [foto1, foto2, foto3, foto4, foto5, foto6, foto7, foto8, foto9, foto10, foto11, foto12, foto13, foto14, foto15];
const audioUrl = localAudio;

function App() {
  const audioRef = useRef(null);
  const [showPlayNotice, setShowPlayNotice] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    if (isStarted) {
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

      const tryPlayOnUserAction = () => {
        playAudio();
        setShowPlayNotice(false);
        window.removeEventListener('click', tryPlayOnUserAction);
      };

      window.addEventListener('click', tryPlayOnUserAction);
      return () => window.removeEventListener('click', tryPlayOnUserAction);
    }
  }, [isStarted]);

  return (
    <>
      {!isStarted ? (
        <div
          className="min-h-screen w-full flex flex-col items-center justify-center bg-black text-white relative"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0" />
          <div className="relative z-10 text-center px-6">
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 tracking-widest"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              style={{
                fontFamily: `'Georgia', serif`,
                color: '#FFD600',
                textShadow: '0 4px 24px rgba(255,255,255,0.2)',
              }}
            >
              JITG MEMORIES
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl italic text-white mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Sebuah perjalanan untuk dikenang.
            </motion.p>
            <motion.button
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-xl shadow-lg transition-all"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              onClick={() => {
                setIsStarted(true);
                if (audioRef.current) {
                  audioRef.current.play().catch(() => setShowPlayNotice(true));
                }
              }}
            >
              🎵 Mulai & Putar Musik
            </motion.button>
          </div>
        </div>
      ) : (
        <div
          className="min-h-screen w-full flex flex-col items-center justify-center py-8 relative overflow-visible"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 z-0 pointer-events-none" style={{ backgroundColor: 'rgba(19, 18, 18, 0.6)', backdropFilter: 'blur(1px)', WebkitBackdropFilter: 'blur(3px)' }} />
          <div className="relative z-20 flex flex-col items-center w-full">
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

            {/* Kutipan */}
            <div className="relative flex flex-col items-center justify-center mb-8 w-full px-4" style={{ maxWidth: '1076px' }}>
              <div className="w-full flex flex-col items-center justify-center rounded-3xl shadow-2xl border-4 border-yellow-300/80 bg-white/60 backdrop-blur-sm px-6 py-6 transition-all duration-500" style={{ boxShadow: '0 8px 32px 0 rgba(255, 193, 7, 0.15)' }}>
                <p className="italic text-center text-gray-800 font-semibold" style={{ fontSize: 'clamp(1.1rem, 2vw, 2.1rem)', lineHeight: 1.6, textShadow: '0 2px 8px rgba(255,255,255,0.5)', letterSpacing: '0.01em', maxWidth: '800px' }}>
                  "Dulu Kami Juga memiliki cerita dunia malam yang hebat, Tapi kami sekarang sudah di buku yang baru yang jauh lebih baik, Dengan judul yang berbeda-beda"
                </p>
                <p className="mt-12 text-center text-black font-extrabold uppercase tracking-wide" style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.4rem)', textShadow: '0 1px 4px rgba(255,255,255,0.4)', wordBreak: 'break-word', maxWidth: '800px' }}>
                  #SEHAT SELALU KAWAN DI MANA KALIAN BERADA.
                </p>
              </div>
            </div>

            {/* Galeri dengan animasi elegan */}
            <motion.div
              className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8 px-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              {photos.map((url, idx) => (
                <motion.img
                  key={idx}
                  src={url}
                  alt={`Kenangan ${idx + 1}`}
                  className="rounded-xl shadow-lg object-cover w-full h-64 border-2 border-yellow-300/80 bg-white/10"
                  initial={{ opacity: 0, scale: 0.95, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: [0, -4, 0] }}
                  transition={{
                    duration: 4 + idx * 0.2,
                    delay: idx * 0.1,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                  }}
                  whileHover={{
                    scale: 1.08,
                    rotate: 1,
                    boxShadow: '0 8px 32px 0 rgba(255, 255, 255, 0.4)',
                  }}
                  style={{ cursor: 'pointer', transition: 'box-shadow 0.3s, transform 0.3s' }}
                />
              ))}
            </motion.div>

            {/* Audio */}
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
      )}
    </>
  );
}

export default App;
