## Funcionalidades implementadas:

(1) Build a User Registration Form and User Authentication
Create a user registration form with fields for username, email, and password. Validate inputs and display appropriate error messages.

(2) Toggle A Modal
Create a modal that opens when users click the contact button.

(3) Toggle the style theme (Dark/Light)
Create a switch button that toggles the style theme of the platform

(5) Multi Screen Forms
A form divided into multiple screens or steps, each representing a distinct set of inputs or information.

(6) Todo List with Local Storage
Build a to-do list that allows users to add, edit, and remove tasks. Persist the tasks using local storage.

(7) Accordion Component
Design an accordion component that allows users to expand and collapse sections to view content.

(12) Infinite Scroll Gallery with Lazy Loading
Build an image gallery that loads more images as the user scrolls down the page. Implement lazy loading for improved performance.

## Deixei uma página com todos os links para as funcionalidades, está na página Home ('/') do projeto

## Decisões de design:
Está tudo dentro da pasta **src/**. Nela contém:
1. **assets/**: contém imagens.
2. **shared/**: esta pasta contém componentes, estilizações e contextos que são utilizados por mais de um componente.
3. **subdomains/**: nela contém cada pasta com o nome da sua funcionalidade. Dentro dela tem 3 pastas: 
- **Containers**: engloba a funcionalidade e é ela que é exportada para Routes.tsx. 
- **Interface**: representa a tela em si, ali é onde montei um resumo da aplicação.
- **Components**: são basicamente os componentes que estão dentro da aplicação. Detalhe: os SVGs estão criados como componentes também. Além disso, essa pasta pode conter helpers, types, contextos, themes, entre outras funcionalidades exclusivas da feature.

## Outras escolhas:
1. ESLint e Prettier para padronizar o código e organizá-lo.
2. Resolvi estilizar com Styled-Components. Usei também TypeScript porque é o que costumo usar normalmente.

### Para rodar localmente:
- **npm install**: para baixar as dependências do projeto.
- **npm run dev**: para rodar em desenvolvimento.
