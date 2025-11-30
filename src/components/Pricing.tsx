import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Flame } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const plans = [
  {
    name: "Individual",
    price: "8.99",
    description: "Perfecto para una comida rápida",
    features: [
      "1 Hamburguesa a elegir",
      "Papas fritas medianas",
      "Bebida regular",
      "Salsa extra gratis",
    ],
    popular: false,
  },
  {
    name: "Combo Deluxe",
    price: "15.99",
    description: "La opción más popular",
    features: [
      "1 Hamburguesa premium",
      "Papas fritas grandes",
      "Bebida grande",
      "Nuggets o aros de cebolla",
      "2 Salsas a elegir",
      "Postre incluido",
    ],
    popular: true,
  },
  {
    name: "Para Compartir",
    price: "29.99",
    description: "Ideal para grupos",
    features: [
      "3 Hamburguesas a elegir",
      "3 Papas fritas grandes",
      "3 Bebidas grandes",
      "Nuggets y aros compartidos",
      "Salsas ilimitadas",
      "3 Postres incluidos",
      "Descuento especial",
    ],
    popular: false,
  },
];

const Pricing = () => {
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
          <h2 className="text-5xl lg:text-7xl font-bold mb-4 flex items-center justify-center gap-3">
            Menú y <span className="text-gradient italic flex items-center gap-2"><Flame className="w-8 h-8" />Precios</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Calidad premium a precios justos. Elige tu combo favorito
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`gradient-card rounded-2xl p-8 shadow-soft hover:shadow-hover transition-all duration-300 border ${
                plan.popular ? "border-primary ring-2 ring-primary/20 scale-105" : "border-border/50"
              } relative`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">
                  MÁS POPULAR
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold">${plan.price}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className="w-full"
                variant={plan.popular ? "default" : "outline"}
                size="lg"
              >
                Ordenar Ahora
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
