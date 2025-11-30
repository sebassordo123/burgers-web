import { motion } from "framer-motion";
import { Beef, ChefHat, Salad, Pizza } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const burgers = [
  {
    icon: Beef,
    title: "Classic Burger",
    description: "Carne angus, queso cheddar, lechuga, tomate, cebolla y salsa especial",
    color: "text-yellow-600",
    bgColor: "bg-yellow-600/10",
  },
  {
    icon: ChefHat,
    title: "Bacon Deluxe",
    description: "Doble carne, bacon crujiente, queso, huevo frito y BBQ sauce",
    color: "text-yellow-600",
    bgColor: "bg-yellow-600/10",
  },
  {
    icon: Salad,
    title: "Veggie Supreme",
    description: "Hamburguesa vegetal, aguacate, rúcula, tomate seco y hummus",
    color: "text-yellow-600",
    bgColor: "bg-yellow-600/10",
  },
  {
    icon: Pizza,
    title: "Spicy Jalapeño",
    description: "Carne especiada, jalapeños, pepper jack cheese y sriracha mayo",
    color: "text-yellow-600",
    bgColor: "bg-yellow-600/10",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-7xl font-bold mb-4">
            Nuestras <span className="text-gradient italic">Burgers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cada burger es una obra maestra. Elige tu favorita y déjate sorprender
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {burgers.map((burger, index) => (
            <motion.div
              key={burger.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group gradient-card rounded-2xl p-8 shadow-soft hover:shadow-hover transition-all duration-300 border border-border/50 cursor-pointer"
            >
              <div className={`w-14 h-14 ${burger.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <burger.icon className={`w-7 h-7 ${burger.color}`} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-yellow-400 italic">{burger.title}</h3>
              <p className="text-muted-foreground text-sm">{burger.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
