# Домашнее задание по курсу ReactJS с сайта <a href="https://geekbrains.ru">Geekbrains.ru</a>

Данное приложение использует api сайта https://www.pokeapi.co/api/v2, который отдает информацию о покемонах в формате JSON.

При первом запуске появляется всплывающее окно с одним покемоном, который отображается в шапке сайта. На главной странице выводится короткая информация о нескольких покемонах.

По клику на ссылку детальной информации, подгружаются дополнительные данные. По клику на иконку покемона происходит переход на новую страницу с более подробной информацией о покемоне.

## 1. Как запустить

1. Склонируйте репозиторий.
2. В корневой папке проекта откройте два терминала.
3. В одном терминале запустите NodeJS сервер
```code
node src/server/index.js
```
4. В другом терминале запустите проект на локальной машине
```code
npm run start
```
5. Проект будет доаступен по адресу http://localhost:9000/

Или запустите скомпилированный файл
```code
src\client\public\index.html
```
Но в этом случае роуты в приложении не будут работать и на главной странице информация не появится. Поэтому проект был переписан в отдельной ветке без роутов и без серверной части. Так же убран переход на новую страницу с детальной информацией о покемоне.

Итоговый результат можно посмотреть <a href="https://dimireme.github.io/Geekbrains_ReactJS_Homework/">на страничке проекта</a>.

## 2. Что есть на серверной части проекта

Серверная часть написана на node.js с помощью фреймворка _express_ и базы данных mongodb.

### База данных mongodb
Сервер из БД с помощью плагина _mongoose_ извлекает данные о списке покемонов и их короткую детальную информацию и отдаёт на клиентскую часть в JSON формате.

### Запуск сервера
Из домашней директории проекта набрите команду
```code
    node src/server/index.js
```
Сервер доступен по адресу http://localhost:3000.

### API
http://localhost:3000/pokemons - возвращает список покемонов
```code
name:   { type: String },
url:    { type: String }
```
http://localhost:3000/pokemons/:id - возвращает короткую детальную информацию о покемоне.
```code
name:            { type: String },
weight:          { type: Number },
height:          { type: Number },
id:              { type: Number },
base_experience: { type: Number }
```

### Интеграция с клиентской частью
По API локального сервера клиентское приложение извлекает данные только для списка покемонов на главной странице и их короткую детальную информацию.

Данные для покемона во всплывающем окне (из хедера) и данные с полной детальной информацией на персональной странице покемона, парсятся с сайта https://www.pokeapi.co/api/v2/.

## 3. Что есть на клиентской части проекта
Клиентская часть написана с помощью сборщика проектов webpack и интерпретатора babel. Это позволило сделать архитектуру проекта модульной.

### React redux
Часть приложения исполюзует архитектурный подход redux, написаный с помощью модулей _redux_ и _react-redux_. На главной странице данные списка покемонов находится не в state компонент, а в глобальном store. Информация о покемоне на отдельной странице и в шапке сайта (всплывающее окно) хранится в state компонент. Это вносит диссонанс в стилистику приложения, но в последствии послужит примером для приложений, написанных не по шаблону react redux.

Реализован редьюссер _pokemons.js_, обрабатывающий события _начало загрузки_, _успешная загрузка_ и _ошибка при загрузке_ для всего списка покемонов и для короткой детальной информации о них. Так же в этом редьюссере обрабатывается событие _скрыть детальную информацию_. Короткая детальная информация подгружается с сервера и сохраняется в глобальном store.

### Взаимодействия в react
В компонентах _PokemonContainer.jsx_ и _EventLink.jsx_ реализовано всплытие событий onClick к родительскому компоненту (события showDetails и hideDetails).

### Роутинг в react
С помощью модуля _react-router-dom_ реализован редирект к персональной странице покемона. Ссылка на страницу находится в шапке описания покемона. На персональной странице покемона доступна более подробная информация о нем.

### Применение стилей
Приложение использует как собственные стили, написанные в отдельных .css файлах, так и модули и стили Bootstrap 3. Стили bootstrap подключаются с помощью модуля _reactstrap_. В компоненте `Header.jsx` можно видеть пример использования локальных стилей и стилей bootstrap:
```javascript
...
import { Nav, Navbar, NavbarBrand, NavLink } from 'reactstrap';
import style from './header.css';
...
<Navbar className={`${style.container} navbar-dark bg-dark`}>
    ...
</Navbar>
```
Здесь Navbar - компонент bootstrap; navbar-dark и bg-dark - стили bootstrap; style.container - локальные стили компонента.

Модуль _css-loader_ позволяет работать с файлами стилей как с модулями. Имена локальных стилей заменяются по шаблону, который задается в файлах конфигурации. Имена стилей bootstrap не подменяются (разные правила для загрузчика стилей _css-loader_).

Модуль _mini-css-extract-plugin_ собирает стили в один файл, чтобы стили были не инлайновые. Имя файла задается в конструкторе при объявлении плагина в файле конфигурации. Собранный файл подключается к выходному .html с помощью плагина _html-webpack-plugin_.

Данная связка сборщиков .css файлов (_mini-css-extract-plugin_ и _html-webpack-plugin_) используется только при финальном билде проекта (npm run build). В процессе разработки (npm run start) стили импортируются модулем _css-loader_ в header выходного файла. Это немного ускоряет процесс разработки.

### Development & Production

Была сделана попытка разделить процесс разработки от финальной компиляции проекта. Написано три различных файла конфигурации webpack: _webpack.prod.js_, _webpack.dev.js_ и общий файл _webpack.common.js_, который объединяется с первыми двумя с помощью модуля _webpack-merge_.

В процессе разработки использовался модуль _webpack-dev-server_, запускающий приложение по адресу http://localhost:9000.

## 4. Недостатки приложения
- В данном проекте не использовались автоматические тесты.
- Не реализована пагинация для списка покемонов на главной странице.
- Ссылки в шапке приложения никуда не ведут.

