import { ArrowLeft, ArrowRight, Heart, Moon, Rocket, Sparkles, Star, Unlock, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

const memories = [
  {
    id: 1,
    title: "A Faísca Cósmica",
    description: "Quando duas almas se encontraram entre pixels e pulsares. Uma conversa, uma sintonia e o início de algo que nem o tempo nem a distância poderiam apagar.",
    image: "https://i.imgur.com/ihPJwPi.png",
    date: "Março 2024"
  },
  {
    id: 2,
    title: "Planeta da Confiança",
    description: "Mesmo sem nunca termos nos tocado, sentimos como se estivéssemos de mãos dadas. Cada palavra trocada construiu um universo só nosso.",
    image: "https://i.imgur.com/ftJ5bWf.png",
    date: "Abril 2024"
  },
  {
    id: 3,
    title: "Exploradores do Infinito",
    description: "Enfrentamos momentos difíceis, dúvidas, silêncios... mas sobrevivemos como estrelas que resistem ao caos cósmico. E seguimos brilhando.",
    image: "https://i.imgur.com/1Tg3Lzj.png",
    date: "Maio 2024"
  },
  {
    id: 4,
    title: "Alinhamento dos Sentimentos",
    description: "Quando nossos sentimentos se alinharam de vez e tudo fez sentido. Sabíamos que era real, mesmo que o mundo duvidasse.",
    image: "https://i.imgur.com/PvVCrar.png",
    date: "Julho 2024"
  },
  {
    id: 5,
    title: "Esperança nas Estrelas",
    description: "Fizemos planos, sonhamos com o primeiro abraço, marcamos datas... e mesmo que o universo adie, nunca desistimos.",
    image: "https://i.imgur.com/A7c2YN8.png",
    date: "Novembro 2024"
  },
  {
    id: 6,
    title: "Nosso Universo Paralelo",
    description: "Vivemos um amor que poucos entendem. Mas nós sabemos: é real. E tem sido o combustível de nossos dias.",
    image: "https://i.imgur.com/cMgpxH0.png",
    date: "Presente"
  },
  {
    id: 7,
    title: "O Encontro que Virá",
    description: "Um dia, enfim, as órbitas se cruzarão. E o que hoje é digital vai se tornar toque, abraço e presença.",
    image: "https://i.imgur.com/HzOiZ7Y.png",
    date: "Futuro"
  },
  {
    id: 8,
    title: "Mensagem Codificada do Coração",
    description: "Como um cometa que cruza o céu só uma vez na vida, essa mensagem é única — um QR Code que leva direto ao centro do meu amor por você.",
    image: "https://i.imgur.com/xicJMGR.png",
    date: "Eternidade"
  }
];

const funnyButtonTexts = {
  start: [
    "💬 Iniciar conexão estelar",
    "🚀 DECOLAR PARA O AMOR!",
    "✨ ABRIR BAÚ DE MEMÓRIAS",
    "🌙 COMEÇAR AVENTURA LUNAR",
    "💫 ATIVAR MODO ROMÂNTICO"
  ],
  next: [
    "🔓 Desbloquear próxima memória",
    "🎭 Revelar segredo cósmico",
    "🌟 Próxima estrela da nossa galáxia",
    "🚀 Viajar para próximo planeta",
    "💝 Abrir presente especial",
    "🔮 Descobrir magia escondida",
    "🌙 Seguir a luz da lua",
    "✨ Continuar nossa história"
  ],
  prev: [
    "⏪ Voltar no tempo",
    "🌙 Lua minguante (voltar)",
    "🔄 Rebobinar momentos",
    "⭐ Estrela anterior",
    "🚀 Nave do tempo (volta)",
    "💫 Memória passada"
  ],
  restart: [
    "🔄 Recomeçar nossa galáxia",
    "🌙 Voltar ao início lunar",
    "✨ Reiniciar jornada estelar",
    "🚀 Nova decolagem romântica",
    "💫 Começar de novo (com amor)"
  ]
};

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [currentMemory, setCurrentMemory] = useState(0);
  const [showMemory, setShowMemory] = useState(false);
  const [buttonTextIndex, setButtonTextIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isLaunching, setIsLaunching] = useState(false);
  const [rocketPosition, setRocketPosition] = useState(0);

  useEffect(() => {
    if (gameStarted && !isLaunching) {
      setTimeout(() => setShowMemory(true), 1000);
    }
  }, [gameStarted, isLaunching]);

  useEffect(() => {
    if (isLaunching) {
      const interval = setInterval(() => {
        setRocketPosition(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 2;
        });
      }, 50);

      return () => clearInterval(interval);
    }
  }, [isLaunching]);

  const getRandomButtonText = (type: keyof typeof funnyButtonTexts) => {
    const texts = funnyButtonTexts[type];
    return texts[Math.floor(Math.random() * texts.length)];
  };

  const startJourney = () => {
    setIsLaunching(true);
    setRocketPosition(0);

    // Sequência da animação do foguete
    setTimeout(() => {
      setGameStarted(true);
    }, 2500);

    setTimeout(() => {
      setIsLaunching(false);
      setRocketPosition(0);
    }, 3500);
  };

  const nextMemory = () => {
    if (currentMemory < memories.length - 1) {
      setShowMemory(false);
      setTimeout(() => {
        setCurrentMemory(currentMemory + 1);
        setShowMemory(true);
        setButtonTextIndex(prev => prev + 1);
      }, 500);
    }
  };

  const prevMemory = () => {
    if (currentMemory > 0) {
      setShowMemory(false);
      setTimeout(() => {
        setCurrentMemory(currentMemory - 1);
        setShowMemory(true);
      }, 500);
    }
  };

  const resetJourney = () => {
    setShowMemory(false);
    setTimeout(() => {
      setGameStarted(false);
      setCurrentMemory(0);
      setButtonTextIndex(0);
      setIsLaunching(false);
      setRocketPosition(0);
    }, 500);
  };

  // Tela de animação do foguete
  if (isLaunching) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black relative overflow-hidden flex items-center justify-center">
        {/* Estrelas mais intensas durante o lançamento */}
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${Math.random() * 1 + 0.5}s`
              }}
            />
          ))}
        </div>

        {/* Foguete animado com movimento real */}
        <div className="relative z-10 flex flex-col items-center">
          <div
            className="transform transition-all duration-100 ease-out"
            style={{
              transform: `translateY(-${rocketPosition * 8}px) scale(${1 + rocketPosition * 0.01})`,
              opacity: Math.max(0, 1 - rocketPosition * 0.008)
            }}
          >
            <Rocket
              className="w-24 h-24 text-purple-300 animate-bounce"
              style={{
                transform: `rotate(${rocketPosition * 2}deg)`
              }}
            />
          </div>

          {/* Rastro do foguete dinâmico */}
          <div
            className="bg-gradient-to-b from-orange-400 via-red-500 to-transparent transition-all duration-100"
            style={{
              width: '8px',
              height: `${Math.min(rocketPosition * 4, 300)}px`,
              opacity: Math.min(rocketPosition * 0.02, 1),
              transform: `translateY(-${rocketPosition * 2}px)`
            }}
          />

          {/* Texto de lançamento */}
          <div className="text-center text-white mt-8 animate-pulse">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              🚀 DECOLANDO...
            </h2>
            <p className="text-xl text-purple-200">
              Preparando nossa jornada espacial do amor!
            </p>
            <div className="flex justify-center gap-2 mt-4">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-3 bg-purple-400 rounded-full animate-bounce"
                  style={{ animationDelay: `${i * 0.3}s` }}
                />
              ))}
            </div>

            {/* Contador de progresso */}
            <div className="mt-4">
              <div className="w-64 h-2 bg-purple-800 rounded-full mx-auto overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-100"
                  style={{ width: `${rocketPosition}%` }}
                />
              </div>
              <p className="text-sm text-purple-300 mt-2">
                {Math.round(rocketPosition)}% até as estrelas...
              </p>
            </div>
          </div>

          {/* Efeitos de partículas dinâmicas */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(Math.floor(rocketPosition / 5))].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-ping"
                style={{
                  left: `${45 + Math.random() * 10}%`,
                  top: `${60 + Math.random() * 20 + rocketPosition}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${Math.random() * 1 + 0.5}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Ondas de choque que crescem com o movimento */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute border-2 border-purple-400 rounded-full animate-ping opacity-30"
              style={{
                width: `${32 + rocketPosition * 2}px`,
                height: `${32 + rocketPosition * 2}px`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: '2s'
              }}
            />
          ))}
        </div>

        {/* Efeito de velocidade nas laterais */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 bg-white rounded-full opacity-50"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                height: `${rocketPosition * 2}px`,
                transform: `translateY(${rocketPosition * 3}px)`,
                transition: 'all 0.1s ease-out'
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  if (!gameStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black relative overflow-hidden flex items-center justify-center">
        {/* Animated Stars */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 2 + 1}s`
              }}
            />
          ))}
        </div>

        {/* Floating Moon */}
        <div className="absolute top-20 right-20 animate-bounce">
          <Moon className="w-16 h-16 text-purple-300 opacity-80" />
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center text-white px-6">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Para Moon
            </h1>
            <div className="flex items-center justify-center gap-2 mb-6">
              <Star className="w-6 h-6 text-yellow-400 animate-spin" />
              <p className="text-2xl md:text-3xl text-purple-200">
                Uma Jornada Pelas Nossas Estrelas
              </p>
              <Star className="w-6 h-6 text-yellow-400 animate-spin" />
            </div>
            <p className="text-lg md:text-xl text-purple-300 mb-12 max-w-2xl mx-auto">
              Prepare-se para uma viagem espacial através dos nossos momentos mais especiais,
              onde cada memória brilha como uma estrela em nossa galáxia do amor
            </p>
          </div>

          {/* Start Button */}
          <button
            onClick={startJourney}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="group relative px-12 py-6 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-xl font-bold text-white shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110 hover:rotate-1 animate-pulse"
          >
            <div className="flex items-center gap-3">
              {isHovering ? <Sparkles className="w-6 h-6 group-hover:animate-spin" /> : <Heart className="w-6 h-6 group-hover:animate-bounce" />}
              <span>{funnyButtonTexts.start[buttonTextIndex % funnyButtonTexts.start.length]}</span>
              {isHovering ? <Zap className="w-6 h-6 group-hover:animate-bounce" /> : <Heart className="w-6 h-6 group-hover:animate-bounce" />}
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </button>

          <div className="mt-8 flex justify-center gap-4">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>

          <p className="mt-6 text-purple-300 text-sm animate-bounce">
            💡 Dica: Passe o mouse nos botões para surpresas!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black relative overflow-hidden">
      {/* Animated Stars */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 1}s`
            }}
          />
        ))}
      </div>

      {/* Memory Display */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <div className={`transform transition-all duration-1000 ${showMemory ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 max-w-4xl mx-auto shadow-2xl border border-purple-300/20">
            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Star className="w-6 h-6 text-yellow-400" />
                <h2 className="text-3xl font-bold text-white">
                  Memória {currentMemory + 1} de {memories.length}
                </h2>
                <Star className="w-6 h-6 text-yellow-400" />
              </div>
              <p className="text-purple-200 text-lg">{memories[currentMemory].date}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative">
                {currentMemory === memories.length - 1 ? (
                  <div className="w-full h-80 flex items-center justify-center bg-white rounded-2xl shadow-xl p-4">
                    <img
                      src={memories[currentMemory].image}
                      alt={memories[currentMemory].title}
                      className="h-full max-h-full w-auto object-contain"
                    />
                  </div>
                ) : (
                  <img
                    src={memories[currentMemory].image}
                    alt={memories[currentMemory].title}
                    className="w-full h-80 object-cover object-[center_20%] rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent rounded-2xl" />
              </div>

              <div className="text-white space-y-6">
                <h3 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {memories[currentMemory].title}
                </h3>
                <p className="text-xl text-purple-100 leading-relaxed">
                  {memories[currentMemory].description}
                </p>

                <div className="flex items-center gap-3 text-pink-300">
                  <Heart className="w-5 h-5 animate-pulse" />
                  <span className="text-lg">Feito com amor infinito</span>
                  <Heart className="w-5 h-5 animate-pulse" />
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={prevMemory}
                disabled={currentMemory === 0}
                className="group flex items-center gap-2 px-6 py-3 bg-purple-600/50 text-white rounded-full hover:bg-purple-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
              >
                <ArrowLeft className="w-5 h-5 group-hover:animate-bounce" />
                <span className="group-hover:animate-pulse">
                  {getRandomButtonText('prev')}
                </span>
              </button>

              <div className="flex gap-2">
                {memories.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentMemory
                        ? 'bg-purple-400 animate-pulse scale-125'
                        : 'bg-purple-800 hover:bg-purple-600'
                      }`}
                  />
                ))}
              </div>

              {currentMemory < memories.length - 1 ? (
                <button
                  onClick={nextMemory}
                  className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600/50 to-pink-600/50 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105"
                >
                  <span className="group-hover:animate-pulse">
                    {funnyButtonTexts.next[buttonTextIndex % funnyButtonTexts.next.length]}
                  </span>
                  {buttonTextIndex % 2 === 0 ?
                    <Unlock className="w-5 h-5 group-hover:animate-bounce" /> :
                    <ArrowRight className="w-5 h-5 group-hover:animate-bounce" />
                  }
                </button>
              ) : (
                <button
                  onClick={resetJourney}
                  className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full hover:scale-105 transition-all duration-300 hover:rotate-1"
                >
                  <Moon className="w-5 h-5 group-hover:animate-spin" />
                  <span className="group-hover:animate-pulse">
                    {getRandomButtonText('restart')}
                  </span>
                </button>
              )}
            </div>

            {/* Fun Footer Message */}
            <div className="text-center mt-6">
              <p className="text-purple-300 text-sm animate-pulse">
                {currentMemory === 0 && "🌟 Primeira parada na nossa galáxia do amor!"}
                {currentMemory === 1 && "💫 Você está brilhando como sempre, Moon!"}
                {currentMemory === 2 && "🚀 Que aventura incrível estamos vivendo!"}
                {currentMemory === 3 && "✨ Cada memória é uma estrela que ilumina nosso caminho!"}
                {currentMemory === 4 && "💖 Nosso amor é como uma supernova, sempre brilhando!"}
                {currentMemory === 5 && "🌙 Chegamos ao presente... nosso futuro é ainda mais brilhante!"}
                {currentMemory === 6 && "🌌 O melhor ainda está por vir, Moon! Vamos juntos!"}
                {currentMemory === 7 && "🔮 Esta mensagem é um QR Code que leva direto ao meu coração!"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;