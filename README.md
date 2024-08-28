# tecinfo2023E

Guia de Configuração e Uso do Projeto

Bem-vindo ao guia de configuração e uso deste projeto. Este tutorial irá te guiar através do processo de instalação do Git, configuração do GitHub e comandos básicos para clonar e gerenciar o repositório.
Índice

    Pré-requisitos
    Instalação do Git
    Configuração do Git
    Clonando o Repositório
    Usando o GitHub
    Comandos Básicos do Git
    Contribuindo
    Recursos Adicionais

Pré-requisitos

Antes de começar, você precisa ter:

    Uma conexão com a internet
    Acesso ao terminal ou prompt de comando
    Visual Studio instalado (opcional, mas recomendado para desenvolvimento)

Instalação do Git

    Baixar o Git:

    Vá até o site oficial do Git aqui e baixe a versão apropriada para o seu sistema operacional.

    Instalar o Git:

        Windows:
            Execute o arquivo de instalação que você baixou.
            Aceite os termos do contrato de licença.
            Escolha as opções de instalação padrão (recomendado para a maioria dos usuários).

        macOS:
            Abra o terminal e execute o comando: brew install git
            Se você não tiver o Homebrew instalado, você pode baixar o instalador do site oficial.

        Linux:
            Abra o terminal e execute o comando: sudo apt-get install git (para distribuições baseadas no Debian/Ubuntu).
            Para outras distribuições, use o gerenciador de pacotes apropriado.

Configuração do Git

Após instalar o Git, você precisa configurá-lo:

    Abra o terminal ou prompt de comando.

    Defina seu nome de usuário:

    COMANDO= git config --global user.name "Seu Nome"

    Defina seu e-mail:

    COMANDO= git config --global user.email "seuemail@example.com"

    (Opcional) Configure o editor de texto padrão:

    COMANDO= git config --global core.editor "code --wait"  # Para Visual Studio Code

Clonando o Repositório

Para clonar o repositório do GitHub para sua máquina local:

    Copie a URL do repositório do GitHub (você pode encontrá-la na página do repositório, clicando em "Code" e copiando o link HTTPS ou SSH).

    No terminal ou prompt de comando, execute o comando:

    COMANDO= git clone https://github.com/usuario/nome-do-repositorio.git

    Substitua https://github.com/usuario/nome-do-repositorio.git pela URL que você copiou.

    Navegue até o diretório do projeto:

    COMANDO= cd nome-do-repositorio

Usando o GitHub

    Fazer um Pull Request:
        Faça uma mudança no código.
        Faça um commit das suas alterações.
        Envie as alterações para o GitHub (git push).
        Crie um Pull Request no GitHub para que suas mudanças sejam revisadas e mescladas ao repositório principal.

    Verificar o Status do Repositório:

    COMANDO= git status

    Verificar o Histórico de Commits:

    COMANDO= git log

Comandos Básicos do Git

    Adicionar Arquivos ao Staging Area:

    COMANDO= git add arquivo.ext

    Fazer um Commit das Alterações:

    COMANDO= git commit -m "Mensagem do commit"

    Enviar Alterações para o Repositório Remoto:

    COMANDO= git push origin branch

    Puxar Alterações do Repositório Remoto:

    COMANDO= git pull origin branch


Recursos Adicionais

    Documentação Oficial do Git https://git-scm.com/doc
    Guia de Introdução ao GitHub https://docs.github.com/pt/get-started/start-your-journey/hello-world
    
