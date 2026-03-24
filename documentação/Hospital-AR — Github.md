# 📄 Hospital-AR — Github
### 🏁 Controle de Sprints — Hospital-AR

Este documento define o fluxo de desenvolvimento do projeto utilizando **Git + Sprints**, seguindo boas práticas de versionamento utilizadas em ambientes profissionais.

---

## 📌 Estrutura de Branches

O projeto utiliza o seguinte padrão:


    main → versão estável (produção)
    sprint-1 → desenvolvimento da Sprint 1
    sprint-2 → desenvolvimento da Sprint 2
    sprint-n → futuras sprints


---

## 🚀 Fluxo de Trabalho

### 🔹 1. Iniciar nova Sprint

Sempre partindo da branch `main`:

```bash
git checkout main
git pull origin main
git checkout -b sprint-2
🔹 2. Enviar a branch para o GitHub
git push -u origin sprint-2
🔹 3. Trabalhar na Sprint

Durante o desenvolvimento:

git add .
git commit -m "feat: adiciona autenticação JWT"
git push
🔹 4. Finalizar Sprint

Ao concluir:

git checkout main
git merge sprint-2
git push
🔹 5. (Opcional - recomendado)

Criar Pull Request no GitHub:

Base: main
Compare: sprint-2
```
### 🧠 Padrão de Commits

Utilizar padrão semântico:

    feat: nova funcionalidade
    fix: correção de bug
    docs: documentação
    refactor: melhoria de código
    chore: tarefas internas
----

### 👨‍💻 Autor

    Felipe Silva Costa
