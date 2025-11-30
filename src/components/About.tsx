import { motion } from "framer-motion";
import { Flame, Award, Users } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    icon: Flame,
    title: "Sabor Auténtico",
    description: "Recetas únicas con ingredientes frescos y de calidad premium",
  },
  {
    icon: Award,
    title: "Calidad Superior",
    description: "Carne 100% angus, pan artesanal y vegetales frescos cada día",
  },
  {
    icon: Users,
    title: "Ambiente Urbano",
    description: "Vibe street food con la mejor música y energía de la ciudad",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-7xl font-bold mb-4">
            Sobre <span className="text-gradient italic bg-black px-4 py-2 rounded-lg inline-block uppercase" style={{ fontFamily: "'Sedgwick Ave Display', cursive" }}>BurgerStreet</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Somos más que hamburguesas. Somos pasión, sabor y autenticidad. 
            Cada burger está hecha con amor y los mejores ingredientes. 
            Street food elevado a otro nivel.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="gradient-card rounded-2xl p-8 shadow-soft hover:shadow-hover transition-all duration-300 border border-border/50"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
