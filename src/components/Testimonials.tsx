import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import customer1 from "@/assets/customer-1.jpg";
import customer2 from "@/assets/customer-2.jpg";
import customer3 from "@/assets/customer-3.jpg";

const testimonials = [
  {
    name: "Carlos Martínez",
    role: "Cliente frecuente",
    image: customer1,
    content: "¡La mejor hamburguesa que he probado! El sabor es increíble y siempre está fresca. Vengo cada semana sin falta.",
    rating: 5,
  },
  {
    name: "Ana Rodríguez",
    role: "Food blogger",
    image: customer2,
    content: "Ambiente urbano auténtico y burgers espectaculares. La Classic es mi favorita. ¡100% recomendado!",
    rating: 5,
  },
  {
    name: "Miguel Torres",
    role: "Amante del street food",
    image: customer3,
    content: "Calidad premium a precio justo. Las papas están crujientes y la carne es de otro nivel. Son los mejores.",
    rating: 5,
  },
];

const Testimonials = () => {
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
            Lo que dicen <span className="text-gradient italic">nuestros clientes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Miles de clientes satisfechos respaldan nuestra calidad
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="gradient-card rounded-2xl p-8 shadow-soft hover:shadow-hover transition-all duration-300 border border-border/50"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-muted-foreground">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
