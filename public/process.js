class Welcome extends React.Component {
    render() {
        return (
            <h1> vandung dn </h1>
        );
    }
}

ReactDOM.render(
    <div>
        <h1> hello world</h1>
        <h1> hello world 2</h1>
        <Welcome/>
    </div>,
    document.getElementById("root")
);