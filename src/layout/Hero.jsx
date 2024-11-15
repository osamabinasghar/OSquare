const Hero = () => {
  const [activeSegment, setActiveSegment] = useState(segments[0].id);
  const currentSegment = segments.find(seg => seg.id === activeSegment);

  return (
    <>
    <header>
       <div className="mx-auto max-w-7xl px-5 py-50 md:px-10"> {/* Increased py-32 to py-40 */}
         <div className="mx-auto mb-8 w-full max-w-3xl text-center md:mb-12 lg:mb-16">
           {/* Hero Title */}
           <p className="mx-auto mb-2 max-w-lg text-sm text-gray-500 sm:text-base md:mb-6 lg:mb-8">
             OSquare FOR HOME
           </p>
           <h1 className="mb-4 text-4xl font-bold md:text-6xl text-blue-950">
             Supercharge your productivity with OSquare
           </h1>
           <p className="mx-auto mb-5 max-w-lg text-sm text-gray-500 sm:text-xl md:mb-6 lg:mb-8">
             Get productivity apps, security, and storage with OSquare 365. Then add AI power with Copilot Pro.
           </p>
           {/* Hero Button */}
           <div className="flex items-stretch justify-center">
             <a
               href="#"
               className="mr-5 inline-block rounded-md bg-blue-950 px-8 py-4 text-center font-semibold text-white md:mr-6 lg:mr-8"
             >
               See plans and pricing
             </a>
           </div>
         </div>
         <div className="flex justify-center mb-16">
          <div className="inline-flex p-1.5 space-x-1 bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg">
            {segments.map((segment) => {
              const Icon = segment.icon;
              const isActive = activeSegment === segment.id;
              
              return (
                <button
                  key={segment.id}
                  onClick={() => setActiveSegment(segment.id)}
                  className={`relative flex items-center space-x-3 px-12 py-5 rounded-xl text-sm font-medium transition-all duration-200 ${
                    isActive ? 'text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{segment.label}</span>
                  
                  {isActive && (
                    <motion.div
                      layoutId="activeSegment"
                      className="absolute inset-0 bg-[#172554] rounded-xl"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      style={{ zIndex: -1 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
       </div>
     </header>
    <div className="relative min-h-[150vh] bg-gradient-to-br from-blue-50 via-white to-purple-50"> {/* Set min-h-[150vh] to increase height */}
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
      </div>
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-40"> {/* Increased bottom padding */}
        {/* Hero Content */}
        <motion.div
          key={activeSegment}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Text Content */}
          <div className="space-y-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              {currentSegment.title}
            </h1>
            
            <p className="text-xl text-gray-600 max-w-2xl">
              {currentSegment.description}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="inline-flex items-center px-8 py-4 rounded-xl bg-[#172554] text-white font-medium hover:bg-[#172554] transition-colors">
                {currentSegment.cta}
              </button>
              <button className="inline-flex items-center px-8 py-4 rounded-xl bg-white text-[#172554] font-medium hover:bg-blue-50 transition-colors">
                Learn more
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-2">
              <img
                src={currentSegment.image}
                alt={currentSegment.title}
                className="w-full h-[500px] object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full blur-3xl opacity-50" />
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-gradient-to-br from-blue-200 to-blue-200 rounded-full blur-3xl opacity-50" />
          </div>
        </motion.div>
      </div>
    </div>
    </>
  );
};

export default Hero;
