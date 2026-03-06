import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  Key, 
  UserX, 
  BarChart3, 
  Zap, 
  BellOff, 
  Smartphone, 
  Home, 
  Handshake, 
  Trophy, 
  Target, 
  MessageSquare, 
  Phone, 
  Mail, 
  Database, 
  MapPin, 
  ShieldCheck, 
  Clock, 
  Star, 
  AlertCircle, 
  CheckCircle2,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const SLIDE_COUNT = 11;

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => Math.min(prev + 1, SLIDE_COUNT - 1));
  const prevSlide = () => setCurrentSlide((prev) => Math.max(prev - 1, 0));

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const renderSlide = () => {
    switch (currentSlide) {
      case 0: return <Slide1 />;
      case 1: return <Slide2 />;
      case 2: return <Slide3 />;
      case 3: return <Slide4 />;
      case 4: return <Slide5 />;
      case 5: return <Slide6 />;
      case 6: return <Slide7 />;
      case 7: return <Slide8 />;
      case 8: return <Slide9 />;
      case 9: return <Slide10 />;
      case 10: return <Slide11 />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-neutral-200 flex flex-col items-center justify-center">
      <div className="relative w-full h-screen bg-white overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="h-full w-full"
          >
            {renderSlide()}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        <div className="absolute bottom-6 right-8 flex items-center gap-4 z-50">
          <span className="text-xs font-medium opacity-50">
            {currentSlide + 1} / {SLIDE_COUNT}
          </span>
          <div className="flex gap-2">
            <button 
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="p-2 rounded-full bg-black/5 hover:bg-black/10 disabled:opacity-20 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextSlide}
              disabled={currentSlide === SLIDE_COUNT - 1}
              className="p-2 rounded-full bg-black/5 hover:bg-black/10 disabled:opacity-20 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Slide Components ---

function Slide1() {
  return (
    <div className="h-full w-full bg-dark-bg flex flex-col items-center justify-center text-white relative">
      <div className="flex flex-col items-center gap-6">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="p-4 rounded-2xl bg-primary/10"
        >
          <TrendingUp size={64} className="text-secondary" />
        </motion.div>
        <div className="text-center space-y-2">
          <h1 className="text-6xl font-bold tracking-tight">Atendimento e Prospecção</h1>
          <p className="text-2xl text-secondary font-light">Alta Performance no Mercado Imobiliário</p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-4 bg-secondary" />
    </div>
  );
}

function Slide2() {
  const cards = [
    { icon: <UserX size={32} />, num: "44%", desc: "dos corretores desistem após apenas 1 tentativa (HubSpot Research)" },
    { icon: <BarChart3 size={32} />, num: "80%", desc: "das vendas acontecem entre o 5º e 10º contato (NSEA)" },
    { icon: <Zap size={32} />, num: "9x", desc: "mais conversão respondendo em até 5 minutos (InsideSales)" },
    { icon: <BellOff size={32} />, num: "50%", desc: "dos leads nunca recebem nenhum retorno" },
  ];

  return (
    <div className="h-full w-full bg-white p-16 flex flex-col">
      <h2 className="text-4xl font-bold text-dark-bg mb-12">Quanto dinheiro você está deixando na mesa?</h2>
      <div className="grid grid-cols-4 gap-6 flex-grow">
        {cards.map((card, i) => (
          <div key={i} className="bg-neutral-50 p-8 rounded-2xl flex flex-col items-center text-center gap-4 border border-black/5 shadow-sm">
            <div className="text-primary">{card.icon}</div>
            <span className="text-[62px] font-bold text-primary leading-none">{card.num}</span>
            <p className="text-base text-neutral-600 leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Slide3() {
  const items = [
    { icon: <Smartphone size={24} />, data: "90%", desc: "da jornada começa pelo digital antes do contato com o corretor" },
    { icon: <Home size={24} />, data: "7 a 10 imóveis", desc: "Comprador visita em média antes de decidir" },
    { icon: <Handshake size={24} />, data: "70%", desc: "dos compradores que não fecharam comprariam se o atendimento fosse melhor" },
    { icon: <Trophy size={24} />, data: "Fator nº 1", desc: "Atendimento é o fator de indicação — acima do próprio imóvel" },
  ];

  return (
    <div className="h-full w-full bg-white p-16 flex flex-col">
      <h2 className="text-4xl font-bold text-dark-bg mb-12">O perfil do comprador hoje</h2>
      <div className="grid grid-cols-2 grid-rows-2 gap-8 flex-grow">
        {items.map((item, i) => (
          <div key={i} className="flex items-start gap-6 p-6 rounded-2xl bg-neutral-50 border border-black/5">
            <div className="p-3 rounded-xl bg-primary/10 text-primary">
              {item.icon}
            </div>
            <div className="space-y-1">
              <span className="text-3xl font-bold text-primary block">{item.data}</span>
              <p className="text-lg text-neutral-600 leading-snug">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Slide4() {
  const bant = [
    { 
      letter: "B", 
      title: "BUDGET", 
      subtitle: "ORÇAMENTO", 
      question: "O lead pode pagar?", 
      quote: "Diante do valor e das condições, faz sentido financeiro para você?" 
    },
    { 
      letter: "A", 
      title: "AUTHORITY", 
      subtitle: "AUTORIDADE", 
      question: "Quem decide a compra?", 
      quote: "Além de você, mais alguém participará dessa decisão?" 
    },
    { 
      letter: "N", 
      title: "NEED", 
      subtitle: "NECESSIDADE", 
      question: "Investimento ou moradia?", 
      quote: "O que te motivou agora? Localização, tamanho ou lazer?" 
    },
    { 
      letter: "T", 
      title: "TIMING", 
      subtitle: "MOMENTO", 
      question: "Qual a urgência real?", 
      quote: "Quando pretende comprar? Tem prazo para se mudar?" 
    },
  ];

  return (
    <div className="h-full w-full bg-white p-12 flex flex-col">
      <div className="flex justify-between items-start mb-8">
        <div className="space-y-1">
          <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold tracking-widest rounded uppercase">Framework</span>
          <h2 className="text-5xl font-bold text-dark-bg">Metodologia de Qualificação <span className="text-primary">BANT</span></h2>
        </div>
        <div className="px-6 py-3 bg-secondary/10 border border-secondary/20 rounded-xl">
          <p className="text-secondary font-bold italic text-lg">"Leitura de contexto, não checklist"</p>
        </div>
      </div>
      
      <div className="grid grid-cols-4 gap-4 flex-grow">
        {bant.map((item, i) => (
          <div key={i} className="relative bg-primary rounded-3xl p-8 flex flex-col text-white overflow-hidden group">
            {/* Background Letter */}
            <span className="absolute -right-4 bottom-0 text-[240px] font-black opacity-10 leading-none select-none pointer-events-none">
              {item.letter}
            </span>
            
            <div className="relative z-10 flex flex-col h-full">
              <h3 className="text-2xl font-bold tracking-tighter">{item.title}</h3>
              <p className="text-[10px] tracking-[0.2em] opacity-60 font-bold mb-4">{item.subtitle}</p>
              
              <div className="w-full h-1 bg-white/30 mb-8" />
              
              <p className="text-xl font-bold mb-auto leading-tight">{item.question}</p>
              
              <p className="text-sm italic opacity-80 leading-relaxed">
                "{item.quote}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Slide5() {
  const points = [
    { icon: <ShieldCheck size={32} />, title: "Maior Ativo Financeiro", desc: "Para a maioria das pessoas, o imóvel é o maior investimento de uma vida inteira." },
    { icon: <Clock size={32} />, title: "Ciclo de Decisão Longa", desc: "Não é uma compra por impulso. Exige tempo, maturação e múltiplas interações." },
    { icon: <Handshake size={32} />, title: "Decisão Coletiva", desc: "Envolve cônjuges, filhos e influenciadores. O corretor deve navegar por diferentes perfis." },
    { icon: <Home size={32} />, title: "Maior Bem da Família", desc: "É o porto seguro e o patrimônio que protege as próximas gerações." },
  ];

  return (
    <div className="h-full w-full bg-white p-16 flex flex-col">
      <h2 className="text-5xl font-bold text-dark-bg mb-4">Não estamos falando de um ticket baixo</h2>
      <p className="text-xl text-primary font-medium mb-12">A responsabilidade de quem conduz o maior investimento da vida de uma pessoa</p>
      
      <div className="grid grid-cols-2 gap-8 flex-grow">
        {points.map((point, i) => (
          <div key={i} className="flex items-start gap-6 p-8 rounded-3xl bg-neutral-50 border border-black/5 shadow-sm">
            <div className="p-4 rounded-2xl bg-primary text-white">
              {point.icon}
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-dark-bg">{point.title}</h3>
              <p className="text-lg text-neutral-500 leading-relaxed">{point.desc}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 p-6 bg-secondary/10 rounded-2xl border border-secondary/20 text-center">
        <p className="text-secondary font-bold text-2xl italic">
          "O amador quer vender. O profissional quer resolver."
        </p>
      </div>
    </div>
  );
}

function Slide6() {
  return (
    <div className="h-full w-full bg-dark-bg p-16 flex flex-col text-white">
      <h2 className="text-[56px] font-bold text-center mb-12">A fortuna está no follow-up</h2>
      
      <div className="grid grid-cols-4 gap-8 mb-12">
        <div className="flex flex-col items-center text-center gap-4">
          <div className="p-4 rounded-2xl bg-white/5 text-secondary"><Handshake size={48} /></div>
          <span className="text-[54px] font-bold">80%</span>
          <p className="text-[17px] text-white/60 leading-tight">das vendas ocorrem entre o 5º e 10º contato</p>
        </div>
        <div className="flex flex-col items-center text-center gap-4">
          <div className="p-4 rounded-2xl bg-white/5 text-secondary"><UserX size={48} /></div>
          <span className="text-[54px] font-bold">44%</span>
          <p className="text-[17px] text-white/60 leading-tight">dos corretores desistem na 1ª tentativa</p>
        </div>
        <div className="flex flex-col items-center text-center gap-4">
          <div className="p-4 rounded-2xl bg-white/5 text-secondary"><BarChart3 size={48} /></div>
          <span className="text-[54px] font-bold">8%</span>
          <p className="text-[17px] text-white/60 leading-tight">Apenas 8% fazem mais de 5 follow-ups</p>
        </div>
        <div className="flex flex-col items-center text-center gap-4">
          <div className="p-4 rounded-2xl bg-white/5 text-secondary"><Clock size={48} /></div>
          <span className="text-[54px] font-bold">18+</span>
          <p className="text-[17px] text-white/60 leading-tight">tentativas de contato por prospect</p>
        </div>
      </div>

      <div className="mt-auto text-center space-y-8">
        <p className="text-[26px] font-light tracking-wide text-white px-12 leading-relaxed">
          Um follow up de verdade constrói três coisas ao longo do tempo:
          <span className="block mt-2 font-bold text-secondary uppercase tracking-widest text-[28px]">
            confiança, credibilidade e autoridade.
          </span>
        </p>
        <p className="text-[29px] font-bold text-secondary">"Oi, tudo bem?" não é follow-up. É ruído.</p>
      </div>
    </div>
  );
}

function Slide7() {
  const steps = [
    { day: "Dia 1", icons: [<MessageSquare size={24} />, <Phone size={24} />], title: "Apresentação e diagnóstico rápido" },
    { day: "Dia 3", icons: [<MessageSquare size={24} />], title: "Entrega de valor sem pressão" },
    { day: "Dia 7", icons: [<Phone size={24} />, <Mail size={24} />], title: "Identificar objeções, aprofundar BANT" },
    { day: "Dia 10", icons: [<MessageSquare size={24} />], title: "Remover obstáculos" },
    { day: "Dia 15", icons: [<Phone size={24} />], title: "Case de sucesso + proposta de agendamento" },
    { day: "Dia 30+", icons: [<Mail size={24} />, <Database size={24} />], title: "Nutrição com conteúdo de valor" },
  ];

  return (
    <div className="h-full w-full bg-white p-16 flex flex-col">
      <h2 className="text-4xl font-bold text-dark-bg mb-12">Cadência de 15 contatos estruturados</h2>
      
      <div className="flex-grow flex flex-col justify-center gap-16">
        <div className="grid grid-cols-3 w-full gap-12">
          {steps.slice(0, 3).map((step, i) => (
            <div key={i} className="flex flex-col gap-4 relative">
              <div className="text-base font-bold text-primary uppercase tracking-widest">{step.day}</div>
              <div className="flex gap-2 text-primary">
                {step.icons.map((icon, idx) => <span key={idx}>{icon}</span>)}
              </div>
              <div className="h-1.5 w-full bg-neutral-100 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-full opacity-20" />
              </div>
              <p className="text-base font-medium text-neutral-600 leading-relaxed">{step.title}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 w-full gap-12">
          {steps.slice(3, 6).map((step, i) => (
            <div key={i} className="flex flex-col gap-4 relative">
              <div className="text-base font-bold text-primary uppercase tracking-widest">{step.day}</div>
              <div className="flex gap-2 text-primary">
                {step.icons.map((icon, idx) => <span key={idx}>{icon}</span>)}
              </div>
              <div className="h-1.5 w-full bg-neutral-100 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-full opacity-20" />
              </div>
              <p className="text-base font-medium text-neutral-600 leading-relaxed">{step.title}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-12 text-center text-lg text-neutral-400 italic">Cada contato tem um propósito diferente. Não é repetição — é progressão.</p>
    </div>
  );
}

function Slide8() {
  const cards = [
    { 
      icon: <Home size={40} />, 
      title: "Moradia", 
      subtitle: "Família, casal, 1ª compra",
      decision: "Decisão emocional e coletiva",
      cycle: "Ciclo: 3 a 6 meses",
      objection: "Objeção: medo de errar",
      how: "Como atender: paciência + consultoria"
    },
    { 
      icon: <TrendingUp size={40} />, 
      title: "Investidor", 
      subtitle: "Já tem imóvel, busca renda",
      decision: "Decisão racional",
      cycle: "Ciclo: 1 a 3 meses",
      objection: "Objeção: insegurança sobre retorno",
      how: "Como atender: leve números, não entusiasmo"
    },
    { 
      icon: <Key size={40} />, 
      title: "Lançamento", 
      subtitle: "Aproveita condições de pré-lançamento",
      decision: "Racional + urgência",
      cycle: "Ciclo: 1 a 4 semanas",
      objection: "Objeção: medo de comprar na planta",
      how: "Como atender: velocidade é crítica"
    },
  ];

  return (
    <div className="h-full w-full bg-white p-16 flex flex-col">
      <h2 className="text-4xl font-bold text-dark-bg mb-12">Os 3 ciclos de venda no imobiliário</h2>
      <div className="grid grid-cols-3 gap-6 flex-grow">
        {cards.map((card, i) => (
          <div key={i} className="bg-neutral-50 p-8 rounded-2xl border border-black/5 flex flex-col gap-4">
            <div className="text-primary">{card.icon}</div>
            <div>
              <h3 className="text-3xl font-bold text-dark-bg">{card.title}</h3>
              <p className="text-lg text-primary font-medium">{card.subtitle}</p>
            </div>
            <div className="space-y-3 mt-2">
              <p className="text-base text-neutral-600">• {card.decision}</p>
              <p className="text-base text-neutral-600">• {card.cycle}</p>
              <p className="text-base text-neutral-600">• {card.objection}</p>
              <p className="text-lg font-bold text-dark-bg mt-4">{card.how}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Slide9() {
  const items = [
    { icon: <MapPin size={24} />, title: "Presença", desc: "o corretor que some perde para o que ficou" },
    { icon: <ShieldCheck size={24} />, title: "Confiança", desc: "construída por consistência, não por argumentos" },
    { icon: <Clock size={24} />, title: "Timing certo", desc: "o follow-up deve respeitar o ciclo de cada perfil" },
    { icon: <Star size={24} />, title: "Consultoria real", desc: "o cliente percebe quando é empurrado vs. orientado" },
  ];

  return (
    <div className="h-full w-full bg-white p-16 flex flex-col">
      <h2 className="text-4xl font-bold text-dark-bg mb-12">O que todo comprador tem em comum</h2>
      <div className="flex-grow flex flex-col gap-4">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-8 p-6 bg-neutral-50 rounded-2xl border border-black/5">
            <div className="text-primary">{item.icon}</div>
            <div>
              <span className="text-lg font-bold text-dark-bg block">{item.title}</span>
              <p className="text-neutral-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-8 text-center text-xl font-medium text-primary italic">
        A venda imobiliária não se fecha na primeira visita. Se fecha no acúmulo de confiança.
      </p>
    </div>
  );
}

function Slide10() {
  const errors = [
    { title: "Demorar para responder", desc: "78% dos leads fecham com o primeiro corretor que responde. Cada hora de atraso entrega o cliente para o concorrente." },
    { title: "Desistir antes da hora", desc: "80% das vendas ocorrem entre o 5º e 10º contato. Desistir no 1º ou 2º é entregar comissões para quem fica." },
    { title: "Não qualificar com BANT", desc: "sem método, você gasta energia igual em todos. Perde tempo com quem nunca comprará e ignora quem está pronto." },
    { title: "Follow-up sem valor", desc: "cada contato precisa trazer algo útil. Mensagem vazia não constrói confiança, só gera incômodo." },
    { title: "Não usar CRM", desc: "O CRM é o coração da operação. Se não está no CRM, não aconteceu. Tudo precisa ser registrado para gerar dados, métricas e otimização: saber onde está errando para consertar, e onde está acertando para continuar." },
  ];

  return (
    <div className="h-full w-full bg-white p-16 flex flex-col">
      <div className="flex items-center gap-4 mb-12">
        <AlertCircle size={40} className="text-red-500" />
        <h2 className="text-4xl font-bold text-dark-bg">Os 5 erros fatais no atendimento</h2>
      </div>
      <div className="flex-grow flex flex-col gap-8">
        {errors.map((error, i) => (
          <div key={i} className="flex gap-8 items-start">
            <span className="text-4xl font-bold text-primary w-10">{i + 1}</span>
            <div>
              <h3 className="text-xl font-bold text-dark-bg">{error.title}</h3>
              <p className="text-base text-neutral-500 leading-relaxed">{error.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Slide11() {
  const actions = [
    "Responder leads em até 5 minutos",
    "Aplicar BANT em todo novo contato",
    "Criar cadência de 15 follow-ups com propósito",
    "CRM: tudo precisa ser registrado"
  ];

  return (
    <div className="h-full w-full bg-dark-bg flex flex-col items-center justify-center text-white relative p-16">
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-8 p-6 rounded-full bg-white/10"
      >
        <TrendingUp size={80} className="text-secondary" />
      </motion.div>

      <div className="text-center max-w-4xl space-y-8 mb-16">
        <p className="text-[33px] font-light leading-relaxed">
          A diferença entre o vendedor mediano e o alta performance não é o produto. 
          <span className="block font-bold text-secondary mt-4">É a constância.</span>
        </p>
      </div>

      <div className="grid grid-cols-2 gap-x-16 gap-y-8">
        {actions.map((action, i) => (
          <div key={i} className="flex items-center gap-6">
            <CheckCircle2 size={32} className="text-secondary" />
            <span className="text-xl font-medium text-white/90">{action}</span>
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 w-full h-16 bg-secondary flex items-center justify-center">
        <span className="text-dark-bg font-bold text-sm uppercase tracking-widest">Persistência estruturada é patrimônio.</span>
      </div>
    </div>
  );
}
