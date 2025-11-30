import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Flame } from "lucide-react";
import heroBurger from "@/assets/hero-burger.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6 border border-accent/20"
            >
              <Flame className="w-4 h-4" />
              <span className="text-sm font-bold uppercase" style={{ fontFamily: "'Sedgwick Ave Display', cursive" }}>BurguerStreet</span>
            </motion.div>

            <h1 className="text-6xl lg:text-8xl font-bold mb-6 leading-tight">
              Las mejores{" "}
              <span className="text-gradient italic">burgers</span> de la ciudad
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Street food auténtico con ingredientes frescos. 
              Sabor explosivo en cada mordida. ¡Ven y descubre por qué somos los favoritos!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" variant="default" className="text-lg group">
                Ver Menú
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                Hacer Pedido
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-hover p-4 bg-white transform -rotate-[25deg] scale-110">
              <img
                src={heroBurger}
                alt="Hamburguesa gourmet deliciosa"
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
            </div>
            
            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl"
            />
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
