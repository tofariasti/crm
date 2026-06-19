# CRM Pro - Sistema de Gestão de Clientes

🚀 **CRM de alto impacto e conversão** com dashboard interativo, gráficos em tempo real e integração com WhatsApp.

[![Live Demo](https://img.shields.io/badge/demo-online-brightgreen)](https://tofariasti.github.io/crm/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## 🌐 Demo Online

👉 **[Acesse a demonstração ao vivo](https://tofariasti.github.io/crm/)**

## ✨ Características

### 🎨 Design & UX
- Interface moderna com tema dark elegante
- Animações grandiosas e micro-interações fluidas
- Efeitos de partículas em tempo real no background
- Transições suaves entre páginas e componentes
- Cards com efeitos hover 3D e sombras dinâmicas
- 100% responsivo - mobile, tablet e desktop

### 📊 Dashboard Interativo
- **4 métricas principais** com contadores animados
- **Gráfico de receita mensal** (linha) comparando período atual vs anterior
- **Funil de vendas** (barra horizontal) mostrando conversão em cada etapa
- **Conversão por canal** (rosca) com percentuais de origem dos leads
- **Timeline de atividades** recentes em tempo real

### 📈 Gráficos Profissionais
- Powered by **Chart.js 4.4.0**
- Gradientes coloridos e animações suaves
- Tooltips personalizados com formatação brasileira (R$)
- Responsivos e interativos
- Legendas e labels customizados

### 💬 Integração WhatsApp
- Botão flutuante (FAB) com animação pulsante
- Modal elegante com formulário completo
- Campos: Nome, Email, Telefone, Empresa, Horário, Mensagem
- Validação de formulário HTML5
- Mensagem pré-formatada enviada diretamente ao WhatsApp
- Notificação de sucesso após envio

### 🎭 Animações de Alto Impacto
- **Partículas flutuantes** no background
- **Contadores animados** com easing suave
- **Fade-up progressivo** nos elementos da página
- **Pulse animation** no botão WhatsApp e logo
- **Bounce animation** no badge de notificações
- **Ripple effect** nos botões ao clicar
- **Preloader** com spinner customizado

### 📱 Responsividade Total
Testado e otimizado para:
- 📱 **Mobile**: 320px, 375px, 425px
- 📱 **Tablet**: 768px, 1024px
- 💻 **Desktop**: 1440px, 1920px+

### ♿ Acessibilidade
- Atributos ARIA para navegação assistida
- Navegação por teclado completa
- Contraste de cores adequado (WCAG)
- Labels semânticos em formulários
- Focus states visíveis

## 🛠️ Tecnologias Utilizadas

### Front-end
- HTML5 semântico
- CSS3 moderno (Grid, Flexbox, Custom Properties)
- JavaScript ES6+ (Vanilla)

### Bibliotecas
- [Chart.js 4.4.0](https://www.chartjs.org/) - Gráficos interativos
- [Google Fonts - Inter](https://fonts.google.com/specimen/Inter) - Tipografia

### Metodologias
- BEM (Block Element Modifier) para nomenclatura CSS
- Mobile-first approach
- Progressive enhancement
- Graceful degradation

## 🎥 Vídeo Demonstrativo

[![Demonstração CRM Pro](https://img.shields.io/badge/▶️-Assistir_Vídeo_Demo-FF0000?style=for-the-badge&logo=youtube)](https://youtube.com/your-video-id)

**Vídeo completo mostrando:**
- Dashboard com métricas e gráficos em tempo real
- Gestão de leads com filtros e busca
- Pipeline visual de vendas
- Portfólio de clientes
- Relatórios e analytics
- Integração com WhatsApp
- Responsividade total

> 📹 *Vídeo em produção - em breve disponível!*
> 
> **Roteiro completo disponível em:** [`VIDEO_SCRIPT.md`](VIDEO_SCRIPT.md)

---

## 📸 Screenshots

### Desktop - Dashboard Completo
![Dashboard Desktop](screenshots/desktop-dashboard.png)

### Tablet - Visualização Responsiva
![Tablet View](screenshots/tablet-view.png)

### Mobile - Interface Móvel
![Mobile View](screenshots/mobile-view.png)

### Modal WhatsApp
![WhatsApp Modal](screenshots/whatsapp-modal.png)

### Gráficos Interativos
![Charts](screenshots/charts.png)

## 🚀 Como Usar

### Instalação Local

1. Clone o repositório:
```bash
git clone https://github.com/tofariasti/crm.git
cd crm
```

2. Abra o arquivo `index.html` no navegador ou use um servidor local:
```bash
# Python 3
python3 -m http.server 8000

# Node.js (http-server)
npx http-server

# PHP
php -S localhost:8000
```

3. Acesse `http://localhost:8000` no navegador

### Personalização

#### Alterar número do WhatsApp

Edite o arquivo `site/assets/js/main.js`:

```javascript
const phoneNumber = '5551989030405'; // Seu número com DDI + DDD
```

#### Customizar cores

Edite as variáveis CSS em `site/assets/css/style.css`:

```css
:root {
  --primary: #6366f1;
  --success: #10b981;
  --warning: #f59e0b;
  /* ... outras cores */
}
```

#### Modificar dados dos gráficos

Edite o arquivo `site/assets/js/charts.js` e ajuste os arrays de `data` e `labels`:

```javascript
datasets: [{
  data: [65000, 78000, 85000, 95000, 110000, 125000], // Seus dados
  labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun']  // Seus labels
}]
```

## 📁 Estrutura de Arquivos

```
crm/
├── index.html                    # Página principal com moldura iframe
├── assets/
│   ├── css/
│   │   └── preview.css           # Estilos da moldura de preview
│   └── js/
│       └── preview.js            # Scripts da moldura responsiva
├── site/                         # Aplicação CRM principal
│   ├── index.html                # Dashboard do CRM
│   ├── assets/
│   │   ├── css/
│   │   │   └── style.css         # Estilos principais (5KB+)
│   │   ├── js/
│   │   │   ├── main.js           # Lógica principal e WhatsApp
│   │   │   ├── animations.js     # Sistema de animações
│   │   │   └── charts.js         # Configuração dos gráficos
│   │   └── images/               # Imagens e ícones
├── screenshots/                  # Capturas de tela
└── README.md                     # Este arquivo
```

## 🎯 Features em Desenvolvimento

- [ ] Sistema de autenticação
- [ ] CRUD completo de clientes
- [ ] Gestão de pipeline de vendas
- [ ] Relatórios em PDF
- [ ] Integração com Google Calendar
- [ ] Notificações por email
- [ ] Dark/Light mode toggle
- [ ] Múltiplos idiomas (i18n)

## 📊 Métricas do Projeto

- ⚡ **Performance**: Lighthouse Score 95+
- 📦 **Tamanho total**: ~150KB (sem imagens)
- 🎨 **CSS**: ~40KB
- ⚙️ **JavaScript**: ~15KB
- 📱 **Mobile-ready**: 100%
- ♿ **Acessibilidade**: WCAG AA

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer fork do projeto
2. Criar uma branch (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abrir um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Tiago Oliveira de Farias**

- 🌐 Website: [fariasdigital.com.br](https://fariasdigital.com.br)
- 💼 GitHub: [@tofariasti](https://github.com/tofariasti)
- 📧 Email: contato@fariasdigital.com.br
- 💬 WhatsApp: [(51) 98903-0405](https://wa.me/5551989030405)

---

## 🎨 Inspiração de Design

Este projeto foi inspirado em:
- Modern dashboard patterns
- Glassmorphism UI trends
- Dark mode best practices
- Micro-interactions for better UX

## 🙏 Agradecimentos

- [Chart.js](https://www.chartjs.org/) pela excelente biblioteca de gráficos
- [Google Fonts](https://fonts.google.com/) pela fonte Inter
- Comunidade open source pelo suporte contínuo

---

<div align="center">
  
**⭐ Se este projeto foi útil, deixe uma estrela!**

Desenvolvido com ❤️ por [Tiago Farias](https://github.com/tofariasti)

[🌐 Ver Demo](https://tofariasti.github.io/crm/) • [🐛 Reportar Bug](https://github.com/tofariasti/crm/issues) • [✨ Solicitar Feature](https://github.com/tofariasti/crm/issues)

</div>
