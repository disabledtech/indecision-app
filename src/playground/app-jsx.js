console.log("App.js is running");

// JSX is JavaScript XML

const app = {
    title: "Indecision App",
    subtitle: "A Todo App",
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
}

const removeAll = () => {
    if (app.options.length > 0) {
        app.options = [];
        renderApp();
    }
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];

    alert(option);
};


const appRoot = document.getElementById('App');

const renderApp = () => {

    const numbers = [1, 3 , 4];

    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are your options" : "There are no options."}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={removeAll}>Remove all</button>
            <ol>
                {
                    app.options.map((item) => {
                        return <li key={item}>{item}</li>;
                    })
                }
            </ol>
    
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

renderApp();