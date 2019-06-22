class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Visibility Toggle',
            visible: true
        }

        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visible: !prevState.visible
            }
        })
    }

    render() {
        return(
            <div>
                <h1>{this.state.title}</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visible ? "Hide" : "Show"}</button>
                { this.state.visible && <p>Toggled and shown</p>}
        </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('App'));



