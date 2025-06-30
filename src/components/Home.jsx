import React from 'react';
import { Shield, AlertTriangle, Cloud, Users, Eye, EyeOff, Award, Monitor, Search, Zap } from 'lucide-react';
import heroImage from '../assets/gJELvKzDhyJi.jpg';
import threatImage from '../assets/Fs2oSIqLdHLr.jpg';
import cloudImage from '../assets/3kwacVO95EqZ.jpg';
import securityImage from '../assets/fsLwuozjfo0l.jpg';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Proteja seu negócio com 
                <span className="text-primary"> Quantum Shield</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Especialistas em segurança da informação oferecendo consultoria completa 
                em segurança ofensiva e defensiva, monitoramento de ameaças e compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  Solicitar Consultoria
                </button>
                <button className="border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-colors">
                  Saiba Mais
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Cybersecurity" 
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Riscos Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Riscos que Ameaçam seu Negócio
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Sistemas, sites e informações privativas de organizações estão constantemente 
              sujeitos a invasões através de brechas de segurança.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-background p-6 rounded-lg border border-border">
              <AlertTriangle className="h-12 w-12 text-destructive mb-4" />
              <h3 className="text-xl font-semibold mb-3">Malware e Ransomware</h3>
              <p className="text-muted-foreground">
                Softwares maliciosos que podem paralisar operações e exigir pagamento 
                de resgate para liberação dos dados.
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg border border-border">
              <Users className="h-12 w-12 text-destructive mb-4" />
              <h3 className="text-xl font-semibold mb-3">Phishing e Engenharia Social</h3>
              <p className="text-muted-foreground">
                Ataques que exploram o fator humano para obter credenciais e 
                informações confidenciais.
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg border border-border">
              <Shield className="h-12 w-12 text-destructive mb-4" />
              <h3 className="text-xl font-semibold mb-3">Vazamento de Dados</h3>
              <p className="text-muted-foreground">
                Exposição não autorizada de informações sensíveis que pode 
                resultar em multas e danos à reputação.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={threatImage} 
                alt="Cyber Threats" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Tecnologias Mais Vulneráveis</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Aplicações Web</h4>
                    <p className="text-muted-foreground">Vulnerabilidades em frameworks modernos como React, Angular e Vue.js</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">APIs e Microserviços</h4>
                    <p className="text-muted-foreground">Exposição de endpoints e falhas de autenticação</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Dispositivos IoT</h4>
                    <p className="text-muted-foreground">Segurança inadequada em dispositivos conectados</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold">Containers e Kubernetes</h4>
                    <p className="text-muted-foreground">Configurações inseguras em ambientes containerizados</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Security Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Computação em Nuvem é Segura?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Desmistificamos os principais mitos sobre segurança na nuvem e 
                apresentamos os fatos baseados em evidências.
              </p>

              <div className="space-y-6">
                <div className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-3 text-destructive">❌ Mito: A nuvem não é segura</h3>
                  <p className="text-muted-foreground">
                    <strong className="text-primary">✅ Fato:</strong> Provedores de nuvem investem bilhões em segurança, 
                    oferecendo proteção superior à maioria dos data centers locais.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-3 text-destructive">❌ Mito: Dados na nuvem são mais vulneráveis</h3>
                  <p className="text-muted-foreground">
                    <strong className="text-primary">✅ Fato:</strong> Criptografia avançada e controles de acesso 
                    rigorosos protegem dados na nuvem melhor que muitos sistemas locais.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold mb-3 text-destructive">❌ Mito: Perda de controle sobre os dados</h3>
                  <p className="text-muted-foreground">
                    <strong className="text-primary">✅ Fato:</strong> Ferramentas de governança e compliance 
                    oferecem controle granular sobre dados e acessos.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img 
                src={cloudImage} 
                alt="Cloud Security" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Attack Types Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Tipos de Abordagem de Invasão Mais Comuns
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Conheça as principais técnicas utilizadas por cibercriminosos para 
              comprometer sistemas e dados organizacionais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-background p-6 rounded-lg border border-border text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎣</span>
              </div>
              <h3 className="font-semibold mb-2">Phishing</h3>
              <p className="text-sm text-muted-foreground">Emails falsos para roubar credenciais</p>
            </div>

            <div className="bg-background p-6 rounded-lg border border-border text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="font-semibold mb-2">Ransomware</h3>
              <p className="text-sm text-muted-foreground">Sequestro de dados por resgate</p>
            </div>

            <div className="bg-background p-6 rounded-lg border border-border text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-semibold mb-2">DDoS</h3>
              <p className="text-sm text-muted-foreground">Sobrecarga de servidores</p>
            </div>

            <div className="bg-background p-6 rounded-lg border border-border text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🕳️</span>
              </div>
              <h3 className="font-semibold mb-2">Zero-Day</h3>
              <p className="text-sm text-muted-foreground">Exploração de vulnerabilidades desconhecidas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Threats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ameaças Atuais em Destaque
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Exemplos recentes de ataques cibernéticos que impactaram organizações 
              no Brasil e no mundo.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-lg border border-border">
              <h3 className="text-2xl font-bold mb-4">Stuxnet: A Primeira Arma Cibernética</h3>
              <p className="text-muted-foreground mb-4">
                O vírus Stuxnet, descoberto em 2010, foi considerado a primeira arma cibernética 
                da história. Desenvolvido para atacar sistemas de controle industrial, 
                especificamente as centrífugas de enriquecimento de urânio do Irã.
              </p>
              <div className="bg-background p-4 rounded border border-border">
                <h4 className="font-semibold mb-2">Impacto no Irã:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Destruição de aproximadamente 1.000 centrífugas</li>
                  <li>• Atraso significativo no programa nuclear iraniano</li>
                  <li>• Prejuízos estimados em bilhões de dólares</li>
                  <li>• Estabeleceu precedente para guerra cibernética</li>
                </ul>
              </div>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border">
              <h3 className="text-2xl font-bold mb-4">Ameaças Recentes no Brasil</h3>
              <div className="space-y-4">
                <div className="bg-background p-4 rounded border border-border">
                  <h4 className="font-semibold mb-2">Ataques a Órgãos Governamentais</h4>
                  <p className="text-sm text-muted-foreground">
                    Grupos de espionagem da China, Coreia do Norte e Rússia têm como alvo 
                    organizações governamentais brasileiras e setores estratégicos.
                  </p>
                </div>
                <div className="bg-background p-4 rounded border border-border">
                  <h4 className="font-semibold mb-2">Fraudes Bancárias</h4>
                  <p className="text-sm text-muted-foreground">
                    Mais de 36% dos brasileiros foram vítimas de fraudes bancárias em 2024, 
                    com destaque para clonagem de cartões.
                  </p>
                </div>
                <div className="bg-background p-4 rounded border border-border">
                  <h4 className="font-semibold mb-2">Ransomware Corporativo</h4>
                  <p className="text-sm text-muted-foreground">
                    Aumento de 40% em ataques de ransomware contra empresas brasileiras, 
                    causando milhões em prejuízos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LGPD Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Segurança da Informação, LGPD e Compliance
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A relação fundamental entre proteção de dados, conformidade regulatória 
              e segurança da informação.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-lg border border-border">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-4">LGPD (Lei Geral de Proteção de Dados)</h3>
              <p className="text-muted-foreground mb-4">
                A LGPD estabelece regras para coleta, armazenamento e tratamento de dados pessoais, 
                exigindo medidas técnicas e organizacionais de segurança.
              </p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Multas de até 2% do faturamento</li>
                <li>• Obrigatoriedade de DPO</li>
                <li>• Relatório de impacto</li>
                <li>• Notificação de incidentes</li>
              </ul>
            </div>

            <div className="bg-background p-8 rounded-lg border border-border">
              <Award className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-4">Compliance e Governança</h3>
              <p className="text-muted-foreground mb-4">
                Frameworks e normas internacionais que orientam a implementação 
                de controles de segurança eficazes.
              </p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• ISO 27001/27002</li>
                <li>• NIST Cybersecurity Framework</li>
                <li>• SOX, PCI-DSS</li>
                <li>• Auditoria e certificação</li>
              </ul>
            </div>

            <div className="bg-background p-8 rounded-lg border border-border">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-4">Impacto nos Negócios</h3>
              <p className="text-muted-foreground mb-4">
                A não conformidade pode resultar em consequências severas para 
                a organização e sua reputação no mercado.
              </p>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Perda de confiança dos clientes</li>
                <li>• Sanções regulatórias</li>
                <li>• Prejuízos financeiros</li>
                <li>• Vantagem competitiva</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Offensive vs Defensive Security */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Segurança Ofensiva vs Segurança Defensiva
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Duas abordagens complementares para uma proteção cibernética completa.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-card p-8 rounded-lg border border-border">
              <div className="flex items-center mb-6">
                <Eye className="h-8 w-8 text-destructive mr-3" />
                <h3 className="text-2xl font-bold">Segurança Ofensiva (Red Team)</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Simula ataques reais para identificar vulnerabilidades antes que 
                sejam exploradas por atacantes maliciosos.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Principais Atividades:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Penetration Testing</li>
                    <li>• Vulnerability Assessment</li>
                    <li>• Social Engineering Tests</li>
                    <li>• Red Team Exercises</li>
                    <li>• Bug Bounty Programs</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Casos de Uso:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Validação de controles de segurança</li>
                    <li>• Teste de resposta a incidentes</li>
                    <li>• Avaliação de maturidade de segurança</li>
                    <li>• Compliance e auditoria</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-card p-8 rounded-lg border border-border">
              <div className="flex items-center mb-6">
                <EyeOff className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold">Segurança Defensiva (Blue Team)</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Implementa e mantém controles de segurança para proteger, detectar 
                e responder a ameaças cibernéticas.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Principais Atividades:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• SIEM/SOAR Implementation</li>
                    <li>• Incident Response</li>
                    <li>• Threat Hunting</li>
                    <li>• Security Monitoring</li>
                    <li>• Forensics Analysis</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Casos de Uso:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Monitoramento 24/7</li>
                    <li>• Detecção de anomalias</li>
                    <li>• Resposta a incidentes</li>
                    <li>• Análise forense</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              O que Fazemos? Nossa Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Soluções completas em segurança da informação com as mais altas 
              certificações do mercado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-background p-6 rounded-lg border border-border">
              <Search className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Assessment Completo</h3>
              <p className="text-muted-foreground">
                Avaliação abrangente do ambiente tecnológico, identificando 
                vulnerabilidades e riscos de segurança.
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg border border-border">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Segurança Defensiva</h3>
              <p className="text-muted-foreground">
                Implementação de controles preventivos, detectivos e corretivos 
                para proteção contínua.
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg border border-border">
              <Monitor className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">SIEM e SOAR</h3>
              <p className="text-muted-foreground">
                Correlação de eventos de segurança e automação de resposta 
                a incidentes em tempo real.
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg border border-border">
              <Eye className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Segurança Ofensiva</h3>
              <p className="text-muted-foreground">
                Testes de penetração e simulação de ataques para validação 
                da postura de segurança.
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg border border-border">
              <Zap className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Monitoramento 24/7</h3>
              <p className="text-muted-foreground">
                SOC (Security Operations Center) com dashboards em tempo real 
                e gestão à vista.
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg border border-border">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Red Team & Blue Team</h3>
              <p className="text-muted-foreground">
                Exercícios de simulação de ataques e defesa para aprimoramento 
                contínuo da segurança.
              </p>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-background p-8 rounded-lg border border-border">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Nosso Diferencial</h3>
              <p className="text-muted-foreground">
                Profissionais com as mais altas certificações em segurança da informação
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold">CEH</h4>
                <p className="text-sm text-muted-foreground">Certified Ethical Hacker</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold">OSCP</h4>
                <p className="text-sm text-muted-foreground">Offensive Security Certified Professional</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold">CISSP</h4>
                <p className="text-sm text-muted-foreground">Certified Information Systems Security Professional</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-semibold">CISM</h4>
                <p className="text-sm text-muted-foreground">Certified Information Security Manager</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Proteja seu Negócio Hoje Mesmo
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Entre em contato conosco para uma avaliação gratuita de segurança 
            e descubra como podemos proteger sua organização.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Solicitar Avaliação Gratuita
            </button>
            <button className="border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/10 transition-colors">
              Falar com Especialista
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

