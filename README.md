# Márcio Calisto — Software Engineer

Landing page one-page em português brasileiro para apresentar serviços de sistemas, web, automações e IA, com foco em conversão. A experiência usa tema exclusivamente escuro, superfícies em vidro, gradientes roxo neon/azul-ciano e um terminal de automação como elemento de assinatura.

## Stack atual

O projeto usa o template full-stack gerenciado com React 19, TypeScript, Vite, Tailwind CSS 4, Express, tRPC, Framer Motion, Drizzle ORM e Vitest. O servidor expõe o procedimento público `contact.send`, com validação Zod, honeypot, rate limit simples e registro dos contatos na tabela `contacts`.

A camada de e-mail é opcional. Quando as variáveis do Resend não estão preenchidas, o contato continua sendo salvo como `pending` e a interface informa honestamente que o envio por e-mail ainda aguarda configuração. Nenhuma credencial é enviada ao navegador.

## Rodar localmente

```bash
pnpm install
pnpm dev
```

Para verificar o projeto antes de publicar:

```bash
pnpm check
pnpm test
pnpm build
```

O endereço local é informado pelo servidor de desenvolvimento gerenciado. Não fixe a porta em código de aplicação.

## Estrutura relevante

| Caminho                           | Responsabilidade                                                  |
| --------------------------------- | ----------------------------------------------------------------- |
| `client/src/components/ui/`       | Primitives genéricas com JSDoc e catálogo de reuso.               |
| `client/src/components/sections/` | Composições específicas desta landing page.                       |
| `client/src/lib/data/`            | Conteúdo tipado de serviços, cases e stack.                       |
| `client/src/lib/site.ts`          | Contatos, Instagram, navegação e URLs de WhatsApp.                |
| `server/contact.ts`               | Validação, honeypot, rate limit e integração opcional com Resend. |
| `server/routers.ts`               | Contrato tRPC do formulário.                                      |
| `drizzle/schema.ts`               | Modelos `users` e `contacts`.                                     |
| `client/public/robots.txt`        | Instrução básica para rastreadores.                               |
| `client/public/sitemap.xml`       | Sitemap com domínio placeholder.                                  |

## Variáveis de ambiente

Preencha no painel de Secrets do projeto quando quiser ativar o envio real por e-mail:

| Variável             | Obrigatória para e-mail? | Uso                                 |
| -------------------- | ------------------------ | ----------------------------------- |
| `RESEND_API_KEY`     | Sim                      | Chave server-side da API do Resend. |
| `CONTACT_TO_EMAIL`   | Sim                      | Caixa que recebe os contatos.       |
| `CONTACT_FROM_EMAIL` | Sim                      | Remetente verificado no Resend.     |

O formulário pode ser desenvolvido e testado sem essas variáveis. Para habilitar o envio, crie uma API key no Resend, verifique o domínio remetente e preencha os três valores no painel do projeto. Não coloque valores em arquivos versionados nem no código do navegador.

## Deploy e domínio

Crie um checkpoint pelo painel do projeto e use o botão **Publish**. Para usar domínio próprio, aponte o domínio ao endereço informado pelo hosting e mantenha o proxy/CDN do Cloudflare conforme a configuração de DNS recomendada pelo provedor. Antes de publicar, substitua o domínio placeholder em `client/index.html`, `client/public/robots.txt` e `client/public/sitemap.xml`.

## Conteúdo editável

Os dados dos serviços e dos três cases estão separados dos componentes. Consulte `EDITAR.md` para a lista consolidada de textos, contatos, foto, domínio e cases reais que precisam ser revisados antes da publicação.

## Notas de manutenção

A página foi estruturada para receber rotas internas no futuro, por exemplo uma página de estudo de caso baseada no `id` do arquivo `client/src/lib/data/projects.ts`. O catálogo em `client/src/components/ui/README.md` descreve as peças que podem ser reaproveitadas em outros projetos.
