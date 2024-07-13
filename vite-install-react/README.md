### Homework # 80 Progress.jsx

    Реалізуйте та експортуйте за замовчуванням компонент Progress, 
    який приймає властивість відсотка та малює статичний прогрес бар.

    Використання – 
    
    <Progress percentage={40} />;    

    Результат - 
    <div class="progress">
        <div class="progress-bar" 
                role="progressbar" 
                aria-valuenow="40" 
                aria-valuemin="0" 
                aria-valuemax="100" 
                aria-label="progressbar" 
                style="width: 40%;">
        </div>
    </div>

    Стиль width – обчислюється динамічно
    Атрибут aria-valuenow – динамічно обчислюється
    
    Підказки
    
    Progress
    https://getbootstrap.com/docs/5.1/components/progress/