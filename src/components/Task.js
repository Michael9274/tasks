import React from 'react';

let input;
let buttonNext;
let buttonPrev;

const lockNext = (stageTask,nameTask) => {
    buttonNext.disabled = stageTask === 3;
    buttonNext.dataset.task = nameTask.split(' ').pop();
}

const unlockPrev = (stageTask,nameTask) => {
    buttonPrev.disabled = stageTask === 0;
    buttonPrev.dataset.task = nameTask.split(' ').pop();
}

const assignNameInputTask = nameTask => {
    input.value = nameTask;
}

const taskNameToId = name => {
  return `task-${name}`;
}


const Task = ({ name,stage,handleNext,handlePrev }) => {

    const handleClick = () => {
        input = document.getElementById('inputTask');
        buttonNext = document.getElementById('buttonNext');
        buttonPrev = document.getElementById('buttonPrev');

        assignNameInputTask(name);
        lockNext(stage,name,handleNext);
        unlockPrev(stage,name,handlePrev);

        buttonNext.onclick = handleNext;
        buttonPrev.onclick = handlePrev;
    }

    return (
        <div
          style={{
            padding: '1rem',
            border: '1px solid #ccc',
            margin: '1rem 1rem 0 1rem' }}
          data-testid={taskNameToId(name)}
          onClick={handleClick}
        >
          {name}
        </div>
    );
}

export default Task;
