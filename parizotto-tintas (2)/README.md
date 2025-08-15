# Parizotto Tintas - E-commerce

Site de vendas online para a Parizotto Tintas, especializada em tintas, vernizes e materiais para construção.

## 🚀 Funcionalidades

- **Homepage** com hero section e preview de categorias
- **Catálogo de produtos** com filtros avançados e busca
- **Sistema de carrinho** com persistência no localStorage
- **Páginas de produto** individuais com galeria e especificações
- **Processo de checkout** completo com múltiplas formas de pagamento
- **Design responsivo** otimizado para mobile e desktop

## 🛠️ Tecnologias

- **Next.js 15** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS v4** - Estilização
- **Radix UI** - Componentes acessíveis
- **Lucide React** - Ícones
- **Context API** - Gerenciamento de estado do carrinho

## 📦 Instalação

1. Clone ou extraia o projeto
2. Instale as dependências:
\`\`\`bash
npm install
\`\`\`

3. Execute o servidor de desenvolvimento:
\`\`\`bash
npm run dev
\`\`\`

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador

## 🏗️ Estrutura do Projeto

\`\`\`
parizotto-tintas/
├── app/                    # App Router do Next.js
│   ├── carrinho/          # Página do carrinho
│   ├── catalogo/          # Catálogo de produtos
│   ├── checkout/          # Processo de checkout
│   ├── pedido-confirmado/ # Confirmação de pedido
│   ├── produto/[id]/      # Páginas dinâmicas de produto
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Homepage
├── components/            # Componentes React
│   ├── ui/               # Componentes base (shadcn/ui)
│   ├── cart-drawer.tsx   # Drawer do carrinho
│   ├── footer.tsx        # Rodapé
│   ├── header.tsx        # Cabeçalho
│   ├── product-*.tsx     # Componentes de produto
│   └── ...
├── contexts/             # Context API
│   └── cart-context.tsx  # Contexto do carrinho
├── lib/                  # Utilitários
│   ├── products.ts       # Dados dos produtos
│   └── utils.ts          # Funções utilitárias
├── public/               # Arquivos estáticos
│   ├── logo-parizotto.png
│   └── ...
└── hooks/                # Custom hooks
    └── ...
\`\`\`

## 🎨 Design System

- **Cores primárias**: Vermelho (#dc2626) e Laranja (#f59e0b)
- **Tipografia**: Playfair Display (títulos) e Source Sans Pro (textos)
- **Componentes**: Baseados no shadcn/ui com customizações da marca

## 📱 Páginas

- `/` - Homepage com hero e categorias
- `/catalogo` - Catálogo completo com filtros
- `/produto/[id]` - Detalhes do produto
- `/carrinho` - Carrinho de compras
- `/checkout` - Finalização da compra
- `/pedido-confirmado` - Confirmação do pedido

## 🛒 Funcionalidades do Carrinho

- Adicionar/remover produtos
- Alterar quantidades
- Cálculo automático de frete grátis (acima de R$ 200)
- Persistência entre sessões
- Drawer lateral para visualização rápida

## 🚀 Deploy

Para fazer o deploy em produção:

\`\`\`bash
npm run build
npm start
\`\`\`

Ou faça deploy na Vercel clicando no botão "Deploy" na interface do v0.

## 📞 Suporte

Para dúvidas ou suporte, entre em contato através do site ou redes sociais da Parizotto Tintas.
