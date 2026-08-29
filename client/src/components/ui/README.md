# Catálogo de componentes reutilizáveis

Os componentes deste diretório são independentes do conteúdo de Márcio Calisto e podem compor outros produtos ou interfaces. Todos expõem uma API tipada e usam as variáveis visuais globais, permitindo adaptação por classe sem alterar sua lógica.

| Componente       | Finalidade                                                              | Props principais                           |
| ---------------- | ----------------------------------------------------------------------- | ------------------------------------------ |
| `GlassPanel`     | Cria superfícies translúcidas com borda e brilho controlados.           | `children`, `hoverable`, `className`       |
| `GradientButton` | Fornece links de ação nas variantes primária, secundária e discreta.    | `href`, `variant`, `showArrow`, `children` |
| `SectionHeading` | Padroniza rótulo, título e descrição de blocos editoriais.              | `eyebrow`, `title`, `description`, `align` |
| `ScrollReveal`   | Aplica entrada ao entrar no viewport, respeitando redução de movimento. | `children`, `delay`, `className`           |
| `GlowIcon`       | Enquadra ícones Lucide em uma assinatura de brilho sutil.               | `icon`, `tone`, `className`                |
