### Homework #87 Component.jsx
    Реалізуйте компонент, який являє собою дві кнопки та лог подій:

    Лог - це список значень, кожне з яких виходить після натискання однієї з двох кнопок. Знизу знаходяться старіші події, зверху нові.
    Ліва кнопка + додає в лог рядок з новим значенням рівним: значення «нового існуючого запису лога» + 1
    Права кнопка - додає в лог рядок з новим значенням рівним: значення «нового існуючого запису лога» - 1
    
    При натисканні на запис у лозі вона видаляється.
    
    Початковий HTML - layout.html
https://github.com/junjun-it-courses/react-hw/blob/master/task-10.1/layout.html
    
    <div>
      <div class="btn-group font-monospace" role="group">
        <button type="button" class="btn btn-outline-success">+</button>
        <button type="button" class="btn btn-outline-danger">-</button>
      </div>
    </div>
    
    Після натискання послідовності +, +, -, +: layout2.html
https://github.com/junjun-it-courses/react-hw/blob/master/task-10.1/layout2.html
    
         <div>
          <div class="btn-group font-monospace" role="group">
            <button type="button" class="btn btn-outline-success">+</button>
            <button type="button" class="btn btn-outline-danger">-</button>
          </div>
          <div class="list-group">
            <button type="button" class="list-group-item list-group-item-action">2</button>
            <button type="button" class="list-group-item list-group-item-action">1</button>
            <button type="button" class="list-group-item list-group-item-action">2</button>
            <button type="button" class="list-group-item list-group-item-action">1</button>
          </div>
        </div>   


    Кожне натискання кнопки додає в лог новий рядок зверху.