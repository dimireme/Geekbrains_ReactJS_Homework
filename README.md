# Geekbrains_ReactJS_Homework
Домашняя работа по курсу React.JS с сайта <a href="https://geekbrains.ru">geekbrains.ru</a>.

## 1. Введение в React JS

Каждая задача выполнена в отдельном файле. Чтобы проверить работоспособность кода, раскомментируйте соответствующую строчку в файле **index.html**. Результат выводится в DOM или в консоль браузера.

## 2. Webpack

Установлен сборщик приложения webpack. С его помощью реализовано приложение с модульной архитектурой.

Приложение создает элемент класса developer и выводит информацию о нём на страницу с помощью отдельного модуля renderer. Так же модуль renderer навешивает событие onClick на созданный элемент страницы. 

## 3. Первое приложение на React

Реализован шаблон главной страницы блога в стиле react. Компонент Layout задаёт структуру страниц.

### Структура шаблона
 Дерево шаблона Layout изображенол ниже. С заглавной буквы написаны реализованные компоненты.

    |-- Header
    |    |-- .logo
    |    |-- Menu
    |    |-- Login
    |
    |-- .main-container
    |    |-- AsideMenu
    |    |-- Main
    |
    |-- Footer

### Использование шаблона
1. Скачайте папку components и подключите шаблон командой

 `import Layout from './components/layout';`

2. Шаблон использует стили **bootstrap 3**, поэтому их нужно подключить в выходном файле index.html.

`<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">`

## 4. Взаимодействия в React.JS
## 5. Всплытие событий onClick к родительскому компоненту.

### Что нового?
1. Обновлен компонент Header, теперь работает без ошибок.
2. В тело сайта выведен список покемонов, загружаемый с www.pokeapi.co
3. Добавлен функционал, подгружабющий дополнительную информацию о покемоне.

### Где посмотреть?
На страничке проекта https://dimireme.github.io/Geekbrains_ReactJS_Homework/
