import React from 'react';
import { Shield, Users, Award, Target, Eye, Zap } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Sobre a <span className="text-primary">Quantum Shield</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Somos especialistas em segurança da informação, dedicados a proteger 
            organizações contra as ameaças cibernéticas mais sofisticadas do mundo digital.
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          <div className="bg-card p-8 rounded-lg border border-border text-center">
            <Target className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4">Nossa Missão</h3>
            <p className="text-muted-foreground">
              Proteger organizações contra ameaças cibernéticas através de soluções 
              inovadoras em segurança ofensiva e defensiva, garantindo a continuidade 
              dos negócios e a proteção de dados críticos.
            </p>
          </div>

          <div className="bg-card p-8 rounded-lg border border-border text-center">
            <Eye className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4">Nossa Visão</h3>
            <p className="text-muted-foreground">
              Ser reconhecida como a principal referência em segurança da informação 
              no Brasil, oferecendo expertise de classe mundial e soluções que 
              antecipam as ameaças do futuro.
            </p>
          </div>

          <div className="bg-card p-8 rounded-lg border border-border text-center">
            <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4">Nossos Valores</h3>
            <p className="text-muted-foreground">
              Excelência técnica, ética profissional, inovação contínua e 
              compromisso absoluto com a proteção e confidencialidade dos 
              dados de nossos clientes.
            </p>
          </div>
        </div>

        {/* Company Story */}
        <div className="bg-card p-12 rounded-lg border border-border mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Nossa História</h2>
              <p className="text-muted-foreground mb-6">
                A Quantum Shield nasceu da necessidade crescente de proteção contra 
                ameaças cibernéticas cada vez mais sofisticadas. Fundada por especialistas 
                com décadas de experiência em segurança da informação, nossa empresa 
                combina conhecimento técnico profundo com uma abordagem inovadora.
              </p>
              <p className="text-muted-foreground mb-6">
                Desde nossa fundação, temos ajudado organizações de todos os portes a 
                fortalecer sua postura de segurança, implementando soluções que vão 
                desde avaliações de vulnerabilidade até programas completos de 
                cibersegurança.
              </p>
              <p className="text-muted-foreground">
                Nosso nome "Quantum Shield" reflete nossa filosofia: assim como a 
                física quântica representa o futuro da tecnologia, nossa abordagem 
                à segurança cibernética antecipa e se adapta às ameaças emergentes.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-lg">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Projetos Realizados</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Clientes Atendidos</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Monitoramento</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                  <div className="text-sm text-muted-foreground">Disponibilidade</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nossa Equipe</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Profissionais altamente qualificados com as principais certificações 
              em segurança da informação do mercado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg border border-border text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Especialistas em Red Team</h3>
              <p className="text-muted-foreground mb-4">
                Certificações CEH, OSCP, GPEN para testes de penetração avançados.
              </p>
              <div className="flex justify-center space-x-2">
                <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">CEH</span>
                <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">OSCP</span>
                <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">GPEN</span>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Analistas de Blue Team</h3>
              <p className="text-muted-foreground mb-4">
                Certificações GCIH, GCFA, GNFA para análise forense e resposta a incidentes.
              </p>
              <div className="flex justify-center space-x-2">
                <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">GCIH</span>
                <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">GCFA</span>
                <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">GNFA</span>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Consultores Sênior</h3>
              <p className="text-muted-foreground mb-4">
                Certificações CISSP, CISM, CISA para governança e gestão de riscos.
              </p>
              <div className="flex justify-center space-x-2">
                <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">CISSP</span>
                <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">CISM</span>
                <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">CISA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Methodology */}
        <div className="bg-card p-12 rounded-lg border border-border mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nossa Metodologia</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Processo estruturado e comprovado para garantir a máxima eficácia 
              em nossos serviços de segurança.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="font-semibold mb-2">Avaliação</h3>
              <p className="text-sm text-muted-foreground">
                Análise completa do ambiente e identificação de riscos
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="font-semibold mb-2">Planejamento</h3>
              <p className="text-sm text-muted-foreground">
                Desenvolvimento de estratégia personalizada de segurança
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="font-semibold mb-2">Implementação</h3>
              <p className="text-sm text-muted-foreground">
                Execução das soluções com acompanhamento contínuo
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="font-semibold mb-2">Monitoramento</h3>
              <p className="text-sm text-muted-foreground">
                Vigilância 24/7 e melhoria contínua dos controles
              </p>
            </div>
          </div>
        </div>

        {/* Partnerships */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold mb-8">Parcerias e Tecnologias</h2>
          <div className="bg-card p-8 rounded-lg border border-border">
            <p className="text-muted-foreground mb-6">
              Trabalhamos com as principais tecnologias e mantemos parcerias estratégicas 
              com líderes do mercado de segurança cibernética.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <p className="text-sm font-medium">SIEM/SOAR</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <p className="text-sm font-medium">EDR/XDR</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <p className="text-sm font-medium">Threat Intelligence</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <p className="text-sm font-medium">Open Source</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-br from-primary/10 to-accent/10 p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Pronto para Proteger seu Negócio?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como nossa expertise pode 
            fortalecer a segurança da sua organização.
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
            Falar com Nossa Equipe
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;

