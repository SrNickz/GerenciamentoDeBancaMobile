# Segurança do Controle de Banca no GitHub Pages

Esta edição é um site estático. Nenhuma senha, token, conta ou backup pessoal deve ser publicado junto com o código.

## Proteções incluídas nesta atualização

- **Content Security Policy (CSP)** via meta tag nos arquivos `index.html` da versão web. Scripts só podem ser carregados da mesma origem (`script-src 'self'`), e plugins antigos (`object`) são bloqueados. CSS inline continua permitido porque o app usa estilos dinâmicos.
- **Backups importados** passam por checagem de tamanho, formato, arrays e dados básicos antes de serem aceitos. A validação é conservadora para não quebrar backups antigos, e não substitui uma auditoria profunda.
- **Avisos de stop** são inseridos com `textContent`, evitando interpretar as mensagens como HTML.
- **Sem credenciais** embutidas. O armazenamento permanece local (`localStorage`) e separado por origem/perfil do navegador.

## O que ainda precisa de atenção

1. O aplicativo possui diversos templates `innerHTML` e usa dados do navegador ou de backups: revise especialmente atributos e valores importados. A CSP reduz parte do impacto de scripts injetados, mas não prova ausência de XSS.
2. Não suba arquivos `.json` exportados com informações reais da sua banca. O arquivo `CONFIG_PADRAO_SEM_DADOS_PESSOAIS.json` contém apenas preferências e pode ser publicado.
3. Proteja o GitHub com **2FA**, mantenha os commits sob seu controle e verifique mudanças antes de publicá-las.
4. Verifique que seu Pages usa HTTPS. No endereço `github.io`, evite hospedar outros sites não confiáveis sob a mesma origem, pois recursos como `localStorage` são compartilhados entre caminhos.
5. O `localStorage` não é criptografado nem sincronizado; exporte backups para um local seguro.
6. No Mobile, o service worker armazena apenas arquivos estáticos e tem cache versionado para permitir atualizações; teste atualizações no celular para evitar código antigo em cache.

A CSP em `<meta>` não é equivalente a definir todos os cabeçalhos HTTP no servidor. O GitHub Pages não oferece livre configuração de headers HTTP personalizados em hospedagem por branch.
