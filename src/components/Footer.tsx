import { Instagram, Facebook, Twitter, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground/5 border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-3xl font-bold text-gradient mb-4">BurgerStreet</h3>
            <p className="text-muted-foreground text-sm">
              Las mejores hamburguesas de la ciudad. Street food con sabor auténtico.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Menú</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Classic Burgers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Premium Burgers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Veggie Options</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Combos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Info</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Ubicaciones</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Horarios</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Delivery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Instagram className="w-4 h-4 text-primary" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Facebook className="w-4 h-4 text-primary" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Twitter className="w-4 h-4 text-primary" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Mail className="w-4 h-4 text-primary" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} BurgerStreet. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
