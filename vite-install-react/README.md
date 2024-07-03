### Homework #ДЗ 79 React Робота з колекціями
    Необхідно створити компонент Definitions.jsx який:
    Повертатиме наступну структуру — 

    <dl>
        <dt>one</dt>
        <dd>two</dd>
        <dt>another term</dt>
        <dd>another description</dd>
    </dl>

    <!-- Як працює тег dl-->
    
     <!--
     dl – тег, який використовується для створення списків визначень.
        Спільно із цим тегом використовується тег dt
        (містить назву визначення) та dd (опис визначення):
     -->
      
    <dl>
        <dt>Coffee</dt>
        <dd>Black hot drink</dd>
        <dt>Milk</dt>
        <dd>White cold drink</dd>
    </dl>
    

    Всі компоненти повинні бути класові
    Компонент приймає дані через пропс - дані лежать тут
    
    const definitions = [
    { dt: 'one', dd: 'two', id: 1 },
    { dt: 'another term', dd: 'another description', id: 2 },
    ];

    <DefinitionsList data={definitions} />;
    
    
    Необхідно прийняти їх у компоненті та відрендерити.
    Підключити компонент Definitions у App.js і відрендерити його
    
    P.S Не забувайте про пропс key