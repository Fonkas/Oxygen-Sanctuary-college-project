# Oxygen Sanctuary

**Demo de exploração em primeira pessoa.** Num futuro em que a natureza quase desapareceu, os últimos ecossistemas sobrevivem dentro de cúpulas geodésicas no meio do deserto. O jogador explora o complexo, entra nas cúpulas e descobre a quem pertence o ar.

> *Quando a natureza deixa de pertencer a todos, quem decide quem merece respirar?*

---

## ▶ Jogar

| Forma | Como |
|---|---|
| **No navegador (sem instalar nada)** | Abre **(https://fonkas.github.io/Oxygen-Sanctuary-college-project/)** |
| **Windows** | Descarrega `Oxygen-Sanctuary-Instalador-Windows-x.y.z.exe` na página [Releases](../../releases) e instala. Há também uma versão **portátil** que não precisa de instalação. |
| **macOS** | Descarrega o `.dmg` na página [Releases](../../releases): `arm64` para Macs com chip Apple (M1, M2, M3, M4) e `x64` para Macs Intel. Arrasta a aplicação para *Aplicações*. |
| **A partir do código** | Descarrega o repositório e abre `web/index.html` no navegador, ou faz duplo clique em `Jogar-Windows.bat` / `Jogar-macOS.command`. |

> **macOS — primeira abertura:** como a aplicação não é assinada pela Apple, o sistema pode bloqueá-la. Clica com o botão direito na aplicação → **Abrir** → **Abrir**. Se aparecer "está danificada", abre o Terminal e corre:
> `xattr -cr "/Applications/Oxygen Sanctuary.app"`

> **Windows — primeira abertura:** se aparecer "O Windows protegeu o seu PC", clica em **Mais informações** → **Executar mesmo assim**.

## 🎮 Controlos

| Tecla | Ação |
|---|---|
| `W` `A` `S` `D` | Mover |
| Rato | Olhar em redor |
| `Shift` | Correr (a voar: descer) |
| `Espaço` | Saltar · **duas vezes** para voar ou aterrar |
| `E` | Interagir com portas, terminais e painéis |
| `Esc` | Pausa |
| `F11` | Ecrã inteiro (aplicação de ambiente de trabalho) |

## 🗂 Estrutura do repositório

```
oxygen-sanctuary/
├── web/
│   ├── index.html          ← o jogo completo (um único ficheiro)
│   └── vendor/             ← cópia local do motor 3D (criada automaticamente)
├── electron/main.js        ← janela da aplicação de ambiente de trabalho
├── scripts/fetch-vendor.mjs← descarrega o Three.js para funcionar sem internet
├── build/icon.png          ← ícone da aplicação
├── docs/                   ← documento de apoio à apresentação (PDF)
├── .github/workflows/
│   ├── pages.yml           ← publica o jogo no GitHub Pages
│   └── release.yml         ← cria os instaladores Windows e macOS
├── Jogar-Windows.bat       ← abre o jogo no navegador (Windows)
├── Jogar-macOS.command     ← abre o jogo no navegador (macOS)
└── package.json            ← configuração da aplicação e dos instaladores
```

## 🛠 Para quem quer desenvolver

Requisitos: [Node.js](https://nodejs.org) 20 ou superior.

```bash
npm install          # instala o Electron e o electron-builder
npm start            # abre o jogo numa janela de ambiente de trabalho
npm run dist:win     # cria o instalador Windows (em dist/)
npm run dist:mac     # cria o .dmg para macOS (tem de ser feito num Mac)
```

Os instaladores são criados automaticamente pelo GitHub sempre que é publicada uma *tag* de versão (por exemplo `v1.0.0`). Ver o separador **Actions**.

## 🧱 Tecnologia

- **Three.js r149** (WebGL) para o 3D, sem modelos externos: o mundo é gerado por código.
- **Web Audio API** para todo o som (vento, ventilação, água, pássaros, portas), também gerado por código.
- **Electron** para a aplicação de ambiente de trabalho e **electron-builder** para os instaladores.
- **GitHub Actions** e **GitHub Pages** para publicação automática.
- Assistente de IA (Claude) como apoio na programação.

## 📄 Documentação

O documento de apoio à apresentação está em [`docs/`](docs/).

---

Projeto académico.
